// react 
import { useState, useEffect } from "react"
//CSS
import "../../assets/css/controllers/direcTv.css"

//Icons
import center      from "../../assets/images/icons/icons8-initial-state.svg"
import arrow       from "../../assets/images/icons/icons8-slide-up.svg"

import keypad      from "../../assets/images/icons/icons8-keypad.svg"
import favorite    from "../../assets/images/icons/icons8-add-to-favorites.svg"
import DVR         from "../../assets/images/icons/DVR.svg"

import increment   from "../../assets/images/icons/icons8-triangle-arrow.svg"
import rewind      from "../../assets/images/icons/icons8-replay.svg"
import record      from "../../assets/images/icons/icons8-record.svg"
import returnArrow      from "../../assets/images/icons/icons8-return-arrow.svg"
import play        from "../../assets/images/icons/icons8-play.svg"
import skip        from "../../assets/images/icons/icons8-fast-forward.svg"
import pause       from "../../assets/images/icons/icons8-pause.svg"
import stop        from "../../assets/images/icons/icons8-stop.svg"




import controller from "../../assets/images/icons/icons8-remote-control.svg"






const DirecTv = () =>{

    const [dtv_option_1,setdtv_option_1] = useState(true)
    const [dtv_option_2,setdtv_option_2] = useState(false)
    const [dtv_option_3,setdtv_option_3] = useState(false)


    const [currentTab, setCurrentTab] = useState(1)
    
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
            <div className="dtv_controller_controls">
                <div className="controller_nav">

                    <button onTouchEnd={()=>changedtvOptions("dtv_1")} className = {dtv_option_1? "controller_nav_1_selected" : "controller_nav_1"}>
                        <img className="btn_image" src={keypad}/>
                    </button>

                    <button onTouchEnd={()=>changedtvOptions("dtv_2")}  className = {dtv_option_2? "controller_nav_2_selected" : "controller_nav_2"}>
                        <img className="btn_image" src={DVR} id ="dvr_img"/>
                    </button>

                    <button onTouchEnd={()=>changedtvOptions("dtv_3")} className = {dtv_option_3? "display_none" : "display_none"} id="favorite_hide">
                        <img className="btn_image" src={favorite}/>
                    </button>

                </div>
                
                <div className={dtv_option_1?"show_option_1":"none_option"}>

                        <button className="btn_circle" onTouchEnd={()=> dtvTransports("key1")}>
                            <p className="key_num">1</p>
                        </button>
                        
                        <button className="btn_circle" onTouchEnd={()=> dtvTransports("key2")}>
                            <p className="key_num">2</p>
                        </button>

                        <button className="btn_circle" onTouchEnd={()=> dtvTransports("key3")}>
                            <p className="key_num">3</p>
                        </button>

                        <button className="btn_circle" onTouchEnd={()=> dtvTransports("key4")}>
                            <p className="key_num">4</p>
                        </button>
                        
                        <button className="btn_circle" onTouchEnd={()=> dtvTransports("key5")}>
                            <p className="key_num">5</p>
                        </button>

                        <button className="btn_circle" onTouchEnd={()=> dtvTransports("key6")}>
                            <p className="key_num">6</p>
                        </button>
                
                        <button className="btn_circle" onTouchEnd={()=> dtvTransports("key7")}>
                            <p className="key_num">7</p>
                        </button>
                        
                        <button className="btn_circle" onTouchEnd={()=> dtvTransports("key8")}>
                            <p className="key_num">8</p>
                        </button>

                        <button className="btn_circle" onTouchEnd={()=> dtvTransports("key9")}>
                            <p className="key_num">9</p>
                        </button>
                
                        <button className="btn_circle" id="small_text" onTouchEnd={()=> dtvTransports("dash_key")}>
                            <p>DASH</p>
                        </button>
                        
                        <button className="btn_circle"  onTouchEnd={()=> dtvTransports("key0")}>
                            <p className="key_num">0</p>
                        </button>

                        <button className="btn_circle" id="small_text" onTouchEnd={()=> dtvTransports("enter")}>
                            <p>ENTER</p>
                        </button>
                    
                
                </div>

                <div className={dtv_option_2?"show_option_2":"none_option"}>

             


                <button className="btn_circle" onTouchEnd={()=>dtvTransports("stop")}>
                        <img className="btn_image" src={stop} alt="stop btn" />
                    </button>

                    <button className="btn_circle" onTouchEnd={()=>dtvTransports("play")}>
                        <img className="btn_image" src={play} />
                    </button>

                    <button className="btn_circle" onTouchEnd={()=>dtvTransports("pause")}>
                        <img className="btn_image" src={pause} />
                    </button>

                    <button className="btn_circle" onTouchEnd={()=>dtvTransports("skip-")}>
                        <img className="btn_image" src={skip} style={{transform:"rotate(180deg)"}}/>
                    </button>

                    <button className="display_none" onTouchEnd={()=>dtvTransports("rewind")}>
                        <img className="btn_image" src={rewind} />
                    </button>

                    <button className="btn_circle" onTouchEnd={()=>dtvTransports("skip+")}>
                        <img className="btn_image" src={skip} />
                    </button>

                    <button className="btn_circle" onTouchEnd={()=>dtvTransports("back")}>
                        <img className="btn_image" src={returnArrow} />
                    </button>

                    <button className="btn_circle" id="transport_hide"onTouchEnd={()=>dtvTransports("DVR")}></button>

                    <button className="btn_circle" onTouchEnd={()=>dtvTransports("record")}>
                        <img className="btn_image" src={record} />
                    </button>


                    <div className="rgyb">
                        <button className="small_btn_circle" id="button_red"    onTouchEnd={() => dtvTransports("red")}>  
                            <p style={{color:"black"}}>R</p>  
                        </button>

                        <button className="small_btn_circle" id="button_green"  onTouchEnd={() => dtvTransports("green")}> 
                            <p style={{color:"black"}}>G</p>
                        </button>

                        <button className="small_btn_circle" id="button_yellow" onTouchEnd={() => dtvTransports("yellow")}> 
                            <p style={{color:"black"}}>Y</p>
                        </button>

                        <button className="small_btn_circle" id="button_blue"   onTouchEnd={() => dtvTransports("blue")}> 
                            <p style={{color:"black"}}>B</p>
                        </button>
                    </div>

                </div>

                <div className={dtv_option_3?"display_none":"display_none"}>
                    <p> determine favorites here </p>
                </div>
            </div>
    </>)

    const section_two   = (<> 
            <div className="dtv_controller_movement">
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

    const section_three = (<> 
        <div className="dtv_controller_controls_2">

    <div className="controller_nav">
    </div>

    <div className="show_option_1">

        <div className="channel_container">
            <button onTouchEnd={()=> dtvTransports("channel-")} className="btn_circle" id="chan_down">
                    <img className="btn_image" src={increment} alt="chan down" />
            </button>

            <button className="btn_circle" id="chan_title" >
                <h2> CH </h2>
            </button>

            <button className="btn_circle"  id="chan_up" onTouchEnd={()=> dtvTransports("channel+")}>
                <img className="btn_image" src={increment} alt="chan up"  style={{transform:"rotate(180deg)"}} />
            </button>
        </div>



        <button className="btn_circle"id="guide" onTouchEnd={()=> dtvTransports("guide")}>
            <p> GUIDE </p>
        </button>

        <button className="btn_circle" id="menu" onTouchEnd={()=> dtvTransports("menu")}>
            <p> MENU </p>
        </button>

        <button className="btn_circle" id="list" onTouchEnd={()=> dtvTransports("list")}>
            <p> LIST </p>
        </button>

        <button className="btn_circle" id="exit" onTouchEnd={()=> dtvTransports("exit")}>
            <p> EXIT </p>
        </button>


        <button className="btn_circle" id="info" onTouchEnd={()=> dtvTransports("info")}>
            <p className="id"> INFO </p>
        </button>


        <button className="btn_circle" id="prev" onTouchEnd={()=> dtvTransports("prev")}>
        <p> PREV </p>
        </button>


        





        


        

    </div>


    </div>
    </>)


        const mobile_section_one =(
            <>
                <div className="dtv_controller_movement">
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

                        <div className="channel_container">
                            <button onTouchEnd={()=> dtvTransports("channel-")} className="btn_circle" id="chan_down">
                                    <img className="btn_image" src={increment} alt="chan down" />
                            </button>

                            <button className="btn_circle" id="chan_title"  >
                                <h2> CH </h2>
                            </button>

                            <button className="btn_circle"  id="chan_up" onTouchEnd={()=> dtvTransports("channel+")}>
                                <img className="btn_image" src={increment} alt="chan up"  style={{transform:"rotate(180deg)"}} />
                            </button>
                    </div>
                    </div> 


                  

                    <div className="bottom_row_1_controller">
                            <button className="btn_circle"id="guide" onTouchEnd={()=> dtvTransports("guide")}>
                                <p> GUIDE </p>
                            </button>

                            <button className="btn_circle" id="menu" onTouchEnd={()=> dtvTransports("menu")}>
                                <p> MENU </p>
                            </button>

                            <button className="btn_circle" id="list" onTouchEnd={()=> dtvTransports("list")}>
                                <p> LIST </p>
                            </button>

                            

                    </div>
                    <div className="bottom_row_2_controller">
                           

                            <button className="btn_circle" id="exit" onTouchEnd={()=> dtvTransports("exit")}>
                                <p> EXIT </p>
                            </button>


                            <button className="btn_circle" id="info" onTouchEnd={()=> dtvTransports("info")}>
                                <p className="id"> INFO </p>
                            </button>


                            <button className="btn_circle" id="prev" onTouchEnd={()=> dtvTransports("prev")}>
                            <p> PREV </p>
                            </button>

                    </div>

       







                </div>
            </>
        )

        const mobile_section_two =(
            <>
          <div className="show_option_2">
                    <button className="btn_circle" onTouchEnd={()=>dtvTransports("stop")}>
                        <img className="btn_image" src={stop} alt="stop btn" />
                    </button>

                    <button className="btn_circle" onTouchEnd={()=>dtvTransports("play")}>
                        <img className="btn_image" src={play} />
                    </button>

                    <button className="btn_circle" onTouchEnd={()=>dtvTransports("pause")}>
                        <img className="btn_image" src={pause} />
                    </button>

                    <button className="btn_circle" onTouchEnd={()=>dtvTransports("skip-")}>
                        <img className="btn_image" src={skip} style={{transform:"rotate(180deg)"}}/>
                    </button>

                    <button className="display_none" onTouchEnd={()=>dtvTransports("rewind")}>
                        <img className="btn_image" src={rewind} />
                    </button>

                    <button className="btn_circle" onTouchEnd={()=>dtvTransports("skip+")}>
                        <img className="btn_image" src={skip} />
                    </button>

                    <button className="btn_circle" onTouchEnd={()=>dtvTransports("back")}>
                        <img className="btn_image" src={returnArrow} />
                    </button>

                    <button className="btn_circle" id="transport_hide"onTouchEnd={()=>dtvTransports("DVR")}></button>

                    <button className="btn_circle" onTouchEnd={()=>dtvTransports("record")}>
                        <img className="btn_image" src={record} />
                    </button>


                    <div className="rgyb">
                        <button className="small_btn_circle" id="button_red"    onTouchEnd={() => dtvTransports("red")}>  
                            <p style={{color:"black"}}>R</p>  
                        </button>

                        <button className="small_btn_circle" id="button_green"  onTouchEnd={() => dtvTransports("green")}> 
                            <p style={{color:"black"}}>G</p>
                        </button>

                        <button className="small_btn_circle" id="button_yellow" onTouchEnd={() => dtvTransports("yellow")}> 
                            <p style={{color:"black"}}>Y</p>
                        </button>

                        <button className="small_btn_circle" id="button_blue"   onTouchEnd={() => dtvTransports("blue")}> 
                            <p style={{color:"black"}}>B</p>
                        </button>
                    </div>

                </div>
            </>
        )

        const mobile_section_three =(
            <>
                <div className="show_option_1">

                    <button className="btn_circle" onTouchEnd={()=> dtvTransports("key1")}>
                    <p className="key_num">1</p>
                    </button>

                    <button className="btn_circle" onTouchEnd={()=> dtvTransports("key2")}>
                    <p className="key_num">2</p>
                    </button>

                    <button className="btn_circle" onTouchEnd={()=> dtvTransports("key3")}>
                    <p className="key_num">3</p>
                    </button>

                    <button className="btn_circle" onTouchEnd={()=> dtvTransports("key4")}>
                    <p className="key_num">4</p>
                    </button>

                    <button className="btn_circle" onTouchEnd={()=> dtvTransports("key5")}>
                    <p className="key_num">5</p>
                    </button>

                    <button className="btn_circle" onTouchEnd={()=> dtvTransports("key6")}>
                    <p className="key_num">6</p>
                    </button>

                    <button className="btn_circle" onTouchEnd={()=> dtvTransports("key7")}>
                    <p className="key_num">7</p>
                    </button>

                    <button className="btn_circle" onTouchEnd={()=> dtvTransports("key8")}>
                    <p className="key_num">8</p>
                    </button>

                    <button className="btn_circle" onTouchEnd={()=> dtvTransports("key9")}>
                    <p className="key_num">9</p>
                    </button>

                    <button className="btn_circle" id="small_text" onTouchEnd={()=> dtvTransports("dash_key")}>
                    <p>DASH</p>
                    </button>

                    <button className="btn_circle"  onTouchEnd={()=> dtvTransports("key0")}>
                    <p className="key_num">0</p>
                    </button>

                    <button className="btn_circle" id="small_text" onTouchEnd={()=> dtvTransports("enter")}>
                    <p>ENTER</p>
                    </button>
                
                </div>

            </>
        )

        const mobile_section_four =(
            <>
               
            </>
        )


    let currentViewing 

        
    if(currentTab === 1 ){
        currentViewing = mobile_section_one
    } else  if(currentTab === 2 ){
        currentViewing = mobile_section_two
    } else  if(currentTab === 3 ){
        currentViewing = mobile_section_three
    } else  if(currentTab === 4 ){
        currentViewing = mobile_section_four
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
                        <button className={currentTab === 1? "btn_circle_active" : "btn_circle"} onTouchEnd={() => coontrollerNav(1)}> <img className="btn_image" src={controller}/></button>
                        <button className={currentTab === 2? "btn_circle_active" : "btn_circle"} onTouchEnd={() => coontrollerNav(2)}> <img className="btn_image" style={{position:"relative",bottom:"3px"}} src={DVR}/></button>
                        <button className={currentTab === 3? "btn_circle_active" : "btn_circle"} onTouchEnd={() => coontrollerNav(3)}> <img className="btn_image" src={keypad}/></button>
                        <button className={currentTab === 4? "display_none" : "display_none"} onTouchEnd={() => coontrollerNav(4)}> <img className="btn_image" src={favorite}/></button>


                </div>
        
        
                <div className="currentViewing"> {currentViewing}</div>
                   
            </>
        )

    const coontrollerNav = (id:number) =>{

        if (id === 1){
            setCurrentTab(id)

        } else if (id === 2){
            setCurrentTab(id)

        } else if (id === 3){
            setCurrentTab(id)

        }

    }

   
    const controllerClick = (id:string) =>{
            
        

        if(id === "top"){

            window.CrComLib.publishEvent("b","2107",true)
            window.CrComLib.publishEvent("b","2107",false)
            console.log("top calling 2107")
            
        }else if(id === "bottom"){

            window.CrComLib.publishEvent("b","2108",true)
            window.CrComLib.publishEvent("b","2108",false)
            console.log("bottom calling 2108")


        }else if( id === "left"){

            window.CrComLib.publishEvent("b","2109",true)
            window.CrComLib.publishEvent("b","2109",false)
            console.log("left calling 2109")


        }else if( id === "right"){

            window.CrComLib.publishEvent("b","2110",true)
            window.CrComLib.publishEvent("b","2110",false)
            console.log("right calling 2110")


        } else  if(id === "center"){

            window.CrComLib.publishEvent("b","2111",true)
            window.CrComLib.publishEvent("b","2111",false)
            console.log("center calling 2111")

        }

    }
        const dtvTransports = (id:string ) =>{

            if(id === "key1"){
                window.CrComLib.publishEvent("b","2030",true)
                window.CrComLib.publishEvent("b","2030",false)
                    console.log(id,"signal name 2030")

            } else if(id === "key2"){
                window.CrComLib.publishEvent("b","2031",true)
                window.CrComLib.publishEvent("b","2031",false)
                    console.log(id,"signal name 2031")

            } else if(id === "key3"){
                window.CrComLib.publishEvent("b","2032",true)
                window.CrComLib.publishEvent("b","2032",false)
                    console.log(id,"signal name 2032")

            } else if(id === "key4"){
                window.CrComLib.publishEvent("b","2033",true)
                window.CrComLib.publishEvent("b","2033",false)
                    console.log(id,"signal name 2033")

            } else if(id === "key5"){
                window.CrComLib.publishEvent("b","2034",true)
                window.CrComLib.publishEvent("b","2034",false)
                    console.log(id,"signal name 2034")

            } else if(id === "key6"){
                window.CrComLib.publishEvent("b","2035",true)
                window.CrComLib.publishEvent("b","2035",false)
                    console.log(id,"signal name 2035")

            } else if(id === "key7"){
                window.CrComLib.publishEvent("b","2036",true)
                window.CrComLib.publishEvent("b","2036",false)
                    console.log(id,"signal name 2036")

            } else if(id === "key8"){
                window.CrComLib.publishEvent("b","2037",true)
                window.CrComLib.publishEvent("b","2037",false)
                    console.log(id,"signal name 2037")

            } else if(id === "key9"){
                window.CrComLib.publishEvent("b","2038",true)
                window.CrComLib.publishEvent("b","2038",false)
                    console.log(id,"signal name 2038")

            } else if(id === "key0"){
                window.CrComLib.publishEvent("b","2029",true)
                window.CrComLib.publishEvent("b","2029",false)
                    console.log(id,"signal name 2029")

            } else if(id === "exit"){
                window.CrComLib.publishEvent("b","2006",true)
                window.CrComLib.publishEvent("b","2006",false)
                    console.log(id,"signal name 2006")

            } else if(id === "exit_key"){
                window.CrComLib.publishEvent("b","2039",true)
                window.CrComLib.publishEvent("b","2039",false)
                    console.log(id,"signal name 2039")

            }
            
            else if(id === "enter"){
                window.CrComLib.publishEvent("b","2040",true)
                window.CrComLib.publishEvent("b","2040",false)
                    console.log(id,"signal name 2040")

            }  else if(id === "info"){
                window.CrComLib.publishEvent("b","2005",true)
                window.CrComLib.publishEvent("b","2005",false)
                    console.log(id,"signal name 2005")

            }   else if(id === "prev"){
                window.CrComLib.publishEvent("b","2046",true)
                window.CrComLib.publishEvent("b","2046",false)
                    console.log(id,"signal name 2046")

            }else if(id === "list"){
                window.CrComLib.publishEvent("b","2113",true)
                window.CrComLib.publishEvent("b","2113",false)
                    console.log(id,"signal name 2113")

            }  else if(id === "menu"){
                window.CrComLib.publishEvent("b","2003",true)
                window.CrComLib.publishEvent("b","2003",false)
                    console.log(id,"signal name 2003")

            }   else if(id === "guide"){
                window.CrComLib.publishEvent("b","2004",true)
                window.CrComLib.publishEvent("b","2004",false)
                    console.log(id,"signal name 2004")

            }  else if(id === "channel-"){
                window.CrComLib.publishEvent("b","2045",true)
                window.CrComLib.publishEvent("b","2045",false)
                    console.log(id,"signal name 2045")

            } else if(id === "channel+"){
                window.CrComLib.publishEvent("b","2044",true)
                window.CrComLib.publishEvent("b","2044",false)
                    console.log(id,"signal name 2044")

            } else if(id === "scan-"){   
                window.CrComLib.publishEvent("b","2019",true)
                window.CrComLib.publishEvent("b","2019",false)
                    console.log(id,"signal name 2019")

            } else if(id === "stop"){
            
                window.CrComLib.publishEvent("b","2017",true)
                window.CrComLib.publishEvent("b","2017",false)
                    console.log(id,"signal name 2017")
                
            } else if( id === "scan+"){

                window.CrComLib.publishEvent("b","2018",true)
                window.CrComLib.publishEvent("b","2018",false)
                    console.log(id,"signal name 2018")

            } else if( id === "skip-"){

                window.CrComLib.publishEvent("b","2019",true)
                window.CrComLib.publishEvent("b","2019",false)
                    console.log(id,"but now its scan- signal name 2019")
            

            } else if(id === "play"){

                window.CrComLib.publishEvent("b","2015",true)
                window.CrComLib.publishEvent("b","2015",false)
                    console.log(id,"signal name 2015")

            } else if(id === "skip+"){

                window.CrComLib.publishEvent("b","2018",true)
                window.CrComLib.publishEvent("b","2018",false)
                    console.log(id,"but now its scan+ signal name 2018")
                
            } else if( id === "pause"){

                window.CrComLib.publishEvent("b","2016",true)
                window.CrComLib.publishEvent("b","2016",false)
                    console.log(id,"signal name 2016")

            } else if( id === "record"){

                window.CrComLib.publishEvent("b","2023",true)
                window.CrComLib.publishEvent("b","2023",false)
                    console.log(id,"signal name 2023")
            } else if( id === "red"){

                window.CrComLib.publishEvent("b","2024",true)
                window.CrComLib.publishEvent("b","2024",false)
                    console.log(id,"signal name 2024")
            } else if( id === "green"){

                window.CrComLib.publishEvent("b","2025",true)
                window.CrComLib.publishEvent("b","2025",false)
                    console.log(id,"signal name 2025")
            } else if( id === "yellow"){

                window.CrComLib.publishEvent("b","2026",true)
                window.CrComLib.publishEvent("b","2026",false)
                    console.log(id,"signal name 2026")
            } else if( id === "blue"){

                window.CrComLib.publishEvent("b","2027",true)
                window.CrComLib.publishEvent("b","2027",false)
                    console.log(id,"signal name 2027")
            } 
            else if( id === "back"){

                window.CrComLib.publishEvent("b","2112",true)
                window.CrComLib.publishEvent("b","2112",false)
                    console.log(id,"signal name 2112")
            } 

            }
                const changedtvOptions = (value:string) =>{
                
                    if(value === "dtv_1"){
                        console.log("dtv 1")
            
                        setdtv_option_1(true)
                        setdtv_option_2(false)
                        setdtv_option_3(false)
                        
                    }  
                    
                    else if (value === "dtv_2"){
                        console.log("dtv 2")

                        setdtv_option_1(false)
                        setdtv_option_2(true)
                        setdtv_option_3(false)
                        
                    }
                    
                    else if (value === "dtv_3"){
                        console.log("dtv 3")
            
                        setdtv_option_1(false)
                        setdtv_option_2(false)
                        setdtv_option_3(true)
                        
                    } 

                    else if (value === "dtv_0"){
                        console.log("dtv 0")
            
                        setdtv_option_1(false)
                        setdtv_option_2(false)
                        setdtv_option_3(false)
                        
                    }
                    }
                      




        return(
            <>
                {screenSize.width <= 430? mobileController :tabletController }
            </>
        )

    
}




export default DirecTv