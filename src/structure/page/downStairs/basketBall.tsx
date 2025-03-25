
// React 
import { useState, useEffect } from "react"

// React Router DOM 
import { Link } from "react-router-dom"  
//CSS
    import "../../../assets/css/basketball/App1.css"
    import "../../../assets/css/basketball/main1.css"
    import "../../../assets/css/basketball/gym_dtv.css"
//Components
 
//Tile Icons
    import audio from "../../../assets/images/icons/tile/icons8-guitar-amp.svg"
    import controller from "../../../assets/images/icons/tile/icons8-remote-control.svg"
// General Icons
    import back_button from "../../../assets/images/icons/icons8-arrow.svg"
    import basketball from "../../../assets/images/backgrounds/bball.png"
    import power_button from "../../../assets/images/icons/general/icons8-power.svg"
    import mute from "../../../assets/images/icons/audio/icons8-no-audio.svg"
// Controller Icons
    import arrow from "../../../assets/images/icons/general/icons8-arrow-circle.svg"
    import keypad from "../../../assets/images/icons/controller/icons8-keypad.svg"
    import favorite from "../../../assets/images/icons/controller/icons8-add-to-favorites.svg"
    import increment from "../../../assets/images/icons/general/icons8-triangle-arrow.svg"



    // fav icons 

    import chan690 from "../../../assets/images/icons/logos/chan2.png"
    import chan2 from "../../../assets/images/icons/logos/CBS_logo_(2020).svg"
    import chan4 from "../../../assets/images/icons/logos/chan4.svg"
    import chan11 from "../../../assets/images/icons/logos/chan11.svg"
    import chan206 from "../../../assets/images/icons/logos/chan206.svg"
    import chan209 from "../../../assets/images/icons/logos/chan209.svg"
    import NFL from "../../../assets/images/icons/logos/Logo_for_NFL_Sunday_Ticket_(2023-Present).png"



    import BB from "../../../assets/images/backgrounds/court2.jpg"





const Main_1 = () => {

   
    const [modal, setModal] = useState(false)

    const [dtv_option_1,setdtv_option_1] = useState(true)
    const [dtv_option_3,setdtv_option_3] = useState(false)

    const [tv1, setTv1] = useState(false)
    const [tv2, setTv2] = useState(false)
    const [tv3, setTv3] = useState(false)
    const [tv4, setTv4] = useState(false)

        const [dtv_1_a, setDtv_1_a] = useState(false)
        const [dtv_1_b, setDtv_1_b] = useState(false)
        const [dtv_1_c, setDtv_1_c] = useState(false)
        const [dtv_1_d, setDtv_1_d] = useState(false)
            const[tv_1_label, setTv_1_label] = useState("")
        
        const [dtv_2_a, setDtv_2_a] = useState(false)
        const [dtv_2_b, setDtv_2_b] = useState(false)
        const [dtv_2_c, setDtv_2_c] = useState(false)
        const [dtv_2_d, setDtv_2_d] = useState(false)
            const[tv_2_label, setTv_2_label] = useState("")
        
        const [dtv_3_a, setDtv_3_a] = useState(false)
        const [dtv_3_b, setDtv_3_b] = useState(false)
        const [dtv_3_c, setDtv_3_c] = useState(false)
        const [dtv_3_d, setDtv_3_d] = useState(false)
            const[tv_3_label, setTv_3_label] = useState("")

        const [dtv_4_a, setDtv_4_a] = useState(false)
        const [dtv_4_b, setDtv_4_b] = useState(false)
        const [dtv_4_c, setDtv_4_c] = useState(false)
        const [dtv_4_d, setDtv_4_d] = useState(false)
            const[tv_4_label, setTv_4_label] = useState("")


        const [controlling_dtv, setControlling_dtv] = useState("...")


    // Audio feedback 
        const [dtv_audio, setDtv_audio] = useState(false)
        const [music_audio, setMusic_audio] = useState(false)

        const [audio_mute, setAudio_mute] = useState(false)
        const [volume_level, setVolume_level] = useState(0)

    // local variables controlling drop down menus 
    const[tvBoxOption1,setTvBoxOption1] = useState(false)
    const[tvBoxOption2,setTvBoxOption2] = useState(false)
    const[tvBoxOption3,setTvBoxOption3] = useState(false)
    const[tvBoxOption4,setTvBoxOption4] = useState(false)
    const[tvBoxOption5,setTvBoxOption5] = useState(false)





    

    useEffect(() => {


        const dtv_audio   = window.CrComLib.subscribeState("b","70",(value: boolean) => setDtv_audio(value))
        const music_audio = window.CrComLib.subscribeState("b","71",(value: boolean) => setMusic_audio(value))
        const audio_mute  = window.CrComLib.subscribeState("b","72",(value: boolean) => setAudio_mute(value))
        const volume_level  = window.CrComLib.subscribeState("n","75",(value: number) => setVolume_level(value))

        const Tv_One    = window.CrComLib.subscribeState("b","39",(value: boolean) => setTv1(value))
        const Tv_Two    = window.CrComLib.subscribeState("b","45",(value: boolean) => setTv2(value))
        const Tv_Three  = window.CrComLib.subscribeState("b","51",(value: boolean) => setTv3(value))
        const Tv_Four   = window.CrComLib.subscribeState("b","57",(value: boolean) => setTv4(value))

            const dtv_1_a    = window.CrComLib.subscribeState("b","40",(value: boolean) => setDtv_1_a(value))
            const dtv_1_b    = window.CrComLib.subscribeState("b","41",(value: boolean) => setDtv_1_b(value))
            const dtv_1_c    = window.CrComLib.subscribeState("b","42",(value: boolean) => setDtv_1_c(value))
            const dtv_1_d    = window.CrComLib.subscribeState("b","43",(value: boolean) => setDtv_1_d(value))
    
            const dtv_2_a    = window.CrComLib.subscribeState("b","46",(value: boolean) => setDtv_2_a(value))
            const dtv_2_b    = window.CrComLib.subscribeState("b","47",(value: boolean) => setDtv_2_b(value))
            const dtv_2_c    = window.CrComLib.subscribeState("b","48",(value: boolean) => setDtv_2_c(value))
            const dtv_2_d    = window.CrComLib.subscribeState("b","49",(value: boolean) => setDtv_2_d(value))

            const dtv_3_a    = window.CrComLib.subscribeState("b","52",(value: boolean) => setDtv_3_a(value))
            const dtv_3_b    = window.CrComLib.subscribeState("b","53",(value: boolean) => setDtv_3_b(value))
            const dtv_3_c    = window.CrComLib.subscribeState("b","54",(value: boolean) => setDtv_3_c(value))
            const dtv_3_d    = window.CrComLib.subscribeState("b","55",(value: boolean) => setDtv_3_d(value))

            const dtv_4_a    = window.CrComLib.subscribeState("b","58",(value: boolean) => setDtv_4_a(value))
            const dtv_4_b    = window.CrComLib.subscribeState("b","59",(value: boolean) => setDtv_4_b(value))
            const dtv_4_c    = window.CrComLib.subscribeState("b","60",(value: boolean) => setDtv_4_c(value))
            const dtv_4_d    = window.CrComLib.subscribeState("b","61",(value: boolean) => setDtv_4_d(value))

   

        return () => {
            quickCheck()

            window.CrComLib.unsubscribeState("b","39",Tv_One)
            window.CrComLib.unsubscribeState("b","45",Tv_Two)
            window.CrComLib.unsubscribeState("b","51",Tv_Three)
            window.CrComLib.unsubscribeState("b","57",Tv_Four)

                window.CrComLib.unsubscribeState("b","40",dtv_1_a)
                window.CrComLib.unsubscribeState("b","41",dtv_1_b)
                window.CrComLib.unsubscribeState("b","42",dtv_1_c)
                window.CrComLib.unsubscribeState("b","43",dtv_1_d)

                window.CrComLib.unsubscribeState("b","46",dtv_2_a)
                window.CrComLib.unsubscribeState("b","47",dtv_2_b)
                window.CrComLib.unsubscribeState("b","48",dtv_2_c)
                window.CrComLib.unsubscribeState("b","49",dtv_2_d)

                window.CrComLib.unsubscribeState("b","52",dtv_3_a)
                window.CrComLib.unsubscribeState("b","53",dtv_3_b)
                window.CrComLib.unsubscribeState("b","54",dtv_3_c)
                window.CrComLib.unsubscribeState("b","55",dtv_3_d)

                window.CrComLib.unsubscribeState("b","58",dtv_4_a)
                window.CrComLib.unsubscribeState("b","59",dtv_4_b)
                window.CrComLib.unsubscribeState("b","60",dtv_4_c)
                window.CrComLib.unsubscribeState("b","61",dtv_4_d)

                window.CrComLib.unsubscribeState("b","70",dtv_audio)
                window.CrComLib.unsubscribeState("b","71",music_audio)
                window.CrComLib.unsubscribeState("b","72",audio_mute)
                window.CrComLib.unsubscribeState("n","75",volume_level)
       
     
        };
      }, []);




// Place this next to the title once we have more locations. 

<Link to={"/room_dashboard"}>  
  <button> Back to room select</button>
</Link>

    const toggleModal = () => {
        setModal(!modal)
    }
    const changedtvOptions = (value:string) =>{

        if(value === "dtv_1"){
            console.log("dtv 1")

            setdtv_option_1(true)
            setdtv_option_3(false)
            
        }  else if (value === "dtv_3"){
            console.log("dtv 3")

            setdtv_option_1(false)
            setdtv_option_3(true)
            
        }
    }
    const controllerClick = (id:string) =>{
        
        if(id === "top"){

            window.CrComLib.publishEvent("b","107",true)
            window.CrComLib.publishEvent("b","107",false)

            console.log(id,"signal name 107")
        }else if(id === "bottom"){

            window.CrComLib.publishEvent("b","108",true)
            window.CrComLib.publishEvent("b","108",false)
            console.log(id,"signal name 108")

        }else if( id === "left"){

            window.CrComLib.publishEvent("b","109",true)
            window.CrComLib.publishEvent("b","109",false)
            console.log(id,"signal name 109")


        }else if( id === "right"){

            window.CrComLib.publishEvent("b","110",true)
            window.CrComLib.publishEvent("b","110",false)
            console.log(id,"signal name 110")


        } else  if(id === "center"){

            window.CrComLib.publishEvent("b","111",true)
            window.CrComLib.publishEvent("b","111",false)
            console.log(id,"signal name 111")

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

    }

    const dropdown = ( id:string) => {
        if(id === "dropdown_1"){

            window.CrComLib.publishEvent("b","39",true)
            window.CrComLib.publishEvent("b","39",false)
                console.log("TV 1 On - Singal name 39")

            setTvBoxOption1(!tvBoxOption1)
        } else if (id === "dropdown_2"){

            window.CrComLib.publishEvent("b","45",true)
            window.CrComLib.publishEvent("b","45",false)
                console.log("TV 2 On - Singal name 45")

            setTvBoxOption2(!tvBoxOption2)
        } else if (id === "dropdown_3"){

            window.CrComLib.publishEvent("b","51",true)
            window.CrComLib.publishEvent("b","51",false)
                console.log("TV 3 On - Singal name 51")

            setTvBoxOption3(!tvBoxOption3)
        } else if (id === "dropdown_4"){

            window.CrComLib.publishEvent("b","57",true)
            window.CrComLib.publishEvent("b","57",false)
                console.log("TV 4 On - Singal name 57")

            setTvBoxOption4(!tvBoxOption4)
        } else if (id === "dropdown_5"){
           setTvBoxOption5(!tvBoxOption5)
        } 
        
        
        
        else if(id === "close_dropdown_1"){

            window.CrComLib.publishEvent("b","44",true)
            window.CrComLib.publishEvent("b","44",false)
                console.log("TV 1 Off - Singal name 44")
                
                setTv_1_label("")
                setTvBoxOption1(!tvBoxOption1)
        } else if (id === "close_dropdown_2"){

            window.CrComLib.publishEvent("b","50",true)
            window.CrComLib.publishEvent("b","50",false)
                console.log("TV 2 Off - Singal name 50")
                
                setTv_2_label("")
                setTvBoxOption2(!tvBoxOption2)
        } else if (id === "close_dropdown_3"){

            window.CrComLib.publishEvent("b","56",true)
            window.CrComLib.publishEvent("b","56",false)
                console.log("TV 3 Off - Singal name 56")
                
                setTv_3_label("")
                setTvBoxOption3(!tvBoxOption3)
        } else if (id === "close_dropdown_4"){

            window.CrComLib.publishEvent("b","62",true)
            window.CrComLib.publishEvent("b","62",false)
                console.log("TV 4 Off - Singal name 62")
                
                setTv_4_label("")
                setTvBoxOption4(!tvBoxOption4)
        } 
    }
    const controlling_DTV = (id:string) =>{
        if(id === "DTV_1"){

            window.CrComLib.publishEvent("b","64",true)
            window.CrComLib.publishEvent("b","64",false)
                console.log(id,"signal name 64")
              
                setControlling_dtv("DTV 1")
                setTvBoxOption5(!tvBoxOption1)


        } else if(id === "DTV_2"){

            window.CrComLib.publishEvent("b","65",true)
            window.CrComLib.publishEvent("b","65",false)
                console.log(id,"signal name 65")
                
                setControlling_dtv("DTV 2")
                setTvBoxOption5(!tvBoxOption1)


        } else if(id === "DTV_3"){

            window.CrComLib.publishEvent("b","66",true)
            window.CrComLib.publishEvent("b","66",false)
                console.log(id,"signal name 66")
               
                setControlling_dtv("DTV 3")
                setTvBoxOption5(!tvBoxOption1)


        } else if(id === "DTV_4"){

            window.CrComLib.publishEvent("b","67",true)
            window.CrComLib.publishEvent("b","67",false)
                console.log(id,"signal name 67")
               
                setTvBoxOption5(!tvBoxOption1)
                setControlling_dtv("DTV 4")

        } 
    }
    const tv_one_video_output = (id:string) => {      
            if(id === "TV_1_Box_1"){

                window.CrComLib.publishEvent("b","40",true)
                window.CrComLib.publishEvent("b","40",false)
                    console.log(id,"signal name 40")
                    setTvBoxOption1(!tvBoxOption1)
                    setControlling_dtv("DTV 1")

                    setTv_1_label("DTV 1")
            } else if(id === "TV_1_Box_2"){

                window.CrComLib.publishEvent("b","41",true)
                window.CrComLib.publishEvent("b","41",false)
                    console.log(id,"signal name 41")
                    setTvBoxOption1(!tvBoxOption1)
                    setControlling_dtv("DTV 2")

                    setTv_1_label("DTV 2")

            } else if(id === "TV_1_Box_3"){

                window.CrComLib.publishEvent("b","42",true)
                window.CrComLib.publishEvent("b","42",false)
                    console.log(id,"signal name 42")
                    setTvBoxOption1(!tvBoxOption1)
                    setControlling_dtv("DTV 3")

                    setTv_1_label("DTV 3")
            } else if(id === "TV_1_Box_4"){

                window.CrComLib.publishEvent("b","43",true)
                window.CrComLib.publishEvent("b","43",false)
                    console.log(id,"signal name 43")
                    setTvBoxOption1(!tvBoxOption1)
                    setControlling_dtv("DTV 4")

                    setTv_1_label("DTV 4")
            } 

    }
    const tv_two_video_output = (id:string) => {
      
            if(id === "TV_2_Box_1"){

                window.CrComLib.publishEvent("b","46",true)
                window.CrComLib.publishEvent("b","46",false)
                    console.log(id,"signal name 46")
                    
                    setTvBoxOption2(!tvBoxOption2)
                    setControlling_dtv("DTV 1")
                    setTv_2_label(" DTV 1")

                    
    
           } else if(id === "TV_2_Box_2"){
    
                window.CrComLib.publishEvent("b","47",true)
                window.CrComLib.publishEvent("b","47",false)
                    console.log(id,"signal name 47")
                    
                    setTvBoxOption2(!tvBoxOption2)
                    setControlling_dtv("DTV 2")
                    setTv_2_label("DTV 2")

           } else if(id === "TV_2_Box_3"){
    
                window.CrComLib.publishEvent("b","48",true)
                window.CrComLib.publishEvent("b","48",false)
                    console.log(id,"signal name 48")
                    
                    setTvBoxOption2(!tvBoxOption2)
                    setControlling_dtv("DTV 3")
                    setTv_2_label("DTV 3")

           } else if(id === "TV_2_Box_4"){
    
                window.CrComLib.publishEvent("b","49",true)
                window.CrComLib.publishEvent("b","49",false)
                    console.log(id,"signal name 49")
                    
                    setTvBoxOption2(!tvBoxOption2)
                    setControlling_dtv("DTV 4")
                    setTv_2_label("DTV 4")

           } 

    }
    const tv_three_video_output = (id:string) => {
      
            if(id === "TV_3_Box_1"){

                window.CrComLib.publishEvent("b","52",true)
                window.CrComLib.publishEvent("b","52",false)
                    console.log(id,"signal name 52")
                    setTvBoxOption3(!tvBoxOption3)
                    setControlling_dtv("DTV 1")

                    setTv_3_label("DTV 1")

    
           } else if(id === "TV_3_Box_2"){
    
                window.CrComLib.publishEvent("b","53",true)
                window.CrComLib.publishEvent("b","53",false)
                    console.log(id,"signal name 53")
                    setTvBoxOption3(!tvBoxOption3)
                    setControlling_dtv("DTV 2")
                    setTv_3_label("DTV 2")

    
           } else if(id === "TV_3_Box_3"){
    
                window.CrComLib.publishEvent("b","54",true)
                window.CrComLib.publishEvent("b","54",false)
                    console.log(id,"signal name 54")
                    setTvBoxOption3(!tvBoxOption3)
                    setControlling_dtv("DTV 3")
                    setTv_3_label("DTV 3")

    
           } else if(id === "TV_3_Box_4"){
    
                window.CrComLib.publishEvent("b","55",true)
                window.CrComLib.publishEvent("b","55",false)
                    console.log(id,"signal name 55")
                    setTvBoxOption3(!tvBoxOption3)
                    setControlling_dtv("DTV 4")
                    setTv_3_label("DTV 4")

           } 

    }
    const tv_four_video_output = (id:string) => {
      
            if(id === "TV_4_Box_1"){

                window.CrComLib.publishEvent("b","58",true)
                window.CrComLib.publishEvent("b","58",false)
                    console.log(id,"signal name 58")
                    setTvBoxOption4(!tvBoxOption4)
                    setControlling_dtv("DTV 1")

                    setTv_4_label("DTV 1")


    
           } else if(id === "TV_4_Box_2"){
    
                window.CrComLib.publishEvent("b","59",true)
                window.CrComLib.publishEvent("b","59",false)
                    console.log(id,"signal name 59")
                    setTvBoxOption4(!tvBoxOption4)
                    setControlling_dtv("DTV 2")
                    setTv_4_label("DTV 2")


    
           } else if(id === "TV_4_Box_3"){
    
                window.CrComLib.publishEvent("b","60",true)
                window.CrComLib.publishEvent("b","60",false)
                    console.log(id,"signal name 60")
                    setTvBoxOption4(!tvBoxOption4)
                    setControlling_dtv("DTV 3")
                    setTv_4_label("DTV 3")


    
           } else if(id === "TV_4_Box_4"){
    
                window.CrComLib.publishEvent("b","61",true)
                window.CrComLib.publishEvent("b","61",false)
                    console.log(id,"signal name 61")
                    setTvBoxOption4(!tvBoxOption4)
                    setControlling_dtv("DTV 4")
                    setTv_4_label("DTV 4")


    
            }

    }
    const all_on = () =>{



        window.CrComLib.publishEvent("b","40",true)
        window.CrComLib.publishEvent("b","40",false)
            
            window.CrComLib.publishEvent("b","39",true)
            window.CrComLib.publishEvent("b","39",false)
                console.log("Signal name 40 for box_1_a and 39 for TV 1")
            

        window.CrComLib.publishEvent("b","46",true)
        window.CrComLib.publishEvent("b","46",false)
           
            window.CrComLib.publishEvent("b","45",true)
            window.CrComLib.publishEvent("b","45",false)
                console.log("Signal name 46 for box_2_a and 45 for TV 2")

        
        window.CrComLib.publishEvent("b","52",true)
        window.CrComLib.publishEvent("b","52",false)
           
            window.CrComLib.publishEvent("b","51",true)
            window.CrComLib.publishEvent("b","51",false)
                console.log("Signal name 52 for box_3_a and 51 for TV 3")

        window.CrComLib.publishEvent("b","58",true)
        window.CrComLib.publishEvent("b","58",false)
           
            window.CrComLib.publishEvent("b","57",true)
            window.CrComLib.publishEvent("b","57",false)
                console.log("Signal name 58 for box_4_a and 57 for TV 4")


                setControlling_dtv("DTV 1")

                setTv_1_label("DTV 1")
                setTv_2_label("DTV 1")
                setTv_3_label("DTV 1")
                setTv_4_label("DTV 1")

    } 
    const switchAudio = (id:string) => {

            if(id === "dtv"){
                window.CrComLib.publishEvent("b","70",true)
                window.CrComLib.publishEvent("b","70",false)
                    console.log(id,"signal name 70")

            } else if( id === "music" ){
                window.CrComLib.publishEvent("b","71",true)
                window.CrComLib.publishEvent("b","71",false)
                    console.log(id,"signal name 71")
            } else if ( id === "mute"){
                window.CrComLib.publishEvent("b","72",true)
                window.CrComLib.publishEvent("b","72",false)
                    console.log(id,"signal name 72")
            } else if ( id === "volume_down"){
                window.CrComLib.publishEvent("b","73",true)
                window.CrComLib.publishEvent("b","73",false)
                    console.log(id,"signal name 73")
            } else if ( id === "volume_up"){
                window.CrComLib.publishEvent("b","74",true)
                window.CrComLib.publishEvent("b","74",false)
                    console.log(id,"signal name 74")
            }


    }
    const modalTurnOff = (id:string) =>{

        if (id === 'wholeRoom'){
            window.CrComLib.publishEvent("b","30",true)
            window.CrComLib.publishEvent("b","30",false)
                console.log("room off, signal name of 30")

        } else if (id === 'allTvs'){
            window.CrComLib.publishEvent("b","44",true)
            window.CrComLib.publishEvent("b","44",false)
                console.log("tv 1, signal name 44")

                window.CrComLib.publishEvent("b","50",true)
                window.CrComLib.publishEvent("b","50",false)
                    console.log("tv 2, signal name 50")

                    window.CrComLib.publishEvent("b","56",true)
                    window.CrComLib.publishEvent("b","56",false)
                        console.log("tv 3, signal name 56")

                        window.CrComLib.publishEvent("b","62",true)
                        window.CrComLib.publishEvent("b","62",false)
                            console.log("tv 4, signal name 62")
        } else if ( id === 'music'){
            window.CrComLib.publishEvent("b","31",true)
            window.CrComLib.publishEvent("b","31",false)
                console.log("music off signal name 31")
        }
        

    }
    const quickCheck = () =>{
        console.log("I lunched")


        if(dtv_1_a){
            setTv_1_label("DTV 1")

        } else if(dtv_1_b){
            setTv_1_label("DTV 2")

        } else if (dtv_1_c){
            setTv_1_label("DTV 3")

        } else if(dtv_1_d){
            setTv_1_label("DTV 4")

        }

        if(dtv_2_a){
            setTv_2_label("DTV 1")

        } else if(dtv_2_b){
            setTv_2_label("DTV 2")

        } else if (dtv_2_c){
            setTv_2_label("DTV 3")

        } else if(dtv_2_d){
            setTv_2_label("DTV 4")

        }

        if(dtv_3_a){
            setTv_3_label("DTV 1")

        } else if(dtv_3_b){
            setTv_3_label("DTV 2")

        } else if (dtv_3_c){
            setTv_3_label("DTV 3")

        } else if(dtv_3_d){
            setTv_3_label("DTV 4")

            
        }

        if(dtv_4_a){
            setTv_4_label("DTV 1")

        } else if(dtv_4_b){
            setTv_4_label("DTV 2")

        } else if (dtv_4_c){
            setTv_4_label("DTV 3")

        } else if(dtv_4_d){
            setTv_4_label("DTV 4")

        }
    }

    const favChannel = (id:string) =>{
        console.log(id)


        if(id === "690"){
            window.CrComLib.publishEvent("b","135",true)
            window.CrComLib.publishEvent("b","135",false)
                console.log("Number 6 ")

                    window.CrComLib.publishEvent("b","138",true)
                    window.CrComLib.publishEvent("b","138",false)
                        console.log("number 9")
        
                        window.CrComLib.publishEvent("b","129",true)
                        window.CrComLib.publishEvent("b","129",false)
                            console.log("number 0 ")
        
                                window.CrComLib.publishEvent("b","140",true)
                                window.CrComLib.publishEvent("b","140",false)
                                    console.log("enter")
        } else if(id === "2"){
            window.CrComLib.publishEvent("b","131",true)
            window.CrComLib.publishEvent("b","131",false)
                console.log("2")
            
                window.CrComLib.publishEvent("b","140",true)
                window.CrComLib.publishEvent("b","140",false)
                    console.log("enter")

        } else if ( id === "4"){
            window.CrComLib.publishEvent("b","133",true)
            window.CrComLib.publishEvent("b","133",false)
                console.log("4")

                window.CrComLib.publishEvent("b","140",true)
                window.CrComLib.publishEvent("b","140",false)
                    console.log("enter")

        } else if ( id === "11"){
                window.CrComLib.publishEvent("b","130",true)
                window.CrComLib.publishEvent("b","130",false)

    
                  
                        console.log("1")

                        setTimeout(() => {
                            window.CrComLib.publishEvent("b","130",true)
                            window.CrComLib.publishEvent("b","130",false)

                            window.CrComLib.publishEvent("b","140",true)
                            window.CrComLib.publishEvent("b","140",false)
                            console.log("enter")
                          }, 500); // Update every 1 second



        } else if ( id === "700"){
            window.CrComLib.publishEvent("b","136",true)
            window.CrComLib.publishEvent("b","136",false)
                console.log("7")

                window.CrComLib.publishEvent("b","129",true)
                window.CrComLib.publishEvent("b","129",false)
                    console.log("0")

                    
                    setTimeout(() => {
                        window.CrComLib.publishEvent("b","129",true)
                        window.CrComLib.publishEvent("b","129",false)
                            console.log("0")
                    }, 500)
                    

                        window.CrComLib.publishEvent("b","140",true)
                        window.CrComLib.publishEvent("b","140",false)
                            console.log("enter")
                

            
        } else if ( id === "206"){

            window.CrComLib.publishEvent("b","131",true)
            window.CrComLib.publishEvent("b","131",false)
                console.log("2")

                window.CrComLib.publishEvent("b","129",true)
                window.CrComLib.publishEvent("b","129",false)
                    console.log("0")

                    window.CrComLib.publishEvent("b","135",true)
                    window.CrComLib.publishEvent("b","135",false)
                        console.log("Number 6 ")

                        window.CrComLib.publishEvent("b","140",true)
                        window.CrComLib.publishEvent("b","140",false)
                            console.log("enter")
            
        } else if ( id === "209"){

            window.CrComLib.publishEvent("b","131",true)
            window.CrComLib.publishEvent("b","131",false)
                console.log("2")

                window.CrComLib.publishEvent("b","129",true)
                window.CrComLib.publishEvent("b","129",false)
                    console.log("0")

                    setTimeout(() => {
                        window.CrComLib.publishEvent("b","138",true)
                        window.CrComLib.publishEvent("b","138",false)
                            console.log("Number 9 ")
    
                            window.CrComLib.publishEvent("b","140",true)
                            window.CrComLib.publishEvent("b","140",false)
                                console.log("enter")
                        
                    }, 500);
                  
            
        } else if ( id === "9552"){
            window.CrComLib.publishEvent("b","138",true)
            window.CrComLib.publishEvent("b","138",false)
                console.log("9")
                
                window.CrComLib.publishEvent("b","134",true)
                window.CrComLib.publishEvent("b","134",false)
                    console.log(id,"signal name 134")

                 
                        setTimeout(() => {
                            window.CrComLib.publishEvent("b","134",true)
                            window.CrComLib.publishEvent("b","134",false)
                                console.log(id,"signal name 134")

                                window.CrComLib.publishEvent("b","131",true)
                                window.CrComLib.publishEvent("b","131",false)

                                window.CrComLib.publishEvent("b","140",true)
                                window.CrComLib.publishEvent("b","140",false)
                                    console.log("enter")      
                        }, 500)

                                        
          

         


                        

        } 
        else if ( id === "9553"){
            window.CrComLib.publishEvent("b","138",true)
            window.CrComLib.publishEvent("b","138",false)
                console.log("9")
                
                window.CrComLib.publishEvent("b","134",true)
                window.CrComLib.publishEvent("b","134",false)
                    console.log(id,"signal name 134")


                    setTimeout(() => {

                        window.CrComLib.publishEvent("b","134",true)
                        window.CrComLib.publishEvent("b","134",false)
                            console.log(id,"signal name 134")
    
                            window.CrComLib.publishEvent("b","132",true)
                            window.CrComLib.publishEvent("b","132",false)
                                
                                window.CrComLib.publishEvent("b","140",true)
                                window.CrComLib.publishEvent("b","140",false)
                                    console.log("enter")      
                }, 500)

                   
            

        } 
        else if ( id === "9554"){
            window.CrComLib.publishEvent("b","138",true)
            window.CrComLib.publishEvent("b","138",false)
                console.log("9")
                
                window.CrComLib.publishEvent("b","134",true)
                window.CrComLib.publishEvent("b","134",false)
                    console.log(id,"signal name 134")

                    setTimeout(() => {

                        window.CrComLib.publishEvent("b","134",true)
                        window.CrComLib.publishEvent("b","134",false)
                            console.log(id,"signal name 134")
    
                            window.CrComLib.publishEvent("b","133",true)
                            window.CrComLib.publishEvent("b","133",false)
    
                            window.CrComLib.publishEvent("b","140",true)
                            window.CrComLib.publishEvent("b","140",false)
                                console.log("enter") 
                }, 500)

                

                                             

        } 
        else if ( id === "9555"){
            window.CrComLib.publishEvent("b","138",true)
            window.CrComLib.publishEvent("b","138",false)
                console.log("9")
                
                window.CrComLib.publishEvent("b","134",true)
                window.CrComLib.publishEvent("b","134",false)
                    console.log(id,"signal name 134")

                    setTimeout(() => {
                        window.CrComLib.publishEvent("b","134",true)
                        window.CrComLib.publishEvent("b","134",false)
                            console.log(id,"signal name 134")

                            setTimeout(() => {
                          
                                window.CrComLib.publishEvent("b","134",true)
                                window.CrComLib.publishEvent("b","134",false)
        
                        }, 500)
                            
                }, 500)


                   

                       
                        window.CrComLib.publishEvent("b","140",true)
                        window.CrComLib.publishEvent("b","140",false)
                            console.log("enter")                        

        } 
        else if ( id === "9556"){
            window.CrComLib.publishEvent("b","138",true)
            window.CrComLib.publishEvent("b","138",false)
                console.log("9")
                
                window.CrComLib.publishEvent("b","134",true)
                window.CrComLib.publishEvent("b","134",false)
                    console.log(id,"signal name 134")

                    setTimeout(() => {

                    window.CrComLib.publishEvent("b","134",true)
                    window.CrComLib.publishEvent("b","134",false)
                        console.log(id,"signal name 134")

                        window.CrComLib.publishEvent("b","135",true)
                        window.CrComLib.publishEvent("b","135",false)
            

                        window.CrComLib.publishEvent("b","140",true)
                        window.CrComLib.publishEvent("b","140",false)
                            console.log("enter") 
                        }, 500)                       

        } 
        else if ( id === "9557"){
            window.CrComLib.publishEvent("b","138",true)
            window.CrComLib.publishEvent("b","138",false)
                console.log("9")
                
                window.CrComLib.publishEvent("b","134",true)
                window.CrComLib.publishEvent("b","134",false)
                    console.log(id,"signal name 134")

                    
    setTimeout(() => {


                    window.CrComLib.publishEvent("b","134",true)
                    window.CrComLib.publishEvent("b","134",false)
                        console.log(id,"signal name 134")

                        window.CrComLib.publishEvent("b","136",true)
                        window.CrComLib.publishEvent("b","136",false)

                        window.CrComLib.publishEvent("b","140",true)
                        window.CrComLib.publishEvent("b","140",false)
                            console.log("enter")      
                        }, 500)                  

        } 
        else if ( id === "9558"){
            window.CrComLib.publishEvent("b","138",true)
            window.CrComLib.publishEvent("b","138",false)
                console.log("9")
                
                window.CrComLib.publishEvent("b","134",true)
                window.CrComLib.publishEvent("b","134",false)
                    console.log(id,"signal name 134")

                    setTimeout(() => {

                    window.CrComLib.publishEvent("b","134",true)
                    window.CrComLib.publishEvent("b","134",false)
                        console.log(id,"signal name 134")

                        window.CrComLib.publishEvent("b","137",true)
                        window.CrComLib.publishEvent("b","137",false)
            

                        window.CrComLib.publishEvent("b","140",true)
                        window.CrComLib.publishEvent("b","140",false)
                            console.log("enter") 
                        }, 500)
                       

        } 
        else if ( id === "9559"){
            window.CrComLib.publishEvent("b","138",true)
            window.CrComLib.publishEvent("b","138",false)
                console.log("9")
                
                window.CrComLib.publishEvent("b","134",true)
                window.CrComLib.publishEvent("b","134",false)
                    console.log(id,"signal name 134")

                    setTimeout(() => {
                    window.CrComLib.publishEvent("b","134",true)
                    window.CrComLib.publishEvent("b","134",false)
                        console.log(id,"signal name 134")

                        window.CrComLib.publishEvent("b","138",true)
                        window.CrComLib.publishEvent("b","138",false)
            

                        window.CrComLib.publishEvent("b","140",true)
                        window.CrComLib.publishEvent("b","140",false)
                            console.log("enter")                        
                        }, 500)
        } 
        else if ( id === "9560"){
            window.CrComLib.publishEvent("b","138",true)
            window.CrComLib.publishEvent("b","138",false)
                console.log("9")
                
                window.CrComLib.publishEvent("b","134",true)
                window.CrComLib.publishEvent("b","134",false)
                    console.log(id,"signal name 134")

                    
                    setTimeout(() => {

                    window.CrComLib.publishEvent("b","135",true)
                    window.CrComLib.publishEvent("b","135",false)
                        console.log(id,"signal name 135")

                        window.CrComLib.publishEvent("b","129",true)
                        window.CrComLib.publishEvent("b","129",false)
            
                        window.CrComLib.publishEvent("b","140",true)
                        window.CrComLib.publishEvent("b","140",false)
                            console.log("enter")                        
                        }, 500)

        }
        
        else if ( id === "9561"){
            window.CrComLib.publishEvent("b","138",true)
            window.CrComLib.publishEvent("b","138",false)
                console.log("9")
                
                window.CrComLib.publishEvent("b","134",true)
                window.CrComLib.publishEvent("b","134",false)
                    console.log(id,"signal name 134")

                    setTimeout(() => {

                    window.CrComLib.publishEvent("b","135",true)
                    window.CrComLib.publishEvent("b","135",false)
                        console.log(id,"signal name 134")

                        window.CrComLib.publishEvent("b","130",true)
                        window.CrComLib.publishEvent("b","130",false)
            
                        window.CrComLib.publishEvent("b","140",true)
                        window.CrComLib.publishEvent("b","140",false)
                            console.log("enter")      
                        }, 500)
                  

        } 

        else if ( id === "9562"){
            window.CrComLib.publishEvent("b","138",true)
            window.CrComLib.publishEvent("b","138",false)
                console.log("9")
                
                window.CrComLib.publishEvent("b","134",true)
                window.CrComLib.publishEvent("b","134",false)
                    console.log(id,"signal name 134")

                    setTimeout(() => {

                    window.CrComLib.publishEvent("b","135",true)
                    window.CrComLib.publishEvent("b","135",false)
                        console.log(id,"signal name 135")

                        window.CrComLib.publishEvent("b","131",true)
                        window.CrComLib.publishEvent("b","131",false)

                        window.CrComLib.publishEvent("b","140",true)
                        window.CrComLib.publishEvent("b","140",false)
                            console.log("enter")      
                        }, 500)
                  

        } 
        else if ( id === "9563"){
            window.CrComLib.publishEvent("b","138",true)
            window.CrComLib.publishEvent("b","138",false)
                console.log("9")
                
                window.CrComLib.publishEvent("b","134",true)
                window.CrComLib.publishEvent("b","134",false)
                    console.log(id,"signal name 134")
                    setTimeout(() => {


                    window.CrComLib.publishEvent("b","135",true)
                    window.CrComLib.publishEvent("b","135",false)
                        console.log(id,"signal name 134")

                        window.CrComLib.publishEvent("b","132",true)
                        window.CrComLib.publishEvent("b","132",false)

                        window.CrComLib.publishEvent("b","140",true)
                        window.CrComLib.publishEvent("b","140",false)
                            console.log("enter")   
                        }, 500)
                     

        } 
        else if ( id === "9564"){
            window.CrComLib.publishEvent("b","138",true)
            window.CrComLib.publishEvent("b","138",false)
                console.log("9")
                
                window.CrComLib.publishEvent("b","134",true)
                window.CrComLib.publishEvent("b","134",false)
                    console.log(id,"signal name 134")

                    setTimeout(() => {


                    window.CrComLib.publishEvent("b","135",true)
                    window.CrComLib.publishEvent("b","135",false)
                        console.log(id,"signal name 134")

                        window.CrComLib.publishEvent("b","133",true)
                        window.CrComLib.publishEvent("b","133",false)

                        window.CrComLib.publishEvent("b","140",true)
                        window.CrComLib.publishEvent("b","140",false)
                            console.log("enter")     
                        }, 500)
                   

        } 
        else if ( id === "9565"){
            window.CrComLib.publishEvent("b","138",true)
            window.CrComLib.publishEvent("b","138",false)
                console.log("9")
                
                window.CrComLib.publishEvent("b","134",true)
                window.CrComLib.publishEvent("b","134",false)
                    console.log(id,"signal name 134")

                    setTimeout(() => {

                    window.CrComLib.publishEvent("b","135",true)
                    window.CrComLib.publishEvent("b","135",false)
                        console.log(id,"signal name 135")

                        window.CrComLib.publishEvent("b","134",true)
                        window.CrComLib.publishEvent("b","134",false)

                            window.CrComLib.publishEvent("b","140",true)
                            window.CrComLib.publishEvent("b","140",false)
                                console.log("enter")  
                        }, 500)
                      

        } 

    }
    
    return(

        <main>
            <div  className="page_layout"  id="basketball">

                

                <Link className="back_button" to={"/"}>
                    <img src={back_button} />
                </Link>
        
                <button  className="home_button" style={{borderRadius:"30px", width:"5rem", gridColumn:"11/12"}} onClick ={()=> console.log("power off")}>
                        

                            <img onClick={toggleModal} src={power_button}   />      
                </button>  
                
                <div className = "input_selection" >
                    <div className="dropdown_tv_selection">
                    <p className="dropdown_title"> TV Selection </p>
                        <div className="current_tv_selection"> 

                            <div className="box_one" >
                                <button className={tv1? "tv_active" : "tv_off"} onClick={()=> dropdown("dropdown_1")}> 
                                    <p>TV 1</p>    
                                </button>

                                <div className = {tvBoxOption1? "hide_current_label": "current_label" }> <p style={{color:"black", zIndex:"1"}}>{tv_1_label} </p></div>
                                <div className={tvBoxOption1? "tv_dropdown_list":"hide_tv_dropdown_list" }>
                                
                                    <button className={dtv_1_a? "selected":"not_selected"} id="first_button" onClick ={()=> tv_one_video_output("TV_1_Box_1")}>    <p>DTV 1 Audio</p>  </button>
                                    <button className={dtv_1_b? "selected":"not_selected"}                   onClick ={()=> tv_one_video_output("TV_1_Box_2")}>    <p>DTV 2</p>        </button>
                                    <button className={dtv_1_c? "selected":"not_selected"}                   onClick ={()=> tv_one_video_output("TV_1_Box_3")}>    <p>DTV 3</p>        </button>
                                    <button className={dtv_1_d? "selected":"not_selected"}                   onClick ={()=> tv_one_video_output("TV_1_Box_4")}>    <p>DTV 4</p>        </button>
                                    <button id="last_button"                                                  onClick={()=> dropdown("close_dropdown_1")}>    <p>Turn Off</p>  </button>
                    
                                </div>

                                
                            </div>

                            <div className="box_two">
                                <button className={tv2? "tv_active" : "tv_off"} onClick={()=> dropdown("dropdown_2")}> 
                                    <p>TV 2</p>    
                                </button>
                                <div className = {tvBoxOption2? "hide_current_label": "current_label" }> <p style={{color:"black", zIndex:"1"}}>{tv_2_label} </p></div>
                                

                                <div className={tvBoxOption2? "tv_dropdown_list":"hide_tv_dropdown_list" }>
                                    <button className={dtv_2_a? "selected":"not_selected"} id="first_button"  onClick ={()=> tv_two_video_output("TV_2_Box_1")}>    <p>DTV 1 Audio</p>  </button>
                                    <button className={dtv_2_b? "selected":"not_selected"}                    onClick ={()=> tv_two_video_output("TV_2_Box_2")}>    <p>DTV 2</p>        </button>
                                    <button className={dtv_2_c? "selected":"not_selected"}                    onClick ={()=> tv_two_video_output("TV_2_Box_3")}>    <p>DTV 3</p>        </button>
                                    <button className={dtv_2_d? "selected":"not_selected"}                    onClick ={()=> tv_two_video_output("TV_2_Box_4")}>    <p>DTV 4</p>        </button>
                                    <button                                                 id="last_button"   onClick={()=> dropdown("close_dropdown_2")}>    <p>Turn Off</p>  </button>

                                </div>
                            </div>

                            <div className="box_three">
                                <button className={tv3? "tv_active" : "tv_off"} onClick={()=> dropdown("dropdown_3")}> 
                                    <p>TV 3</p>    
                                </button>

                                <div className = {tvBoxOption3? "hide_current_label": "current_label" }> <p style={{color:"black", zIndex:"1"}}>{tv_3_label} </p></div>


                                <div className={tvBoxOption3? "tv_dropdown_list":"hide_tv_dropdown_list" }>
                                    <button className={dtv_3_a? "selected":"not_selected"} id="first_button"  onClick ={()=> tv_three_video_output("TV_3_Box_1")}>    <p>DTV 1 Audio</p>  </button>
                                    <button className={dtv_3_b? "selected":"not_selected"}                    onClick ={()=> tv_three_video_output("TV_3_Box_2")}>    <p>DTV 2</p>        </button>
                                    <button className={dtv_3_c? "selected":"not_selected"}                    onClick ={()=> tv_three_video_output("TV_3_Box_3")}>    <p>DTV 3</p>        </button>
                                    <button className={dtv_3_d? "selected":"not_selected"}                    onClick ={()=> tv_three_video_output("TV_3_Box_4")}>    <p>DTV 4</p>        </button>
                                    <button                                                id="last_button"    onClick={()=> dropdown("close_dropdown_3")}>    <p>Turn Off</p>  </button>
                                </div>
                            </div>

                            <div className="box_four">
                                <button className={tv4? "tv_active" : "tv_off"} onClick={()=> dropdown("dropdown_4")}> 
                                    <p>TV 4</p>      
                                </button>

                                <div className = {tvBoxOption4? "hide_current_label": "current_label" }> <p style={{color:"black", zIndex:"1"}}>{tv_4_label} </p></div>

                                <div className={tvBoxOption4? "tv_dropdown_list":"hide_tv_dropdown_list" }>
                                    <button className={dtv_4_a? "selected":"not_selected"} id="first_button"  onClick ={()=> tv_four_video_output("TV_4_Box_1")}>    <p>DTV 1 Audio</p>  </button>
                                    <button className={dtv_4_b? "selected":"not_selected"}                    onClick ={()=> tv_four_video_output("TV_4_Box_2")}>    <p>DTV 2</p>        </button>
                                    <button className={dtv_4_c? "selected":"not_selected"}                    onClick ={()=> tv_four_video_output("TV_4_Box_3")}>    <p>DTV 3</p>        </button>
                                    <button className={dtv_4_d? "selected":"not_selected"}                    onClick ={()=> tv_four_video_output("TV_4_Box_4")}>    <p>DTV 4</p>        </button>
                                    <button                                                id="last_button"    onClick={()=> dropdown("close_dropdown_4")}>    <p>Turn Off</p>  </button>

                                </div>
                            </div>

                            <div className="box_five">
                                <button  className="tv_off" onClick ={()=>all_on() }> 
                                    <p className="mirror_all">  All On </p>      
                                </button>

                                <p className = "current_label"> </p>

                            </div>

                        </div>
                    </div>

                </div>

                <div className = "controller_background">
                    
                    <div className="dtv_controller_controls_bb">
                        <div className="controller_nav_bb">

                            <button onClick={()=>changedtvOptions("dtv_1")} className = {dtv_option_1? "controller_nav_1_selected_bb" : "controller_nav_1_bb"}>
                                <img src={keypad}/>
                            </button>

                            

                            <button onClick={()=>changedtvOptions("dtv_3")} className = {dtv_option_3? "controller_nav_3_selected_bb" : "controller_nav_3_bb"} id="favorite_hide">
                                <img src={favorite}/>
                            </button>

                        </div>
                        
                        <div className={dtv_option_1?"show_option_1_bb":"none_option"}>

                                <button className="transport_button" onClick={()=> dtvTransports("key1")}>
                                    <p>1</p>
                                </button>
                                
                                <button className="transport_button" onClick={()=> dtvTransports("key2")}>
                                    <p>2</p>
                                </button>

                                <button className="transport_button" onClick={()=> dtvTransports("key3")}>
                                    <p>3</p>
                                </button>

                                <button className="transport_button" onClick={()=> dtvTransports("key4")}>
                                    <p>4</p>
                                </button>
                                
                                <button className="transport_button" onClick={()=> dtvTransports("key5")}>
                                    <p>5</p>
                                </button>

                                <button className="transport_button" onClick={()=> dtvTransports("key6")}>
                                    <p>6</p>
                                </button>
                        
                                <button className="transport_button" onClick={()=> dtvTransports("key7")}>
                                    <p>7</p>
                                </button>
                                
                                <button className="transport_button" onClick={()=> dtvTransports("key8")}>
                                    <p>8</p>
                                </button>

                                <button className="transport_button" onClick={()=> dtvTransports("key9")}>
                                    <p style={{color:"black"}}>9</p>
                                </button>
                        
                                <button className="transport_button" id="small_text_bb" onClick={()=> dtvTransports("exit_key")}>
                                    <p>Exit</p>
                                </button>
                                
                                <button className="transport_button"  onClick={()=> dtvTransports("key0")}>
                                    <p>0</p>
                                </button>

                                <button className="transport_button" id="small_text_bb" onClick={()=> dtvTransports("enter")}>
                                    <p>Enter</p>
                                </button>

                            
                        
                        </div>

                    
                        <div className={dtv_option_3?"show_option_3_bb":"none_option"}>
                            <button className="transport_button" onClick={() => favChannel("690")}>
                                <img src={chan690} alt="" />
                            
                            </button>


                            <button className="transport_button" onClick={() => favChannel("2")}>
                                <img src={chan2} alt="" />
                            </button>

                            <button className="transport_button" id ="NFL_chan" onClick={() => favChannel("4")}>
                                <img src={chan4} alt="" />
                            </button>

                            <button className="transport_button" onClick={() => favChannel("11")}>
                                <img src={chan11} alt="" />
                            </button>

                        

                            <button className="transport_button" onClick={() => favChannel("206")}>
                                <img style={{height:"1.5rem"}} src={chan206} alt="" />
                            </button>

                            <button className="transport_button" onClick={() => favChannel("209")}>
                                <img style={{height:"1.5rem"}} src={chan209} alt="" />
                            </button>

                            <button className="transport_button" id ="NFL_chan" onClick={() => favChannel("9552")}>
                                <img src={NFL} alt="" />
                                <p style={{color:"black"}}>9552</p>
                            </button>
                            
                            <button className="transport_button"  id ="NFL_chan"onClick={() => favChannel("9553")}>
                            <img src={NFL} alt="" />
                                <p style={{color:"black"}}>9553</p>
                            </button>

                            <button className="transport_button" id ="NFL_chan" onClick={() => favChannel("9554")}>
                            <img src={NFL} alt="" />
                                <p style={{color:"black"}}>9554</p>
                            </button>

                            <button className="transport_button" id ="NFL_chan" onClick={() => favChannel("9555")}>
                            <img src={NFL} alt="" />
                                <p style={{color:"black"}}>9555</p>
                            </button>

                            <button className="transport_button"  id ="NFL_chan"onClick={() => favChannel("9556")}>
                            <img src={NFL} alt="" />
                                <p style={{color:"black"}}>9556</p>
                            </button>

                            <button className="transport_button"  id ="NFL_chan"onClick={() => favChannel("9557")}>
                            <img src={NFL} alt="" />
                                <p style={{color:"black"}}>9557</p>
                            </button>

                            <button className="transport_button"  id ="NFL_chan"onClick={() => favChannel("9558")}>
                            <img src={NFL} alt="" />
                                <p style={{color:"black"}}>9558</p>
                            </button>

                            <button className="transport_button"  id ="NFL_chan"onClick={() => favChannel("9559")}>
                            <img src={NFL} alt="" />
                                <p style={{color:"black"}}>9559</p>
                            </button>

                            <button className="transport_button"  id ="NFL_chan"onClick={() => favChannel("9560")}>
                            <img src={NFL} alt="" />
                                <p style={{color:"black"}}>9560</p>
                            </button>

                            <button className="transport_button"  id ="NFL_chan"onClick={() => favChannel("9561")}>
                            <img src={NFL} alt="" />
                                <p style={{color:"black"}}>9561</p>
                            </button>

                            <button className="transport_button" id ="NFL_chan" onClick={() => favChannel("9562")}>
                            <img src={NFL} alt="" />
                                <p style={{color:"black"}}>9562</p>
                            </button>

                            <button className="transport_button" id ="NFL_chan" onClick={() => favChannel("9563")}>
                            <img src={NFL} alt="" />
                                <p style={{color:"black"}}>9563</p>
                            </button>
                            
                            <button className="transport_button"  id ="NFL_chan"onClick={() => favChannel("9564")}>
                            <img src={NFL} alt="" />
                                <p style={{color:"black"}}>9564</p>
                            </button>

                            <button className="transport_button"  id ="NFL_chan"onClick={() => favChannel("9565")}>
                            <img src={NFL} alt="" />
                                <p style={{color:"black"}}>9565</p>
                            </button>
                        
                            
                        </div>


                    </div>

                    <div className="dtv_controller_movement_bb" >
                    

                    <div className="dtv_controlling_div" onClick={()=> dropdown("dropdown_5")}>
                            <div className="dtv_controlling_btn">  <p> {controlling_dtv} </p> </div>

                            <div className={tvBoxOption5? "tv_dropdown_list_controller":"hide_tv_dropdown_list" }>
                                
                                <button className="not_selected" id="first_button" onClick ={()=> controlling_DTV("DTV_1")}>    <p>DTV 1 Audio</p>  </button>
                                <button className="not_selected"                   onClick ={()=> controlling_DTV("DTV_2")}>    <p>DTV 2</p>        </button>
                                <button className="not_selected"                   onClick ={()=> controlling_DTV("DTV_3")}>    <p>DTV 3</p>        </button>
                                <button id="last_btn" className="not_selected"     onClick ={()=> controlling_DTV("DTV_4")}>    <p>DTV 4</p>        </button>
                                
                
                        </div>
                    </div>
                    


                
                    

                        <div className="controller_bb" >
                            <div className="container_bb">
                                <div className="circle-menu_bb">
                                    <div className="circle ok-inner_bb">
                                        <button className="center_button_bb" onClick={() => controllerClick("center")}>
                                        
                                        </button>
                                    </div>
                                    
                                    <div className="circle ok-outer"></div>
                                    
                                    <div className="control-icon right_bb" >
                                        <button className="center_button_bb" onClick={() => controllerClick("right")}>
                                        <img src ={basketball} className="basketball_button" />
                                        <img src={arrow} className="arrow_right"/>
                                        </button> 
                                    </div>
                                    
                                    <div className="control-icon bottom_bb">
                                        <button className="center_button_bb" onClick={() => controllerClick("bottom")}>
                                            <img src ={basketball} className="basketball_button" />
                                            <img src={arrow} className="arrow_bottom" id="white"/>
                                        </button>
                                    </div>
                                    
                                    <div className="control-icon left_bb">
                                        <button className="center_button_bb" onClick={() => controllerClick("left")}>
                                        <img src ={basketball} className="basketball_button" />
                                            <img src={arrow} className="arrow_left"/>
                                        </button>
                                    </div>

                                    <div className="control-icon top_bb">
                                        <button className="center_button_bb" onClick={() => controllerClick("top")}>
                                            <img src={arrow} className="arrow_top"/>
                                            <img src ={basketball} className="basketball_button"  />

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    
                    </div>

                    <div className="dtv_controller_controls_2_bb">

                        <div className="show_option_1_bb">

                            <button onClick={()=> dtvTransports("channel-")} className="transport_button" id="chan_down_bb">
                                    <img src={increment} alt="chan down" className="chan_icon"/>
                            </button>

                            <button className="transport_button" id="chan_title_bb">
                                <h2> Chan </h2>
                            </button>

                            <button className="transport_button"  id="chan_up_bb" onClick={()=> dtvTransports("channel+")}>
                                <img src={increment} alt="chan up" className="chan_icon" style={{transform:"rotate(180deg)"}} />
                            </button>
                        

                            <button className="transport_button" id="info_bb" onClick={()=> dtvTransports("info")}>
                                <p className="id"> Info </p>
                            </button>

                            <button className="transport_button" id="exit_bb" onClick={()=> dtvTransports("exit")}>
                                <p> Exit </p>
                            </button>

                            <button className="transport_button" id="prev_bb" onClick={()=> dtvTransports("prev")}>
                            <p> Prev</p>
                            </button>

                            <button className="transport_button" id="menu_bb" onClick={()=> dtvTransports("menu")}>
                                <p> Menu </p>
                            </button>

                            <button className="transport_button"id="guide_bb" onClick={()=> dtvTransports("guide")}>
                                <p> Guide </p>
                            </button>


                        


                            


                            

                        </div>
                    
                    
                    </div>
                    
                </div>

                <div className="short_cut_menu">

                <button className="cards_in_dtv" id={dtv_audio? "active_media_dtv" : "media_dtv" } onClick={()=>switchAudio("dtv")}>

                    <div className="dtv_audio_card_title">
                        <p className="tile_name">DirecTV</p>
                    </div>

                    <div className="tile_image_div">
                        <img src={controller} className="tile_image" alt="icon" />
                    </div>

                </button>

                <div className="volume_control">
                                    
                                    <button className="transport_button" id="vol_button" onClick={()=>switchAudio("volume_down")} >
            
                                        <img src={increment} alt="volume down" />
            
                                    </button>

                                
                                    
                                    <button className="transport_button" id="vol_button"  onClick={()=>switchAudio("mute")}> 
                                    {audio_mute? <img src = {mute} className="mute_icon"/> :  
                                    <div className="vol_state_container">
                                        <p className="volume_level">{((volume_level/65535) * 100).toFixed(0)}</p>
                                        <p className="volume_level_mute"> Mute </p>
                                    </div> }

                                    
                                    </button>
                                    
                                    <button className="transport_button" id="vol_button" onClick={()=>switchAudio("volume_up")}>
                                        <img src={increment} alt="volume up" style={{transform:"rotate(180deg)"}} />
                                    </button>
            
                </div>

                <button className="cards_in_dtv" id={music_audio? "active_audio_dtv" : "audio_dtv"} onClick={()=>switchAudio("music")} >
        
                    <div className="dtv_audio_card_title">
                        <p className="tile_name">Music</p>
                    </div>
                    
                    <div className="tile_image_div">
                        <img src={audio} className="tile_image" alt="icon" />
                    </div>

                </button>

                

                </div>








                {modal && ( 
                    <div className="modal" onClick={toggleModal}>
                    <div onClick={toggleModal} className="overlay">
                        <div className="modal-content">
                        <p className="powerMenu">Power Menu</p>
                        
                        
                        <div className="power_menus">
                            <div className="power_menu_1">
                                    <p className="menutext"> Turn Off Room?</p>
                                    <div className="power_menu_btn">
                                        <button onClick={() => toggleModal} className="no-modal">
                                            <p> No </p> 
                                        </button>

                                        <button onClick={()=> (toggleModal(), modalTurnOff("wholeRoom") )} className="turn-off-modal">
                                            <p> Yes </p>
                                        </button>
                                    </div>
                                    
                            </div>
                            
                            <div className="power_menu_2">
                                    <p className="menutext"> Turn Off All TVs?</p>
                                        <div className="power_menu_btn">

                                        <button onClick={() => toggleModal} className="no-modal">
                                            <p> No </p> 
                                        </button>

                                        <button onClick={()=> (toggleModal(), modalTurnOff('allTvs'))} className="turn-off-modal">
                                            <p> Yes </p>
                                        </button>
                                    </div>
                                    
                            </div>
                            
                            <div className="power_menu_3">
                                    <p className="menutext"> Turn Off Music? </p>

                                    <div className="power_menu_btn">
                                        <button onClick={() => toggleModal} className="no-modal">
                                            <p> No </p> 
                                        </button>

                                        <button onClick={()=> (toggleModal(), modalTurnOff('music'))} className="turn-off-modal">
                                            <p> Yes </p>
                                        </button>
                                    </div>
                                    
                            </div>
                        </div>




                        </div>
                    </div>
                    </div>
                    )}

            </div>



            <div className="background_image_bb" >
             <img className="bbcourtimg"src={BB}  />
            </div>

        </main>
    )
}


export default Main_1