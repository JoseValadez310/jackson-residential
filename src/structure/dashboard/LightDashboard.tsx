// React 
import { useState, useEffect } from "react"

// React Router
import { Link } from "react-router-dom"

//CSS 
import "../../assets/css/dashboard_css/light_dashboard.css"
import arrow from "../../assets/images/icons/icons8-chevron.svg"







//icons
import menu_button from "../../assets/images/icons/icons8-arrow.svg"

// map 

const LightDashboard = () =>{

    useEffect(() => {
        return () => { 
        }
    }, []);
    



   const [floorCount, setFloorCount] = useState(1)

    let floorName

    
    if(floorCount === 1){
        floorName ="Main Floor"
   
    } 
    else if ( floorCount === 2){
        floorName ="Second Floor"
  
    }
    
   


    const countControl = (id:string) => {
        if(id === "add"){

            if(floorCount === 2){
                setFloorCount(1)
            }
            else{
                setFloorCount(floorCount+1)
            }

        } 
                
        else if(id === "sub"){
            
            if(floorCount === 1){
                setFloorCount(2)
            }
            else{
                setFloorCount(floorCount-1)
            }
        }
    }

   








    return(

    <div className="light_dashboard">
        <div className="source_select">

            <Link to={"/"} className="back_button" style={{zIndex:"100"}}> 
                <button className="header_transport" id="menu_button">
                    <img src={menu_button} alt="" className="menu_button_svg" style={{height:"60%"}} />

                </button>
            </Link>


            <h1 className="title_info"> Light Dashboard</h1>



            <div className="map_list_container">

            <div className="light_list_header">
                        <button className="header_transport_1" onClick={()=> countControl('sub')}>
                            <img src={arrow} className ="chervon_left" />
                        </button>

                        <p style={{fontSize:"1.05rem",fontWeight:"bolder"}}>{floorName}</p> 

                        <button className="header_transport_1" onClick={()=>countControl('add')}>
                            <img src={arrow} className ="chervon_right"/>
                        </button>
             </div>

              
                  

          

              
                          

                <div className="light_map_container">


                    {floorCount === 1?
                        <img className="map_1" src={''}   />
                            :
                        <img className="map_2" src= {''} />
                    }

                    <p> {floorCount}</p>

                </div>
          





          

     

         
            </div>
        </div>
    </div>
    )

}


export default LightDashboard