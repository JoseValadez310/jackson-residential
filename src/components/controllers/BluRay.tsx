// React 
import { useState, useEffect } from "react"

//CSS
import "../../assets/css/page_css/genericRoom.css"
import "../../assets/css/controllers/bluRay.css"

//Icons 
import center      from "../../assets/images/icons/icons8-initial-state.svg"
import arrow       from "../../assets/images/icons/icons8-slide-up.svg"

import scan        from "../../assets/images/icons/icons8-end.svg"
import stop        from "../../assets/images/icons/icons8-stop.svg"
import skip        from "../../assets/images/icons/icons8-fast-forward.svg"
import pause       from "../../assets/images/icons/icons8-pause.svg"
import play        from "../../assets/images/icons/icons8-play.svg"

import controller from "../../assets/images/icons/icons8-remote-control.svg"
import dvr        from "../../assets/images/icons/DVR.svg"






const BluRay = () => {


    const [currentTab, setCurrentTab] = useState(2)

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



    // -------------------------------------------------------------------------------------- controller sections

    const section_one   = (<> 
        <div className="bluRay_controller_movement">
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
        <div className="bluRay_controller_controls">

            <button className="btn_circle" onTouchEnd={() => bluRayTransports("skip-")}>
                <img className="btn_image" id="flip" src={scan} alt="" />
            </button>

            <button className="btn_circle"  onTouchEnd={() => bluRayTransports("stop")}>
                <img className="btn_image" src={stop} alt="" />
            </button>

            <button className="btn_circle"  onTouchEnd={() => bluRayTransports("skip+")}>
                <img className="btn_image" src={scan} alt="" />
            </button>

            <button className="btn_circle" onTouchEnd={() => bluRayTransports("scan-")}>
                <img className="btn_image"  id="flip"  src={skip} alt="" />
            </button>

            <button className="btn_circle"  onTouchEnd={() => bluRayTransports("play")}>
                <img className="btn_image" src={play} alt="" />
            </button>

            <button className="btn_circle" onTouchEnd={() => bluRayTransports("scan+")}>
                <img className="btn_image" src={skip} alt="" />
            </button>

            <button className="btn_circle" onTouchEnd={() => bluRayTransports("audio")}>
                <p> Audio </p>
            </button>

            <button className="btn_circle" onTouchEnd={() => bluRayTransports("pause")}>
                <img className="btn_image" src={pause} alt="" />
            </button>

            <button className="btn_circle" onTouchEnd={() => bluRayTransports("subtitle")}>
                <p> Subtitle </p>
            </button>



        </div>
    </>)

    const section_three = (<> 
        <div className="bluRay_controller_controls_2">

            <button className="btn_circle" onTouchEnd={() => bluRayTransports("home")}>
                <p> Home </p>
            </button>

            <button className="btn_circle" onTouchEnd={() => bluRayTransports("popup_menu")}>
                <p> PopUp Menu </p>
            </button>

            <button className="btn_circle" onTouchEnd={() => bluRayTransports("top_menu")}>
                <p> Top Menu </p>
            </button>

            <button className="btn_circle" id="transport_hide">

            </button>

            <button className="btn_circle" onTouchEnd={() => bluRayTransports("return")}>
                <p> Return </p>
            </button>

            <div className="RGYB_button"> 

            <button className="small_btn_circle" id="button_red"    onTouchEnd={() => bluRayTransports("small_red")}>  
            R  
            </button>

            <button className="small_btn_circle" id="button_green"  onTouchEnd={() => bluRayTransports("small_green")}> 
            G
            </button>

            <button className="small_btn_circle" id="button_yellow" onTouchEnd={() => bluRayTransports("small_yellow")}> 
            Y
            </button>

            <button className="small_btn_circle" id="button_blue"   onTouchEnd={() => bluRayTransports("small_blue")}> 
            B
            </button>

            </div>
        </div>
    </>)


    const mobile_section_one = (
        <>
            <div className="bluRay_controller_movement">
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

                    <button className="btn_circle" onTouchEnd={() => bluRayTransports("skip-")}>
                        <img className="btn_image" id="flip" src={scan} alt="" />
                    </button>

                    <button className="btn_circle" onTouchEnd={() => bluRayTransports("scan-")}>
                        <img className="btn_image"  id="flip"  src={skip} alt="" />
                    </button>

                    <button className="btn_circle" onTouchEnd={() => bluRayTransports("scan+")}>
                        <img className="btn_image" src={skip} alt="" />
                    </button>

                    <button className="btn_circle"  onTouchEnd={() => bluRayTransports("skip+")}>
                        <img className="btn_image" src={scan} alt="" />
                    </button>

                   

                </div>

              
                <div className="bottom_row_2_controller"> 

                    <button className="btn_circle" onTouchEnd={() => bluRayTransports("audio")}>
                        <p> Audio </p>
                    </button>

                    <button className="btn_circle" onTouchEnd={() => bluRayTransports("pause")}>
                        <img className="btn_image" src={pause} alt="" />
                    </button>

                    <button className="btn_circle"  onTouchEnd={() => bluRayTransports("play")}>
                        <img className="btn_image" src={play} alt="" />
                    </button>

                    <button className="btn_circle" onTouchEnd={() => bluRayTransports("subtitle")}>
                        <p> Subtitle </p>
                    </button>

                   
                </div>
        
            </div>
        </>
    )

    const mobile_section_two = (

   
        <>
            <div className="bluRay_controller_controls_2">

            <button className="btn_circle" onTouchEnd={() => bluRayTransports("home")}>
                <p> Home </p>
            </button>

            <button className="btn_circle" onTouchEnd={() => bluRayTransports("popup_menu")}>
                <p> PopUp Menu </p>
            </button>

            <button className="btn_circle" onTouchEnd={() => bluRayTransports("top_menu")}>
                <p> Top Menu </p>
            </button>

            <button className="btn_circle"  onTouchEnd={() => bluRayTransports("stop")}>
                <img className="btn_image" src={stop} alt="" />
            </button>

            <button className="btn_circle" id="transport_hide">
            </button>

            <button className="btn_circle" onTouchEnd={() => bluRayTransports("return")}>
                <p> Return </p>
            </button>

                <div className="RGYB_button"> 

                <button className="small_btn_circle" id="button_red"    onTouchEnd={() => bluRayTransports("small_red")}>  
                R  
                </button>

                <button className="small_btn_circle" id="button_green"  onTouchEnd={() => bluRayTransports("small_green")}> 
                G
                </button>

                <button className="small_btn_circle" id="button_yellow" onTouchEnd={() => bluRayTransports("small_yellow")}> 
                Y
                </button>

                <button className="small_btn_circle" id="button_blue"   onTouchEnd={() => bluRayTransports("small_blue")}> 
                B
                </button>

                </div>
            </div>
        </>
    )


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


    let currentViewing 

    
    if(currentTab === 1 ){
        currentViewing = mobile_section_two
    } else  if(currentTab === 2 ){
        currentViewing = mobile_section_one
    } else  if(currentTab === 3 ){
        currentViewing = section_three
    }


    const coontrollerNav = (id:number) =>{

        if (id === 1){
            setCurrentTab(id)

        } else if (id === 2){
            setCurrentTab(id)

        } 
    }



    const tabletController = (
        <>
        
            {section_one}

            {section_two}

            {section_three}

           
        </>
        )

    const mobileController = (
        <>



       
        <div className="mobile_controller_nav">
                <button className={currentTab === 2? "btn_circle_active" : "btn_circle"} onTouchEnd={() => coontrollerNav(2)}> <img className="btn_image" src={controller}/></button>
                <button className={currentTab === 1? "btn_circle_active" : "btn_circle"} onTouchEnd={() => coontrollerNav(1)}> <img className="btn_image" style={{position:"relative",bottom:"3px"}} src={dvr}/></button>

        </div>


        <div className="currentViewing"> {currentViewing}</div>
               
      
           
         
        </>
    )
    



 







    return(
        <>
            {screenSize.width <= 500? mobileController :tabletController }
        </>
    )
}

export default BluRay