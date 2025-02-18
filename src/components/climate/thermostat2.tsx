// React 
import { useState, useEffect } from "react"

//icons
import exit from "../../assets/images/icons/icons8-x.svg"

//CSS
import "../../assets/css/componets_css/climate.css"
//icon
import arrow from "../../assets/images/icons/icons8-triangle-arrow.svg"



const Thermostat5 = () =>{
    const [mode,setMode] = useState("climate_modal_close")
    const [fan,setFan]   = useState("climate_modal_close")

    // thermostat
    const [thermostat_fb, setThermostat_fb] = useState(0)
    const [heat_set_point_fb, setPoint_fb_heat]     = useState(0)
    const [cool_set_point_fb, setPoint_fb_cool]     = useState(0)


    const [mode_off,  setMode_off]  = useState(false)
    const [mode_heat, setMode_heat] = useState(false)
    const [mode_cool, setMode_cool] = useState(false)
    const [mode_auto, setMode_auto] = useState(false)

    const [fan_auto, setFan_auto]   = useState(false)
    const [fan_on,   setFan_on]     = useState(false)

    // local variable joins
    const tempFB:string = "211"
    const setpointFBHeat:string = "212"
    const setpointFBCool:string = "213"

    
    const systemOff:string = "417"
    const heat:string = "418"
    const cool:string = "419"
    const auto:string = "420"
    const fanAuto:string = "421"
    const fanOn:string = "422"

    const increaseTempSend:string = "423"
    const decreaseTempSend:string = "424"


    const dualAutoHeatSpInc:string = "425"
    const dualAutoHeatSpDec:string = "426"

    const dualAutoCoolSpInc:string = "427"
    const dualAutoCoolSpDec:string = "428"



    









    useEffect(() => {

        console.log("Grabbing data for thermo 5")

        const thermostatFeedback = window.CrComLib.subscribeState("n",tempFB,(value: number) => setThermostat_fb(value));
        const setPointFeedback   = window.CrComLib.subscribeState("n",setpointFBHeat,(value: number) => setPoint_fb_heat(value));
        const setPointFeedback1   = window.CrComLib.subscribeState("n",setpointFBCool,(value: number) => setPoint_fb_cool(value));

        const mode_off  = window.CrComLib.subscribeState("b",systemOff,(value: boolean) => setMode_off(value));
        const mode_heat = window.CrComLib.subscribeState("b",heat,(value: boolean) => setMode_heat(value));
        const mode_cool = window.CrComLib.subscribeState("b",cool,(value: boolean) => setMode_cool(value));
        const mode_auto = window.CrComLib.subscribeState("b",auto,(value: boolean) => setMode_auto(value));
        const fan_auto  = window.CrComLib.subscribeState("b",fanAuto,(value: boolean) => setFan_auto(value));
        const fan_on    = window.CrComLib.subscribeState("b",fanOn,(value: boolean) => setFan_on(value));

        return() =>{
            console.log("Grabbing data for thermo 5 return")

            window.CrComLib.unsubscribeState("n",tempFB,thermostatFeedback);
            window.CrComLib.unsubscribeState("n",setpointFBHeat,setPointFeedback);
            window.CrComLib.unsubscribeState("n",setpointFBCool,setPointFeedback1);
  
            window.CrComLib.unsubscribeState("b",systemOff,mode_off);
            window.CrComLib.unsubscribeState("b",heat,mode_heat);
            window.CrComLib.unsubscribeState("b",cool,mode_cool);
            window.CrComLib.unsubscribeState("b",auto,mode_auto);
            window.CrComLib.unsubscribeState("b",fanAuto,fan_auto);
            window.CrComLib.unsubscribeState("b",fanOn,fan_on);
  
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
                window.CrComLib.publishEvent('b',systemOff,true)
                window.CrComLib.publishEvent('b',systemOff,false)
       } 
       else if (controlType === "mode_heat"){
            console.log("mode_heat")
                window.CrComLib.publishEvent('b',heat,true)
                window.CrComLib.publishEvent('b',heat,false)

                 // fan auto 
                 window.CrComLib.publishEvent('b',fan,true)
                 window.CrComLib.publishEvent('b',fan,false)
       }
       else if (controlType === "mode_cool"){
            console.log("mode_cool")
                window.CrComLib.publishEvent('b',cool,true)
                window.CrComLib.publishEvent('b',cool,false)

               // fan auto 
               window.CrComLib.publishEvent('b',fanAuto,true)
               window.CrComLib.publishEvent('b',fanAuto,false)
       }
       else if (controlType === "mode_auto"){
            console.log("mode_auto")
                //Mode Auto 
                window.CrComLib.publishEvent('b',auto,true)
                window.CrComLib.publishEvent('b',auto,false)

                // fan auto 
                window.CrComLib.publishEvent('b',fanAuto,true)
                window.CrComLib.publishEvent('b',fanAuto,false)
       }
       else if (controlType === "fan_auto"){
            console.log("fan_auto")
                window.CrComLib.publishEvent('b',fanAuto,true)
                window.CrComLib.publishEvent('b',fanAuto,false)
       }
       else if (controlType === "fan_on"){
            console.log("fan_on")
                window.CrComLib.publishEvent('b',fanOn,true)
                window.CrComLib.publishEvent('b',fanOn,false)
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


    console.log(set_point)


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
                window.CrComLib.publishEvent('b',increaseTempSend,true)
                window.CrComLib.publishEvent('b',increaseTempSend,false)

        } 
        else if (type === "decrease"){
            console.log("decrease")
                window.CrComLib.publishEvent('b',decreaseTempSend,true)
                window.CrComLib.publishEvent('b',decreaseTempSend,false)
        }
    }



    return(
        <div className="thermostat_container">
                        <div className={mode_off? "thermostat_system_off": "thermostat"} >
                            
                            <div className="thermostat_value" onClick={() => enableModal("off")}>                                  
                                <p> {thermostat_fb/10} </p>  
                            </div>

                            <div className="circles">
                                <div className="outter_circle" id = {color_wheel}>
                                    <div className="inner_circle"> 
                                    </div>
                                </div>
                            </div>
                                                
                            <div className={mode_heat?"thermostat_controls":"display_none"}>
                                <div className="thermostat_decrease"> <button onClick = {()=>thermostatTempControl('decrease')}> <img className="btn_image" src={arrow} /> </button></div>
                                
                                <div className= "thermostat_setpoint">  
                                    <div className="setpoint_container">
                                        <p className="setPoint_value">{heat_set_point_fb/10}°</p>
                                        <p className="setPoint_title">Heat To</p>
                                    </div>
                                </div>

                                

                                <div className="thermostat_increase"> <button onClick = {()=>thermostatTempControl('increase')}><img className="btn_image"  id="flip" src={arrow} /> </button></div>
                            </div>

                            <div className={mode_cool?"thermostat_controls":"display_none"}>
                                <div className="thermostat_decrease"> <button onClick = {()=>thermostatTempControl('decrease')}> <img className="btn_image" src={arrow} /> </button></div>
                                
                                <div className= "thermostat_setpoint">  
                                    <div className="setpoint_container">
                                        <p className="setPoint_value">{cool_set_point_fb/10}°</p>
                                        <p className="setPoint_title">Cool To</p>
                                    </div>
                                </div>

                                

                                <div className="thermostat_increase"> <button onClick = {()=>thermostatTempControl('increase')}><img className="btn_image"  id="flip" src={arrow} /> </button></div>
                            </div>

                            <div className={mode_auto?"thermostat_controls_duo":"display_none"}>
                            <div className="dual_mode">
                                    <div className="thermostat_decrease"> <button onClick = {()=> {window.CrComLib.publishEvent("b",dualAutoCoolSpDec,true),window.CrComLib.publishEvent("b",dualAutoCoolSpDec,false)}}> <img className="btn_image" src={arrow} /> </button></div>
                                    
                                    <div className= "thermostat_setpoint">  
                                        <div className="setpoint_container">
                                            <p className="setPoint_value">{cool_set_point_fb/10}°</p>
                                            <p className="setPoint_title">Cool To</p>
                                        </div>
                                    </div>

                                    <div className="thermostat_increase"> <button onClick = {()=> {window.CrComLib.publishEvent("b",dualAutoCoolSpInc,true),window.CrComLib.publishEvent("b",dualAutoCoolSpInc,false)}}><img className="btn_image"  id="flip" src={arrow} /> </button></div>    
                                </div>   

                                <div  className="dual_mode">
                                    <div className="thermostat_decrease"> <button onClick = {()=> {window.CrComLib.publishEvent("b",dualAutoHeatSpDec,true),window.CrComLib.publishEvent("b",dualAutoHeatSpDec,false)}}> <img className="btn_image" src={arrow} /> </button></div>
                                    
                                    <div className= "thermostat_setpoint">  
                                        <div className="setpoint_container">
                                            <p className="setPoint_value">{heat_set_point_fb/10}°</p>
                                            <p className="setPoint_title">Heat To</p>
                                        </div>
                                    </div>

                                    <div className="thermostat_increase"> <button onClick = {()=> {window.CrComLib.publishEvent("b",dualAutoHeatSpInc,true),window.CrComLib.publishEvent("b",dualAutoHeatSpInc,false)}}><img className="btn_image"  id="flip" src={arrow} /> </button></div>    
                                </div>   

                                
                               
                            </div>

                            <div className={mode_off?"thermostat_controls_system_off":"display_none"}>

                                <div className="display_none"> <button onClick = {()=>thermostatTempControl('decrease')}> <img className="btn_image" src={arrow} /> </button></div>
                                    
                                    <div className= "thermostat_setpoint">  
                                        <div className="setpoint_container">
                                
                                            <p className="setPoint_title">-- System Off --</p>
                                        </div>
                                    </div>

                                <div className="display_none"> <button onClick = {()=>thermostatTempControl('increase')}><img className="btn_image"  id="flip" src={arrow} /> </button></div>
                            </div>

                            <div className= {mode_off?"thermostat_controls_two_system_off":"thermostat_controls_two"}>
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


export default Thermostat5