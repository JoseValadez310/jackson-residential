// React 
import { useState, useEffect } from "react"


// CSS
import"../../assets/css/controllers/roku.css"

//Icons

import center      from "../../assets/images/icons/icons8-initial-state.svg"
import arrow       from "../../assets/images/icons/icons8-slide-up.svg"
import skip        from "../../assets/images/icons/icons8-fast-forward.svg"
import playPause   from "../../assets/images/icons/icons8-resume-button.svg"

import Rewind from "../../assets/images/icons/icons8-repeat.svg"

import Return from "../../assets/images/icons/icons8-return-arrow.svg"





const Roku = () => {

    
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
 
            <div className="rokuSideControl" onTouchEnd={() => roku_transports("rewind")}>
                    <button  className="btn_circle">
                        <img className="btn_image" src={Rewind}/>
                    </button>

                    <button  className="btn_circle" onTouchEnd={() => roku_transports("*")}>
                        <p> * </p>
                    </button>

                    
                    <button className="btn_circle" onTouchEnd={() => roku_transports("return")}>
                        <img src={Return} className="btn_image"/>
                    </button>

                    <button  className="btn_circle" onTouchEnd={() => roku_transports("scan-")}>
                        <img className="btn_image" id="flip" src={skip}  />
                    </button>

                    <button  className="btn_circle" onTouchEnd={() => roku_transports("play/pause")}>
                        <img className="btn_image" src={playPause}  />
                    </button>
                    
                   

                    
                    <button  className="btn_circle" onTouchEnd={() => roku_transports("scan+")}>
                        <img className="btn_image" src={skip}  />
                    </button>

                    <button style={{border:"none", backgroundColor:"transparent"}}></button>

                    

                    <button className="btn_circle" onTouchEnd={() => roku_transports("home")}>
                        <p> Home </p>
                    </button>
            </div>
               
        </>)



        const section_two   = (<>
              <div className="roku_controller_movement">
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
    
        
    const mobile_section =(<>
        <div className="roku_controller_movement">
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


                <div className="bottom_row_1_controller" >
                    <button  className="btn_circle" onTouchEnd={() => roku_transports("*")}>
                        <p> * </p>
                    </button>

                    <button className="btn_circle" onTouchEnd={() => roku_transports("home")}>
                        <p> Home </p>
                    </button>

                    <button className="btn_circle" onTouchEnd={() => roku_transports("return")}>
                        <img src={Return} className="btn_image"/>
                    </button>
                </div>

                <div className="bottom_row_2_controller">
                    <button  className="btn_circle" onTouchEnd={() => roku_transports("scan-")}>
                        <img className="btn_image" id="flip" src={skip}  />
                    </button>
                    <button  className="btn_circle">
                        <img className="btn_image" src={Rewind}/>
                    </button>
                  

                   

                      
                    <button  className="btn_circle" onTouchEnd={() => roku_transports("play/pause")}>
                        <img className="btn_image" src={playPause}  />
                    </button>

                    <button  className="btn_circle" onTouchEnd={() => roku_transports("scan+")}>
                        <img className="btn_image" src={skip}  />
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

    const roku_transports = (id:string) => {

        console.log(id)
  
        if(id === "rewind"){
          console.log(id,"121")
  
            window.CrComLib.publishEvent("b","121",true)
            window.CrComLib.publishEvent("b","121",false)
  
        }
        else if( id === "play/pause"){
          console.log(id,"125")
          
          window.CrComLib.publishEvent("b","125",true)
          window.CrComLib.publishEvent("b","125",false)
  
        }
        else if( id === "scan-"){
          console.log(id,"119")
          
          window.CrComLib.publishEvent("b","119",true)
          window.CrComLib.publishEvent("b","119",false)
  
        }
        else if( id === "scan+"){
          console.log(id,"118")
          
          window.CrComLib.publishEvent("b","118",true)
          window.CrComLib.publishEvent("b","118",false)
  
        }
        else if( id === "*"){
          console.log(id,"105")
          
          window.CrComLib.publishEvent("b","105",true)
          window.CrComLib.publishEvent("b","105",false)
  
        }
        else if( id === "home"){
          console.log(id,"103")
          
          window.CrComLib.publishEvent("b","103",true)
          window.CrComLib.publishEvent("b","103",false)
  
        }
        else if( id === "return"){
          console.log(id,"106")
          
          window.CrComLib.publishEvent("b","106",true)
          window.CrComLib.publishEvent("b","106",false)
  
        }
      }


    const mobileController = ( <> 
        {mobile_section}
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



export default Roku