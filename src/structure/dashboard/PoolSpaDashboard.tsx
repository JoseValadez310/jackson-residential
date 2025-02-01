//React

//React Router 
import { Link } from "react-router-dom"

//CSS
import "../../assets/css/dashboard_css/PoolSpa_Dashboard.css"
import "../../assets/css/index.css"
//Icons
import menu_button from "../../assets/images/icons/icons8-arrow.svg"
import arrow from "../../assets/images/icons/icons8-triangle-arrow.svg"



const PoolSpa = () =>{







    return(
        <div className="pool_spa_dashboard">
            
            <Link to={"/"} className="mobile_back_btn"> 
                <button className="back_button">
                    <img src={menu_button}/>
                </button>
            </Link>




        <div className="nav_container">
            <Link to={"/"}> 
                <button className="back_button">
                    <img src={menu_button}/>
                </button>
            </Link>

       </div>

       <h1 className="title_info"> Pool - Spa </h1>

            

        <div className="pool_container">

            <p className="container_title"> Pool </p>


        <div className="current_temp">
                        <div className="current_temp_outter_circle">
                            <div className="current_temp_inner_circle">
                                <p className="temp_value"> 100 </p>
                                <p className="temp_text"> Current Temp.</p>
                            </div>
                        </div>
                    </div>


            <div className="current_temp_wrapper">

                <button className="btn_circle">
                    <img className="btn_image" src={arrow}/>
                </button>

                   <div className="pool_set_point">
                        <h1> 100</h1>
                        <p> Pool Set Point </p>
                   </div>

                <button className="btn_circle">
                    <img className="btn_image" id="flip" src={arrow}/>
                </button>

           </div>

           <div className="pool_control_button">
            <button className="btn_square_wide"> <p>Pool Heat </p></button>
            <button className="btn_square_wide"> <p>Pool Mode  </p></button>
           </div>



        </div>

        <div className="button_container">
            <button className="btn_square_wide"> <p>Filter          </p></button>
            <button className="btn_square_wide"> <p>Solar Heat      </p></button>
            <button className="btn_square_wide"> <p>Solar Heat Pref </p></button>
            <button className="btn_square_wide"> <p>Spa Jets        </p></button>
            <button className="btn_square_wide"> <p>Pool Lights     </p></button>
        </div>

        <div className="spa_container">

            <p className="container_title"> Spa </p>
            <div className="current_temp">
                <div className="current_temp_outter_circle">
                    <div className="current_temp_inner_circle">
                        <p className="temp_value"> 100 </p>
                        <p className="temp_text"> Current Temp.</p>
                    </div>
                </div>
            </div>


            <div className="current_temp_wrapper">

                    <button className="btn_circle">
                        <img className="btn_image" src={arrow}/>
                    </button>

                    <div className="pool_set_point">
                            <h1> 100</h1>
                            <p> Pool Set Point </p>
                    </div>

                    <button className="btn_circle">
                        <img className="btn_image" id="flip" src={arrow}/>
                    </button>

            </div>

            <div className="pool_control_button">
                <button className="btn_square_wide"> <p>Spa Heat   </p></button>
                <button className="btn_square_wide"> <p>Spa Mode   </p></button>
            </div>



        </div>


      

        </div>
    )
}



export default PoolSpa