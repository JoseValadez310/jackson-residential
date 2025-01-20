
// React 
import { useEffect, useState } from "react"

// React Router DOM
import { Link } from "react-router-dom"

//Controller
import AppleTv from "../../components/controllers/AppleTv"
import DirecTv from "../../components/controllers/DirecTv"
import BluRay from "../../components/controllers/BluRay"
import Kaleidescape from "../../components/controllers/Kaleidescape"

// Music Page import 

//CSS for Controllers

import "../../assets/css/page_css/genericRoom.css"
import "../../assets/css/page_css/lightingLayout.css"
import "../../assets/css/page_css/roomLayout.css"
import "../../assets/css/page_css/sourceLayout.css"



// Componenets 

//import DateDisplay from "../../components/DateDisplay"
// Logos

import appleTV      from "../../assets/images/logos/Apple_TV_(logo).svg"
import small_dtv     from "../../assets/images/logos/DTV_logo.svg"
import direcTv      from "../../assets/images/logos//DIRECTV_2021_logo.svg"
import roku from "../../assets/images/logos/Roku_logo.svg"
//import kscape       from "../../assets/images/logos/Kaleidescape_(logo).svg"
import bluRay       from '../../assets/images/logos/blu-ray-disc.svg'
//import vhs          from "../../assets/images/logos/VHS_logo.svg"

// General Icons
import TV          from "../../assets/images/icons/icons8-tv.svg"
import lights      from "../../assets/images/icons/noun-light-bulb-2216273.svg"
import music       from "../../assets/images/icons/icons8-music.svg"
import home_button from "../../assets/images/icons/icons8-exterior.svg"
import menu_button from "../../assets/images/icons/icons8-arrow.svg"
import mute        from "../../assets/images/icons/icons8-no-audio.svg"
import power       from "../../assets/images/icons/icons8-power.svg"
import arrow       from "../../assets/images/icons/icons8-triangle-arrow.svg"

// Light SVGs
import lightOn from "../../assets/images/icons/icons8-light-on.svg"
import lightOff from "../../assets/images/icons/icons8-light-off.svg"

const FamilyRoom = () =>{
/*
---------------------------------------------------------------------------- Basic information regarding the page
*/
    const roomName = "Family Room"
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
/*
---------------------------------------------------------------------------- Room Vol / Mute status
*/
    const [roomVolume,setRoomVolume]  = useState(0)
    const [roomMute, setRoomMute]     = useState(false)
/*
---------------------------------------------------------------------------- Modals for Apple Tv Reboot or Room shutdown
*/
    const [displayReboot, setDisplayReboot] = useState(false) // Apple TV reboot menu 
    const [tvPowerMenu, setTvPowerMenu] = useState(false)      //  TV Power Menu    
/*
---------------------------------------------------------------------------- Lighting info
*/
    const [family_light_1, setFamily_light_1] = useState(false)
    const [family_light_2, setFamily_light_2] = useState(false)
    const [family_light_3, setFamily_light_3] = useState(false)
    const [family_light_4, setFamily_light_4] = useState(false)
/*
----------------------------------------------------------------------------------------------------------------------------------------
*/

    useEffect(() => {
        // TV Soucres
        const media1 = window.CrComLib.subscribeState("b","1",(value: boolean) => {setMedia1(value);});  
        const media2 = window.CrComLib.subscribeState("b","2",(value: boolean) => {setMedia2(value);});  // ATV 1 his
        const media3 = window.CrComLib.subscribeState("b","3",(value: boolean) => {setMedia3(value);});  // ATV 2 hers
        const media4 = window.CrComLib.subscribeState("b","4",(value: boolean) => {setMedia4(value);});  // Camera
        const media5 = window.CrComLib.subscribeState("b","5",(value: boolean) => {setMedia5(value);});  // DTV 1 his
        const media6 = window.CrComLib.subscribeState("b","6",(value: boolean) => {setMedia6(value);});  // DTV 2 hers
        const media7 = window.CrComLib.subscribeState("b","7",(value: boolean) => {setMedia7(value);});  // Roku



        const media8 = window.CrComLib.subscribeState("b","-",(value: boolean) => {setMedia8(value);});  
       
        // TV audio controls
        const roomVolume     = window.CrComLib.subscribeState("n","15",(value: number) => {setRoomVolume(value);});
        const roomMute    = window.CrComLib.subscribeState("b","317",(value: boolean) => {setRoomMute(value);});

        // Lights
        const light1  = window.CrComLib.subscribeState("b","403",(value: boolean) => {setFamily_light_1(value);});  
        const light2  = window.CrComLib.subscribeState("b","404",(value: boolean) => {setFamily_light_2(value);});  
        const light3  = window.CrComLib.subscribeState("b","405",(value: boolean) => {setFamily_light_3(value);});  
        const light4  = window.CrComLib.subscribeState("b","406",(value: boolean) => {setFamily_light_4(value);});  

        return () => {

            // TV Soucres
            window.CrComLib.unsubscribeState("b","1",media1)
            window.CrComLib.unsubscribeState("b","2",media2)
            window.CrComLib.unsubscribeState("b","3",media3)
            window.CrComLib.unsubscribeState("b","4",media4)
            window.CrComLib.unsubscribeState("b","5",media5)
            window.CrComLib.unsubscribeState("b","6",media6)
            window.CrComLib.unsubscribeState("b","7",media7)
            window.CrComLib.unsubscribeState("b","--",media8)
         
            // TV audio controls
            window.CrComLib.unsubscribeState("n","15",roomVolume)
            window.CrComLib.unsubscribeState("b","317",roomMute)

            // lights 
            window.CrComLib.unsubscribeState("b","403",light1)
            window.CrComLib.unsubscribeState("b","404",light2)
            window.CrComLib.unsubscribeState("b","405",light3)
            window.CrComLib.unsubscribeState("b","406",light4)
            
        }
      }, []);
    
/*
---------------------------------------------------------------------------- Checks to see if any media sources are currently on
*/

    if(media1){
    //Sending Crestron Media ID
        window.CrComLib.publishEvent("n","28",1)
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
    //Sending Crestron Media ID
        window.CrComLib.publishEvent("n","28",2)
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
    //Sending Crestron Media ID
        window.CrComLib.publishEvent("n","28",3)
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
    //Sending Crestron Media ID
        window.CrComLib.publishEvent("n","28",4)
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
    //Sending Crestron Media ID
        window.CrComLib.publishEvent("n","28",5)
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
    //Sending Crestron Media ID
        window.CrComLib.publishEvent("n","28",6)
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
    //Sending Crestron Media ID
        window.CrComLib.publishEvent("n","28",7)
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
    //Sending Crestron Media ID
        window.CrComLib.publishEvent("n","28",8)
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
   



    // Tile click, function calls to set local values and crestron values
        const playSource = (id:string) =>{
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
                
                

                // Signal Name 
                window.CrComLib.publishEvent("b","2",true)
                window.CrComLib.publishEvent("b","2",false)

                console.log("BluRay join", 2)
                //Sending Crestron Media ID
                window.CrComLib.publishEvent("n","28",1)
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
                
                

                window.CrComLib.publishEvent("b","3",true)
                window.CrComLib.publishEvent("b","3",false)

                console.log("Kaleidescape join", 3)
                //Sending Crestron Media ID
                window.CrComLib.publishEvent("n","28",2)
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
            
                

                // Signal Name 
                window.CrComLib.publishEvent("b","4",true)
                window.CrComLib.publishEvent("b","4",false)

                console.log("DTV 3 House 1 join", 4)
                //Sending Crestron Media ID
                window.CrComLib.publishEvent("n","28",3)
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
                
                

                // Signal Name 
                window.CrComLib.publishEvent("b","5",true)
                window.CrComLib.publishEvent("b","5",false)

                console.log("DTV 4 House 2 join", 5)
                //Sending Crestron Media ID
                window.CrComLib.publishEvent("n","28",4)
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
                
                

                // Signal Name 
                window.CrComLib.publishEvent("b","6",true)
                window.CrComLib.publishEvent("b","6",false)
    
                console.log("DTV 5 Steve join", 6)

                //Sending Crestron Media ID
                window.CrComLib.publishEvent("n","28",5)
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

                

            // Signal Name 
            window.CrComLib.publishEvent("b","7",true)
            window.CrComLib.publishEvent("b","7",false)

            console.log("ATV 1 House 1 join", 7)
            //Sending Crestron Media ID
            window.CrComLib.publishEvent("n","28",6)
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

                

                // Signal Name 
            window.CrComLib.publishEvent("b","8",true)
            window.CrComLib.publishEvent("b","8",false)

            console.log("ATV 2 House 2 join", 8)
            //Sending Crestron Media ID
            window.CrComLib.publishEvent("n","28",7)
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
                
                

            // Signal Name 
            window.CrComLib.publishEvent("b","9",true)
            window.CrComLib.publishEvent("b","9",false)

            console.log("ATV 3 Steve join", 9)
            //Sending Crestron Media ID
            window.CrComLib.publishEvent("n","28",8)
            } 
            }

    // Volume control for current room
        const tvVolState = (id:string) =>{

        if(id === "up"){
            console.log('vol up join', 316)
            
            window.CrComLib.publishEvent("b","316",true)
            window.CrComLib.publishEvent("b","316",false)
        } 
        
        else if(id === "down"){
            console.log('vol down join', 315)
            
            window.CrComLib.publishEvent("b","315",true)
            window.CrComLib.publishEvent("b","315",false)
        } 
        
        else if(id === "mute"){
            console.log('vol mute join',317 )
            
            window.CrComLib.publishEvent("b","317",true)
            window.CrComLib.publishEvent("b","317",false)
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
            
            else if(id==="menu_off"){
                console.log("Turning off room join", 1)
                setTvPowerMenu(!tvPowerMenu)
                window.CrComLib.publishEvent("b","1",true)
                window.CrComLib.publishEvent("b","1",false)

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

        }

    //Apple TV Controls
        const appleTvRebootMenu = (id:string) =>{

        if(id === "menu"){
        setDisplayReboot(!displayReboot)
        }
        else if(id === "reboot"){

            console.log(id, "signal name 50")
            window.CrComLib.publishEvent("b","50",true)
            window.CrComLib.publishEvent("b","50",false)

            setDisplayReboot(!displayReboot)
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

       
    return (

        <div className="generic_room">


       <div className="side_bar_nav">

            <Link to={"/RoomsDashboard"} onClick={() => closeOutPowerOption} > 
                <button className="back_button" >
                    <img src={menu_button}/>
                </button>
            </Link>  
        

            <div className="nav">
                    <button onClick={() => roomApp("TV")} className='btn_square' id={tvOptions? "floor_selection_active":"floor_selection_nonactive"}    style={{width:"4.5rem"}}>  <img src={TV}     style={{height:"50%"}}/> </button>
                    <Link to={"/AudioDashboard"} className='btn_square' id={musicOption? "floor_selection_active":"floor_selection_nonactive"}  style={{width:"4.5rem"}}>  <img src={music}  style={{height:"50%"}} /> </Link>
                    <button onClick={() => roomApp("Lights")}className='btn_square' id={lightsOption? "floor_selection_active":"floor_selection_nonactive"} style={{width:"4.5rem"}}>  <img src={lights} style={{height:"50%"}} /> </button>
            </div>
            

            <div className="nav_clock">
                {active_media?
                    <div className="room_home_corner">
                        <button className="home_button" onClick={()=>powerMenu("menu")}>
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
            </div>

       </div>

       

           



         
           
            
         


            <h1 className="title_info"> {roomName}</h1>



           
                <div className={tvPowerMenu? "power_menu_overlay" : "hide_power_menu_overlay"} >
                    <div className="power_menu">

                        <p className="power_menu_text" style={{margin:"1rem"}}> 
                            Would you like to turn off the {roomName}?
                        </p>

                        <div className="power_menu_button">
                            <Link className="yes_reboot" to={"/"}> 
                                <button className="yes_reboot" onClick={()=> powerMenu("menu_off")}> 
                                    <p>YES</p> 
                                </button> 
                            </Link>
                            
                            <button className="no_reboot" onClick={()=> powerMenu("menu")}> 
                                <p>NO</p> 
                            </button>
                        </div>

                    </div>
                </div>

                <div className={displayReboot? "power_menu_overlay": "hide_reboot_menu"} onClick={()=> appleTvRebootMenu("menu")}>
                                <div className="power_menu" onClick={()=> appleTvRebootMenu("menu")}>
                                    <p className="power_menu_text">
                                        Would you like to Reboot the {roomName}'s Apple TV?
                                    </p>

                                    <div className="power_menu_button">
                                        <button className="yes_reboot" onClick={() => appleTvRebootMenu("reboot")}> 
                                            <p>YES</p> 
                                        </button> 
                                        
                                        <button className="no_reboot"  onClick={()=> appleTvRebootMenu("menu")}> 
                                            <p>NO</p> 
                                        </button>
                                    </div>
                                </div>
                </div>

           


               





                

             

                   
                <div className={roomApps? "generic_room_dashboard" : "media_off"}>
                    <div className="generic_room_card" onClick={() => roomApp("TV")}>
                        <img src={TV}/>
                        <p> TV </p>
                    </div>   

                    <Link to={'/AudioDashboard'} className="generic_room_card" style={{textDecoration:"none"}}>
                        <img src={music}/>
                        <p> Music </p>
                    </Link>
                   
                    <div className="generic_room_card" onClick={() => roomApp("Lights")}>
                        <img src={lights}/>
                        <p> Lights </p>
                    </div>  

                </div>
                   


                    <div className={tvOptions? "generic_media_container" : "media_off"} id="all_source_layout" >
                        <div className={active_media? "media_off":"room_sources_container"}>
                            
                            <div className="source_card" id= { media1? 'active_source' : 'not_active' } onClick={()=>playSource('media1')}>

                                <div className="img_container">
                                    <img src={bluRay} style={{height:"45%"}}/>
                                </div>
                               
                                <p>House</p>
                            </div>

                            <div className="source_card" id= { media2 ? 'active_source' : 'not_active' } onClick={()=>playSource('media2')}>
                                <div className="img_container">
                                    <img src={appleTV} id="svg_gray" style={{height:"50%"}}/>
                                </div>

                                <p>His</p>
                            </div>

                            <div className="source_card" id= { media3? 'active_source' : 'not_active' } onClick={()=>playSource('media3')}>
                                <div className="img_container">
                                    <img src={appleTV} id="svg_gray" style={{height:"50%"}}/>
                                </div>

                                <p>Her</p>
                            </div>

                            <div className="source_card" id= { media4? 'active_source' : 'not_active' } onClick={()=>playSource('media4')}>
                                <div className="img_container">
                                    <img src={appleTV} id="svg_gray" style={{height:"50%"}}/>
                                </div>

                                <p>House</p>
                            </div>

                            <div className="source_card" id= { media5? 'active_source' : 'not_active' } onClick={()=>playSource('media5')}>
                                <div className="img_container">
                                    <img src={small_dtv} style={{height:"65%"}}  />
                                </div>
                                <p>DTV 1</p>
                            </div>

                            <div className="source_card" id= { media6? 'active_source' : 'not_active' } onClick={()=>playSource('media6')}>
                                <div className="img_container">
                                    <img src={small_dtv} style={{height:"65%"}}  />
                                </div>
                               
                            
                                <p>DTV 2</p>
                            
                            </div>



                            <div className="source_card" id ={ media7? 'active_source' : 'not_active' }onClick={()=>playSource('media7')}>

                            <div className="img_container">
                                <img src={roku} id="svg_white"style={{height:"35%"}}/>
                            </div>
                             
                                <p>House</p>
                            </div>
                            
                        </div>
                
                        <div className={active_media? "controller_layout": "media_off"}>

                            <button className="controller_layout_back_button" onClick = {display_tile}>
                                
                                <img src={menu_button}  alt="back arrow" className="back_button_svg"/>

                            </button>

                            <div className="logo_display">
                                <div className={media1? "sonos_header_logo":"media_off"}>
                                    <img src={bluRay} style={{height:"4rem"}} alt="" />
                                </div>

                                <div className={media2? "sonos_header_logo":"media_off"}>
                                  <img src={appleTV} alt="" />
                                  <p className="user_title_controller"> His</p>
                                </div>

                                <div className={media3? "dtv_header_logo":"media_off"}>
                               
                                <img src={appleTV} alt="" />
                                <p className="user_title_controller"> Hers</p>
                                </div>

                                <div className={media4? "dtv_header_logo":"media_off"}>
                               
                                    <p className="user_title_controller"> Camera</p>

                                </div>

                                <div className={media5? "dtv_header_logo":"media_off"}>
                                  
                                <img src={direcTv} style={{height:"2rem"}} alt="" />
                                <p className="user_title_controller">  His</p>
                                </div>

                                <div className={media6? "apple_tv_header_logo":"media_off"}>
                                <img src={direcTv} style={{height:"2rem"}} alt="" />
                                    <p className="user_title_controller">  Hers</p>
                                </div>

                                <div className={media7? "apple_tv_header_logo":"media_off"}>
                               
                                    <p className="user_title_controller"> Roku </p>
                                </div>

                                <div className={media8? "apple_tv_header_logo":"media_off"}>
                                  
                                    <p className="user_title_controller"> Steve </p>
                                </div>


                    
                            </div>

                            <button className={media2 ||media3? "transport_button": "media_off"} id="reboot_button" onClick={()=>appleTvRebootMenu("menu")}> 
                                <p> REBOOT </p>
                            </button>

                            <div className="controller_grid">

                                <div className={media_1} id="bluRay_controller">
                                   < BluRay />
                                </div>


                                <div className={media_2} id="apple_tv_controller">
                                    < AppleTv />
                                </div>

                                   
                                <div className={media_3} id="apple_tv_controller">
                                    < AppleTv />
                                </div>


                                <div className={media_4} id="apple_tv_controller">
                                    <p>Camera</p>
                                </div>


                                <div className={media_5} id="direct_controller">
                                    < DirecTv />
                                </div>


                                <div className={media_6} id="direct_controller">
                                    < DirecTv />
                                </div>

                                <div className={media_7} id="direct_controller">
                                    
                                   < Kaleidescape />
                                    
                                </div>

                                <div className={media_8} id="apple_tv_controller">
                                   
                                </div>
                                

                            </div>
                                   

                        </div>

                        <div className={active_media? "volume_container" : "media_off"}>
               
                          
                                <button className="btn_square">
                                    <img className="btn_image"src={arrow} onClick={()=> tvVolState("down")}/>
                                </button>
                                
                               

                                <button className="btn_square_wide" onClick={()=> tvVolState("mute")}>
                                    {roomMute? 
                                    <>
                                      <img src={mute} style={{height:"50%"}}/>
                                      <p className="mute_btn_txt">Click to Unmute</p>
                                    </>
                                      
                                        :
                                    <>
                                        <p className="volume_txt">{roomVolume}</p>
                                        <p className="mute_btn_txt">Click to Mute</p>
                                      </>
                                }
                                </button>

                                <button className="btn_square" onClick={()=> tvVolState("up")}>
                                    <img className="btn_image"src={arrow} id="flip"/>
                                </button>


                        </div>
                    </div>





                    <div className={musicOption? "music_app" : "media_off"} >
                    </div>

                    <div className={lightsOption? "lights_app" : "media_off"} >
                           
                            <div className="light_container_switch" id="light_1">
                                <div className="light_indicator"> 
                                    {family_light_1? 
                                     <button className="light_icon_on" onClick={()=> (window.CrComLib.publishEvent("b","403",true),window.CrComLib.publishEvent("b","403",false)) }> <img src={lightOn}/> </button> 
                                    :
                                     <button className="light_icon_off" onClick={()=> (window.CrComLib.publishEvent("b","403",true),window.CrComLib.publishEvent("b","403",false)) }> <img src={lightOff}/></button>  
                                    }
                                </div>


                                <div className="light_container_switch_tile">
                                    <p className="light_name"> Sconces  {family_light_1? <p className="light_name_status_on"> On </p> : <p  className="light_name_status_off"> Off </p>}</p>
                                </div>


                                {family_light_1? 
                                    <button className="light_container_switch_light_on"  onClick={()=> (window.CrComLib.publishEvent("b","403",true),window.CrComLib.publishEvent("b","403",false)) }> <p> Turn Off </p> </button>
                                    :
                                    <button className="light_container_switch_light_on"  onClick={()=> (window.CrComLib.publishEvent("b","403",true),window.CrComLib.publishEvent("b","403",false)) }> <p> Turn On  </p> </button>
                                }
                            </div>

                            <div className="light_container_switch" id="light_2">
                                <div className="light_indicator"> 
                                    {family_light_2? 
                                     <button className="light_icon_on" onClick={()=> (window.CrComLib.publishEvent("b","404",true),window.CrComLib.publishEvent("b","404",false)) }> <img src={lightOn}/> </button> 
                                    :
                                     <button className="light_icon_off" onClick={()=> (window.CrComLib.publishEvent("b","404",true),window.CrComLib.publishEvent("b","404",false)) }> <img src={lightOff}/></button>  
                                    }
                                </div>


                                <div className="light_container_switch_tile">
                                    <p className="light_name"> Accent  {family_light_2? <p className="light_name_status_on"> On </p> : <p  className="light_name_status_off"> Off </p>}</p>
                                </div>


                                {family_light_2? 
                                    <button className="light_container_switch_light_on"  onClick={()=> (window.CrComLib.publishEvent("b","404",true),window.CrComLib.publishEvent("b","404",false)) }> <p> Turn Off </p> </button>
                                    :
                                    <button className="light_container_switch_light_on"  onClick={()=> (window.CrComLib.publishEvent("b","404",true),window.CrComLib.publishEvent("b","404",false)) }> <p> Turn On  </p> </button>
                                }
                            </div>

                            <div className="light_container_switch" id="light_3">
                                <div className="light_indicator"> 
                                    {family_light_3? 
                                     <button className="light_icon_on" onClick={()=> (window.CrComLib.publishEvent("b","405",true),window.CrComLib.publishEvent("b","405",false)) }> <img src={lightOn}/> </button> 
                                    :
                                     <button className="light_icon_off" onClick={()=> (window.CrComLib.publishEvent("b","405",true),window.CrComLib.publishEvent("b","405",false)) }> <img src={lightOff}/></button>  
                                    }
                                </div>


                                <div className="light_container_switch_tile">
                                    <p className="light_name"> Window  {family_light_3? <p className="light_name_status_on"> On </p> : <p  className="light_name_status_off"> Off </p>}</p>
                                </div>


                                {family_light_3? 
                                    <button className="light_container_switch_light_on"  onClick={()=> (window.CrComLib.publishEvent("b","405",true),window.CrComLib.publishEvent("b","405",false)) }> <p> Turn Off </p> </button>
                                    :
                                    <button className="light_container_switch_light_on"  onClick={()=> (window.CrComLib.publishEvent("b","405",true),window.CrComLib.publishEvent("b","405",false)) }> <p> Turn On  </p> </button>
                                }
                            </div>

                            <div className="light_container_switch" id="light_4">
                                <div className="light_indicator"> 
                                    {family_light_4? 
                                     <button className="light_icon_on" onClick={()=> (window.CrComLib.publishEvent("b","406",true),window.CrComLib.publishEvent("b","406",false)) }> <img src={lightOn}/> </button> 
                                    :
                                     <button className="light_icon_off" onClick={()=> (window.CrComLib.publishEvent("b","406",true),window.CrComLib.publishEvent("b","406",false)) }> <img src={lightOff}/></button>  
                                    }
                                </div>


                                <div className="light_container_switch_tile">
                                    <p className="light_name"> Ceiling  {family_light_4? <p className="light_name_status_on"> On </p> : <p  className="light_name_status_off"> Off </p>}</p>
                                </div>


                                {family_light_4? 
                                    <button className="light_container_switch_light_on"  onClick={()=> (window.CrComLib.publishEvent("b","406",true),window.CrComLib.publishEvent("b","406",false)) }> <p> Turn Off </p> </button>
                                    :
                                    <button className="light_container_switch_light_on"  onClick={()=> (window.CrComLib.publishEvent("b","406",true),window.CrComLib.publishEvent("b","406",false)) }> <p> Turn On  </p> </button>
                                }
                            </div>

                            <div className="lighting_short_cut">
                              

                                <div className="lighting_action">
                                    <button onClick={()=> (window.CrComLib.publishEvent("b","401",true),window.CrComLib.publishEvent("b","401",false))} ><p>All Off</p></button>
                                    <button onClick={()=> (window.CrComLib.publishEvent("b","402",true),window.CrComLib.publishEvent("b","402",false))} ><p>All On </p></button>
                                </div>
                                
                            </div>
                    </div>

            
        </div>


    )
}

export default FamilyRoom