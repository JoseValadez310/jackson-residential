// CSS
import "../../assets/css/index.css"
import"../../assets/css/controllers/appleTv.css"

//Icons

import center      from "../../assets/images/icons/icons8-initial-state.svg"
import arrow       from "../../assets/images/icons/icons8-slide-up.svg"
import skip        from "../../assets/images/icons/icons8-fast-forward.svg"
import playPause   from "../../assets/images/icons/icons8-resume-button.svg"




const AppleTv = () => {

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

    const appleTvTransports = (id:string) =>{
            

        if(id === "skip+"){

            window.CrComLib.publishEvent("b","120",true)
            window.CrComLib.publishEvent("b","120",false)
            console.log(id)

        }else if(id === "skip-"){

            window.CrComLib.publishEvent("b","121",true)
            window.CrComLib.publishEvent("b","121",false)
            console.log(id)
            
        }else if( id === "playPause"){

            window.CrComLib.publishEvent("b","115",true)
            window.CrComLib.publishEvent("b","115",false)
            console.log(id)


        }else if( id === "Home"){

            window.CrComLib.publishEvent("b","104",true)
            window.CrComLib.publishEvent("b","104",false)
            console.log(id)
            

        } else  if(id === "Menu"){

            window.CrComLib.publishEvent("b","103",true)
            window.CrComLib.publishEvent("b","103",false)
            console.log(id)

        }

    }
      

    return(
       <>
            <div className="apple_tv_controller_movement">
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
                                    <img src={arrow} className="arrow_right"/>
                                </button> 
                            </div>

                            <div className="control-icon bottom">
                                <button className="btn_circle" onClick={() => controllerClick("bottom")}>
                                    <img src={arrow} className="arrow_bottom"/>
                                </button>
                            </div>

                            <div className="control-icon left">
                                <button className="btn_circle" onClick={() => controllerClick("left")}>
                                    <img src={arrow} className="arrow_left"/>
                                </button>
                            </div>

                            <div className="control-icon top">
                                <button className="btn_circle" onClick={() => controllerClick("top")}>
                                    <img src={arrow} className="arrow_top"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="apple_tv_controller_controls">
                <div className="side_controls_grid" style={{zIndex:'1'}}>

                    <div className="slot_1a">
                        <button className="btn_circle"  onClick={() => appleTvTransports("skip-")}>
                            <img className ="btn_image" src={skip} id="flip"/>
                        </button>
                    </div>
            
                    <div className="slot_2a">

                    </div>
                    
                    <div className="slot_3a">
                        <button className="btn_circle"  onClick={() => appleTvTransports("skip+")}>
                            <img className ="btn_image" src={skip} />
                        </button>
                    </div>

                    <div className="slot_1b"> 

                    </div>

                    <div className="slot_2b" >
                        <button className="btn_circle" onClick={() => appleTvTransports("playPause")}>
                            <img className ="btn_image"src={playPause} />
                        </button>
                    </div>

                    <div className="slot_3b">

                    </div>

                    <div className="slot_1c">
                        <button className="btn_circle" onClick={() => appleTvTransports("Menu")}>
                            <p> MENU </p>
                        </button>
                    </div>

                    <div className="slot_2c">
                        
                    </div>

                    <div className="slot_3c">
                        <button className="btn_circle" onClick={() => appleTvTransports("Home")}>
                            <p> HOME </p>
                        </button>
                    </div>

                </div>
            </div>


            <div className="display_none">
            <div className="container">
                                                    <div className="circle-menu">
                                                        <div className="circle ok-inner">
                                                            <button className="btn_circle" onClick={() => controllerClick("center")}>
                                                                <img src={center} className="center"/>
                                                            </button>
                                                        </div>

                                                        <div className="circle ok-outer">

                                                        </div>

                                                        <div className="control-icon right" >
                                                            <button className="btn_circle" onClick={() => controllerClick("right")}>
                                                                <img src={arrow} className="arrow_right"/>
                                                            </button> 
                                                        </div>

                                                        <div className="control-icon bottom">
                                                            <button className="btn_circle" onClick={() => controllerClick("bottom")}>
                                                                <img src={arrow} className="arrow_bottom"/>
                                                            </button>
                                                        </div>

                                                        <div className="control-icon left">
                                                            <button className="btn_circle" onClick={() => controllerClick("left")}>
                                                                <img src={arrow} className="arrow_left"/>
                                                            </button>
                                                        </div>

                                                        <div className="control-icon top">
                                                            <button className="btn_circle" onClick={() => controllerClick("top")}>
                                                                <img src={arrow} className="arrow_top"/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                

                                                <div className="slot_1a">
                                                    <button className="transport_button" id="transport_flip" onClick={() => appleTvTransports("skip-")}>
                                                        <img src={skip} />
                                                    </button>
                                                </div>
                                        
                                                <div className="slot_2a">

                                                </div>
                                                
                                                <div className="slot_3a">
                                                    <button className="transport_button"  onClick={() => appleTvTransports("skip+")}>
                                                        <img src={skip} />
                                                    </button>
                                                </div>

                                                <div className="slot_1b"> 

                                                </div>

                                                <div className="slot_2b">
                                                    <button className="transport_button" onClick={() => appleTvTransports("playPause")}>
                                                        <img src={playPause} />
                                                    </button>
                                                </div>

                                                <div className="slot_3b">

                                                </div>

                                                <div className="slot_1c">
                                                    <button className="transport_button" onClick={() => appleTvTransports("Menu")}>
                                                        <p> MENU </p>
                                                    </button>
                                                </div>

                                                <div className="slot_2c">
                                                    
                                                </div>

                                                <div className="slot_3c">
                                                    <button className="transport_button" onClick={() => appleTvTransports("Home")}>
                                                        <p> HOME </p>
                                                    </button>
                                                </div>

            </div>
       
       </>
    )
}



export default AppleTv