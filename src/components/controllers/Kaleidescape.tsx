// react 
import { useState } from "react"

//CSS
import "../../assets/css/controllers/kaleidescape.css"

//Icons
import center      from "../../assets/images/icons/icons8-initial-state.svg"
import arrow       from "../../assets/images/icons/icons8-slide-up.svg"


import increment   from "../../assets/images/icons/icons8-triangle-arrow.svg"

import play        from "../../assets/images/icons/icons8-play.svg"
import skip        from "../../assets/images/icons/icons8-fast-forward.svg"
import pause       from "../../assets/images/icons/icons8-pause.svg"
import stop        from "../../assets/images/icons/icons8-stop.svg"
import scan        from "../../assets/images/icons/icons8-end.svg"




const Kaleidescape = () =>{

    const [keyboardState,setKeyboardState] = useState(false)
    const[keyboardLayout, setKeyboardLayout] = useState(false)


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

    //keyboard related commands 
        const enableKeyboard = (id:string) =>{

            if(id === "keyboard_on"){
                setKeyboardState(true)

            
                    console.log("Singal name 224-> ", id)
        
                    window.CrComLib.publishEvent("b","224",true)
                    window.CrComLib.publishEvent("b","224",false)
        
                
                
            } else if (id === "keyboard_off"){
                setKeyboardState(false)

            }

            else if(id === "keyboard_change"){
                setKeyboardLayout(!keyboardLayout)
            } 



            }
            const keyboardLetters = (id:string)=>{

            console.log(id)

            if(id === "Q"){
                console.log("Singal name 186 -> ", id)

                window.CrComLib.publishEvent("b","186",true)
                window.CrComLib.publishEvent("b","186",false)

            } 
            else if( id === "W"){

                console.log("Singal name 192-> ", id)

                window.CrComLib.publishEvent("b","192",true)
                window.CrComLib.publishEvent("b","192",false)

            }
            else if( id === "E"){
                
                console.log("Singal name 174-> ", id)

                window.CrComLib.publishEvent("b","174",true)
                window.CrComLib.publishEvent("b","174",false)

            }
            else if( id === "R"){
                
                console.log("Singal name 187-> ", id)

                window.CrComLib.publishEvent("b","187",true)
                window.CrComLib.publishEvent("b","187",false)

            }
            else if( id === "T"){
                
                console.log("Singal name 189-> ", id)

                window.CrComLib.publishEvent("b","189",true)
                window.CrComLib.publishEvent("b","189",false)

            }
            else if( id === "Y"){
                
                console.log("Singal name 194-> ", id)

                window.CrComLib.publishEvent("b","194",true)
                window.CrComLib.publishEvent("b","194",false)

            }
            else if( id === "U"){
                
                console.log("Singal name 190 -> ", id)

                window.CrComLib.publishEvent("b","190",true)
                window.CrComLib.publishEvent("b","190",false)

            }
            else if( id === "I"){
                
                console.log("Singal name 178-> ", id)

                window.CrComLib.publishEvent("b","178",true)
                window.CrComLib.publishEvent("b","178",false)

            }
            else if( id === "O"){
                
                console.log("Singal name 184-> ", id)

                window.CrComLib.publishEvent("b","184",true)
                window.CrComLib.publishEvent("b","184",false)

            }
            else if( id === "P"){
                
                console.log("Singal name 185-> ", id)

                window.CrComLib.publishEvent("b","185",true)
                window.CrComLib.publishEvent("b","185",false)

            

            }
            else if( id === "A"){
                
                console.log("Singal name 170-> ", id)

                window.CrComLib.publishEvent("b","170",true)
                window.CrComLib.publishEvent("b","170",false)

            }
            else if( id === "S"){
                
                console.log("Singal name 188-> ", id)

                window.CrComLib.publishEvent("b","188",true)
                window.CrComLib.publishEvent("b","188",false)

            }
            else if( id === "D"){
                
                console.log("Singal name 173-> ", id)

                window.CrComLib.publishEvent("b","173",true)
                window.CrComLib.publishEvent("b","173",false)

            }
            else if( id === "F"){
                
                console.log("Singal name 175-> ", id)

                window.CrComLib.publishEvent("b","175",true)
                window.CrComLib.publishEvent("b","175",false)

            } 
            else if( id === "G"){
                
                console.log("Singal name 176-> ", id)

                window.CrComLib.publishEvent("b","176",true)
                window.CrComLib.publishEvent("b","176",false)

            }
            else if( id === "H"){
                
                console.log("Singal name 177-> ", id)

                window.CrComLib.publishEvent("b","177",true)
                window.CrComLib.publishEvent("b","177",false)

            }
            else if( id === "J"){
                
                console.log("Singal name 179 -> ", id)

                window.CrComLib.publishEvent("b","179",true)
                window.CrComLib.publishEvent("b","179",false)
                

            }
            else if( id === "K"){
                
                console.log("Singal name 180-> ", id)

                window.CrComLib.publishEvent("b","180",true)
                window.CrComLib.publishEvent("b","180",false)

            }
            else if( id === "L"){
                
                console.log("Singal name 181-> ", id)

                window.CrComLib.publishEvent("b","181",true)
                window.CrComLib.publishEvent("b","181",false)

            }
            else if( id === "Z"){
                
                console.log("Singal name 195-> ", id)

                window.CrComLib.publishEvent("b","195",true)
                window.CrComLib.publishEvent("b","195",false)

            

            }
            else if( id === "X"){
                

                console.log("Singal name 193-> ", id)

                window.CrComLib.publishEvent("b","193",true)
                window.CrComLib.publishEvent("b","193",false)

            }
            else if( id === "C"){
                

                console.log("Singal name 172-> ", id)

                window.CrComLib.publishEvent("b","172",true)
                window.CrComLib.publishEvent("b","172",false)

            }
            else if( id === "V"){
                

                console.log("Singal name 191-> ", id)

                window.CrComLib.publishEvent("b","191",true)
                window.CrComLib.publishEvent("b","191",false)

            }
            else if( id === "B"){
                

                console.log("Singal name 171-> ", id)

                window.CrComLib.publishEvent("b","171",true)
                window.CrComLib.publishEvent("b","171",false)

            }
            else if( id === "N"){
                

                console.log("Singal name 183-> ", id)

                window.CrComLib.publishEvent("b","183",true)
                window.CrComLib.publishEvent("b","183",false)

            }
            else if( id === "M"){
                

                console.log("Singal name 182-> ", id)

                window.CrComLib.publishEvent("b","182",true)
                window.CrComLib.publishEvent("b","182",false)

            }









                }
                const keyboardNumbers = (id:string)=>{
                console.log(id)

                if(id === "1"){
                    console.log("Singal name 130 -> ", id)
        
                    window.CrComLib.publishEvent("b","130",true)
                    window.CrComLib.publishEvent("b","130",false)
        
                } else if( id === "2"){
        
                    console.log("Singal name 131-> ", id)
        
                    window.CrComLib.publishEvent("b","131",true)
                    window.CrComLib.publishEvent("b","131",false)
        
                }
                else if( id === "3"){
                    
                    console.log("Singal name 132-> ", id)
        
                    window.CrComLib.publishEvent("b","132",true)
                    window.CrComLib.publishEvent("b","132",false)
        
                }
                else if( id === "4"){
                    
                    console.log("Singal name 133-> ", id)
        
                    window.CrComLib.publishEvent("b","133",true)
                    window.CrComLib.publishEvent("b","133",false)
        
                }
                else if( id === "5"){
                    
                    console.log("Singal name 134-> ", id)
        
                    window.CrComLib.publishEvent("b","134",true)
                    window.CrComLib.publishEvent("b","134",false)
        
                }else if( id === "6"){
                    
                    console.log("Singal name 135-> ", id)
        
                    window.CrComLib.publishEvent("b","135",true)
                    window.CrComLib.publishEvent("b","135",false)
        
                }
                else if( id === "7"){
                    
                    console.log("Singal name 136 -> ", id)
        
                    window.CrComLib.publishEvent("b","136",true)
                    window.CrComLib.publishEvent("b","136",false)
        
                }
                else if( id === "8"){
                    
                    console.log("Singal name 137-> ", id)
        
                    window.CrComLib.publishEvent("b","137",true)
                    window.CrComLib.publishEvent("b","137",false)
        
                }
                else if( id === "9"){
                    
                    console.log("Singal name 138-> ", id)
        
                    window.CrComLib.publishEvent("b","138",true)
                    window.CrComLib.publishEvent("b","138",false)
        
                }
                else if( id === "0"){
                    
                    console.log("Singal name 129-> ", id)
        
                    window.CrComLib.publishEvent("b","129",true)
                    window.CrComLib.publishEvent("b","129",false)
        
                }

                
                    }
                    const keyboardSymbols = (id:string)=>{
                    console.log(id)

                        if(id === "-"){
                            console.log("Singal name 143 -> ", id)
                
                            window.CrComLib.publishEvent("b","143",true)
                            window.CrComLib.publishEvent("b","143",false)
                
                        } else if( id === "/"){
                
                            console.log("Singal name 207-> ", id)
                
                            window.CrComLib.publishEvent("b","207",true)
                            window.CrComLib.publishEvent("b","207",false)
                
                        }
                        else if( id === ":"){
                            
                            console.log("Singal name 208-> ", id)
                
                            window.CrComLib.publishEvent("b","208",true)
                            window.CrComLib.publishEvent("b","208",false)
                
                        }
                        else if( id === ";"){
                            
                            console.log("Singal name 209-> ", id)
                
                            window.CrComLib.publishEvent("b","209",true)
                            window.CrComLib.publishEvent("b","209",false)
                
                        }
                        else if( id === "("){
                            
                            console.log("Singal name 210-> ", id)
                
                            window.CrComLib.publishEvent("b","210",true)
                            window.CrComLib.publishEvent("b","210",false)
                
                        }else if( id === ")"){
                            
                            console.log("Singal name 211-> ", id)
                
                            window.CrComLib.publishEvent("b","211",true)
                            window.CrComLib.publishEvent("b","211",false)
                
                        }
                        else if( id === "$"){
                            
                            console.log("Singal name 212 -> ", id)
                
                            window.CrComLib.publishEvent("b","212",true)
                            window.CrComLib.publishEvent("b","212",false)
                
                        }
                        else if( id === "&"){
                            
                            console.log("Singal name 213-> ", id)
                
                            window.CrComLib.publishEvent("b","213",true)
                            window.CrComLib.publishEvent("b","213",false)
                
                        }
                        else if( id === "@"){
                            
                            console.log("Singal name 214-> ", id)
                
                            window.CrComLib.publishEvent("b","214",true)
                            window.CrComLib.publishEvent("b","214",false)
                
                        }
                        else if( id === "."){
                            
                            console.log("Singal name 188-> ", id)
                
                            window.CrComLib.publishEvent("b","188",true)
                            window.CrComLib.publishEvent("b","188",false)
                
                        }
                        else if( id === ","){
                            
                            console.log("Singal name 189-> ", id)
                
                            window.CrComLib.publishEvent("b","189",true)
                            window.CrComLib.publishEvent("b","189",false)
                
                        }
                        else if( id === "?"){
                            
                            console.log("Singal name 217-> ", id)
                
                            window.CrComLib.publishEvent("b","217",true)
                            window.CrComLib.publishEvent("b","217",false)
                
                        }
                        else if( id === "!"){
                            
                            console.log("Singal name 218-> ", id)
                
                            window.CrComLib.publishEvent("b","218",true)
                            window.CrComLib.publishEvent("b","218",false)
                
                        }
                        else if( id === "'"){
                            
                            console.log("Singal name 190-> ", id)
                
                            window.CrComLib.publishEvent("b","190",true)
                            window.CrComLib.publishEvent("b","190",false)
                
                        }

                        }
                        const keybaordCommands = (id:string)=>{
                            console.log(id)

                            
                        if(id === "clear"){
                                console.log("Singal name 139 -> ", id)
                
                                window.CrComLib.publishEvent("b","139",true)
                                window.CrComLib.publishEvent("b","139",false)
                
                            } else if( id === "backspace"){
                    
                                console.log("Singal name 221-> ", id)
                    
                                window.CrComLib.publishEvent("b","221",true)
                                window.CrComLib.publishEvent("b","221",false)
                    
                            }
                            else if( id === "enter"){
                                
                                console.log("Singal name 140-> ", id)
                    
                                window.CrComLib.publishEvent("b","140",true)
                                window.CrComLib.publishEvent("b","140",false)
                    
                            }
                            else if( id === "space"){
                                
                                console.log("Singal name 196-> ", id)
                    
                                window.CrComLib.publishEvent("b","196",true)
                                window.CrComLib.publishEvent("b","196",false)
                    
                            }
                        
                            }


    return(
        <>

            <div className="kaleidescape_controller_movement">
            <div className="controller">
                            <div className="container">
                                <div className="circle-menu">
                                    
                                    <div className="circle ok-outer">
                                        <button className="btn_circle" onClick={() => controllerClick("center")}>
                                                <img className="btn_image" src={center} style={{filter:'invert(0)',height:"75%"}} />
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

            <div className="kaleidescape_controller_controls">

                <button className="btn_circle" id="transport_flip" onTouchStart={() => kaleidescapeTransports("scan-")}>
            <img className="btn_image"src={scan} alt="" />
                </button>

                <button className="btn_circle" onTouchStart={() => kaleidescapeTransports("stop")}>
            <img className="btn_image"src={stop} alt="" />
                </button>

                <button className="btn_circle" onTouchStart={() => kaleidescapeTransports("scan+")}>
            <img className="btn_image"src={scan} alt="" />
                </button>

                <button className="btn_circle" id="transport_flip" onTouchStart={() => kaleidescapeTransports("skip-")}>
            <img className="btn_image"src={skip} alt="" />
                </button>

                <button className="btn_circle" onTouchStart={() => kaleidescapeTransports("play")}>
            <img className="btn_image"src={play} alt="" />
                </button>

                <button className="btn_circle" onTouchStart={() => kaleidescapeTransports("skip+")}>
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

            <div className="kaleidescape_controller_controls_2">

            
                <div className="channel_container">
                    <button onClick={()=> kaleidescapeTransports("page-")} className="btn_circle" id="chan_down">
                            <img className="btn_image" src={increment} alt="chan down" />
                    </button>

                    <button className="btn_circle" id="chan_title" >
                        <h2> CH </h2>
                    </button>

                    <button className="btn_circle"  id="chan_up" onClick={()=> kaleidescapeTransports("page+")}>
                        <img className="btn_image" src={increment} alt="chan up"  style={{transform:"rotate(180deg)"}} />
                    </button>
                </div>



                <button className="btn_circle" id = "top_menu" onTouchStart={() => kaleidescapeTransports("top_menu")}>
            <p> Menu </p> 
                </button>

                <button className="btn_circle" id = "search" onTouchStart={() => enableKeyboard("keyboard_on")}>
            <p> Search </p>
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


            <div className={keyboardState? "keyboard_page" : "keyboard_off"}>

                <div className="keyboard">

                    <button className="btn_circle"  id="Q"  onTouchStart= {()=>{keyboardLayout? keyboardNumbers("1"): keyboardLetters("Q")}}>   {keyboardLayout? <p>1</p>:<p>Q</p>}</button>
                    <button className="btn_circle"  id="W"  onTouchStart= {()=>{keyboardLayout? keyboardNumbers("2"): keyboardLetters("W")}}>   {keyboardLayout? <p>2</p>:<p>W</p>}</button>
                    <button className="btn_circle"  id="E"  onTouchStart= {()=>{keyboardLayout? keyboardNumbers("3"): keyboardLetters("E")}}>   {keyboardLayout? <p>3</p>:<p>E</p>}</button>
                    <button className="btn_circle"  id="R"  onTouchStart= {()=>{keyboardLayout? keyboardNumbers("4"): keyboardLetters("R")}}>   {keyboardLayout? <p>4</p>:<p>R</p>}</button>
                    <button className="btn_circle"  id="T"  onTouchStart= {()=>{keyboardLayout? keyboardNumbers("5"): keyboardLetters("T")}}>   {keyboardLayout? <p>5</p>:<p>T</p>}</button>
                    <button className="btn_circle"  id="Y"  onTouchStart= {()=>{keyboardLayout? keyboardNumbers("6"): keyboardLetters("Y")}}>   {keyboardLayout? <p>6</p>:<p>Y</p>}</button>
                    <button className="btn_circle"  id="U"  onTouchStart= {()=>{keyboardLayout? keyboardNumbers("7"): keyboardLetters("U")}}>   {keyboardLayout? <p>7</p>:<p>U</p>}</button>
                    <button className="btn_circle"  id="I"  onTouchStart= {()=>{keyboardLayout? keyboardNumbers("8"): keyboardLetters("I")}}>   {keyboardLayout? <p>8</p>:<p>I</p>}</button>
                    <button className="btn_circle"  id="O"  onTouchStart= {()=>{keyboardLayout? keyboardNumbers("9"): keyboardLetters("O")}}>   {keyboardLayout? <p>9</p>:<p>O</p>}</button>
                    <button className="btn_circle"  id="P"  onTouchStart= {()=>{keyboardLayout? keyboardNumbers("0"): keyboardLetters("P")}}>   {keyboardLayout? <p>0</p>:<p>P</p>}</button>

                    <button className="btn_circle"  id="A"  onTouchStart= {()=>{keyboardLayout? keyboardSymbols("-"): keyboardLetters("A")}}>   {keyboardLayout? <p>-</p>:<p>A</p>}</button>
                    <button className="btn_circle"  id="S"  onTouchStart= {()=>{keyboardLayout? keyboardSymbols("."): keyboardLetters("S")}}>   {keyboardLayout? <p>.</p>:<p>S</p>}</button>
                    <button className="btn_circle"  id="D"  onTouchStart= {()=>{keyboardLayout? keyboardSymbols(","): keyboardLetters("D")}}>   {keyboardLayout? <p>,</p>:<p>D</p>}</button>
                    <button className="btn_circle"  id="F"  onTouchStart= {()=>{keyboardLayout? keyboardSymbols("'"): keyboardLetters("F")}}>   {keyboardLayout? <p>"</p>:<p>F</p>}</button>
                    <button className="btn_circle"  id="G"  onTouchStart= {()=>{keyboardLayout? keyboardSymbols("("): keyboardLetters("G")}}>   {keyboardLayout? <p></p>:<p>G</p>}</button>
                    <button className="btn_circle"  id="H"  onTouchStart= {()=>{keyboardLayout? keyboardSymbols(")"): keyboardLetters("H")}}>   {keyboardLayout? <p></p>:<p>H</p>}</button>
                    <button className="btn_circle"  id="J"  onTouchStart= {()=>{keyboardLayout? keyboardSymbols("$"): keyboardLetters("J")}}>   {keyboardLayout? <p></p>:<p>J</p>}</button>
                    <button className="btn_circle"  id="K"  onTouchStart= {()=>{keyboardLayout? keyboardSymbols("&"): keyboardLetters("K")}}>   {keyboardLayout? <p></p>:<p>K</p>}</button>
                    <button className="btn_circle"  id="L"  onTouchStart= {()=>{keyboardLayout? keyboardSymbols("@"): keyboardLetters("L")}}>   {keyboardLayout? <p></p>:<p>L</p>}</button>


                    <button className="btn_circle"  id={keyboardLayout?"num":"letter"} onTouchStart={()=> enableKeyboard('keyboard_change')}> {keyboardLayout? <p>ABC</p>: <p>123</p> }</button>

                    <button className="btn_circle"  id="Z"  onTouchStart= {()=>{keyboardLayout? console.log("empty") : keyboardLetters("Z")}}>   {keyboardLayout? <p></p>:<p>Z</p>} </button>
                    <button className="btn_circle"  id="X"  onTouchStart= {()=>{keyboardLayout? keyboardSymbols(".") : keyboardLetters("X")}}>   {keyboardLayout? <p></p>:<p>X</p>}</button>
                    <button className="btn_circle"  id="C"  onTouchStart= {()=>{keyboardLayout? keyboardSymbols(",") : keyboardLetters("C")}}>   {keyboardLayout? <p></p>:<p>C</p>}</button>
                    <button className="btn_circle"  id="V"  onTouchStart= {()=>{keyboardLayout? keyboardSymbols("?") : keyboardLetters("V")}}>   {keyboardLayout? <p></p>:<p>V</p>}</button>
                    <button className="btn_circle"  id="B"  onTouchStart= {()=>{keyboardLayout? keyboardSymbols("!") : keyboardLetters("B")}}>   {keyboardLayout? <p></p>:<p>B</p>}</button>
                    <button className="btn_circle"  id="N"  onTouchStart= {()=>{keyboardLayout? keyboardSymbols("'") : keyboardLetters("N")}}>   {keyboardLayout? <p></p>:<p>N</p>}</button>
                    <button className="btn_circle"  id="M"  onTouchStart= {()=>{keyboardLayout? console.log("empty") : keyboardLetters("M")}}>   {keyboardLayout? <p></p>:<p>M</p>} </button>

                    

                    <button className="btn_circle"  id="clear" onTouchStart= {()=>{keybaordCommands("clear")}}><p>Clear</p></button>
                    <button className="btn_circle"  id="space" onTouchStart= {()=>{keybaordCommands("space")}}><p>Space</p></button>
                    <button className="btn_circle"  id="enter" onTouchStart= {()=>{keybaordCommands("enter")}}><p>Enter</p></button>


                </div>

            </div>


        </>
    )
}


export default Kaleidescape