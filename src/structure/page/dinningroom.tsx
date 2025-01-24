
// React 
import { useEffect, useState } from "react"

// React Router DOM
import { Link } from "react-router-dom"

//Controller


// Music Page import 

//CSS for Controllers

import "../../assets/css/page_css/genericRoom.css"
import "../../assets/css/page_css/lightingLayout.css"
import "../../assets/css/page_css/roomLayout.css"
import "../../assets/css/page_css/sourceLayout.css"



// Componenets 



// General Icons
import lights      from "../../assets/images/icons/noun-light-bulb-2216273.svg"
import menu_button from "../../assets/images/icons/icons8-arrow.svg"


// Light SVGs
import lightOn from "../../assets/images/icons/icons8-light-on.svg"
import lightOff from "../../assets/images/icons/icons8-light-off.svg"
import Clock from "../../components/Clock"

const DinningRoom = () =>{
/*
---------------------------------------------------------------------------- Basic information regarding the page
*/
    const roomName = "Dinning Room"
/*
---------------------------------------------------------------------------- Room dashboard apps 
*/
 
    const lightsOption:boolean = true

    const light_1_join = "278"
    const light_2_join = "279"
    const light_3_join = "280"
    const light_4_join = "281"
    const light_5_join = "282"
    const light_6_join = ""
    const light_7_join = ""
    const light_8_join = ""


    const light_1_name:string = "Down Light"
    const light_2_name:string = "Chandelier"
    const light_3_name:string = "Cabinet"
    const light_4_name:string = "Butler Sink"
    const light_5_name:string = "Dine Hall"

    const light_6_name:string = "null"
    const light_7_name:string = "null"
    const light_8_name:string = "null"
   
    const [light_1, setLight_1] = useState(false)
    const [light_2, setLight_2] = useState(false)
    const [light_3, setLight_3] = useState(false)
    const [light_4, setLight_4] = useState(false)
    const [light_5, setLight_5] = useState(false)

    const [light_6, setLight_6] = useState(false)
    const [light_7, setLight_7] = useState(false)
    const [light_8, setLight_8] = useState(false)

    console.log(light_6_name,light_7_name,light_8_name)






// console.log 



/*
----------------------------------------------------------------------------------------------------------------------------------------
*/

    useEffect(() => {
       


    
        // Lights

        const light_1 = window.CrComLib.subscribeState("b",`${light_1_join}`,(value: boolean) => {setLight_1(value);});
        const light_2 = window.CrComLib.subscribeState("b",`${light_2_join}`,(value: boolean) => {setLight_2(value);});
        const light_3 = window.CrComLib.subscribeState("b",`${light_3_join}`,(value: boolean) => {setLight_3(value);});
        const light_4 = window.CrComLib.subscribeState("b",`${light_4_join}`,(value: boolean) => {setLight_4(value);});
        const light_5 = window.CrComLib.subscribeState("b",`${light_5_join}`,(value: boolean) => {setLight_5(value);});
  

        return () => {

           

            // lights 

            window.CrComLib.unsubscribeState("b",`${light_1_join}`,light_1)
            window.CrComLib.unsubscribeState("b",`${light_2_join}`,light_2)
            window.CrComLib.unsubscribeState("b",`${light_3_join}`,light_3)
            window.CrComLib.unsubscribeState("b",`${light_4_join}`,light_4)
            window.CrComLib.unsubscribeState("b",`${light_5_join}`,light_5)

            
          
            
        }
      }, []);


/*
---------------------------------------------------------------------------- Light section  
*/

const sliderValue = (value: boolean, id: string) => {
    
    console.log(value)

     if(id === "light_1"){

        // not needed during deployment
        if(light_1){
            setLight_1(false);
        } else {
            setLight_1(true);

        }

            
        // some crestron commands
        window.CrComLib.publishEvent("b",`${light_1_join}`,true)
        window.CrComLib.publishEvent("b",`${light_1_join}`,false)

        console.log("sending join", light_1_join)
      
     } else if (id === "light_2"){
           // not needed during deployment
           if(light_2){
            setLight_2(false);
        } else {
            setLight_2(true);

        }

            
        // some crestron commands
        window.CrComLib.publishEvent("b",`${light_2_join}`,true)
        window.CrComLib.publishEvent("b",`${light_2_join}`,false)

        console.log("sending join", light_2_join)
     } else if (id === "light_3"){
             // not needed during deployment
            light_3? setLight_3(false) : setLight_3(true)
    
                
            // some crestron commands
            window.CrComLib.publishEvent("b",`${light_3_join}`,true)
            window.CrComLib.publishEvent("b",`${light_3_join}`,false)
    
            console.log("sending join", light_3_join)
     } else if (id === "light_4"){
             // not needed during deployment
             light_4? setLight_4(false) : setLight_4(true)
    
    
                
            // some crestron commands
            window.CrComLib.publishEvent("b",`${light_4_join}`,true)
            window.CrComLib.publishEvent("b",`${light_4_join}`,false)
    
            console.log("sending join", light_4_join)
     } else if (id === "light_5"){
             // not needed during deployment
             light_5? setLight_5(false) : setLight_5(true)
    
            
    
                
            // some crestron commands
            window.CrComLib.publishEvent("b",`${light_5_join}`,true)
            window.CrComLib.publishEvent("b",`${light_5_join}`,false)
    
            console.log("sending join", light_5_join)
     } else if (id === "light_6"){
            // not needed during deployment
            light_6? setLight_6(false) : setLight_6(true)
    
    
                
            // some crestron commands
            window.CrComLib.publishEvent("b",`${light_6_join}`,true)
            window.CrComLib.publishEvent("b",`${light_6_join}`,false)
    
            console.log("sending join", light_6_join)
     } else if (id === "light_7"){
              // not needed during deployment
              light_7? setLight_7(false) : setLight_7(true)
    
    
                
            // some crestron commands
            window.CrComLib.publishEvent("b",`${light_7_join}`,true)
            window.CrComLib.publishEvent("b",`${light_7_join}`,false)
    
            console.log("sending join", light_7_join)
     } else if (id === "light_8"){
              // not needed during deployment
              light_8? setLight_8(false) : setLight_8(true)
    
    
            // some crestron commands
            window.CrComLib.publishEvent("b",`${light_8_join}`,true)
            window.CrComLib.publishEvent("b",`${light_8_join}`,false)
    
            console.log("sending join", light_8_join)
     }
    }

    


      
       
    return (

        <div className="generic_room">


       <div className="nav_container">

            <Link to={"/RoomsDashboard"}> 
                <button className="back_button" >
                    <img src={menu_button}/>
                </button>
            </Link>  
        

            <div className="nav">
                    <button  className={lightsOption? "btn_selected" : "btn_not_selected"}>  <img src={lights} style={{height:"50%"}} /> </button>
            </div>
            

            <div className="nav_clock">
                <Clock />
            </div>

       </div>

       

           



         
           
            
         


            <h1 className="title_info"> {roomName}</h1>



     
        
                   






                

                    <div className={lightsOption? "lights_app" : "media_off"} >

                        <div className="light_container">
                            
                            
                            
                            
                            <div className="light_tile" id={light_1? 'card_glow':''}>
                                <div className="light_info">
                                    <p className="light_value">{light_1? <span className="sub_text">On</span>: <span className="sub_text">Off</span>} </p>
                                    <p className="light_name">{light_1_name}</p>
                                </div>
                                                
                                <div className="light_controls">
                                    <button className="btn_circle"  id={light_1? "" : "light_btn_off"}  onClick={() => sliderValue(true,"light_1")}>
                                        <img className="btn_image" src={lightOff} />
                                    </button>
                                       
                                    <button className="btn_circle" id={light_1 ? "light_btn_on" : ""}>
                                        <img className="btn_image" src={lightOn} onClick={() => sliderValue(true,"light_1")}/>
                                    </button>

                                </div>
                            </div>

                            <div className="light_tile" id={light_2? 'card_glow':''}>
                                <div className="light_info">
                                    <p className="light_value">{light_2? <span className="sub_text">On</span>: <span className="sub_text">Off</span>} </p>
                                    <p className="light_name">{light_2_name}</p>
                                </div>
                                                
                                <div className="light_controls">
                                    <button className="btn_circle"  id={light_2? "" : "light_btn_off"}  onClick={() => sliderValue(true,"light_2")}>
                                        <img className="btn_image" src={lightOff} />
                                    </button>
                                       
                                    <button className="btn_circle" id={light_2 ? "light_btn_on" : ""}>
                                        <img className="btn_image" src={lightOn} onClick={() => sliderValue(true,"light_2")}/>
                                    </button>

                                </div>
                            </div>

                            <div className="light_tile" id={light_3? 'card_glow':''}>
                                <div className="light_info">
                                    <p className="light_value">{light_3? <span className="sub_text">On</span>: <span className="sub_text">Off</span>} </p>
                                    <p className="light_name">{light_3_name}</p>
                                </div>
                                                
                                <div className="light_controls">
                                    <button className="btn_circle"  id={light_3? "" : "light_btn_off"}  onClick={() => sliderValue(true,"light_3")}>
                                        <img className="btn_image" src={lightOff} />
                                    </button>
                                       
                                    <button className="btn_circle" id={light_3 ? "light_btn_on" : ""}>
                                        <img className="btn_image" src={lightOn} onClick={() => sliderValue(true,"light_3")}/>
                                    </button>

                                </div>
                            </div>

                            <div className="light_tile" id={light_4? 'card_glow':''}>
                                <div className="light_info">
                                    <p className="light_value">{light_4? <span className="sub_text">On</span>: <span className="sub_text">Off</span>} </p>
                                    <p className="light_name">{light_4_name}</p>
                                </div>
                                                
                                <div className="light_controls">
                                    <button className="btn_circle"  id={light_4? "" : "light_btn_off"}  onClick={() => sliderValue(true,"light_4")}>
                                        <img className="btn_image" src={lightOff} />
                                    </button>
                                       
                                    <button className="btn_circle" id={light_4 ? "light_btn_on" : ""}>
                                        <img className="btn_image" src={lightOn} onClick={() => sliderValue(true,"light_4")}/>
                                    </button>

                                </div>
                            </div>

                            <div className="light_tile" id={light_5? 'card_glow':''}>
                                <div className="light_info">
                                    <p className="light_value">{light_5? <span className="sub_text">On</span>: <span className="sub_text">Off</span>} </p>
                                    <p className="light_name">{light_5_name}</p>
                                </div>
                                                
                                <div className="light_controls">
                                    <button className="btn_circle"  id={light_5? "" : "light_btn_off"}  onClick={() => sliderValue(true,"light_5")}>
                                        <img className="btn_image" src={lightOff} />
                                    </button>
                                       
                                    <button className="btn_circle" id={light_5 ? "light_btn_on" : ""}>
                                        <img className="btn_image" src={lightOn} onClick={() => sliderValue(true,"light_5")}/>
                                    </button>

                                </div>
                            </div>

                          

                          
                        </div>

                      
                      
    

                       

                            
                    </div>

            
        </div>


    )
}



export default DinningRoom