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
import menu from "../../assets/images/icons/icons8-menu.svg"
import arrow from "../../assets/images/icons/icons8-triangle-arrow.svg"
import mute from "../../assets/images/icons/icons8-no-audio.svg"

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



    const [openZones, setOpenZones] = useState(false)
   
    const [zone1_vol, setZone1_vol]   = useState (0)
    const [zone1_mute, setZone1_mute] = useState(false)
    const zone_decrease_1 = "500"
    const zone_mute_1     = "501"
    const zone_increase_1 = "502"

    const [zone2_vol, setZone2_vol]   = useState (0)
    const [zone2_mute, setZone2_mute] = useState(false)
    const zone_decrease_2 = "503"
    const zone_mute_2     = "504"
    const zone_increase_2 = "505"

    const [zone3_vol, setZone3_vol]   = useState (0)
    const [zone3_mute, setZone3_mute] = useState(false)
    const zone_decrease_3 = "506"
    const zone_mute_3     = "507"
    const zone_increase_3 = "508"

    const [zone4_vol, setZone4_vol]   = useState (0)
    const [zone4_mute, setZone4_mute] = useState(false)
    const zone_decrease_4 = "509"
    const zone_mute_4     = "510"
    const zone_increase_4 = "511"

    const [zone5_vol, setZone5_vol]   = useState (0)
    const [zone5_mute, setZone5_mute] = useState(false)
    const zone_decrease_5 = "512"
    const zone_mute_5     = "513"
    const zone_increase_5 = "514"

    const [zone6_vol, setZone6_vol]   = useState (0)
    const [zone6_mute, setZone6_mute] = useState(false)
    const zone_decrease_6 = "515"
    const zone_mute_6     = "516"
    const zone_increase_6 = "517"

    const [zone7_vol, setZone7_vol]   = useState (0)
    const [zone7_mute, setZone7_mute] = useState(false)
    const zone_decrease_7 = "518"
    const zone_mute_7     = "519"
    const zone_increase_7 = "520"

    const [zone8_vol, setZone8_vol]   = useState (0)
    const [zone8_mute, setZone8_mute] = useState(false)
    const zone_decrease_8 = "521"
    const zone_mute_8     = "522"
    const zone_increase_8 = "523"

    const [zone9_vol, setZone9_vol]   = useState (0)
    const [zone9_mute, setZone9_mute] = useState(false)
    const zone_decrease_9 = "524"
    const zone_mute_9     = "525"
    const zone_increase_9 = "526"

    const [zone10_vol, setZone10_vol]   = useState (0)
    const [zone10_mute, setZone10_mute] = useState(false)
    const zone_decrease_10 = "527"
    const zone_mute_10     = "528"
    const zone_increase_10 = "529"

    const [zone11_vol, setZone11_vol]   = useState (0)
    const [zone11_mute, setZone11_mute] = useState(false)
    const zone_decrease_11 = "530"
    const zone_mute_11     = "531"
    const zone_increase_11 = "532"

    const [zone12_vol, setZone12_vol]   = useState (0)
    const [zone12_mute, setZone12_mute] = useState(false)
    const zone_decrease_12 = "533"
    const zone_mute_12     = "534"
    const zone_increase_12 = "535"

    const [zone13_vol, setZone13_vol]   = useState (0)
    const [zone13_mute, setZone13_mute] = useState(false)
    const zone_decrease_13 = "536"
    const zone_mute_13     = "537"
    const zone_increase_13 = "538"




    useEffect(() => {
   
      const zone_1 = window.CrComLib.subscribeState("b", zone_mute_1 ,(value: boolean) => {setZone1_mute(value);});  
      const zone_2 = window.CrComLib.subscribeState("b", zone_mute_2 ,(value: boolean) => {setZone2_mute(value);});  
      const zone_3 = window.CrComLib.subscribeState("b", zone_mute_3 ,(value: boolean) => {setZone3_mute(value);});  
      const zone_4 = window.CrComLib.subscribeState("b", zone_mute_4 ,(value: boolean) => {setZone4_mute(value);});  
      const zone_5 = window.CrComLib.subscribeState("b", zone_mute_5 ,(value: boolean) => {setZone5_mute(value);});  
      const zone_6 = window.CrComLib.subscribeState("b", zone_mute_6 ,(value: boolean) => {setZone6_mute(value);});  
      const zone_7 = window.CrComLib.subscribeState("b", zone_mute_7 ,(value: boolean) => {setZone7_mute(value);});  
      const zone_8 = window.CrComLib.subscribeState("b", zone_mute_8 ,(value: boolean) => {setZone8_mute(value);});  
      const zone_9 = window.CrComLib.subscribeState("b", zone_mute_9 ,(value: boolean) => {setZone9_mute(value);});  
      const zone_10 = window.CrComLib.subscribeState("b", zone_mute_10 ,(value: boolean) => {setZone10_mute(value);});  
      const zone_11 = window.CrComLib.subscribeState("b", zone_mute_11 ,(value: boolean) => {setZone11_mute(value);});  
      const zone_12 = window.CrComLib.subscribeState("b", zone_mute_12 ,(value: boolean) => {setZone12_mute(value);});  
      const zone_13 = window.CrComLib.subscribeState("b", zone_mute_13 ,(value: boolean) => {setZone13_mute(value);});  

      

      const zone_vol_1 = window.CrComLib.subscribeState("n","100",(value: number) => {setZone1_vol(value);});  
      const zone_vol_2 = window.CrComLib.subscribeState("n","101",(value: number) => {setZone2_vol(value);});  
      const zone_vol_3 = window.CrComLib.subscribeState("n","102",(value: number) => {setZone3_vol(value);});  
      const zone_vol_4 = window.CrComLib.subscribeState("n","103",(value: number) => {setZone4_vol(value);});  
      const zone_vol_5 = window.CrComLib.subscribeState("n","104",(value: number) => {setZone5_vol(value);});  
      const zone_vol_6 = window.CrComLib.subscribeState("n","105",(value: number) => {setZone6_vol(value);});  
      const zone_vol_7 = window.CrComLib.subscribeState("n","106",(value: number) => {setZone7_vol(value);});  
      const zone_vol_8 = window.CrComLib.subscribeState("n","107",(value: number) => {setZone8_vol(value);});  
      const zone_vol_9 = window.CrComLib.subscribeState("n","108",(value: number) => {setZone9_vol(value);});  
      const zone_vol_10 = window.CrComLib.subscribeState("n","109",(value: number) => {setZone10_vol(value);});  
      const zone_vol_11 = window.CrComLib.subscribeState("n","110",(value: number) => {setZone11_vol(value);});  
      const zone_vol_12 = window.CrComLib.subscribeState("n","111",(value: number) => {setZone12_vol(value);});  
      const zone_vol_13 = window.CrComLib.subscribeState("n","112",(value: number) => {setZone13_vol(value);});  
      




    
   

      return () => {

        window.CrComLib.unsubscribeState("b",zone_mute_1,zone_1)
        window.CrComLib.unsubscribeState("b",zone_mute_2,zone_2)
        window.CrComLib.unsubscribeState("b",zone_mute_3,zone_3)
        window.CrComLib.unsubscribeState("b",zone_mute_4,zone_4)
        window.CrComLib.unsubscribeState("b",zone_mute_5,zone_5)
        window.CrComLib.unsubscribeState("b",zone_mute_6,zone_6)
        window.CrComLib.unsubscribeState("b",zone_mute_7,zone_7)
        window.CrComLib.unsubscribeState("b",zone_mute_8,zone_8)
        window.CrComLib.unsubscribeState("b",zone_mute_9,zone_9)
        window.CrComLib.unsubscribeState("b",zone_mute_10,zone_10)
        window.CrComLib.unsubscribeState("b",zone_mute_11,zone_11)
        window.CrComLib.unsubscribeState("b",zone_mute_12,zone_12)
        window.CrComLib.unsubscribeState("b",zone_mute_13,zone_13)


        window.CrComLib.unsubscribeState("n","100",zone_vol_1)
        window.CrComLib.unsubscribeState("n","101",zone_vol_2)
        window.CrComLib.unsubscribeState("n","102",zone_vol_3)
        window.CrComLib.unsubscribeState("n","103",zone_vol_4)
        window.CrComLib.unsubscribeState("n","104",zone_vol_5)
        window.CrComLib.unsubscribeState("n","105",zone_vol_6)
        window.CrComLib.unsubscribeState("n","106",zone_vol_7)
        window.CrComLib.unsubscribeState("n","107",zone_vol_8)
        window.CrComLib.unsubscribeState("n","108",zone_vol_9)
        window.CrComLib.unsubscribeState("n","109",zone_vol_10)
        window.CrComLib.unsubscribeState("n","110",zone_vol_11)
        window.CrComLib.unsubscribeState("n","111",zone_vol_12)
        window.CrComLib.unsubscribeState("n","112",zone_vol_13)



        
        
          
      }
    }, []);



    const navigate = useNavigate()

    const zoneMenu = (id:string) =>{
      
      if(id === "menuOpen"){
        setOpenZones(true)
      } else if (id === "menuClose"){
        setOpenZones(false)

      }

    }


  return (
   
      <div className='audio_dashboard'>

<div style={{display:"flex", justifyContent:"center", alignItems:"center", gridColumn:'1/2',gridRow:'1' }}>
      <button className="back_button" onClick={() => navigate(-1)} style={{zIndex:"10"}}>
            <img 
              className='back_button_image' 
              src={backbutton} 
              alt="" 
              style={{height:"60%", zIndex:"1px"}} 
            />
          </button>
    </div>
          

    <div className='menu_tablet' onClick={() => zoneMenu("menuOpen")}>
      <button className="back_button" style={{zIndex:"10"}}>
            <img 
              className='back_button_image' 
              src={menu} 
              style={{height:"60%", zIndex:"1px"}} 
            />
          </button>
    </div>

    <div className='menu_mobile' onClick={() => zoneMenu("menuOpen")}>
      <button className="back_button" style={{zIndex:"10"}}>
            <img 
              className='back_button_image' 
              src={menu} 
              style={{height:"60%", zIndex:"1px"}} 
            />
          </button>
    </div>


    <div className={openZones? "zone_menu": "display_none"} style={{gridColumn:'1/10', gridRow:'1/10', paddingInline:".2rem"}}>
      <div className={openZones? "zone_menu": "display_none"}>

            <div className='zone_container' style={{background:"none"}}onClick={() => zoneMenu("menuClose")}>
              <button className='btn_square_wide' style={{background:"rgb(70,70,70)"}}> <img className="btn_image"  src={close} alt="" /></button>
            </div>

            <div className='zone_container' id={zone1_vol>1?"active_zone": "" }>
              <p className='zone_title'> Breakfast/Kitchen</p>
                <div className='zone_controls'>

                  <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_decrease_1,true),window.CrComLib.publishEvent("b",zone_decrease_1,false), console.log(zone_decrease_1))}>
                    <img className="btn_image"src={arrow} />
                  </button>
                                  

                    <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b",zone_mute_1,true),window.CrComLib.publishEvent("b",zone_mute_1,false), console.log(zone_mute_1))}>
                        {zone1_mute ? 
                        <>
                          <img src={mute} style={{height:"50%"}}/>
                          <p className="mute_btn_txt">Click to Unmute</p>
                        </>
                            :
                        <>
                            <p className="volume_txt"> {zone1_vol} </p>
                            <p className="mute_btn_txt">Click to Mute</p>
                          </>
                        }
                    </button>


                    <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_increase_1,true),window.CrComLib.publishEvent("b",zone_increase_1,false), console.log(zone_increase_1))}>
                        <img className="btn_image"src={arrow} id="flip"/>
                    </button>

                </div>
            </div>

            <div className='zone_container' id={zone2_vol>1?"active_zone": "" }>
              <p className='zone_title'> Gym</p>
                <div className='zone_controls'>

                  <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_decrease_2,true),window.CrComLib.publishEvent("b",zone_decrease_2,false), console.log(zone_decrease_2))}>
                    <img className="btn_image"src={arrow} />
                  </button>
                                  

                    <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b",zone_mute_2,true),window.CrComLib.publishEvent("b",zone_mute_2,false), console.log(zone_mute_2))}>
                        {zone2_mute ? 
                        <>
                          <img src={mute} style={{height:"50%"}}/>
                          <p className="mute_btn_txt">Click to Unmute</p>
                        </>
                            :
                        <>
                            <p className="volume_txt"> {zone2_vol} </p>
                            <p className="mute_btn_txt">Click to Mute</p>
                          </>
                        }
                    </button>


                    <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_increase_2,true),window.CrComLib.publishEvent("b",zone_increase_2,false), console.log(zone_increase_2))}>
                        <img className="btn_image"src={arrow} id="flip"/>
                    </button>

                </div>
            </div>

            <div className='zone_container' id={zone3_vol>1?"active_zone": "" }>
              <p className='zone_title'>Game room</p>
                <div className='zone_controls'>

                  <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_decrease_3,true),window.CrComLib.publishEvent("b",zone_decrease_3,false), console.log(zone_decrease_3))}>
                    <img className="btn_image"src={arrow} />
                  </button>
                                  

                    <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b",zone_mute_3,true),window.CrComLib.publishEvent("b",zone_mute_3,false), console.log(zone_mute_3))}>
                        {zone3_mute ? 
                        <>
                          <img src={mute} style={{height:"50%"}}/>
                          <p className="mute_btn_txt">Click to Unmute</p>
                        </>
                            :
                        <>
                            <p className="volume_txt"> {zone3_vol} </p>
                            <p className="mute_btn_txt">Click to Mute</p>
                          </>
                        }
                    </button>


                    <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_increase_3,true),window.CrComLib.publishEvent("b",zone_increase_3,false), console.log(zone_increase_3))}>
                        <img className="btn_image"src={arrow} id="flip"/>
                    </button>

                </div>
            </div>

            <div className='zone_container' id={zone4_vol>1?"active_zone": "" }>
              <p className='zone_title'> Master Bedroom</p>
                <div className='zone_controls'>

                  <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_decrease_4,true),window.CrComLib.publishEvent("b",zone_decrease_4,false), console.log(zone_decrease_4))}>
                    <img className="btn_image"src={arrow} />
                  </button>
                                  

                    <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b",zone_mute_4,true),window.CrComLib.publishEvent("b",zone_mute_4,false), console.log(zone_mute_4))}>
                        {zone4_mute ? 
                        <>
                          <img src={mute} style={{height:"50%"}}/>
                          <p className="mute_btn_txt">Click to Unmute</p>
                        </>
                            :
                        <>
                            <p className="volume_txt"> {zone4_vol} </p>
                            <p className="mute_btn_txt">Click to Mute</p>
                          </>
                        }
                    </button>


                    <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_increase_4,true),window.CrComLib.publishEvent("b",zone_increase_4,false), console.log(zone_increase_4))}>
                        <img className="btn_image"src={arrow} id="flip"/>
                    </button>

                </div>
            </div>

            <div className='zone_container' id={zone5_vol>1?"active_zone": "" }>
              <p className='zone_title'> Master Bathroom</p>
                <div className='zone_controls'>

                  <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_decrease_5,true),window.CrComLib.publishEvent("b",zone_decrease_5,false), console.log(zone_decrease_5))}>
                    <img className="btn_image"src={arrow} />
                  </button>
                                  

                    <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b",zone_mute_5,true),window.CrComLib.publishEvent("b",zone_mute_5,false), console.log(zone_mute_5))}>
                        {zone5_mute ? 
                        <>
                          <img src={mute} style={{height:"50%"}}/>
                          <p className="mute_btn_txt">Click to Unmute</p>
                        </>
                            :
                        <>
                            <p className="volume_txt"> {zone5_vol} </p>
                            <p className="mute_btn_txt">Click to Mute</p>
                          </>
                        }
                    </button>


                    <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_increase_5,true),window.CrComLib.publishEvent("b",zone_increase_5,false), console.log(zone_increase_5))}>
                        <img className="btn_image"src={arrow} id="flip"/>
                    </button>

                </div>
            </div>

            <div className='zone_container' id={zone6_vol>1?"active_zone": "" }>
              <p className='zone_title'> Office</p>
                <div className='zone_controls'>

                  <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_decrease_6,true),window.CrComLib.publishEvent("b",zone_decrease_6,false), console.log(zone_decrease_6))}>
                    <img className="btn_image"src={arrow} />
                  </button>
                                  

                    <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b",zone_mute_6,true),window.CrComLib.publishEvent("b",zone_mute_6,false), console.log(zone_mute_6))}>
                        {zone6_mute ? 
                        <>
                          <img src={mute} style={{height:"50%"}}/>
                          <p className="mute_btn_txt">Click to Unmute</p>
                        </>
                            :
                        <>
                            <p className="volume_txt"> {zone6_vol} </p>
                            <p className="mute_btn_txt">Click to Mute</p>
                          </>
                        }
                    </button>


                    <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_increase_6,true),window.CrComLib.publishEvent("b",zone_increase_6,false), console.log(zone_increase_6))}>
                        <img className="btn_image"src={arrow} id="flip"/>
                    </button>

                </div>
            </div>

            <div className='zone_container' id={zone7_vol>1?"active_zone": "" }>
              <p className='zone_title'> Media Room</p>
                <div className='zone_controls'>

                  <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_decrease_7,true),window.CrComLib.publishEvent("b",zone_decrease_7,false), console.log(zone_decrease_7))}>
                    <img className="btn_image"src={arrow} />
                  </button>
                                  

                    <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b",zone_mute_7,true),window.CrComLib.publishEvent("b",zone_mute_7,false), console.log(zone_mute_7))}>
                        {zone7_mute ? 
                        <>
                          <img src={mute} style={{height:"50%"}}/>
                          <p className="mute_btn_txt">Click to Unmute</p>
                        </>
                            :
                        <>
                            <p className="volume_txt"> {zone7_vol} </p>
                            <p className="mute_btn_txt">Click to Mute</p>
                          </>
                        }
                    </button>


                    <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_increase_7,true),window.CrComLib.publishEvent("b",zone_increase_7,false), console.log(zone_increase_7))}>
                        <img className="btn_image"src={arrow} id="flip"/>
                    </button>

                </div>
            </div>

            <div className='zone_container' id={zone8_vol>1?"active_zone": "" }>
              <p className='zone_title'> Family Room</p>
                <div className='zone_controls'>

                  <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_decrease_8,true),window.CrComLib.publishEvent("b",zone_decrease_8,false), console.log(zone_decrease_8))}>
                    <img className="btn_image"src={arrow} />
                  </button>
                                  

                    <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b",zone_mute_8,true),window.CrComLib.publishEvent("b",zone_mute_8,false), console.log(zone_mute_8))}>
                        {zone8_mute ? 
                        <>
                          <img src={mute} style={{height:"50%"}}/>
                          <p className="mute_btn_txt">Click to Unmute</p>
                        </>
                            :
                        <>
                            <p className="volume_txt"> {zone8_vol} </p>
                            <p className="mute_btn_txt">Click to Mute</p>
                          </>
                        }
                    </button>


                    <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_increase_8,true),window.CrComLib.publishEvent("b",zone_increase_8,false), console.log(zone_increase_8))}>
                        <img className="btn_image"src={arrow} id="flip"/>
                    </button>

                </div>
            </div>

            <div className='zone_container' id={zone9_vol>1?"active_zone": "" }>
              <p className='zone_title'> Bar</p>
                <div className='zone_controls'>

                  <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_decrease_9,true),window.CrComLib.publishEvent("b",zone_decrease_9,false), console.log(zone_decrease_9))}>
                    <img className="btn_image"src={arrow} />
                  </button>
                                  

                    <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b",zone_mute_9,true),window.CrComLib.publishEvent("b",zone_mute_9,false), console.log(zone_mute_9))}>
                        {zone9_mute ? 
                        <>
                          <img src={mute} style={{height:"50%"}}/>
                          <p className="mute_btn_txt">Click to Unmute</p>
                        </>
                            :
                        <>
                            <p className="volume_txt"> {zone9_vol} </p>
                            <p className="mute_btn_txt">Click to Mute</p>
                          </>
                        }
                    </button>


                    <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_increase_9,true),window.CrComLib.publishEvent("b",zone_increase_9,false), console.log(zone_increase_9))}>
                        <img className="btn_image"src={arrow} id="flip"/>
                    </button>

                </div>
            </div>

            <div className='zone_container' id={zone10_vol>1?"active_zone": "" }>
              <p className='zone_title'> Patio</p>
                <div className='zone_controls'>

                  <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_decrease_10,true),window.CrComLib.publishEvent("b",zone_decrease_10,false), console.log(zone_decrease_10))}>
                    <img className="btn_image"src={arrow} />
                  </button>
                                  

                    <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b",zone_mute_10,true),window.CrComLib.publishEvent("b",zone_mute_10,false), console.log(zone_mute_10))}>
                        {zone10_mute ? 
                        <>
                          <img src={mute} style={{height:"50%"}}/>
                          <p className="mute_btn_txt">Click to Unmute</p>
                        </>
                            :
                        <>
                            <p className="volume_txt"> {zone10_vol} </p>
                            <p className="mute_btn_txt">Click to Mute</p>
                          </>
                        }
                    </button>


                    <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_increase_10,true),window.CrComLib.publishEvent("b",zone_increase_10,false), console.log(zone_increase_10))}>
                        <img className="btn_image"src={arrow} id="flip"/>
                    </button>

                </div>
            </div>

            <div className='zone_container' id={zone11_vol>1?"active_zone": "" }>
              <p className='zone_title'> Backyard</p>
                <div className='zone_controls'>

                  <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_decrease_11,true),window.CrComLib.publishEvent("b",zone_decrease_11,false), console.log(zone_decrease_11))}>
                    <img className="btn_image"src={arrow} />
                  </button>
                                  

                    <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b",zone_mute_11,true),window.CrComLib.publishEvent("b",zone_mute_11,false), console.log(zone_mute_11))}>
                        {zone11_mute ? 
                        <>
                          <img src={mute} style={{height:"50%"}}/>
                          <p className="mute_btn_txt">Click to Unmute</p>
                        </>
                            :
                        <>
                            <p className="volume_txt"> {zone11_vol} </p>
                            <p className="mute_btn_txt">Click to Mute</p>
                          </>
                        }
                    </button>


                    <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_increase_11,true),window.CrComLib.publishEvent("b",zone_increase_11,false), console.log(zone_increase_11))}>
                        <img className="btn_image"src={arrow} id="flip"/>
                    </button>

                </div>
            </div>

            <div className='zone_container' id={zone12_vol>1?"active_zone": "" }>
              <p className='zone_title'> Pool</p>
                <div className='zone_controls'>

                  <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_decrease_12,true),window.CrComLib.publishEvent("b",zone_decrease_12,false), console.log(zone_decrease_1))}>
                    <img className="btn_image"src={arrow} />
                  </button>
                                  

                    <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b",zone_mute_12,true),window.CrComLib.publishEvent("b",zone_mute_12,false), console.log(zone_mute_12))}>
                        {zone12_mute ? 
                        <>
                          <img src={mute} style={{height:"50%"}}/>
                          <p className="mute_btn_txt">Click to Unmute</p>
                        </>
                            :
                        <>
                            <p className="volume_txt"> {zone12_vol} </p>
                            <p className="mute_btn_txt">Click to Mute</p>
                          </>
                        }
                    </button>


                    <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_increase_12,true),window.CrComLib.publishEvent("b",zone_increase_12,false), console.log(zone_increase_12))}>
                        <img className="btn_image"src={arrow} id="flip"/>
                    </button>

                </div>
            </div>

            <div className='zone_container' id={zone13_vol>1?"active_zone": "" }>
              <p className='zone_title'> North and West Planters</p>
                <div className='zone_controls'>

                  <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_decrease_13,true),window.CrComLib.publishEvent("b",zone_decrease_13,false), console.log(zone_decrease_13))}>
                    <img className="btn_image"src={arrow} />
                  </button>
                                  

                    <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b",zone_mute_13,true),window.CrComLib.publishEvent("b",zone_mute_13,false), console.log(zone_mute_13))}>
                        {zone13_mute ? 
                        <>
                          <img src={mute} style={{height:"50%"}}/>
                          <p className="mute_btn_txt">Click to Unmute</p>
                        </>
                            :
                        <>
                            <p className="volume_txt"> {zone13_vol} </p>
                            <p className="mute_btn_txt">Click to Mute</p>
                          </>
                        }
                    </button>


                    <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b",zone_increase_13,true),window.CrComLib.publishEvent("b",zone_increase_13,false), console.log(zone_increase_13))}>
                        <img className="btn_image"src={arrow} id="flip"/>
                    </button>

                </div>
            </div>



      </div>
              
    </div>
  
         


          <div style={{display:"flex", justifyContent:"center", alignItems:"center", gridColumn:'1/3',gridRow:'1' }}>
              <div  className="mobile_back_btn" onClick={() => navigate(-1)}> 
                  <button className="back_button">
                      <img src={backbutton}/>
                  </button>
              </div> 
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
            className={currentStatus.shuffle ? 'transport_button_active' : 'btn_circle'}
          >
            <img className='btn_image' src={shuffle} alt="shuffle" />
          </button>
          <button onClick={skipPrevious} className='btn_circle'>
            <img  className='btn_image' src={skip} style={{transform:'rotate(180deg)'}} alt="previous" />
          </button>
          <button onClick={togglePlayPause} className='btn_circle'>
            <img 
             className='btn_image'
              src={currentStatus.playState === 'Playing' ? pasue : play} 
              alt="play/pause" 
            />
          </button>
          <button onClick={skipNext} className='btn_circle'>
            <img className='btn_image' src={skip} alt="next" />
          </button>
          <button 
            onClick={toggleRepeat} 
            className={currentStatus.repeat ? 'transport_button_active' : 'btn_circle'}
          >
            <img className='btn_image' src={repeat} alt="repeat" style={{transform:"scaleX(-1)"}}/>
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
            className="home_button" 
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
            className={currentStatus.mute === "True" ? 'transport_button_active' : 'btn_circle'}
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
                  className='btn_circle'
                >
                  Artist
                </button>
                <button
                  onClick={() => handleQuestionAnswer("Song Name")}
                  className='btn_circle' 
                  style={{ marginLeft: "1rem" }}
                >
                  Song
                </button>
                <button
                  onClick={() => handleQuestionAnswer("Cancel")}
                  className='btn_circle' 
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
