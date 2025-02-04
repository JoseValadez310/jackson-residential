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
import { useState, useEffect } from "react"



const SecurityDashboard =()=>{

        const green  = "green_ready"
        const yellow = "yellow_stay"
        const red  = "red_armed"

        const [currentCode, setCurrentCode]         = useState("") 

        const [optionStay, setOptionStay]           = useState(false)
        const [optionAway, setOptionAway]           = useState(false)
        const [optionDisarm, setOptionDisarm]       = useState(false)
        const [optionBypassAll, setOptionBypassAll] = useState(false)

        const [indicatorReady, setIndicatorReady] = useState(false)
        const [indicatorStay,  setIndicatorStay]  = useState(false)
        const [indicatorArmed, setIndicatorArmed] = useState(false)



        
                 useEffect(() => {
                    
             
             
                 
                     // options
             
                     const optionStay = window.CrComLib.subscribeState("b","663",(value: boolean) => {setOptionStay(value);});
                     const optionAway = window.CrComLib.subscribeState("b","664",(value: boolean) => {setOptionAway(value);});
                     const optionDisarm = window.CrComLib.subscribeState("b","665",(value: boolean) => {setOptionDisarm(value);});
                     const optionBypassAll = window.CrComLib.subscribeState("b","666",(value: boolean) => {setOptionBypassAll(value);});
        
                     // indicator
                     const indicatorReady = window.CrComLib.subscribeState("b","668",(value:boolean) =>{setIndicatorReady(value)})
                     const indicatorStay = window.CrComLib.subscribeState("b","669",(value:boolean) =>{setIndicatorStay(value);});
                     const indicatorArmed = window.CrComLib.subscribeState("b","670",(value: boolean) => {setIndicatorArmed(value);});
        
                     // code input

                     const codeInput = window.CrComLib.subscribeState("s","10",(value:string) => setCurrentCode(value))
                    
             
                     return () => {
             
                        
             
                          
             
                         window.CrComLib.unsubscribeState("b","663",optionStay)
                         window.CrComLib.unsubscribeState("b","664",optionAway)
                         window.CrComLib.unsubscribeState("b","665",optionDisarm)
                         window.CrComLib.unsubscribeState("b","666",optionBypassAll)

                         window.CrComLib.unsubscribeState("b","668",indicatorReady)
                         window.CrComLib.unsubscribeState("b","669",indicatorStay)
                         window.CrComLib.unsubscribeState("b","670",indicatorArmed)
                        
                         window.CrComLib.unsubscribeState("s","10", codeInput)
        
        
        
        
             
                         
                       
                         
                     }
                   }, []);
             







console.log(green, yellow, red)

    return(
        <div className="security_dashboard">

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

                <div className="nav">
                   
                </div>
                

                <div className="display_none">
                    <Clock />
                </div>

            </div>


            <h1 className="title_info"> Security </h1>


            <div className="security_keypad_container">
                
                <div className="security_keypad_inner_contianer">

                    <div className="feedback_viewer"> 
                            <h1>  {currentCode}  </h1>
                    
                    </div>
                    <div className="keypad">
                            <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","650",true),window.CrComLib.publishEvent("b","650",false), console.log("key 1 650") }}><p className="num">1</p></button>
                            <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","651",true),window.CrComLib.publishEvent("b","651",false), console.log("key 2 651") }}><p className="num">2</p></button>
                            <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","652",true),window.CrComLib.publishEvent("b","652",false), console.log("key 3 652") }}><p className="num">3</p></button>

                            <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","653",true),window.CrComLib.publishEvent("b","653",false), console.log("key 4 653") }}><p className="num">4</p></button>
                            <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","654",true),window.CrComLib.publishEvent("b","654",false), console.log("key 5 654") }}><p className="num">5</p></button>
                            <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","655",true),window.CrComLib.publishEvent("b","655",false), console.log("key 6 655") }}><p className="num">6</p></button>

                            <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","656",true),window.CrComLib.publishEvent("b","656",false), console.log("key 7 656") }}><p className="num">7</p></button>
                            <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","657",true),window.CrComLib.publishEvent("b","657",false), console.log("key 8 657") }}><p className="num">8</p></button>
                            <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","658",true),window.CrComLib.publishEvent("b","658",false), console.log("key 9 658") }}><p className="num">9</p></button>


                            <button className="btn_circle" id="btn_active_red" onClick={() => {window.CrComLib.publishEvent("b","661",true),window.CrComLib.publishEvent("b","661",false), console.log("key clear 661") }}> <img className="btn_image" src={clear} style={{height:"60%"}}/></button>
                            <button className="btn_circle"  onClick={() => {window.CrComLib.publishEvent("b","659",true),window.CrComLib.publishEvent("b","659",false), console.log("key 0 659") }}><p className="num" >0</p></button>
                            <button className="btn_circle" id="btn_active_red" onClick={() => {window.CrComLib.publishEvent("b","660",true),window.CrComLib.publishEvent("b","660",false), console.log("key backspace") }}> <img className="btn_image" src={backspace} style={{height:"68%"}}/></button>

                          
                    </div>

                </div>

            </div>


            <div className=" control_container">
                    <button className="btn_circle" id={optionStay? "active_btn_sec":""} onClick={() => {window.CrComLib.publishEvent("b","663",true),window.CrComLib.publishEvent("b","663",false), console.log("stay 663") }}><p>Stay</p></button>
                    <button className="btn_circle" id={optionAway? "active_btn_sec":""} onClick={() => {window.CrComLib.publishEvent("b","664",true),window.CrComLib.publishEvent("b","664",false), console.log("away 664") }}><p>Away</p></button>
                    <button className="btn_circle" id={optionDisarm? "active_btn_sec":""} onClick={() => {window.CrComLib.publishEvent("b","665",true),window.CrComLib.publishEvent("b","665",false), console.log("disarm 665") }}><p>Disarm</p></button>
                    <button className="btn_circle" id={optionBypassAll? "active_btn_sec":""} onClick={() => {window.CrComLib.publishEvent("b","666",true),window.CrComLib.publishEvent("b","666",false), console.log("Bypass all 666") }}><p>Bypass All</p></button>
            </div>

            <div className=" light_indicator">
                    <button className="btn_square_wide" id={indicatorReady? "active_btn_ready":""} onClick={() => {window.CrComLib.publishEvent("b","668",true),window.CrComLib.publishEvent("b","668",false), console.log("Ready 668") }}><p>Ready</p></button>
                    <button className="btn_square_wide" id={indicatorStay? "active_btn_stay":""} onClick={() => {window.CrComLib.publishEvent("b","669",true),window.CrComLib.publishEvent("b","669",false), console.log("Stay 669") }}><p>Stay</p></button>
                    <button className="btn_square_wide" id={indicatorArmed? "active_btn_armed":""} onClick={() => {window.CrComLib.publishEvent("b","670",true),window.CrComLib.publishEvent("b","670",false), console.log("Armed 670") }}><p>Armed</p></button>
            </div>

          

        </div>
    )
}



export default SecurityDashboard
