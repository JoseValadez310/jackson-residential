import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"
import "../../assets/css/dashboard_css/Audio_Dashboard.css";


import play from "../../assets/images/icons/icons8-play.svg";
//import pasue from "../../assets/images/icons/icons8-pause.svg";
import repeat from "../../assets/images/icons/icons8-replay.svg";
import shuffle from "../../assets/images/icons/icons8-shuffle.svg";
import skip from '../../assets/images/icons/icons8-fast-forward.svg';
//import musicIcon from "../../assets/images/icons/icons8-music (1).svg";
import close from "../../assets/images/icons/icons8-x.svg";
import backbutton from "../../assets/images/icons/icons8-arrow.svg";
//import topmenu from "../../assets/images/icons/icons8-top-menu.svg";
import menu from "../../assets/images/icons/icons8-menu.svg"
import arrow from "../../assets/images/icons/icons8-triangle-arrow.svg"
import MuteIcon from "../../assets/images/icons/icons8-no-audio.svg"

// Streaming services
//import amazonMusic from "../../assets/images/logos/streaming_services_logos/Amazon_Music_(Logo).svg"
//import deezer from "../../assets/images/logos/streaming_services_logos/Deezer_logo,_2023.svg"
//import iheart from "../../assets/images/logos/streaming_services_logos/IHeartRadio_logo.svg"
//import liveOne from "../../assets/images/logos/streaming_services_logos/LVO_BIG.svg"
//import murfie from "../../assets/images/logos/streaming_services_logos/murfie-magenta-logo.png"
//import pandora from "../../assets/images/logos/streaming_services_logos/Pandora_wordmark.svg"
//import siriusXM from "../../assets/images/logos/streaming_services_logos/Sirius_XM_logo_2023.svg"
//import soundMachine from "../../assets/images/logos/streaming_services_logos/idM17aNGAN_logos.svg"
//import spotify from "../../assets/images/logos/streaming_services_logos/2024_Spotify_Logo.svg"
//import tidal from "../../assets/images/logos/streaming_services_logos/tidal.svg"
//import tuneIn from "../../assets/images/logos/streaming_services_logos/TuneIn_Logo_2018.svg"

//import power from "../../assets/images/icons/icons8-power.svg"


import portraitMode from "../../assets/images/icons/icons8-iphone-16-pro.svg"










const MediaServerWebSocket: React.FC  = () => {

  //change these based on information 




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
                      <img src={MuteIcon} className="volume_mute_btn" />
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
                      <img src={MuteIcon} className="volume_mute_btn" />
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
                      <img src={MuteIcon} className="volume_mute_btn" />
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

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_16, true), window.CrComLib.publishEvent("b", zone_increase_16, false), console.log(zone_increase_16))}>
                  <img className="btn_image" src={arrow} id="flip" />
                </button>
              </div>
            </div>
      </>
    )


  return (
   
      <div className='audio_dashboard'>


          
    <div className="audio_back_button" onClick={() => navigate(-1)}> 
        <button className="audio_back">
            <img src={backbutton}/>
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
  
        <div className='streaming_service_logo'>
       
        </div>

        <div className='background_image'>
        
        </div>

        <div className='status_info'>
         
        </div>

        <div className='album_art'>
        
        </div>

        <div className='album_info'>
          <p className='album_info_title'>'Unknown'</p>
          <p className='album_info_artist'>'Unknown</p>
          <p className='album_info_album'>'Unknown'</p>
        </div>

        <div className='playback_controls'>
          <button 
          
            className='btn_circle'
          >
            <img className='btn_image' src={shuffle} alt="shuffle" />
          </button>
          <button className='btn_circle'>
            <img  className='btn_image' src={skip} style={{transform:'rotate(180deg)'}} alt="previous" />
          </button>
          <button  className='btn_circle'>
            <img 
             className='btn_image'
              src={play} 
              alt="play/pause" 
            />
          </button>
          <button  className='btn_circle'>
            <img className='btn_image' src={skip} alt="next" />
          </button>
          <button 
           
            className='btn_circle'
          >
            <img className='btn_image' src={repeat} alt="repeat" style={{transform:"scaleX(-1)"}}/>
          </button>
        </div>

        <div className="progress_bar">
          <p className='current_postition'></p>
          <input
            type="range"
            min="0"
           
            style={{
              borderRadius: '15px',
              background: `linear-gradient(to right, rgb(85, 83, 83) 0%, rgb(207, 241, 231) 1%, #e0e0e0 10%, #e0e0e0 100%)`
            }}
          />
          <p className='end_postition'></p> 
        </div>

        <div className='music_button_container'>
          <button 
            className="home_button" 
           
          >
           
          </button>
        </div>

        <div className='browser_container'>
         
        </div>

        <div className="volume_controls">
          <button 
          
            className='btn_circle'
          >
            <p style={{fontSize:"16px"}}>Mute</p>
          </button>




          
        </div>

      

      




    <div className="landscape_warning">
                <h1> Please rotate your device back to portrait mode. </h1>
                <img src={portraitMode}  />
    </div>
 

 

 </div>
  );
};

export default MediaServerWebSocket;
