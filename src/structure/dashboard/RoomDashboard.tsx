// React 
import { useState, useEffect} from "react"



// React Router 
import { Link  } from "react-router-dom"
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
                        <img src={TV} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>
            
           <Link to={`/guestbedroom`} className={room8Active> 0?"room_card_active":"room_card"}>    
                <div className="test">
                    <p className="room_name">Guest Bedroom</p>
    
                    <div className="icon_preview">
                        <img src={TV} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>
            
           <Link to={`/guestbathroom`} className="room_card">    
                <div className="test">
                    <p className="room_name">Guest Bathroom</p>
    
                    <div className="icon_preview">
                        <img src={TV} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>
            
           <Link to={`/ellensoffice`} className={room5Active> 0?"room_card_active":"room_card"}>    
                <div className="test">
                    <p className="room_name">Ellen's Office</p>
    
                    <div className="icon_preview">
                        <img src={TV} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>

            <Link to={`/ellensbath`} className={room6Active> 0?"room_card_active":"room_card"}>    
                <div className="test">
                    <p className="room_name">Ellen's Bath</p>
    
                    <div className="icon_preview">
                        <img src={TV} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>
            
            <Link to={`/ellensexercise`} className={room4Active> 0?"room_card_active":"room_card"}>    
                <div className="test">
                    <p className="room_name">Ellen's Exercise</p>
    
                    <div className="icon_preview">
                        <img src={TV} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>
        
            <Link to={`/mediaroom`} className={room10Active> 0?"room_card_active":"room_card"}>    
                <div className="test">
                    <p className="room_name">Media Room</p>
    
                    <div className="icon_preview">
                        <img src={TV} style={{ height: "1.25rem" }} />
                        <img src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
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
                    <img src={TV} style={{ height: "1.25rem" }} />
                    <img src={Light} style={{ height: "1.25rem" }} />
                    <img src={Audio} style={{ height: "1.25rem" }} />
                    <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                </div>
            </div>
        </Link>

       <Link to={`/dinningroom`} className={room3Active> 0?"room_card_active":"room_card"}>    
            <div className="test">
                <p className="room_name">Dining Room</p>

                <div className="icon_preview">
                    <img  src={TV} style={{ height: "1.25rem" }} />
                    <img src={Light} style={{ height: "1.25rem" }} />
                    <img src={Audio} style={{ height: "1.25rem" }} />
                    <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                </div>
            </div>
        </Link>
        
       <Link to={`/breakfast`} className={room1Active>0 || room2Active>0 ?"room_card_active":"room_card"}>    
            <div className="test">
                <p className="room_name">Breakfast</p>

                <div className="icon_preview">
                    <img src={TV} style={{ height: "1.25rem" }} />
                    <img src={Light} style={{ height: "1.25rem" }} />
                    <img src={Audio} style={{ height: "1.25rem" }} />
                    <img id="display_none" src={Climate} style={{ height: "1.25rem" }} />
                </div>
            </div>
        </Link>
        
       <Link to={`/gameroom`} className={room15Active> 0?"room_card_active":"room_card"}>    
            <div className="test">
                <p className="room_name">Game Room</p>

                <div className="icon_preview">
                    <img src={TV} style={{ height: "1.25rem" }} />
                    <img src={Light} style={{ height: "1.25rem" }} />
                    <img src={Audio} style={{ height: "1.25rem" }} />
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
                        <img src={TV} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
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
                        <img src={TV} style={{ height: "1.25rem" }} />
                        <img id="display_none" src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
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
                room1Active>0|| room2Active>0 || room3Active>0 || room4Active>0 || room5Active>0 || room6Active>0 || room7Active>0 || room8Active>0 ||
                room9Active>0 ||  room10Active>0 ||  room11Active>0 ||  room12Active>0 ||  room13Active>0 ||  room13Active>0 ||  room14Active>0 ||  room15Active>0 ?
                "room_home_corner":"display_none"}>
                <button className="home_button" onTouchEnd={()=>powerMenu("menu")}>
                    <img src={power}  />
                </button> 
            </div>
           

            <div className={tvPowerMenu? "room_selection_power_menu" : "display_none"} >
                <div className="power_menu_title">
                    <p>These rooms are currently active. Which would you like to turn off?</p>
                </div>

                <div className="active_zone_menu">
                    <div className={room1Active>0 || room2Active>0 ?"active_zone_card":"display_none"}> <p>Breakfast</p> <button className="btn_circle"><img className="btn_image" src={power} /></button></div>
                    <div className={room3Active>0? "active_zone_card":"display_none"}> <p>Dining Room</p> <button className="btn_circle"><img className="btn_image" src={power} /></button></div>
                    <div className={room4Active>0? "active_zone_card":"display_none"}> <p>Ellen's Exercise</p> <button className="btn_circle"><img className="btn_image" src={power} /></button></div>
                    <div className={room5Active>0? "active_zone_card":"display_none"}> <p>Ellen's Office</p> <button className="btn_circle"><img className="btn_image" src={power} /></button></div>
                    <div className={room6Active>0? "active_zone_card":"display_none"}> <p>Ellen's Bath</p> <button className="btn_circle"><img className="btn_image" src={power} /></button></div>
                    <div className={room7Active>0? "active_zone_card":"display_none"}> <p>Family Room</p> <button className="btn_circle"><img className="btn_image" src={power} /></button></div>
                    <div className={room8Active>0? "active_zone_card":"display_none"}> <p>Guest Bedroom</p> <button className="btn_circle"><img className="btn_image" src={power} /></button></div>
                    <div className={room9Active>0? "active_zone_card":"display_none"}> <p>Master Bedroom</p> <button className="btn_circle"><img className="btn_image" src={power} /></button></div>
                    <div className={room10Active>0? "active_zone_card":"display_none"}> <p> Media Room</p> <button className="btn_circle"><img className="btn_image" src={power} /></button></div>
                    <div className={room11Active>0 || room12Active>0 || room13Active>0?  "active_zone_card":"display_none"}> <p>Aracde</p> <button className="btn_circle"><img className="btn_image" src={power} /></button></div>
                    <div className={room14Active>0? "active_zone_card":"display_none"}> <p>Pool Patio</p> <button className="btn_circle"><img className="btn_image" src={power} /></button></div>
                    <div className={room15Active>0? "active_zone_card":"display_none"}> <p>Game Room</p> <button className="btn_circle"><img className="btn_image" src={power} /></button></div>
                   
                </div>
                <button className="btn_square" onClick={()=>setTvPowerMenu(!tvPowerMenu)}> <p>Close Menu</p></button>
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