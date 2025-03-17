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

                    <button onClick={()=>changedtvOptions("dtv_1")} className = {dtv_option_1? "controller_nav_1_selected" : "controller_nav_1"}>
                        <img className="btn_image" src={keypad}/>
                    </button>

                    <button onClick={()=>changedtvOptions("dtv_2")}  className = {dtv_option_2? "controller_nav_2_selected" : "controller_nav_2"}>
                        <img className="btn_image" src={DVR} id ="dvr_img"/>
                    </button>

                    <button onClick={()=>changedtvOptions("dtv_3")} className = {dtv_option_3? "display_none" : "display_none"} id="favorite_hide">
                        <img className="btn_image" src={favorite}/>
                    </button>

                </div>
                
                <div className={dtv_option_1?"show_option_1":"none_option"}>

                        <button className="btn_circle" onClick={()=> dtvTransports("key1")}>
                            <p className="key_num">1</p>
                        </button>
                        
                        <button className="btn_circle" onClick={()=> dtvTransports("key2")}>
                            <p className="key_num">2</p>
                        </button>

                        <button className="btn_circle" onClick={()=> dtvTransports("key3")}>
                            <p className="key_num">3</p>
                        </button>

                        <button className="btn_circle" onClick={()=> dtvTransports("key4")}>
                            <p className="key_num">4</p>
                        </button>
                        
                        <button className="btn_circle" onClick={()=> dtvTransports("key5")}>
                            <p className="key_num">5</p>
                        </button>

                        <button className="btn_circle" onClick={()=> dtvTransports("key6")}>
                            <p className="key_num">6</p>
                        </button>
                
                        <button className="btn_circle" onClick={()=> dtvTransports("key7")}>
                            <p className="key_num">7</p>
                        </button>
                        
                        <button className="btn_circle" onClick={()=> dtvTransports("key8")}>
                            <p className="key_num">8</p>
                        </button>

                        <button className="btn_circle" onClick={()=> dtvTransports("key9")}>
                            <p className="key_num">9</p>
                        </button>
                
                        <button className="btn_circle" id="small_text" onClick={()=> dtvTransports("dash_key")}>
                            <p>DASH</p>
                        </button>
                        
                        <button className="btn_circle"  onClick={()=> dtvTransports("key0")}>
                            <p className="key_num">0</p>
                        </button>

                        <button className="btn_circle" id="small_text" onClick={()=> dtvTransports("enter")}>
                            <p>ENTER</p>
                        </button>
                    
                
                </div>

                <div className={dtv_option_2?"show_option_2":"none_option"}>

             


                <button className="btn_circle" onClick={()=>dtvTransports("stop")}>
                        <img className="btn_image" src={stop} alt="stop btn" />
                    </button>

                    <button className="btn_circle" onClick={()=>dtvTransports("play")}>
                        <img className="btn_image" src={play} />
                    </button>

                    <button className="btn_circle" onClick={()=>dtvTransports("pause")}>
                        <img className="btn_image" src={pause} />
                    </button>

                    <button className="btn_circle" onClick={()=>dtvTransports("skip-")}>
                        <img className="btn_image" src={skip} style={{transform:"rotate(180deg)"}}/>
                    </button>

                    <button className="display_none" onClick={()=>dtvTransports("rewind")}>
                        <img className="btn_image" src={rewind} />
                    </button>

                    <button className="btn_circle" onClick={()=>dtvTransports("skip+")}>
                        <img className="btn_image" src={skip} />
                    </button>

                    <button className="btn_circle" onClick={()=>dtvTransports("back")}>
                        <img className="btn_image" src={returnArrow} />
                    </button>

                    <button className="btn_circle" id="transport_hide"onClick={()=>dtvTransports("DVR")}></button>

                    <button className="btn_circle" onClick={()=>dtvTransports("record")}>
                        <img className="btn_image" src={record} />
                    </button>


                    <div className="rgyb">
                        <button className="small_btn_circle" id="button_red"    onClick={() => dtvTransports("red")}>  
                            <p style={{color:"black"}}>R</p>  
                        </button>

                        <button className="small_btn_circle" id="button_green"  onClick={() => dtvTransports("green")}> 
                            <p style={{color:"black"}}>G</p>
                        </button>

                        <button className="small_btn_circle" id="button_yellow" onClick={() => dtvTransports("yellow")}> 
                            <p style={{color:"black"}}>Y</p>
                        </button>

                        <button className="small_btn_circle" id="button_blue"   onClick={() => dtvTransports("blue")}> 
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

    </>)

    const section_three = (<> 
        <div className="dtv_controller_controls_2">

    <div className="controller_nav">
    </div>

    <div className="show_option_1">

        <div className="channel_container">
            <button onClick={()=> dtvTransports("channel-")} className="btn_circle" id="chan_down">
                    <img className="btn_image" src={increment} alt="chan down" />
            </button>

            <button className="btn_circle" id="chan_title" >
                <h2> CH </h2>
            </button>

            <button className="btn_circle"  id="chan_up" onClick={()=> dtvTransports("channel+")}>
                <img className="btn_image" src={increment} alt="chan up"  style={{transform:"rotate(180deg)"}} />
            </button>
        </div>



        <button className="btn_circle"id="guide" onClick={()=> dtvTransports("guide")}>
            <p> GUIDE </p>
        </button>

        <button className="btn_circle" id="menu" onClick={()=> dtvTransports("menu")}>
            <p> MENU </p>
        </button>

        <button className="btn_circle" id="list" onClick={()=> dtvTransports("list")}>
            <p> LIST </p>
        </button>

        <button className="btn_circle" id="exit" onClick={()=> dtvTransports("exit")}>
            <p> EXIT </p>
        </button>


        <button className="btn_circle" id="info" onClick={()=> dtvTransports("info")}>
            <p className="id"> INFO </p>
        </button>


        <button className="btn_circle" id="prev" onClick={()=> dtvTransports("prev")}>
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
                                    <button className="btn_circle" style={{height:"5rem", width:"5rem"}} onClick={() => controllerClick("center")}>
                                        <img src={center} style={{height:"90%"}} className="center"/>
                                    </button>
                                </div>

                                <div className="control-icon right" >
                                    <button className="btn_circle" onClick={() => controllerClick("right")}>
                                        <img className="btn_image" src={arrow} style={{filter:'invert(0)', transform:"rotate(90deg)",height:"85%"}}/>
                                    </button> 
                                </div>

                                <div className="control-icon bottom">
                                    <button className="btn_circle" onClick={() => controllerClick("bottom")}>
                                        <img className="btn_image" src={arrow} style={{filter:'invert(0)', transform:"rotate(180deg)",height:"85%"}}/>
                                    </button>
                                </div>

                                <div className="control-icon left">
                                    <button className="btn_circle" onClick={() => controllerClick("left")}>
                                        <img className="btn_image" src={arrow} style={{filter:'invert(0)', transform:"rotate(270deg)",height:"85%"}}/>
                                    </button>
                                </div>

                                <div className="control-icon top">
                                    <button className="btn_circle" onClick={() => controllerClick("top")}>
                                        <img className="btn_image" src={arrow} style={{filter:'invert(0)', height:"85%"}}/>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="channel_container">
                            <button onClick={()=> dtvTransports("channel-")} className="btn_circle" id="chan_down">
                                    <img className="btn_image" src={increment} alt="chan down" />
                            </button>

                            <button className="btn_circle" id="chan_title"  >
                                <h2> CH </h2>
                            </button>

                            <button className="btn_circle"  id="chan_up" onClick={()=> dtvTransports("channel+")}>
                                <img className="btn_image" src={increment} alt="chan up"  style={{transform:"rotate(180deg)"}} />
                            </button>
                    </div>
                    </div> 


                  

                    <div className="bottom_row_1_controller">
                            <button className="btn_circle"id="guide" onClick={()=> dtvTransports("guide")}>
                                <p> GUIDE </p>
                            </button>

                            <button className="btn_circle" id="menu" onClick={()=> dtvTransports("menu")}>
                                <p> MENU </p>
                            </button>

                            <button className="btn_circle" id="list" onClick={()=> dtvTransports("list")}>
                                <p> LIST </p>
                            </button>

                            

                    </div>
                    <div className="bottom_row_2_controller">
                           

                            <button className="btn_circle" id="exit" onClick={()=> dtvTransports("exit")}>
                                <p> EXIT </p>
                            </button>


                            <button className="btn_circle" id="info" onClick={()=> dtvTransports("info")}>
                                <p className="id"> INFO </p>
                            </button>


                            <button className="btn_circle" id="prev" onClick={()=> dtvTransports("prev")}>
                            <p> PREV </p>
                            </button>

                    </div>

       







                </div>
            </>
        )

        const mobile_section_two =(
            <>
          <div className="show_option_2">
                    <button className="btn_circle" onClick={()=>dtvTransports("stop")}>
                        <img className="btn_image" src={stop} alt="stop btn" />
                    </button>

                    <button className="btn_circle" onClick={()=>dtvTransports("play")}>
                        <img className="btn_image" src={play} />
                    </button>

                    <button className="btn_circle" onClick={()=>dtvTransports("pause")}>
                        <img className="btn_image" src={pause} />
                    </button>

                    <button className="btn_circle" onClick={()=>dtvTransports("skip-")}>
                        <img className="btn_image" src={skip} style={{transform:"rotate(180deg)"}}/>
                    </button>

                    <button className="display_none" onClick={()=>dtvTransports("rewind")}>
                        <img className="btn_image" src={rewind} />
                    </button>

                    <button className="btn_circle" onClick={()=>dtvTransports("skip+")}>
                        <img className="btn_image" src={skip} />
                    </button>

                    <button className="btn_circle" onClick={()=>dtvTransports("back")}>
                        <img className="btn_image" src={returnArrow} />
                    </button>

                    <button className="btn_circle" id="transport_hide"onClick={()=>dtvTransports("DVR")}></button>

                    <button className="btn_circle" onClick={()=>dtvTransports("record")}>
                        <img className="btn_image" src={record} />
                    </button>


                    <div className="rgyb">
                        <button className="small_btn_circle" id="button_red"    onClick={() => dtvTransports("red")}>  
                            <p style={{color:"black"}}>R</p>  
                        </button>

                        <button className="small_btn_circle" id="button_green"  onClick={() => dtvTransports("green")}> 
                            <p style={{color:"black"}}>G</p>
                        </button>

                        <button className="small_btn_circle" id="button_yellow" onClick={() => dtvTransports("yellow")}> 
                            <p style={{color:"black"}}>Y</p>
                        </button>

                        <button className="small_btn_circle" id="button_blue"   onClick={() => dtvTransports("blue")}> 
                            <p style={{color:"black"}}>B</p>
                        </button>
                    </div>

                </div>
            </>
        )

        const mobile_section_three =(
            <>
                <div className="show_option_1">

                    <button className="btn_circle" onClick={()=> dtvTransports("key1")}>
                    <p className="key_num">1</p>
                    </button>

                    <button className="btn_circle" onClick={()=> dtvTransports("key2")}>
                    <p className="key_num">2</p>
                    </button>

                    <button className="btn_circle" onClick={()=> dtvTransports("key3")}>
                    <p className="key_num">3</p>
                    </button>

                    <button className="btn_circle" onClick={()=> dtvTransports("key4")}>
                    <p className="key_num">4</p>
                    </button>

                    <button className="btn_circle" onClick={()=> dtvTransports("key5")}>
                    <p className="key_num">5</p>
                    </button>

                    <button className="btn_circle" onClick={()=> dtvTransports("key6")}>
                    <p className="key_num">6</p>
                    </button>

                    <button className="btn_circle" onClick={()=> dtvTransports("key7")}>
                    <p className="key_num">7</p>
                    </button>

                    <button className="btn_circle" onClick={()=> dtvTransports("key8")}>
                    <p className="key_num">8</p>
                    </button>

                    <button className="btn_circle" onClick={()=> dtvTransports("key9")}>
                    <p className="key_num">9</p>
                    </button>

                    <button className="btn_circle" id="small_text" onClick={()=> dtvTransports("dash_key")}>
                    <p>DASH</p>
                    </button>

                    <button className="btn_circle"  onClick={()=> dtvTransports("key0")}>
                    <p className="key_num">0</p>
                    </button>

                    <button className="btn_circle" id="small_text" onClick={()=> dtvTransports("enter")}>
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
                        <button className={currentTab === 1? "btn_circle_active" : "btn_circle"} onClick={() => coontrollerNav(1)}> <img className="btn_image" src={controller}/></button>
                        <button className={currentTab === 2? "btn_circle_active" : "btn_circle"} onClick={() => coontrollerNav(2)}> <img className="btn_image" style={{position:"relative",bottom:"3px"}} src={DVR}/></button>
                        <button className={currentTab === 3? "btn_circle_active" : "btn_circle"} onClick={() => coontrollerNav(3)}> <img className="btn_image" src={keypad}/></button>
                        <button className={currentTab === 4? "display_none" : "display_none"} onClick={() => coontrollerNav(4)}> <img className="btn_image" src={favorite}/></button>


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
        const dtvTransports = (id:string ) =>{

            if(id === "key1"){
                window.CrComLib.publishEvent("b","130",true)
                window.CrComLib.publishEvent("b","130",false)
                    console.log(id,"signal name 130")

            } else if(id === "key2"){
                window.CrComLib.publishEvent("b","131",true)
                window.CrComLib.publishEvent("b","131",false)
                    console.log(id,"signal name 131")

            } else if(id === "key3"){
                window.CrComLib.publishEvent("b","132",true)
                window.CrComLib.publishEvent("b","132",false)
                    console.log(id,"signal name 132")

            } else if(id === "key4"){
                window.CrComLib.publishEvent("b","133",true)
                window.CrComLib.publishEvent("b","133",false)
                    console.log(id,"signal name 133")

            } else if(id === "key5"){
                window.CrComLib.publishEvent("b","134",true)
                window.CrComLib.publishEvent("b","134",false)
                    console.log(id,"signal name 134")

            } else if(id === "key6"){
                window.CrComLib.publishEvent("b","135",true)
                window.CrComLib.publishEvent("b","135",false)
                    console.log(id,"signal name 135")

            } else if(id === "key7"){
                window.CrComLib.publishEvent("b","136",true)
                window.CrComLib.publishEvent("b","136",false)
                    console.log(id,"signal name 136")

            } else if(id === "key8"){
                window.CrComLib.publishEvent("b","137",true)
                window.CrComLib.publishEvent("b","137",false)
                    console.log(id,"signal name 137")

            } else if(id === "key9"){
                window.CrComLib.publishEvent("b","138",true)
                window.CrComLib.publishEvent("b","138",false)
                    console.log(id,"signal name 138")

            } else if(id === "key0"){
                window.CrComLib.publishEvent("b","129",true)
                window.CrComLib.publishEvent("b","129",false)
                    console.log(id,"signal name 129")

            } else if(id === "exit"){
                window.CrComLib.publishEvent("b","106",true)
                window.CrComLib.publishEvent("b","106",false)
                    console.log(id,"signal name 106")

            } else if(id === "exit_key"){
                window.CrComLib.publishEvent("b","139",true)
                window.CrComLib.publishEvent("b","139",false)
                    console.log(id,"signal name 139")

            }
            
            else if(id === "enter"){
                window.CrComLib.publishEvent("b","140",true)
                window.CrComLib.publishEvent("b","140",false)
                    console.log(id,"signal name 140")

            }  else if(id === "info"){
                window.CrComLib.publishEvent("b","105",true)
                window.CrComLib.publishEvent("b","105",false)
                    console.log(id,"signal name 105")

            }   else if(id === "prev"){
                window.CrComLib.publishEvent("b","146",true)
                window.CrComLib.publishEvent("b","146",false)
                    console.log(id,"signal name 146")

            }else if(id === "list"){
                window.CrComLib.publishEvent("b","113",true)
                window.CrComLib.publishEvent("b","113",false)
                    console.log(id,"signal name 113")

            }  else if(id === "menu"){
                window.CrComLib.publishEvent("b","103",true)
                window.CrComLib.publishEvent("b","103",false)
                    console.log(id,"signal name 103")

            }   else if(id === "guide"){
                window.CrComLib.publishEvent("b","104",true)
                window.CrComLib.publishEvent("b","104",false)
                    console.log(id,"signal name 104")

            }  else if(id === "channel-"){
                window.CrComLib.publishEvent("b","145",true)
                window.CrComLib.publishEvent("b","145",false)
                    console.log(id,"signal name 145")

            } else if(id === "channel+"){
                window.CrComLib.publishEvent("b","144",true)
                window.CrComLib.publishEvent("b","144",false)
                    console.log(id,"signal name 144")

            } else if(id === "scan-"){   
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

                window.CrComLib.publishEvent("b","119",true)
                window.CrComLib.publishEvent("b","119",false)
                    console.log(id,"but now its scan- signal name 119")
            

            } else if(id === "play"){

                window.CrComLib.publishEvent("b","115",true)
                window.CrComLib.publishEvent("b","115",false)
                    console.log(id,"signal name 115")

            } else if(id === "skip+"){

                window.CrComLib.publishEvent("b","118",true)
                window.CrComLib.publishEvent("b","118",false)
                    console.log(id,"but now its scan+ signal name 118")
                
            } else if( id === "pause"){

                window.CrComLib.publishEvent("b","116",true)
                window.CrComLib.publishEvent("b","116",false)
                    console.log(id,"signal name 116")

            } else if( id === "record"){

                window.CrComLib.publishEvent("b","123",true)
                window.CrComLib.publishEvent("b","123",false)
                    console.log(id,"signal name 123")
            } else if( id === "red"){

                window.CrComLib.publishEvent("b","124",true)
                window.CrComLib.publishEvent("b","124",false)
                    console.log(id,"signal name 124")
            } else if( id === "green"){

                window.CrComLib.publishEvent("b","125",true)
                window.CrComLib.publishEvent("b","125",false)
                    console.log(id,"signal name 125")
            } else if( id === "yellow"){

                window.CrComLib.publishEvent("b","126",true)
                window.CrComLib.publishEvent("b","126",false)
                    console.log(id,"signal name 126")
            } else if( id === "blue"){

                window.CrComLib.publishEvent("b","127",true)
                window.CrComLib.publishEvent("b","127",false)
                    console.log(id,"signal name 127")
            } 
            else if( id === "back"){

                window.CrComLib.publishEvent("b","112",true)
                window.CrComLib.publishEvent("b","112",false)
                    console.log(id,"signal name 112")
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