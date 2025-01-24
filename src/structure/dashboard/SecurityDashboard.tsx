// React Router
import { Link } from "react-router-dom"
//CSS
import "../../assets/css/dashboard_css/Security_Dashboard.css"
//Icons
import menu_button from "../../assets/images/icons/icons8-arrow.svg"
//Componets
import Clock from "../../components/Clock"



const SecurityDashboard =()=>{





    return(
        <div className="security_dashboard">

            <div className="nav_container">
                    <Link to={"/"}> 
                        <button className="back_button">
                            <img src={menu_button}/>
                        </button>
                    </Link>

                <div className="nav">

                </div>
                

                <div className="nav_clock">
                    <Clock />
                </div>

            </div>


            <h1 className="title_info"> Security </h1>


            <div className="security_keypad_container">
                
                <div className="security_keypad_inner_contianer">

                    <div className="feedback_viewer"> 
                            <h1> 123  </h1>
                    
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

                            <button className="btn_circle"> <p> Back Space</p></button>
                            <button className="btn_circle"><p className="num">0</p></button>
                            <button className="btn_circle"><p>Clear</p></button>
                    </div>

                </div>

            </div>

          

        </div>
    )
}



export default SecurityDashboard
