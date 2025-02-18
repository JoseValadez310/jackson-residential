//React
import { useState, useEffect } from "react"

//React Router 
import { Link } from "react-router-dom"

//CSS
import "../../assets/css/dashboard_css/PoolSpa_Dashboard.css"
import "../../assets/css/index.css"
//Icons
import menu_button from "../../assets/images/icons/icons8-arrow.svg"
import arrow from "../../assets/images/icons/icons8-triangle-arrow.svg"



const PoolSpa = () =>{


    // five buttons
    const [filter, setFilter] = useState(false)
    const [solarHeat, setSolarHeat] = useState(false)
    const [solarHeatPref, setSolarHeatPref] = useState(false)
    const [spaJets, setSpaJets] = useState(false)
    const [poolLight, setPoolLight] = useState(false)

    // Pool Buttons

    const [currentPoolTemp, setCurrentPoolTemp] = useState(0)
    const [poolSetPoint, setPoolSetPoint] = useState(0)
    const [poolHeat, setPoolHeat] = useState(false)
    const [poolMode, SetPoolMode] = useState(false)


     // Spa Buttons

     const [currentSpaTemp, setCurrentSpaTemp] = useState(0)
     const [spaSetPoint, setSpaSetPoint] = useState(0)
     const [spaHeat, setSpaHeat] = useState(false)
     const [spaMode, SetSpaMode] = useState(false)
    

     // MISC
     const [airTemp, setAirTemp] = useState(0)
     const [lockOutMode, setLockOutMode] = useState(false)

     
         useEffect(() => {
            
     
     
         
             // five middle btn 
             const filter = window.CrComLib.subscribeState("b","600",(value: boolean) => {setFilter(value);});
             const solarHeat = window.CrComLib.subscribeState("b","601",(value: boolean) => {setSolarHeat(value);});
             const solarHeatPref = window.CrComLib.subscribeState("b","602",(value: boolean) => {setSolarHeatPref(value);});
             const spaJets = window.CrComLib.subscribeState("b","603",(value: boolean) => {setSpaJets(value);});
             const poolLights = window.CrComLib.subscribeState("b","604",(value: boolean) => {setPoolLight(value);});

             // Pool Related
             const poolCurrentTemp = window.CrComLib.subscribeState("n","300",(value:number) =>{setCurrentPoolTemp(Math.round(value))})
             const poolSetPoint = window.CrComLib.subscribeState("n","301",(value:number) =>{setPoolSetPoint(value);});
             const poolHeat = window.CrComLib.subscribeState("b","606",(value: boolean) => {setPoolHeat(value);});
             const poolMode = window.CrComLib.subscribeState("b","607",(value: boolean) => {SetPoolMode(value);});

            // Spa Related
             const spaCurrentTemp = window.CrComLib.subscribeState("n","302",(value:number) =>{setCurrentSpaTemp(Math.round(value))} )
             const spaSetPoint = window.CrComLib.subscribeState("n","303",(value:number) =>{setSpaSetPoint(value)} )
             const spaHeat = window.CrComLib.subscribeState("b","611",(value: boolean) => {setSpaHeat(value);});
             const spaMode = window.CrComLib.subscribeState("b","612",(value: boolean) => {SetSpaMode(value);});

             // Air Related

             const airTemp = window.CrComLib.subscribeState("n","304",(value:number) => {setAirTemp(Math.round(value))})
             const lockOut = window.CrComLib.subscribeState("b","617",(value: boolean) => {setLockOutMode(value);});


     
             return () => {
     
                
     
                  
     
                 window.CrComLib.unsubscribeState("b","600",filter)
                 window.CrComLib.unsubscribeState("b","601",solarHeat)
                 window.CrComLib.unsubscribeState("b","602",solarHeatPref)
                 window.CrComLib.unsubscribeState("b","603",spaJets)
                 window.CrComLib.unsubscribeState("b","604",poolLights)

                 window.CrComLib.unsubscribeState("n","300",poolCurrentTemp)
                 window.CrComLib.unsubscribeState("n","302",poolSetPoint)
                 window.CrComLib.unsubscribeState("b","606",poolHeat)
                 window.CrComLib.unsubscribeState("b","607",poolMode)

                 window.CrComLib.unsubscribeState("n","302",spaCurrentTemp)
                 window.CrComLib.unsubscribeState("n","303",spaSetPoint)
                 window.CrComLib.unsubscribeState("b","611",spaHeat)
                 window.CrComLib.unsubscribeState("b","612",spaMode)

                 window.CrComLib.unsubscribeState("n","304",airTemp)
                 window.CrComLib.unsubscribeState("b","617",lockOut)




     
                 
               
                 
             }
           }, []);
     



    





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


{
    lockOutMode?
    <div className="lock_out_mode"> <h1>Service Mode Enabled</h1></div> 
    : ""

}
      
            

        <div className="pool_container">

            <p className="container_title"> Pool </p>


        <div className="current_temp">
                        <div className="current_temp_outter_circle">
                            <div className="current_temp_inner_circle" id={poolHeat? "heat_active":"" }>
                                <p className="temp_value"> {currentPoolTemp} </p>
                                <p className="temp_text"> Current Temp.</p>
                            </div>
                        </div>
                    </div>


            <div className="current_temp_wrapper">

                <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","609",true),window.CrComLib.publishEvent("b","609",false), console.log("pool down 609")}}>
                    <img className="btn_image" src={arrow} />
                </button>

                   <div className="pool_set_point">
                        <h1>{poolSetPoint}</h1>
                        <p> Pool Set Point </p>
                   </div>

                <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","608",true),window.CrComLib.publishEvent("b","608",false), console.log("pool up 608")}}>
                    <img className="btn_image" id="flip" src={arrow}  />
                </button>

           </div>

           <div className="pool_control_button">
            <button className="btn_square_wide" id = {poolHeat?"active_btn": ""} onClick={() => {window.CrComLib.publishEvent("b","606",true),window.CrComLib.publishEvent("b","606",false), console.log("pool heat 606")}}> <p>Pool Heat </p></button>
            <button className="btn_square_wide" id = {poolMode?"active_btn": ""}  onClick={() => {window.CrComLib.publishEvent("b","607",true),window.CrComLib.publishEvent("b","607",false), console.log("pool mode 607")}}> <p>Pool Mode  </p></button>
           </div>



        </div>

        <div className="button_container">


            <div className="air_temp_wrapper"><p>{airTemp}</p> <p>Air Temp.</p></div>

            <button className="btn_square_wide" id = {filter?"active_btn": ""} onClick={() => {window.CrComLib.publishEvent("b","600",true),window.CrComLib.publishEvent("b","600",false), console.log("Filter 600")}}> <p>Filter          </p></button>
            <button className="btn_square_wide" id = {solarHeat?"active_btn": ""} onClick={() => {window.CrComLib.publishEvent("b","601",true),window.CrComLib.publishEvent("b","601",false), console.log("Solar heat 601")}}> <p>Solar Heat      </p></button>
            <button className="btn_square_wide" id = {solarHeatPref?"active_btn": ""} onClick={() => {window.CrComLib.publishEvent("b","602",true),window.CrComLib.publishEvent("b","602",false), console.log("solar heat pref 602")}}> <p>Solar Heat Pref </p></button>
            <button className="btn_square_wide" id = {spaJets?"active_btn": ""} onClick={() => {window.CrComLib.publishEvent("b","603",true),window.CrComLib.publishEvent("b","603",false), console.log("spa jet 603")}}> <p>Spa Jets        </p></button>
            <button className="btn_square_wide" id = {poolLight?"active_btn": ""} onClick={() => {window.CrComLib.publishEvent("b","604",true),window.CrComLib.publishEvent("b","604",false), console.log("pool light 604")}}> <p>Pool Lights     </p></button>
        </div>

        <div className="spa_container">

            <p className="container_title"> Spa </p>
            <div className="current_temp">
                <div className="current_temp_outter_circle" id={spaHeat? "heat_active":"" }>
                    <div className="current_temp_inner_circle">
                        <p className="temp_value"> {currentSpaTemp} </p>
                        <p className="temp_text"> Current Temp.</p>
                    </div>
                </div>
            </div>


            <div className="current_temp_wrapper">

                    <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","614",true),window.CrComLib.publishEvent("b","614",false), console.log("spa temp decrease 614")}}>
                        <img className="btn_image" src={arrow} />
                    </button>

                    <div className="pool_set_point">
                            <h1> {spaSetPoint}</h1>
                            <p> Pool Set Point </p>
                    </div>

                    <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","613",true),window.CrComLib.publishEvent("b","613",false), console.log("spa temp increase 613")}}>
                        <img className="btn_image" id="flip" src={arrow} />
                    </button>

            </div>

            <div className="pool_control_button">
                <button className="btn_square_wide" id = {spaHeat?"active_btn": ""} onClick={() => {window.CrComLib.publishEvent("b","611",true),window.CrComLib.publishEvent("b","611",false), console.log("spa heat 611")}}> <p>Spa Heat   </p></button>
                <button className="btn_square_wide" id = {spaMode?"active_btn": ""} onClick={() => {window.CrComLib.publishEvent("b","612",true),window.CrComLib.publishEvent("b","612",false), console.log("spa mode 612")}}> <p>Spa Mode   </p></button>
            </div>



        </div>


      

        </div>
    )
}



export default PoolSpa