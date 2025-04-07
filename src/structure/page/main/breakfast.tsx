
// React 
import { useEffect, useState } from "react"

// React Router DOM
import { Link } from "react-router-dom"

//Controller
import AppleTv from "../../../components/controllers/AppleTv"
import DirecTv from "../../../components/controllers/DirecTv"
import BluRay from "../../../components/controllers/BluRay"
// import Roku from "../../../components/controllers/Roku"
// Music Page import 

//CSS for Controllers

import "../../../assets/css/page_css/genericRoom.css"
import "../../../assets/css/page_css/multiTvs.css"




// Componenets 

//import DateDisplay from "../../components/DateDisplay"
// Logos

import appleTV      from "../../../assets/images/logos/Apple_TV_(logo).svg"
import small_dtv    from "../../../assets/images/logos/DTV_logo.svg"
//import roku         from "../../../assets/images/logos/Roku_logo.svg"
import kscape       from "../../../assets/images/logos/Kaleidescape_(logo).svg"
import bluRay       from '../../../assets/images/logos/blu-ray-disc.svg'

// General Icons
import TV          from "../../../assets/images/icons/icons8-tv-1.svg"
import TV1          from "../../../assets/images/icons/icons8-tv-2.svg"
import lights      from "../../../assets/images/icons/noun-light-bulb-2216273.svg"
import music       from "../../../assets/images/icons/icons8-music.svg"
import home_button from "../../../assets/images/icons/icons8-exterior.svg"
import menu_button from "../../../assets/images/icons/icons8-arrow.svg"
import mute        from "../../../assets/images/icons/icons8-no-audio.svg"
import power       from "../../../assets/images/icons/icons8-power.svg"
import arrow       from "../../../assets/images/icons/icons8-triangle-arrow.svg"
import portraitMode from "../../../assets/images/icons/icons8-iphone-16-pro.svg"


// Light SVGs
import lightOn from "../../../assets/images/icons/icons8-light-on.svg"
import lightOff from "../../../assets/images/icons/icons8-light-off.svg"
import Kaleidescape from "../../../components/controllers/Kaleidescape"

const FamilyRoom = () =>{
/*
---------------------------------------------------------------------------- Basic information regarding the page
*/
    const roomName = "Breakfast"
/*
---------------------------------------------------------------------------- Room dashboard apps 
*/
    const [roomApps, setRoomApps]         = useState(false) 
    const [tvOptions, setTvOptions]       = useState(true)
    const [musicOption, setMusicOption]   = useState(false)
    const [lightsOption, setLightsOption] = useState(false)
/*
---------------------------------------------------------------------------- Local and dynamic control of media sources 
*/
    const [media1, setMedia1]   = useState(false)
    const [media2, setMedia2]   = useState(false)
    const [media3, setMedia3]   = useState(false)
    const [media4, setMedia4]   = useState(false)
    const [media5, setMedia5]   = useState(false)
    const [media6, setMedia6]   = useState(false)
    const [media7, setMedia7]   = useState(false)
    const [media8, setMedia8]   = useState(false)

    const [trigger1, setTrigger1] = useState(false)
    const [trigger2, setTrigger2] = useState(false)

/*
---------------------------------------------------------------------------- selects the correct controller to display based on the media# state
*/
    let active_media:boolean  // controls the avaiablity of either source tiles or controller/volume 
    let media_1:string
    let media_2:string
    let media_3:string
    let media_4:string
    let media_5:string
    let media_6:string
    let media_7:string
    let media_8:string

    const roomLocation:string = "1"    // East 
    const roomLocation_tv_2:string = "2" // West

    const [activeSource, setActiveSource] = useState(0) 
    const [activeSource2, setActiveSource2] = useState(0) 

    const sub_title_1 = "BluRay"
    const sub_title_2 = "Kaleidescape"
    const sub_title_3 = "DTV House 1"
    const sub_title_4 = "DTV House 2"
    const sub_title_5 = "DTV Steve"
    const sub_title_6 = "ATV House 1"
    const sub_title_7 = "ATV House 2"
    const sub_title_8 = "ATV Steve"

    const media_1_img = bluRay
    const media_2_img = kscape
    const media_3_img = small_dtv
    const media_4_img = small_dtv
    const media_5_img = small_dtv
    const media_6_img = appleTV
    const media_7_img = appleTV
    const media_8_img = appleTV

    const controller_styles_1 = "bluRay_controller"
    const controller_styles_2 = "kaleidescape_controller"
    const controller_styles_3 = "direct_controller"
    const controller_styles_4 = "direct_controller"
    const controller_styles_5 = "direct_controller"
    const controller_styles_6 = "apple_tv_controller"
    const controller_styles_7 = "apple_tv_controller"
    const controller_styles_8 = "apple_tv_controller"

    const controller_1 = <BluRay />
    const controller_2 = <Kaleidescape />
    const controller_3 = <DirecTv />
    const controller_4 = <DirecTv />
    const controller_5 = <DirecTv />
    const controller_6 = <AppleTv />
    const controller_7 = <AppleTv />
    const controller_8 = <AppleTv />
/*
---------------------------------------------------------------------------- Room Vol / Mute status
*/
    const [roomVolume,setRoomVolume]  = useState(0)
    const [roomMute, setRoomMute]     = useState(false)
    
    const audio_volume_join   = "101" // West 
    const audio_mute_join     = "505"
    const audio_increase_join = "506"
    const audio_decrease_join = "504"


/*
---------------------------------------------------------------------------- Modals for Apple Tv Reboot or Room shutdown
*/
    const [displayReboot, setDisplayReboot] = useState(false) // Apple TV reboot menu 
    const [tvPowerMenu, setTvPowerMenu] = useState(false)      //  TV Power Menu   
  
    

/*
---------------------------------------------------------------------------- Lighting info
*/
    const light_1_join = "267"
    const light_2_join = "268"
    const light_3_join = "269"
    const light_4_join = "270"
    const light_5_join = "272"
    const light_6_join = "273"
    const light_7_join = "274"
    const light_8_join = "275"


    const light_1_name:string = "Normal"
    const light_2_name:string = "Pendant"
    const light_3_name:string = "Accent"
    const light_4_name:string = "Down Lights"
    const light_5_name:string = "Inner Patio"

    const light_6_name:string = "Outer Patio"
    const light_7_name:string = "Kitchen"
    const light_8_name:string = "Outside"
   
    const [light_1, setLight_1] = useState(false)
    const [light_2, setLight_2] = useState(false)
    const [light_3, setLight_3] = useState(false)
    const [light_4, setLight_4] = useState(false)
    const [light_5, setLight_5] = useState(false)
    const [light_6, setLight_6] = useState(false)
    const [light_7, setLight_7] = useState(false)
    const [light_8, setLight_8] = useState(false)






// console.log 
const [currentTVSource, setCourrentTVSource] = useState("1 W/Audio")
const [sourceSelectionOne, setSourceSelectionOne] = useState(false) // Tv without audio now marked as tv 2
const [sourceSelectionTwo, setSourceSelectionTwo] = useState(true) // tv with aduio and now marked as TV 1


//const [sourceSelectionMirror, setSourceSelectionMirror] = useState(false)


const sourceDisplay = (tvSelection:string) =>{
    if(tvSelection === "tv1"){
        setSourceSelectionOne(true)
        setSourceSelectionTwo(false)

        setCourrentTVSource("2 W/Out Audio")
    } else if (tvSelection === "tv2"){
        setSourceSelectionOne(false)
        setSourceSelectionTwo(true)  

        setCourrentTVSource("1 W/Audio")

    } 
}






/*
----------------------------------------------------------------------------------------------------------------------------------------
*/

    useEffect(() => {
        console.log(roomLocation)

        const activeSource = window.CrComLib.subscribeState("n",roomLocation,(value: number) => {setActiveSource(value);});
        const activeSource2 = window.CrComLib.subscribeState("n",roomLocation_tv_2,(value: number) => {setActiveSource2(value);});

 

        // TV audio controls
        const roomVolume     = window.CrComLib.subscribeState("n",audio_volume_join,(value: number) => {setRoomVolume(value);});
        const roomMute    = window.CrComLib.subscribeState("b",audio_mute_join,(value: boolean) => {setRoomMute(value);});

        // Lights

        const light_1 = window.CrComLib.subscribeState("b",`${light_1_join}`,(value: boolean) => {setLight_1(value);});
        const light_2 = window.CrComLib.subscribeState("b",`${light_2_join}`,(value: boolean) => {setLight_2(value);});
        const light_3 = window.CrComLib.subscribeState("b",`${light_3_join}`,(value: boolean) => {setLight_3(value);});
        const light_4 = window.CrComLib.subscribeState("b",`${light_4_join}`,(value: boolean) => {setLight_4(value);});
        const light_5 = window.CrComLib.subscribeState("b",`${light_5_join}`,(value: boolean) => {setLight_5(value);});
        const light_6 = window.CrComLib.subscribeState("b",`${light_6_join}`,(value: boolean) => {setLight_6(value);});
        const light_7 = window.CrComLib.subscribeState("b",`${light_7_join}`,(value: boolean) => {setLight_7(value);});
        const light_8 = window.CrComLib.subscribeState("b",`${light_8_join}`,(value: boolean) => {setLight_8(value);});
  

        return () => {

           
            window.CrComLib.unsubscribeState("n",roomLocation,activeSource)
            window.CrComLib.unsubscribeState("n",roomLocation_tv_2,activeSource2)

            
          
         
            // TV audio controls
            window.CrComLib.unsubscribeState("n",audio_volume_join,roomVolume)
            window.CrComLib.unsubscribeState("b",audio_mute_join,roomMute)

            // lights 

            window.CrComLib.unsubscribeState("b",`${light_1_join}`,light_1)
            window.CrComLib.unsubscribeState("b",`${light_2_join}`,light_2)
            window.CrComLib.unsubscribeState("b",`${light_3_join}`,light_3)
            window.CrComLib.unsubscribeState("b",`${light_4_join}`,light_4)
            window.CrComLib.unsubscribeState("b",`${light_5_join}`,light_5)
            window.CrComLib.unsubscribeState("b",`${light_6_join}`,light_6)
            window.CrComLib.unsubscribeState("b",`${light_7_join}`,light_7)
            window.CrComLib.unsubscribeState("b",`${light_8_join}`,light_8)


            
          
            
        }
      }, []);


/*
---------------------------------------------------------------------------- Light section  
*/

    const sliderValue = (value: boolean, id: string) => {
    console.log(value)


     if(id === "light_1"){

        // some crestron commands
        window.CrComLib.publishEvent("b",`${light_1_join}`,true)
        window.CrComLib.publishEvent("b",`${light_1_join}`,false)

        console.log("sending join", light_1_join)
      
     } else if (id === "light_2"){
    
        // some crestron commands
        window.CrComLib.publishEvent("b",`${light_2_join}`,true)
        window.CrComLib.publishEvent("b",`${light_2_join}`,false)

        console.log("sending join", light_2_join)
     } else if (id === "light_3"){
         
        // some crestron commands
        window.CrComLib.publishEvent("b",`${light_3_join}`,true)
        window.CrComLib.publishEvent("b",`${light_3_join}`,false)

        console.log("sending join", light_3_join)
     } else if (id === "light_4"){
        
        // some crestron commands
        window.CrComLib.publishEvent("b",`${light_4_join}`,true)
        window.CrComLib.publishEvent("b",`${light_4_join}`,false)

        console.log("sending join", light_4_join)
     } else if (id === "light_5"){
            
        // some crestron commands
        window.CrComLib.publishEvent("b",`${light_5_join}`,true)
        window.CrComLib.publishEvent("b",`${light_5_join}`,false)

        console.log("sending join", light_5_join)
     } else if (id === "light_6"){
         
        // some crestron commands
        window.CrComLib.publishEvent("b",`${light_6_join}`,true)
        window.CrComLib.publishEvent("b",`${light_6_join}`,false)

        console.log("sending join", light_6_join)
     } else if (id === "light_7"){
            
        // some crestron commands
        window.CrComLib.publishEvent("b",`${light_7_join}`,true)
        window.CrComLib.publishEvent("b",`${light_7_join}`,false)

        console.log("sending join", light_7_join)
     } else if (id === "light_8"){
              
        // some crestron commands
        window.CrComLib.publishEvent("b",`${light_8_join}`,true)
        window.CrComLib.publishEvent("b",`${light_8_join}`,false)

        console.log("sending join", light_8_join)
     }
        }


/*
---------------------------------------------------------------------------- Checks to see if any media sources are currently on
*/









    if(media1 ){
    //display controller and hide source selection
       active_media = true
    //displaying the correct controller and hiding the rest
        media_1 = "media_on"      
        media_2 = "media_off"  
        media_3 = "media_off"  
        media_4 = "media_off"  
        media_5 = "media_off"   
        media_6 = "media_off"  
        media_7 = "media_off"  
        media_8 = "media_off"  
    } 
    else if(media2){
    //display controller and hide source selection
        active_media = true
    //displaying the correct controller and hiding the rest
       media_1 = "media_off"   
       media_2 = "media_on" 
       media_3 = "media_off"  
       media_4 = "media_off"  
       media_5 = "media_off"  
       media_6 = "media_off"  
       media_7 = "media_off"  
       media_8 = "media_off"     
    } 
    else if(media3){
    //display controller and hide source selection
        active_media = true
    //displaying the correct controller and hiding the rest
        media_1 = "media_off"   
        media_2 = "media_off" 
        media_3 = "media_on"  
        media_4 = "media_off"  
        media_5 = "media_off"  
        media_6 = "media_off"  
        media_7 = "media_off"  
        media_8 = "media_off"  
    } 
    else if(media4){
    //display controller and hide source selection
        active_media = true
    //displaying the correct controller and hiding the rest
        media_1 = "media_off"   
        media_2 = "media_off" 
        media_3 = "media_off"  
        media_4 = "media_on"  
        media_5 = "media_off"  
        media_6 = "media_off"  
        media_7 = "media_off"  
        media_8 = "media_off"  
    } 
    else if(media5){
    //display controller and hide source selection
        active_media = true
    //displaying the correct controller and hiding the rest
        media_1 = "media_off"   
        media_2 = "media_off" 
        media_3 = "media_off"  
        media_4 = "media_off"  
        media_5 = "media_on"  
        media_6 = "media_off"  
        media_7 = "media_off"  
        media_8 = "media_off"  
    } 
    else if(media6){
    //display controller and hide source selection
        active_media = true
    //displaying the correct controller and hiding the rest
        media_1 = "media_off"   
        media_2 = "media_off" 
        media_3 = "media_off"  
        media_4 = "media_off"  
        media_5 = "media_off"  
        media_6 = "media_on"  
        media_7 = "media_off"  
        media_8 = "media_off"  
    } 
    else if(media7){
    //display controller and hide source selection
        active_media = true
    //displaying the correct controller and hiding the rest
        media_1 = "media_off"   
        media_2 = "media_off" 
        media_3 = "media_off"  
        media_4 = "media_off"  
        media_5 = "media_off"  
        media_6 = "media_off"  
        media_7 = "media_on"  
        media_8 = "media_off"  
    } 
    else if(media8){
    //display controller and hide source selection
        active_media = true
     //displaying the correct controller and hiding the rest
        media_1 = "media_off"   
        media_2 = "media_off" 
        media_3 = "media_off"  
        media_4 = "media_off"  
        media_5 = "media_off"  
        media_6 = "media_off"  
        media_7 = "media_off"  
        media_8 = "media_on"    
    } 
    else {
        active_media = false

       //display controller and hide source selection
            active_media = false
       //displaying the correct controller and hiding the rest
        media_1 = "media_off"   
        media_2 = "media_off" 
        media_3 = "media_off"  
        media_4 = "media_off"  
        media_5 = "media_off"  
        media_6 = "media_off"  
        media_7 = "media_off"  
        media_8 = "media_off"  
    
}



useEffect(()=>{
    switch (activeSource2) {
        case 1:
            setMedia1(true)
            setMedia2(false)
            setMedia3(false)
            setMedia4(false)
            setMedia5(false)
            setMedia6(false)
            setMedia7(false)
            setMedia8(false)
            window.CrComLib.publishEvent("b","1",true)
            window.CrComLib.publishEvent("b","1",false)
            window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,1)

            
            break;

        case 2:
            setMedia1(false)
            setMedia2(true)
            setMedia3(false)
            setMedia4(false)
            setMedia5(false)
            setMedia6(false)
            setMedia7(false)
            setMedia8(false)
            window.CrComLib.publishEvent("b","2",true)
            window.CrComLib.publishEvent("b","2",false)
            window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,2)
            break;

        case 5:
            setMedia1(false)
            setMedia2(false)
            setMedia3(true)
            setMedia4(false)
            setMedia5(false)
            setMedia6(false)
            setMedia7(false)
            setMedia8(false)
            window.CrComLib.publishEvent("b","5",true)
            window.CrComLib.publishEvent("b","5",false)
            window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,5)
            break;

        case 6:   
            setMedia1(false)
            setMedia2(false)
            setMedia3(false)
            setMedia4(true)
            setMedia5(false)
            setMedia6(false)
            setMedia7(false)
            setMedia8(false)
            window.CrComLib.publishEvent("b","6",true)
            window.CrComLib.publishEvent("b","6",false)
            window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,6)
            break;

        case 7:

            setMedia1(false)
            setMedia2(false)
            setMedia3(false)
            setMedia4(false)
            setMedia5(true)
            setMedia6(false)
            setMedia7(false)
            setMedia8(false)
            window.CrComLib.publishEvent("b","7",true)
            window.CrComLib.publishEvent("b","7",false)
            window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,7)
            break;

        case 8:

            setMedia1(false)
            setMedia2(false)
            setMedia3(false)
            setMedia4(false)
            setMedia5(false)
            setMedia6(true)
            setMedia7(false)
            setMedia8(false)
            window.CrComLib.publishEvent("b","8",true)
            window.CrComLib.publishEvent("b","8",false)
            window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,8)
            break;

        case 9:
            setMedia1(false)
            setMedia2(false)
            setMedia3(false)
            setMedia4(false)
            setMedia5(false)
            setMedia6(false)
            setMedia7(true)
            setMedia8(false)

            window.CrComLib.publishEvent("b","9",true)
            window.CrComLib.publishEvent("b","9",false)
            window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,9)
            break;

        case 10:
            setMedia1(false)
            setMedia2(false)
            setMedia3(false)
            setMedia4(false)
            setMedia5(false)
            setMedia6(false)
            setMedia7(false)
            setMedia8(true)

            window.CrComLib.publishEvent("b","10",true)
            window.CrComLib.publishEvent("b","10",false)

            window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,10)
            break;
    
        default:
            setMedia1(false)
            setMedia2(false)
            setMedia3(false)
            setMedia4(false)
            setMedia5(false)
            setMedia6(false)
            setMedia7(false)
            setMedia8(false)
            break;
    }

},[activeSource2])


    // Tile click, function calls to set local values and crestron values
    const playSource = (id:string) =>{
        console.log(`play source on TV ${currentTVSource}`)
        if(id === "media1"){
            // Send command to Crestron         
            setMedia1(true)
            setMedia2(false)
            setMedia3(false)
            setMedia4(false)
            setMedia5(false)
            setMedia6(false)
            setMedia7(false)
            setMedia8(false)
            
            


            window.CrComLib.publishEvent("b","1",true)
            window.CrComLib.publishEvent("b","1",false)

            console.log("BluRay join", 1)
            //Sending Crestron Media ID
            window.CrComLib.publishEvent("n",`${roomLocation}`,1)
        } 
        else if (id === "media2"){
            // Send command to Crestron 
            setMedia1(false)
            setMedia2(true)
            setMedia3(false)
            setMedia4(false)
            setMedia5(false)
            setMedia6(false)
            setMedia7(false)
            setMedia8(false)
            
            window.CrComLib.publishEvent("b","2",true)
            window.CrComLib.publishEvent("b","2",false)


            console.log("Kaleidescape join", 2)
            //Sending Crestron Media ID
            window.CrComLib.publishEvent("n",`${roomLocation}`,2)
        } 
        else if (id === "media3"){
            // Send command to Crestron 
            setMedia1(false)
            setMedia2(false)
            setMedia3(true)
            setMedia4(false)
            setMedia5(false)
            setMedia6(false)
            setMedia7(false)
            setMedia8(false)
        
            
            window.CrComLib.publishEvent("b","5",true)
            window.CrComLib.publishEvent("b","5",false)

          

            console.log("DTV 3 House 1 join", 5)
            //Sending Crestron Media ID
            window.CrComLib.publishEvent("n",`${roomLocation}`,5)
        } 
        else if (id === "media4"){
            // Send command to Crestron 
            setMedia1(false)
            setMedia2(false)
            setMedia3(false)
            setMedia4(true)
            setMedia5(false)
            setMedia6(false)
            setMedia7(false)
            setMedia8(false)
            
            

            window.CrComLib.publishEvent("b","6",true)
            window.CrComLib.publishEvent("b","6",false)

            console.log("DTV 4 House 2 join", 6)
            //Sending Crestron Media ID
            window.CrComLib.publishEvent("n",`${roomLocation}`,6)
        } 
        else if (id === "media5"){
            // Send command to Crestron 
            setMedia1(false)
            setMedia2(false)
            setMedia3(false)
            setMedia4(false)
            setMedia5(true)
            setMedia6(false)
            setMedia7(false)
            setMedia8(false)
            
            

            window.CrComLib.publishEvent("b","7",true)
            window.CrComLib.publishEvent("b","7",false)
            console.log("DTV 5 Steve join", 7)

            //Sending Crestron Media ID
            window.CrComLib.publishEvent("n",`${roomLocation}`,7)
        } 
        else if (id === "media6"){
            // Send command to Crestron 
            setMedia1(false)
            setMedia2(false)
            setMedia3(false)
            setMedia4(false)
            setMedia5(false)
            setMedia6(true)
            setMedia7(false)
            setMedia8(false)

            
            window.CrComLib.publishEvent("b","8",true)
            window.CrComLib.publishEvent("b","8",false)
        console.log("ATV 1 House 1 join", 8)
        //Sending Crestron Media ID
        window.CrComLib.publishEvent("n",`${roomLocation}`,8)
        } 
        else if (id === "media7"){
            // c
            setMedia1(false)
            setMedia2(false)
            setMedia3(false)
            setMedia4(false)
            setMedia5(false)
            setMedia6(false)
            setMedia7(true)
            setMedia8(false)

            

         
            window.CrComLib.publishEvent("b","9",true)
            window.CrComLib.publishEvent("b","9",false)
        console.log("ATV 2 House 2 join", 9)
        //Sending Crestron Media ID
        window.CrComLib.publishEvent("n",`${roomLocation}`,9)
        } 
        else if (id === "media8"){
            // c
            setMedia1(false)
            setMedia2(false)
            setMedia3(false)
            setMedia4(false)
            setMedia5(false)
            setMedia6(false)
            setMedia7(false)
            setMedia8(true)

            window.CrComLib.publishEvent("b","10",true)
            window.CrComLib.publishEvent("b","10",false)
            

            console.log("ATV 3 Steve join", 10)
            //Sending Crestron Media ID
            window.CrComLib.publishEvent("n",`${roomLocation}`,10)
        } 
        }
    const playSource_2 = (id:string) =>{
        console.log(`play source on TV ${currentTVSource}`)
        if(id === "media1"){
            // Send command to Crestron         
            setMedia1(true)
            setMedia2(false)
            setMedia3(false)
            setMedia4(false)
            setMedia5(false)
            setMedia6(false)
            setMedia7(false)
            setMedia8(false)
            
            


            window.CrComLib.publishEvent("b","1",true)
            window.CrComLib.publishEvent("b","1",false)

            console.log("BluRay join", 1)
            //Sending Crestron Media ID
            window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,1)
        } 
        else if (id === "media2"){
            // Send command to Crestron 
            setMedia1(false)
            setMedia2(true)
            setMedia3(false)
            setMedia4(false)
            setMedia5(false)
            setMedia6(false)
            setMedia7(false)
            setMedia8(false)
            
            window.CrComLib.publishEvent("b","2",true)
            window.CrComLib.publishEvent("b","2",false)


            console.log("Kaleidescape join", 2)
            //Sending Crestron Media ID
            window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,2)
        } 
        else if (id === "media3"){
            // Send command to Crestron 
            setMedia1(false)
            setMedia2(false)
            setMedia3(true)
            setMedia4(false)
            setMedia5(false)
            setMedia6(false)
            setMedia7(false)
            setMedia8(false)
        
            
            window.CrComLib.publishEvent("b","5",true)
            window.CrComLib.publishEvent("b","5",false)

            

            console.log("DTV 3 House 1 join", 5)
            //Sending Crestron Media ID
            window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,5)
        } 
        else if (id === "media4"){
            // Send command to Crestron 
            setMedia1(false)
            setMedia2(false)
            setMedia3(false)
            setMedia4(true)
            setMedia5(false)
            setMedia6(false)
            setMedia7(false)
            setMedia8(false)
            
            

            window.CrComLib.publishEvent("b","6",true)
            window.CrComLib.publishEvent("b","6",false)

            console.log("DTV 4 House 2 join", 6)
            //Sending Crestron Media ID
            window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,6)
        } 
        else if (id === "media5"){
            // Send command to Crestron 
            setMedia1(false)
            setMedia2(false)
            setMedia3(false)
            setMedia4(false)
            setMedia5(true)
            setMedia6(false)
            setMedia7(false)
            setMedia8(false)
            
            

            window.CrComLib.publishEvent("b","7",true)
            window.CrComLib.publishEvent("b","7",false)
            console.log("DTV 5 Steve join", 7)

            //Sending Crestron Media ID
            window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,7)
        } 
        else if (id === "media6"){
            // Send command to Crestron 
            setMedia1(false)
            setMedia2(false)
            setMedia3(false)
            setMedia4(false)
            setMedia5(false)
            setMedia6(true)
            setMedia7(false)
            setMedia8(false)

            
            window.CrComLib.publishEvent("b","8",true)
            window.CrComLib.publishEvent("b","8",false)
        console.log("ATV 1 House 1 join", 8)
        //Sending Crestron Media ID
        window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,8)
        } 
        else if (id === "media7"){
            // c
            setMedia1(false)
            setMedia2(false)
            setMedia3(false)
            setMedia4(false)
            setMedia5(false)
            setMedia6(false)
            setMedia7(true)
            setMedia8(false)

            

            
            window.CrComLib.publishEvent("b","9",true)
            window.CrComLib.publishEvent("b","9",false)
        console.log("ATV 2 House 2 join", 9)
        //Sending Crestron Media ID
        window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,9)
        } 
        else if (id === "media8"){
            // c
            setMedia1(false)
            setMedia2(false)
            setMedia3(false)
            setMedia4(false)
            setMedia5(false)
            setMedia6(false)
            setMedia7(false)
            setMedia8(true)

            window.CrComLib.publishEvent("b","10",true)
            window.CrComLib.publishEvent("b","10",false)
            

            console.log("ATV 3 Steve join", 10)
            //Sending Crestron Media ID
            window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,10)
        } 
        }

   
    
    // Volume control for current room
        const tvVolState = (id:string) =>{

        if(id === "up"){
            console.log('vol up join',audio_increase_join)
            
            window.CrComLib.publishEvent("b",audio_increase_join,true)
            window.CrComLib.publishEvent("b",audio_increase_join,false)
        } 
        
        else if(id === "down"){
            console.log('vol down join', audio_decrease_join)
            
            window.CrComLib.publishEvent("b",audio_decrease_join,true)
            window.CrComLib.publishEvent("b",audio_decrease_join,false)
        } 
        
        else if(id === "mute"){
            console.log('vol mute join', audio_mute_join)
            window.CrComLib.publishEvent("b",audio_mute_join,true)
            window.CrComLib.publishEvent("b",audio_mute_join,false)
        }

            }
    // Power menu for current room
        const powerMenu = (id:string) =>{
            if(id==="menu"){
                console.log("into power menu")
                setTvPowerMenu(!tvPowerMenu)

                if(displayReboot){
                        console.log("closing menu")
                        setDisplayReboot(false)
                    }
            } 
            
          

            
            }
        const multiZoneOff = (id:string) =>{
            console.log(id)

            if(id === "zone1"){
                window.CrComLib.publishEvent("n",roomLocation,0)
            } else if (id === "zone2"){
                window.CrComLib.publishEvent("n",roomLocation_tv_2,0)

            }
           
            }
         
    // Back button calls this function 
        const display_tile = () => {   
        //display controller
            active_media = false
        // Hide all controllers
            media_1 = "media_off"
            media_2 = "media_off"
            media_3 = "media_off"
            media_4 = "media_off"
            media_5 = "media_off"
            media_6 = "media_off"
            media_7 = "media_off"
            media_8 = "media_off"
        // crestron override
            setMedia1(false)
            setMedia2(false)
            setMedia3(false)
            setMedia4(false)
            setMedia5(false)
            setMedia6(false)
            setMedia7(false)
            setMedia8(false)

            if(currentTVSource ==="1"){
                console.log("display TV 1 selection")
            } else if (currentTVSource === '2'){
                console.log("display TV 2 selection")
            } else if (currentTVSource === 'All'){
                console.log("display TV All selection")
            } 


           
        }

    //Apple TV Controls
        const appleTvRebootMenu = (id:string) =>{

        if(id === "menu"){
        setDisplayReboot(!displayReboot)
        }
        else if(id === "reboot"){

            console.log(id, "signal name 170")
            window.CrComLib.publishEvent("b","170",true)
            window.CrComLib.publishEvent("b","170",false)

            setDisplayReboot(!displayReboot)
        } else{
             // not in use and they are only here because of react refresh  feature 
             console.log(light_6_name, light_7_name, light_8_name ,"not being used")
             console.log(light_6, light_7, light_8 ,               "not being used")
             console.log(light_6_join, light_7_join, light_8_join ,"not being used")
 
        }


            }

    // Rooms App Control section 
        const roomApp = (id:string) => {
            active_media = false

            if(id === "TV"){

                setTvOptions(true)
                setMusicOption(false)
                setLightsOption(false)

                setRoomApps(false)
                
            } 
            else if(id === "Music"){
                setTvOptions(false)
                setMusicOption(true)
                setLightsOption(false)
                
                setRoomApps(false)
            }
            else if(id === "Lights"){
                setTvOptions(false)
                setMusicOption(false)
                setLightsOption(true)
                
                setRoomApps(false)
               
            }

            else if(id === "RoomApps"){
                setTvOptions(false)
                setMusicOption(false)
                setLightsOption(false)
                
                setRoomApps(true)

             
          
            }
            
  
        }


        // 
        const closeOutPowerOption = () =>{
            active_media = false
        }



        

   
    useEffect(()=>{
        switch (activeSource2) {
            case 1:
                setMedia1(true)
                setMedia2(false)
                setMedia3(false)
                setMedia4(false)
                setMedia5(false)
                setMedia6(false)
                setMedia7(false)
                setMedia8(false)
                window.CrComLib.publishEvent("b","1",true)
                window.CrComLib.publishEvent("b","1",false)
                window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,1)

                
                break;

            case 2:
                setMedia1(false)
                setMedia2(true)
                setMedia3(false)
                setMedia4(false)
                setMedia5(false)
                setMedia6(false)
                setMedia7(false)
                setMedia8(false)
                window.CrComLib.publishEvent("b","2",true)
                window.CrComLib.publishEvent("b","2",false)
                window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,2)
                break;

            case 5:
                setMedia1(false)
                setMedia2(false)
                setMedia3(true)
                setMedia4(false)
                setMedia5(false)
                setMedia6(false)
                setMedia7(false)
                setMedia8(false)
                window.CrComLib.publishEvent("b","5",true)
                window.CrComLib.publishEvent("b","5",false)
                window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,5)
                break;

            case 6:   
                setMedia1(false)
                setMedia2(false)
                setMedia3(false)
                setMedia4(true)
                setMedia5(false)
                setMedia6(false)
                setMedia7(false)
                setMedia8(false)
                window.CrComLib.publishEvent("b","6",true)
                window.CrComLib.publishEvent("b","6",false)
                window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,6)
                break;

            case 7:

                setMedia1(false)
                setMedia2(false)
                setMedia3(false)
                setMedia4(false)
                setMedia5(true)
                setMedia6(false)
                setMedia7(false)
                setMedia8(false)
                window.CrComLib.publishEvent("b","7",true)
                window.CrComLib.publishEvent("b","7",false)
                window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,7)
                break;

            case 8:

                setMedia1(false)
                setMedia2(false)
                setMedia3(false)
                setMedia4(false)
                setMedia5(false)
                setMedia6(true)
                setMedia7(false)
                setMedia8(false)
                window.CrComLib.publishEvent("b","8",true)
                window.CrComLib.publishEvent("b","8",false)
                window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,8)
                break;

            case 9:
                setMedia1(false)
                setMedia2(false)
                setMedia3(false)
                setMedia4(false)
                setMedia5(false)
                setMedia6(false)
                setMedia7(true)
                setMedia8(false)

                window.CrComLib.publishEvent("b","9",true)
                window.CrComLib.publishEvent("b","9",false)
                window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,9)
                break;

            case 10:
                setMedia1(false)
                setMedia2(false)
                setMedia3(false)
                setMedia4(false)
                setMedia5(false)
                setMedia6(false)
                setMedia7(false)
                setMedia8(true)

                window.CrComLib.publishEvent("b","10",true)
                window.CrComLib.publishEvent("b","10",false)

                window.CrComLib.publishEvent("n",`${roomLocation_tv_2}`,10)
                break;
        
            default:
                setMedia1(false)
                setMedia2(false)
                setMedia3(false)
                setMedia4(false)
                setMedia5(false)
                setMedia6(false)
                setMedia7(false)
                setMedia8(false)
                break;
        }

    },[trigger2])

    
    useEffect(()=>{
        switch (activeSource) {
            case 1:
                setMedia1(true)
                setMedia2(false)
                setMedia3(false)
                setMedia4(false)
                setMedia5(false)
                setMedia6(false)
                setMedia7(false)
                setMedia8(false)
                window.CrComLib.publishEvent("b","1",true)
                window.CrComLib.publishEvent("b","1",false)
                window.CrComLib.publishEvent("n",`${roomLocation}`,1)
                break;

            case 2:
                setMedia1(false)
                setMedia2(true)
                setMedia3(false)
                setMedia4(false)
                setMedia5(false)
                setMedia6(false)
                setMedia7(false)
                setMedia8(false)
                window.CrComLib.publishEvent("b","2",true)
                window.CrComLib.publishEvent("b","2",false)
                window.CrComLib.publishEvent("n",`${roomLocation}`,2)
                break;

            case 5:
                setMedia1(false)
                setMedia2(false)
                setMedia3(true)
                setMedia4(false)
                setMedia5(false)
                setMedia6(false)
                setMedia7(false)
                setMedia8(false)
                window.CrComLib.publishEvent("b","5",true)
                window.CrComLib.publishEvent("b","5",false)
                window.CrComLib.publishEvent("n",`${roomLocation}`,5)
                break;

            case 6:   
                setMedia1(false)
                setMedia2(false)
                setMedia3(false)
                setMedia4(true)
                setMedia5(false)
                setMedia6(false)
                setMedia7(false)
                setMedia8(false)
                window.CrComLib.publishEvent("b","6",true)
                window.CrComLib.publishEvent("b","6",false)
                window.CrComLib.publishEvent("n",`${roomLocation}`,6)
                break;

            case 7:

                setMedia1(false)
                setMedia2(false)
                setMedia3(false)
                setMedia4(false)
                setMedia5(true)
                setMedia6(false)
                setMedia7(false)
                setMedia8(false)
                window.CrComLib.publishEvent("b","7",true)
                window.CrComLib.publishEvent("b","7",false)
                window.CrComLib.publishEvent("n",`${roomLocation}`,7)
                break;

            case 8:

                setMedia1(false)
                setMedia2(false)
                setMedia3(false)
                setMedia4(false)
                setMedia5(false)
                setMedia6(true)
                setMedia7(false)
                setMedia8(false)
                window.CrComLib.publishEvent("b","8",true)
                window.CrComLib.publishEvent("b","8",false)
                window.CrComLib.publishEvent("n",`${roomLocation}`,8)
                break;

            case 9:
                setMedia1(false)
                setMedia2(false)
                setMedia3(false)
                setMedia4(false)
                setMedia5(false)
                setMedia6(false)
                setMedia7(true)
                setMedia8(false)
                window.CrComLib.publishEvent("b","9",true)
                window.CrComLib.publishEvent("b","9",false)
                window.CrComLib.publishEvent("n",`${roomLocation}`,9)
                break;

            case 10:
                setMedia1(false)
                setMedia2(false)
                setMedia3(false)
                setMedia4(false)
                setMedia5(false)
                setMedia6(false)
                setMedia7(false)
                setMedia8(true)
                window.CrComLib.publishEvent("b","10",true)
                window.CrComLib.publishEvent("b","10",false)
                window.CrComLib.publishEvent("n",`${roomLocation}`,10)
                break;
        
            default:
                setMedia1(false)
                setMedia2(false)
                setMedia3(false)
                setMedia4(false)
                setMedia5(false)
                setMedia6(false)
                setMedia7(false)
                setMedia8(false)
                break;
        }

    },[trigger1])


       

      
       
    return (

        <div className="generic_room" id="breakfastRoom">


          


            <div className="room_back_corner" >
                <Link to={"/RoomsDashboard"} state ={{previousLocation:"2"}} onTouchEnd={() => closeOutPowerOption} > 
                    <button className="back_button" >
                        <img src={menu_button}/>
                    </button>
                </Link>  
            </div>
           

            <div className="nav_container" id ={active_media? "mobile_display_none" : "mobile_display_contemt" } >

            
                <div className="nav">
                        <button onTouchEnd={() => (roomApp("TV"), sourceDisplay("tv2"),setTrigger2(!trigger2))}     className={tvOptions && sourceSelectionTwo?   "btn_selected" : "btn_not_selected"}   >  <img src={TV}  style={{height:"60%"}}   /> </button>

                        <button onTouchEnd={() => (roomApp("TV"), sourceDisplay("tv1"),setTrigger1(!trigger1))}     className={tvOptions && sourceSelectionOne?   "btn_selected" : "btn_not_selected"}   >  <img src={TV1}   style={{height:"60%"}}  /> </button>

                        <Link to={"/AudioDashboard"} state={{roomId:"breakfast",activity: activeSource2 }} className={musicOption? "btn_selected" : "btn_not_selected"}   >  <img src={music}   /> </Link>
                        <button onTouchEnd={() => roomApp("Lights")} className={lightsOption? "btn_selected" : "btn_not_selected"}   >  <img src={lights}  /> </button>
                </div>
                
              

            </div>

            {active_media?
                <div className="room_home_corner" >
                    <button className="home_button" onTouchEnd={()=>powerMenu("menu")}>
                        <img src={power}  />
                    </button> 
                </div>
                :
                <div className="room_home_corner" >
                    <Link to={"/"} className="home_button">
                        <img src={home_button}/>
                    </Link>
                </div>
            }






       
             
 
                <h1 className="title_info" > {roomName}  </h1>
                <h1 className="currentViewingTitle"> Controlling TV #{currentTVSource}</h1>
                
              
               

              



                {active_media?
                <div className="room_home_corner">
                    <button className="home_button" onTouchEnd={()=>powerMenu("menu")}>
                        <img src={power}  />
                    </button> 
                </div>
                :
                <div className="room_home_corner">
                    <Link to={"/"} className="home_button">
                        <img src={home_button}/>
                    </Link>
                </div>
            }


            
            
            

            <div className={tvPowerMenu? "power_menu_overlay" : "hide_power_menu_overlay"} >
                <div className="power_menu">
                    <p className="power_menu_text" style={{margin:"1rem"}}> 
                        Which TV in the {roomName} room would you like to turn off?
                    </p>

                    <div className="power_menu_button">

                    <div className="yes_reboot" onTouchEnd={()=> (multiZoneOff("zone2") , display_tile())}> 
                            <p style={{width:"100%", fontSize:"x-large"}}>Turn Off TV #1</p> 
                        </div> 
                        <div className="yes_reboot" onTouchEnd={()=> (multiZoneOff("zone1") , display_tile())}>  
                            <p style={{width:"100%", fontSize:"x-large"}}>Turn Off TV #2</p> 
                        </div>

                       
                        
                        <button className="no_reboot" onTouchEnd={()=> powerMenu("menu")}> 
                            <p>Close Menu</p> 
                        </button>
                    </div>
                </div>
            </div>

            <div className={displayReboot? "power_menu_overlay": "hide_reboot_menu"} onTouchEnd={()=> appleTvRebootMenu("menu")}>
                <div className="power_menu" onTouchEnd={()=> appleTvRebootMenu("menu")}>
                    <p className="power_menu_text">
                        Would you like to Reboot the {roomName}'s Apple TV?
                    </p>

                    <div className="power_menu_button">
                        <button className="yes_reboot" onTouchEnd={() => appleTvRebootMenu("reboot")}> 
                            <p>YES</p> 
                        </button> 
                        
                        <button className="no_reboot"  onTouchEnd={()=> appleTvRebootMenu("menu")}> 
                            <p>NO</p> 
                        </button>
                    </div>
                </div>
            </div>

           
            <div className={roomApps? "generic_room_dashboard" : "media_off"}>
                <div className="generic_room_card" onTouchEnd={() => roomApp("TV")}>
                    <img src={TV}/>  
                </div>   

                <Link to={'/AudioDashboard'}  className="generic_room_card" style={{textDecoration:"none"}}>
                    <img src={music}/>
                 
                </Link>
                
                <div className="generic_room_card" onTouchEnd={() => roomApp("Lights")}>
                    <img src={lights}/>
                    
                </div>  

            </div>

            <div className={tvOptions? "generic_media_container" : "media_off"} id="all_source_layout" >


                    <div className={active_media? "media_off":"room_sources_container"} id={sourceSelectionOne? "":"display_none"}>
                            
                            <div className="source_card" id= { activeSource === 1 ? 'active_source' : 'not_active'} onTouchEnd={()=>playSource('media1')}>
                                <div className="img_container">
                                    <img className="media_1_img" src={media_1_img}/>
                                </div>
                            
                                <p>{sub_title_1}</p>
                            </div>

                            <div className="source_card" id= {  activeSource === 2  ? 'active_source' : 'not_active'} onTouchEnd={()=>playSource('media2')}>
                                <div className="img_container">
                                    <img className="media_2_img" src={media_2_img}/>
                                </div>

                                <p>{sub_title_2}</p>
                            </div>

                            <div className="source_card" id= {  activeSource === 5 ? 'active_source' : 'not_active'} onTouchEnd={()=>playSource('media3')}>
                                <div className="img_container">
                                    <img className="media_3_img" src={media_3_img}/>
                                </div>
                                <p>{sub_title_3}</p>
                            </div>

                            <div className="source_card" id= {  activeSource === 6 ? 'active_source' : 'not_active'} onTouchEnd={()=>playSource('media4')}>
                                <div className="img_container">
                                    <img className="media_4_img" src={media_4_img}/>
                                </div>

                                <p>{sub_title_4}</p>
                            </div>

                            <div className="source_card" id= {  activeSource === 7? 'active_source' : 'not_active'} onTouchEnd={()=>playSource('media5')}>
                                <div className="img_container">
                                    <img className="media_5_img" src={media_5_img}/>
                                </div>

                                <p>{sub_title_5}</p>
                            </div>

                            <div className="source_card" id= {  activeSource === 8 ? 'active_source' : 'not_active'} onTouchEnd={()=>playSource('media6')}>
                                <div className="img_container">
                                    <img className="media_6_img" src={media_6_img}/>
                                </div>
                            
                                <p>{sub_title_6}</p>
                            </div>

                            <div className="source_card" id ={  activeSource === 9? 'active_source' : 'not_active'} onTouchEnd={()=>playSource('media7')}>
                                <div className="img_container">
                                    <img className="media_7_img" src={media_7_img}/>
                                </div>
                            
                                <p>{sub_title_7}</p>
                            </div>

                            
                            <div className="source_card" id ={  activeSource === 10? 'active_source' : 'not_active'} onTouchEnd={()=>playSource('media8')}>
                                <div className="img_container">
                                    <img className="media_8_img"  src={media_8_img}/>
                                </div>
                            
                                <p>{sub_title_8}</p>
                            </div>
                            
                    </div>

                    <div className={active_media? "media_off":"room_sources_container"} id={sourceSelectionTwo? "":"display_none"}>
                            
                            <div className="source_card" id= { activeSource2 === 1? 'active_source' : 'not_active'} onTouchEnd={()=>playSource_2('media1')}>
                                <div className="img_container">
                                    <img className="media_1_img" src={media_1_img}/>
                                </div>
                            
                                <p>{sub_title_1}</p>
                            </div>

                            <div className="source_card" id= { activeSource2 === 2 ? 'active_source' : 'not_active'} onTouchEnd={()=>playSource_2('media2')}>
                                <div className="img_container">
                                    <img className="media_2_img" src={media_2_img}/>
                                </div>

                                <p>{sub_title_2}</p>
                            </div>

                            <div className="source_card" id= { activeSource2 === 5? 'active_source' : 'not_active'} onTouchEnd={()=>playSource_2('media3')}>
                                <div className="img_container">
                                    <img className="media_3_img" src={media_3_img}/>
                                </div>
                                <p>{sub_title_3}</p>
                            </div>

                            <div className="source_card" id= { activeSource2 === 6? 'active_source' : 'not_active'} onTouchEnd={()=>playSource_2('media4')}>
                                <div className="img_container">
                                    <img className="media_4_img" src={media_4_img}/>
                                </div>

                                <p>{sub_title_4}</p>
                            </div>

                            <div className="source_card" id= { activeSource2 === 7? 'active_source' : 'not_active'} onTouchEnd={()=>playSource_2('media5')}>
                                <div className="img_container">
                                    <img className="media_5_img" src={media_5_img}/>
                                </div>

                                <p>{sub_title_5}</p>
                            </div>

                            <div className="source_card" id= { activeSource2 === 8? 'active_source' : 'not_active'} onTouchEnd={()=>playSource_2('media6')}>
                                <div className="img_container">
                                    <img className="media_6_img" src={media_6_img}/>
                                </div>
                            
                                <p>{sub_title_6}</p>
                            </div>

                            <div className="source_card" id ={ activeSource2 === 9? 'active_source' : 'not_active'} onTouchEnd={()=>playSource_2('media7')}>
                                <div className="img_container">
                                    <img className="media_7_img" src={media_7_img}/>
                                </div>
                            
                                <p>{sub_title_7}</p>
                            </div>

                            
                            <div className="source_card" id ={ activeSource2 === 10? 'active_source' : 'not_active'} onTouchEnd={()=>playSource_2('media8')}>
                                <div className="img_container">
                                    <img className="media_8_img"  src={media_8_img}/>
                                </div>
                            
                                <p>{sub_title_8}</p>
                            </div>
                            
                    </div>

                 





                    <div className={active_media? "controller_layout": "media_off"}>

                        <button id="controller_layout_back_button"  onTouchEnd = {display_tile}>
                            <img src={menu_button}  alt="back arrow" className="back_button_svg"/>
                        </button>

                
                        <div className="logo_display">
                            <div className={media1? "media_1_img_display":"media_off"}>
                                <img src={media_1_img}/>
                                <p>{sub_title_1}</p>
                            </div>

                            <div className={media2? "media_2_img_display":"media_off"}>
                              <img src={media_2_img}/>
                              <p>{sub_title_2}</p>
                            </div>

                            <div className={media3? "media_3_img_display":"media_off"}>
                                <img src={media_3_img}/>
                                <p>{sub_title_3}</p>
                            </div>

                            <div className={media4? "media_4_img_display":"media_off"}>
                                <img src={media_4_img}/>
                                <p>{sub_title_4}</p> 
                            </div>

                            <div className={media5? "media_5_img_display":"media_off"}>
                                <img src={media_5_img}/>
                                <p>{sub_title_5}</p>
                            </div>

                            <div className={media6? "media_6_img_display":"media_off"}>
                                <img src={media_6_img}/>
                                <p>{sub_title_6}</p>
                            </div>

                            <div className={media7? "media_7_img_display":"media_off"}>
                                <img src={media_7_img}/>
                                <p>{sub_title_7}</p>

                            </div>

                            <div className={media8? "media_8_img_display":"media_off"}>
                                <img src={media_8_img}/>
                                <p>{sub_title_8}</p>
                            </div>


                
                        </div>

                        <button className={media6 ||media7 || media8? "btn_circle": "media_off"} id="reboot_button" onTouchEnd={()=>appleTvRebootMenu("menu")}> 
                            <p> REBOOT </p>
                        </button>

                        <div className="controller_grid">


                         

                            <div className={media_1} id={controller_styles_1}>
                                {controller_1}
                            </div>

                            <div className={media_2} id={controller_styles_2}>
                                {controller_2}
                            </div>
                               
                            <div className={media_3} id={controller_styles_3}>
                                {controller_3}
                            </div>

                            <div className={media_4} id={controller_styles_4}>
                                {controller_4}
                            </div>

                            <div className={media_5} id={controller_styles_5}>
                                {controller_5}
                            </div>

                            <div className={media_6} id={controller_styles_6}>
                                {controller_6}
                            </div>

                            <div className={media_7} id={controller_styles_7}>
                                {controller_7}
                            </div>

                            <div className={media_8} id={controller_styles_8}>
                                {controller_8}
                            </div>
                            

                        </div>
                               

                    </div>
                    <div className={active_media? "volume_container" : "media_off"}>
           
                      
                            <button className="btn_square">
                                <img className="btn_image"src={arrow} onTouchEnd={()=> tvVolState("down")}/>
                            </button>
                            
                           

                            <button className="btn_square_wide" onTouchEnd={()=> tvVolState("mute")}>
                                {roomMute? 
                                <>
                                 <img src={mute} className="volume_mute_btn" />
                                 <p className="mute_btn_txt">Click to Unmute</p>
                                </>
                                  
                                    :
                                <>
                                    <p className="volume_txt">{((roomVolume/65535) * 100).toFixed(0)}</p>
                                    <p className="mute_btn_txt">Click to Mute</p>
                                  </>
                            }
                            </button>

                            <button className="btn_square" onTouchEnd={()=> tvVolState("up")}>
                                <img className="btn_image"src={arrow} id="flip"/>
                            </button>


                    </div>
            </div>

            <div className={musicOption? "music_app" : "media_off"} >
            </div>

            <div className={lightsOption? "lights_app" : "display_none"} >

                <div className="light_container" id="lights-9">
                    
                    
                    
                    
                    <div className="light_tile" onTouchEnd={() => sliderValue(true,"light_1")}>
                        <div className="light_info">
                            <p className="light_name">{light_1_name}</p>
                        </div>

                        <button className="btn_circle" id={light_1 ? "light_btn_on" : ""}>
                            <img className="btn_image" src={light_1 ? lightOn : lightOff}/>
                        </button>
                    </div>

                    <div className="light_tile" onTouchEnd={() => sliderValue(true,"light_2")}>
                        <div className="light_info">
                            <p className="light_name">{light_2_name}</p>
                        </div>

                        <button className="btn_circle" id={light_2 ? "light_btn_on" : ""}>
                            <img className="btn_image" src={light_2 ? lightOn : lightOff}/>
                        </button>
                    </div>

                    <div className="light_tile" onTouchEnd={() => sliderValue(true,"light_3")}>
                        <div className="light_info">
                            <p className="light_name">{light_3_name}</p>
                        </div>

                        <button className="btn_circle" id={light_3 ? "light_btn_on" : ""}>
                            <img className="btn_image" src={light_3 ? lightOn : lightOff}/>
                        </button>
                    </div>

                    <div className="light_tile" onTouchEnd={() => sliderValue(true,"light_4")}>
                        <div className="light_info">
                            <p className="light_name">{light_4_name}</p>
                        </div>

                        <button className="btn_circle" id={light_4 ? "light_btn_on" : ""}>
                            <img className="btn_image" src={light_4 ? lightOn : lightOff}/>
                        </button>
                    </div>

                    <div className="light_tile" onTouchEnd={() => sliderValue(true,"light_5")}>
                        <div className="light_info">
                            <p className="light_name">{light_5_name}</p>
                        </div>

                        <button className="btn_circle" id={light_5 ? "light_btn_on" : ""}>
                            <img className="btn_image" src={light_5 ? lightOn : lightOff}/>
                        </button>
                    </div>

                    <div className="light_tile" onTouchEnd={() => sliderValue(true,"light_6")}>
                        <div className="light_info">
                            <p className="light_name">{light_6_name}</p>
                        </div>

                        <button className="btn_circle" id={light_6 ? "light_btn_on" : ""}>
                            <img className="btn_image" src={light_6 ? lightOn : lightOff}/>
                        </button>
                    </div>

                    <div className="light_tile" onTouchEnd={() => sliderValue(true,"light_7")}>
                        <div className="light_info">
                            <p className="light_name">{light_7_name}</p>
                        </div>

                        <button className="btn_circle" id={light_7 ? "light_btn_on" : ""}>
                            <img className="btn_image" src={light_7 ? lightOn : lightOff}/>
                        </button>
                    </div>

                    <div className="light_tile" onTouchEnd={() => sliderValue(true,"light_8")}>
                        <div className="light_info">
                            <p className="light_name">{light_8_name}</p>
                        </div>

                        <button className="btn_circle" id={light_8 ? "light_btn_on" : ""}>
                            <img className="btn_image" src={light_8 ? lightOn : lightOff}/>
                        </button>
                    </div>

                </div>

                
                


                

                    
            </div>
   
            <div className="landscape_warning">
                <h1> Please rotate your device back to portrait mode. </h1>
                <img src={portraitMode}  />
            </div>

            
        </div>


    )
}



export default FamilyRoom