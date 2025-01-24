// React
import { useState } from "react";

//React Router DOM
import { Link } from "react-router-dom";

//CSS
import "../../assets/css/dashboard_css/Climate_Dashboard.css"

import Clock from "../../components/Clock";

//Icons
import menu_button from "../../assets/images/icons/icons8-arrow.svg"

// Thermo
import Thermostat1 from "../../components/climate/thermostat1";
import Thermostat2 from "../../components/climate/thermostat2";
import Thermostat3 from "../../components/climate/thermostat3";
import Thermostat4 from "../../components/climate/thermostat4";
import Thermostat5 from "../../components/climate/thermostat5";





interface LocationType {
    active: boolean;
    title: string;
    climate:string;
  }



const ClimateDashboard = () =>{

    const [zone, setZone] = useState<{
        location_1: LocationType;
        location_2: LocationType;
        location_3: LocationType;
        location_4: LocationType;
        location_5: LocationType;
        location_6: LocationType;
        location_7: LocationType;
        location_8: LocationType;
    }>
      ({
        location_1: {
            active: true,
            title:"Dining Hall",
            climate:"zone 1"

        },
        location_2: {
            active: false,
            title:"Library Hall",
            climate:"zone 2"
        },
        location_3: {
            active: false,
            title:"Master",
            climate:"zone 3"
        },
        location_4: {
            active: false,
            title:"Top Floor",
            climate:"zone 4"
        },
        location_5: {
            active: false,
            title:"West Rooms",
            climate:"zone 5"
        },
        location_6: {
            active: false,
            title:"null",
            climate:"null"
        },
        location_7: {
            active: false,
            title:"null",
            climate:"null"
        },
        location_8: {
            active: false,
            title:"null",
            climate:"null"
        },
    })


    const activeLocations = Object.values(zone).filter(location => location.active);


    const floorSelection = (locationId: keyof typeof zone) => {
        setZone((prevZone) => {
          // Create a copy of the entire state
          const newZone = { ...prevZone };
      
          // Set all locations to inactive
          Object.keys(newZone).forEach((key) => {
            newZone[key as keyof typeof zone].active = false;
          });
      
          // Now activate just the clicked location
          newZone[locationId].active = true;
      
          return newZone;
        });
      };


    
    let climateDisplay 



  if(activeLocations[0].climate === "zone 1"){
    climateDisplay = < Thermostat1/>
    console.log("zone 1 active")
  } else if(activeLocations[0].climate === "zone 2"){
    climateDisplay = < Thermostat2/>
    console.log("zone 2 active")
  } else if(activeLocations[0].climate === "zone 3"){
    climateDisplay = < Thermostat3/>
    console.log("zone 3 active")
  } else if(activeLocations[0].climate === "zone 4"){
    climateDisplay = < Thermostat4/>
    console.log("zone 4 active")
  } else if(activeLocations[0].climate === "zone 5"){
    climateDisplay = < Thermostat5/>
    console.log("zone 5 active")
  }



  


    return(


     


     


     
            <div className="climate_page">






    <div className="nav_container">
            <Link to={"/"}> 
                <button className="back_button">
                    <img src={menu_button}/>
                </button>
            </Link>

        <div className="nav">
                <button className={zone.location_1.active ? "btn_selected" : 'btn_not_selected'} id={zone.location_1.title === "null"? "display_none":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_1")}> <p>{zone.location_1.title}  </p> </button>
                <button className={zone.location_2.active ? "btn_selected" : 'btn_not_selected'} id={zone.location_2.title === "null"? "display_none":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_2")}> <p>{zone.location_2.title}  </p> </button>
                <button className={zone.location_3.active ? "btn_selected" : 'btn_not_selected'} id={zone.location_3.title === "null"? "display_none":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_3")}> <p>{zone.location_3.title}  </p> </button>
                <button className={zone.location_4.active ? "btn_selected" : 'btn_not_selected'} id={zone.location_4.title === "null"? "display_none":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_4")}> <p>{zone.location_4.title}  </p> </button>
                <button className={zone.location_5.active ? "btn_selected" : 'btn_not_selected'} id={zone.location_5.title === "null"? "display_none":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_5")}> <p>{zone.location_5.title}  </p> </button>
                <button className={zone.location_6.active ? "btn_selected" : 'btn_not_selected'} id={zone.location_6.title === "null"? "display_none":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_6")}> <p>{zone.location_6.title}  </p> </button>
                <button className={zone.location_7.active ? "btn_selected" : 'btn_not_selected'} id={zone.location_7.title === "null"? "display_none":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_7")}> <p>{zone.location_7.title}  </p> </button>
                <button className={zone.location_8.active ? "btn_selected" : 'btn_not_selected'} id={zone.location_8.title === "null"? "display_none":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_8")}> <p>{zone.location_8.title}  </p> </button>
        </div>
           

        <div className="nav_clock">
            <Clock />
        </div>


      

       </div>



                <h1 className="title_info"> Climate - {activeLocations[0].title} </h1>


                <div className="climate_dashboard_container">
                  <div className="containment">
                    {climateDisplay}
                  </div>
                </div>
                
                  


                    

                    
                 
            </div>
       

       

        
    )
}

export default ClimateDashboard