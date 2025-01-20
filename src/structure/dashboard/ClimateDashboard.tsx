// React
import { useState, useEffect } from "react";

//React Router DOM
import { Link } from "react-router-dom";

//CSS
import "../../assets/css/dashboard_css/Climate_Dashboard.css"

//Icons
import arrow from "../../assets/images/icons/icons8-arrow.svg"
import exit from "../../assets/images/icons/icons8-x.svg"




const ClimateDashboard = () =>{

 
    
    const [mode,setMode] = useState("climate_modal_close")
    const [fan,setFan]   = useState("climate_modal_close")

    // thermostat
    const [thermostat_fb, setThermostat_fb] = useState(0)
    const [setPoint_fb, setsetPoint_fb]     = useState(0)

    const [mode_off,  setMode_off]  = useState(false)
    const [mode_heat, setMode_heat] = useState(false)
    const [mode_cool, setMode_cool] = useState(false)
    const [mode_auto, setMode_auto] = useState(false)

    const [fan_auto, setFan_auto]   = useState(false)
    const [fan_on,   setFan_on]     = useState(false)


    useEffect(() => {


        const thermostatFeedback = window.CrComLib.subscribeState("n","190",(value: number) => setThermostat_fb(value));
        const setPointFeedback   = window.CrComLib.subscribeState("n","191",(value: number) => setsetPoint_fb(value));

        const mode_off  = window.CrComLib.subscribeState("b","190",(value: boolean) => setMode_off(value));
        const mode_heat = window.CrComLib.subscribeState("b","191",(value: boolean) => setMode_heat(value));
        const mode_cool = window.CrComLib.subscribeState("b","192",(value: boolean) => setMode_cool(value));
        const mode_auto = window.CrComLib.subscribeState("b","193",(value: boolean) => setMode_auto(value));
        const fan_auto  = window.CrComLib.subscribeState("b","194",(value: boolean) => setFan_auto(value));
        const fan_on    = window.CrComLib.subscribeState("b","195",(value: boolean) => setFan_on(value));

        return() =>{

            window.CrComLib.unsubscribeState("n","190",thermostatFeedback);
            window.CrComLib.unsubscribeState("n","191",setPointFeedback);
  
            window.CrComLib.unsubscribeState("b","190",mode_off);
            window.CrComLib.unsubscribeState("b","191",mode_heat);
            window.CrComLib.unsubscribeState("b","192",mode_cool);
            window.CrComLib.unsubscribeState("b","193",mode_auto);
            window.CrComLib.unsubscribeState("b","194",fan_auto);
            window.CrComLib.unsubscribeState("b","195",fan_on);
  
        }
             
    },[])

    const enableModal = (type:string) => {
        
        if(type === "mode"){
            setMode("climate_modal_open")
        } else if(type === "fan"){
            setFan("climate_modal_open")
        } else if(type === "mode off"){
            setMode("climate_modal_exit")
            setTimeout(() => {
                modalModeClose()
            }, 475); 
        } else if(type === "fan off"){
            setFan("climate_modal_exit")
            setTimeout(() => {
                modalFanClose()
            }, 475); 
        } else if (type === 'off'){  
            if(mode === "climate_modal_open"){
                setMode("climate_modal_exit")
                setTimeout(() => {
                    modalModeClose()
                }, 475); 
            } else if (fan === "climate_modal_open"){
                setFan("climate_modal_exit")
            setTimeout(() => {
                modalFanClose()
            }, 475); 
            }
        }
    }

        const modalModeClose = () =>{
            setMode("climate_modal_close")
        }

        const modalFanClose = () =>{
            setFan("climate_modal_close")
        }
  
    const thermostat = (controlType:string) =>{
       if(controlType === "mode_off"){
            console.log("mode_off")
                window.CrComLib.publishEvent('b','190',true)
                window.CrComLib.publishEvent('b','190',false)
       } 
       else if (controlType === "mode_heat"){
            console.log("mode_heat")
                window.CrComLib.publishEvent('b','191',true)
                window.CrComLib.publishEvent('b','191',false)

                // fan auto 
                window.CrComLib.publishEvent('b','194',true)
                window.CrComLib.publishEvent('b','194',false)
       }
       else if (controlType === "mode_cool"){
            console.log("mode_cool")
                window.CrComLib.publishEvent('b','192',true)
                window.CrComLib.publishEvent('b','192',false)

                // fan auto 
                window.CrComLib.publishEvent('b','194',true)
                window.CrComLib.publishEvent('b','194',false)
       }
       else if (controlType === "mode_auto"){
            console.log("mode_auto")
                window.CrComLib.publishEvent('b','193',true)
                window.CrComLib.publishEvent('b','193',false)

                // fan auto 
                window.CrComLib.publishEvent('b','194',true)
                window.CrComLib.publishEvent('b','194',false)
       }
       else if (controlType === "fan_auto"){
            console.log("fan_auto")
                window.CrComLib.publishEvent('b','194',true)
                window.CrComLib.publishEvent('b','194',false)
       }
       else if (controlType === "fan_on"){
            console.log("fan_on")
                window.CrComLib.publishEvent('b','195',true)
                window.CrComLib.publishEvent('b','195',false)
       }
    }

    let mode_name
    let color_wheel 
    let set_point
    let fan_name
    let mode_temp_color
       
        if(mode_heat){
            mode_name   = "Heat"
            color_wheel = "outter_circle_heat"
            set_point   = "Heat To"
            mode_temp_color = "temp_color_heat"
        } 
        else if(mode_cool){
            mode_name   = "Cool"
            color_wheel = "outter_circle_cool"
            set_point   = "Cool To"
            mode_temp_color = "temp_color_cool"

        }
        else if(mode_auto){
            mode_name   = "Auto"
            color_wheel = "outter_circle_auto"
            set_point   = "Set To"

        } else if(mode_off){
            mode_name   = "Off"
            color_wheel = "outter_circle_off"
            set_point   = "System Off"
            mode_temp_color = "temp_color_off"

        } else {
            mode_name   = "Off"
            color_wheel = "outter_circle_off"
            set_point   = "System Off"
            mode_temp_color = "temp_color_off"
        }


        console.log(mode_temp_color)
   
        if(fan_auto){
            fan_name = "Auto"
        } 
        else if(fan_on){
            fan_name = "On"
        } else {
            fan_name = "--"
        }
    

    const thermostatTempControl = (type:string) => {
        if(type === "increase"){
            console.log("increase")
                window.CrComLib.publishEvent('b','197',true)
                window.CrComLib.publishEvent('b','197',false)

        } 
        else if (type === "decrease"){
            console.log("decrease")
                window.CrComLib.publishEvent('b','196',true)
                window.CrComLib.publishEvent('b','196',false)
        }
    }







  


    return(


     


     


     
            <div className="climate_page">


                <Link to={"/"} > 
                    <button className="back_button">
                        <img src={arrow} alt="" className="menu_button_svg" style={{height:"60%"}} />

                    </button>
                </Link>
                <h1 className="title_info"> Climate Dashboard</h1>
                    <div className="thermostat_container">
                        <div className="thermostat">
                            
                            <div className="thermostat_value" onClick={() => enableModal("off")}>                                  
                                <p> {thermostat_fb/10} </p>  
                            </div>

                            <div className="circles">
                                <div className="outter_circle" id = {color_wheel}>
                                    <div className="inner_circle"> 
                                    </div>
                                </div>
                            </div>
                                                
                            <div className="thermostat_controls">
                                <div className="thermostat_decrease"> <button onClick = {()=>thermostatTempControl('decrease')}> <p>-</p> </button></div>
                                
                                <div className="thermostat_setpoint">  
                                    <div className="setpoint_container">
                                        <p className="setPoint_value">{setPoint_fb/10}°</p>
                                        <p className="setPoint_title">{set_point}</p>
                                    </div>
                                </div>

                                <div className="thermostat_increase"> <button onClick = {()=>thermostatTempControl('increase')}> <p>+</p> </button></div>
                            </div>

                            <div className="thermostat_controls_two">
                                <div className="thermostat_mode"> 
                                    <button onClick={() => enableModal("mode")}>  
                                        <div className="thermostat_mode_container">
                                            <p className="thermostat_mode_value">{mode_name}</p>
                                            <p className="thermostat_mode_title">Mode</p>
                                        </div>
                                    </button>     
                                </div>

                                <div className="thermostat_fan_mode"> 
                                    <button onClick={() => enableModal("mode")}>  
                                        <div className="thermostat_mode_container">
                                            <p className="thermostat_mode_value">{fan_name}</p>
                                            <p className="thermostat_mode_title">Fan</p>
                                        </div>
                                    </button> 
                                </div>
                            </div>
                        

                        </div>
                    </div>

                    
                    <div className={mode}>
                        <div className="exit_container">
                            <button className="exit_climate_menu" onClick={() => enableModal("off")}>
                                <img src={exit} alt="exit button" />
                            </button>
                        </div>
                        

                        <p className="modal_title"> Climate Menu </p>
                        <button id="mode_off"  onTouchStart={()=> thermostat("mode_off")}  onTouchEnd={() => enableModal("mode off")}> <p> Off  </p> </button>
                        <button id="mode_heat" onTouchStart={()=> thermostat("mode_heat")} onTouchEnd={() => enableModal("mode off")}> <p> Heat </p> </button>
                        <button id="mode_cool" onTouchStart={()=> thermostat("mode_cool")} onTouchEnd={() => enableModal("mode off")}> <p> Cool </p> </button>
                        <button id="mode_auto" onTouchStart={()=> thermostat("mode_auto")} onTouchEnd={() => enableModal("mode off")}> <p> Auto </p> </button>
                        <button id="mode_auto_fan" onTouchStart={()=> thermostat("fan_auto")} onTouchEnd={() => enableModal("mode off")}> <p> Fan Auto </p> </button>
                        <button id="mode_on_fan"   onTouchStart={()=> thermostat("fan_on")}   onTouchEnd={() => enableModal("mode off")}> <p> Fan On   </p> </button>     
                    </div> 
            </div>
       

       

        
    )
}

export default ClimateDashboard