// React 
import { useState, useEffect } from "react"


// CSS
import"../../assets/css/controllers/appleTv.css"

//Icons

import center      from "../../assets/images/icons/icons8-initial-state.svg"
import arrow       from "../../assets/images/icons/icons8-slide-up.svg"
import skip        from "../../assets/images/icons/icons8-fast-forward.svg"
import playPause   from "../../assets/images/icons/icons8-resume-button.svg"






const AppleTv = () => {

    
        const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });
        
        const updateScreenSize = () => {
            setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
            });
        };
          
        useEffect(() => {
            window.addEventListener('resize', updateScreenSize);
            return () => window.removeEventListener('resize', updateScreenSize);
        }, []);



      
    
      
        const section_one   = (<>
            <div className="apple_tv_controller_movement">
                <div className="controller">
                    <div className="container">
                        <div className="circle-menu">
                            
                            <div className="circle ok-outer">
                                <button className="btn_circle" id="center_button" onTouchEnd={() => controllerClick("center")}>
                                    <img src={center} style={{height:"85%"}} className="center"/>
                                </button>
                            </div>

                            <div className="control-icon right" >
                                <button className="btn_circle" onTouchEnd={() => controllerClick("right")}>
                                    <img className="btn_image" src={arrow} style={{filter:'invert(0)', transform:"rotate(90deg)",height:"75%"}}/>
                                </button> 
                            </div>

                            <div className="control-icon bottom">
                                <button className="btn_circle" onTouchEnd={() => controllerClick("bottom")}>
                                    <img className="btn_image" src={arrow} style={{filter:'invert(0)', transform:"rotate(180deg)",height:"75%"}}/>
                                </button>
                            </div>

                            <div className="control-icon left">
                                <button className="btn_circle" onTouchEnd={() => controllerClick("left")}>
                                    <img className="btn_image" src={arrow} style={{filter:'invert(0)', transform:"rotate(270deg)",height:"75%"}}/>
                                </button>
                            </div>

                            <div className="control-icon top">
                                <button className="btn_circle" onTouchEnd={() => controllerClick("top")}>
                                    <img className="btn_image" src={arrow} style={{filter:'invert(0)', height:"75%"}}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </>)



        const section_two   = (<>
            <div className="apple_tv_controller_controls">
                <div className="side_controls_grid" style={{zIndex:'1'}}>

                    <div className="slot_1a">
                        <button className="btn_circle"  onTouchEnd={() => appleTvTransports("skip-")}>
                            <img className ="btn_image" src={skip} id="flip"/>
                        </button>
                    </div>
            
                    <div className="slot_2a">

                    </div>
                    
                    <div className="slot_3a">
                        <button className="btn_circle"  onTouchEnd={() => appleTvTransports("skip+")}>
                            <img className ="btn_image" src={skip} />
                        </button>
                    </div>

                    <div className="slot_1b"> 

                    </div>

                    <div className="slot_2b" >
                        <button className="btn_circle" onTouchEnd={() => appleTvTransports("playPause")}>
                            <img className ="btn_image"src={playPause} />
                        </button>
                    </div>

                    <div className="slot_3b">

                    </div>

                    <div className="slot_1c">
                        <button className="btn_circle" onTouchEnd={() => appleTvTransports("Menu")}>
                            <p> MENU </p>
                        </button>
                    </div>

                    <div className="slot_2c">
                        
                    </div>

                    <div className="slot_3c">
                        <button className="btn_circle" onTouchEnd={() => appleTvTransports("Home")}>
                            <p> HOME </p>
                        </button>
                    </div>

                </div>
            </div>
        </>)



        const mobile_controlller = (<>
        
            <div className="apple_tv_controller_movement">
                <div className="controller">
                    <div className="container">
                        <div className="circle-menu">
                            
                            <div className="circle ok-outer">
                            <button className="btn_circle" style={{height:"5rem", width:"5rem"}} onTouchEnd={() => controllerClick("center")}>
                                        <img src={center} style={{height:"90%"}} className="center"/>
                                    </button>
                            </div>

                            <div className="control-icon right" >
                                <button className="btn_circle" onTouchEnd={() => controllerClick("right")}>
                                    <img className="btn_image" src={arrow} style={{filter:'invert(0)', transform:"rotate(90deg)",height:"85%"}}/>
                                </button> 
                            </div>

                            <div className="control-icon bottom">
                                <button className="btn_circle" onTouchEnd={() => controllerClick("bottom")}>
                                    <img className="btn_image" src={arrow} style={{filter:'invert(0)', transform:"rotate(180deg)",height:"85%"}}/>
                                </button>
                            </div>

                            <div className="control-icon left">
                                <button className="btn_circle" onTouchEnd={() => controllerClick("left")}>
                                    <img className="btn_image" src={arrow} style={{filter:'invert(0)', transform:"rotate(270deg)",height:"85%"}}/>
                                </button>
                            </div>

                            <div className="control-icon top">
                                <button className="btn_circle" onTouchEnd={() => controllerClick("top")}>
                                    <img className="btn_image" src={arrow} style={{filter:'invert(0)', height:"85%"}}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>   

               

                <div className="bottom_row_1_controller">

                <button className="btn_circle" onTouchEnd={() => appleTvTransports("Menu")}>
                            <p> Menu </p>
                        </button>

                        <button className="btn_circle" onTouchEnd={() => appleTvTransports("Home")}>
                            <p> Home </p>
                        </button>
                </div>

                <div className="bottom_row_2_controller">

                    <button className="btn_circle"  onTouchEnd={() => appleTvTransports("skip-")}>
                        <img className ="btn_image" src={skip} id="flip"/>
                    </button>

                        <button className="btn_circle" onTouchEnd={() => appleTvTransports("playPause")}>
                            <img className ="btn_image"src={playPause} />
                        </button>


                    <button className="btn_circle"  onTouchEnd={() => appleTvTransports("skip+")}>
                        <img className ="btn_image" src={skip} />
                    </button>
                </div>

            </div>
        
        
        
        </>)
      

    
       
    
    


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



    const mobileController = ( <> 
        {mobile_controlller}
    </>)
    const tabletController = ( <>
        {section_one}
        {section_two}
    </>)
      

    return(
        <>
            {screenSize.width <= 500? mobileController :tabletController }
        </>
    )
}



export default AppleTv