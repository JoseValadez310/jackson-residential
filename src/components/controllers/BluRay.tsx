//CSS
import "../../assets/css/index.css"
import "../../assets/css/controllers/bluRay.css"

//Icons 
import center      from "../../assets/images/icons/icons8-initial-state.svg"
import arrow       from "../../assets/images/icons/icons8-slide-up.svg"

import scan        from "../../assets/images/icons/icons8-end.svg"
import stop        from "../../assets/images/icons/icons8-stop.svg"
import skip        from "../../assets/images/icons/icons8-fast-forward.svg"
import pause       from "../../assets/images/icons/icons8-pause.svg"
import play        from "../../assets/images/icons/icons8-play.svg"






const BluRay = () => {

    const controllerClick = (id:string) =>{
            
        

        if(id === "top"){

            window.CrComLib.publishEvent("b","107",true)
            window.CrComLib.publishEvent("b","107",false)
            console.log("top")
        }else if(id === "bottom"){

            window.CrComLib.publishEvent("b","108",true)
            window.CrComLib.publishEvent("b","108",false)
            console.log("bottom")


        }else if( id === "left"){

            window.CrComLib.publishEvent("b","109",true)
            window.CrComLib.publishEvent("b","109",false)
            console.log("left")


        }else if( id === "right"){

            window.CrComLib.publishEvent("b","110",true)
            window.CrComLib.publishEvent("b","110",false)
            console.log("right")


        } else  if(id === "center"){

            window.CrComLib.publishEvent("b","111",true)
            window.CrComLib.publishEvent("b","111",false)
            console.log("center")

        }

        }
    const bluRayTransports = (id:string) =>{


        if(id === "scan-"){

            window.CrComLib.publishEvent("b","119",true)
            window.CrComLib.publishEvent("b","119",false)
                console.log(id,"signal name 119")

        } else if(id === "stop"){
            
            window.CrComLib.publishEvent("b","117",true)
            window.CrComLib.publishEvent("b","117",false)
                console.log(id,"signal name 117")
            
        } else if( id === "scan+"){

            window.CrComLib.publishEvent("b","118",true)
            window.CrComLib.publishEvent("b","118",false)
                console.log(id,"signal name 118")

        } else if( id === "skip-"){

            window.CrComLib.publishEvent("b","121",true)
            window.CrComLib.publishEvent("b","121",false)
                console.log(id,"signal name 121")
            

        } else if(id === "play"){

            window.CrComLib.publishEvent("b","115",true)
            window.CrComLib.publishEvent("b","115",false)
                console.log(id,"signal name 115")

        } else if(id === "skip+"){

            window.CrComLib.publishEvent("b","120",true)
            window.CrComLib.publishEvent("b","120",false)
                console.log(id,"signal name 121")
            
        } else if( id === "audio"){
            
            window.CrComLib.publishEvent("b","172",true)
            window.CrComLib.publishEvent("b","172",false)
                console.log(id,"signal name 172")

        } else if( id === "pause"){

            window.CrComLib.publishEvent("b","116",true)
            window.CrComLib.publishEvent("b","116",false)
                console.log(id,"signal name 116")

        } else if(id === "subtitle"){

            window.CrComLib.publishEvent("b","173",true)
            window.CrComLib.publishEvent("b","173",false)
                console.log(id,"signal name 173")

        } else if(id === "home"){

            window.CrComLib.publishEvent("b","113",true)
            window.CrComLib.publishEvent("b","113",false)
                console.log(id,"signal name 113")
            
        } else if( id === "popup_menu"){

            window.CrComLib.publishEvent("b","104",true)
            window.CrComLib.publishEvent("b","104",false)
                console.log(id,"signal name 104")

        }  else if(id === "top_menu"){

            window.CrComLib.publishEvent("b","103",true)
            window.CrComLib.publishEvent("b","103",false)
                console.log(id,"signal name 103")
            
        } else if( id === "return"){

            window.CrComLib.publishEvent("b","112",true)
            window.CrComLib.publishEvent("b","112",false)
                console.log(id,"signal name 112")

        } else if( id === "small_red"){

            window.CrComLib.publishEvent("b","124",true)
            window.CrComLib.publishEvent("b","124",false)
                console.log(id,"signal name 124")

        } else if(id === "small_green"){

            window.CrComLib.publishEvent("b","125",true)
            window.CrComLib.publishEvent("b","125",false)
                console.log(id,"signal name 125")

        } else if( id === "small_yellow"){

            window.CrComLib.publishEvent("b","126",true)
            window.CrComLib.publishEvent("b","126",false)
                console.log(id,"signal name 126")

        } else if(id === "small_blue"){

            window.CrComLib.publishEvent("b","127",true)
            window.CrComLib.publishEvent("b","127",false)
                console.log(id,"signal name 127")

    }

    }

    return(
        <>
            <div className="bluRay_controller_movement">
                <div className="controller">
                            <div className="container">
                                <div className="circle-menu">
                                    
                                    <div className="circle ok-outer">
                                        <button className="btn_circle" style={{height:"5.75rem", width:"5.75rem"}} onClick={() => controllerClick("center")}>
                                            <img src={center} style={{height:"85%"}} className="center"/>
                                        </button>
                                    </div>

                                    <div className="control-icon right" >
                                        <button className="btn_circle" onClick={() => controllerClick("right")}>
                                            <img className="btn_image" src={arrow} style={{filter:'invert(0)', transform:"rotate(90deg)",height:"75%"}}/>
                                        </button> 
                                    </div>

                                    <div className="control-icon bottom">
                                        <button className="btn_circle" onClick={() => controllerClick("bottom")}>
                                            <img className="btn_image" src={arrow} style={{filter:'invert(0)', transform:"rotate(180deg)",height:"75%"}}/>
                                        </button>
                                    </div>

                                    <div className="control-icon left">
                                        <button className="btn_circle" onClick={() => controllerClick("left")}>
                                            <img className="btn_image" src={arrow} style={{filter:'invert(0)', transform:"rotate(270deg)",height:"75%"}}/>
                                        </button>
                                    </div>

                                    <div className="control-icon top">
                                        <button className="btn_circle" onClick={() => controllerClick("top")}>
                                            <img className="btn_image" src={arrow} style={{filter:'invert(0)', height:"75%"}}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                </div>     
            </div>

            <div className="bluRay_controller_controls">

                <button className="btn_circle" onClick={() => bluRayTransports("scan-")}>
                    <img className="btn_image" id="flip" src={scan} alt="" />
                </button>

                <button className="btn_circle"  onClick={() => bluRayTransports("stop")}>
                    <img className="btn_image" src={stop} alt="" />
                </button>

                <button className="btn_circle"  onClick={() => bluRayTransports("scan+")}>
                    <img className="btn_image" src={scan} alt="" />
                </button>

                <button className="btn_circle" onClick={() => bluRayTransports("skip-")}>
                    <img className="btn_image"  id="flip"  src={skip} alt="" />
                </button>

                <button className="btn_circle"  onClick={() => bluRayTransports("play")}>
                    <img className="btn_image" src={play} alt="" />
                </button>

                <button className="btn_circle" onClick={() => bluRayTransports("skip+")}>
                    <img className="btn_image" src={skip} alt="" />
                </button>

                <button className="btn_circle" onClick={() => bluRayTransports("audio")}>
                    <p> Audio </p>
                </button>

                <button className="btn_circle" onClick={() => bluRayTransports("pause")}>
                    <img className="btn_image" src={pause} alt="" />
                </button>

                <button className="btn_circle" onClick={() => bluRayTransports("subtitle")}>
                    <p> Subtitle </p>
                </button>
            </div>

            <div className="bluRay_controller_controls_2">

                <button className="btn_circle" onClick={() => bluRayTransports("home")}>
                    <p> Home </p>
                </button>

                <button className="btn_circle" onClick={() => bluRayTransports("popup_menu")}>
                    <p> PopUp Menu </p>
                </button>

                <button className="btn_circle" onClick={() => bluRayTransports("top_menu")}>
                    <p> Top Menu </p>
                </button>

                <button className="btn_circle" id="transport_hide">

                </button>

                <button className="btn_circle" onClick={() => bluRayTransports("return")}>
                    <p> Return </p>
                </button>

                <div className="RGYB_button"> 

        <button className="small_btn_circle" id="button_red"    onClick={() => bluRayTransports("small_red")}>  
            R  
        </button>

        <button className="small_btn_circle" id="button_green"  onClick={() => bluRayTransports("small_green")}> 
            G
        </button>

        <button className="small_btn_circle" id="button_yellow" onClick={() => bluRayTransports("small_yellow")}> 
            Y
        </button>

        <button className="small_btn_circle" id="button_blue"   onClick={() => bluRayTransports("small_blue")}> 
            B
        </button>

                </div>
            </div>



        </>
    )
}

export default BluRay