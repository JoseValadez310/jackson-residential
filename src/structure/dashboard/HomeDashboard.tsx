
// React 
import { useState, useEffect } from "react"

// React Router DOM
import { Link, useLocation } from "react-router-dom"

// CSS Files 
import "../../assets/css/index.css"
import "../../assets/css/dashboard_css/Home_Dashboard.sass"

// Components
import DateDisplay from "../../components/DateDisplay"
import Clock       from "../../components/Clock"

// tile icons
import Rooms   from "../../assets/images/icons/icons8-room.svg"
import Audio   from "../../assets/images/icons/icons8-music.svg"
import Light   from "../../assets/images/icons/noun-light-bulb-2216273.svg"



// icons
import power from "../../assets/images/icons/icons8-power.svg"



const HomeDashboard = () => {

   
    const [tvPowerMenu, setTvPowerMenu] = useState(false)      //  TV Power Menu    
    const [count,setCount] = useState(1)
    const [viewportViewer,setViewportViewer ] = useState(false)

    const ViewPortCounter = () => {
        if(count === 5){  
            setViewportViewer(true)
        }
        setCount(count+1)
    }

   
    
    
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

        const location = useLocation();

        const lastLocationUsed = location.state?.lastLocationUsed
    
    

 

    return (

        <div className="living_room_page">

          

    
            <div className={
                room1Active>0|| room2Active>0 || room3Active>0|| room4Active>0 || room5Active>0 || room6Active>0 || room7Active>0 || room8Active>0 ||
                room9Active>0 ||  room10Active>0 ||  room11Active>0 ||  room12Active>0 ||  room13Active>0 ||  room13Active>0 ||  room14Active>0 ||  room15Active>0 ||
                room16Active>0 || room17Active>0 || room18Active>0 || room19Active>0 ||  room20Active>0 ||  room21Active>0 ||  room22Active>0 ||  room23Active>0 ?
                "room_home_corner":"display_none"}>
                <button className="home_button" onTouchEnd={()=>powerMenu("menu")}>
                    <img src={power}  />
                </button> 
            </div>
           

            <div className={tvPowerMenu? "room_selection_power_menu" : "display_none"} >
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
       

          
            <div className="time_date_info">
                <div className="clock_info" onClick = {ViewPortCounter} style={{width:"100%"}}>
                    <Clock  />

                    <>
                        {viewportViewer?  <div style={{height:"3rem",width:"20rem", backgroundColor:"rgb(70,70,70)", display:"flex",justifyContent:'center',alignContent:"center"}}> <Link to={"/ScreenSize"}> <p style={{fontSize:"large"}}> Enter ViewPort Viewer  </p> </Link> </div>  : '' }
                    </>
                </div>

                <div className="date-info">
                    <DateDisplay />
                </div>
            </div>
        
            <div className="dashboard_container">
                <Link  className="card_container" to='/RoomsDashboard' style={{textDecoration:"none"}}> 
                    <img className="card_image" src={Rooms}/>
                    <p className="card_title"> Rooms </p>
                </Link>
            
                <Link  className="card_container" to='/AudioDashboard' state ={{activity:-1, lastLoc:"",lastUsed:lastLocationUsed}}style={{textDecoration:"none"}}> 
                    <img className="card_image" src={Audio}/>
                    <p className="card_title"> Audio </p>
                </Link> 
            
                <Link  className="card_container" to='/LightDashboard' style={{textDecoration:"none"}}> 
                    <img className="card_image" src={Light}/>
                    <p className="card_title"> Lights </p>
                </Link> 
            
            </div>


           



              
           
        </div>

    )  
}

export default HomeDashboard