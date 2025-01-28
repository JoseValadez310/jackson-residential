// React 
import { useState, useEffect } from "react"

//icons
import exit from "../../assets/images/icons/icons8-x.svg"

//CSS
import "../../assets/css/componets_css/climate.css"

//icon
import arrow from "../../assets/images/icons/icons8-triangle-arrow.svg"



const Thermostat4 = () =>{
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

    // local variable joins
    const tempFB:string = "233"
    const setpointFB:string = "234"

    const systemOff:string = "447"
    const heat:string = "448"
    const cool:string = "449"
    const auto:string = "450"
    const fanAuto:string = "451"
    const FanOn:string = "452"
  
    const increaseTempSend:string = "453"
    const decreaseTempSend:string = "454"


    useEffect(() => {
        console.log("Grabbing data for thermo 4")


        const thermostatFeedback = window.CrComLib.subscribeState("n",`${tempFB}`,(value: number) => setThermostat_fb(value));
        const setPointFeedback   = window.CrComLib.subscribeState("n",`${setpointFB}`,(value: number) => setsetPoint_fb(value));

        const mode_off  = window.CrComLib.subscribeState("b",`${systemOff}`,(value: boolean) => setMode_off(value));
        const mode_heat = window.CrComLib.subscribeState("b",`${heat}`,(value: boolean) => setMode_heat(value));
        const mode_cool = window.CrComLib.subscribeState("b",`${cool}`,(value: boolean) => setMode_cool(value));
        const mode_auto = window.CrComLib.subscribeState("b",`${auto}`,(value: boolean) => setMode_auto(value));
        const fan_auto  = window.CrComLib.subscribeState("b",`${fanAuto}`,(value: boolean) => setFan_auto(value));
        const fan_on    = window.CrComLib.subscribeState("b",`${FanOn}`,(value: boolean) => setFan_on(value));

        return() =>{
            console.log("Grabbing data for thermo 4 return")

            window.CrComLib.unsubscribeState("n",`${tempFB}`,thermostatFeedback);
            window.CrComLib.unsubscribeState("n",`${setpointFB}`,setPointFeedback);
  
            window.CrComLib.unsubscribeState("b",`${systemOff}`,mode_off);
            window.CrComLib.unsubscribeState("b",`${heat}`,mode_heat);
            window.CrComLib.unsubscribeState("b",`${cool}`,mode_cool);
            window.CrComLib.unsubscribeState("b",`${auto}`,mode_auto);
            window.CrComLib.unsubscribeState("b",`${fanAuto}`,fan_auto);
            window.CrComLib.unsubscribeState("b",`${FanOn}`,fan_on);
  
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
                window.CrComLib.publishEvent('b',`${mode_off}`,true)
                window.CrComLib.publishEvent('b',`${mode_off}`,false)
       } 
       else if (controlType === "mode_heat"){
            console.log("mode_heat")
                window.CrComLib.publishEvent('b',`${mode_heat}`,true)
                window.CrComLib.publishEvent('b',`${mode_heat}`,false)

                 // fan auto 
                 window.CrComLib.publishEvent('b',`${fan_auto}`,true)
                 window.CrComLib.publishEvent('b',`${fan_auto}`,false)
       }
       else if (controlType === "mode_cool"){
            console.log("mode_cool")
                window.CrComLib.publishEvent('b',`${mode_cool}`,true)
                window.CrComLib.publishEvent('b',`${mode_cool}`,false)

               // fan auto 
               window.CrComLib.publishEvent('b',`${fan_auto}`,true)
               window.CrComLib.publishEvent('b',`${fan_auto}`,false)
       }
       else if (controlType === "mode_auto"){
            console.log("mode_auto")
                //Mode Auto 
                window.CrComLib.publishEvent('b',`${mode_auto}`,true)
                window.CrComLib.publishEvent('b',`${mode_auto}`,false)

                // fan auto 
                window.CrComLib.publishEvent('b',`${fan_auto}`,true)
                window.CrComLib.publishEvent('b',`${fan_auto}`,false)
       }
       else if (controlType === "fan_auto"){
            console.log("fan_auto")
                window.CrComLib.publishEvent('b',`${fan_auto}`,true)
                window.CrComLib.publishEvent('b',`${fan_auto}`,false)
       }
       else if (controlType === "fan_on"){
            console.log("fan_on")
                window.CrComLib.publishEvent('b',`${fan_on}`,true)
                window.CrComLib.publishEvent('b',`${fan_on}`,false)
       }
    }

    let mode_name
    let color_wheel 
    let set_point
    let fan_name
     
       
    if(mode_heat){
        mode_name   = "Heat"
        color_wheel = "outter_circle_heat"
        set_point   = "Heat To"
        
    } 
    else if(mode_cool){
        mode_name   = "Cool"
        color_wheel = "outter_circle_cool"
        set_point   = "Cool To"

    }
    else if(mode_auto){
        mode_name   = "Auto"
        color_wheel = "outter_circle_auto"
        set_point   = "Set To"

    } else if(mode_off){
        mode_name   = "Off"
        color_wheel = "outter_circle_off"
       

    } else {
        mode_name   = "Off"
        color_wheel = "outter_circle_off"
       
    }


    console.log()

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
                window.CrComLib.publishEvent('b',`${increaseTempSend}`,true)
                window.CrComLib.publishEvent('b',`${increaseTempSend}`,false)

        } 
        else if (type === "decrease"){
            console.log("decrease")
                window.CrComLib.publishEvent('b',`${decreaseTempSend}`,true)
                window.CrComLib.publishEvent('b',`${decreaseTempSend}`,false)
        }
    }



    return(
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
                                <div className="thermostat_decrease"> <button onClick = {()=>thermostatTempControl('decrease')}> <img className="btn_image" src={arrow} /> </button></div>
                                
                                <div className="thermostat_setpoint">  
                                    <div className="setpoint_container">
                                        <p className="setPoint_value">{setPoint_fb/10}°</p>
                                        <p className="setPoint_title">{set_point}</p>
                                    </div>
                                </div>

                                <div className="thermostat_increase"> <button onClick = {()=>thermostatTempControl('increase')}><img className="btn_image"  id="flip" src={arrow} /> </button></div>
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

                            <div className={mode}>
                            <div className="exit_container">
                                <button className="exit_climate_menu" onClick={() => enableModal("off")}>
                                    <img src={exit} alt="exit button" />
                                </button>
                            </div>
                            

                            <p className="modal_title"> Climate Menu </p>
                            
                                <button id= {mode_name === "Off"? "mode_off":"mode_off_gray"}              onTouchStart={()=> thermostat("mode_off")}  onTouchEnd={() => enableModal("mode")}> <p> Off  </p> </button>
                                <button className = {mode_cool? "active":"btn_circle"}  id="mode_cool"     onTouchStart={()=> thermostat("mode_cool")} onTouchEnd={() => enableModal("mode")}> <p> Cool </p> </button>
                                <button className = {mode_auto? "active":"btn_circle"}  id="mode_auto"     onTouchStart={()=> thermostat("mode_auto")} onTouchEnd={() => enableModal("mode")}> <p> Auto </p> </button>
                                <button className = {mode_heat? "active":"btn_circle"}  id="mode_heat"     onTouchStart={()=> thermostat("mode_heat")} onTouchEnd={() => enableModal("mode")}> <p> Heat </p> </button>
                                <button className = {fan_auto? "active":"btn_circle"}   id="mode_auto_fan" onTouchStart={()=> thermostat("fan_auto")} onTouchEnd={() => enableModal("mode")}> <p> Fan Auto </p> </button>
                                <button className = {fan_on? "active":"btn_circle"}     id="mode_on_fan"   onTouchStart={()=> thermostat("fan_on")}   onTouchEnd={() => enableModal("mode")}> <p> Fan On   </p> </button>      
                            </div> 
                            

                        </div>

                      
        </div>
    )
}


export default Thermostat4