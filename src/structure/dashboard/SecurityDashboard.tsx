// React Router
import { Link } from "react-router-dom"
//CSS
import "../../assets/css/dashboard_css/Security_Dashboard.css"
//Icons
import menu_button from "../../assets/images/icons/icons8-arrow.svg"
import backspace from "../../assets/images/icons/icons8-backspace.svg"
import clear from "../../assets/images/icons/icons8-x.svg"
//Componets
import Clock from "../../components/Clock"



const SecurityDashboard =()=>{

        const green  = "green_ready"
        const yellow = "yellow_stay"
        const red  = "red_armed"

        let value 


console.log(green, yellow, red)

    return(
        <div className="security_dashboard">

            <div className="nav_container">
                    <Link to={"/"}> 
                        <button className="back_button">
                            <img src={menu_button}/>
                        </button>
                    </Link>

                <div className="nav">
                    <button className="btn_circle"><p>Stay</p></button>
                    <button className="btn_circle"><p>Away</p></button>
                    <button className="btn_circle"><p>Disarm</p></button>
                    <button className="btn_circle"><p>Bypass All</p></button>
                </div>
                

                <div className="nav_clock">
                    <Clock />
                </div>

            </div>


            <h1 className="title_info"> Security </h1>


            <div className="security_keypad_container" id={green}>
                
                <div className="security_keypad_inner_contianer">

                    <div className="feedback_viewer"> 
                            <h1>  {value}  </h1>
                    
                    </div>
                    <div className="keypad">
                            <button className="btn_circle"><p className="num">1</p></button>
                            <button className="btn_circle"><p className="num">2</p></button>
                            <button className="btn_circle"><p className="num">3</p></button>

                            <button className="btn_circle"><p className="num">4</p></button>
                            <button className="btn_circle"><p className="num">5</p></button>
                            <button className="btn_circle"><p className="num">6</p></button>

                            <button className="btn_circle"><p className="num">7</p></button>
                            <button className="btn_circle"><p className="num">8</p></button>
                            <button className="btn_circle"><p className="num">9</p></button>


                            <button className="btn_circle" id="btn_active_red"> <img className="btn_image" src={clear} style={{height:"60%"}}/></button>
                            <button className="btn_circle"><p className="num">0</p></button>
                            <button className="btn_circle" id="btn_active_red"> <img className="btn_image" src={backspace} style={{height:"68%"}}/></button>

                          
                    </div>

                </div>

            </div>


            <div className=" control_container">

               

            </div>

          

        </div>
    )
}



export default SecurityDashboard
