
// React 
import { useState } from "react"

// React Router DOM
import { Link } from "react-router-dom"

// CSS Files 
import "../../assets/css/index.css"
import "../../assets/css/dashboard_css/Home_Dashboard.css"

// Components
import DateDisplay from "../../components/DateDisplay"
import Clock       from "../../components/Clock"

// tile icons
import Rooms   from "../../assets/images/icons/icons8-room.svg"
import Audio   from "../../assets/images/icons/icons8-music.svg"
import Light   from "../../assets/images/icons/noun-light-bulb-2216273.svg"
import Climate from "../../assets/images/icons/icons8-winter.svg"


const HomeDashboard = () => {

    const [count,setCount] = useState(1)
    const [viewportViewer,setViewportViewer ] = useState(false)

    const ViewPortCounter = () => {
        if(count === 5){  
            setViewportViewer(true)
        }
        setCount(count+1)
    }


    return (

        <div className="living_room_page">
          
                <div className="time_date_info">
                    <div className="clock_info" onClick = {ViewPortCounter}>
                        <Clock  />

                        <p>
                            {viewportViewer?  <button style={{height:"3rem",width:"20rem"}}> <Link to={"/ScreenSize"}> <p style={{fontSize:"large", color:"black"}}> Enter ViewPort Viewer  </p> </Link> </button>  : '' }
                        </p>
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
                
                    <Link  className="card_container" to='/Climate' style={{textDecoration:"none"}}> 
                        <img className="card_image" src={Climate}/>
                        <p className="card_title"> Climate </p>
                    </Link> 
                </div>


           



              
           
        </div>

    )  
}

export default HomeDashboard