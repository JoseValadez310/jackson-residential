// React Router
import { Link } from "react-router-dom"
//CSS
import "../../assets/css/dashboard_css/Security_Dashboard.css"
//Icons
import menu_button from "../../assets/images/icons/icons8-arrow.svg"
import backspace from "../../assets/images/icons/icons8-backspace.svg"
import clear from "../../assets/images/icons/icons8-x.svg"
//Componets
import Clock from "../../components/Clock"
import { useState, useEffect } from "react"



const SecurityDashboard =()=>{

        const green  = "green_ready"
        const yellow = "yellow_stay"
        const red  = "red_armed"

        const [currentCode, setCurrentCode]         = useState("") 

        const [optionStay, setOptionStay]           = useState(false)
        const [optionAway, setOptionAway]           = useState(false)
        const [optionDisarm, setOptionDisarm]       = useState(false)
        const [optionBypassAll, setOptionBypassAll] = useState(false)



        const [secZone1_title, setSecZone1_title] = useState("")
        const [secZone2_title, setSecZone2_title] = useState("")
        const [secZone3_title, setSecZone3_title] = useState("")
        const [secZone4_title, setSecZone4_title] = useState("")
        const [secZone5_title, setSecZone5_title] = useState("")
        const [secZone6_title, setSecZone6_title] = useState("")
        const [secZone7_title, setSecZone7_title] = useState("")
        const [secZone8_title, setSecZone8_title] = useState("")
        const [secZone9_title, setSecZone9_title] = useState("")

        const [secZone10_title, setSecZone10_title] = useState("")
        const [secZone11_title, setSecZone11_title] = useState("")
        const [secZone12_title, setSecZone12_title] = useState("")
        const [secZone13_title, setSecZone13_title] = useState("")
        const [secZone14_title, setSecZone14_title] = useState("")
        const [secZone15_title, setSecZone15_title] = useState("")
        const [secZone16_title, setSecZone16_title] = useState("")
        const [secZone17_title, setSecZone17_title] = useState("")
        const [secZone18_title, setSecZone18_title] = useState("")
        const [secZone19_title, setSecZone19_title] = useState("")

        const [secZone20_title, setSecZone20_title] = useState("")
        const [secZone21_title, setSecZone21_title] = useState("")
        const [secZone22_title, setSecZone22_title] = useState("")
        const [secZone23_title, setSecZone23_title] = useState("")
        const [secZone24_title, setSecZone24_title] = useState("")
        const [secZone25_title, setSecZone25_title] = useState("")
        const [secZone26_title, setSecZone26_title] = useState("")
        const [secZone27_title, setSecZone27_title] = useState("")
        const [secZone28_title, setSecZone28_title] = useState("")
        const [secZone29_title, setSecZone29_title] = useState("")

        const [secZone30_title, setSecZone30_title] = useState("")
        const [secZone31_title, setSecZone31_title] = useState("")
        const [secZone32_title, setSecZone32_title] = useState("")
        const [secZone33_title, setSecZone33_title] = useState("")
        const [secZone34_title, setSecZone34_title] = useState("")
        const [secZone35_title, setSecZone35_title] = useState("")
        const [secZone36_title, setSecZone36_title] = useState("")
        const [secZone37_title, setSecZone37_title] = useState("")
        const [secZone38_title, setSecZone38_title] = useState("")
        const [secZone39_title, setSecZone39_title] = useState("")

        const [secZone40_title, setSecZone40_title] = useState("")
        const [secZone41_title, setSecZone41_title] = useState("")
        const [secZone42_title, setSecZone42_title] = useState("")
        const [secZone43_title, setSecZone43_title] = useState("")
        const [secZone44_title, setSecZone44_title] = useState("")
        const [secZone45_title, setSecZone45_title] = useState("")
        const [secZone46_title, setSecZone46_title] = useState("")
        const [secZone47_title, setSecZone47_title] = useState("")
        const [secZone48_title, setSecZone48_title] = useState("")
        const [secZone49_title, setSecZone49_title] = useState("")


        const [secZone50_title, setSecZone50_title] = useState("")
        const [secZone51_title, setSecZone51_title] = useState("")
        const [secZone52_title, setSecZone52_title] = useState("")
        const [secZone53_title, setSecZone53_title] = useState("")
        const [secZone54_title, setSecZone54_title] = useState("")
        const [secZone55_title, setSecZone55_title] = useState("")
        const [secZone56_title, setSecZone56_title] = useState("")
        const [secZone57_title, setSecZone57_title] = useState("")
        const [secZone58_title, setSecZone58_title] = useState("")
        const [secZone59_title, setSecZone59_title] = useState("")


        const [secZone60_title, setSecZone60_title] = useState("")
        const [secZone61_title, setSecZone61_title] = useState("")
        const [secZone62_title, setSecZone62_title] = useState("")
        const [secZone63_title, setSecZone63_title] = useState("")
        const [secZone64_title, setSecZone64_title] = useState("")
        const [secZone65_title, setSecZone65_title] = useState("")
        const [secZone66_title, setSecZone66_title] = useState("")
        const [secZone67_title, setSecZone67_title] = useState("")
        const [secZone68_title, setSecZone68_title] = useState("")
        const [secZone69_title, setSecZone69_title] = useState("")


        const [secZone70_title, setSecZone70_title] = useState("")
        const [secZone71_title, setSecZone71_title] = useState("")
        const [secZone72_title, setSecZone72_title] = useState("")
        const [secZone73_title, setSecZone73_title] = useState("")
        const [secZone74_title, setSecZone74_title] = useState("")
        const [secZone75_title, setSecZone75_title] = useState("")
        const [secZone76_title, setSecZone76_title] = useState("")
        const [secZone77_title, setSecZone77_title] = useState("")
        const [secZone78_title, setSecZone78_title] = useState("")
        const [secZone79_title, setSecZone79_title] = useState("")

        const [secZone80_title, setSecZone80_title] = useState("")
        const [secZone81_title, setSecZone81_title] = useState("")
        const [secZone82_title, setSecZone82_title] = useState("")
        const [secZone83_title, setSecZone83_title] = useState("")
        const [secZone84_title, setSecZone84_title] = useState("")
        const [secZone85_title, setSecZone85_title] = useState("")
        const [secZone86_title, setSecZone86_title] = useState("")
        const [secZone87_title, setSecZone87_title] = useState("")
        const [secZone88_title, setSecZone88_title] = useState("")
        const [secZone89_title, setSecZone89_title] = useState("")


        const [secZone90_title, setSecZone90_title] = useState("")
        const [secZone91_title, setSecZone91_title] = useState("")
        const [secZone92_title, setSecZone92_title] = useState("")
        const [secZone93_title, setSecZone93_title] = useState("")
        const [secZone94_title, setSecZone94_title] = useState("")
        const [secZone95_title, setSecZone95_title] = useState("")
        const [secZone96_title, setSecZone96_title] = useState("")
        const [secZone97_title, setSecZone97_title] = useState("")
        const [secZone98_title, setSecZone98_title] = useState("")
        const [secZone99_title, setSecZone99_title] = useState("")


        const [secZone1, setSecZone1] = useState(false)
        const [secZone2, setSecZone2] = useState(false)
        const [secZone3, setSecZone3] = useState(false)
        const [secZone4, setSecZone4] = useState(false)
        const [secZone5, setSecZone5] = useState(false)
        const [secZone6, setSecZone6] = useState(false)
        const [secZone7, setSecZone7] = useState(false)
        const [secZone8, setSecZone8] = useState(false)
        const [secZone9, setSecZone9] = useState(false)

        const [secZone10, setSecZone10] = useState(false)
        const [secZone11, setSecZone11] = useState(false)
        const [secZone12, setSecZone12] = useState(false)
        const [secZone13, setSecZone13] = useState(false)
        const [secZone14, setSecZone14] = useState(false)
        const [secZone15, setSecZone15] = useState(false)
        const [secZone16, setSecZone16] = useState(false)
        const [secZone17, setSecZone17] = useState(false)
        const [secZone18, setSecZone18] = useState(false)
        const [secZone19, setSecZone19] = useState(false)

        const [secZone20, setSecZone20] = useState(false)
        const [secZone21, setSecZone21] = useState(false)
        const [secZone22, setSecZone22] = useState(false)
        const [secZone23, setSecZone23] = useState(false)
        const [secZone24, setSecZone24] = useState(false)
        const [secZone25, setSecZone25] = useState(false)
        const [secZone26, setSecZone26] = useState(false)
        const [secZone27, setSecZone27] = useState(false)
        const [secZone28, setSecZone28] = useState(false)
        const [secZone29, setSecZone29] = useState(false)

        const [secZone30, setSecZone30] = useState(false)
        const [secZone31, setSecZone31] = useState(false)
        const [secZone32, setSecZone32] = useState(false)
        const [secZone33, setSecZone33] = useState(false)
        const [secZone34, setSecZone34] = useState(false)
        const [secZone35, setSecZone35] = useState(false)
        const [secZone36, setSecZone36] = useState(false)
        const [secZone37, setSecZone37] = useState(false)
        const [secZone38, setSecZone38] = useState(false)
        const [secZone39, setSecZone39] = useState(false)

        const [secZone40, setSecZone40] = useState(false)
        const [secZone41, setSecZone41] = useState(false)
        const [secZone42, setSecZone42] = useState(false)
        const [secZone43, setSecZone43] = useState(false)
        const [secZone44, setSecZone44] = useState(false)
        const [secZone45, setSecZone45] = useState(false)
        const [secZone46, setSecZone46] = useState(false)
        const [secZone47, setSecZone47] = useState(false)
        const [secZone48, setSecZone48] = useState(false)
        const [secZone49, setSecZone49] = useState(false)


        const [secZone50, setSecZone50] = useState(false)
        const [secZone51, setSecZone51] = useState(false)
        const [secZone52, setSecZone52] = useState(false)
        const [secZone53, setSecZone53] = useState(false)
        const [secZone54, setSecZone54] = useState(false)
        const [secZone55, setSecZone55] = useState(false)
        const [secZone56, setSecZone56] = useState(false)
        const [secZone57, setSecZone57] = useState(false)
        const [secZone58, setSecZone58] = useState(false)
        const [secZone59, setSecZone59] = useState(false)


        const [secZone60, setSecZone60] = useState(false)
        const [secZone61, setSecZone61] = useState(false)
        const [secZone62, setSecZone62] = useState(false)
        const [secZone63, setSecZone63] = useState(false)
        const [secZone64, setSecZone64] = useState(false)
        const [secZone65, setSecZone65] = useState(false)
        const [secZone66, setSecZone66] = useState(false)
        const [secZone67, setSecZone67] = useState(false)
        const [secZone68, setSecZone68] = useState(false)
        const [secZone69, setSecZone69] = useState(false)


        const [secZone70, setSecZone70] = useState(false)
        const [secZone71, setSecZone71] = useState(false)
        const [secZone72, setSecZone72] = useState(false)
        const [secZone73, setSecZone73] = useState(false)
        const [secZone74, setSecZone74] = useState(false)
        const [secZone75, setSecZone75] = useState(false)
        const [secZone76, setSecZone76] = useState(false)
        const [secZone77, setSecZone77] = useState(false)
        const [secZone78, setSecZone78] = useState(false)
        const [secZone79, setSecZone79] = useState(false)

        const [secZone80, setSecZone80] = useState(false)
        const [secZone81, setSecZone81] = useState(false)
        const [secZone82, setSecZone82] = useState(false)
        const [secZone83, setSecZone83] = useState(false)
        const [secZone84, setSecZone84] = useState(false)
        const [secZone85, setSecZone85] = useState(false)
        const [secZone86, setSecZone86] = useState(false)
        const [secZone87, setSecZone87] = useState(false)
        const [secZone88, setSecZone88] = useState(false)
        const [secZone89, setSecZone89] = useState(false)


        const [secZone90, setSecZone90] = useState(false)
        const [secZone91, setSecZone91] = useState(false)
        const [secZone92, setSecZone92] = useState(false)
        const [secZone93, setSecZone93] = useState(false)
        const [secZone94, setSecZone94] = useState(false)
        const [secZone95, setSecZone95] = useState(false)
        const [secZone96, setSecZone96] = useState(false)
        const [secZone97, setSecZone97] = useState(false)
        const [secZone98, setSecZone98] = useState(false)
        const [secZone99, setSecZone99] = useState(false)

        






        



        
                 useEffect(() => {
                    
             
             
                 
                     // options
             
                     const optionStay = window.CrComLib.subscribeState("b","663",(value: boolean) => {setOptionStay(value);});
                     const optionAway = window.CrComLib.subscribeState("b","664",(value: boolean) => {setOptionAway(value);});
                     const optionDisarm = window.CrComLib.subscribeState("b","665",(value: boolean) => {setOptionDisarm(value);});
                     const optionBypassAll = window.CrComLib.subscribeState("b","666",(value: boolean) => {setOptionBypassAll(value);});
        
                
        
                     // code input

                     const codeInput = window.CrComLib.subscribeState("s","10",(value:string) => setCurrentCode(value))

                     // sec zone
                     const secZone1 = window.CrComLib.subscribeState("b","701",(value:boolean)=>{setSecZone1(value)})
                     const secZone1_title = window.CrComLib.subscribeState("s","101",(value:string)=>{setSecZone1_title(value)})

                     const secZone2 = window.CrComLib.subscribeState("b","702",(value:boolean)=>{setSecZone2(value)})
                     const secZone2_title = window.CrComLib.subscribeState("s","102",(value:string)=>{setSecZone2_title(value)})

                     const secZone3 = window.CrComLib.subscribeState("b","703",(value:boolean)=>{setSecZone3(value)})
                     const secZone3_title = window.CrComLib.subscribeState("s","103",(value:string)=>{setSecZone3_title(value)})

                     const secZone4 = window.CrComLib.subscribeState("b","704",(value:boolean)=>{setSecZone4(value)})
                     const secZone4_title = window.CrComLib.subscribeState("s","104",(value:string)=>{setSecZone4_title(value)})

                     const secZone5 = window.CrComLib.subscribeState("b","705",(value:boolean)=>{setSecZone5(value)})
                     const secZone5_title = window.CrComLib.subscribeState("s","105",(value:string)=>{setSecZone5_title(value)})

                     const secZone6 = window.CrComLib.subscribeState("b","706",(value:boolean)=>{setSecZone6(value)})
                     const secZone6_title = window.CrComLib.subscribeState("s","106",(value:string)=>{setSecZone6_title(value)})

                     const secZone7 = window.CrComLib.subscribeState("b","707",(value:boolean)=>{setSecZone7(value)})
                     const secZone7_title = window.CrComLib.subscribeState("s","107",(value:string)=>{setSecZone7_title(value)})

                     const secZone8 = window.CrComLib.subscribeState("b","708",(value:boolean)=>{setSecZone8(value)})
                     const secZone8_title = window.CrComLib.subscribeState("s","108",(value:string)=>{setSecZone8_title(value)})

                     const secZone9 = window.CrComLib.subscribeState("b","709",(value:boolean)=>{setSecZone9(value)})
                     const secZone9_title = window.CrComLib.subscribeState("s","109",(value:string)=>{setSecZone9_title(value)})
              
                     const secZone10 = window.CrComLib.subscribeState("b","710",(value:boolean)=>{setSecZone10(value)})
                     const secZone10_title = window.CrComLib.subscribeState("s","110",(value:string)=>{setSecZone10_title(value)})


                     const secZone11 = window.CrComLib.subscribeState("b","711",(value:boolean)=>{setSecZone11(value)})
                     const secZone11_title = window.CrComLib.subscribeState("s","111",(value:string)=>{setSecZone11_title(value)})

                     const secZone12 = window.CrComLib.subscribeState("b","712",(value:boolean)=>{setSecZone12(value)})
                     const secZone12_title = window.CrComLib.subscribeState("s","112",(value:string)=>{setSecZone12_title(value)})

                     const secZone13 = window.CrComLib.subscribeState("b","713",(value:boolean)=>{setSecZone13(value)})
                     const secZone13_title = window.CrComLib.subscribeState("s","113",(value:string)=>{setSecZone13_title(value)})

                     const secZone14 = window.CrComLib.subscribeState("b","714",(value:boolean)=>{setSecZone14(value)})
                     const secZone14_title = window.CrComLib.subscribeState("s","114",(value:string)=>{setSecZone14_title(value)})

                     const secZone15 = window.CrComLib.subscribeState("b","715",(value:boolean)=>{setSecZone15(value)})
                     const secZone15_title = window.CrComLib.subscribeState("s","115",(value:string)=>{setSecZone15_title(value)})

                     const secZone16 = window.CrComLib.subscribeState("b","716",(value:boolean)=>{setSecZone16(value)})
                     const secZone16_title = window.CrComLib.subscribeState("s","116",(value:string)=>{setSecZone16_title(value)})

                     const secZone17 = window.CrComLib.subscribeState("b","717",(value:boolean)=>{setSecZone17(value)})
                     const secZone17_title = window.CrComLib.subscribeState("s","117",(value:string)=>{setSecZone17_title(value)})

                     const secZone18 = window.CrComLib.subscribeState("b","718",(value:boolean)=>{setSecZone18(value)})
                     const secZone18_title = window.CrComLib.subscribeState("s","118",(value:string)=>{setSecZone18_title(value)})

                     const secZone19 = window.CrComLib.subscribeState("b","719",(value:boolean)=>{setSecZone19(value)})
                     const secZone19_title = window.CrComLib.subscribeState("s","119",(value:string)=>{setSecZone19_title(value)})
              
                     const secZone20 = window.CrComLib.subscribeState("b","720",(value:boolean)=>{setSecZone20(value)})
                     const secZone20_title = window.CrComLib.subscribeState("s","120",(value:string)=>{setSecZone20_title(value)})


                     const secZone21 = window.CrComLib.subscribeState("b","721",(value:boolean)=>{setSecZone21(value)})
                     const secZone21_title = window.CrComLib.subscribeState("s","121",(value:string)=>{setSecZone21_title(value)})

                     const secZone22 = window.CrComLib.subscribeState("b","722",(value:boolean)=>{setSecZone22(value)})
                     const secZone22_title = window.CrComLib.subscribeState("s","122",(value:string)=>{setSecZone22_title(value)})

                     const secZone23 = window.CrComLib.subscribeState("b","723",(value:boolean)=>{setSecZone23(value)})
                     const secZone23_title = window.CrComLib.subscribeState("s","123",(value:string)=>{setSecZone23_title(value)})

                     const secZone24 = window.CrComLib.subscribeState("b","724",(value:boolean)=>{setSecZone24(value)})
                     const secZone24_title = window.CrComLib.subscribeState("s","124",(value:string)=>{setSecZone24_title(value)})

                     const secZone25 = window.CrComLib.subscribeState("b","725",(value:boolean)=>{setSecZone25(value)})
                     const secZone25_title = window.CrComLib.subscribeState("s","125",(value:string)=>{setSecZone25_title(value)})

                     const secZone26 = window.CrComLib.subscribeState("b","726",(value:boolean)=>{setSecZone26(value)})
                     const secZone26_title = window.CrComLib.subscribeState("s","126",(value:string)=>{setSecZone26_title(value)})

                     const secZone27 = window.CrComLib.subscribeState("b","727",(value:boolean)=>{setSecZone27(value)})
                     const secZone27_title = window.CrComLib.subscribeState("s","127",(value:string)=>{setSecZone27_title(value)})

                     const secZone28 = window.CrComLib.subscribeState("b","728",(value:boolean)=>{setSecZone28(value)})
                     const secZone28_title = window.CrComLib.subscribeState("s","128",(value:string)=>{setSecZone28_title(value)})

                     const secZone29 = window.CrComLib.subscribeState("b","729",(value:boolean)=>{setSecZone29(value)})
                     const secZone29_title = window.CrComLib.subscribeState("s","129",(value:string)=>{setSecZone29_title(value)})
              
                     const secZone30 = window.CrComLib.subscribeState("b","730",(value:boolean)=>{setSecZone30(value)})
                     const secZone30_title = window.CrComLib.subscribeState("s","130",(value:string)=>{setSecZone30_title(value)})



                     const secZone31 = window.CrComLib.subscribeState("b","731",(value:boolean)=>{setSecZone31(value)})
                     const secZone31_title = window.CrComLib.subscribeState("s","131",(value:string)=>{setSecZone31_title(value)})

                     const secZone32 = window.CrComLib.subscribeState("b","732",(value:boolean)=>{setSecZone32(value)})
                     const secZone32_title = window.CrComLib.subscribeState("s","132",(value:string)=>{setSecZone32_title(value)})

                     const secZone33 = window.CrComLib.subscribeState("b","733",(value:boolean)=>{setSecZone33(value)})
                     const secZone33_title = window.CrComLib.subscribeState("s","133",(value:string)=>{setSecZone33_title(value)})

                     const secZone34 = window.CrComLib.subscribeState("b","734",(value:boolean)=>{setSecZone34(value)})
                     const secZone34_title = window.CrComLib.subscribeState("s","134",(value:string)=>{setSecZone34_title(value)})

                     const secZone35 = window.CrComLib.subscribeState("b","735",(value:boolean)=>{setSecZone35(value)})
                     const secZone35_title = window.CrComLib.subscribeState("s","135",(value:string)=>{setSecZone35_title(value)})

                     const secZone36 = window.CrComLib.subscribeState("b","736",(value:boolean)=>{setSecZone36(value)})
                     const secZone36_title = window.CrComLib.subscribeState("s","136",(value:string)=>{setSecZone36_title(value)})

                     const secZone37 = window.CrComLib.subscribeState("b","737",(value:boolean)=>{setSecZone37(value)})
                     const secZone37_title = window.CrComLib.subscribeState("s","137",(value:string)=>{setSecZone37_title(value)})

                     const secZone38 = window.CrComLib.subscribeState("b","738",(value:boolean)=>{setSecZone38(value)})
                     const secZone38_title = window.CrComLib.subscribeState("s","138",(value:string)=>{setSecZone38_title(value)})

                     const secZone39 = window.CrComLib.subscribeState("b","739",(value:boolean)=>{setSecZone39(value)})
                     const secZone39_title = window.CrComLib.subscribeState("s","139",(value:string)=>{setSecZone39_title(value)})
              
                     const secZone40 = window.CrComLib.subscribeState("b","740",(value:boolean)=>{setSecZone40(value)})
                     const secZone40_title = window.CrComLib.subscribeState("s","140",(value:string)=>{setSecZone40_title(value)})




                     const secZone41 = window.CrComLib.subscribeState("b","741",(value:boolean)=>{setSecZone41(value)})
                     const secZone41_title = window.CrComLib.subscribeState("s","141",(value:string)=>{setSecZone41_title(value)})

                     const secZone42 = window.CrComLib.subscribeState("b","742",(value:boolean)=>{setSecZone42(value)})
                     const secZone42_title = window.CrComLib.subscribeState("s","142",(value:string)=>{setSecZone42_title(value)})

                     const secZone43 = window.CrComLib.subscribeState("b","743",(value:boolean)=>{setSecZone43(value)})
                     const secZone43_title = window.CrComLib.subscribeState("s","143",(value:string)=>{setSecZone43_title(value)})

                     const secZone44 = window.CrComLib.subscribeState("b","744",(value:boolean)=>{setSecZone44(value)})
                     const secZone44_title = window.CrComLib.subscribeState("s","144",(value:string)=>{setSecZone44_title(value)})

                     const secZone45 = window.CrComLib.subscribeState("b","745",(value:boolean)=>{setSecZone45(value)})
                     const secZone45_title = window.CrComLib.subscribeState("s","145",(value:string)=>{setSecZone45_title(value)})

                     const secZone46 = window.CrComLib.subscribeState("b","746",(value:boolean)=>{setSecZone46(value)})
                     const secZone46_title = window.CrComLib.subscribeState("s","146",(value:string)=>{setSecZone46_title(value)})

                     const secZone47 = window.CrComLib.subscribeState("b","747",(value:boolean)=>{setSecZone47(value)})
                     const secZone47_title = window.CrComLib.subscribeState("s","147",(value:string)=>{setSecZone47_title(value)})

                     const secZone48 = window.CrComLib.subscribeState("b","748",(value:boolean)=>{setSecZone48(value)})
                     const secZone48_title = window.CrComLib.subscribeState("s","148",(value:string)=>{setSecZone48_title(value)})

                     const secZone49 = window.CrComLib.subscribeState("b","749",(value:boolean)=>{setSecZone49(value)})
                     const secZone49_title = window.CrComLib.subscribeState("s","149",(value:string)=>{setSecZone49_title(value)})
              
                     const secZone50 = window.CrComLib.subscribeState("b","750",(value:boolean)=>{setSecZone50(value)})
                     const secZone50_title = window.CrComLib.subscribeState("s","150",(value:string)=>{setSecZone50_title(value)})



                     const secZone51 = window.CrComLib.subscribeState("b","751",(value:boolean)=>{setSecZone51(value)})
                     const secZone51_title = window.CrComLib.subscribeState("s","151",(value:string)=>{setSecZone51_title(value)})

                     const secZone52 = window.CrComLib.subscribeState("b","752",(value:boolean)=>{setSecZone52(value)})
                     const secZone52_title = window.CrComLib.subscribeState("s","152",(value:string)=>{setSecZone52_title(value)})

                     const secZone53 = window.CrComLib.subscribeState("b","753",(value:boolean)=>{setSecZone53(value)})
                     const secZone53_title = window.CrComLib.subscribeState("s","153",(value:string)=>{setSecZone53_title(value)})

                     const secZone54 = window.CrComLib.subscribeState("b","754",(value:boolean)=>{setSecZone54(value)})
                     const secZone54_title = window.CrComLib.subscribeState("s","154",(value:string)=>{setSecZone54_title(value)})

                     const secZone55 = window.CrComLib.subscribeState("b","755",(value:boolean)=>{setSecZone55(value)})
                     const secZone55_title = window.CrComLib.subscribeState("s","155",(value:string)=>{setSecZone55_title(value)})

                     const secZone56 = window.CrComLib.subscribeState("b","756",(value:boolean)=>{setSecZone56(value)})
                     const secZone56_title = window.CrComLib.subscribeState("s","156",(value:string)=>{setSecZone56_title(value)})

                     const secZone57 = window.CrComLib.subscribeState("b","757",(value:boolean)=>{setSecZone57(value)})
                     const secZone57_title = window.CrComLib.subscribeState("s","157",(value:string)=>{setSecZone57_title(value)})

                     const secZone58 = window.CrComLib.subscribeState("b","758",(value:boolean)=>{setSecZone58(value)})
                     const secZone58_title = window.CrComLib.subscribeState("s","158",(value:string)=>{setSecZone58_title(value)})

                     const secZone59 = window.CrComLib.subscribeState("b","759",(value:boolean)=>{setSecZone59(value)})
                     const secZone59_title = window.CrComLib.subscribeState("s","159",(value:string)=>{setSecZone59_title(value)})
              
                     const secZone60 = window.CrComLib.subscribeState("b","760",(value:boolean)=>{setSecZone60(value)})
                     const secZone60_title = window.CrComLib.subscribeState("s","160",(value:string)=>{setSecZone60_title(value)})





                     const secZone61       = window.CrComLib.subscribeState("b","761",(value:boolean)=>{setSecZone61(value)})
                     const secZone61_title = window.CrComLib.subscribeState("s","161", (value:string)=>{setSecZone61_title(value)})

                     const secZone62       = window.CrComLib.subscribeState("b","762",(value:boolean)=>{setSecZone62(value)})
                     const secZone62_title = window.CrComLib.subscribeState("s","162", (value:string)=>{setSecZone62_title(value)})

                     const secZone63       = window.CrComLib.subscribeState("b","763",(value:boolean)=>{setSecZone63(value)})
                     const secZone63_title = window.CrComLib.subscribeState("s","163", (value:string)=>{setSecZone63_title(value)})

                     const secZone64       = window.CrComLib.subscribeState("b","764",(value:boolean)=>{setSecZone64(value)})
                     const secZone64_title = window.CrComLib.subscribeState("s","164", (value:string)=>{setSecZone64_title(value)})

                     const secZone65       = window.CrComLib.subscribeState("b","765",(value:boolean)=>{setSecZone65(value)})
                     const secZone65_title = window.CrComLib.subscribeState("s","165", (value:string)=>{setSecZone65_title(value)})

                     const secZone66       = window.CrComLib.subscribeState("b","766",(value:boolean)=>{setSecZone66(value)})
                     const secZone66_title = window.CrComLib.subscribeState("s","166", (value:string)=>{setSecZone66_title(value)})

                     const secZone67       = window.CrComLib.subscribeState("b","767",(value:boolean)=>{setSecZone67(value)})
                     const secZone67_title = window.CrComLib.subscribeState("s","167", (value:string)=>{setSecZone67_title(value)})

                     const secZone68       = window.CrComLib.subscribeState("b","768",(value:boolean)=>{setSecZone68(value)})
                     const secZone68_title = window.CrComLib.subscribeState("s","168", (value:string)=>{setSecZone68_title(value)})

                     const secZone69       = window.CrComLib.subscribeState("b","769",(value:boolean)=>{setSecZone69(value)})
                     const secZone69_title = window.CrComLib.subscribeState("s","169", (value:string)=>{setSecZone69_title(value)})
              
                     const secZone70       = window.CrComLib.subscribeState("b","770",(value:boolean)=>{setSecZone70(value)})
                     const secZone70_title = window.CrComLib.subscribeState("s","170", (value:string)=>{setSecZone70_title(value)})



                     const secZone71       = window.CrComLib.subscribeState("b","771",(value:boolean)=>{setSecZone71(value)})
                     const secZone71_title = window.CrComLib.subscribeState("s","171", (value:string)=>{setSecZone71_title(value)})
                     const secZone72       = window.CrComLib.subscribeState("b","772",(value:boolean)=>{setSecZone72(value)})
                     const secZone72_title = window.CrComLib.subscribeState("s","172", (value:string)=>{setSecZone72_title(value)})
                     const secZone73       = window.CrComLib.subscribeState("b","773",(value:boolean)=>{setSecZone73(value)})
                     const secZone73_title = window.CrComLib.subscribeState("s","173", (value:string)=>{setSecZone73_title(value)})
                     const secZone74       = window.CrComLib.subscribeState("b","774",(value:boolean)=>{setSecZone74(value)})
                     const secZone74_title = window.CrComLib.subscribeState("s","174", (value:string)=>{setSecZone74_title(value)})
                     const secZone75       = window.CrComLib.subscribeState("b","775",(value:boolean)=>{setSecZone75(value)})
                     const secZone75_title = window.CrComLib.subscribeState("s","175", (value:string)=>{setSecZone75_title(value)})
                     const secZone76       = window.CrComLib.subscribeState("b","776",(value:boolean)=>{setSecZone76(value)})
                     const secZone76_title = window.CrComLib.subscribeState("s","176", (value:string)=>{setSecZone76_title(value)})
                     const secZone77       = window.CrComLib.subscribeState("b","777",(value:boolean)=>{setSecZone77(value)})
                     const secZone77_title = window.CrComLib.subscribeState("s","177", (value:string)=>{setSecZone77_title(value)})
                     const secZone78       = window.CrComLib.subscribeState("b","778",(value:boolean)=>{setSecZone78(value)})
                     const secZone78_title = window.CrComLib.subscribeState("s","178", (value:string)=>{setSecZone78_title(value)})
                     const secZone79       = window.CrComLib.subscribeState("b","779",(value:boolean)=>{setSecZone79(value)})
                     const secZone79_title = window.CrComLib.subscribeState("s","179", (value:string)=>{setSecZone79_title(value)})
                     const secZone80       = window.CrComLib.subscribeState("b","780",(value:boolean)=>{setSecZone80(value)})
                     const secZone80_title = window.CrComLib.subscribeState("s","180", (value:string)=>{setSecZone80_title(value)})


                     const secZone81       = window.CrComLib.subscribeState("b","781",(value:boolean)=>{setSecZone81(value)})
                     const secZone81_title = window.CrComLib.subscribeState("s","181", (value:string)=>{setSecZone81_title(value)})
                     const secZone82       = window.CrComLib.subscribeState("b","782",(value:boolean)=>{setSecZone82(value)})
                     const secZone82_title = window.CrComLib.subscribeState("s","182", (value:string)=>{setSecZone82_title(value)})
                     const secZone83       = window.CrComLib.subscribeState("b","783",(value:boolean)=>{setSecZone83(value)})
                     const secZone83_title = window.CrComLib.subscribeState("s","183", (value:string)=>{setSecZone83_title(value)})
                     const secZone84       = window.CrComLib.subscribeState("b","784",(value:boolean)=>{setSecZone84(value)})
                     const secZone84_title = window.CrComLib.subscribeState("s","184", (value:string)=>{setSecZone84_title(value)})
                     const secZone85       = window.CrComLib.subscribeState("b","785",(value:boolean)=>{setSecZone85(value)})
                     const secZone85_title = window.CrComLib.subscribeState("s","185", (value:string)=>{setSecZone85_title(value)})
                     const secZone86       = window.CrComLib.subscribeState("b","786",(value:boolean)=>{setSecZone86(value)})
                     const secZone86_title = window.CrComLib.subscribeState("s","186", (value:string)=>{setSecZone86_title(value)})
                     const secZone87       = window.CrComLib.subscribeState("b","787",(value:boolean)=>{setSecZone87(value)})
                     const secZone87_title = window.CrComLib.subscribeState("s","187", (value:string)=>{setSecZone87_title(value)})
                     const secZone88       = window.CrComLib.subscribeState("b","788",(value:boolean)=>{setSecZone88(value)})
                     const secZone88_title = window.CrComLib.subscribeState("s","188", (value:string)=>{setSecZone88_title(value)})
                     const secZone89       = window.CrComLib.subscribeState("b","789",(value:boolean)=>{setSecZone89(value)})
                     const secZone89_title = window.CrComLib.subscribeState("s","189", (value:string)=>{setSecZone89_title(value)})
                     const secZone90       = window.CrComLib.subscribeState("b","790",(value:boolean)=>{setSecZone90(value)})
                     const secZone90_title = window.CrComLib.subscribeState("s","190", (value:string)=>{setSecZone90_title(value)})
                     

                     const secZone91       = window.CrComLib.subscribeState("b","791",(value:boolean)=>{setSecZone91(value)})
                     const secZone91_title = window.CrComLib.subscribeState("s","191", (value:string)=>{setSecZone91_title(value)})
                     const secZone92       = window.CrComLib.subscribeState("b","792",(value:boolean)=>{setSecZone92(value)})
                     const secZone92_title = window.CrComLib.subscribeState("s","192", (value:string)=>{setSecZone92_title(value)})
                     const secZone93       = window.CrComLib.subscribeState("b","793",(value:boolean)=>{setSecZone93(value)})
                     const secZone93_title = window.CrComLib.subscribeState("s","193", (value:string)=>{setSecZone93_title(value)})
                     const secZone94       = window.CrComLib.subscribeState("b","794",(value:boolean)=>{setSecZone94(value)})
                     const secZone94_title = window.CrComLib.subscribeState("s","194", (value:string)=>{setSecZone94_title(value)})
                     const secZone95       = window.CrComLib.subscribeState("b","795",(value:boolean)=>{setSecZone95(value)})
                     const secZone95_title = window.CrComLib.subscribeState("s","195", (value:string)=>{setSecZone95_title(value)})
                     const secZone96       = window.CrComLib.subscribeState("b","796",(value:boolean)=>{setSecZone96(value)})
                     const secZone96_title = window.CrComLib.subscribeState("s","196", (value:string)=>{setSecZone96_title(value)})
                     const secZone97       = window.CrComLib.subscribeState("b","797",(value:boolean)=>{setSecZone97(value)})
                     const secZone97_title = window.CrComLib.subscribeState("s","197", (value:string)=>{setSecZone97_title(value)})
                     const secZone98       = window.CrComLib.subscribeState("b","798",(value:boolean)=>{setSecZone98(value)})
                     const secZone98_title = window.CrComLib.subscribeState("s","198", (value:string)=>{setSecZone98_title(value)})
                     const secZone99       = window.CrComLib.subscribeState("b","799",(value:boolean)=>{setSecZone99(value)})
                     const secZone99_title = window.CrComLib.subscribeState("s","199", (value:string)=>{setSecZone99_title(value)})
                     
                  
                    
                    

             
                     return () => {
                        window.CrComLib.unsubscribeState("b","701",secZone1)
                        window.CrComLib.unsubscribeState("s","101",secZone1_title)
                        window.CrComLib.unsubscribeState("b","702",secZone2)
                        window.CrComLib.unsubscribeState("s","102",secZone2_title)
                        window.CrComLib.unsubscribeState("b","703",secZone3)
                        window.CrComLib.unsubscribeState("s","103",secZone3_title)
                        window.CrComLib.unsubscribeState("b","704",secZone4)
                        window.CrComLib.unsubscribeState("s","104",secZone4_title)
                        window.CrComLib.unsubscribeState("b","705",secZone5)
                        window.CrComLib.unsubscribeState("s","105",secZone5_title)
                        window.CrComLib.unsubscribeState("b","706",secZone6)
                        window.CrComLib.unsubscribeState("s","106",secZone6_title)
                        window.CrComLib.unsubscribeState("b","707",secZone7)
                        window.CrComLib.unsubscribeState("s","107",secZone7_title)
                        window.CrComLib.unsubscribeState("b","708",secZone8)
                        window.CrComLib.unsubscribeState("s","108",secZone8_title)
                        window.CrComLib.unsubscribeState("b","709",secZone9)
                        window.CrComLib.unsubscribeState("s","109",secZone9_title)
                        window.CrComLib.unsubscribeState("b","710",secZone10)
                        window.CrComLib.unsubscribeState("s","110",secZone10_title)


                        window.CrComLib.unsubscribeState("b","711",secZone11)
                        window.CrComLib.unsubscribeState("s","111",secZone11_title)
                        window.CrComLib.unsubscribeState("b","712",secZone12)
                        window.CrComLib.unsubscribeState("s","112",secZone12_title)
                        window.CrComLib.unsubscribeState("b","713",secZone13)
                        window.CrComLib.unsubscribeState("s","113",secZone13_title)
                        window.CrComLib.unsubscribeState("b","714",secZone14)
                        window.CrComLib.unsubscribeState("s","114",secZone14_title)
                        window.CrComLib.unsubscribeState("b","715",secZone15)
                        window.CrComLib.unsubscribeState("s","115",secZone15_title)
                        window.CrComLib.unsubscribeState("b","716",secZone16)
                        window.CrComLib.unsubscribeState("s","116",secZone16_title)
                        window.CrComLib.unsubscribeState("b","717",secZone17)
                        window.CrComLib.unsubscribeState("s","117",secZone17_title)
                        window.CrComLib.unsubscribeState("b","718",secZone18)
                        window.CrComLib.unsubscribeState("s","118",secZone18_title)
                        window.CrComLib.unsubscribeState("b","719",secZone19)
                        window.CrComLib.unsubscribeState("s","119",secZone19_title)
                        window.CrComLib.unsubscribeState("b","720",secZone20)
                        window.CrComLib.unsubscribeState("s","120",secZone20_title)

                        window.CrComLib.unsubscribeState("b","721",secZone21)
                        window.CrComLib.unsubscribeState("s","121",secZone21_title)
                        window.CrComLib.unsubscribeState("b","722",secZone22)
                        window.CrComLib.unsubscribeState("s","122",secZone22_title)
                        window.CrComLib.unsubscribeState("b","723",secZone23)
                        window.CrComLib.unsubscribeState("s","123",secZone23_title)
                        window.CrComLib.unsubscribeState("b","724",secZone24)
                        window.CrComLib.unsubscribeState("s","124",secZone24_title)
                        window.CrComLib.unsubscribeState("b","725",secZone25)
                        window.CrComLib.unsubscribeState("s","125",secZone25_title)
                        window.CrComLib.unsubscribeState("b","726",secZone26)
                        window.CrComLib.unsubscribeState("s","126",secZone26_title)
                        window.CrComLib.unsubscribeState("b","727",secZone27)
                        window.CrComLib.unsubscribeState("s","127",secZone27_title)
                        window.CrComLib.unsubscribeState("b","728",secZone28)
                        window.CrComLib.unsubscribeState("s","128",secZone28_title)
                        window.CrComLib.unsubscribeState("b","729",secZone29)
                        window.CrComLib.unsubscribeState("s","129",secZone29_title)
                        window.CrComLib.unsubscribeState("b","730",secZone30)
                        window.CrComLib.unsubscribeState("s","130",secZone30_title)

                        window.CrComLib.unsubscribeState("b","731",secZone31)
                        window.CrComLib.unsubscribeState("s","131",secZone31_title)
                        window.CrComLib.unsubscribeState("b","732",secZone32)
                        window.CrComLib.unsubscribeState("s","132",secZone32_title)
                        window.CrComLib.unsubscribeState("b","733",secZone33)
                        window.CrComLib.unsubscribeState("s","133",secZone33_title)
                        window.CrComLib.unsubscribeState("b","734",secZone34)
                        window.CrComLib.unsubscribeState("s","134",secZone34_title)
                        window.CrComLib.unsubscribeState("b","735",secZone35)
                        window.CrComLib.unsubscribeState("s","135",secZone35_title)
                        window.CrComLib.unsubscribeState("b","736",secZone36)
                        window.CrComLib.unsubscribeState("s","136",secZone36_title)
                        window.CrComLib.unsubscribeState("b","737",secZone37)
                        window.CrComLib.unsubscribeState("s","137",secZone37_title)
                        window.CrComLib.unsubscribeState("b","738",secZone38)
                        window.CrComLib.unsubscribeState("s","138",secZone38_title)
                        window.CrComLib.unsubscribeState("b","739",secZone39)
                        window.CrComLib.unsubscribeState("s","139",secZone39_title)
                        window.CrComLib.unsubscribeState("b","740",secZone40)
                        window.CrComLib.unsubscribeState("s","140",secZone40_title)

                        window.CrComLib.unsubscribeState("b","741",secZone41)
                        window.CrComLib.unsubscribeState("s","141",secZone41_title)
                        window.CrComLib.unsubscribeState("b","742",secZone42)
                        window.CrComLib.unsubscribeState("s","142",secZone42_title)
                        window.CrComLib.unsubscribeState("b","743",secZone43)
                        window.CrComLib.unsubscribeState("s","143",secZone43_title)
                        window.CrComLib.unsubscribeState("b","744",secZone44)
                        window.CrComLib.unsubscribeState("s","144",secZone44_title)
                        window.CrComLib.unsubscribeState("b","745",secZone45)
                        window.CrComLib.unsubscribeState("s","145",secZone45_title)
                        window.CrComLib.unsubscribeState("b","746",secZone46)
                        window.CrComLib.unsubscribeState("s","146",secZone46_title)
                        window.CrComLib.unsubscribeState("b","747",secZone47)
                        window.CrComLib.unsubscribeState("s","147",secZone47_title)
                        window.CrComLib.unsubscribeState("b","748",secZone48)
                        window.CrComLib.unsubscribeState("s","148",secZone48_title)
                        window.CrComLib.unsubscribeState("b","749",secZone49)
                        window.CrComLib.unsubscribeState("s","149",secZone49_title)
                        window.CrComLib.unsubscribeState("b","750",secZone50)
                        window.CrComLib.unsubscribeState("s","150",secZone50_title)

                        window.CrComLib.unsubscribeState("b","751",secZone51)
                        window.CrComLib.unsubscribeState("s","151",secZone51_title)
                        window.CrComLib.unsubscribeState("b","752",secZone52)
                        window.CrComLib.unsubscribeState("s","152",secZone52_title)
                        window.CrComLib.unsubscribeState("b","753",secZone53)
                        window.CrComLib.unsubscribeState("s","153",secZone53_title)
                        window.CrComLib.unsubscribeState("b","754",secZone54)
                        window.CrComLib.unsubscribeState("s","154",secZone54_title)
                        window.CrComLib.unsubscribeState("b","755",secZone55)
                        window.CrComLib.unsubscribeState("s","155",secZone55_title)
                        window.CrComLib.unsubscribeState("b","756",secZone56)
                        window.CrComLib.unsubscribeState("s","156",secZone56_title)
                        window.CrComLib.unsubscribeState("b","757",secZone57)
                        window.CrComLib.unsubscribeState("s","157",secZone57_title)
                        window.CrComLib.unsubscribeState("b","758",secZone58)
                        window.CrComLib.unsubscribeState("s","158",secZone58_title)
                        window.CrComLib.unsubscribeState("b","759",secZone59)
                        window.CrComLib.unsubscribeState("s","159",secZone59_title)
                        window.CrComLib.unsubscribeState("b","760",secZone60)
                        window.CrComLib.unsubscribeState("s","160",secZone60_title)


                        window.CrComLib.unsubscribeState("b","761",secZone61)
                        window.CrComLib.unsubscribeState("s","161",secZone61_title)
                        window.CrComLib.unsubscribeState("b","762",secZone62)
                        window.CrComLib.unsubscribeState("s","162",secZone62_title)
                        window.CrComLib.unsubscribeState("b","763",secZone63)
                        window.CrComLib.unsubscribeState("s","163",secZone63_title)
                        window.CrComLib.unsubscribeState("b","764",secZone64)
                        window.CrComLib.unsubscribeState("s","164",secZone64_title)
                        window.CrComLib.unsubscribeState("b","765",secZone65)
                        window.CrComLib.unsubscribeState("s","165",secZone65_title)
                        window.CrComLib.unsubscribeState("b","766",secZone66)
                        window.CrComLib.unsubscribeState("s","166",secZone66_title)
                        window.CrComLib.unsubscribeState("b","767",secZone67)
                        window.CrComLib.unsubscribeState("s","167",secZone67_title)
                        window.CrComLib.unsubscribeState("b","768",secZone68)
                        window.CrComLib.unsubscribeState("s","168",secZone68_title)
                        window.CrComLib.unsubscribeState("b","769",secZone69)
                        window.CrComLib.unsubscribeState("s","169",secZone69_title)
                        window.CrComLib.unsubscribeState("b","770",secZone70)
                        window.CrComLib.unsubscribeState("s","170",secZone70_title)

                        window.CrComLib.unsubscribeState("b","771",secZone71)
                        window.CrComLib.unsubscribeState("s","171",secZone71_title)
                        window.CrComLib.unsubscribeState("b","772",secZone72)
                        window.CrComLib.unsubscribeState("s","172",secZone72_title)
                        window.CrComLib.unsubscribeState("b","773",secZone73)
                        window.CrComLib.unsubscribeState("s","173",secZone73_title)
                        window.CrComLib.unsubscribeState("b","774",secZone74)
                        window.CrComLib.unsubscribeState("s","174",secZone74_title)
                        window.CrComLib.unsubscribeState("b","775",secZone75)
                        window.CrComLib.unsubscribeState("s","175",secZone75_title)
                        window.CrComLib.unsubscribeState("b","776",secZone76)
                        window.CrComLib.unsubscribeState("s","176",secZone76_title)
                        window.CrComLib.unsubscribeState("b","777",secZone77)
                        window.CrComLib.unsubscribeState("s","177",secZone77_title)
                        window.CrComLib.unsubscribeState("b","778",secZone78)
                        window.CrComLib.unsubscribeState("s","178",secZone78_title)
                        window.CrComLib.unsubscribeState("b","779",secZone79)
                        window.CrComLib.unsubscribeState("s","179",secZone79_title)
                        window.CrComLib.unsubscribeState("b","780",secZone80)
                        window.CrComLib.unsubscribeState("s","180",secZone80_title)


                        window.CrComLib.unsubscribeState("b","781",secZone81)
                        window.CrComLib.unsubscribeState("s","181",secZone81_title)
                        window.CrComLib.unsubscribeState("b","782",secZone82)
                        window.CrComLib.unsubscribeState("s","182",secZone82_title)
                        window.CrComLib.unsubscribeState("b","783",secZone83)
                        window.CrComLib.unsubscribeState("s","183",secZone83_title)
                        window.CrComLib.unsubscribeState("b","784",secZone84)
                        window.CrComLib.unsubscribeState("s","184",secZone84_title)
                        window.CrComLib.unsubscribeState("b","785",secZone85)
                        window.CrComLib.unsubscribeState("s","185",secZone85_title)
                        window.CrComLib.unsubscribeState("b","786",secZone86)
                        window.CrComLib.unsubscribeState("s","186",secZone86_title)
                        window.CrComLib.unsubscribeState("b","787",secZone87)
                        window.CrComLib.unsubscribeState("s","187",secZone87_title)
                        window.CrComLib.unsubscribeState("b","788",secZone88)
                        window.CrComLib.unsubscribeState("s","188",secZone88_title)
                        window.CrComLib.unsubscribeState("b","789",secZone89)
                        window.CrComLib.unsubscribeState("s","189",secZone89_title)
                        window.CrComLib.unsubscribeState("b","790",secZone90)
                        window.CrComLib.unsubscribeState("s","190",secZone90_title)


                        window.CrComLib.unsubscribeState("b","791",secZone91)
                        window.CrComLib.unsubscribeState("s","191",secZone91_title)
                        window.CrComLib.unsubscribeState("b","792",secZone92)
                        window.CrComLib.unsubscribeState("s","192",secZone92_title)
                        window.CrComLib.unsubscribeState("b","793",secZone93)
                        window.CrComLib.unsubscribeState("s","193",secZone93_title)
                        window.CrComLib.unsubscribeState("b","794",secZone94)
                        window.CrComLib.unsubscribeState("s","194",secZone94_title)
                        window.CrComLib.unsubscribeState("b","795",secZone95)
                        window.CrComLib.unsubscribeState("s","195",secZone95_title)
                        window.CrComLib.unsubscribeState("b","796",secZone96)
                        window.CrComLib.unsubscribeState("s","196",secZone96_title)
                        window.CrComLib.unsubscribeState("b","797",secZone97)
                        window.CrComLib.unsubscribeState("s","197",secZone97_title)
                        window.CrComLib.unsubscribeState("b","798",secZone98)
                        window.CrComLib.unsubscribeState("s","198",secZone98_title)
                        window.CrComLib.unsubscribeState("b","799",secZone99)
                        window.CrComLib.unsubscribeState("s","199",secZone99_title)
                        
                        

             
                          
             
                         window.CrComLib.unsubscribeState("b","663",optionStay) //
                         window.CrComLib.unsubscribeState("b","664",optionAway) //
                         window.CrComLib.unsubscribeState("b","665",optionDisarm) //
                         window.CrComLib.unsubscribeState("b","666",optionBypassAll) // 

                       
                         window.CrComLib.unsubscribeState("s","10", codeInput)
        
        
        
        
             
                         
                       
                         
                     }
                   }, []);
             







console.log(green, yellow, red)

    return(
        <div className="security_dashboard">

            <Link to={"/"} className="mobile_back_btn"> 
                <button className="back_button">
                    <img src={menu_button}/>
                </button>
            </Link>


            <div className="nav_container">
                    <Link to={"/"}> 
                        <button className="back_button">
                            <img src={menu_button}/>
                        </button>
                    </Link>

                <div className="nav">
                   
                </div>
                

                <div className="display_none">
                    <Clock />
                </div>

            </div>


            <h1 className="title_info"> Security </h1>

            <div  className="security_zones_title"> <h2>Open Zones</h2></div>
            <div className="security_zones">
    
                
                <div className= {secZone1? "security_zone_card":"display_none"}>
                             <p>{secZone1_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone2? "security_zone_card":"display_none"}>
                             <p>{secZone2_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone3? "security_zone_card":"display_none"}>
                             <p>{secZone3_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone4? "security_zone_card":"display_none"}>
                             <p>{secZone4_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone5? "security_zone_card":"display_none"}>
                             <p>{secZone5_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone6? "security_zone_card":"display_none"}>
                             <p>{secZone6_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone7? "security_zone_card":"display_none"}>
                             <p>{secZone7_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone8? "security_zone_card":"display_none"}>
                             <p>{secZone8_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone9? "security_zone_card":"display_none"}>
                             <p>{secZone9_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone10? "security_zone_card":"display_none"}>
                             <p>{secZone10_title}</p>
                    <p>Open</p>
                </div>


                <div className= {secZone11? "security_zone_card":"display_none"}>
                             <p>{secZone11_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone12? "security_zone_card":"display_none"}>
                             <p>{secZone12_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone13? "security_zone_card":"display_none"}>
                             <p>{secZone13_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone14? "security_zone_card":"display_none"}>
                             <p>{secZone14_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone15? "security_zone_card":"display_none"}>
                             <p>{secZone15_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone16? "security_zone_card":"display_none"}>
                             <p>{secZone16_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone17? "security_zone_card":"display_none"}>
                             <p>{secZone17_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone18? "security_zone_card":"display_none"}>
                             <p>{secZone18_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone19? "security_zone_card":"display_none"}>
                             <p>{secZone19_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone20? "security_zone_card":"display_none"}>
                             <p>{secZone20_title}</p>
                    <p>Open</p>
                </div>

                <div className= {secZone21? "security_zone_card":"display_none"}>
                             <p>{secZone21_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone22? "security_zone_card":"display_none"}>
                             <p>{secZone22_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone23? "security_zone_card":"display_none"}>
                             <p>{secZone23_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone24? "security_zone_card":"display_none"}>
                             <p>{secZone24_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone25? "security_zone_card":"display_none"}>
                             <p>{secZone25_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone26? "security_zone_card":"display_none"}>
                             <p>{secZone26_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone27? "security_zone_card":"display_none"}>
                             <p>{secZone27_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone28? "security_zone_card":"display_none"}>
                             <p>{secZone28_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone29? "security_zone_card":"display_none"}>
                             <p>{secZone29_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone30? "security_zone_card":"display_none"}>
                             <p>{secZone30_title}</p>
                    <p>Open</p>
                </div>

                <div className= {secZone31? "security_zone_card":"display_none"}>
                             <p>{secZone31_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone32? "security_zone_card":"display_none"}>
                             <p>{secZone32_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone33? "security_zone_card":"display_none"}>
                             <p>{secZone33_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone34? "security_zone_card":"display_none"}>
                             <p>{secZone34_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone35? "security_zone_card":"display_none"}>
                             <p>{secZone35_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone36? "security_zone_card":"display_none"}>
                             <p>{secZone36_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone37? "security_zone_card":"display_none"}>
                             <p>{secZone37_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone38? "security_zone_card":"display_none"}>
                             <p>{secZone38_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone39? "security_zone_card":"display_none"}>
                             <p>{secZone39_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone40? "security_zone_card":"display_none"}>
                             <p>{secZone40_title}</p>
                    <p>Open</p>
                </div>

                <div className= {secZone41? "security_zone_card":"display_none"}>
                             <p>{secZone41_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone42? "security_zone_card":"display_none"}>
                             <p>{secZone42_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone43? "security_zone_card":"display_none"}>
                             <p>{secZone43_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone44? "security_zone_card":"display_none"}>
                             <p>{secZone44_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone45? "security_zone_card":"display_none"}>
                             <p>{secZone45_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone46? "security_zone_card":"display_none"}>
                             <p>{secZone46_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone47? "security_zone_card":"display_none"}>
                             <p>{secZone47_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone48? "security_zone_card":"display_none"}>
                             <p>{secZone48_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone49? "security_zone_card":"display_none"}>
                             <p>{secZone49_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone50? "security_zone_card":"display_none"}>
                             <p>{secZone50_title}</p>
                    <p>Open</p>
                </div>

                <div className= {secZone51? "security_zone_card":"display_none"}>
                             <p>{secZone51_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone52? "security_zone_card":"display_none"}>
                             <p>{secZone52_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone53? "security_zone_card":"display_none"}>
                             <p>{secZone53_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone54? "security_zone_card":"display_none"}>
                             <p>{secZone54_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone55? "security_zone_card":"display_none"}>
                             <p>{secZone55_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone56? "security_zone_card":"display_none"}>
                             <p>{secZone56_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone57? "security_zone_card":"display_none"}>
                             <p>{secZone57_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone58? "security_zone_card":"display_none"}>
                             <p>{secZone58_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone59? "security_zone_card":"display_none"}>
                             <p>{secZone59_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone60? "security_zone_card":"display_none"}>
                             <p>{secZone60_title}</p>
                    <p>Open</p>
                </div>

                <div className= {secZone61? "security_zone_card":"display_none"}>
                             <p>{secZone61_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone62? "security_zone_card":"display_none"}>
                             <p>{secZone62_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone63? "security_zone_card":"display_none"}>
                             <p>{secZone63_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone64? "security_zone_card":"display_none"}>
                             <p>{secZone64_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone65? "security_zone_card":"display_none"}>
                             <p>{secZone65_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone66? "security_zone_card":"display_none"}>
                             <p>{secZone66_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone67? "security_zone_card":"display_none"}>
                             <p>{secZone67_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone68? "security_zone_card":"display_none"}>
                             <p>{secZone68_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone69? "security_zone_card":"display_none"}>
                             <p>{secZone69_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone70? "security_zone_card":"display_none"}>
                             <p>{secZone70_title}</p>
                    <p>Open</p>
                </div>

                <div className= {secZone71? "security_zone_card":"display_none"}>
                             <p>{secZone71_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone72? "security_zone_card":"display_none"}>
                             <p>{secZone72_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone73? "security_zone_card":"display_none"}>
                             <p>{secZone73_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone74? "security_zone_card":"display_none"}>
                             <p>{secZone74_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone75? "security_zone_card":"display_none"}>
                             <p>{secZone75_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone76? "security_zone_card":"display_none"}>
                             <p>{secZone76_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone77? "security_zone_card":"display_none"}>
                             <p>{secZone77_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone78? "security_zone_card":"display_none"}>
                             <p>{secZone78_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone79? "security_zone_card":"display_none"}>
                             <p>{secZone79_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone80? "security_zone_card":"display_none"}>
                             <p>{secZone80_title}</p>
                    <p>Open</p>
                </div>

                <div className= {secZone81? "security_zone_card":"display_none"}>
                             <p>{secZone81_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone82? "security_zone_card":"display_none"}>
                             <p>{secZone82_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone83? "security_zone_card":"display_none"}>
                             <p>{secZone83_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone84? "security_zone_card":"display_none"}>
                             <p>{secZone84_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone85? "security_zone_card":"display_none"}>
                             <p>{secZone85_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone86? "security_zone_card":"display_none"}>
                             <p>{secZone86_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone87? "security_zone_card":"display_none"}>
                             <p>{secZone87_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone88? "security_zone_card":"display_none"}>
                             <p>{secZone88_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone89? "security_zone_card":"display_none"}>
                             <p>{secZone89_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone90? "security_zone_card":"display_none"}>
                             <p>{secZone90_title}</p>
                    <p>Open</p>
                </div>

                <div className= {secZone91? "security_zone_card":"display_none"}>
                             <p>{secZone91_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone92? "security_zone_card":"display_none"}>
                             <p>{secZone92_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone93? "security_zone_card":"display_none"}>
                             <p>{secZone93_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone94? "security_zone_card":"display_none"}>
                             <p>{secZone94_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone95? "security_zone_card":"display_none"}>
                             <p>{secZone95_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone96? "security_zone_card":"display_none"}>
                             <p>{secZone96_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone97? "security_zone_card":"display_none"}>
                             <p>{secZone97_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone98? "security_zone_card":"display_none"}>
                             <p>{secZone98_title}</p>
                    <p>Open</p>
                </div>
                <div className= {secZone99? "security_zone_card":"display_none"}>
                             <p>{secZone99_title}</p>
                    <p>Open</p>
                </div>
              
            </div>


            <div className="security_keypad_container">
                
                <div className="security_keypad_inner_contianer">

                    <div className="feedback_viewer"> 
                            <h1>  {currentCode}  </h1>
                    
                    </div>
                    <div className="keypad">
                            <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","650",true),window.CrComLib.publishEvent("b","650",false), console.log("key 1 650") }}><p className="num">1</p></button>
                            <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","651",true),window.CrComLib.publishEvent("b","651",false), console.log("key 2 651") }}><p className="num">2</p></button>
                            <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","652",true),window.CrComLib.publishEvent("b","652",false), console.log("key 3 652") }}><p className="num">3</p></button>

                            <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","653",true),window.CrComLib.publishEvent("b","653",false), console.log("key 4 653") }}><p className="num">4</p></button>
                            <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","654",true),window.CrComLib.publishEvent("b","654",false), console.log("key 5 654") }}><p className="num">5</p></button>
                            <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","655",true),window.CrComLib.publishEvent("b","655",false), console.log("key 6 655") }}><p className="num">6</p></button>

                            <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","656",true),window.CrComLib.publishEvent("b","656",false), console.log("key 7 656") }}><p className="num">7</p></button>
                            <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","657",true),window.CrComLib.publishEvent("b","657",false), console.log("key 8 657") }}><p className="num">8</p></button>
                            <button className="btn_circle" onClick={() => {window.CrComLib.publishEvent("b","658",true),window.CrComLib.publishEvent("b","658",false), console.log("key 9 658") }}><p className="num">9</p></button>


                            <button className="btn_circle" id="btn_active_red" onClick={() => {window.CrComLib.publishEvent("b","660",true),window.CrComLib.publishEvent("b","660",false), console.log("key clear 660") }}> <img className="btn_image" src={clear} style={{height:"60%"}}/></button>
                            <button className="btn_circle"  onClick={() => {window.CrComLib.publishEvent("b","659",true),window.CrComLib.publishEvent("b","659",false), console.log("key 0 659") }}><p className="num" >0</p></button>
                            <button className="btn_circle" id="btn_active_red" onClick={() => {window.CrComLib.publishEvent("b","661",true),window.CrComLib.publishEvent("b","661",false), console.log("key backspace 661") }}> <img className="btn_image" src={backspace} style={{height:"68%"}}/></button>

                          
                    </div>

                </div>

            </div>

            <div className=" control_container">
                    <button className="btn_circle" id={optionStay? "active_btn_sec":""} onClick={() => {window.CrComLib.publishEvent("b","663",true),window.CrComLib.publishEvent("b","663",false), console.log("stay 663") }}><p>Stay</p></button>
                    <button className="btn_circle" id={optionAway? "active_btn_sec":""} onClick={() => {window.CrComLib.publishEvent("b","664",true),window.CrComLib.publishEvent("b","664",false), console.log("away 664") }}><p>Away</p></button>
                    <button className="btn_circle" id={optionDisarm? "active_btn_sec":""} onClick={() => {window.CrComLib.publishEvent("b","665",true),window.CrComLib.publishEvent("b","665",false), console.log("disarm 665") }}><p>Disarm</p></button>
                    <button className="btn_circle" id={optionBypassAll? "active_btn_sec":""} onClick={() => {window.CrComLib.publishEvent("b","666",true),window.CrComLib.publishEvent("b","666",false), console.log("Bypass all 666") }}><p>Bypass All</p></button>
            </div>

            <div className=" light_indicator">
                    <div className="light_indicator_container"><p>Ready</p> <div id={optionDisarm? "active_btn_ready":"not_active_ind"}></div> </div>
                    <div className="light_indicator_container"><p>Stay</p>  <div id={optionStay? "active_btn_stay" :"not_active_ind"}></div> </div>
                    <div className="light_indicator_container"><p>Armed</p> <div id={optionAway? "active_btn_armed":"not_active_ind"}></div> </div>
            </div>

          

        </div>
    )
}



export default SecurityDashboard
