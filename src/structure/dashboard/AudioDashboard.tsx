import React, { useEffect, useRef, useState, useCallback } from 'react';
import {useNavigate} from "react-router-dom"
import "../../assets/css/dashboard_css/Audio_Dashboard.css";


import play from "../../assets/images/icons/icons8-play.svg";
import pasue from "../../assets/images/icons/icons8-pause.svg";
import repeat from "../../assets/images/icons/icons8-replay.svg";
import shuffle from "../../assets/images/icons/icons8-shuffle.svg";
import skip from '../../assets/images/icons/icons8-fast-forward.svg';
import musicIcon from "../../assets/images/icons/icons8-music (1).svg";
import close from "../../assets/images/icons/icons8-x.svg";
import backbutton from "../../assets/images/icons/icons8-arrow.svg";
import topmenu from "../../assets/images/icons/icons8-top-menu.svg";

// Streaming services
import amazonMusic from "../../assets/images/logos/streaming_services_logos/Amazon_Music_(Logo).svg"
import deezer from "../../assets/images/logos/streaming_services_logos/Deezer_logo,_2023.svg"
import iheart from "../../assets/images/logos/streaming_services_logos/IHeartRadio_logo.svg"
import liveOne from "../../assets/images/logos/streaming_services_logos/LVO_BIG.svg"
import murfie from "../../assets/images/logos/streaming_services_logos/murfie-magenta-logo.png"
import pandora from "../../assets/images/logos/streaming_services_logos/Pandora_wordmark.svg"
import siriusXM from "../../assets/images/logos/streaming_services_logos/Sirius_XM_logo_2023.svg"
import soundMachine from "../../assets/images/logos/streaming_services_logos/idM17aNGAN_logos.svg"
import spotify from "../../assets/images/logos/streaming_services_logos/2024_Spotify_Logo.svg"
import tidal from "../../assets/images/logos/streaming_services_logos/tidal.svg"
import tuneIn from "../../assets/images/logos/streaming_services_logos/TuneIn_Logo_2018.svg"






interface StatusState {
  title?: string;
  artist?: string;
  album?: string;
  position?: number;
  duration?: number;
  playState?: string;
  shuffle?: boolean;
  repeat?: boolean;
  albumArtUrl?: string;
  volume?: number;
  source?: string;
  mute?: string;
}

interface BrowseItem {
  guid: string;
  name: string;
  hasChildren: boolean;
  button?: string;
  action?: string;
}

const MediaServerWebSocket: React.FC = () => {

  //change these based on information 
  const serverUrl = 'ws://192.168.1.164:5004'; 
  const url = "http://192.168.1.164";

  const socketRef = useRef<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const [currentStatus, setCurrentStatus] = useState<StatusState>({});
  const [browseItems, setBrowseItems] = useState<BrowseItem[] | null>(null);
  const [currentBrowseCaption, setCurrentBrowseCaption] = useState<string>('');
  const [seekPosition, setSeekPosition] = useState<number>(0);
  const [canGoBack, setCanGoBack] = useState<boolean>(false);
  const [isBrowseMenuVisible, setIsBrowseMenuVisible] = useState<boolean>(false);
  const [isAtTopMenu, setIsAtTopMenu] = useState<boolean>(true);

  // Search-related states
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inputBoxGuid, setInputBoxGuid] = useState<string | null>(null);
  const [inputBoxPrompt, setInputBoxPrompt] = useState<string>('Enter your search query:');

  // Loading message states for UI=MessageBox
  const [loadingGuid, setLoadingGuid] = useState<string | null>(null);

  // Question prompt states for UI=MessageBox questions
  const [questionMessage, setQuestionMessage] = useState<string>('');
  const [questionGuid, setQuestionGuid] = useState<string | null>(null);

  // 1) UseCallback for a stable WebSocket connect function
  const connectWebSocket = useCallback(() => {
    console.log("[WebSocket] Attempting connection to:", serverUrl);
    socketRef.current = new WebSocket(serverUrl);

    socketRef.current.onopen = () => {
      console.log("[WebSocket] Connection opened");
      setIsConnected(true);
      sendCommand('GetStatus');
    
      //sendCommand("SubscribeEvents true")

     
     
      
    };

    socketRef.current.onmessage = (event) => {
      handleServerMessage(event.data);
    };

    socketRef.current.onclose = () => {
      console.log("[WebSocket] Connection closed");
      setIsConnected(false);
      // Try to reconnect after 500ms:
      setTimeout(() => connectWebSocket(), 500);
    };

    socketRef.current.onerror = (error) => {
      console.log("[WebSocket] Error occurred:", error);
    };
  }, [serverUrl]);

  // 2) sendCommand with useCallback
  const sendCommand = useCallback((command: string) => {
    console.log("[sendCommand] Attempting to send:", command);
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(command + '\r\n');
    } else {
      console.log("[sendCommand] WebSocket not open. Cannot send:", command);
    }
  }, []);

  useEffect(() => {
    connectWebSocket();
    return () => {
      if (socketRef.current) socketRef.current.close();
    };
  }, [connectWebSocket]);

  // 3) Single helper for repeated fetch calls
  const doScriptCommand = useCallback(async (scriptName: string) => {
    const endpoint = `${url}/api/Script/${scriptName}/`;
    console.log("[doScriptCommand] Fetching:", endpoint);
    try {
      await fetch(endpoint);
    } catch (error) {
      console.log("[doScriptCommand] Error with fetch command:", error);
    }
  }, [url]);

  const parseTextPickList = useCallback((message: string) => {
    console.log("[parseTextPickList] Raw message:", message);
    const lines = message.split('\n').map(line => line.trim()).filter(Boolean);
    const beginLine = lines.find(line => line.startsWith('BeginPickList'));
    if (!beginLine) return;

    const captionMatch = beginLine.match(/Caption="([^"]+)"/);
    const caption = captionMatch ? captionMatch[1] : 'Menu';

    const items: Array<{ guid: string; name: string; hasChildren: boolean }> = [];
    const itemRegex = /^PickListItem\s+\{([0-9a-fA-F-]+)\}\s+"([^"]+)"\s+(\d)\s+(\d)\s+/;

    for (const line of lines) {
      if (line.startsWith('PickListItem')) {
        const match = line.match(itemRegex);
        if (match) {
          const rawGuid = match[1];
          const name = match[2];
          const hasChildren = match[3] === '1';
          const guidWithBraces = `{${rawGuid}}`;
          items.push({ guid: guidWithBraces, name, hasChildren });
        }
      }
    }

    // **Filter out "Create a Pandora station..." and "Now Playing Queue"**
    const filteredItems = items.filter(
      item => 
        item.name !== "Create a Pandora station..." && 
        item.name !== "Now Playing Queue"
    );

    setCurrentBrowseCaption(caption);
    setBrowseItems(filteredItems);
    setIsAtTopMenu(caption === "Home Menu");
  }, []);

  const parseBrowseMenu = useCallback((message: string) => {
    console.log("[parseBrowseMenu] Raw message:", message);
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(message, 'text/xml');
    const parserError = xmlDoc.getElementsByTagName('parsererror')[0];
    if (parserError) {
      console.log("[parseBrowseMenu] XML parse error:", parserError);
      return;
    }

    const pickListNode = xmlDoc.getElementsByTagName('PickList')[0];
    const radioSources = xmlDoc.getElementsByTagName('RadioSources')[0];
    let caption = 'Menu';

    if (pickListNode) {
      caption = pickListNode.getAttribute('caption') || 'Menu';
    } else if (radioSources) {
      caption = radioSources.getAttribute('caption') || 'Menu';
    }

    const pickItems = pickListNode ? pickListNode.getElementsByTagName('PickItem') : [];
    const radioSourceItems = radioSources ? radioSources.getElementsByTagName('RadioSource') : [];

    const items: Array<BrowseItem> = [];

    for (let i = 0; i < pickItems.length; i++) {
      const item = pickItems[i];
      const guid = item.getAttribute('guid') || '';
      const name = item.getAttribute('name') || '';
      const hasChildren = item.getAttribute('hasChildren') === '1';
      const button = item.getAttribute('button') || undefined;
      const action = item.getAttribute('action') || undefined;
      const guidWithBraces = guid.startsWith('{') ? guid : `{${guid}}`;
      items.push({ guid: guidWithBraces, name, hasChildren, button, action });
    }

    for (let i = 0; i < radioSourceItems.length; i++) {
      const source = radioSourceItems[i];
      const guid = source.getAttribute('guid') || '';
      const name = source.getAttribute('name') || '';
      const guidWithBraces = guid.startsWith('{') ? guid : `{${guid}}`;
      items.push({ guid: guidWithBraces, name, hasChildren: true });
    }

    // **Filter out "Create a Pandora station..." and "Now Playing Queue"**
    const filteredItems = items.filter(
      item => 
        item.name !== "Create a Pandora station..." && 
        item.name !== "Now Playing Queue"
    );

    setCurrentBrowseCaption(caption);
    setBrowseItems(filteredItems);
    setIsAtTopMenu(caption === "Home Menu");
  }, []);

  // 4) parseStatusMessage
  const parseStatusMessage = useCallback((message: string) => {
    if (!message.includes('ReportState')) return;
    const parsedData: Record<string, string> = {};
    const lines = message.split('\n');

    for (const line of lines) {
      const match = line.match(/ReportState Player_A (\w+)=([\s\S]*)/);
      if (match) {
        parsedData[match[1].trim()] = match[2].trim();
      }
    }

    const baseWebUrl = parsedData['BaseWebUrl']; 
    const nowPlayingGuid = parsedData['NowPlayingGuid'];
    let albumArtUrl = '';

    if (baseWebUrl && nowPlayingGuid) {
      albumArtUrl = `${baseWebUrl}getart?guid=${nowPlayingGuid}&_=${Date.now()}`;
    } else if (parsedData['MediaGuid']) {
      albumArtUrl = `${url}/getart?guid=${parsedData['MediaGuid']}&_=${Date.now()}`;
    }

    const volume = parsedData['Volume'] ? parseInt(parsedData['Volume']) : currentStatus.volume;
    const backAvailable = parsedData['Back'] === 'True';
    const newStatus: StatusState = {
      title: parsedData['TrackName'] || currentStatus.title,
      artist: parsedData['ArtistName'] || currentStatus.artist,
      album: parsedData['MediaName'] || currentStatus.album,
      position: parsedData['TrackTime'] ? parseInt(parsedData['TrackTime']) : currentStatus.position,
      duration: parsedData['TrackDuration'] ? parseInt(parsedData['TrackDuration']) : currentStatus.duration,
      playState: parsedData['PlayState'] || currentStatus.playState,
      shuffle: parsedData['Shuffle'] === 'True',
      repeat: parsedData['Repeat'] === 'True',
      albumArtUrl: albumArtUrl,
      volume: volume,
      source: parsedData["NowPlayingSrce"] || currentStatus.source,
      mute: parsedData['Mute'] || currentStatus.mute
    };

    setCurrentStatus((prev) => {
      // Only update state if there's an actual change
      const isChanged = (Object.keys(newStatus) as (keyof StatusState)[]).some(
        (key) => newStatus[key] !== prev[key]
      );
      return isChanged ? newStatus : prev;
    });

    setCanGoBack(backAvailable);

    if (parsedData['TrackTime']) {
      setSeekPosition(parseInt(parsedData['TrackTime']));
    }
  }, [url, currentStatus]);

  const handleServerMessage = useCallback((message: string) => {
    const trimmed = message.trim();
      if (trimmed === 'AckButton Ok') {
      return;
    }

    // If UI=InputBox...
    if (message.includes('UI=InputBox')) {
      console.log(message);
      const inputBoxRegex = /UI=InputBox\s+\{([0-9a-fA-F-]+)\}\s+"[^"]+"\s+"([^"]+)"/;
      const match = message.match(inputBoxRegex);
      if (match) {
        const guid = match[1];
        const prompt = match[2];
        setInputBoxGuid(`{${guid}}`);
        setInputBoxPrompt(prompt);
        setShowSearchBox(true);
        if (loadingGuid === `{${guid}}`) {
          setLoadingGuid(null);
        }
        return;
      }
    }

    // If UI=MessageBox...
    if (message.includes('UI=MessageBox')) {
      console.log(message);
      // Regex to capture everything in the last quoted group:
      const messageBoxRegex = /UI=MessageBox\s+\{([0-9a-fA-F-]+)\}\s+"([^"]+)"\s+"(.*)"/;
      const match = message.match(messageBoxRegex);
      if (match) {
        const guidMatch = message.match(/\{([0-9a-fA-F-]+)\}/);
        const guid = guidMatch ? guidMatch[1] : '';
        let msg = match[3]; // e.g. "Is 'tv girl' an artist name or song name?" 30 "Artist Name" ...

        // Optional: slice out everything after the first question mark
        const questionIndex = msg.indexOf('?');
        if (questionIndex >= 0) {
          msg = msg.substring(0, questionIndex + 1).trim();
        }

        // If there's a question mark, we treat it as a question prompt
        if (msg.includes('?')) {
          setQuestionGuid(`{${guid}}`);
          setQuestionMessage(msg);
          setLoadingGuid(null);
        } else {
          setLoadingGuid(`{${guid}}`);
        }
        return;
      }
    }

    // If UI=Clear ...
    if (message.includes('UI=Clear')) {
      console.log(message);
      const clearRegex = /UI=Clear\s+\{([0-9a-fA-F-]+)\}/;
      const match = message.match(clearRegex);
      if (match) {
        const guid = `{${match[1]}}`;
        if (loadingGuid === guid) {
          setLoadingGuid(null);
        }
        return;
      } else {
        console.log(message);
      }
    }

    // If ReportState ...
    if (message.includes('ReportState')) {
      parseStatusMessage(message);
    }
    // If <PickList ...
    else if (message.includes('<PickList')) {
      console.log(message);
      parseBrowseMenu(message);
    }
    // If BeginPickList ...
    else if (message.includes('BeginPickList')) {
      parseTextPickList(message);
    }
    else {
      console.log(message);
    }
  }, [
    loadingGuid,
    questionGuid,
    parseStatusMessage,
    parseBrowseMenu,
    parseTextPickList
  ]);

  // Poll every 1 second
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isConnected) {
        sendCommand('GetStatus');
      }
    }, 1000); // <-- Increased from 500 to 1000 ms
    return () => clearInterval(intervalId);
  }, [isConnected, sendCommand]);

  // Utility: formatTime
  const formatTime = (seconds: number | undefined) => {
    if (typeof seconds !== 'number') return '00:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Transport controls
  const togglePlayPause = () => {
    console.log("[togglePlayPause] Toggling play/pause");
    doScriptCommand("PlayPause");
  };
  const skipPrevious = () => {
    console.log("[skipPrevious] Skipping to previous track");
    doScriptCommand("SkipPrevious");
  };
  const skipNext = () => {
    console.log("[skipNext] Skipping to next track");
    doScriptCommand("SkipNext");
  };
  const muteVolume = () => {
    console.log("[muteVolume] Toggling mute");
    doScriptCommand("Mute%20Toggle");
  };
  const toggleShuffle = () => {
    console.log("[toggleShuffle] Toggling shuffle");
    doScriptCommand("Shuffle%20Toggle");
  };
  const toggleRepeat = () => {
    console.log("[toggleRepeat] Toggling repeat");
    doScriptCommand("Repeat%20Toggle");
  };

  // Seek Slider
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeekPosition(parseInt(e.target.value, 10));
  };

  const handleSliderMouseUp = async () => {
    console.log("[handleSliderMouseUp] New seek position:", seekPosition);
    try {
      await fetch(`${url}/api/Script/Seek%20${seekPosition}/`, { method: "POST" });
    } catch (error) {
      console.log("[handleSliderMouseUp] Error seeking:", error);
    }
  };

  // Browsing
  const browseTopMenu = (itemGuid?: string) => {
    console.log("[browseTopMenu] Browsing top menu with itemGuid:", itemGuid || "(none)");
    if (itemGuid) {
      sendCommand(`BrowseTopMenu itemGuid=${itemGuid}`);
    } else {
      sendCommand('BrowseTopMenu');
    }
  };

  const handleItemClick = (item: BrowseItem) => {
    console.log("[handleItemClick] Clicked item:", item);
    if (item.name.toLowerCase() === "search") {
      sendCommand(`AckPickItem ${item.guid}`);
      return;
    }
    if (currentBrowseCaption === "Home Menu") {
      if (item.hasChildren) {
        sendCommand(`BrowseTopMenu itemGuid=${item.guid}`);
        setIsAtTopMenu(false);
      }
    } else {
      sendCommand(`AckPickItem ${item.guid}`);
      setTimeout(() => {
        sendCommand('GetStatus');
        setIsAtTopMenu(false);
      }, 250);
    }
  };

  const goBackOneLevel = () => {
    console.log("[goBackOneLevel] Attempting to go back");
    if (canGoBack) {
      sendCommand('Back 1');
    }
  };

  // Search
  const handleSearchSubmit = () => {
    console.log("[handleSearchSubmit] Submitting search:", searchQuery);
    if (!inputBoxGuid) return;
    sendCommand(`AckButton ${inputBoxGuid} OK "${searchQuery}"`);
    setShowSearchBox(false);
    setSearchQuery('');
    setInputBoxGuid(null);
    setInputBoxPrompt('Enter your search query:');
  };

  // Pandora question
  const handleQuestionAnswer = (answer: string) => {
    console.log("[handleQuestionAnswer] Answering question with:", answer);
    if (!questionGuid) return;
    sendCommand(`AckButton ${questionGuid} OK "${answer}"`);
    setQuestionMessage('');
    setQuestionGuid(null);
  };

  const progress = currentStatus.duration
    ? (currentStatus.position! / currentStatus.duration) * 100
    : 0;




    const navigate = useNavigate()


  return (
   
      <div className='audio_dashboard'>

    
        <div style={{gridColumn:"1/2", gridRow:"1/2", display:"flex", justifyContent:"center", alignItems:"center", width:'100%', height:'100%'}}> 
          <button  className="back_button"  id="menu_button"  onClick={() => navigate(-1)}>
            <img 
              className='back_button_image' 
              src={backbutton} 
              alt="" 
              style={{height:"60%", zIndex:"1px"}} 
            />
          </button>
        </div>


        <div className='streaming_service_logo'>
          {currentStatus.source === "Spotify"       && <img src={spotify}        className='Spotify_logo'/>}
          {currentStatus.source === "AmazonMusic"   && <img src={amazonMusic}    className='AmazonMusic_logo'/>}
          {currentStatus.source === "Deezer"        && <img src={deezer}         className='Deezer_logo'/>}
          {currentStatus.source === "iHeartRadio"   && <img src={iheart}         className='iHeartRadio_logo'/>}
          {currentStatus.source === "LiveOne"       && <img src={liveOne}        className='liveOne_logo'/>}
          {currentStatus.source === "Murfie"        && <img src={murfie}         className='murfie_logo'/>}
          {currentStatus.source === "Pandora"       && <img src={pandora}        className='pandora_logo'/>}
          {currentStatus.source === "Sirius"        && <img src={siriusXM}       className='sirius_logo'/>}
          {currentStatus.source === "SoundMachine"  && <img src={soundMachine}   className='soundMachine_logo'/>}
          {currentStatus.source === "Tidal"         && <img src={tidal}          className='tidal_logo'/>}
          {currentStatus.source === "TuneIn"        && <img src={tuneIn}         className='tuneIn_logo'/>}
        </div>

        <div className='background_image'>
          <img src={currentStatus.albumArtUrl} alt="" />
        </div>

        <div className='status_info'>
          {isConnected ? (
            <p className='display_none'>Status: Connected ✅</p>
          ) : (
            <p>Status: Disconnected ❌</p>
          )}
        </div>

        <div className='album_art'>
          {currentStatus.albumArtUrl 
            ? <img src={currentStatus.albumArtUrl} alt="Album Art" /> 
            : <p>No Album Art</p>}
        </div>

        <div className='album_info'>
          <p className='album_info_title'>{currentStatus.title  || 'Unknown'}</p>
          <p className='album_info_artist'>{currentStatus.artist || 'Unknown'}</p>
          <p className='album_info_album'>{currentStatus.album  || 'Unknown'}</p>
        </div>

        <div className='playback_controls'>
          <button 
            onClick={toggleShuffle} 
            className={currentStatus.shuffle ? 'transport_button_active' : 'transport_button'}
          >
            <img src={shuffle} alt="shuffle" />
          </button>
          <button onClick={skipPrevious} className='transport_button'>
            <img src={skip} style={{transform:'rotate(180deg)'}} alt="previous" />
          </button>
          <button onClick={togglePlayPause} className='transport_button'>
            <img 
              src={currentStatus.playState === 'Playing' ? pasue : play} 
              alt="play/pause" 
            />
          </button>
          <button onClick={skipNext} className='transport_button'>
            <img src={skip} alt="next" />
          </button>
          <button 
            onClick={toggleRepeat} 
            className={currentStatus.repeat ? 'transport_button_active' : 'transport_button'}
          >
            <img src={repeat} className='flip_image' alt="repeat"/>
          </button>
        </div>

        <div className="progress_bar">
          <p className='current_postition'>{formatTime(currentStatus.position)}</p>
          <input
            type="range"
            min="0"
            max={currentStatus.duration || 0}
            value={seekPosition}
            onChange={handleSliderChange}
            onMouseUp={handleSliderMouseUp}
            onTouchEnd={handleSliderMouseUp}
            style={{
              borderRadius: '15px',
              background: `linear-gradient(to right, rgb(85, 83, 83) 0%, rgb(207, 241, 231) ${progress}%, #e0e0e0 ${progress}%, #e0e0e0 100%)`
            }}
          />
          <p className='end_postition'>{formatTime(currentStatus.duration)}</p> 
        </div>

        <div className='music_button_container'>
          <button 
            className="music_button" 
            onClick={() => {
              console.log("[music_button] Toggling browser menu");
              if (!isBrowseMenuVisible) {
                browseTopMenu();
                setIsBrowseMenuVisible(true);
                setIsAtTopMenu(true);
              } else {
                if (!isAtTopMenu) {
                  browseTopMenu();
                  setIsAtTopMenu(true);
                } else {
                  setIsBrowseMenuVisible(false);
                  setBrowseItems(null);
                  setCurrentBrowseCaption('');
                }
              }
            }}
          >
            {isBrowseMenuVisible 
              ? (isAtTopMenu 
                  ? <img style={{height:"76%"}} src={close} alt="Close"/> 
                  : <img style={{height:"76%"}} src={topmenu} alt="top menu"/>
                )
              : <img style={{height:"76%"}} src={musicIcon} alt="Music"/>
            }
          </button>
        </div>

        <div className='browser_container'>
          {isBrowseMenuVisible && browseItems && (
            <div className='browser_menu'>
              <div>
                <button 
                  onClick={goBackOneLevel} 
                  className={canGoBack ? "transport_button" : "display_none"}  
                  style={{ height: "3rem", width:"3rem" }}
                >
                  <img style={{height:"75%"}} src={backbutton} alt="" />
                </button>
              </div>

              <div className='broswer_card_container'>
                <h3>{currentBrowseCaption}</h3>
                {browseItems.map((item) => (
                  <div key={item.guid} className='broswer_card_wrapper'>
                    <button 
                      className='broswer_card' 
                      onClick={() => handleItemClick(item)}
                    >
                      <div className='image_title'>
                        <img 
                          className='broswer_card_image' 
                          src={`${url}/getart?guid=${item.guid}`} 
                          alt="" 
                        />
                        <p className='browser_card_title'>{item.name}</p>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="volume_controls">
          <button 
            onClick={muteVolume} 
            className={currentStatus.mute === "True" ? 'transport_button_active' : 'transport_button'}
          >
            <p style={{fontSize:"16px"}}>Mute</p>
          </button>
        </div>

        {showSearchBox && (
          <div className='search_overlay'>
            <div className='search_box'>
              <input 
                className='search_box_input'
                type="text" 
                value={searchQuery} 
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={inputBoxPrompt}
              />
              <div className='search_buttons'>
                <button 
                  onClick={handleSearchSubmit} 
                  className='search_button'
                >
                  <p>Search</p>
                </button>
                <button
                  onClick={() => {
                    console.log("[searchOverlay] Canceling search");
                    if (inputBoxGuid) {
                      sendCommand(`AckButton ${inputBoxGuid} Cancel`);
                    }
                    setShowSearchBox(false);
                    setInputBoxGuid(null);
                    setSearchQuery('');
                  }}
                  className='search_button'
                  id='cancel_button'
                >
                  <p>Cancel</p>
                </button>
              </div>
            </div>
          </div>
        )}

        {questionMessage && (
          <div className='search_overlay'>
            <div className='search_box'>
              <p>{questionMessage}</p>
              <div>
                <button
                  onClick={() => handleQuestionAnswer("Artist Name")}
                  className='transport_button'
                >
                  Artist
                </button>
                <button
                  onClick={() => handleQuestionAnswer("Song Name")}
                  className='transport_button' 
                  style={{ marginLeft: "1rem" }}
                >
                  Song
                </button>
                <button
                  onClick={() => handleQuestionAnswer("Cancel")}
                  className='transport_button' 
                  style={{ marginLeft: "1rem" }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
 
  );
};

export default MediaServerWebSocket;
