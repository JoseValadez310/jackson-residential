// React

//React Router DOM
import { Link } from "react-router-dom";

//CSS
import "../../assets/css/dashboard_css/Climate_Dashboard.css"


//Icons
import menu_button from "../../assets/images/icons/icons8-arrow.svg"
import portraitMode from "../../assets/images/icons/icons8-iphone-16-pro.svg"


// Thermo
import Thermostat1 from "../../components/climate/thermostat1";
import Thermostat2 from "../../components/climate/thermostat2";
import Thermostat3 from "../../components/climate/thermostat3";
import Thermostat4 from "../../components/climate/thermostat4";
import Thermostat5 from "../../components/climate/thermostat5";







const ClimateDashboard = () =>{

  




  

    





  


    return(


     


     


     
            <div className="climate_page">


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



                <h1 className="title_info"> Climate Dashboard </h1>


                <div className="climate_dashboard_container">
                
                  <div className="container_thermo">
                    <p className="climate_label"> Dine Hall</p>
                      <Thermostat1 />
                  </div>

                  <div className="container_thermo">
                  <p className="climate_label"> Library Hall</p>
                  <Thermostat2 />
                  </div>

                  <div className="container_thermo">
                  <p className="climate_label"> Master </p>
                  <Thermostat3 />
                  </div>

                  <div className="container_thermo">
                  <p className="climate_label"> Top Floor</p>
                  <Thermostat4 />
                  </div>

                  <div className="container_thermo">
                  <p className="climate_label"> West Rooms</p>
                  <Thermostat5 />
                  </div>
        
                </div>
                
                  


   
                <div className="landscape_warning">
                <h1> Please rotate your device back to portrait mode. </h1>
                <img src={portraitMode}  />
        </div>


                    

                    
                 
            </div>
       

       

        
    )
}

export default ClimateDashboard