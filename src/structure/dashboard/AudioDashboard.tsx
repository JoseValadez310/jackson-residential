import React, { useEffect, useState } from 'react';
import {useLocation,useNavigate } from "react-router-dom"
import "../../assets/css/dashboard_css/Audio_Dashboard.css";



import close from "../../assets/images/icons/icons8-x.svg";
import backbutton from "../../assets/images/icons/icons8-arrow.svg";
import menu from "../../assets/images/icons/icons8-menu.svg"
import arrow from "../../assets/images/icons/icons8-triangle-arrow.svg"
import MuteIcon from "../../assets/images/icons/icons8-no-audio.svg"





import portraitMode from "../../assets/images/icons/icons8-iphone-16-pro.svg"






//player input


import MusicPLayer1 from "./MusicPlayer1";
import MusicPLayer2 from './MusicPlayer2';


const MediaServerWebSocket: React.FC  = () => {


  const [activePlayer, setActivePlayer] = useState(true)

  const switchPlayer = (id:string) =>{
        if(id === "steve"){  
          setActivePlayer(true)
        }else if(id === "ellen"){
          setActivePlayer(false)      
        }
  }
   
  
  const navigate = useNavigate();





  


 

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
              <p onTouchEnd={() => ( lastRoom("ellensExcercise"),window.CrComLib.publishEvent("n", zone_4_location, zone_music_4_steve))}>
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
              <p onTouchEnd={() => ( lastRoom("ellensExcercise"),window.CrComLib.publishEvent("n", zone_4_location, 12))}>
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
                <p onTouchEnd={() => ( lastRoom("ellensOffice"),window.CrComLib.publishEvent("n", zone_5_location, zone_music_5_steve))}>
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
                <p onTouchEnd={() => ( lastRoom("ellensOffice"),window.CrComLib.publishEvent("n", zone_5_location, 12))}>
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
          <p onTouchEnd={() => ( lastRoom("ellensBath"),window.CrComLib.publishEvent("n", zone_6_location, zone_music_6_steve))}>
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
          <p onTouchEnd={() => ( lastRoom("ellensBath"),window.CrComLib.publishEvent("n", zone_6_location, 12))}>
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
          <p onTouchEnd={() => ( lastRoom("guestBed"), window.CrComLib.publishEvent("n", zone_8_location, zone_music_8_steve))}>
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
          <p onTouchEnd={() => ( lastRoom("guestBed"),window.CrComLib.publishEvent("n", zone_8_location, 12))}>
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
          <p onTouchEnd={() => ( lastRoom("masterBed"),window.CrComLib.publishEvent("n", zone_9_location, zone_music_9_steve))}>
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
          <p onTouchEnd={() => ( lastRoom("masterBed"),window.CrComLib.publishEvent("n", zone_9_location, 12))}>
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
          <p onTouchEnd={() => ( lastRoom("media"),window.CrComLib.publishEvent("n", zone_10_location, zone_music_10_steve))}>
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
          <p onTouchEnd={() => ( lastRoom("media"), window.CrComLib.publishEvent("n", zone_10_location, 12))}>
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
                    <p onTouchEnd={() => ( lastRoom("breakfast"), window.CrComLib.publishEvent("n",zone_2_location, zone_music_2_steve))}>
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
                    <p onTouchEnd={() => ( lastRoom("breakfast"),window.CrComLib.publishEvent("n",zone_2_location, 12))}>
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
                      <p onTouchEnd={() => ( lastRoom("dining"),window.CrComLib.publishEvent("n",zone_3_location, zone_music_3_steve))}>
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
                      <p onTouchEnd={() => ( lastRoom("dining"), window.CrComLib.publishEvent("n",zone_3_location, 12))}>
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
                      <p onTouchEnd={() => ( lastRoom("family"),window.CrComLib.publishEvent("n",zone_7_location, zone_music_7_steve))}>
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
                      <p onTouchEnd={() => ( lastRoom("family"),window.CrComLib.publishEvent("n",zone_7_location, 12))}>
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
                      <p onTouchEnd={() => ( lastRoom("game"),window.CrComLib.publishEvent("n",zone_15_location, zone_music_15_steve))}>
                        Steve
                      </p> 
                    } 
                </button>
              
                <button className='zone_container_user_2'   
                    id={zone_active_15 === 12? 'active_user':" " }>
                    {zone_active_15 === 12?  

                      <p onTouchEnd={() => window.CrComLib.publishEvent("n",zone_15_location, 0)}>
                        Turn Off Music
                      </p> 
                      : 
                      <p onTouchEnd={() => ( lastRoom("game"),window.CrComLib.publishEvent("n",zone_15_location, 12),showAudioControls(false))}>
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
                      <p onTouchEnd={() => ( lastRoom("officeSteve"),window.CrComLib.publishEvent("n",zone_17_location, zone_music_17_steve))}>
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
                      <p onTouchEnd={() => ( lastRoom("officeSteve"),window.CrComLib.publishEvent("n",zone_17_location, 12))}>
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
                      <p onTouchEnd={() => ( lastRoom("living"), window.CrComLib.publishEvent("n",zone_18_location, zone_music_18_steve))}>
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
                      <p onTouchEnd={() => ( lastRoom("living"),window.CrComLib.publishEvent("n",zone_18_location, 12))}>
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
                      <p onTouchEnd={() => ( lastRoom("kitchen"), window.CrComLib.publishEvent("n",zone_19_location, zone_music_19_steve))}>
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
                      <p onTouchEnd={() => ( lastRoom("kitchen"),window.CrComLib.publishEvent("n",zone_19_location, 12))}>
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
                <p onTouchEnd={() => ( lastRoom("arcade"),window.CrComLib.publishEvent("n", zone_11_location, zone_music_11_steve))}>
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
                <p onTouchEnd={() => ( lastRoom("arcade"), window.CrComLib.publishEvent("n", zone_11_location, 12))}>
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
          <p onTouchEnd={() => ( lastRoom("gym"),window.CrComLib.publishEvent("n", zone_21_location, zone_music_21_steve))}>
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
          <p onTouchEnd={() =>  ( lastRoom("gym"),window.CrComLib.publishEvent("n", zone_21_location, 12))}>
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
                <p onTouchEnd={() =>  ( lastRoom("bway"), window.CrComLib.publishEvent("n", zone_22_location, zone_music_22_steve))}>
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
          <p onTouchEnd={() =>   ( lastRoom("bway"), window.CrComLib.publishEvent("n", zone_22_location, 12))}>
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
          <p onTouchEnd={() =>  ( lastRoom("poolPatio"),window.CrComLib.publishEvent("n", zone_14_location, zone_music_14_steve))}>
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
          <p onTouchEnd={() => ( lastRoom("poolPatio"), window.CrComLib.publishEvent("n", zone_14_location, 12))}>
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
          <p onTouchEnd={() => ( lastRoom("poolArea"),window.CrComLib.publishEvent("n", zone_20_location, zone_music_20_steve))}>
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
          <p onTouchEnd={() =>  ( lastRoom("poolArea"), window.CrComLib.publishEvent("n", zone_20_location, 12))}>
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
          <p onTouchEnd={() => ( lastRoom("upperDeck"), window.CrComLib.publishEvent("n", zone_23_location, zone_music_23_steve))}>
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
          <p onTouchEnd={() =>  ( lastRoom("upperDeck"), window.CrComLib.publishEvent("n", zone_23_location, 12))}>
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

    const roomIdState = location.state?.roomId;
    const controllerStarter =location.state?.lastUsed
    const [roomId, setRoomId] = useState(roomIdState)
  
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
      } else (
        lastRoom(controllerStarter)
      )




      if(currentZoneActivity === 11 || currentZoneActivity === 12 ){
        setPlayerPopUp(false)
        showAudioControls(true)
      } else if( currentZoneActivity === -1) {
        setPlayerPopUp(false)
      } else {
        setPlayerPopUp(true)
      }
  
  },[currentZoneActivity])


  const showAudioControls = (value:boolean) =>{
    setAudioControl(value)  
  }



  const lastRoom = (roomLocation:string) =>{
      setRoomId(roomLocation)
      setAudioControl(true)
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
   

  } else if(roomId === "upperDeck" && audioControl){
    quickAudioController =(
    
      <div className='quickAudioControls'>
          
      <div className='zone_controls'>
        <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_23, true), window.CrComLib.publishEvent("b", zone_decrease_23, false))}>
          <img className="btn_image" src={arrow} />
        </button>

        <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_23, true), window.CrComLib.publishEvent("b", zone_mute_23, false))}>
          {zone23_mute ? (
            <>
              <img src={MuteIcon} className="volume_mute_btn" />
              <p className="mute_btn_txt">Click to Unmute</p>
            </>
          ) : (
            <>
              <p className="volume_txt">{ ((zone23_vol/65535) * 100).toFixed(0)}</p>
              <p className="mute_btn_txt">Click to Mute</p>
            </>
          )}
        </button>

        <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_23, true), window.CrComLib.publishEvent("b", zone_increase_23, false))}>
          <img className="btn_image" src={arrow} id="flip" />
        </button>
      </div>

    </div>
      )
   

  } else if(roomId === "officeSteve" && audioControl){
    quickAudioController =(
    
      <div className='quickAudioControls'>
          
      <div className='zone_controls'>
        <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_17, true), window.CrComLib.publishEvent("b", zone_decrease_17, false))}>
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

        <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_17, true), window.CrComLib.publishEvent("b", zone_increase_17, false))}>
          <img className="btn_image" src={arrow} id="flip" />
        </button>
      </div>

    </div>
      )
   

  } else if(roomId === "gym" && audioControl){
    quickAudioController =(
    
      <div className='quickAudioControls'>
          
      <div className='zone_controls'>
        <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_21, true), window.CrComLib.publishEvent("b", zone_decrease_21, false))}>
          <img className="btn_image" src={arrow} />
        </button>

        <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_21, true), window.CrComLib.publishEvent("b", zone_mute_21, false))}>
          {zone21_mute ? (
            <>
              <img src={MuteIcon} className="volume_mute_btn" />
              <p className="mute_btn_txt">Click to Unmute</p>
            </>
          ) : (
            <>
              <p className="volume_txt">{ ((zone21_vol/65535) * 100).toFixed(0)}</p>
              <p className="mute_btn_txt">Click to Mute</p>
            </>
          )}
        </button>

        <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_21, true), window.CrComLib.publishEvent("b", zone_increase_21, false))}>
          <img className="btn_image" src={arrow} id="flip" />
        </button>
      </div>

    </div>
      )
   

  } else if(roomId === "bway" && audioControl){
    quickAudioController =(
    
      <div className='quickAudioControls'>
          
      <div className='zone_controls'>
        <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_22, true), window.CrComLib.publishEvent("b", zone_decrease_22, false))}>
          <img className="btn_image" src={arrow} />
        </button>

        <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_22, true), window.CrComLib.publishEvent("b", zone_mute_22, false))}>
          {zone22_mute ? (
            <>
              <img src={MuteIcon} className="volume_mute_btn" />
              <p className="mute_btn_txt">Click to Unmute</p>
            </>
          ) : (
            <>
              <p className="volume_txt">{ ((zone22_vol/65535) * 100).toFixed(0)}</p>
              <p className="mute_btn_txt">Click to Mute</p>
            </>
          )}
        </button>

        <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_22, true), window.CrComLib.publishEvent("b", zone_increase_22, false))}>
          <img className="btn_image" src={arrow} id="flip" />
        </button>
      </div>

    </div>
      )
   

  } else if(roomId === "poolPatio" && audioControl){
    quickAudioController =(
    
      <div className='quickAudioControls'>
          
      <div className='zone_controls'>
        <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_14, true), window.CrComLib.publishEvent("b", zone_decrease_14, false))}>
          <img className="btn_image" src={arrow} />
        </button>

        <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_14, true), window.CrComLib.publishEvent("b", zone_mute_14, false))}>
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

        <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_14, true), window.CrComLib.publishEvent("b", zone_increase_14, false))}>
          <img className="btn_image" src={arrow} id="flip" />
        </button>
      </div>

    </div>
      )
   

  } else if(roomId === "poolArea" && audioControl){
    quickAudioController =(
    
      <div className='quickAudioControls'>
          
      <div className='zone_controls'>
        <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_20, true), window.CrComLib.publishEvent("b", zone_decrease_20, false))}>
          <img className="btn_image" src={arrow} />
        </button>

        <button className="btn_square_wide" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_mute_20, true), window.CrComLib.publishEvent("b", zone_mute_20, false))}>
          {zone20_mute ? (
            <>
              <img src={MuteIcon} className="volume_mute_btn" />
              <p className="mute_btn_txt">Click to Unmute</p>
            </>
          ) : (
            <>
              <p className="volume_txt">{ ((zone20_vol/65535) * 100).toFixed(0)}</p>
              <p className="mute_btn_txt">Click to Mute</p>
            </>
          )}
        </button>

        <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_20, true), window.CrComLib.publishEvent("b", zone_increase_20, false))}>
          <img className="btn_image" src={arrow} id="flip" />
        </button>
      </div>

    </div>
      )
   

  } else if(roomId === "living" && audioControl){
    quickAudioController =(
    
      <div className='quickAudioControls'>
          
      <div className='zone_controls'>
        <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_18, true), window.CrComLib.publishEvent("b", zone_decrease_18, false))}>
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

        <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_18, true), window.CrComLib.publishEvent("b", zone_increase_18, false))}>
          <img className="btn_image" src={arrow} id="flip" />
        </button>
      </div>

    </div>
      )
   

  }  else if(roomId === "kitchen" && audioControl){
    quickAudioController =(
    
      <div className='quickAudioControls'>
          
      <div className='zone_controls'>
        <button className="btn_circle" id='decrease' onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_decrease_19, true), window.CrComLib.publishEvent("b", zone_decrease_19, false))}>
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

        <button className="btn_circle" id="increase" onTouchEnd={() => (window.CrComLib.publishEvent("b", zone_increase_19, true), window.CrComLib.publishEvent("b", zone_increase_19, false))}>
          <img className="btn_image" src={arrow} id="flip" />
        </button>
      </div>

    </div>
      )
   

  }
  
  
  
  





  return (
   
      <div className='audio_dashboard'>



{activePlayer? <MusicPLayer1 /> : <MusicPLayer2 />}
  
      


<div className='audio_control' onTouchEnd={() => zoneMenu("menuOpen")}>
        <button className="pill_shape_audio">
            <img 
              className="btn_image" 
              src={menu} 
            />
            <p> Audio Control</p>
          </button>
    </div>


<div className='switch_user_div'>
    
    <button className='btn_circle' id={activePlayer? "active_btn":""} onClick={()=> switchPlayer("steve")} >
    <p>Steve's Music</p>
    </button>


    <button className='btn_circle' id={activePlayer? "":"active_btn"} onClick={()=> switchPlayer("ellen")} >
    <p>Ellen's Music</p>
    </button>



</div>

<div className="audio_back_button" onClick={()=> navigate(-1)}> 
        <button className="pill_shape_audio">
            <img className="btn_image" src={backbutton}/>
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

<div className="landscape_warning">
            <h1> Please rotate your device back to portrait mode. </h1>
            <img src={portraitMode}  />
</div>

</div>
  );
};

export default MediaServerWebSocket;
