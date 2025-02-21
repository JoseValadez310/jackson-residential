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

//import power from "../../assets/images/icons/icons8-power.svg"


import portraitMode from "../../assets/images/icons/icons8-iphone-16-pro.svg"





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
  const serverUrl = 'ws://10.10.10.46:5004'; 
  const url = "http://10.10.10.46";

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

   // Filter out unwanted items.
// When the Home Menu is active, remove "My Music" and "Recently Tuned" as well.
const filteredItems = items.filter(item => {
  if (caption === "Home Menu") {
    return (
      item.name !== "My Music" &&
      item.name !== "Recently Tuned" &&
      item.name !== "Create a Pandora station..." &&
      item.name !== "Now Playing Queue"
    );
  }
  return (
    item.name !== "Create a Pandora station..." &&
    item.name !== "Now Playing Queue"
  );
});
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
   
// Zone 1
const [zone1_vol, setZone1_vol] = useState(0);
const [zone1_mute, setZone1_mute] = useState(false);
const [zone_music_1_state, setZone_music_1_state] = useState(false);
const zone_music_1    = "503"; // zone_1_music
const zone_off_1      = "21";  // Zone1_off_fb
const zone_decrease_1 = "500"; // zone_1_decrease
const zone_mute_1     = "501"; // zone_1_mute
const zone_increase_1 = "502"; // zone_1_increase
const zone_name_1     = "Living Room";

// Zone 2
const [zone2_vol, setZone2_vol] = useState(0);
const [zone2_mute, setZone2_mute] = useState(false);
const [zone_music_2_state, setZone_music_2_state] = useState(false);
const zone_music_2    = "507"; // zone_2_music
const zone_off_2      = "22";  // Zone2_off_fb
const zone_decrease_2 = "504"; // zone_2_decrease
const zone_mute_2     = "505"; // zone_2_mute
const zone_increase_2 = "506"; // zone_2_increase
const zone_name_2     = "Dinning Room";

// Zone 3
const [zone3_vol, setZone3_vol] = useState(0);
const [zone3_mute, setZone3_mute] = useState(false);
const [zone_music_3_state, setZone_music_3_state] = useState(false);
const zone_music_3    = "511"; // zone_3_music
const zone_off_3      = "23";  // Zone3_off_fb
const zone_decrease_3 = "508"; // zone_3_decrease
const zone_mute_3     = "509"; // zone_3_mute
const zone_increase_3 = "510"; // zone_3_increase
const zone_name_3     = "Kitchen";

// Zone 4
const [zone4_vol, setZone4_vol] = useState(0);
const [zone4_mute, setZone4_mute] = useState(false);
const [zone_music_4_state, setZone_music_4_state] = useState(false);
const zone_music_4    = "515"; // zone_4_music
const zone_off_4      = "24";  // Zone4_off_fb
const zone_decrease_4 = "512"; // zone_4_decrease
const zone_mute_4     = "513"; // zone_4_mute
const zone_increase_4 = "514"; // zone_4_increase
const zone_name_4     = "Breakfast";

// Zone 5
const [zone5_vol, setZone5_vol] = useState(0);
const [zone5_mute, setZone5_mute] = useState(false);
const [zone_music_5_state, setZone_music_5_state] = useState(false);
const zone_music_5    = "519"; // zone_5_music
const zone_off_5      = "25";  // Zone5_off_fb
const zone_decrease_5 = "516"; // zone_5_decrease
const zone_mute_5     = "517"; // zone_5_mute
const zone_increase_5 = "518"; // zone_5_increase
const zone_name_5     = "Library";

// Zone 6
const [zone6_vol, setZone6_vol] = useState(0);
const [zone6_mute, setZone6_mute] = useState(false);
const [zone_music_6_state, setZone_music_6_state] = useState(false);
const zone_music_6    = "523"; // zone_music (from table)
const zone_off_6      = "26";  // Zone6_off_fb
const zone_decrease_6 = "520"; // zone_decrease
const zone_mute_6     = "521"; // zone_mute
const zone_increase_6 = "522"; // zone_increase
const zone_name_6     = "Bar";

// Zone 7
const [zone7_vol, setZone7_vol] = useState(0);
const [zone7_mute, setZone7_mute] = useState(false);
const [zone_music_7_state, setZone_music_7_state] = useState(false);
const zone_music_7    = "527"; // zone_music
const zone_off_7      = "27";  // Zone7_off_fb
const zone_decrease_7 = "524"; // zone_decrease
const zone_mute_7     = "525"; // zone_mute
const zone_increase_7 = "526"; // zone_increase
const zone_name_7     = "Patio";

// Zone 8
const [zone8_vol, setZone8_vol] = useState(0);
const [zone8_mute, setZone8_mute] = useState(false);
const [zone_music_8_state, setZone_music_8_state] = useState(false);
const zone_music_8    = "531"; // zone_music
const zone_off_8      = "28";  // Zone8_off_fb
const zone_decrease_8 = "528"; // zone_decrease
const zone_mute_8     = "529"; // zone_mute
const zone_increase_8 = "530"; // zone_increase
const zone_name_8     = "Master bed";

// Zone 9
const [zone9_vol, setZone9_vol] = useState(0);
const [zone9_mute, setZone9_mute] = useState(false);
const [zone_music_9_state, setZone_music_9_state] = useState(false);
const zone_music_9    = "535"; // zone_music
const zone_off_9      = "29";  // Zone9_off_fb
const zone_decrease_9 = "532"; // zone_decrease
const zone_mute_9     = "533"; // zone_mute
const zone_increase_9 = "534"; // zone_increase
const zone_name_9     = "Master Bath";

// Zone 10
const [zone10_vol, setZone10_vol] = useState(0);
const [zone10_mute, setZone10_mute] = useState(false);
const [zone_music_10_state, setZone_music_10_state] = useState(false);
const zone_music_10   = "539"; // zone_music
const zone_off_10     = "30";  // Zone10_off_fb
const zone_decrease_10 = "536"; // zone_decrease
const zone_mute_10    = "537"; // zone_mute
const zone_increase_10 = "538"; // zone_increase
const zone_name_10    = "Office";

// Zone 11
const [zone11_vol, setZone11_vol] = useState(0);
const [zone11_mute, setZone11_mute] = useState(false);
const [zone_music_11_state, setZone_music_11_state] = useState(false);
const zone_music_11   = "543"; // zone_music
const zone_off_11     = "31";  // Zone11_off_fb
const zone_decrease_11 = "540"; // zone_decrease
const zone_mute_11    = "541"; // zone_mute
const zone_increase_11 = "542"; // zone_increase
const zone_name_11    = "Game";

// Zone 12
const [zone12_vol, setZone12_vol] = useState(0);
const [zone12_mute, setZone12_mute] = useState(false);
const [zone_music_12_state, setZone_music_12_state] = useState(false);
const zone_music_12   = "547"; // zone_music
const zone_off_12     = "32";  // Zone12_off_fb
const zone_decrease_12 = "544"; // zone_decrease
const zone_mute_12    = "545"; // zone_mute
const zone_increase_12 = "546"; // zone_increase
const zone_name_12    = "Gym";

// Zone 13
const [zone13_vol, setZone13_vol] = useState(0);
const [zone13_mute, setZone13_mute] = useState(false);
const [zone_music_13_state, setZone_music_13_state] = useState(false);
const zone_music_13   = "551"; // zone_music
const zone_off_13     = "33";  // Zone13_off_fb
const zone_decrease_13 = "548"; // zone_decrease
const zone_mute_13    = "549"; // zone_mute
const zone_increase_13 = "550"; // zone_increase
const zone_name_13    = "Playroom";

// Zone 14
const [zone14_vol, setZone14_vol] = useState(0);
const [zone14_mute, setZone14_mute] = useState(false);
const [zone_music_14_state, setZone_music_14_state] = useState(false);
const zone_music_14   = "555"; // zone_music
const zone_off_14     = "34";  // Zone14_off_fb
const zone_decrease_14 = "552"; // zone_decrease
const zone_mute_14    = "553"; // zone_mute
const zone_increase_14 = "554"; // zone_increase
const zone_name_14    = "BBQ";

// Zone 15
const [zone15_vol, setZone15_vol] = useState(0);
const [zone15_mute, setZone15_mute] = useState(false);
const [zone_music_15_state, setZone_music_15_state] = useState(false);
const zone_music_15   = "559"; // zone_music
const zone_off_15     = "35";  // Zone15_off_fb
const zone_decrease_15 = "556"; // zone_decrease
const zone_mute_15    = "557"; // zone_mute
const zone_increase_15 = "558"; // zone_increase
const zone_name_15    = "Pool House";

// Zone 16
const [zone16_vol, setZone16_vol] = useState(0);
const [zone16_mute, setZone16_mute] = useState(false);
const [zone_music_16_state, setZone_music_16_state] = useState(false);
const zone_music_16   = "563"; // zone_music
const zone_off_16     = "36";  // Zone16_off_fb
const zone_decrease_16 = "560"; // zone_decrease
const zone_mute_16    = "561"; // zone_mute
const zone_increase_16 = "562"; // zone_increase
const zone_name_16    = "Backyard";

// Zone 17
const [zone17_vol, setZone17_vol] = useState(0);
const [zone17_mute, setZone17_mute] = useState(false);
const [zone_music_17_state, setZone_music_17_state] = useState(false);
const zone_music_17   = "567"; // zone_music
const zone_off_17     = "37";  // Zone17_off_fb
const zone_decrease_17 = "564"; // zone_decrease
const zone_mute_17    = "565"; // zone_mute
const zone_increase_17 = "566"; // zone_increase
const zone_name_17    = "Family Room";

// Zone 18
const [zone18_vol, setZone18_vol] = useState(0);
const [zone18_mute, setZone18_mute] = useState(false);
const [zone_music_18_state, setZone_music_18_state] = useState(false);
const zone_music_18   = "571"; // zone_music
const zone_off_18     = "38";  // Zone18_off_fb
const zone_decrease_18 = "568"; // zone_decrease
const zone_mute_18    = "569"; // zone_mute
const zone_increase_18 = "570"; // zone_increase
const zone_name_18    = "Media Room";






    useEffect(() => {
   
      const zone_1  = window.CrComLib.subscribeState("b", zone_mute_1,  (value: boolean) => { setZone1_mute(value); });
const zone_2  = window.CrComLib.subscribeState("b", zone_mute_2,  (value: boolean) => { setZone2_mute(value); });
const zone_3  = window.CrComLib.subscribeState("b", zone_mute_3,  (value: boolean) => { setZone3_mute(value); });
const zone_4  = window.CrComLib.subscribeState("b", zone_mute_4,  (value: boolean) => { setZone4_mute(value); });
const zone_5  = window.CrComLib.subscribeState("b", zone_mute_5,  (value: boolean) => { setZone5_mute(value); });
const zone_6  = window.CrComLib.subscribeState("b", zone_mute_6,  (value: boolean) => { setZone6_mute(value); });
const zone_7  = window.CrComLib.subscribeState("b", zone_mute_7,  (value: boolean) => { setZone7_mute(value); });
const zone_8  = window.CrComLib.subscribeState("b", zone_mute_8,  (value: boolean) => { setZone8_mute(value); });
const zone_9  = window.CrComLib.subscribeState("b", zone_mute_9,  (value: boolean) => { setZone9_mute(value); });
const zone_10 = window.CrComLib.subscribeState("b", zone_mute_10, (value: boolean) => { setZone10_mute(value); });
const zone_11 = window.CrComLib.subscribeState("b", zone_mute_11, (value: boolean) => { setZone11_mute(value); });
const zone_12 = window.CrComLib.subscribeState("b", zone_mute_12, (value: boolean) => { setZone12_mute(value); });
const zone_13 = window.CrComLib.subscribeState("b", zone_mute_13, (value: boolean) => { setZone13_mute(value); });
const zone_14 = window.CrComLib.subscribeState("b", zone_mute_14, (value: boolean) => { setZone14_mute(value); });
const zone_15 = window.CrComLib.subscribeState("b", zone_mute_15, (value: boolean) => { setZone15_mute(value); });
const zone_16 = window.CrComLib.subscribeState("b", zone_mute_16, (value: boolean) => { setZone16_mute(value); });
const zone_17 = window.CrComLib.subscribeState("b", zone_mute_17, (value: boolean) => { setZone17_mute(value); });
const zone_18 = window.CrComLib.subscribeState("b", zone_mute_18, (value: boolean) => { setZone18_mute(value); });

// --- Subscribe to Volume States for Zones 1-18 ---
const zone_vol_1  = window.CrComLib.subscribeState("n", "100", (value: number) => { setZone1_vol(value); });
const zone_vol_2  = window.CrComLib.subscribeState("n", "101", (value: number) => { setZone2_vol(value); });
const zone_vol_3  = window.CrComLib.subscribeState("n", "102", (value: number) => { setZone3_vol(value); });
const zone_vol_4  = window.CrComLib.subscribeState("n", "103", (value: number) => { setZone4_vol(value); });
const zone_vol_5  = window.CrComLib.subscribeState("n", "104", (value: number) => { setZone5_vol(value); });
const zone_vol_6  = window.CrComLib.subscribeState("n", "105", (value: number) => { setZone6_vol(value); });
const zone_vol_7  = window.CrComLib.subscribeState("n", "106", (value: number) => { setZone7_vol(value); });
const zone_vol_8  = window.CrComLib.subscribeState("n", "107", (value: number) => { setZone8_vol(value); });
const zone_vol_9  = window.CrComLib.subscribeState("n", "108", (value: number) => { setZone9_vol(value); });
const zone_vol_10 = window.CrComLib.subscribeState("n", "109", (value: number) => { setZone10_vol(value); });
const zone_vol_11 = window.CrComLib.subscribeState("n", "110", (value: number) => { setZone11_vol(value); });
const zone_vol_12 = window.CrComLib.subscribeState("n", "111", (value: number) => { setZone12_vol(value); });
const zone_vol_13 = window.CrComLib.subscribeState("n", "112", (value: number) => { setZone13_vol(value); });
const zone_vol_14 = window.CrComLib.subscribeState("n", "113", (value: number) => { setZone14_vol(value); });
const zone_vol_15 = window.CrComLib.subscribeState("n", "114", (value: number) => { setZone15_vol(value); });
const zone_vol_16 = window.CrComLib.subscribeState("n", "115", (value: number) => { setZone16_vol(value); });
const zone_vol_17 = window.CrComLib.subscribeState("n", "116", (value: number) => { setZone17_vol(value); });
const zone_vol_18 = window.CrComLib.subscribeState("n", "117", (value: number) => { setZone18_vol(value); });


const zone_music_state_1  = window.CrComLib.subscribeState("b", zone_music_1,  (value: boolean) => { setZone_music_1_state(value); });
const zone_music_state_2  = window.CrComLib.subscribeState("b", zone_music_2,  (value: boolean) => { setZone_music_2_state(value); });
const zone_music_state_3  = window.CrComLib.subscribeState("b", zone_music_3,  (value: boolean) => { setZone_music_3_state(value); });
const zone_music_state_4  = window.CrComLib.subscribeState("b", zone_music_4,  (value: boolean) => { setZone_music_4_state(value); });
const zone_music_state_5  = window.CrComLib.subscribeState("b", zone_music_5,  (value: boolean) => { setZone_music_5_state(value); });
const zone_music_state_6  = window.CrComLib.subscribeState("b", zone_music_6,  (value: boolean) => { setZone_music_6_state(value); });
const zone_music_state_7  = window.CrComLib.subscribeState("b", zone_music_7,  (value: boolean) => { setZone_music_7_state(value); });
const zone_music_state_8  = window.CrComLib.subscribeState("b", zone_music_8,  (value: boolean) => { setZone_music_8_state(value); });
const zone_music_state_9  = window.CrComLib.subscribeState("b", zone_music_9,  (value: boolean) => { setZone_music_9_state(value); });
const zone_music_state_10 = window.CrComLib.subscribeState("b", zone_music_10, (value: boolean) => { setZone_music_10_state(value); });
const zone_music_state_11 = window.CrComLib.subscribeState("b", zone_music_11, (value: boolean) => { setZone_music_11_state(value); });
const zone_music_state_12 = window.CrComLib.subscribeState("b", zone_music_12, (value: boolean) => { setZone_music_12_state(value); });
const zone_music_state_13 = window.CrComLib.subscribeState("b", zone_music_13, (value: boolean) => { setZone_music_13_state(value); });
const zone_music_state_14 = window.CrComLib.subscribeState("b", zone_music_14, (value: boolean) => { setZone_music_14_state(value); });
const zone_music_state_15 = window.CrComLib.subscribeState("b", zone_music_15, (value: boolean) => { setZone_music_15_state(value); });
const zone_music_state_16 = window.CrComLib.subscribeState("b", zone_music_16, (value: boolean) => { setZone_music_16_state(value); });
const zone_music_state_17 = window.CrComLib.subscribeState("b", zone_music_17, (value: boolean) => { setZone_music_17_state(value); });
const zone_music_state_18 = window.CrComLib.subscribeState("b", zone_music_18, (value: boolean) => { setZone_music_18_state(value); });




    
   

      return () => {

        window.CrComLib.unsubscribeState("b", zone_mute_1,  zone_1);
        window.CrComLib.unsubscribeState("b", zone_mute_2,  zone_2);
        window.CrComLib.unsubscribeState("b", zone_mute_3,  zone_3);
        window.CrComLib.unsubscribeState("b", zone_mute_4,  zone_4);
        window.CrComLib.unsubscribeState("b", zone_mute_5,  zone_5);
        window.CrComLib.unsubscribeState("b", zone_mute_6,  zone_6);
        window.CrComLib.unsubscribeState("b", zone_mute_7,  zone_7);
        window.CrComLib.unsubscribeState("b", zone_mute_8,  zone_8);
        window.CrComLib.unsubscribeState("b", zone_mute_9,  zone_9);
        window.CrComLib.unsubscribeState("b", zone_mute_10, zone_10);
        window.CrComLib.unsubscribeState("b", zone_mute_11, zone_11);
        window.CrComLib.unsubscribeState("b", zone_mute_12, zone_12);
        window.CrComLib.unsubscribeState("b", zone_mute_13, zone_13);
        window.CrComLib.unsubscribeState("b", zone_mute_14, zone_14);
        window.CrComLib.unsubscribeState("b", zone_mute_15, zone_15);
        window.CrComLib.unsubscribeState("b", zone_mute_16, zone_16);
        window.CrComLib.unsubscribeState("b", zone_mute_17, zone_17);
        window.CrComLib.unsubscribeState("b", zone_mute_18, zone_18);
      
        window.CrComLib.unsubscribeState("n", "100", zone_vol_1);
        window.CrComLib.unsubscribeState("n", "101", zone_vol_2);
        window.CrComLib.unsubscribeState("n", "102", zone_vol_3);
        window.CrComLib.unsubscribeState("n", "103", zone_vol_4);
        window.CrComLib.unsubscribeState("n", "104", zone_vol_5);
        window.CrComLib.unsubscribeState("n", "105", zone_vol_6);
        window.CrComLib.unsubscribeState("n", "106", zone_vol_7);
        window.CrComLib.unsubscribeState("n", "107", zone_vol_8);
        window.CrComLib.unsubscribeState("n", "108", zone_vol_9);
        window.CrComLib.unsubscribeState("n", "109", zone_vol_10);
        window.CrComLib.unsubscribeState("n", "110", zone_vol_11);
        window.CrComLib.unsubscribeState("n", "111", zone_vol_12);
        window.CrComLib.unsubscribeState("n", "112", zone_vol_13);
        window.CrComLib.unsubscribeState("n", "113", zone_vol_14);
        window.CrComLib.unsubscribeState("n", "114", zone_vol_15);
        window.CrComLib.unsubscribeState("n", "115", zone_vol_16);
        window.CrComLib.unsubscribeState("n", "116", zone_vol_17);
        window.CrComLib.unsubscribeState("n", "117", zone_vol_18);

        window.CrComLib.unsubscribeState("b", zone_music_1,  zone_music_state_1);
        window.CrComLib.unsubscribeState("b", zone_music_2,  zone_music_state_2);
        window.CrComLib.unsubscribeState("b", zone_music_3,  zone_music_state_3);
        window.CrComLib.unsubscribeState("b", zone_music_4,  zone_music_state_4);
        window.CrComLib.unsubscribeState("b", zone_music_5,  zone_music_state_5);
        window.CrComLib.unsubscribeState("b", zone_music_6,  zone_music_state_6);
        window.CrComLib.unsubscribeState("b", zone_music_7,  zone_music_state_7);
        window.CrComLib.unsubscribeState("b", zone_music_8,  zone_music_state_8);
        window.CrComLib.unsubscribeState("b", zone_music_9,  zone_music_state_9);
        window.CrComLib.unsubscribeState("b", zone_music_10, zone_music_state_10);
        window.CrComLib.unsubscribeState("b", zone_music_11, zone_music_state_11);
        window.CrComLib.unsubscribeState("b", zone_music_12, zone_music_state_12);
        window.CrComLib.unsubscribeState("b", zone_music_13, zone_music_state_13);
        window.CrComLib.unsubscribeState("b", zone_music_14, zone_music_state_14);
        window.CrComLib.unsubscribeState("b", zone_music_15, zone_music_state_15);
        window.CrComLib.unsubscribeState("b", zone_music_16, zone_music_state_16);
        window.CrComLib.unsubscribeState("b", zone_music_17, zone_music_state_17);
        window.CrComLib.unsubscribeState("b", zone_music_18, zone_music_state_18);
      



        
        
          
      }
    }, []);



    const [zoneGroup_1, setZoneGroup_1] = useState(false)
    const [zoneGroup_2, setZoneGroup_2] = useState(true)
    const [zoneGroup_3, setZoneGroup_3] = useState(false)
    const [zoneGroup_4, setZoneGroup_4] = useState(false)



    const navigate = useNavigate()

    const zoneMenu = (id:string) =>{
      
      if(id === "menuOpen"){
        setOpenZones(true)
      } else if (id === "menuClose"){
        setOpenZones(false)

      } else if (id === "zone1"){
        setZoneGroup_1(true)
        setZoneGroup_2(false)
        setZoneGroup_3(false)
        setZoneGroup_4(false)

      } else if (id === "zone2"){
        setZoneGroup_1(false)
        setZoneGroup_2(true)
        setZoneGroup_3(false)
        setZoneGroup_4(false)

      } else if (id === "zone3"){
        setZoneGroup_1(false)
        setZoneGroup_2(false)
        setZoneGroup_3(true)
        setZoneGroup_4(false)

      } else if (id === "zone4"){
        setZoneGroup_1(false)
        setZoneGroup_2(false)
        setZoneGroup_3(false)
        setZoneGroup_4(true)
      } 

    }





    const zoneGroup1 = (
      <>
      
            <div className='zone_container'>
              <div className='power_on_off'>
                <button className={zone_music_8_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_8, true), window.CrComLib.publishEvent("b", zone_music_8, false), console.log("turning off"))}>
                  <p>Power On</p>
                </button>
                <button className={zone_music_8_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_8, true), window.CrComLib.publishEvent("b", zone_off_8, false), console.log("turning off"))}>
                  <p>Power Off</p>
                </button>
              </div>

              <p className='zone_title'>{zone_name_8}</p>

              <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_8, true), window.CrComLib.publishEvent("b", zone_decrease_8, false), console.log(zone_decrease_8))}>
                  <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_8, true), window.CrComLib.publishEvent("b", zone_mute_8, false), console.log(zone_mute_8))}>
                  {zone8_mute ? (
                    <>
                      <img src={mute} className="volume_mute_btn" />
                      <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                  ) : (
                    <>
                      <p className="volume_txt">{ ((zone8_vol/65535) * 100).toFixed(0)}</p>
                      <p className="mute_btn_txt">Click to Mute</p>
                    </>
                  )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_8, true), window.CrComLib.publishEvent("b", zone_increase_8, false), console.log(zone_increase_8))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>
            </div>

            <div className='zone_container'>
              <div className='power_on_off'>
                <button className={zone_music_9_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_9, true), window.CrComLib.publishEvent("b", zone_music_9, false), console.log("turning off"))}>
                  <p>Power On</p>
                </button>
                <button className={zone_music_9_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_9, true), window.CrComLib.publishEvent("b", zone_off_9, false), console.log("turning off"))}>
                  <p>Power Off</p>
                </button>
              </div>

              <p className='zone_title'>{zone_name_9}</p>

              <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_9, true), window.CrComLib.publishEvent("b", zone_decrease_9, false), console.log(zone_decrease_9))}>
                  <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_9, true), window.CrComLib.publishEvent("b", zone_mute_9, false), console.log(zone_mute_9))}>
                  {zone9_mute ? (
                    <>
                      <img src={mute} className="volume_mute_btn" />
                      <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                  ) : (
                    <>
                      <p className="volume_txt">{ ((zone9_vol/65535) * 100).toFixed(0)}</p>
                      <p className="mute_btn_txt">Click to Mute</p>
                    </>
                  )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_9, true), window.CrComLib.publishEvent("b", zone_increase_9, false), console.log(zone_increase_9))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>
            </div>

            <div className='zone_container'>
              <div className='power_on_off'>
                <button className={zone_music_10_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_10, true), window.CrComLib.publishEvent("b", zone_music_10, false), console.log("turning off"))}>
                  <p>Power On</p>
                </button>
                <button className={zone_music_10_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_10, true), window.CrComLib.publishEvent("b", zone_off_10, false), console.log("turning off"))}>
                  <p>Power Off</p>
                </button>
              </div>

              <p className='zone_title'>{zone_name_10}</p>

              <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_10, true), window.CrComLib.publishEvent("b", zone_decrease_10, false), console.log(zone_decrease_10))}>
                  <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_10, true), window.CrComLib.publishEvent("b", zone_mute_10, false), console.log(zone_mute_10))}>
                  {zone10_mute ? (
                    <>
                      <img src={mute} className="volume_mute_btn" />
                      <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                  ) : (
                    <>
                      <p className="volume_txt">{ ((zone10_vol/65535) * 100).toFixed(0)}</p>
                      <p className="mute_btn_txt">Click to Mute</p>
                    </>
                  )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_10, true), window.CrComLib.publishEvent("b", zone_increase_10, false), console.log(zone_increase_10))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>
            </div>

      </>
    )

    const zoneGroup2 = (

      <>
            <div className='zone_container'>
              <div className='power_on_off'>
                <button className={zone_music_17_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_17, true), window.CrComLib.publishEvent("b", zone_music_17, false), console.log("turning off"))}>
                  <p>Power On</p>
                </button>
                <button className={zone_music_17_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_17, true), window.CrComLib.publishEvent("b", zone_off_17, false), console.log("turning off"))}>
                  <p>Power Off</p>
                </button>
              </div>

              <p className='zone_title'>{zone_name_17} </p>

              <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_17, true), window.CrComLib.publishEvent("b", zone_decrease_17, false), console.log(zone_decrease_17))}>
                  <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_17, true), window.CrComLib.publishEvent("b", zone_mute_17, false), console.log(zone_mute_17))}>
                  {zone17_mute ? (
                    <>
                      <img src={mute} className="volume_mute_btn" />
                      <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                  ) : (
                    <>
                      <p className="volume_txt">{ ((zone17_vol/65535) * 100).toFixed(0)}</p>
                      <p className="mute_btn_txt">Click to Mute</p>
                    </>
                  )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_17, true), window.CrComLib.publishEvent("b", zone_increase_17, false), console.log(zone_increase_17))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>
            </div>

            <div className='zone_container'>
              <div className='power_on_off'>
                <button className={zone_music_1_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_1, true), window.CrComLib.publishEvent("b", zone_music_1, false), console.log("turning off"))}>
                  <p>Power On</p>
                </button>
                <button className={zone_music_1_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_1, true), window.CrComLib.publishEvent("b", zone_off_1, false), console.log("turning off"))}>
                  <p>Power Off</p>
                </button>
              </div>

              <p className='zone_title'>{zone_name_1}</p>

            <div className='zone_controls'>
              <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_1, true), window.CrComLib.publishEvent("b", zone_decrease_1, false), console.log(zone_decrease_1))}>
                <img className="btn_image" src={arrow} />
              </button>

              <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_1, true), window.CrComLib.publishEvent("b", zone_mute_1, false), console.log(zone_mute_1))}>
                {zone1_mute ? (
                  <>
                    <img src={mute} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                  </>
                ) : (
                  <>
                    <p className="volume_txt">{ ((zone1_vol/65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                  </>
                )}
              </button>

              <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_1, true), window.CrComLib.publishEvent("b", zone_increase_1, false), console.log(zone_increase_1))}>
                <img className="btn_image" src={arrow} id="flip" />
              </button>
            </div>
            </div>
        
            <div className='zone_container'>
              <div className='power_on_off'>
                <button className={zone_music_2_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_2, true), window.CrComLib.publishEvent("b", zone_music_2, false), console.log("turning off"))}>
                  <p>Power On</p>
                </button>
                <button className={zone_music_2_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_2, true), window.CrComLib.publishEvent("b", zone_off_2, false), console.log("turning off"))}>
                  <p>Power Off</p>
                </button>
              </div>

              <p className='zone_title'>{zone_name_2}</p>

              <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_2, true), window.CrComLib.publishEvent("b", zone_decrease_2, false), console.log(zone_decrease_2))}>
                  <img className="btn_image" src={arrow} />
                </button>
                
                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_2, true), window.CrComLib.publishEvent("b", zone_mute_2, false), console.log(zone_mute_2))}>
                  {zone2_mute ? (
                    <>
                      <img src={mute} className="volume_mute_btn" />
                      <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                  ) : (
                    <>
                      <p className="volume_txt">{ ((zone2_vol/65535) * 100).toFixed(0)}</p>
                      <p className="mute_btn_txt">Click to Mute</p>
                    </>
                  )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_2, true), window.CrComLib.publishEvent("b", zone_increase_2, false), console.log(zone_increase_2))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>
            </div>

            <div className='zone_container'>
              <div className='power_on_off'>
                <button className={zone_music_3_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_3, true), window.CrComLib.publishEvent("b", zone_music_3, false), console.log("turning off"))}>
                  <p>Power On</p>
                </button>
                <button className={zone_music_3_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_3, true), window.CrComLib.publishEvent("b", zone_off_3, false), console.log("turning off"))}>
                  <p>Power Off</p>
                </button>
              </div>

              <p className='zone_title'>{zone_name_3}</p>

              <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_3, true), window.CrComLib.publishEvent("b", zone_decrease_3, false), console.log(zone_decrease_3))}>
                  <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_3, true), window.CrComLib.publishEvent("b", zone_mute_3, false), console.log(zone_mute_3))}>
                  {zone3_mute ? (
                    <>
                      <img src={mute} className="volume_mute_btn" />
                      <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                  ) : (
                    <>
                      <p className="volume_txt">{ ((zone3_vol/65535) * 100).toFixed(0)}</p>
                      <p className="mute_btn_txt">Click to Mute</p>
                    </>
                  )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_3, true), window.CrComLib.publishEvent("b", zone_increase_3, false), console.log(zone_increase_3))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>
            </div>

            <div className='zone_container'>
              <div className='power_on_off'>
                <button className={zone_music_4_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_4, true), window.CrComLib.publishEvent("b", zone_music_4, false), console.log("turning off"))}>
                  <p>Power On</p>
                </button>
                <button className={zone_music_4_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_4, true), window.CrComLib.publishEvent("b", zone_off_4, false), console.log("turning off"))}>
                  <p>Power Off</p>
                </button>
              </div>

              <p className='zone_title'>{zone_name_4}</p>

              <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_4, true), window.CrComLib.publishEvent("b", zone_decrease_4, false), console.log(zone_decrease_4))}>
                  <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_4, true), window.CrComLib.publishEvent("b", zone_mute_4, false), console.log(zone_mute_4))}>
                  {zone4_mute ? (
                    <>
                      <img src={mute} className="volume_mute_btn" />
                      <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                  ) : (
                    <>
                      <p className="volume_txt">{ ((zone4_vol/65535) * 100).toFixed(0)}</p>
                      <p className="mute_btn_txt">Click to Mute</p>
                    </>
                  )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_4, true), window.CrComLib.publishEvent("b", zone_increase_4, false), console.log(zone_increase_4))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>
            </div>

            <div className='zone_container'>
              <div className='power_on_off'>
                <button className={zone_music_5_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_5, true), window.CrComLib.publishEvent("b", zone_music_5, false), console.log("turning off"))}>
                  <p>Power On</p>
                </button>
                <button className={zone_music_5_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_5, true), window.CrComLib.publishEvent("b", zone_off_5, false), console.log("turning off"))}>
                  <p>Power Off</p>
                </button>
              </div>

              <p className='zone_title'>{zone_name_5}</p>

              <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_5, true), window.CrComLib.publishEvent("b", zone_decrease_5, false), console.log(zone_decrease_5))}>
                  <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_5, true), window.CrComLib.publishEvent("b", zone_mute_5, false), console.log(zone_mute_5))}>
                  {zone5_mute ? (
                    <>
                      <img src={mute} className="volume_mute_btn" />
                      <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                  ) : (
                    <>
                      <p className="volume_txt">{ ((zone5_vol/65535) * 100).toFixed(0)}</p>
                      <p className="mute_btn_txt">Click to Mute</p>
                    </>
                  )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_5, true), window.CrComLib.publishEvent("b", zone_increase_5, false), console.log(zone_increase_5))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>
            </div>

            <div className='zone_container'>
              <div className='power_on_off'>
                <button className={zone_music_6_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_6, true), window.CrComLib.publishEvent("b", zone_music_6, false), console.log("turning off"))}>
                  <p>Power On</p>
                </button>
                <button className={zone_music_6_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_6, true), window.CrComLib.publishEvent("b", zone_off_6, false), console.log("turning off"))}>
                  <p>Power Off</p>
                </button>
              </div>

              <p className='zone_title'>{zone_name_6}</p>

              <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_6, true), window.CrComLib.publishEvent("b", zone_decrease_6, false), console.log(zone_decrease_6))}>
                  <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_6, true), window.CrComLib.publishEvent("b", zone_mute_6, false), console.log(zone_mute_6))}>
                  {zone6_mute ? (
                    <>
                      <img src={mute} className="volume_mute_btn" />
                      <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                  ) : (
                    <>
                      <p className="volume_txt">{ ((zone6_vol/65535) * 100).toFixed(0)}</p>
                      <p className="mute_btn_txt">Click to Mute</p>
                    </>
                  )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_6, true), window.CrComLib.publishEvent("b", zone_increase_6, false), console.log(zone_increase_6))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>
            </div>
      
      </>
    )


    const zoneGroup3 = (
      <>

<div className='zone_container'>
              <div className='power_on_off'>
                <button className={zone_music_18_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_18, true), window.CrComLib.publishEvent("b", zone_music_18, false), console.log("turning off"))}>
                  <p>Power On</p>
                </button>
                <button className={zone_music_18_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_18, true), window.CrComLib.publishEvent("b", zone_off_18, false), console.log("turning off"))}>
                  <p>Power Off</p>
                </button>
              </div>

              <p className='zone_title'>{zone_name_18}</p>

              <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_18, true), window.CrComLib.publishEvent("b", zone_decrease_18, false), console.log(zone_decrease_18))}>
                  <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_18, true), window.CrComLib.publishEvent("b", zone_mute_18, false), console.log(zone_mute_18))}>
                  {zone18_mute ? (
                    <>
                      <img src={mute} className="volume_mute_btn" />
                      <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                  ) : (
                    <>
                      <p className="volume_txt">{ ((zone18_vol/65535) * 100).toFixed(0)}</p>
                      <p className="mute_btn_txt">Click to Mute</p>
                    </>
                  )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_18, true), window.CrComLib.publishEvent("b", zone_increase_18, false), console.log(zone_increase_18))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>
            </div>


        <div className='zone_container'>
              <div className='power_on_off'>
                <button className={zone_music_11_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_11, true), window.CrComLib.publishEvent("b", zone_music_11, false), console.log("turning off"))}>
                  <p>Power On</p>
                </button>
                <button className={zone_music_11_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_11, true), window.CrComLib.publishEvent("b", zone_off_11, false), console.log("turning off"))}>
                  <p>Power Off</p>
                </button>
              </div>

              <p className='zone_title'>{zone_name_11}</p>

              <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_11, true), window.CrComLib.publishEvent("b", zone_decrease_11, false), console.log(zone_decrease_11))}>
                  <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_11, true), window.CrComLib.publishEvent("b", zone_mute_11, false), console.log(zone_mute_11))}>
                  {zone11_mute ? (
                    <>
                      <img src={mute} className="volume_mute_btn" />
                      <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                  ) : (
                    <>
                      <p className="volume_txt">{ ((zone11_vol/65535) * 100).toFixed(0)}</p>
                      <p className="mute_btn_txt">Click to Mute</p>
                    </>
                  )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_11, true), window.CrComLib.publishEvent("b", zone_increase_11, false), console.log(zone_increase_11))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>
            </div>

            <div className='zone_container'>
              <div className='power_on_off'>
                <button className={zone_music_12_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_12, true), window.CrComLib.publishEvent("b", zone_music_12, false), console.log("turning off"))}>
                  <p>Power On</p>
                </button>
                <button className={zone_music_12_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_12, true), window.CrComLib.publishEvent("b", zone_off_12, false), console.log("turning off"))}>
                  <p>Power Off</p>
                </button>
              </div>

              <p className='zone_title'>{zone_name_12}</p>

              <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_12, true), window.CrComLib.publishEvent("b", zone_decrease_12, false), console.log(zone_decrease_12))}>
                  <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_12, true), window.CrComLib.publishEvent("b", zone_mute_12, false), console.log(zone_mute_12))}>
                  {zone12_mute ? (
                    <>
                      <img src={mute} className="volume_mute_btn" />
                      <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                  ) : (
                    <>
                      <p className="volume_txt">{ ((zone12_vol/65535) * 100).toFixed(0)}</p>
                      <p className="mute_btn_txt">Click to Mute</p>
                    </>
                  )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_12, true), window.CrComLib.publishEvent("b", zone_increase_12, false), console.log(zone_increase_12))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>
            </div>

            <div className='zone_container'>
              <div className='power_on_off'>
                <button className={zone_music_13_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_13, true), window.CrComLib.publishEvent("b", zone_music_13, false), console.log("turning off"))}>
                  <p>Power On</p>
                </button>
                <button className={zone_music_13_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_13, true), window.CrComLib.publishEvent("b", zone_off_13, false), console.log("turning off"))}>
                  <p>Power Off</p>
                </button>
              </div>

              <p className='zone_title'>{zone_name_13}</p>

              <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_13, true), window.CrComLib.publishEvent("b", zone_decrease_13, false), console.log(zone_decrease_13))}>
                  <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_13, true), window.CrComLib.publishEvent("b", zone_mute_13, false), console.log(zone_mute_13))}>
                  {zone13_mute ? (
                    <>
                      <img src={mute} className="volume_mute_btn" />
                      <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                  ) : (
                    <>
                      <p className="volume_txt">{ ((zone13_vol/65535) * 100).toFixed(0)}</p>
                      <p className="mute_btn_txt">Click to Mute</p>
                    </>
                  )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_13, true), window.CrComLib.publishEvent("b", zone_increase_13, false), console.log(zone_increase_13))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>
            </div>

      </>
    )

    const zoneGroup4 = (
      <>
      
            <div className='zone_container'>
              <div className='power_on_off'>
                <button className={zone_music_7_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_7, true), window.CrComLib.publishEvent("b", zone_music_7, false), console.log("turning off"))}>
                  <p>Power On</p>
                </button>
                <button className={zone_music_7_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_7, true), window.CrComLib.publishEvent("b", zone_off_7, false), console.log("turning off"))}>
                  <p>Power Off</p>
                </button>
              </div>

              <p className='zone_title'>{zone_name_7}</p>

              <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_7, true), window.CrComLib.publishEvent("b", zone_decrease_7, false), console.log(zone_decrease_7))}>
                  <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_7, true), window.CrComLib.publishEvent("b", zone_mute_7, false), console.log(zone_mute_7))}>
                  {zone7_mute ? (
                    <>
                      <img src={mute} className="volume_mute_btn" />
                      <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                  ) : (
                    <>
                      <p className="volume_txt">{ ((zone7_vol/65535) * 100).toFixed(0)}</p>
                      <p className="mute_btn_txt">Click to Mute</p>
                    </>
                  )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_7, true), window.CrComLib.publishEvent("b", zone_increase_7, false), console.log(zone_increase_7))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>
            </div>

                
            <div className='zone_container'>
              <div className='power_on_off'>
                <button className={zone_music_14_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_14, true), window.CrComLib.publishEvent("b", zone_music_14, false), console.log("turning off"))}>
                  <p>Power On</p>
                </button>
                <button className={zone_music_14_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_14, true), window.CrComLib.publishEvent("b", zone_off_14, false), console.log("turning off"))}>
                  <p>Power Off</p>
                </button>
              </div>

              <p className='zone_title'>{zone_name_14}</p>

              <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_14, true), window.CrComLib.publishEvent("b", zone_decrease_14, false), console.log(zone_decrease_14))}>
                  <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_14, true), window.CrComLib.publishEvent("b", zone_mute_14, false), console.log(zone_mute_14))}>
                  {zone14_mute ? (
                    <>
                      <img src={mute} className="volume_mute_btn" />
                      <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                  ) : (
                    <>
                      <p className="volume_txt">{ ((zone14_vol/65535) * 100).toFixed(0)}</p>
                      <p className="mute_btn_txt">Click to Mute</p>
                    </>
                  )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_14, true), window.CrComLib.publishEvent("b", zone_increase_14, false), console.log(zone_increase_14))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>
            </div>

            <div className='zone_container'>
              <div className='power_on_off'>
                <button className={zone_music_15_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_15, true), window.CrComLib.publishEvent("b", zone_music_15, false), console.log("turning off"))}>
                  <p>Power On</p>
                </button>
                <button className={zone_music_15_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_15, true), window.CrComLib.publishEvent("b", zone_off_15, false), console.log("turning off"))}>
                  <p>Power Off</p>
                </button>
              </div>

              <p className='zone_title'>{zone_name_15}</p>

              <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_15, true), window.CrComLib.publishEvent("b", zone_decrease_15, false), console.log(zone_decrease_15))}>
                  <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_15, true), window.CrComLib.publishEvent("b", zone_mute_15, false), console.log(zone_mute_15))}>
                  {zone15_mute ? (
                    <>
                      <img src={mute} className="volume_mute_btn" />
                      <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                  ) : (
                    <>
                      <p className="volume_txt">{ ((zone15_vol/65535) * 100).toFixed(0)}</p>
                      <p className="mute_btn_txt">Click to Mute</p>
                    </>
                  )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_15, true), window.CrComLib.publishEvent("b", zone_increase_15, false), console.log(zone_increase_15))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>
            </div>

            <div className='zone_container'>
              <div className='power_on_off'>
                <button className={zone_music_16_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_16, true), window.CrComLib.publishEvent("b", zone_music_16, false), console.log("turning off"))}>
                  <p>Power On</p>
                </button>
                <button className={zone_music_16_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_16, true), window.CrComLib.publishEvent("b", zone_off_16, false), console.log("turning off"))}>
                  <p>Power Off</p>
                </button>
              </div>

              <p className='zone_title'>{zone_name_16}</p>

              <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_16, true), window.CrComLib.publishEvent("b", zone_decrease_16, false), console.log(zone_decrease_16))}>
                  <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_16, true), window.CrComLib.publishEvent("b", zone_mute_16, false), console.log(zone_mute_16))}>
                  {zone16_mute ? (
                    <>
                      <img src={mute} className="volume_mute_btn" />
                      <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                  ) : (
                    <>
                      <p className="volume_txt">{ ((zone16_vol/65535) * 100).toFixed(0)}</p>
                      <p className="mute_btn_txt">Click to Mute</p>
                    </>
                  )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_16, true), window.CrComLib.publishEvent("b", zone_increase_16, false), console.log(zone_increase_16))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>
            </div>
      </>
    )


  return (
   
      <div className='audio_dashboard'>

<div className='audio_back_button' style={{display:"flex", justifyContent:"center", alignItems:"center", gridColumn:'1/2',gridRow:'1' }}>
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
            <div className='off_button_menu' style={{background:"none"}}>
         

              <button className='btn_square_wide' id={zoneGroup_1? "audio_zone_nav_active": "audio_zone_nav"} onClick={() => zoneMenu("zone1")} >
              <p> Up Stairs</p>
              </button>

              <button className='btn_square_wide'  id={zoneGroup_2? "audio_zone_nav_active": "audio_zone_nav"} onClick={() => zoneMenu("zone2")} >
              <p> Main </p>
              </button>

              <button className='btn_square_wide'  id={zoneGroup_3? "audio_zone_nav_active": "audio_zone_nav"} onClick={() => zoneMenu("zone3")} >
              <p> Down Stairs </p> 
              </button>

              <button className='btn_square_wide'  id={zoneGroup_4? "audio_zone_nav_active": "audio_zone_nav"} onClick={() => zoneMenu("zone4")} >
              <p> Out Doors </p> 
              </button>

              <button className='btn_square_wide' id='close_menu' onClick={() => zoneMenu("menuClose")} > 
                <img className="btn_image"  src={close} alt="" />
              </button>


            
            </div>
      <div className={openZones? "zone_menu": "display_none"}>

        <div style={{height:"5.1rem", width:"100%"}}></div>

        {zoneGroup_1? zoneGroup1 : ""}
        {zoneGroup_2? zoneGroup2 : ""}
        {zoneGroup_3? zoneGroup3 : ""}
        {zoneGroup_4? zoneGroup4 : ""}
        

        




          
      

         
         
       


      </div>
              
    </div>
  
         


          
        <div  className="audio_back_button" onClick={() => navigate(-1)}> 
            <button className="audio_back">
                <img src={backbutton}/>
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




    <div className="landscape_warning">
                <h1> Please rotate your device back to portrait mode. </h1>
                <img src={portraitMode}  />
      </div>
 

 

 </div>
  );
};

export default MediaServerWebSocket;
