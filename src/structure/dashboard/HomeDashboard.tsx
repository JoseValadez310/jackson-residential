
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
import Climate from "../../assets/images/icons/icons8-winter.svg"
import Pool    from "../../assets/images/icons8-swimming-pool.svg"
import Security from "../../assets/images/icons8-smart-home-shield.svg"

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
                
                    <Link  className="card_container" to='/Climate' style={{textDecoration:"none"}}> 
                        <img className="card_image" src={Climate}/>
                        <p className="card_title"> Climate </p>
                    </Link> 

                    <Link  className="card_container" to='/Security' style={{textDecoration:"none"}}> 
                        <img className="card_image" src={Security}/>
                        <p className="card_title"> Security </p>
                    </Link> 
                
                    <Link  className="card_container" to='/' style={{textDecoration:"none"}}> 
                        <img className="card_image" src={Pool}/>
                        <p className="card_title"> Pool - Spa </p>
                    </Link> 
                </div>


           



              
           
        </div>

    )  
}

export default HomeDashboard