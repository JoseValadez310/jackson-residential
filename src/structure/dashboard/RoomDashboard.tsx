// React 
import { useState } from "react"



// React Router 
import { Link } from "react-router-dom"

// CSS 
import "../../assets/css/dashboard_css/Room_Dashboard.css"
import "../../assets/css/index.css"

// icons
import menu_button from "../../assets/images/icons/icons8-arrow.svg"

// Test icons
import Audio   from "../../assets/images/icons/icons8-music.svg"
import Light   from "../../assets/images/icons/noun-light-bulb-2216273.svg"
import Climate from "../../assets/images/icons/icons8-winter.svg"
import TV          from "../../assets/images/icons/icons8-tv.svg"
import Clock from "../../components/Clock"


type RoomObject = {
    [key: string]: string[];
  };
  
  // Then your location type might look like:
  interface LocationType {
    active: boolean;
    title: string;
    rooms: RoomObject[];
  }



const RoomsDashboard = () => {

    

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
            active: false,
            title:"Down Stairs",
            rooms:[
                {'Media Room':["media","music","light"]}, 
                {'Gym':["media","music","light"]}
            ]
        },
        location_2: {
            active: true,
            title:"Main",
            rooms:[
                {"Breakfast Nook":["media","music"]},
                {"Family Room":["media","music"]},
                {"Bar":["media","music"]},    
            ]
        },
        location_3: {
            active: false,
            title:"Up Stairs",
            rooms:[
                {"Game Room":["media","music"]},
                {"Master Bedroom":["media","music"]},
                {"Master Bathroom":["media","music"]},
                {"Office":["media","music"]},
            ]
        },
        location_4: {
            active: false,
            title:"null",
            rooms:[]
        },
        location_5: {
            active: false,
            title:"null",
            rooms:[]
        },
        location_6: {
            active: false,
            title:"null",
            rooms:[]
        },
        location_7: {
            active: false,
            title:"null",
            rooms:[]
        },
        location_8: {
            active: false,
            title:"null",
            rooms:[]
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


    



    return (
        <div className="rooms_dashboard">
       

       <div className="side_bar_nav">
            <Link to={"/"}> 
                <button className="back_button">
                    <img src={menu_button}/>
                </button>
            </Link>

        <div className="nav">
                <button className={zone.location_1.title === "null"? "display_none" : 'btn_square'} id={zone.location_1.active? "floor_selection_active":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_1")}> <p>{zone.location_1.title}  </p> </button>
                <button className={zone.location_2.title === "null"? "display_none" : 'btn_square'} id={zone.location_2.active? "floor_selection_active":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_2")}> <p>{zone.location_2.title}  </p> </button>
                <button className={zone.location_3.title === "null"? "display_none" : 'btn_square'} id={zone.location_3.active? "floor_selection_active":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_3")}> <p>{zone.location_3.title}  </p> </button>
                <button className={zone.location_4.title === "null"? "display_none" : 'btn_square'} id={zone.location_4.active? "floor_selection_active":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_4")}> <p>{zone.location_4.title}  </p> </button>
                <button className={zone.location_5.title === "null"? "display_none" : 'btn_square'} id={zone.location_5.active? "floor_selection_active":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_5")}> <p>{zone.location_5.title}  </p> </button>
                <button className={zone.location_6.title === "null"? "display_none" : 'btn_square'} id={zone.location_6.active? "floor_selection_active":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_6")}> <p>{zone.location_6.title}  </p> </button>
                <button className={zone.location_7.title === "null"? "display_none" : 'btn_square'} id={zone.location_7.active? "floor_selection_active":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_7")}> <p>{zone.location_7.title}  </p> </button>
                <button className={zone.location_8.title === "null"? "display_none" : 'btn_square'} id={zone.location_8.active? "floor_selection_active":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_8")}> <p>{zone.location_8.title}  </p> </button>
        </div>
           

        <div className="nav_clock">
            <Clock />
        </div>

       </div>

                

                <h1 className="title_info"> Room Selection</h1>




                
                <div className="display_none">
                    <button className={zone.location_1.title === "null"? "display_none" : 'display_tab'} id={zone.location_1.active? "floor_selection_active":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_1")}> <p>{zone.location_1.title}  </p> </button>
                    <button className={zone.location_2.title === "null"? "display_none" : 'display_tab'} id={zone.location_2.active? "floor_selection_active":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_2")}> <p>{zone.location_2.title}  </p> </button>
                    <button className={zone.location_3.title === "null"? "display_none" : 'display_tab'} id={zone.location_3.active? "floor_selection_active":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_3")}> <p>{zone.location_3.title}  </p> </button>
                    <button className={zone.location_4.title === "null"? "display_none" : 'display_tab'} id={zone.location_4.active? "floor_selection_active":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_4")}> <p>{zone.location_4.title}  </p> </button>
                    <button className={zone.location_5.title === "null"? "display_none" : 'display_tab'} id={zone.location_5.active? "floor_selection_active":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_5")}> <p>{zone.location_5.title}  </p> </button>
                    <button className={zone.location_6.title === "null"? "display_none" : 'display_tab'} id={zone.location_6.active? "floor_selection_active":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_6")}> <p>{zone.location_6.title}  </p> </button>
                    <button className={zone.location_7.title === "null"? "display_none" : 'display_tab'} id={zone.location_7.active? "floor_selection_active":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_7")}> <p>{zone.location_7.title}  </p> </button>
                    <button className={zone.location_8.title === "null"? "display_none" : 'display_tab'} id={zone.location_8.active? "floor_selection_active":"floor_selection_nonactive"}  onClick={()=> floorSelection("location_8")}> <p>{zone.location_8.title}  </p> </button>

                </div>


             
                {activeLocations.map((location, idx) => (
                    <div className="room_selection_options" key={idx}>
                        {location.rooms.map((roomObj, roomIdx) => {
                        // Extract the single key and its array of items
                        const roomName = Object.keys(roomObj)[0];       // e.g. "Media Room"
                        const items = roomObj[roomName];               // e.g. ["media", "music", "light"]

                        return (
                            <Link
                                to={`/${roomName.replace(/\s/g, "").toLowerCase()}`}
                                className="room_card"
                                key={roomIdx}
                            >
                            {/* Display the room name */}
                            <div className="test">
                                <p style={{fontSize:"1.25rem"}}>{roomName}</p>

                                {/* Now display the relevant icons or text for each item in `items` */}
                                <div className="icon_preview">
                                    {items.includes("media") && (
                                    <img src={TV} style={{ height: "1.25rem" }} />
                                    )}
                                    {items.includes("light") && (
                                    <img src={Light} style={{ height: "1.25rem" }} />
                                    )}
                                    {items.includes("music") && (
                                    <img src={Audio} style={{ height: "1.25rem" }} />
                                    )}
                                    {items.includes("climate") && (
                                    <img src={Climate} style={{ height: "1.25rem" }} />
                                    )}
                                    {/* etc. Add any other items as needed */}
                                </div>
                            </div>
                            </Link>
                        );
                        })}
                    </div>
                    ))}

             


                    
           </div>
    )
}



export default RoomsDashboard