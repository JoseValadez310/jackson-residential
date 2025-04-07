import React, { useEffect, useRef, useState, useCallback } from 'react';
import {useNavigate, useLocation} from "react-router-dom"
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
import MuteIcon from "../../assets/images/icons/icons8-no-audio.svg"

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







const MediaServerWebSocket: React.FC  = () => {

  //change these based on information 
  


  const [serverUrl, setServerUrl] = useState('ws://192.168.14.78:5004')
  const [url, setUrl] = useState("http://192.168.14.78")


  const switchPlayer = (id:string) =>{
    


    if(id === "steve"){
      setServerUrl('ws://192.168.14.78:5004')
      setUrl("http://192.168.14.78")

    }else if(id === "ellen"){
      setServerUrl('ws://192.168.14.79:5004')
      setUrl("http://192.168.14.79")
    }

  }


 


  

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

    
  

    console.log("[WebSocket] Attempting connection to this current IP address:", serverUrl);
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

      console.log("connection closed - this my current ip ",{serverUrl})
      // Try to reconnect after 100ms:
      setTimeout(() => connectWebSocket(), 100);
    };

    socketRef.current.onerror = (error) => {
      console.log("[WebSocket] Error occurred:", error);
    };
  }, [serverUrl]);

  // 2) sendCommand with useCallback
  const sendCommand = useCallback((command: string) => {
    console.log("[sendCommand] Attempting to send -------:", command);
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
      item.name !== "Deezer" &&
      item.name !== "SiriusXM Internet Radio" &&
      item.name !== "iHeartRadio" &&
      item.name !== "LiveOne" &&
      item.name !== "Murfie" &&
      item.name !== "Spotify" &&
      item.name !== "SoundMachine" &&
      item.name !== "TIDAL" &&
      item.name !== "TuneIn Radio" &&
      item.name !== "Napster" &&
      item.name !== "Amazon Music" &&
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
    const newMute = parsedData['Mute'] || currentStatus.mute || "False";


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
      mute: newMute,
 
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
  //const muteVolume = () => {
  //  console.log("[muteVolume] Toggling mute");
  //  doScriptCommand("Mute%20Toggle");
  //};
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





/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const [openZones, setOpenZones] = useState(false)
   
// Zone 1
const [zone1_vol, setZone1_vol] = useState(0);
const [zone1_mute, setZone1_mute] = useState(false);
const [zone_music_1_state, setZone_music_1_state] = useState(false);
const zone_music_1    = "--"; // zone_1_music
const zone_off_1      = "--";  // Zone1_off_fb
const zone_decrease_1 = "--"; // zone_1_decrease
const zone_mute_1     = "--"; // zone_1_mute
const zone_increase_1 = "--"; // zone_1_increase
const zone_name_1     = "Breakfast East Skip";

// Zone 2
const [zone2_vol, setZone2_vol] = useState(0);
const [zone2_mute, setZone2_mute] = useState(false);

const zone_2_location = '2'                                       // Go by Excel AV and Audio only zoon 
const [zone_active_2,setZone_active_2] = useState(0) // souce FB if Zeo then off, otherwise its on
const zone_music_2_steve   = 11; // zone_2_music for steve
//const zone_music_2_ellen  = "12"; // zone_2_music for steve
const zone_decrease_2 = "504"; // zone_2_decrease
const zone_mute_2     = "505"; // zone_2_mute
const zone_increase_2 = "506"; // zone_2_increase
const zone_name_2     = "Breakfast";

// Zone 3
const [zone3_vol, setZone3_vol] = useState(0);
const [zone3_mute, setZone3_mute] = useState(false);

const zone_3_location = '3'                                       // Go by Excel AV and Audio only zoon 
const [zone_active_3,setZone_active_3] = useState(0) // souce FB if Zeo then off, otherwise its on
const zone_music_3_steve   = 11; // zone_2_music for steve
//const zone_music_3_ellen  = "12"; // zone_2_music for steve

const zone_decrease_3 = "508"; // zone_3_decrease
const zone_mute_3     = "509"; // zone_3_mute
const zone_increase_3 = "510"; // zone_3_increase
const zone_name_3     = "Dining";

// Zone 4
const [zone4_vol, setZone4_vol] = useState(0);
const [zone4_mute, setZone4_mute] = useState(false);

const zone_4_location = '4'                                       // Go by Excel AV and Audio only zoon 
const [zone_active_4,setZone_active_4_steve] = useState(0) // souce FB if Zeo then off, otherwise its on
const zone_music_4_steve   = 11; // zone_2_music for steve
//const zone_music_4_ellen  = "12"; // zone_2_music for steve


const zone_decrease_4 = "512"; // zone_4_decrease
const zone_mute_4     = "513"; // zone_4_mute
const zone_increase_4 = "514"; // zone_4_increase
const zone_name_4     = "Ellen's Exercise";

// Zone 5
const [zone5_vol, setZone5_vol] = useState(0);
const [zone5_mute, setZone5_mute] = useState(false);

const zone_5_location = '5'                                       // Go by Excel AV and Audio only zoon 
const [zone_active_5,setZone_active_5] = useState(0) // souce FB if Zeo then off, otherwise its on
const zone_music_5_steve   = 11; // zone_2_music for steve
//const zone_music_5_ellen  = "12"; // zone_2_music for steve

const zone_decrease_5 = "516"; // zone_5_decrease
const zone_mute_5     = "517"; // zone_5_mute
const zone_increase_5 = "518"; // zone_5_increase
const zone_name_5     = "Ellen's Office";

// Zone 6
const [zone6_vol, setZone6_vol] = useState(0);
const [zone6_mute, setZone6_mute] = useState(false);

const zone_6_location = '6'                                       // Go by Excel AV and Audio only zoon 
const [zone_active_6,setZone_active_6] = useState(0) // souce FB if Zeo then off, otherwise its on
const zone_music_6_steve   = 11; // zone_2_music for steve
//const zone_music_6_ellen  = "12"; // zone_2_music for steve

const zone_decrease_6 = "520"; // zone_decrease
const zone_mute_6     = "521"; // zone_mute
const zone_increase_6 = "522"; // zone_increase
const zone_name_6     = "Ellen's Bath";

// Zone 7
const [zone7_vol, setZone7_vol] = useState(0);
const [zone7_mute, setZone7_mute] = useState(false);

const zone_7_location = '7'                                       // Go by Excel AV and Audio only zoon 
const [zone_active_7,setZone_active_7] = useState(0) // souce FB if Zeo then off, otherwise its on
const zone_music_7_steve   = 11; // zone_7_music for steve
//const zone_music_7_ellen  = "12"; // zone_7_music for ellen


const zone_decrease_7 = "524"; // zone_decrease
const zone_mute_7     = "525"; // zone_mute
const zone_increase_7 = "526"; // zone_increase
const zone_name_7     = "Family Room";

// Zone 8
const [zone8_vol, setZone8_vol] = useState(0);
const [zone8_mute, setZone8_mute] = useState(false);


const zone_8_location = '8'                                       // Go by Excel AV and Audio only zoon 
const [zone_active_8,setZone_active_8] = useState(0) // souce FB if Zeo then off, otherwise its on
//const [zone_active_8_ellen,setZone_active_8_ellen] = useState(0) //
const zone_music_8_steve   = 11; // zone_8_music for steve

const zone_decrease_8 = "528"; // zone_decrease
const zone_mute_8     = "529"; // zone_mute
const zone_increase_8 = "530"; // zone_increase
const zone_name_8     = "Guest Bedroom";




// Zone 9
const [zone9_vol, setZone9_vol] = useState(0);
const [zone9_mute, setZone9_mute] = useState(false);

const zone_9_location = '9' 
const [zone_active_9,setZone_active_9] = useState(0) // souce FB if Zeo then off, otherwise its on
//const [zone_active_9_ellen,setZone_active_9_ellen] = useState(0) //
const zone_music_9_steve   = 11; // zone_9_music for steve

const zone_decrease_9 = "532"; // zone_decrease
const zone_mute_9     = "533"; // zone_mute
const zone_increase_9 = "534"; // zone_increase
const zone_name_9     = "Master Bedroom";

// Zone 10
const [zone10_vol, setZone10_vol] = useState(0);
const [zone10_mute, setZone10_mute] = useState(false);

const zone_10_location = '10' 
const [zone_active_10,setZone_active_10] = useState(0) // souce FB if Zeo then off, otherwise its on
//const [zone_active_10_ellen,setZone_active_10_ellen] = useState(0) //
const zone_music_10_steve   = 11; // zone_9_music for steve

const zone_decrease_10 = "536"; // zone_decrease
const zone_mute_10    = "537"; // zone_mute
const zone_increase_10 = "538"; // zone_increase
const zone_name_10    = "Media Room";

// Zone 11
const [zone11_vol, setZone11_vol] = useState(0);
const [zone11_mute, setZone11_mute] = useState(false);

const zone_11_location = '11' 
const [zone_active_11,setZone_active_11] = useState(0) // souce FB if Zeo then off, otherwise its on
//const [zone_active_11_ellen,setZone_active_11_ellen] = useState(0) //
const zone_music_11_steve   = 11; // zone_9_music for steve

const zone_decrease_11 = "540"; // zone_decrease
const zone_mute_11    = "541"; // zone_mute
const zone_increase_11 = "542"; // zone_increase
const zone_name_11    = "Arcade 1";

// Zone 12
const [zone12_vol, setZone12_vol] = useState(0);
const [zone12_mute, setZone12_mute] = useState(false);

const zone_12_location = '12' 
const [zone_active_12,setZone_active_12] = useState(0) // souce FB if Zeo then off, otherwise its on
//const [zone_active_12_ellen,setZone_active_12_ellen] = useState(0) //
const zone_music_12_steve   = 11; // zone_9_music for steve

const zone_decrease_12 = "544"; // zone_decrease
const zone_mute_12    = "545"; // zone_mute
const zone_increase_12 = "546"; // zone_increase
const zone_name_12    = "Arcade 2";

// Zone 13
const [zone13_vol, setZone13_vol] = useState(0);
const [zone13_mute, setZone13_mute] = useState(false);

const zone_13_location = '13' 
const [zone_active_13,setZone_active_13] = useState(0) // souce FB if Zeo then off, otherwise its on
//const [zone_active_12_ellen,setZone_active_13_ellen] = useState(0) //
const zone_music_13_steve   = 11; // zone_9_music for steve

const zone_decrease_13 = "548"; // zone_decrease
const zone_mute_13    = "549"; // zone_mute
const zone_increase_13 = "550"; // zone_increase
const zone_name_13    = "Arcade 3";

// Zone 14
const [zone14_vol, setZone14_vol] = useState(0);
const [zone14_mute, setZone14_mute] = useState(false);

const zone_14_location = '14' 
const [zone_active_14,setZone_active_14] = useState(0) // souce FB if Zeo then off, otherwise its on
//const [zone_active_12_ellen,setZone_active_13_ellen] = useState(0) //
const zone_music_14_steve   = 11; // zone_9_music for steve

const zone_decrease_14 = "552"; // zone_decrease
const zone_mute_14    = "553"; // zone_mute
const zone_increase_14 = "554"; // zone_increase
const zone_name_14    = "Pool Patio";

// Zone 15
const [zone15_vol, setZone15_vol] = useState(0);
const [zone15_mute, setZone15_mute] = useState(false);

const zone_15_location = '15' 
const [zone_active_15,setZone_active_15_steve] = useState(0) // souce FB if Zeo then off, otherwise its on
//const [zone_active_12_ellen,setZone_active_13_ellen] = useState(0) //
const zone_music_15_steve   = 11; // zone_9_music for steve

const zone_decrease_15 = "556"; // zone_decrease
const zone_mute_15    = "557"; // zone_mute
const zone_increase_15 = "558"; // zone_increase
const zone_name_15    = "Game Room";







// Zone 16
const [zone16_vol, setZone16_vol] = useState(0);
const [zone16_mute, setZone16_mute] = useState(false);

const zone_16_location = '16' 
const [zone_active_16,setZone_active_16] = useState(0) // souce FB if Zeo then off, otherwise its on
//const [zone_active_12_ellen,setZone_active_13_ellen] = useState(0) //
const zone_music_16_steve   = 11; // zone_9_music for steve

const zone_decrease_16 = "560"; // zone_decrease
const zone_mute_16    = "561"; // zone_mute
const zone_increase_16 = "562"; // zone_increase
const zone_name_16    = "Guest Bathroom";

// Zone 17
const [zone17_vol, setZone17_vol] = useState(0);
const [zone17_mute, setZone17_mute] = useState(false);

const zone_17_location = '17' 
const [zone_active_17,setZone_active_17] = useState(0) // souce FB if Zeo then off, otherwise its on
//const [zone_active_12_ellen,setZone_active_13_ellen] = useState(0) //
const zone_music_17_steve   = 11; // zone_9_music for steve

const zone_decrease_17 = "564"; // zone_decrease
const zone_mute_17    = "565"; // zone_mute
const zone_increase_17 = "566"; // zone_increase
const zone_name_17    = "Steve's Office";

// Zone 18
const [zone18_vol, setZone18_vol] = useState(0);
const [zone18_mute, setZone18_mute] = useState(false);

const zone_18_location = '18' 
const [zone_active_18,setZone_active_18] = useState(0) // souce FB if Zeo then off, otherwise its on
//const [zone_active_12_ellen,setZone_active_13_ellen] = useState(0) //
const zone_music_18_steve   = 11; // zone_9_music for steve

const zone_decrease_18 = "568"; // zone_decrease
const zone_mute_18    = "569"; // zone_mute
const zone_increase_18 = "570"; // zone_increase
const zone_name_18    = "Living Room";

// Zone 19
const [zone19_vol, setZone19_vol] = useState(0);
const [zone19_mute, setZone19_mute] = useState(false);

const zone_19_location = '19' 
const [zone_active_19,setZone_active_19] = useState(0) // souce FB if Zeo then off, otherwise its on
//const [zone_active_12_ellen,setZone_active_13_ellen] = useState(0) //
const zone_music_19_steve   = 11; // zone_9_music for steve

const zone_decrease_19 = "572"; // zone_decrease
const zone_mute_19    = "573"; // zone_mute
const zone_increase_19 = "574"; // zone_increase
const zone_name_19    = "Kitchen";



// Zone 20
const [zone20_vol, setZone20_vol] = useState(0);
const [zone20_mute, setZone20_mute] = useState(false);

const zone_20_location = '20' 
const [zone_active_20,setZone_active_20] = useState(0) // souce FB if Zeo then off, otherwise its on
//const [zone_active_12_ellen,setZone_active_13_ellen] = useState(0) //
const zone_music_20_steve   = 11; // zone_9_music for steve

const zone_decrease_20 = "576"; // zone_decrease
const zone_mute_20    = "577"; // zone_mute
const zone_increase_20 = "578"; // zone_increase
const zone_name_20    = "Pool Area";

// Zone 21
const [zone21_vol, setZone21_vol] = useState(0);
const [zone21_mute, setZone21_mute] = useState(false);

const zone_21_location = '21' 
const [zone_active_21,setZone_active_21] = useState(0) // souce FB if Zeo then off, otherwise its on
//const [zone_active_12_ellen,setZone_active_13_ellen] = useState(0) //
const zone_music_21_steve   = 11; // zone_9_music for steve

const zone_decrease_21 = "580"; // zone_decrease
const zone_mute_21    = "581"; // zone_mute
const zone_increase_21 = "582"; // zone_increase
const zone_name_21    = "Gym";


// Zone 22
const [zone22_vol, setZone22_vol] = useState(0);
const [zone22_mute, setZone22_mute] = useState(false);

const zone_22_location = '22' 
const [zone_active_22,setZone_active_22] = useState(0) // souce FB if Zeo then off, otherwise its on
//const [zone_active_12_ellen,setZone_active_13_ellen] = useState(0) //
const zone_music_22_steve   = 11; // zone_9_music for steve

const zone_decrease_22 = "584"; // zone_decrease
const zone_mute_22    = "585"; // zone_mute
const zone_increase_22 = "586"; // zone_increase
const zone_name_22    = "Breeze Way";

// Zone 23
const [zone23_vol, setZone23_vol] = useState(0);
const [zone23_mute, setZone23_mute] = useState(false);

const zone_23_location = '23' 
const [zone_active_23,setZone_active_23] = useState(0) // souce FB if Zeo then off, otherwise its on
//const [zone_active_12_ellen,setZone_active_13_ellen] = useState(0) //
const zone_music_23_steve   = 11; // zone_9_music for steve

const zone_decrease_23 = "588"; // zone_decrease
const zone_mute_23    = "589"; // zone_mute
const zone_increase_23 = "590"; // zone_increase
const zone_name_23    = "Upper Pool Deck";



    useEffect(() => {


    // Steve's Audio Feedback
    // AV Zones
    const zone_2_active_fb_steve = window.CrComLib.subscribeState("n",zone_2_location,(value: number)=> setZone_active_2(value))
    const zone_3_active_fb_steve = window.CrComLib.subscribeState("n",zone_3_location,(value: number)=> setZone_active_3(value))
    const zone_4_active_fb_steve = window.CrComLib.subscribeState("n",zone_4_location,(value: number)=> setZone_active_4_steve(value))
    const zone_5_active_fb_steve = window.CrComLib.subscribeState("n",zone_5_location,(value: number)=> setZone_active_5(value))
    const zone_6_active_fb_steve = window.CrComLib.subscribeState("n",zone_6_location,(value: number)=> setZone_active_6(value))
    const zone_7_active_fb_steve = window.CrComLib.subscribeState("n",zone_7_location,(value: number)=> setZone_active_7(value))
    const zone_8_active_fb_steve = window.CrComLib.subscribeState("n",zone_8_location,(value: number)=> setZone_active_8(value))
    const zone_9_active_fb_steve = window.CrComLib.subscribeState("n",zone_9_location,(value: number)=> setZone_active_9(value))
    const zone_10_active_fb_steve = window.CrComLib.subscribeState("n",zone_10_location,(value: number)=> setZone_active_10(value))
    const zone_11_active_fb_steve = window.CrComLib.subscribeState("n",zone_11_location,(value: number)=> setZone_active_11(value))
    const zone_12_active_fb_steve = window.CrComLib.subscribeState("n",zone_12_location,(value: number)=> setZone_active_12(value))
    const zone_13_active_fb_steve = window.CrComLib.subscribeState("n",zone_13_location,(value: number)=> setZone_active_13(value))
    const zone_14_active_fb_steve = window.CrComLib.subscribeState("n",zone_14_location,(value: number)=> setZone_active_14(value))
    const zone_15_active_fb_steve = window.CrComLib.subscribeState("n",zone_15_location,(value: number)=> setZone_active_15_steve(value))
    const zone_16_active_fb_steve = window.CrComLib.subscribeState("n",zone_16_location,(value: number)=> setZone_active_16(value))
        // audio only zones
    const zone_17_active_fb_steve = window.CrComLib.subscribeState("n",zone_17_location,(value: number)=> setZone_active_17(value))
    const zone_18_active_fb_steve = window.CrComLib.subscribeState("n",zone_18_location,(value: number)=> setZone_active_18(value))
    const zone_19_active_fb_steve = window.CrComLib.subscribeState("n",zone_19_location,(value: number)=> setZone_active_19(value))
    const zone_20_active_fb_steve = window.CrComLib.subscribeState("n",zone_20_location,(value: number)=> setZone_active_20(value))
    const zone_21_active_fb_steve = window.CrComLib.subscribeState("n",zone_21_location,(value: number)=> setZone_active_21(value))
    const zone_22_active_fb_steve = window.CrComLib.subscribeState("n",zone_22_location,(value: number)=> setZone_active_22(value))
    const zone_23_active_fb_steve = window.CrComLib.subscribeState("n",zone_23_location,(value: number)=> setZone_active_23(value))

// Ellens dont worry about these just yet 
//---------------------------------------------------------------------------------------------------------------------------------------------
 
 //---------------------------------------------------------------------------------------------------------------------------------------------
 
 
     // Mute Feedback for all Zones 
          // AV Zones
      const zone_1  = window.CrComLib.subscribeState("b", zone_mute_1,  (value: boolean) => { setZone1_mute(value); }); // Breakfast East --Skip--
      const zone_2  = window.CrComLib.subscribeState("b", zone_mute_2,  (value: boolean) => { setZone2_mute(value); }); // Breakfast West 
      const zone_3  = window.CrComLib.subscribeState("b", zone_mute_3,  (value: boolean) => { setZone3_mute(value); }); // Dining Room
      const zone_4  = window.CrComLib.subscribeState("b", zone_mute_4,  (value: boolean) => { setZone4_mute(value); }); // Ellen's Exercise 
      const zone_5  = window.CrComLib.subscribeState("b", zone_mute_5,  (value: boolean) => { setZone5_mute(value); }); // Ellen's Office
      const zone_6  = window.CrComLib.subscribeState("b", zone_mute_6,  (value: boolean) => { setZone6_mute(value); }); // Ellen's Bath
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
          // audio only mute
      const zone_19 = window.CrComLib.subscribeState("b", zone_mute_19, (value: boolean) => { setZone19_mute(value); });
      const zone_20 = window.CrComLib.subscribeState("b", zone_mute_20, (value: boolean) => { setZone20_mute(value); });
      const zone_21 = window.CrComLib.subscribeState("b", zone_mute_21, (value: boolean) => { setZone21_mute(value); });
      const zone_22 = window.CrComLib.subscribeState("b", zone_mute_22, (value: boolean) => { setZone22_mute(value); });
      const zone_23 = window.CrComLib.subscribeState("b", zone_mute_23, (value: boolean) => { setZone23_mute(value); });

// --- Subscribe to Volume States for Zones 1-23 ---
      const zone_vol_1  = window.CrComLib.subscribeState("n", "100", (value: number) => { setZone1_vol(value); }); // skip
      
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

      const zone_vol_16 = window.CrComLib.subscribeState("n", "---", (value: number) => { setZone16_vol(value); });

      const zone_vol_17 = window.CrComLib.subscribeState("n", "116", (value: number) => { setZone17_vol(value); });
      const zone_vol_18 = window.CrComLib.subscribeState("n", "117", (value: number) => { setZone18_vol(value); });
      const zone_vol_19 = window.CrComLib.subscribeState("n", "118", (value: number) => { setZone19_vol(value); });
      const zone_vol_20 = window.CrComLib.subscribeState("n", "119", (value: number) => { setZone20_vol(value); });
      const zone_vol_21 = window.CrComLib.subscribeState("n", "120", (value: number) => { setZone21_vol(value); });
      const zone_vol_22 = window.CrComLib.subscribeState("n", "121", (value: number) => { setZone22_vol(value); });
      const zone_vol_23 = window.CrComLib.subscribeState("n", "122", (value: number) => { setZone23_vol(value); });


      const zone_music_state_1  = window.CrComLib.subscribeState("b", zone_music_1,  (value: boolean) => { setZone_music_1_state(value); });
     
      
  

      return () => {


        //Steve Feedbaack zones 

        window.CrComLib.unsubscribeState("n",zone_2_location,zone_2_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_3_location,zone_3_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_4_location,zone_4_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_5_location,zone_5_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_6_location,zone_6_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_7_location,zone_7_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_8_location,zone_8_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_9_location,zone_9_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_10_location,zone_10_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_11_location,zone_11_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_12_location,zone_12_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_13_location,zone_13_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_14_location,zone_14_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_15_location,zone_15_active_fb_steve)

        //audio only 
        window.CrComLib.unsubscribeState("n",zone_16_location,zone_16_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_17_location,zone_17_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_18_location,zone_18_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_19_location,zone_19_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_20_location,zone_20_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_21_location,zone_21_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_22_location,zone_22_active_fb_steve)
        window.CrComLib.unsubscribeState("n",zone_23_location,zone_23_active_fb_steve)

        //Ellen feedback zones
     


      
        // Zone FB for Zones 
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
        window.CrComLib.unsubscribeState("b", zone_mute_19, zone_19);
        window.CrComLib.unsubscribeState("b", zone_mute_20, zone_20);
        window.CrComLib.unsubscribeState("b", zone_mute_21, zone_21);
        window.CrComLib.unsubscribeState("b", zone_mute_22, zone_22);
        window.CrComLib.unsubscribeState("b", zone_mute_23, zone_23);
      
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

        window.CrComLib.unsubscribeState("n", "---", zone_vol_16); // Guest Bathroom skip

        window.CrComLib.unsubscribeState("n", "116", zone_vol_17); // Steve's Office
        window.CrComLib.unsubscribeState("n", "117", zone_vol_18); // Living Room 
        window.CrComLib.unsubscribeState("n", "118", zone_vol_19); // Kitchen
        window.CrComLib.unsubscribeState("n", "119", zone_vol_20); // Pool Area
        window.CrComLib.unsubscribeState("n", "120", zone_vol_21); // Gym
        window.CrComLib.unsubscribeState("n", "121", zone_vol_22); // Breeze Way
        window.CrComLib.unsubscribeState("n", "122", zone_vol_23); // upper pool deck
  

        window.CrComLib.unsubscribeState("b", zone_music_1,  zone_music_state_1);
    



        
        
          
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

          <div id={zone_active_4 > 0 ? "active_btn" : "zone-4"} className='zone_container'>
            <div className='zone_title'>
             <p>{zone_name_4}</p>
            </div>

            <button className='zone_container_user_1'
            id={zone_active_4 === 11 ? 'active_user' : " "}>
            {zone_active_4 === 11 ?  
              <p onTouchEnd={() => (window.CrComLib.publishEvent("n", zone_4_location, 0), showAudioControls(false))}>
                Turn Off Music
              </p> 
              : 
              <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_4_location, zone_music_4_steve)}>
                Steve
              </p>
            }
            </button>

            <button className='zone_container_user_2'
            id={zone_active_4 === 12 ? 'active_user' : " "}>
            {zone_active_4 === 12 ?  
              <p onTouchEnd={() => (window.CrComLib.publishEvent("n", zone_4_location, 0), showAudioControls(false))}>
                Turn Off Music
              </p> 
              : 
              <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_4_location, 12)}>
                Ellen
              </p>
            }
            </button>

            <div className='zone_controls'>
            <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_4, true), window.CrComLib.publishEvent("b", zone_decrease_4, false), console.log(zone_decrease_4))}>
              <img className="btn_image" src={arrow} />
            </button>

            <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_4, true), window.CrComLib.publishEvent("b", zone_mute_4, false), console.log(zone_mute_4))}>
              {zone4_mute ? (
                <>
                  <img src={MuteIcon} className="volume_mute_btn" />
                  <p className="mute_btn_txt">Click to Unmute</p>
                </>
              ) : (
                <>
                  <p className="volume_txt">{ ((zone4_vol / 65535) * 100).toFixed(0) }</p>
                  <p className="mute_btn_txt">Click to Mute</p>
                </>
              )}
            </button>

            <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_4, true), window.CrComLib.publishEvent("b", zone_increase_4, false), console.log(zone_increase_4))}>
              <img className="btn_image" src={arrow} id="flip" />
            </button>
            </div>

            <div className='power_on_off'>
            {zone_active_4 === 11 ? 
              <p>Steve is currnetly playing music.</p>
              : zone_active_4 === 12 ? 
              <p>Ellen is currnetly playing music.</p>
              : zone_active_4 > 0 ? 
              <p> A user is currently watching TV in this Zone</p>
              : <p> System Off</p>
            }
            </div>
          </div>


          <div id={zone_active_5 > 0 ? "active_btn" : "zone-5"} className='zone_container'>
            <div className='zone_title'>
              <p>{zone_name_5}</p>
            </div>
            
            <button className='zone_container_user_1'
              id={zone_active_5 === 11 ? 'active_user' : " "}>
              {zone_active_5 === 11 ?  
                <p onTouchEnd={() => (window.CrComLib.publishEvent("n", zone_5_location, 0),showAudioControls(false))}>
                  Turn Off Music
                </p> 
                : 
                <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_5_location, zone_music_5_steve)}>
                  Steve
                </p>
              }
            </button>
            
            <button className='zone_container_user_2'
              id={zone_active_5 === 12 ? 'active_user' : " "}>
              {zone_active_5 === 12 ?  
                <p onTouchEnd={() => (window.CrComLib.publishEvent("n", zone_5_location, 0),showAudioControls(false))}>
                  Turn Off Music
                </p> 
                : 
                <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_5_location, 12)}>
                  Ellen
                </p>
              }
            </button>
            
            <div className='zone_controls'>
              <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_5, true), window.CrComLib.publishEvent("b", zone_decrease_5, false), console.log(zone_decrease_5))}>
                <img className="btn_image" src={arrow} />
              </button>
              
              <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_5, true), window.CrComLib.publishEvent("b", zone_mute_5, false), console.log(zone_mute_5))}>
                {zone5_mute ? (
                  <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                  </>
                ) : (
                  <>
                    <p className="volume_txt">{ ((zone5_vol / 65535) * 100).toFixed(0) }</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                  </>
                )}
              </button>
              
              <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_5, true), window.CrComLib.publishEvent("b", zone_increase_5, false), console.log(zone_increase_5))}>
                <img className="btn_image" src={arrow} id="flip" />
              </button>
            </div>
            
            <div className='power_on_off'>
              {zone_active_5 === 11 ? 
                <p>Steve is currnetly playing music.</p>
                : zone_active_5 === 12 ? 
                <p>Ellen is currnetly playing music.</p>
                : zone_active_5 > 0 ? 
                <p> A user is currently watching TV in this Zone</p>
                : <p> System Off</p>
              }
            </div>
          </div>

          <div id={zone_active_6 > 0 ? "active_btn" : "zone-6"} className='zone_container'>
          <div className='zone_title'>
          <p>{zone_name_6}</p>
          </div>

          <button className='zone_container_user_1'
          id={zone_active_6 === 11 ? 'active_user' : " "}>
          {zone_active_6 === 11 ?  
          <p onTouchEnd={() => (window.CrComLib.publishEvent("n", zone_6_location, 0),showAudioControls(false))}>
          Turn Off Music
          </p> 
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_6_location, zone_music_6_steve)}>
          Steve
          </p>
          }
          </button>

          <button className='zone_container_user_2'
          id={zone_active_6 === 12 ? 'active_user' : " "}>
          {zone_active_6 === 12 ?  
          <p onTouchEnd={() => (window.CrComLib.publishEvent("n", zone_6_location, 0),showAudioControls(false))}>
          Turn Off Music
          </p> 
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_6_location, 12)}>
          Ellen
          </p>
          }
          </button>

          <div className='zone_controls'>
          <button className="btn_circle" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_6, true), 
                            window.CrComLib.publishEvent("b", zone_decrease_6, false), 
                            console.log(zone_decrease_6))}>
          <img className="btn_image" src={arrow} />
          </button>

          <button className="btn_square_wide" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_6, true), 
                            window.CrComLib.publishEvent("b", zone_mute_6, false), 
                            console.log(zone_mute_6))}>
          {zone6_mute ? (
          <>
          <img src={MuteIcon} className="volume_mute_btn" />
          <p className="mute_btn_txt">Click to Unmute</p>
          </>
          ) : (
          <>
          <p className="volume_txt">{ ((zone6_vol / 65535) * 100).toFixed(0) }</p>
          <p className="mute_btn_txt">Click to Mute</p>
          </>
          )}
          </button>

          <button className="btn_circle" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_6, true), 
                            window.CrComLib.publishEvent("b", zone_increase_6, false), 
                            console.log(zone_increase_6))}>
          <img className="btn_image" src={arrow} id="flip" />
          </button>
          </div>

          <div className='power_on_off'>
          {zone_active_6 === 11 ? 
          <p>Steve is currnetly playing music.</p>
          : zone_active_6 === 12 ? 
          <p>Ellen is currnetly playing music.</p>
          : zone_active_6 > 0 ? 
          <p>A user is currently watching TV in this Zone</p>
          : <p>System Off</p>
          }
          </div>
          </div>


          <div id={zone_active_16 > 0 ? "active_btn" : "zone-16"} className='zone_container'>
          <div className='zone_title'>
          <p>{zone_name_16}</p>
          </div>

          <button className='zone_container_user_1'
          id={zone_active_16 === 11 ? 'active_user' : " "}>
          {zone_active_16 === 11 ?  
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_16_location, 0)}>
          Turn Off Music
          </p> 
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_16_location, zone_music_16_steve)}>
          Steve
          </p>
          }
          </button>

          <button className='zone_container_user_2'
          id={zone_active_16 === 12 ? 'active_user' : " "}>
          {zone_active_16 === 12 ?  
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_16_location, 0)}>
          Turn Off Music
          </p> 
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_16_location, 12)}>
          Ellen
          </p>
          }
          </button>

          <div className='zone_controls'>
          <button className="btn_circle" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_16, true), 
                            window.CrComLib.publishEvent("b", zone_decrease_16, false), 
                            console.log(zone_decrease_16))}>
          <img className="btn_image" src={arrow} />
          </button>

          <button className="btn_square_wide" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_16, true), 
                            window.CrComLib.publishEvent("b", zone_mute_16, false), 
                            console.log(zone_mute_16))}>
          {zone16_mute ? (
          <>
          <img src={MuteIcon} className="volume_mute_btn" />
          <p className="mute_btn_txt">Click to Unmute</p>
          </>
          ) : (
          <>
          <p className="volume_txt">{ ((zone16_vol / 65535) * 100).toFixed(0) }</p>
          <p className="mute_btn_txt">Click to Mute</p>
          </>
          )}
          </button>

          <button className="btn_circle" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_16, true), 
                            window.CrComLib.publishEvent("b", zone_increase_16, false), 
                            console.log(zone_increase_16))}>
          <img className="btn_image" src={arrow} id="flip" />
          </button>
          </div>

          <div className='power_on_off'>
          {zone_active_16 === 11 ? 
          <p>Steve is currnetly playing music.</p>
          : zone_active_16 === 12 ? 
          <p>Ellen is currnetly playing music.</p>
          : zone_active_16 > 0 ? 
          <p>A user is currently watching TV in this Zone</p>
          : <p>System Off</p>
          }
          </div>
          </div>
            
          <div id={zone_active_8 > 0 ? "active_btn" : "zone-8"} className='zone_container'>
          <div className='zone_title'>
          <p>{zone_name_8}</p>
          </div>

          <button className='zone_container_user_1'
          id={zone_active_8 === 11 ? 'active_user' : " "}>
          {zone_active_8 === 11 ?  
          <p onTouchEnd={() => (window.CrComLib.publishEvent("n", zone_8_location, 0),showAudioControls(false))}>
          Turn Off Music
          </p> 
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_8_location, zone_music_8_steve)}>
          Steve
          </p>
          }
          </button>

          <button className='zone_container_user_2'
          id={zone_active_8 === 12 ? 'active_user' : " "}>
          {zone_active_8 === 12 ?  
          <p onTouchEnd={() => (window.CrComLib.publishEvent("n", zone_8_location, 0),showAudioControls(false))}>
          Turn Off Music
          </p> 
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_8_location, 12)}>
          Ellen
          </p>
          }
          </button>

          <div className='zone_controls'>
          <button className="btn_circle" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_8, true), 
                            window.CrComLib.publishEvent("b", zone_decrease_8, false), 
                            console.log(zone_decrease_8))}>
          <img className="btn_image" src={arrow} />
          </button>

          <button className="btn_square_wide" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_8, true), 
                            window.CrComLib.publishEvent("b", zone_mute_8, false), 
                            console.log(zone_mute_8))}>
          {zone8_mute ? (
          <>
          <img src={MuteIcon} className="volume_mute_btn" />
          <p className="mute_btn_txt">Click to Unmute</p>
          </>
          ) : (
          <>
          <p className="volume_txt">{ ((zone8_vol / 65535) * 100).toFixed(0) }</p>
          <p className="mute_btn_txt">Click to Mute</p>
          </>
          )}
          </button>

          <button className="btn_circle" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_8, true), 
                            window.CrComLib.publishEvent("b", zone_increase_8, false), 
                            console.log(zone_increase_8))}>
          <img className="btn_image" src={arrow} id="flip" />
          </button>
          </div>

          <div className='power_on_off'>
          {zone_active_8 === 11 ? 
          <p>Steve is currnetly playing music.</p>
          : zone_active_8 === 12 ? 
          <p>Ellen is currnetly playing music.</p>
          : zone_active_8 > 0 ? 
          <p>A user is currently watching TV in this Zone</p>
          : <p>System Off</p>
          }
          </div>
          </div>

          <div id={zone_active_9 > 0 ? "active_btn" : "zone-9"} className='zone_container'>
          <div className='zone_title'>
          <p>{zone_name_9}</p>
          </div>

          <button className='zone_container_user_1'
          id={zone_active_9 === 11 ? 'active_user' : " "}>
          {zone_active_9 === 11 ?  
          <p onTouchEnd={() => (window.CrComLib.publishEvent("n", zone_9_location, 0),showAudioControls(false))}>
          Turn Off Music
          </p> 
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_9_location, zone_music_9_steve)}>
          Steve
          </p>
          }
          </button>

          <button className='zone_container_user_2'
          id={zone_active_9 === 12 ? 'active_user' : " "}>
          {zone_active_9 === 12 ?  
          <p onTouchEnd={() => (window.CrComLib.publishEvent("n", zone_9_location, 0),showAudioControls(false))}>
          Turn Off Music
          </p> 
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_9_location, 12)}>
          Ellen
          </p>
          }
          </button>

          <div className='zone_controls'>
          <button className="btn_circle" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_9, true), 
                            window.CrComLib.publishEvent("b", zone_decrease_9, false), 
                            console.log(zone_decrease_9))}>
          <img className="btn_image" src={arrow} />
          </button>

          <button className="btn_square_wide" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_9, true), 
                            window.CrComLib.publishEvent("b", zone_mute_9, false), 
                            console.log(zone_mute_9))}>
          {zone9_mute ? (
          <>
          <img src={MuteIcon} className="volume_mute_btn" />
          <p className="mute_btn_txt">Click to Unmute</p>
          </>
          ) : (
          <>
          <p className="volume_txt">{ ((zone9_vol / 65535) * 100).toFixed(0) }</p>
          <p className="mute_btn_txt">Click to Mute</p>
          </>
          )}
          </button>

          <button className="btn_circle" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_9, true), 
                            window.CrComLib.publishEvent("b", zone_increase_9, false), 
                            console.log(zone_increase_9))}>
          <img className="btn_image" src={arrow} id="flip" />
          </button>
          </div>

          <div className='power_on_off'>
          {zone_active_9 === 11 ? 
          <p>Steve is currnetly playing music.</p>
          : zone_active_9 === 12 ? 
          <p>Ellen is currnetly playing music.</p>
          : zone_active_9 > 0 ? 
          <p>A user is currently watching TV in this Zone</p>
          : <p>System Off</p>
          }
          </div>
          </div>

          <div id={zone_active_10 > 0 ? "active_btn" : "zone-10"} className='zone_container'>
          <div className='zone_title'>
          <p>{zone_name_10}</p>
          </div>

          <button className='zone_container_user_1'
          id={zone_active_10 === 11 ? 'active_user' : " "}>
          {zone_active_10 === 11 ?  
          <p onTouchEnd={() => (window.CrComLib.publishEvent("n", zone_10_location, 0),showAudioControls(false))}>
          Turn Off Music
          </p> 
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_10_location, zone_music_10_steve)}>
          Steve
          </p>
          }
          </button>

          <button className='zone_container_user_2'
          id={zone_active_10 === 12 ? 'active_user' : " "}>
          {zone_active_10 === 12 ?  
          <p onTouchEnd={() => (window.CrComLib.publishEvent("n", zone_10_location, 0),showAudioControls(false))}>
          Turn Off Music
          </p> 
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_10_location, 12)}>
          Ellen
          </p>
          }
          </button>

          <div className='zone_controls'>
          <button className="btn_circle" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_10, true), 
                            window.CrComLib.publishEvent("b", zone_decrease_10, false), 
                            console.log(zone_decrease_10))}>
          <img className="btn_image" src={arrow} />
          </button>

          <button className="btn_square_wide" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_10, true), 
                            window.CrComLib.publishEvent("b", zone_mute_10, false), 
                            console.log(zone_mute_10))}>
          {zone10_mute ? (
          <>
          <img src={MuteIcon} className="volume_mute_btn" />
          <p className="mute_btn_txt">Click to Unmute</p>
          </>
          ) : (
          <>
          <p className="volume_txt">{ ((zone10_vol / 65535) * 100).toFixed(0) }</p>
          <p className="mute_btn_txt">Click to Mute</p>
          </>
          )}
          </button>

          <button className="btn_circle" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_10, true), 
                            window.CrComLib.publishEvent("b", zone_increase_10, false), 
                            console.log(zone_increase_10))}>
          <img className="btn_image" src={arrow} id="flip" />
          </button>
          </div>

          <div className='power_on_off'>
          {zone_active_10 === 11 ? 
          <p>Steve is currnetly playing music.</p>
          : zone_active_10 === 12 ? 
          <p>Ellen is currnetly playing music.</p>
          : zone_active_10 > 0 ? 
          <p>A user is currently watching TV in this Zone</p>
          : <p>System Off</p>
          }
          </div>
          </div>



      </>
    )

    const zoneGroup2 = (

      <>
          
            <div id="zone-1" className='display_none'>
              <div className='power_on_off'>
                <button className={zone_music_1_state ? "display_none" : "power_on"} onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_music_1, true), window.CrComLib.publishEvent("b", zone_music_1, false), console.log("turning off"))}>
                  <p>Power On</p>
                </button>
                <button className={zone_music_1_state ? "power_off" : "display_none"} onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_off_1, true), window.CrComLib.publishEvent("b", zone_off_1, false), console.log("turning off"))}>
                  <p>Power Off</p>
                </button>
              </div>

              <p className='zone_title'>{zone_name_1}</p>

              <div className='zone_controls'>
                <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_1, true), window.CrComLib.publishEvent("b", zone_decrease_1, false), console.log(zone_decrease_1))}>
                  <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_1, true), window.CrComLib.publishEvent("b", zone_mute_1, false), console.log(zone_mute_1))}>
                  {zone1_mute ? (
                    <>
                      <img src={MuteIcon} className="volume_mute_btn" />
                      <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                  ) : (
                    <>
                      <p className="volume_txt">{ ((zone1_vol/65535) * 100).toFixed(0)}</p>
                      <p className="mute_btn_txt">Click to Mute</p>
                    </>
                  )}
                </button>

                <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_1, true), window.CrComLib.publishEvent("b", zone_increase_1, false), console.log(zone_increase_1))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>
            </div>

            <div id={zone_active_2>0? "active_btn" : "zone-2"} className='zone_container'>
          
              <div className='zone_title' >
                <p>{zone_name_2}</p>
              </div>
              
              <button className='zone_container_user_1'   
                  id={zone_active_2 === 11? 'active_user':" " }>
                  {zone_active_2 === 11?  

                    <p onTouchEnd={() => (window.CrComLib.publishEvent("n",zone_2_location, 0), showAudioControls(false))}>
                      Turn Off Music
                    </p> 
                    : 
                    <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_2_location, zone_music_2_steve)}>
                      Steve
                    </p> 
                  } 
              </button>
             
              <button className='zone_container_user_2'   
                  id={zone_active_2 === 12? 'active_user':" " }>
                  {zone_active_2 === 12?  

                    <p onTouchEnd={() => (window.CrComLib.publishEvent("n",zone_2_location, 0), showAudioControls(false))}>
                      Turn Off Music
                    </p> 
                    : 
                    <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_2_location, 12)}>
                      Ellen
                    </p> 
                  } 
              </button>

              <div className='zone_controls'>
                <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_2, true), window.CrComLib.publishEvent("b", zone_decrease_2, false), console.log(zone_decrease_2))}>
                  <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_2, true), window.CrComLib.publishEvent("b", zone_mute_2, false), console.log(zone_mute_2))}>
                  {zone2_mute ? (
                    <>
                      <img src={MuteIcon} className="volume_mute_btn" />
                      <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                  ) : (
                    <>
                      <p className="volume_txt">{ ((zone2_vol/65535) * 100).toFixed(0)}</p>
                      <p className="mute_btn_txt">Click to Mute</p>
                    </>
                  )}
                </button>

                <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_2, true), window.CrComLib.publishEvent("b", zone_increase_2, false), console.log(zone_increase_2))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>

              <div className='power_on_off'>

                  {zone_active_2 === 11 ? 
                      <p>Steve is currnetly playing music.</p>
                  :
                    zone_active_2 === 12 ? 
                        <p>Ellen is currnetly playing music.</p>
                    :
                      zone_active_2 > 0? 
                          <p> A user is currently watching TV in this Zone</p>
                      : 
                          <p> System Off</p>
                  } 

                
              </div>

            </div>

            <div id={zone_active_3>0? "active_btn" : "zone-3"} className='zone_container'>
                <div className='zone_title' >
                  <p>{zone_name_3}</p>
                </div>
                
                <button className='zone_container_user_1'   
                    id={zone_active_3 === 11? 'active_user':" " }>
                    {zone_active_3 === 11?  

                  <p onTouchEnd={() =>(window.CrComLib.publishEvent("n",zone_3_location, 0), showAudioControls(false))}>
                        Turn Off Music
                      </p> 
                      : 
                      <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_3_location, zone_music_3_steve)}>
                        Steve
                      </p> 
                    } 
                </button>
              
                <button className='zone_container_user_2'   
                    id={zone_active_3 === 12? 'active_user':" " }>
                    {zone_active_3 === 12?  

                      <p onTouchEnd={() =>(window.CrComLib.publishEvent("n",zone_3_location, 0), showAudioControls(false))}>
                        Turn Off Music
                      </p> 
                      : 
                      <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_3_location, 12)}>
                        Ellen
                      </p> 
                    } 
                </button>

                <div className='zone_controls'>
                  <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_3, true), window.CrComLib.publishEvent("b", zone_decrease_3, false))}>
                    <img className="btn_image" src={arrow} />
                  </button>

                  <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_3, true), window.CrComLib.publishEvent("b", zone_mute_3, false))}>
                    {zone3_mute ? (
                      <>
                        <img src={MuteIcon} className="volume_mute_btn" />
                        <p className="mute_btn_txt">Click to Unmute</p>
                      </>
                    ) : (
                      <>
                        <p className="volume_txt">{ ((zone3_vol/65535) * 100).toFixed(0)}</p>
                        <p className="mute_btn_txt">Click to Mute</p>
                      </>
                    )}
                  </button>

                  <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_3, true), window.CrComLib.publishEvent("b", zone_increase_3, false))}>
                    <img className="btn_image" src={arrow} id="flip" />
                  </button>
                </div>

                <div className='power_on_off'>

                    {zone_active_3 === 11 ? 
                        <p>Steve is currnetly playing music.</p>
                    :
                      zone_active_3 === 12 ? 
                          <p>Ellen is currnetly playing music.</p>
                      :
                        zone_active_3 > 0? 
                            <p> A user is currently watching TV in this Zone</p>
                        : 
                            <p> System Off</p>
                    } 

                  
                </div>
            </div>

            <div id={zone_active_7>0? "active_btn" : "zone-7"} className='zone_container'>
                <div className='zone_title' >
                  <p>{zone_name_7}</p>
                </div>
                
                <button className='zone_container_user_1'   
                    id={zone_active_7 === 11? 'active_user':" " }>
                    {zone_active_7 === 11?  

                      <p onTouchEnd={() => (window.CrComLib.publishEvent("n",zone_7_location, 0),showAudioControls(false))}>
                        Turn Off Music
                      </p> 
                      : 
                      <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_7_location, zone_music_7_steve)}>
                        Steve
                      </p> 
                    } 
                </button>
              
                <button className='zone_container_user_2'   
                    id={zone_active_7 === 12? 'active_user':" " }>
                    {zone_active_7 === 12?  

                      <p onTouchEnd={() => (window.CrComLib.publishEvent("n",zone_7_location, 0),showAudioControls(false))}>
                        Turn Off Music
                      </p> 
                      : 
                      <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_7_location, 12)}>
                        Ellen
                      </p> 
                    } 
                </button>

                <div className='zone_controls'>
                  <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_7, true), window.CrComLib.publishEvent("b", zone_decrease_7, false))}>
                    <img className="btn_image" src={arrow} />
                  </button>

                  <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_7, true), window.CrComLib.publishEvent("b", zone_mute_7, false))}>
                    {zone7_mute ? (
                      <>
                        <img src={MuteIcon} className="volume_mute_btn" />
                        <p className="mute_btn_txt">Click to Unmute</p>
                      </>
                    ) : (
                      <>
                        <p className="volume_txt">{ ((zone7_vol/65535) * 100).toFixed(0)}</p>
                        <p className="mute_btn_txt">Click to Mute</p>
                      </>
                    )}
                  </button>

                  <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_7, true), window.CrComLib.publishEvent("b", zone_increase_7, false))}>
                    <img className="btn_image" src={arrow} id="flip" />
                  </button>
                </div>

                <div className='power_on_off'>

                    {zone_active_7 === 11 ? 
                        <p>Steve is currnetly playing music.</p>
                    :
                      zone_active_7 === 12 ? 
                          <p>Ellen is currnetly playing music.</p>
                      :
                        zone_active_7 > 0? 
                            <p> A user is currently watching TV in this Zone</p>
                        : 
                            <p> System Off</p>
                    } 

                  
                </div>
            </div>

            <div id={zone_active_15>0? "active_btn" : "zone-15"} className='zone_container'>
                <div className='zone_title' >
                  <p>{zone_name_15}</p>
                </div>
                
                <button className='zone_container_user_1'   
                    id={zone_active_15 === 11? 'active_user':" " }>
                    {zone_active_15 === 11?  

                      <p onTouchEnd={() => (window.CrComLib.publishEvent("n",zone_15_location, 0),showAudioControls(false))}>
                        Turn Off Music
                      </p> 
                      : 
                      <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_15_location, zone_music_15_steve)}>
                        Steve
                      </p> 
                    } 
                </button>
              
                <button className='zone_container_user_2'   
                    id={zone_active_15 === 12? 'active_user':" " }>
                    {zone_active_15 === 12?  

                      <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_15_location, 12)}>
                        Turn Off Music
                      </p> 
                      : 
                      <p onTouchEnd={() => (window.CrComLib.publishEvent("n",zone_15_location, 0),showAudioControls(false))}>
                        Ellen
                      </p> 
                    } 
                </button>

                <div className='zone_controls'>
                  <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_15, true), window.CrComLib.publishEvent("b", zone_decrease_15, false))}>
                    <img className="btn_image" src={arrow} />
                  </button>

                  <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_15, true), window.CrComLib.publishEvent("b", zone_mute_15, false))}>
                    {zone15_mute ? (
                      <>
                        <img src={MuteIcon} className="volume_mute_btn" />
                        <p className="mute_btn_txt">Click to Unmute</p>
                      </>
                    ) : (
                      <>
                        <p className="volume_txt">{ ((zone15_vol/65535) * 100).toFixed(0)}</p>
                        <p className="mute_btn_txt">Click to Mute</p>
                      </>
                    )}
                  </button>

                  <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_15, true), window.CrComLib.publishEvent("b", zone_increase_15, false))}>
                    <img className="btn_image" src={arrow} id="flip" />
                  </button>
                </div>

                <div className='power_on_off'>

                    {zone_active_15 === 11 ? 
                        <p>Steve is currnetly playing music.</p>
                    :
                      zone_active_15 === 12 ? 
                          <p>Ellen is currnetly playing music.</p>
                      :
                        zone_active_15 > 0? 
                            <p> A user is currently watching TV in this Zone</p>
                        : 
                            <p> System Off</p>
                    } 

                  
                </div>
            </div>

            <div id={zone_active_17>0? "active_btn" : "zone-17"} className='zone_container'>
                <div className='zone_title' >
                  <p>{zone_name_17}</p>
                </div>
                
                <button className='zone_container_user_1'   
                    id={zone_active_17 === 11? 'active_user':" " }>
                    {zone_active_17 === 11?  

                      <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_17_location, 0)}>
                        Turn Off Music
                      </p> 
                      : 
                      <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_17_location, zone_music_17_steve)}>
                        Steve
                      </p> 
                    } 
                </button>
              
                <button className='zone_container_user_2'   
                    id={zone_active_17 === 12? 'active_user':" " }>
                    {zone_active_17 === 12?  

                      <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_17_location, 0)}>
                        Turn Off Music
                      </p> 
                      : 
                      <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_17_location, 12)}>
                        Ellen
                      </p> 
                    } 
                </button>

                <div className='zone_controls'>
                  <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_17, true), window.CrComLib.publishEvent("b", zone_decrease_17, false))}>
                    <img className="btn_image" src={arrow} />
                  </button>

                  <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_17, true), window.CrComLib.publishEvent("b", zone_mute_17, false))}>
                    {zone17_mute ? (
                      <>
                        <img src={MuteIcon} className="volume_mute_btn" />
                        <p className="mute_btn_txt">Click to Unmute</p>
                      </>
                    ) : (
                      <>
                        <p className="volume_txt">{ ((zone17_vol/65535) * 100).toFixed(0)}</p>
                        <p className="mute_btn_txt">Click to Mute</p>
                      </>
                    )}
                  </button>

                  <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_17, true), window.CrComLib.publishEvent("b", zone_increase_17, false))}>
                    <img className="btn_image" src={arrow} id="flip" />
                  </button>
                </div>

                <div className='power_on_off'>

                    {zone_active_17 === 11 ? 
                        <p>Steve is currnetly playing music.</p>
                    :
                      zone_active_17 === 12 ? 
                          <p>Ellen is currnetly playing music.</p>
                      :
                        zone_active_17 > 0? 
                            <p> A user is currently watching TV in this Zone</p>
                        : 
                            <p> System Off</p>
                    } 

                  
                </div>
            </div>

            <div id={zone_active_18>0? "active_btn" : "zone-18"} className='zone_container'>
                <div className='zone_title' >
                  <p>{zone_name_18}</p>
                </div>
                
                <button className='zone_container_user_1'   
                    id={zone_active_18 === 11? 'active_user':" " }>
                    {zone_active_18 === 11?  

                      <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_18_location, 0)}>
                        Turn Off Music
                      </p> 
                      : 
                      <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_18_location, zone_music_18_steve)}>
                        Steve
                      </p> 
                    } 
                </button>
              
                <button className='zone_container_user_2'   
                    id={zone_active_18 === 12? 'active_user':" " }>
                    {zone_active_18 === 12?  

                      <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_18_location, 0)}>
                        Turn Off Music
                      </p> 
                      : 
                      <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_18_location, 12)}>
                        Ellen
                      </p> 
                    } 
                </button>

                <div className='zone_controls'>
                  <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_18, true), window.CrComLib.publishEvent("b", zone_decrease_18, false))}>
                    <img className="btn_image" src={arrow} />
                  </button>

                  <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_18, true), window.CrComLib.publishEvent("b", zone_mute_18, false))}>
                    {zone18_mute ? (
                      <>
                        <img src={MuteIcon} className="volume_mute_btn" />
                        <p className="mute_btn_txt">Click to Unmute</p>
                      </>
                    ) : (
                      <>
                        <p className="volume_txt">{ ((zone18_vol/65535) * 100).toFixed(0)}</p>
                        <p className="mute_btn_txt">Click to Mute</p>
                      </>
                    )}
                  </button>

                  <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_18, true), window.CrComLib.publishEvent("b", zone_increase_18, false))}>
                    <img className="btn_image" src={arrow} id="flip" />
                  </button>
                </div>

                <div className='power_on_off'>

                    {zone_active_18 === 11 ? 
                        <p>Steve is currnetly playing music.</p>
                    :
                      zone_active_18 === 12 ? 
                          <p>Ellen is currnetly playing music.</p>
                      :
                        zone_active_18 > 0? 
                            <p> A user is currently watching TV in this Zone</p>
                        : 
                            <p> System Off</p>
                    } 

                  
                </div>
            </div>

            <div id={zone_active_19>0? "active_btn" : "zone-19"} className='zone_container'>
                <div className='zone_title' >
                  <p>{zone_name_19}</p>
                </div>
                
                <button className='zone_container_user_1'   
                    id={zone_active_19 === 11? 'active_user':" " }>
                    {zone_active_19 === 11?  

                      <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_19_location,0)}>
                        Turn Off Music
                      </p> 
                      : 
                      <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_19_location, zone_music_19_steve)}>
                        Steve
                      </p> 
                    } 
                </button>
              
                <button className='zone_container_user_2'   
                    id={zone_active_19 === 12? 'active_user':" " }>
                    {zone_active_19 === 12?  

                      <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_19_location, 0)}>
                        Turn Off Music
                      </p> 
                      : 
                      <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_19_location, 12)}>
                        Ellen
                      </p> 
                    } 
                </button>

                <div className='zone_controls'>
                  <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_19, true), window.CrComLib.publishEvent("b", zone_decrease_19, false))}>
                    <img className="btn_image" src={arrow} />
                  </button>

                  <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_19, true), window.CrComLib.publishEvent("b", zone_mute_19, false))}>
                    {zone19_mute ? (
                      <>
                        <img src={MuteIcon} className="volume_mute_btn" />
                        <p className="mute_btn_txt">Click to Unmute</p>
                      </>
                    ) : (
                      <>
                        <p className="volume_txt">{ ((zone19_vol/65535) * 100).toFixed(0)}</p>
                        <p className="mute_btn_txt">Click to Mute</p>
                      </>
                    )}
                  </button>

                  <button className="btn_circle" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_19, true), window.CrComLib.publishEvent("b", zone_increase_19, false))}>
                    <img className="btn_image" src={arrow} id="flip" />
                  </button>
                </div>

                <div className='power_on_off'>

                    {zone_active_19 === 11 ? 
                        <p>Steve is currnetly playing music.</p>
                    :
                      zone_active_19 === 12 ? 
                          <p>Ellen is currnetly playing music.</p>
                      :
                        zone_active_19 > 0? 
                            <p> A user is currently watching TV in this Zone</p>
                        : 
                            <p> System Off</p>
                    } 

                  
                </div>
            </div>

         
          
        
         
            

          

          

           
      
      </>
    )

    const zoneGroup3 = (
      <>



          <div id={zone_active_11 > 0 ? "active_btn" : "zone-11"} className='zone_container'>
            <div className='zone_title'>
              <p>{zone_name_11}</p>
            </div>
            
            <button className='zone_container_user_1'
              id={zone_active_11 === 11 ? 'active_user' : " "}>
              {zone_active_11 === 11 ?  
                <p onTouchEnd={() => (window.CrComLib.publishEvent("n", zone_11_location, 0),showAudioControls(false))}>
                  Turn Off Music
                </p>
                : 
                <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_11_location, zone_music_11_steve)}>
                  Steve
                </p>
              }
            </button>
            
            <button className='zone_container_user_2'
              id={zone_active_11 === 12 ? 'active_user' : " "}>
              {zone_active_11 === 12 ?  
                <p onTouchEnd={() => (window.CrComLib.publishEvent("n", zone_11_location, 0),showAudioControls(false))}>
                  Turn Off Music
                </p>
                : 
                <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_11_location, 12)}>
                  Ellen
                </p>
              }
            </button>
            
            <div className='zone_controls'>
              <button className="btn_circle"
                onTouchEnd={() => (
                  window.CrComLib.publishEvent("b", zone_decrease_11, true),
                  window.CrComLib.publishEvent("b", zone_decrease_11, false),
                  console.log(zone_decrease_11)
                )}>
                <img className="btn_image" src={arrow} />
              </button>
              
              <button className="btn_square_wide"
                onTouchEnd={() => (
                  window.CrComLib.publishEvent("b", zone_mute_11, true),
                  window.CrComLib.publishEvent("b", zone_mute_11, false),
                  console.log(zone_mute_11)
                )}>
                {zone11_mute ? (
                  <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                  </>
                ) : (
                  <>
                    <p className="volume_txt">{((zone11_vol / 65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                  </>
                )}
              </button>
              
              <button className="btn_circle"
                onTouchEnd={() => (
                  window.CrComLib.publishEvent("b", zone_increase_11, true),
                  window.CrComLib.publishEvent("b", zone_increase_11, false),
                  console.log(zone_increase_11)
                )}>
                <img className="btn_image" src={arrow} id="flip" />
              </button>
            </div>
            
            <div className='power_on_off'>
              {zone_active_11 === 11 ? (
                <p>Steve is currnetly playing music.</p>
              ) : zone_active_11 === 12 ? (
                <p>Ellen is currnetly playing music.</p>
              ) : zone_active_11 > 0 ? (
                <p>A user is currently watching TV in this Zone</p>
              ) : (
                <p>System Off</p>
              )}
            </div>
          </div>

          <div id={zone_active_12 > 0 ? "active_btn" : "zone-12"} className='display_none'>
          <div className='zone_title'>
          <p>{zone_name_12}</p>
          </div>

          <button className='zone_container_user_1'
          id={zone_active_12 === 11 ? 'active_user' : " "}>
          {zone_active_12 === 11 ?  
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_12_location, zone_music_12_steve)}>
          Turn Off Music
          </p>
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_12_location, 0)}>
          Steve
          </p>
          }
          </button>

          <button className='zone_container_user_2'
          id={zone_active_12 === 12 ? 'active_user' : " "}>
          {zone_active_12 === 12 ?  
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_12_location, 12)}>
          Turn Off Music
          </p>
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_12_location, 0)}>
          Ellen
          </p>
          }
          </button>

          <div className='zone_controls'>
          <button className="btn_circle"
          onTouchEnd={() => (
          window.CrComLib.publishEvent("b", zone_decrease_12, true),
          window.CrComLib.publishEvent("b", zone_decrease_12, false),
          console.log(zone_decrease_12)
          )}>
          <img className="btn_image" src={arrow} />
          </button>

          <button className="btn_square_wide"
          onTouchEnd={() => (
          window.CrComLib.publishEvent("b", zone_mute_12, true),
          window.CrComLib.publishEvent("b", zone_mute_12, false),
          console.log(zone_mute_12)
          )}>
          {zone12_mute ? (
          <>
          <img src={MuteIcon} className="volume_mute_btn" />
          <p className="mute_btn_txt">Click to Unmute</p>
          </>
          ) : (
          <>
          <p className="volume_txt">{((zone12_vol / 65535) * 100).toFixed(0)}</p>
          <p className="mute_btn_txt">Click to Mute</p>
          </>
          )}
          </button>

          <button className="btn_circle"
          onTouchEnd={() => (
          window.CrComLib.publishEvent("b", zone_increase_12, true),
          window.CrComLib.publishEvent("b", zone_increase_12, false),
          console.log(zone_increase_12)
          )}>
          <img className="btn_image" src={arrow} id="flip" />
          </button>
          </div>

          <div className='power_on_off'>
          {zone_active_12 === 11 ? (
          <p>Steve is currnetly playing music.</p>
          ) : zone_active_12 === 12 ? (
          <p>Ellen is currnetly playing music.</p>
          ) : zone_active_12 > 0 ? (
          <p>A user is currently watching TV in this Zone</p>
          ) : (
          <p>System Off</p>
          )}
          </div>
          </div>

          <div id={zone_active_13 > 0 ? "active_btn" : "zone-13"} className='display_none'>
          <div className='zone_title'>
          <p>{zone_name_13}</p>
          </div>

          <button className='zone_container_user_1'
          id={zone_active_13 === 11 ? 'active_user' : " "}>
          {zone_active_13 === 11 ?  
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_13_location, zone_music_13_steve)}>
          Turn Off Music
          </p>
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_13_location, 0)}>
          Steve
          </p>
          }
          </button>

          <button className='zone_container_user_2'
          id={zone_active_13 === 12 ? 'active_user' : " "}>
          {zone_active_13 === 12 ?  
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_13_location, 12)}>
          Turn Off Music
          </p>
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_13_location, 0)}>
          Ellen
          </p>
          }
          </button>

          <div className='zone_controls'>
          <button className="btn_circle"
          onTouchEnd={() => (
          window.CrComLib.publishEvent("b", zone_decrease_13, true),
          window.CrComLib.publishEvent("b", zone_decrease_13, false),
          console.log(zone_decrease_13)
          )}>
          <img className="btn_image" src={arrow} />
          </button>

          <button className="btn_square_wide"
          onTouchEnd={() => (
          window.CrComLib.publishEvent("b", zone_mute_13, true),
          window.CrComLib.publishEvent("b", zone_mute_13, false),
          console.log(zone_mute_13)
          )}>
          {zone13_mute ? (
          <>
          <img src={MuteIcon} className="volume_mute_btn" />
          <p className="mute_btn_txt">Click to Unmute</p>
          </>
          ) : (
          <>
          <p className="volume_txt">{((zone13_vol / 65535) * 100).toFixed(0)}</p>
          <p className="mute_btn_txt">Click to Mute</p>
          </>
          )}
          </button>

          <button className="btn_circle"
          onTouchEnd={() => (
          window.CrComLib.publishEvent("b", zone_increase_13, true),
          window.CrComLib.publishEvent("b", zone_increase_13, false),
          console.log(zone_increase_13)
          )}>
          <img className="btn_image" src={arrow} id="flip" />
          </button>
          </div>

          <div className='power_on_off'>
          {zone_active_13 === 11 ? (
          <p>Steve is currnetly playing music.</p>
          ) : zone_active_13 === 12 ? (
          <p>Ellen is currnetly playing music.</p>
          ) : zone_active_13 > 0 ? (
          <p>A user is currently watching TV in this Zone</p>
          ) : (
          <p>System Off</p>
          )}
          </div>
          </div>

          <div id={zone_active_21 > 0 ? "active_btn" : "zone-21"} className='zone_container'>
          <div className='zone_title'>
          <p>{zone_name_21}</p>
          </div>

          <button className='zone_container_user_1'
          id={zone_active_21 === 11 ? 'active_user' : " "}>
          {zone_active_21 === 11 ?  
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_21_location, 0)}>
          Turn Off Music
          </p>
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_21_location, zone_music_21_steve)}>
          Steve
          </p>
          }
          </button>

          <button className='zone_container_user_2'
          id={zone_active_21 === 12 ? 'active_user' : " "}>
          {zone_active_21 === 12 ?  
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_21_location, 0)}>
          Turn Off Music
          </p>
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_21_location, 12)}>
          Ellen
          </p>
          }
          </button>

          <div className='zone_controls'>
          <button className="btn_circle"
          onTouchEnd={() => (
          window.CrComLib.publishEvent("b", zone_decrease_21, true),
          window.CrComLib.publishEvent("b", zone_decrease_21, false),
          console.log(zone_decrease_21)
          )}>
          <img className="btn_image" src={arrow} />
          </button>

          <button className="btn_square_wide"
          onTouchEnd={() => (
          window.CrComLib.publishEvent("b", zone_mute_21, true),
          window.CrComLib.publishEvent("b", zone_mute_21, false),
          console.log(zone_mute_21)
          )}>
          {zone21_mute ? (
          <>
          <img src={MuteIcon} className="volume_mute_btn" />
          <p className="mute_btn_txt">Click to Unmute</p>
          </>
          ) : (
          <>
          <p className="volume_txt">{((zone21_vol / 65535) * 100).toFixed(0)}</p>
          <p className="mute_btn_txt">Click to Mute</p>
          </>
          )}
          </button>

          <button className="btn_circle"
          onTouchEnd={() => (
          window.CrComLib.publishEvent("b", zone_increase_21, true),
          window.CrComLib.publishEvent("b", zone_increase_21, false),
          console.log(zone_increase_21)
          )}>
          <img className="btn_image" src={arrow} id="flip" />
          </button>
          </div>

          <div className='power_on_off'>
          {zone_active_21 === 11 ? (
          <p>Steve is currnetly playing music.</p>
          ) : zone_active_21 === 12 ? (
          <p>Ellen is currnetly playing music.</p>
          ) : zone_active_21 > 0 ? (
          <p>A user is currently watching TV in this Zone</p>
          ) : (
          <p>System Off</p>
          )}
          </div>
          </div>

          <div id={zone_active_22 > 0 ? "active_btn" : "zone-22"} className='display_none'>
            <div className='zone_title'>
              <p>{zone_name_22}</p>
            </div>

          <button className='zone_container_user_1' id={zone_active_22 === 11 ? 'active_user' : " "}>
              {zone_active_22 === 11 ?  
                <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_22_location, 0)}>
                Turn Off Music
                </p>
              : 
                <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_22_location, zone_music_22_steve)}>
                Steve
                </p>
              }
          </button>

          <button className='zone_container_user_2'id={zone_active_22 === 12 ? 'active_user' : " "}>
          {zone_active_22 === 12 ?  
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_22_location, 0)}>
          Turn Off Music
          </p>
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_22_location, 12)}>
          Ellen
          </p>
          }
          </button>

          <div className='zone_controls'>
          <button className="btn_circle"
          onTouchEnd={() => (
          window.CrComLib.publishEvent("b", zone_decrease_22, true),
          window.CrComLib.publishEvent("b", zone_decrease_22, false),
          console.log(zone_decrease_22)
          )}>
          <img className="btn_image" src={arrow} />
          </button>

          <button className="btn_square_wide"
          onTouchEnd={() => (
          window.CrComLib.publishEvent("b", zone_mute_22, true),
          window.CrComLib.publishEvent("b", zone_mute_22, false),
          console.log(zone_mute_22)
          )}>
          {zone22_mute ? (
          <>
          <img src={MuteIcon} className="volume_mute_btn" />
          <p className="mute_btn_txt">Click to Unmute</p>
          </>
          ) : (
          <>
          <p className="volume_txt">{((zone22_vol / 65535) * 100).toFixed(0)}</p>
          <p className="mute_btn_txt">Click to Mute</p>
          </>
          )}
          </button>

          <button className="btn_circle"
          onTouchEnd={() => (
          window.CrComLib.publishEvent("b", zone_increase_22, true),
          window.CrComLib.publishEvent("b", zone_increase_22, false),
          console.log(zone_increase_22)
          )}>
          <img className="btn_image" src={arrow} id="flip" />
          </button>
          </div>

          <div className='power_on_off'>
          {zone_active_22 === 11 ? (
          <p>Steve is currnetly playing music.</p>
          ) : zone_active_22 === 12 ? (
          <p>Ellen is currnetly playing music.</p>
          ) : zone_active_22 > 0 ? (
          <p>A user is currently watching TV in this Zone</p>
          ) : (
          <p>System Off</p>
          )}
          </div>
          </div>

          


      </>
    )

    const zoneGroup4 = (
      <>
      
            
          <div id={zone_active_14 > 0 ? "active_btn" : "zone-14"} className='zone_container'>
          <div className='zone_title'>
          <p>{zone_name_14}</p>
          </div>

          <button className='zone_container_user_1'
          id={zone_active_14 === 11 ? 'active_user' : " "}>
          {zone_active_14 === 11 ?  
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_14_location, 0)}>
            Turn Off Music
          </p>
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_14_location, zone_music_14_steve)}>
            Steve
          </p>
          }
          </button>

          <button className='zone_container_user_2'
          id={zone_active_14 === 12 ? 'active_user' : " "}>
          {zone_active_14 === 12 ?  
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_14_location,0)}>
            Turn Off Music
          </p>
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_14_location, 12)}>
            Ellen
          </p>
          }
          </button>

          <div className='zone_controls'>
          <button className="btn_circle" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_14, true), 
                                window.CrComLib.publishEvent("b", zone_decrease_14, false), 
                                console.log(zone_decrease_14))}>
          <img className="btn_image" src={arrow} />
          </button>

          <button className="btn_square_wide" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_14, true), 
                                window.CrComLib.publishEvent("b", zone_mute_14, false), 
                                console.log(zone_mute_14))}>
          {zone14_mute ? (
            <>
              <img src={MuteIcon} className="volume_mute_btn" />
              <p className="mute_btn_txt">Click to Unmute</p>
            </>
          ) : (
            <>
              <p className="volume_txt">{ ((zone14_vol / 65535) * 100).toFixed(0) }</p>
              <p className="mute_btn_txt">Click to Mute</p>
            </>
          )}
          </button>

          <button className="btn_circle" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_14, true), 
                                window.CrComLib.publishEvent("b", zone_increase_14, false), 
                                console.log(zone_increase_14))}>
          <img className="btn_image" src={arrow} id="flip" />
          </button>
          </div>

          <div className='power_on_off'>
          {zone_active_14 === 11 ? 
          <p>Steve is currnetly playing music.</p>
          : zone_active_14 === 12 ? 
          <p>Ellen is currnetly playing music.</p>
          : zone_active_14 > 0 ? 
          <p>A user is currently watching TV in this Zone</p>
          : <p>System Off</p>
          }
          </div>
          </div>

          <div id={zone_active_20 > 0 ? "active_btn" : "zone-20"} className='zone_container'>
          <div className='zone_title'>
          <p>{zone_name_20}</p>
          </div>

          <button className='zone_container_user_1'
          id={zone_active_20 === 11 ? 'active_user' : " "}>
          {zone_active_20 === 11 ?  
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_20_location,0 )}>
          Turn Off Music
          </p>
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_20_location, zone_music_20_steve)}>
          Steve
          </p>
          }
          </button>

          <button className='zone_container_user_2'
          id={zone_active_20 === 12 ? 'active_user' : " "}>
          {zone_active_20 === 12 ?  
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_20_location, 0)}>
          Turn Off Music
          </p>
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_20_location, 12)}>
          Ellen
          </p>
          }
          </button>

          <div className='zone_controls'>
          <button className="btn_circle" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_20, true), 
                            window.CrComLib.publishEvent("b", zone_decrease_20, false), 
                            console.log(zone_decrease_20))}>
          <img className="btn_image" src={arrow} />
          </button>

          <button className="btn_square_wide" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_20, true), 
                            window.CrComLib.publishEvent("b", zone_mute_20, false), 
                            console.log(zone_mute_20))}>
          {zone20_mute ? (
          <>
          <img src={MuteIcon} className="volume_mute_btn" />
          <p className="mute_btn_txt">Click to Unmute</p>
          </>
          ) : (
          <>
          <p className="volume_txt">{ ((zone20_vol / 65535) * 100).toFixed(0) }</p>
          <p className="mute_btn_txt">Click to Mute</p>
          </>
          )}
          </button>

          <button className="btn_circle" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_20, true), 
                            window.CrComLib.publishEvent("b", zone_increase_20, false), 
                            console.log(zone_increase_20))}>
          <img className="btn_image" src={arrow} id="flip" />
          </button>
          </div>

          <div className='power_on_off'>
          {zone_active_20 === 11 ? 
          <p>Steve is currnetly playing music.</p>
          : zone_active_20 === 12 ? 
          <p>Ellen is currnetly playing music.</p>
          : zone_active_20 > 0 ? 
          <p>A user is currently watching TV in this Zone</p>
          : <p>System Off</p>
          }
          </div>
          </div>

          <div id={zone_active_23 > 0 ? "active_btn" : "zone-23"} className='zone_container'>
          <div className='zone_title'>
          <p>{zone_name_23}</p>
          </div>

          <button className='zone_container_user_1'
          id={zone_active_23 === 11 ? 'active_user' : " "}>
          {zone_active_23 === 11 ?  
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_23_location, 0)}>
          Turn Off Music
          </p>
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_23_location, zone_music_23_steve)}>
          Steve
          </p>
          }
          </button>

          <button className='zone_container_user_2'
          id={zone_active_23 === 12 ? 'active_user' : " "}>
          {zone_active_23 === 12 ?  
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_23_location, 0)}>
          Turn Off Music
          </p>
          : 
          <p onTouchEnd={() => window.CrComLib.publishEvent("n", zone_23_location, 12)}>
          Ellen
          </p>
          }
          </button>

          <div className='zone_controls'>
          <button className="btn_circle" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_23, true), 
                            window.CrComLib.publishEvent("b", zone_decrease_23, false), 
                            console.log(zone_decrease_23))}>
          <img className="btn_image" src={arrow} />
          </button>

          <button className="btn_square_wide" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_23, true), 
                            window.CrComLib.publishEvent("b", zone_mute_23, false), 
                            console.log(zone_mute_23))}>
          {zone23_mute ? (
          <>
          <img src={MuteIcon} className="volume_mute_btn" />
          <p className="mute_btn_txt">Click to Unmute</p>
          </>
          ) : (
          <>
          <p className="volume_txt">{ ((zone23_vol / 65535) * 100).toFixed(0) }</p>
          <p className="mute_btn_txt">Click to Mute</p>
          </>
          )}
          </button>

          <button className="btn_circle" 
          onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_23, true), 
                            window.CrComLib.publishEvent("b", zone_increase_23, false), 
                            console.log(zone_increase_23))}>
          <img className="btn_image" src={arrow} id="flip" />
          </button>
          </div>

          <div className='power_on_off'>
          {zone_active_23 === 11 ? 
          <p>Steve is currnetly playing music.</p>
          : zone_active_23 === 12 ? 
          <p>Ellen is currnetly playing music.</p>
          : zone_active_23 > 0 ? 
          <p>A user is currently watching TV in this Zone</p>
          : <p>System Off</p>
          }
          </div>
          </div>


          

         

          
      </>
    )



    const location = useLocation();
    const roomId = location.state?.roomId;
    const currentZoneActivity = location.state?.activity;
  
    const [locationTitle, setLocationTitle] = useState("")
    const [roomLocation, setRoomLocation] = useState("0")
  
    const [playerPopUp, setPlayerPopUp] = useState(false)

    const [audioControl, setAudioControl] = useState(false)

    let quickAudioController
  
    useEffect(()=>{
  
      console.log(roomId)
  
      if(roomId === 'breakfast'){
        setRoomLocation('2')
        setLocationTitle("Breakfast Room")

      } else if(roomId === "dining"){
        setRoomLocation('3')
        setLocationTitle("Dining Room")

      } else if(roomId === "game"){
        setRoomLocation('15')
        setLocationTitle("Game Room")

      } else if(roomId === "family"){
        setRoomLocation('7')
        setLocationTitle("Family Room")        
  
      } else if(roomId === "masterBed"){
        setRoomLocation('9')
        setLocationTitle("Master Bedroom")

      } else if(roomId === "guestBed"){
        setRoomLocation('8')
        setLocationTitle("Guest Bedroom")

      } else if(roomId === "guestBath"){
        setRoomLocation('16')
        setLocationTitle("Guest Bathroom")

      } else if(roomId === "ellensOffice"){
        setRoomLocation('5')
        setLocationTitle("Ellen's Office")

      } else if(roomId === "ellensBath"){
        setRoomLocation('6')
        setLocationTitle("Ellen's Bath")

      } else if(roomId === "ellensExcercise"){
        setRoomLocation('4')
        setLocationTitle("Ellen's Excercise")

      } else if(roomId === "media"){
        setRoomLocation('10')
        setLocationTitle("Media Room")

      } else if(roomId === "arcade"){
        setRoomLocation('11')
        setLocationTitle("Arcade")

      } else if(roomId === "poolPatio"){
        setRoomLocation('14')
        setLocationTitle("Pool Patio")
      }




      if(currentZoneActivity === 11 || currentZoneActivity === 12 ){
        setPlayerPopUp(false)
        showAudioControls(true)
      } else if( currentZoneActivity === -1) {
        setPlayerPopUp(false)
      } else {
        setPlayerPopUp(true)
      }
  
  },[roomId,currentZoneActivity])


  const showAudioControls = (value:boolean) =>{
    setAudioControl(value)
  }



    if(roomId === 'breakfast' && audioControl){

      quickAudioController =(
    
      
        <div className='quickAudioControls'>
          
          <div className='zone_controls'>
            <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_2, true), window.CrComLib.publishEvent("b", zone_decrease_2, false), console.log(zone_decrease_2))}>
              <img className="btn_image" src={arrow} />
            </button>

            <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_2, true), window.CrComLib.publishEvent("b", zone_mute_2, false), console.log(zone_mute_2))}>
              {zone2_mute ? (
                <>
                  <img src={MuteIcon} className="volume_mute_btn" />
                  <p className="mute_btn_txt">Click to Unmute</p>
                </>
              ) : (
                <>
                  <p className="volume_txt">{ ((zone2_vol/65535) * 100).toFixed(0)}</p>
                  <p className="mute_btn_txt">Click to Mute</p>
                </>
              )}
            </button>

            <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_2, true), window.CrComLib.publishEvent("b", zone_increase_2, false), console.log(zone_increase_2))}>
              <img className="btn_image" src={arrow} id="flip" />
            </button>
          </div>

        </div>
   
      )
   
  } else if(roomId === "dining" && audioControl){

    quickAudioController =(
    
      <div className='quickAudioControls'>
          
      <div className='zone_controls'>
        <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_3, true), window.CrComLib.publishEvent("b", zone_decrease_3, false), console.log(zone_decrease_2))}>
          <img className="btn_image" src={arrow} />
        </button>

        <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_3, true), window.CrComLib.publishEvent("b", zone_mute_3, false), console.log(zone_mute_2))}>
          {zone3_mute ? (
            <>
              <img src={MuteIcon} className="volume_mute_btn" />
              <p className="mute_btn_txt">Click to Unmute</p>
            </>
          ) : (
            <>
              <p className="volume_txt">{ ((zone3_vol/65535) * 100).toFixed(0)}</p>
              <p className="mute_btn_txt">Click to Mute</p>
            </>
          )}
        </button>

        <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_3, true), window.CrComLib.publishEvent("b", zone_increase_3, false), console.log(zone_increase_3))}>
          <img className="btn_image" src={arrow} id="flip" />
        </button>
      </div>

    </div>
      )
     

  } else if(roomId === "game" && audioControl){
    quickAudioController =(
    
      <div className='quickAudioControls'>
          
      <div className='zone_controls'>
        <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_15, true), window.CrComLib.publishEvent("b", zone_decrease_15, false))}>
          <img className="btn_image" src={arrow} />
        </button>

        <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_15, true), window.CrComLib.publishEvent("b", zone_mute_15, false))}>
          {zone15_mute ? (
            <>
              <img src={MuteIcon} className="volume_mute_btn" />
              <p className="mute_btn_txt">Click to Unmute</p>
            </>
          ) : (
            <>
              <p className="volume_txt">{ ((zone15_vol/65535) * 100).toFixed(0)}</p>
              <p className="mute_btn_txt">Click to Mute</p>
            </>
          )}
        </button>

        <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_15, true), window.CrComLib.publishEvent("b", zone_increase_15, false))}>
          <img className="btn_image" src={arrow} id="flip" />
        </button>
      </div>

    </div>
      )
     
    

  } else if(roomId === "family" && audioControl){
    quickAudioController =(
    
      <div className='quickAudioControls'>
          
      <div className='zone_controls'>
        <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_7, true), window.CrComLib.publishEvent("b", zone_decrease_7, false))}>
          <img className="btn_image" src={arrow} />
        </button>

        <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_7, true), window.CrComLib.publishEvent("b", zone_mute_7, false))}>
          {zone7_mute ? (
            <>
              <img src={MuteIcon} className="volume_mute_btn" />
              <p className="mute_btn_txt">Click to Unmute</p>
            </>
          ) : (
            <>
              <p className="volume_txt">{ ((zone7_vol/65535) * 100).toFixed(0)}</p>
              <p className="mute_btn_txt">Click to Mute</p>
            </>
          )}
        </button>

        <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_7, true), window.CrComLib.publishEvent("b", zone_increase_7, false))}>
          <img className="btn_image" src={arrow} id="flip" />
        </button>
      </div>

    </div>
      )

  } else if(roomId === "masterBed" && audioControl){
    quickAudioController =(
    
      <div className='quickAudioControls'>
          
      <div className='zone_controls'>
        <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_9, true), window.CrComLib.publishEvent("b", zone_decrease_9, false))}>
          <img className="btn_image" src={arrow} />
        </button>

        <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_9, true), window.CrComLib.publishEvent("b", zone_mute_9, false))}>
          {zone9_mute ? (
            <>
              <img src={MuteIcon} className="volume_mute_btn" />
              <p className="mute_btn_txt">Click to Unmute</p>
            </>
          ) : (
            <>
              <p className="volume_txt">{ ((zone9_vol/65535) * 100).toFixed(0)}</p>
              <p className="mute_btn_txt">Click to Mute</p>
            </>
          )}
        </button>

        <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_9, true), window.CrComLib.publishEvent("b", zone_increase_9, false))}>
          <img className="btn_image" src={arrow} id="flip" />
        </button>
      </div>

    </div>
      )
   

  } else if(roomId === "guestBed" && audioControl){
    quickAudioController =(
    
      <div className='quickAudioControls'>
          
      <div className='zone_controls'>
        <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_8, true), window.CrComLib.publishEvent("b", zone_decrease_8, false))}>
          <img className="btn_image" src={arrow} />
        </button>

        <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_8, true), window.CrComLib.publishEvent("b", zone_mute_8, false))}>
          {zone8_mute ? (
            <>
              <img src={MuteIcon} className="volume_mute_btn" />
              <p className="mute_btn_txt">Click to Unmute</p>
            </>
          ) : (
            <>
              <p className="volume_txt">{ ((zone8_vol/65535) * 100).toFixed(0)}</p>
              <p className="mute_btn_txt">Click to Mute</p>
            </>
          )}
        </button>

        <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_8, true), window.CrComLib.publishEvent("b", zone_increase_8, false))}>
          <img className="btn_image" src={arrow} id="flip" />
        </button>
      </div>

    </div>
      )
   
    

  } else if(roomId === "guestBath" && audioControl){
    quickAudioController =(
    
      <div className='quickAudioControls'>
          
      <div className='zone_controls'>
        <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_16, true), window.CrComLib.publishEvent("b", zone_decrease_16, false))}>
          <img className="btn_image" src={arrow} />
        </button>

        <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_16, true), window.CrComLib.publishEvent("b", zone_mute_16, false))}>
          {zone16_mute ? (
            <>
              <img src={MuteIcon} className="volume_mute_btn" />
              <p className="mute_btn_txt">Click to Unmute</p>
            </>
          ) : (
            <>
              <p className="volume_txt">{ ((zone16_vol/65535) * 100).toFixed(0)}</p>
              <p className="mute_btn_txt">Click to Mute</p>
            </>
          )}
        </button>

        <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_16, true), window.CrComLib.publishEvent("b", zone_increase_16, false))}>
          <img className="btn_image" src={arrow} id="flip" />
        </button>
      </div>

    </div>
      )
   

  } else if(roomId === "ellensOffice" && audioControl){
    quickAudioController =(
    
      <div className='quickAudioControls'>
          
      <div className='zone_controls'>
        <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_5, true), window.CrComLib.publishEvent("b", zone_decrease_5, false))}>
          <img className="btn_image" src={arrow} />
        </button>

        <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_5, true), window.CrComLib.publishEvent("b", zone_mute_5, false))}>
          {zone5_mute ? (
            <>
              <img src={MuteIcon} className="volume_mute_btn" />
              <p className="mute_btn_txt">Click to Unmute</p>
            </>
          ) : (
            <>
              <p className="volume_txt">{ ((zone5_vol/65535) * 100).toFixed(0)}</p>
              <p className="mute_btn_txt">Click to Mute</p>
            </>
          )}
        </button>

        <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_5, true), window.CrComLib.publishEvent("b", zone_increase_5, false))}>
          <img className="btn_image" src={arrow} id="flip" />
        </button>
      </div>

    </div>
      )
   

  } else if(roomId === "ellensBath" && audioControl){
    quickAudioController =(
    
      <div className='quickAudioControls'>
          
      <div className='zone_controls'>
        <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_6, true), window.CrComLib.publishEvent("b", zone_decrease_6, false))}>
          <img className="btn_image" src={arrow} />
        </button>

        <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_6, true), window.CrComLib.publishEvent("b", zone_mute_6, false))}>
          {zone6_mute ? (
            <>
              <img src={MuteIcon} className="volume_mute_btn" />
              <p className="mute_btn_txt">Click to Unmute</p>
            </>
          ) : (
            <>
              <p className="volume_txt">{ ((zone6_vol/65535) * 100).toFixed(0)}</p>
              <p className="mute_btn_txt">Click to Mute</p>
            </>
          )}
        </button>

        <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_6, true), window.CrComLib.publishEvent("b", zone_increase_6, false))}>
          <img className="btn_image" src={arrow} id="flip" />
        </button>
      </div>

    </div>
      )
   

  } else if(roomId === "ellensExcercise" && audioControl){
    quickAudioController =(
    
      <div className='quickAudioControls'>
          
      <div className='zone_controls'>
        <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_4, true), window.CrComLib.publishEvent("b", zone_decrease_4, false))}>
          <img className="btn_image" src={arrow} />
        </button>

        <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_4, true), window.CrComLib.publishEvent("b", zone_mute_4, false))}>
          {zone4_mute ? (
            <>
              <img src={MuteIcon} className="volume_mute_btn" />
              <p className="mute_btn_txt">Click to Unmute</p>
            </>
          ) : (
            <>
              <p className="volume_txt">{ ((zone4_vol/65535) * 100).toFixed(0)}</p>
              <p className="mute_btn_txt">Click to Mute</p>
            </>
          )}
        </button>

        <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_4, true), window.CrComLib.publishEvent("b", zone_increase_4, false))}>
          <img className="btn_image" src={arrow} id="flip" />
        </button>
      </div>

    </div>
      )
   
    


  } else if(roomId === "media" && audioControl){
    quickAudioController =(
    
      <div className='quickAudioControls'>
          
      <div className='zone_controls'>
        <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_10, true), window.CrComLib.publishEvent("b", zone_decrease_10, false))}>
          <img className="btn_image" src={arrow} />
        </button>

        <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_10, true), window.CrComLib.publishEvent("b", zone_mute_10, false))}>
          {zone10_mute ? (
            <>
              <img src={MuteIcon} className="volume_mute_btn" />
              <p className="mute_btn_txt">Click to Unmute</p>
            </>
          ) : (
            <>
              <p className="volume_txt">{ ((zone10_vol/65535) * 100).toFixed(0)}</p>
              <p className="mute_btn_txt">Click to Mute</p>
            </>
          )}
        </button>

        <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_10, true), window.CrComLib.publishEvent("b", zone_increase_10, false))}>
          <img className="btn_image" src={arrow} id="flip" />
        </button>
      </div>

    </div>
      )
   

    
  } else if(roomId === "arcade" && audioControl){
    quickAudioController =(
    
      <div className='quickAudioControls'>
          
      <div className='zone_controls'>
        <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_11, true), window.CrComLib.publishEvent("b", zone_decrease_11, false))}>
          <img className="btn_image" src={arrow} />
        </button>

        <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_11, true), window.CrComLib.publishEvent("b", zone_mute_11, false))}>
          {zone11_mute ? (
            <>
              <img src={MuteIcon} className="volume_mute_btn" />
              <p className="mute_btn_txt">Click to Unmute</p>
            </>
          ) : (
            <>
              <p className="volume_txt">{ ((zone11_vol/65535) * 100).toFixed(0)}</p>
              <p className="mute_btn_txt">Click to Mute</p>
            </>
          )}
        </button>

        <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_11, true), window.CrComLib.publishEvent("b", zone_increase_11, false))}>
          <img className="btn_image" src={arrow} id="flip" />
        </button>
      </div>

    </div>
      )
   

  }
  
  



 const quickLaunch =()=>{
    sendCommand("BrowseTopMenu")
    sendCommand("BrowseTopMenu itemGuid={fbbcedb1-af64-4c3f-bfe5-000000000010}")
    sendCommand("AckPickItem {d00322f3-6bec-0d80-fb35-5a62c2b0b26a}")
 }
  


  return (
   
      <div className='audio_dashboard'>

    <div className='switch_user_div'>
    
        <button className='btn_circle' id={url === "http://192.168.14.78"? "active_btn" : ""} onClick={()=> switchPlayer("steve")} >
        <p>Steve's Music</p>
        </button>


        <button className='btn_circle' id={url === "http://192.168.14.79"? "active_btn" : ""} onClick={()=> switchPlayer("ellen")} >
        <p>Ellen's Music</p>
        </button>

    

    </div>

          
    <div className="audio_back_button" onClick={() => navigate(-1)}> 
        <button className="pill_shape_audio">
            <img className="btn_image" src={backbutton}/>
        </button>
    </div> 
        
    <div className='audio_control' onTouchEnd={() => zoneMenu("menuOpen")}>
        <button className="pill_shape_audio">
            <img 
              className="btn_image" 
              src={menu} 
            />
            <p> Audio Control</p>
          </button>
    </div>

    <div className='music_selection'>
          <button  className="pill_shape_audio" 
            onTouchEnd={() => {          
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
                ? <img className="btn_image" src={close}   alt="Close"/> 
                : <img className="btn_image" src={topmenu} alt="Top Menu"/>
              )
            : 
            <> <img className="btn_image" src={musicIcon}/> <p>Music Selection</p> </>
          }
          </button>
    </div>

   

    <div className={openZones? "zone_menu": "display_none"}>
            <div className='off_button_menu' style={{background:"none"}}>
         

              <button className='btn_square_wide' id={zoneGroup_1? "audio_zone_nav_active": "audio_zone_nav"} onTouchEnd={() => zoneMenu("zone1")} >
              <p> Up Stairs</p>
              </button>

              <button className='btn_square_wide'  id={zoneGroup_2? "audio_zone_nav_active": "audio_zone_nav"} onTouchEnd={() => zoneMenu("zone2")} >
              <p> Main </p>
              </button>

              <button className='btn_square_wide'  id={zoneGroup_3? "audio_zone_nav_active": "audio_zone_nav"} onTouchEnd={() => zoneMenu("zone3")} >
              <p> Down Stairs </p> 
              </button>

              <button className='btn_square_wide'  id={zoneGroup_4? "audio_zone_nav_active": "audio_zone_nav"} onTouchEnd={() => zoneMenu("zone4")} >
              <p> Out Doors </p> 
              </button>

              <button className='btn_square_wide' id='close_menu' onTouchEnd={() => zoneMenu("menuClose")} > 
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

   

    <div className='music_player'>
          

            <div className='status_info'>
      
              {isConnected ? (
                <p className='display_none'>Status: Connected ✅</p>
              ) : (
                <p>Status: Disconnected ❌ </p>
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
                onTouchEnd={toggleShuffle} 
                className={currentStatus.shuffle ? 'transport_button_active' : 'btn_circle'}
              >
                <img className='btn_image' src={shuffle} alt="shuffle" />
              </button>
              <button onTouchEnd={skipPrevious} className='btn_circle'>
                <img  className='btn_image' src={skip} style={{transform:'rotate(180deg)'}} alt="previous" />
              </button>
              <button onTouchEnd={togglePlayPause} className='btn_circle'>
                <img 
                className='btn_image'
                  src={currentStatus.playState === 'Playing' ? pasue : play} 
                  alt="play/pause" 
                />
              </button>
              <button onTouchEnd={skipNext} className='btn_circle'>
                <img className='btn_image' src={skip} alt="next" />
              </button>
              <button 
                onTouchEnd={toggleRepeat} 
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
    </div>

<div className='browser_container'> {isBrowseMenuVisible && browseItems && (
    <div className='browser_menu'>
      <div className='broswer_header'>
        
        <div className='broswer_button_container'>
          <button onTouchEnd={goBackOneLevel} className={canGoBack ? "brower_container_back" : "display_none"}>
            <p>Return</p>
          </button>
        </div>
        

        <h3 className='broswer_title'>
          {currentBrowseCaption}
        </h3>

      </div>

      <div className='broswer_card_container'>
        
        {browseItems.map((item) => (
          <div key={item.guid} className='broswer_card_wrapper'>
            <button 
              className='broswer_card' 
              onTouchEnd={() => handleItemClick(item)}
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


          {showSearchBox && (
            <div className='search_overlay'>
              <div className='search_box' >
                <input 
                  className='search_box_input'
                  type="text" 
                  value={searchQuery} 
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder={inputBoxPrompt}
                />
                <div className='search_buttons'>
                  <button 
                    onTouchEnd={handleSearchSubmit} 
                    className='search_button'
                  >
                    <p>Search</p>
                  </button>
                  <button
                    onTouchEnd={() => {
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
                    onTouchEnd={() => handleQuestionAnswer("Artist Name")}
                    className='btn_circle'
                  >
                    Artist
                  </button>
                  <button
                    onTouchEnd={() => handleQuestionAnswer("Song Name")}
                    className='btn_circle' 
                    style={{ marginLeft: "1rem" }}
                  >
                    Song
                  </button>
                  <button
                    onTouchEnd={() => handleQuestionAnswer("Cancel")}
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



    <div className={playerPopUp? 'active_message': 'display_none'}>


        <div className='active_message_container'>
          <h1>
            Would you like to play music in the {locationTitle}?
          </h1>


          <div className='active_message_buttons'>
              <button className='btn_circle' onClick={()=> (window.CrComLib.publishEvent("n",roomLocation,11), switchPlayer("steve"), setPlayerPopUp(false), showAudioControls(true))} id='pillShape'>
                <p>Yes, use Steve's Music Player</p>
              </button>

              <button className='btn_circle' onClick={()=> (window.CrComLib.publishEvent("n",roomLocation,12), switchPlayer("ellen"), setPlayerPopUp(false),showAudioControls(true))} id='pillShape'>
                <p>Yes, use Ellen's Music Player</p>
              </button>
          </div>
          
            <button className='btn_circle' id='pillShape' onClick={()=> setPlayerPopUp(false)}>
              <p>No, close menu</p>
            </button>
        </div>



    </div>
 

 
    <div className="volume_controls">
         {quickAudioController}
    </div>


    <div className='background_image'>
          <img src={currentStatus.albumArtUrl} />
        </div>
 

 <button className='display_none' style={{zIndex:"1"}} onClick={() =>quickLaunch()}> Quick Launch </button>

 </div>
  );
};

export default MediaServerWebSocket;
