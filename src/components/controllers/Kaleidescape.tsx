// react 
import { useState,useEffect } from "react"

//CSS
import "../../assets/css/controllers/kaleidescape.css"

//Icons
import center      from "../../assets/images/icons/icons8-initial-state.svg"
import arrow       from "../../assets/images/icons/icons8-slide-up.svg"
import controller from "../../assets/images/icons/icons8-remote-control.svg"

import increment   from "../../assets/images/icons/icons8-triangle-arrow.svg"

import play        from "../../assets/images/icons/icons8-play.svg"
import skip        from "../../assets/images/icons/icons8-fast-forward.svg"
import pause       from "../../assets/images/icons/icons8-pause.svg"
import stop        from "../../assets/images/icons/icons8-stop.svg"
import scan        from "../../assets/images/icons/icons8-end.svg"




const Kaleidescape = () =>{



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
        const kaleidescapeTransports = (id:string) =>{
    

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
            
                window.CrComLib.publishEvent("b","126",true)
                window.CrComLib.publishEvent("b","126",false)
                console.log(id,"signal name 126")

            } else if( id === "pause"){

                window.CrComLib.publishEvent("b","116",true)
                window.CrComLib.publishEvent("b","116",false)
                console.log(id,"signal name 116")

            } else if(id === "subtitle"){

                window.CrComLib.publishEvent("b","127",true)
                window.CrComLib.publishEvent("b","127",false)
                console.log(id,"signal name 127")

            } else if(id === "List"){

                window.CrComLib.publishEvent("b","104",true)
                window.CrComLib.publishEvent("b","104",false)
                console.log(id,"signal name 104")
                
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

            } else if(id === "page+"){

                window.CrComLib.publishEvent("b","147",true)
                window.CrComLib.publishEvent("b","147",false)
                console.log(id,"signal name 147") 

            } else if(id === "page-"){

                window.CrComLib.publishEvent("b","148",true)
                window.CrComLib.publishEvent("b","148",false)
                console.log(id,"signal name 148") 

            }  else if(id === "Covers"){

                window.CrComLib.publishEvent("b","124",true)
                window.CrComLib.publishEvent("b","124",false)
                console.log(id,"signal name 124") 

            }  else if(id === "Collections"){

                window.CrComLib.publishEvent("b","125",true)
                window.CrComLib.publishEvent("b","125",false)
                console.log(id,"signal name 125") 

            }



            }

   
          

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
        <div className="kaleidescape_controller_movement">
                <div className="controller">
                <div className="container">
                    <div className="circle-menu">
                        
                        <div className="circle ok-outer">
                            <button className="btn_circle" style={{height:"5.75rem", width:"5.75rem"}} onTouchEnd={() => controllerClick("center")}>
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
        <div className="kaleidescape_controller_controls">

                <button className="btn_circle" id="scan1" onTouchStart={() => kaleidescapeTransports("scan-")}>
                <img className="btn_image"src={scan} id="flip"/>
                </button>

                <button className="btn_circle"  onTouchStart={() => kaleidescapeTransports("stop")}>
                <img className="btn_image"src={stop} alt="" />
                </button>

                <button className="btn_circle" id="scan2" onTouchStart={() => kaleidescapeTransports("scan+")}>
                <img className="btn_image"src={scan} alt="" />
                </button>

                <button className="btn_circle" id="skip1" onTouchStart={() => kaleidescapeTransports("skip-")}>
                <img className="btn_image"src={skip}  id="flip" />
                </button>

                <button className="btn_circle" onTouchStart={() => kaleidescapeTransports("play")}>
                <img className="btn_image"src={play} alt="" />
                </button>

                <button className="btn_circle" id="skip2" onTouchStart={() => kaleidescapeTransports("skip+")}>
                <img className="btn_image"src={skip} alt="" />
                </button>

                <button className="btn_circle" onTouchStart={() => kaleidescapeTransports("audio")}>
                <p> Audio </p>
                </button>

                <button className="btn_circle" onTouchStart={() => kaleidescapeTransports("pause")}>
                <img className="btn_image"src={pause} alt="" />
                </button>

                <button className="btn_circle" onTouchStart={() => kaleidescapeTransports("subtitle")}>
                <p> Subtitle </p>
                </button>


        </div>
    </>)

    const section_three = (<> 
        <div className="kaleidescape_controller_controls_2">

                
            <div className="channel_container">
                <button onTouchEnd={()=> kaleidescapeTransports("page-")} className="btn_circle" id="chan_down">
                        <img className="btn_image" src={increment} alt="chan down" />
                </button>

                <button className="btn_circle" id="chan_title" >
                    <h2> CH </h2>
                </button>

                <button className="btn_circle"  id="chan_up" onTouchEnd={()=> kaleidescapeTransports("page+")}>
                    <img className="btn_image" src={increment} alt="chan up"  style={{transform:"rotate(180deg)"}} />
                </button>
            </div>



            <button className="btn_circle" id = "top_menu" onTouchStart={() => kaleidescapeTransports("top_menu")}>
            <p> Menu </p> 
            </button>

            

                <button className="btn_circle" id = "home" onTouchStart={() => kaleidescapeTransports("List")}>
                <p> List </p>
                </button>


                <button className="btn_circle"  onTouchStart={() => kaleidescapeTransports("Covers")}>
                    <p> Covers </p>
                </button>

                <button className="btn_circle"  onTouchStart={() => kaleidescapeTransports("Collections")}>
                    <p> Collect.  </p>
                </button>





        </div>
    </>)


const mobile_section_one = (
    <div className="kaleid_mobile" >
        
        <div className="kaleid_controller_movement">
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
        
        </div>

        <div className="bottom_row_1_controller"> 

                <button className="btn_circle" id="scan1" onTouchStart={() => kaleidescapeTransports("scan-")}>
                <img className="btn_image"src={scan} id="flip"/>
                </button>

               
                
                <button className="btn_circle" id="skip1" onTouchStart={() => kaleidescapeTransports("skip-")}>
                <img className="btn_image"src={skip}  id="flip" />
                </button>
                <button className="btn_circle" id="skip2" onTouchStart={() => kaleidescapeTransports("skip+")}>
                <img className="btn_image"src={skip} alt="" />
                </button>

                <button className="btn_circle" id="scan2" onTouchStart={() => kaleidescapeTransports("scan+")}>
                <img className="btn_image"src={scan} alt="" />
                </button>




        </div>

        <div className="bottom_row_2_controller"> 

          
             

                <button className="btn_circle"  onTouchStart={() => kaleidescapeTransports("stop")}>
                <img className="btn_image"src={stop} alt="" />
                </button>

                <button className="btn_circle" onTouchStart={() => kaleidescapeTransports("play")}>
                <img className="btn_image"src={play} alt="" />
                </button>


                <button className="btn_circle" onTouchStart={() => kaleidescapeTransports("pause")}>
                <img className="btn_image"src={pause} alt="" />
                </button>

              

        </div>
                
    </div>
)

const mobile_section_two = (
    <>
         <div className="kaleidescape_controller_controls_2">

                
<div className="channel_container">
    <button onTouchEnd={()=> kaleidescapeTransports("page-")} className="btn_circle" id="chan_down">
            <img className="btn_image" src={increment} alt="chan down" />
    </button>

    <button className="btn_circle" id="chan_title" >
        <h2> CH </h2>
    </button>

    <button className="btn_circle"  id="chan_up" onTouchEnd={()=> kaleidescapeTransports("page+")}>
        <img className="btn_image" src={increment} alt="chan up"  style={{transform:"rotate(180deg)"}} />
    </button>
</div>



<button className="btn_circle" id = "top_menu" onTouchStart={() => kaleidescapeTransports("top_menu")}>
<p> Menu </p> 
</button>


<button className="btn_circle" onTouchStart={() => kaleidescapeTransports("audio")}>
            <p> Audio </p>
            </button>

          

            <button className="btn_circle" onTouchStart={() => kaleidescapeTransports("subtitle")}>
            <p> Subtitle </p>
            </button>

    <button className="btn_circle" id = "home" onTouchStart={() => kaleidescapeTransports("List")}>
    <p> List </p>
    </button>


    <button className="btn_circle"  onTouchStart={() => kaleidescapeTransports("Covers")}>
        <p> Covers </p>
    </button>

    <button className="btn_circle"  onTouchStart={() => kaleidescapeTransports("Collections")}>
        <p> Collect.  </p>
    </button>





        </div>
    </>
)



                            
            let currentViewing 


            if(currentTab === 1 ){
                currentViewing = mobile_section_two
            } else  if(currentTab === 2 ){
                currentViewing = mobile_section_one
            } 



            const coontrollerNav = (id:number) =>{

                if (id === 1){
                    setCurrentTab(id)
        
                } else if (id === 2){
                    setCurrentTab(id)
        
                }  else if (id === 3){
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
                        <button className={currentTab === 1? "btn_circle_active" : "btn_circle"} onTouchEnd={() => coontrollerNav(1)}> <img className="btn_image" style={{height:"75%"}} src={play}/></button>

                </div>
        
        
                <div className="currentViewing"> {currentViewing}</div>
  
                    
                </>
            )
                            
                        


    return(
        <>
            {screenSize.width <= 430? mobileController :tabletController }
        </>
    )
}


export default Kaleidescape