// React 
import { useState, useEffect} from "react"


// React Router 
import { Link,useLocation  } from "react-router-dom"
// CSS 
import "../../assets/css/dashboard_css/Room_Dashboard.css"
import "../../assets/css/index.css"

// icons
import menu_button from "../../assets/images/icons/icons8-arrow.svg"
import portraitMode from "../../assets/images/icons/icons8-iphone-16-pro.svg"


// Test icons
import Audio   from "../../assets/images/icons/icons8-music.svg"
import Light   from "../../assets/images/icons/noun-light-bulb-2216273.svg"
import Climate from "../../assets/images/icons/icons8-winter.svg"
import TV          from "../../assets/images/icons/icons8-tv.svg"
import power       from "../../assets/images/icons/icons8-power.svg"





const RoomsDashboard = () => {

    const location = useLocation();
    const previousLocation = location.state?.previousLocation || "Unknown";

    useEffect(()=>{

        if(previousLocation === "1"){
            setLocation1(true)
            setLocation2(false)
            setLocation3(false)
            setLocation4(false)
        } else if (previousLocation === "2"){
            setLocation1(false)
            setLocation2(true)
            setLocation3(false)
            setLocation4(false)
        } else if (previousLocation === "3"){
            setLocation1(false)
            setLocation2(false)
            setLocation3(true)
            setLocation4(false)
        }  else if (previousLocation === "4"){
            setLocation1(false)
            setLocation2(false)
            setLocation3(false)
            setLocation4(true)
        } 

    },[previousLocation])

   

    const [location1, setLocation1] = useState(false)
    const [location2, setLocation2] = useState(true)
    const [location3, setLocation3] = useState(false)
    const [location4, setLocation4] = useState(false)
   



    const room1 = "1"   // breakfast east
    const room2 = "2"   // breakfast west
    const room3 = "3"   // dining room 
    const room4 = "4"   // ellens exercise
    const room5 = "5"   // ellens office
    const room6 = "6"   // ellens bath
    const room7 = "7"   // family room
    const room8 = "8"   // guest bed
    const room9 = "9"   //masted bed
    const room10 = "10" // media room 
    const room11 = "11" // arcade 1
    const room12 = "12" // arcade 2
    const room13 = "13" // arcade 3
    const room14 = "14" // pool patio
    const room15 = "15" // game room 


    
    // audio only zones 

    const room16 = "16" // Guest bath
    const room17 = "17" // Steves office
    const room18 = "18" // Living room
    const room19 = "19" // Kicthen
    const room20 = "20" // Pool Area
    const room21 = "21" // Gym
    const room22 = "22" // Breezeway
    const room23 = "23" // upper pool deck 


    const [room1Active, setRoom1Active] = useState(0)
    const [room2Active, setRoom2Active] = useState(0)
    const [room3Active, setRoom3Active] = useState(0)
    const [room4Active, setRoom4Active] = useState(0)
    const [room5Active, setRoom5Active] = useState(0)
    const [room6Active, setRoom6Active] = useState(0)
    const [room7Active, setRoom7Active] = useState(0)
    const [room8Active, setRoom8Active] = useState(0)
    const [room9Active, setRoom9Active] = useState(0)
    const [room10Active, setRoom10Active] = useState(0)
    const [room11Active, setRoom11Active] = useState(0)
    const [room12Active, setRoom12Active] = useState(0)
    const [room13Active, setRoom13Active] = useState(0)
    const [room14Active, setRoom14Active] = useState(0)
    const [room15Active, setRoom15Active] = useState(0)

    const [room16Active, setRoom16Active] = useState(0)
    const [room17Active, setRoom17Active] = useState(0)
    const [room18Active, setRoom18Active] = useState(0)
    const [room19Active, setRoom19Active] = useState(0)
    const [room20Active, setRoom20Active] = useState(0)
    const [room21Active, setRoom21Active] = useState(0)
    const [room22Active, setRoom22Active] = useState(0)
    const [room23Active, setRoom23Active] = useState(0)


    useEffect(()=>{

        const room1Activity = window.CrComLib.subscribeState("n",room1,(value:number)=>setRoom1Active(value));
        const room2Activity = window.CrComLib.subscribeState("n",room2,(value:number)=>setRoom2Active(value));
        const room3Activity = window.CrComLib.subscribeState("n",room3,(value:number)=>setRoom3Active(value));
        const room4Activity = window.CrComLib.subscribeState("n",room4,(value:number)=>setRoom4Active(value));
        const room5Activity = window.CrComLib.subscribeState("n",room5,(value:number)=>setRoom5Active(value));
        const room6Activity = window.CrComLib.subscribeState("n",room6,(value:number)=>setRoom6Active(value));
        const room7Activity = window.CrComLib.subscribeState("n",room7,(value:number)=>setRoom7Active(value));
        const room8Activity = window.CrComLib.subscribeState("n",room8,(value:number)=>setRoom8Active(value));
        const room9Activity = window.CrComLib.subscribeState("n",room9,(value:number)=>setRoom9Active(value));
        const room10Activity = window.CrComLib.subscribeState("n",room10,(value:number)=>setRoom10Active(value));
        const room11Activity = window.CrComLib.subscribeState("n",room11,(value:number)=>setRoom11Active(value));
        const room12Activity = window.CrComLib.subscribeState("n",room12,(value:number)=>setRoom12Active(value));
        const room13Activity = window.CrComLib.subscribeState("n",room13,(value:number)=>setRoom13Active(value));
        const room14Activity = window.CrComLib.subscribeState("n",room14,(value:number)=>setRoom14Active(value));
        const room15Activity = window.CrComLib.subscribeState("n",room15,(value:number)=>setRoom15Active(value));

        const room16Activity = window.CrComLib.subscribeState("n",room16,(value:number)=>setRoom16Active(value));
        const room17Activity = window.CrComLib.subscribeState("n",room17,(value:number)=>setRoom17Active(value));
        const room18Activity = window.CrComLib.subscribeState("n",room18,(value:number)=>setRoom18Active(value));
        const room19Activity = window.CrComLib.subscribeState("n",room19,(value:number)=>setRoom19Active(value));
        const room20Activity = window.CrComLib.subscribeState("n",room20,(value:number)=>setRoom20Active(value));
        const room21Activity = window.CrComLib.subscribeState("n",room21,(value:number)=>setRoom21Active(value));
        const room22Activity = window.CrComLib.subscribeState("n",room22,(value:number)=>setRoom22Active(value));
        const room23Activity = window.CrComLib.subscribeState("n",room23,(value:number)=>setRoom23Active(value));
      
        return()=>{

        window.CrComLib.unsubscribeState("n",room1,room1Activity)
        window.CrComLib.unsubscribeState("n",room2,room2Activity)
        window.CrComLib.unsubscribeState("n",room3,room3Activity)
        window.CrComLib.unsubscribeState("n",room4,room4Activity)
        window.CrComLib.unsubscribeState("n",room5,room5Activity)
        window.CrComLib.unsubscribeState("n",room6,room6Activity)
        window.CrComLib.unsubscribeState("n",room7,room7Activity)
        window.CrComLib.unsubscribeState("n",room8,room8Activity)
        window.CrComLib.unsubscribeState("n",room9,room9Activity)
        window.CrComLib.unsubscribeState("n",room10,room10Activity)
        window.CrComLib.unsubscribeState("n",room11,room11Activity)
        window.CrComLib.unsubscribeState("n",room12,room12Activity)
        window.CrComLib.unsubscribeState("n",room13,room13Activity)
        window.CrComLib.unsubscribeState("n",room14,room14Activity)
        window.CrComLib.unsubscribeState("n",room15,room15Activity)

        window.CrComLib.unsubscribeState("n",room16,room16Activity)
        window.CrComLib.unsubscribeState("n",room17,room17Activity)
        window.CrComLib.unsubscribeState("n",room18,room18Activity)
        window.CrComLib.unsubscribeState("n",room19,room19Activity)
        window.CrComLib.unsubscribeState("n",room20,room20Activity)
        window.CrComLib.unsubscribeState("n",room21,room21Activity)
        window.CrComLib.unsubscribeState("n",room22,room22Activity)
        window.CrComLib.unsubscribeState("n",room23,room23Activity)

        }
    }
    ,[])



    const [tvPowerMenu, setTvPowerMenu] = useState(false)      


// Power menu for current room
    const powerMenu = (id:string) =>{
        if(id==="menu"){
            console.log("into power menu")
            setTvPowerMenu(!tvPowerMenu)

    } 
    
        else if(id==="menu_off"){
            //console.log("Turning off room join", roomLocation)
            setTvPowerMenu(!tvPowerMenu)
           // window.CrComLib.publishEvent("n",roomLocation,0)
        

        }
    }





   

    

    const upStairs = (
        <>
    
    
            
           <Link to={`/masterbedroom`} className={room9Active> 0?"room_card_active":"room_card"}>    
                <div className="test">
                    <p className="room_name">Master Bedroom </p>
    
                    <div className="icon_preview">
                        <img className={room9Active > 0 && room9Active < 11? "active_icon":"" } src={TV} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Light} style={{ height: "1.25rem" }} />
                        <img className={room9Active === 11 || room9Active === 12? "active_icon":"" } src={Audio} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>
            
           <Link to={`/guestbedroom`} className={room8Active> 0?"room_card_active":"room_card"}>    
                <div className="test">
                    <p className="room_name">Guest Bedroom</p>
    
                    <div className="icon_preview">
                        <img className={room8Active > 0 && room8Active < 11? "active_icon":"" } src={TV} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Light} style={{ height: "1.25rem" }} />
                        <img className={room8Active === 11 || room8Active === 12? "active_icon":"" } src={Audio} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>
            
           <Link to={`/guestbathroom`} className="room_card">    
                <div className="test">
                    <p className="room_name">Guest Bathroom</p>
    
                    <div className="icon_preview">
                        <img className={room16Active > 0 && room16Active < 11? "active_icon":"" } src={TV} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Light} style={{ height: "1.25rem" }} />
                        <img className={room16Active === 11 || room16Active === 12? "active_icon":"" } src={Audio} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>
            
           <Link to={`/ellensoffice`} className={room5Active> 0?"room_card_active":"room_card"}>    
                <div className="test">
                    <p className="room_name">Ellen's Office</p>
    
                    <div className="icon_preview">
                        <img className={room5Active > 0 && room5Active < 11? "active_icon":"" } src={TV} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Light} style={{ height: "1.25rem" }} />
                        <img className={room5Active === 11 || room5Active === 12? "active_icon":"" } src={Audio} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>

            <Link to={`/ellensbath`} className={room6Active> 0?"room_card_active":"room_card"}>    
                <div className="test">
                    <p className="room_name">Ellen's Bath</p>
    
                    <div className="icon_preview">
                        <img className={room6Active > 0 && room6Active < 11? "active_icon":"" } src={TV} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Light} style={{ height: "1.25rem" }} />
                        <img className={room6Active === 11 || room6Active === 12? "active_icon":"" } src={Audio} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>
            
            <Link to={`/ellensexercise`} className={room4Active> 0?"room_card_active":"room_card"}>    
                <div className="test">
                    <p className="room_name">Ellen's Exercise</p>
    
                    <div className="icon_preview">
                        <img className={room4Active > 0 && room4Active < 11? "active_icon":"" } src={TV} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Light} style={{ height: "1.25rem" }} />
                        <img className={room4Active === 11 || room4Active === 12? "active_icon":"" } src={Audio} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>
        
            <Link to={`/mediaroom`} className={room10Active> 0?"room_card_active":"room_card"}>    
                <div className="test">
                    <p className="room_name">Media Room</p>
    
                    <div className="icon_preview">
                        <img className={room10Active > 0 && room10Active < 11? "active_icon":"" } src={TV} style={{ height: "1.25rem" }} />
                        <img src={Light} style={{ height: "1.25rem" }} />
                        <img className={room10Active === 11 || room10Active === 12? "active_icon":"" } src={Audio} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>
        
        
        </>
        )

    const mainFloor = (
    <>


        
       <Link to={`/familyroom`} className={room7Active> 0?"room_card_active":"room_card"}>    
            <div className="test">
                <p className="room_name">Family Room </p>

                <div className="icon_preview">
                    <img className={room7Active > 0 && room7Active < 11? "active_icon":"" } src={TV} style={{ height: "1.25rem" }} />
                    <img src={Light} style={{ height: "1.25rem" }} />
                    <img className={room7Active === 11 || room7Active === 12? "active_icon":"" } src={Audio} style={{ height: "1.25rem" }} />
                    <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                </div>
            </div>
        </Link>

       <Link to={`/dinningroom`} className={room3Active> 0?"room_card_active":"room_card"}>    
            <div className="test">
                <p className="room_name">Dining Room</p>

                <div className="icon_preview">
                    <img className={room3Active > 0 && room3Active < 11? "active_icon":"" }  src={TV} style={{ height: "1.25rem" }} />
                    <img src={Light} style={{ height: "1.25rem" }} />
                    <img className={room3Active === 11 || room3Active === 12? "active_icon":"" } src={Audio} style={{ height: "1.25rem" }} />
                    <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                </div>
            </div>
        </Link>
        
       <Link to={`/breakfast`} className={room1Active>0 || room2Active>0 ?"room_card_active":"room_card"}>    
            <div className="test">
                <p className="room_name">Breakfast</p>

                <div className="icon_preview">
                    <img className={room1Active > 0 && room1Active < 11 ||  room2Active > 0 && room2Active < 11? "active_icon":"" } src={TV} style={{ height: "1.25rem" }} />
                    <img src={Light} style={{ height: "1.25rem" }} />
                    <img className={room2Active === 11 || room2Active === 12? "active_icon":"" } src={Audio} style={{ height: "1.25rem" }} />
                    <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                </div>
            </div>
        </Link>
        
       <Link to={`/gameroom`} className={room15Active> 0?"room_card_active":"room_card"}>    
            <div className="test">
                <p className="room_name">Game Room</p>

                <div className="icon_preview">
                    <img className={room15Active > 0 && room15Active < 11? "active_icon":"" } src={TV} style={{ height: "1.25rem" }} />
                    <img className='display_none' src={Light} style={{ height: "1.25rem" }} />
                    <img className={room15Active === 11 || room15Active === 12? "active_icon":"" }src={Audio} style={{ height: "1.25rem" }} />
                    <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                </div>
            </div>
        </Link>
    
    
    </>
        )

    const downFloor = (
        <>

            
           <Link to={`/arcade`} className={room11Active> 0 || room12Active>0||room13Active>0?"room_card_active":"room_card"}>    
                <div className="test">
                    <p className="room_name">Arcade</p>
    
                    <div className="icon_preview">
                        <img className={room11Active > 0 && room11Active < 11 ||  room12Active > 0 && room12Active < 11||room13Active > 0 && room13Active < 11? "active_icon":"" } src={TV} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Light} style={{ height: "1.25rem" }} />
                        <img className={room11Active === 11 || room11Active === 12? "active_icon":"" }src={Audio} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>
    
            
           <Link to={`/basketballcourt`} className="room_card">    
                <div className="test">
                    <p className="room_name">Basketball Court</p>
    
                    <div className="icon_preview">
                        <img src={TV} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>
        
        
        </>
        )

    const outfloor = (
        <>

            <Link to={`/poolpatio`} className={room14Active> 0?"room_card_active":"room_card"}>    
                <div className="test">
                    <p className="room_name">Pool Patio</p>
    
                    <div className="icon_preview">
                        <img className={room14Active > 0 && room14Active < 11? "active_icon":"" } src={TV} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Light} style={{ height: "1.25rem" }} />
                        <img className={room14Active === 11 || room14Active === 12? "active_icon":"" } src={Audio} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>
        
        
        </>
        )
    


        const changeRooms = (id:string) =>{

                if(id === "1"){
                    setLocation1(true)
                    setLocation2(false)
                    setLocation3(false)
                    setLocation4(false)
                } else if (id === "2"){
                    setLocation1(false)
                    setLocation2(true)
                    setLocation3(false)
                    setLocation4(false)
                } else if (id === "3"){
                    setLocation1(false)
                    setLocation2(false)
                    setLocation3(true)
                    setLocation4(false)
                } else if (id === "4"){
                    setLocation1(false)
                    setLocation2(false)
                    setLocation3(false)
                    setLocation4(true)
                }
        }





    return (
        <div className="rooms_dashboard">

 
            <div className="room_back_corner" >
                <Link to={"/"}  > 
                    <button className="back_button" >
                        <img src={menu_button}/>
                    </button>
                </Link>  
            </div>


            <div className={
                room1Active>0|| room2Active>0 || room3Active>0|| room4Active>0 || room5Active>0 || room6Active>0 || room7Active>0 || room8Active>0 ||
                room9Active>0 ||  room10Active>0 ||  room11Active>0 ||  room12Active>0 ||  room13Active>0 ||  room13Active>0 ||  room14Active>0 ||  room15Active>0 ||
                room16Active>0 || room17Active>0 || room18Active>0 || room19Active>0 ||  room20Active>0 ||  room21Active>0 ||  room22Active>0 ||  room23Active>0 ?
                "room_home_corner":"display_none"}>
                <button className="home_button" onTouchEnd={()=>powerMenu("menu")}>
                    <img src={power}  />
                </button> 
            </div>
           

            <div className={tvPowerMenu? "room_selection_power_menu" : "display_none"}  >
                <div className="power_menu_title">
                    <p className="active_zone_title">Global power menu</p>
                </div>

                <div className="active_zone_menu">
                    <div className={room1Active>0 || room2Active>0 ?"active_zone_card":"display_none"}>                         
                        <p className="active_zone_title">Breakfast</p>   
                        <p className="active_zone_message">A user is currently {room2Active === 11 || room2Active === 12? "playing music":"watching TV"}</p>     
                        <button className="btn_circle" onTouchEnd={()=> (window.CrComLib.publishEvent("n",room1,0),window.CrComLib.publishEvent("n",room2,0))}><img className="btn_image" src={power} /></button>
                    </div>
                    
                    <div className={room3Active>0? "active_zone_card":"display_none"}>    
                        <p className="active_zone_title">Ellen's Exercise</p>   
                        <p className="active_zone_message">A user is currently {room3Active === 11 || room3Active === 12? "playing music":"watching TV"}</p>   
                        <button className="btn_circle" onTouchEnd={()=> window.CrComLib.publishEvent("n",room3,0)}> <img className="btn_image" src={power} /> </button>
                    </div>


                    <div className={room4Active>0? "active_zone_card":"display_none"}>     
                        <p className="active_zone_title">Ellen's Exercise</p> 
                        <p className="active_zone_message">A user is currently {room4Active === 11 || room4Active === 12? "playing music":"watching TV"}</p>
                        <button className="btn_circle" onTouchEnd={()=> window.CrComLib.publishEvent("n",room4,0)}><img className="btn_image" src={power} /></button>
                    </div>

                    <div className={room5Active>0? "active_zone_card":"display_none"}>                                          
                        <p className="active_zone_title">Ellen's Office</p>   
                        <p className="active_zone_message">A user is currently {room5Active === 11 || room5Active === 12? "playing music":"watching TV"}</p>
                        <button className="btn_circle" onTouchEnd={()=> window.CrComLib.publishEvent("n",room5,0)}><img className="btn_image" src={power} /></button>
                    </div>

                    <div className={room6Active>0? "active_zone_card":"display_none"}> 
                        <p className="active_zone_title">Ellen's Bath</p>   
                        <p className="active_zone_message">A user is currently {room6Active === 11 || room6Active === 12? "playing music":"watching TV"}</p>  
                        <button className="btn_circle" onTouchEnd={()=> window.CrComLib.publishEvent("n",room6,0)}><img className="btn_image" src={power} /></button>
                    </div>

                    <div className={room7Active>0? "active_zone_card":"display_none"}>                                          
                        <p className="active_zone_title">Family Room</p>
                        <p className="active_zone_message">A user is currently {room7Active === 11 || room7Active === 12? "playing music":"watching TV"}</p>      
                        <button className="btn_circle" onTouchEnd={()=> window.CrComLib.publishEvent("n",room7,0)}><img className="btn_image" src={power} /></button>
                    </div>

                    <div className={room8Active>0? "active_zone_card":"display_none"}>                                          
                        <p className="active_zone_title">Guest Bedroom</p>   
                        <p className="active_zone_message">A user is currently {room8Active === 11 || room8Active === 12? "playing music":"watching TV"}</p>
                        <button className="btn_circle" onTouchEnd={()=> window.CrComLib.publishEvent("n",room8,0)}><img className="btn_image" src={power} /></button>
                    </div>

                    <div className={room9Active>0? "active_zone_card":"display_none"}>   
                        <p className="active_zone_title">Master Bedroom</p>   
                        <p className="active_zone_message">A user is currently {room9Active === 11 || room9Active === 12? "playing music":"watching TV"}</p>
                        <button className="btn_circle" onTouchEnd={()=> window.CrComLib.publishEvent("n",room9,0)}> <img className="btn_image" src={power} /></button>
                    </div>

                    <div className={room10Active>0? "active_zone_card":"display_none"}>   
                        <p className="active_zone_title"> Media Room</p>      
                        <p className="active_zone_message">A user is currently {room10Active === 11 || room10Active === 12? "playing music":"watching TV"}</p>
                        <button className="btn_circle" onTouchEnd={()=> window.CrComLib.publishEvent("n",room10,0)}><img className="btn_image" src={power} /></button>
                    </div>
                    
                    <div className={room11Active>0 || room12Active>0 || room13Active>0?  "active_zone_card":"display_none"}>    
                        <p className="active_zone_title">Aracde</p>  
                        <p className="active_zone_message">A user is currently {room11Active === 11 || room11Active === 12? "playing music":"watching TV"}</p>         
                        <button className="btn_circle" onTouchEnd={()=> (window.CrComLib.publishEvent("n",room11,0),window.CrComLib.publishEvent("n",room12,0),window.CrComLib.publishEvent("n",room13,0))}><img className="btn_image" src={power} /></button>
                    </div>
                    
                    <div className={room14Active>0? "active_zone_card":"display_none"}>                                         
                        <p className="active_zone_title">Pool Patio</p>       
                        <p className="active_zone_message">A user is currently {room14Active === 11 || room14Active === 12? "playing music":"watching TV"}</p>
                        <button className="btn_circle" onTouchEnd={()=> window.CrComLib.publishEvent("n",room14,0)}><img className="btn_image" src={power} /></button>
                    </div>
                    
                    <div className={room15Active>0? "active_zone_card":"display_none"}>                                         
                        <p className="active_zone_title">Game Room</p>  
                        <p className="active_zone_message">A user is currently {room15Active === 11 || room15Active === 12? "playing music":"watching TV"}</p>      
                        <button className="btn_circle" onTouchEnd={()=> window.CrComLib.publishEvent("n",room15,0)}><img className="btn_image" src={power} /></button>
                    </div>


                    <div className={room16Active>0? "active_zone_card":"display_none"}> 
                        <p className="active_zone_title">Ellen's Bath</p>   
                        <p className="active_zone_message">A user is currently {room16Active === 11 || room16Active === 12? "playing music":"watching TV"}</p>  
                        <button className="btn_circle" onTouchEnd={()=> window.CrComLib.publishEvent("n",room16,0)}><img className="btn_image" src={power} /></button>
                    </div>

                    <div className={room17Active>0? "active_zone_card":"display_none"}>                                          
                        <p className="active_zone_title">Family Room</p>
                        <p className="active_zone_message">A user is currently {room17Active === 11 || room17Active === 12? "playing music":"watching TV"}</p>      
                        <button className="btn_circle" onTouchEnd={()=> window.CrComLib.publishEvent("n",room17,0)}> <img className="btn_image" src={power} /></button>
                    </div>

                    <div className={room18Active>0? "active_zone_card":"display_none"}>                                          
                        <p className="active_zone_title">Guest Bedroom</p>   
                        <p className="active_zone_message">A user is currently {room18Active === 11 || room18Active === 12? "playing music":"watching TV"}</p>
                        <button className="btn_circle" onTouchEnd={()=> window.CrComLib.publishEvent("n",room18,0)}><img className="btn_image" src={power} /></button>
                    </div>

                    <div className={room19Active>0? "active_zone_card":"display_none"}>   
                        <p className="active_zone_title">Master Bedroom</p>   
                        <p className="active_zone_message">A user is currently {room19Active === 11 || room19Active === 12? "playing music":"watching TV"}</p>
                        <button className="btn_circle" onTouchEnd={()=> window.CrComLib.publishEvent("n",room19,0)}> <img className="btn_image" src={power} /></button>
                    </div>

                    <div className={room20Active>0? "active_zone_card":"display_none"}>   
                        <p className="active_zone_title"> Media Room</p>      
                        <p className="active_zone_message">A user is currently {room20Active === 11 || room20Active === 12? "playing music":"watching TV"}</p>
                        <button className="btn_circle" onTouchEnd={()=> window.CrComLib.publishEvent("n",room20,0)}><img className="btn_image" src={power} /></button>
                    </div>
                    
                    <div className={room21Active>0 || room12Active>0 || room13Active>0?  "active_zone_card":"display_none"}>    
                        <p className="active_zone_title">Aracde</p>  
                        <p className="active_zone_message">A user is currently {room21Active === 11 || room21Active === 12? "playing music":"watching TV"}</p>         
                        <button className="btn_circle" onTouchEnd={()=> (window.CrComLib.publishEvent("n",room21,0),window.CrComLib.publishEvent("n",room12,0),window.CrComLib.publishEvent("n",room13,0))}><img className="btn_image" src={power} /></button>
                    </div>
                    
                    <div className={room22Active>0? "active_zone_card":"display_none"}>                                         
                        <p className="active_zone_title">Pool Patio</p>       
                        <p className="active_zone_message">A user is currently {room22Active === 11 || room22Active === 12? "playing music":"watching TV"}</p>
                        <button className="btn_circle" onTouchEnd={()=> window.CrComLib.publishEvent("n",room22,0)}><img className="btn_image" src={power} /></button>
                    </div>
                    
                    <div className={room23Active>0? "active_zone_card":"display_none"}>                                         
                        <p className="active_zone_title">Game Room</p>  
                        <p className="active_zone_message">A user is currently {room23Active === 11 || room23Active === 12? "playing music":"watching TV"}</p>      
                        <button className="btn_circle" onTouchEnd={()=> window.CrComLib.publishEvent("n",room23,0)}><img className="btn_image" src={power} /></button>
                    </div>
                   
                </div>
                <button className="btn_square" onClick={()=>setTvPowerMenu(!tvPowerMenu)}> <p className="active_zone_title">Close Menu</p></button>
            </div>
       
       
       
        <div className="nav_container">

            <div className="nav">
                    <button className={ location1? "btn_selected" : 'btn_not_selected'}  onTouchEnd={()=> changeRooms('1')}> <p> Up Stairs   </p> </button>
                    <button className={ location2? "btn_selected" : 'btn_not_selected'}  onTouchEnd={()=> changeRooms('2')}> <p> Main        </p> </button>
                    <button className={ location3? "btn_selected" : 'btn_not_selected'}  onTouchEnd={()=> changeRooms('3')}> <p> Down Stairs </p> </button>
                    <button className={ location4? "btn_selected" : 'btn_not_selected'}  onTouchEnd={()=> changeRooms('4')}> <p> Out Doors   </p> </button>
                  
            </div>  

        </div>

        <h1 className="title_info"> Room Selection </h1>
        
        <div className="room_selection_options">
            {location1? upStairs  : <></>}
            {location2? mainFloor : <></>}
            {location3? downFloor : <></>}
            {location4? outfloor  : <></>}
        </div>
             

        <div className="landscape_warning">
                <h1> Please rotate your device back to portrait mode. </h1>
                <img src={portraitMode}  />
        </div>

                    
        </div>
    )
}



export default RoomsDashboard