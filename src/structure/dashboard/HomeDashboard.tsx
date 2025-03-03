
// React 
import { useState } from "react"

// React Router DOM
import { Link } from "react-router-dom"

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

    const powerMenu = (id: string) => {
        if (id === "menu") {
          console.log("into power menu");
          setTvPowerMenu(!tvPowerMenu);
        } else if (id === "menu_off") {
          console.log("Turning off all media sources");
          setTvPowerMenu(!tvPowerMenu);
      
          // Define and run the asynchronous function to process each zone with a 1-second delay.
          const runZoneCommands = async () => {
            // Array of zone IDs as strings.
            const zones: string[] = [
              "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
              "31", "32", "33", "34", "35", "36", "37", "38", "39", "40"
            ];
      
            // Loop through each zone, sending the publish events and waiting 1 second per zone.
            for (const zone of zones) {
              window.CrComLib.publishEvent("b", zone, true);
              window.CrComLib.publishEvent("b", zone, false);
              console.log(`Sending command for zone ${zone}`);
              
              // Create a 1-second delay before processing the next zone.
              await new Promise(resolve => setTimeout(resolve, 250));
            }
          };
      
          // Execute the asynchronous zone command function.
          runZoneCommands();
        }
      };


 

    return (

        <div className="living_room_page">

              <div className={tvPowerMenu? "power_menu_overlay" : "hide_power_menu_overlay"} >
            <div className="power_menu">
                <p className="power_menu_text" style={{margin:"1rem"}}> 
                    Would you like to turn off all media sources? 
                </p>

                <div className="power_menu_button">
                    <Link to={"/"} className="yes_reboot"> 
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

            <div className="home_power_container">
                <button className="home_button" onClick={()=>powerMenu("menu")}>
                    

                    <img  src={power} />
                </button>
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
                
                    <Link  className="card_container" to='/AudioDashboard' style={{textDecoration:"none"}}> 
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