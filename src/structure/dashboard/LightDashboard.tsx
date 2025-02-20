// React 
import {  useState, useEffect } from "react"

// React Router
import { Link } from "react-router-dom"

//CSS 
import "../../assets/css/dashboard_css/light_dashboard.css"







//icons
import menu_button from "../../assets/images/icons/icons8-arrow.svg"
import lightOff from "../../assets/images/icons/icons8-light-off.svg"
import lightOn from "../../assets/images/icons/icons8-light-on.svg"


import entry from "../../assets/images/icons/icons8-open-door.svg"
import goodnight from "../../assets/images/icons/icons8-moon-and-stars.svg"
import stairs from "../../assets/images/icons/icons8-stairs.svg"
import floodLights from "../../assets/images/icons/icons8-floodlight.svg"
import downS from "../../assets/images/icons/icons8-stairs-down.svg"
import mainIcon from "../../assets/images/icons/icons8-studio-floor-plan.svg"
import upS from "../../assets/images/icons/icons8-stairs-up.svg"
import driveSconce from "../../assets/images/icons/noun-half-moon-wall-light-4939443.svg"
import welcome from "../../assets/images/icons/icons8-doormat.svg"
import vac from "../../assets/images/icons/icons8-holiday.svg"

import portraitMode from "../../assets/images/icons/icons8-iphone-16-pro.svg"


 
  



const LightDashboard = () =>{

    //--------------------------------------------------------------------------------------------------------------------------------------- Current Floor section 

        const [upStairs, setUpStairs]     = useState(false)
        const [main, setMain]             = useState(false)
        const [downStairs, setDownStairs] = useState(false)
        const [outSide, setOutSide]       = useState(false)
        const [globalScenes, setGlobalScenes]       = useState(true)

        // local 


    //--------------------------------------------------------------------------------------------------------------------------------------- all lights

        const [light_1, setLight_1] = useState(false)
        const [light_2, setLight_2] = useState(false)
        const [light_3, setLight_3] = useState(false)
        const [light_4, setLight_4] = useState(false)
        const [light_5, setLight_5] = useState(false)
        const [light_6, setLight_6] = useState(false)
        const [light_7, setLight_7] = useState(false)
        const [light_8, setLight_8] = useState(false)
        const [light_9, setLight_9] = useState(false)
        const [light_10, setLight_10] = useState(false)

        const [light_11, setLight_11] = useState(false)
        const [light_12, setLight_12] = useState(false)
        const [light_13, setLight_13] = useState(false)
        const [light_14, setLight_14] = useState(false)
        const [light_15, setLight_15] = useState(false)
        const [light_16, setLight_16] = useState(false)
        const [light_17, setLight_17] = useState(false)
        const [light_18, setLight_18] = useState(false)
        const [light_19, setLight_19] = useState(false)
        const [light_20, setLight_20] = useState(false)

        const [light_21, setLight_21] = useState(false)
        const [light_22, setLight_22] = useState(false)
        const [light_23, setLight_23] = useState(false)
        const [light_24, setLight_24] = useState(false)
        const [light_25, setLight_25] = useState(false)
        const [light_26, setLight_26] = useState(false)
        const [light_27, setLight_27] = useState(false)
        const [light_28, setLight_28] = useState(false)
        const [light_29, setLight_29] = useState(false)
        const [light_30, setLight_30] = useState(false)

        const [light_31, setLight_31] = useState(false)
        const [light_32, setLight_32] = useState(false)
        const [light_33, setLight_33] = useState(false)
        const [light_34, setLight_34] = useState(false)
        const [light_35, setLight_35] = useState(false)
        const [light_36, setLight_36] = useState(false)
        const [light_37, setLight_37] = useState(false)
        const [light_38, setLight_38] = useState(false)
        const [light_39, setLight_39] = useState(false)
        const [light_40, setLight_40] = useState(false)

        const [light_41, setLight_41] = useState(false)
        const [light_42, setLight_42] = useState(false)
        const [light_43, setLight_43] = useState(false)
        const [light_44, setLight_44] = useState(false)
        const [light_45, setLight_45] = useState(false)
        const [light_46, setLight_46] = useState(false)
        const [light_47, setLight_47] = useState(false)
        const [light_48, setLight_48] = useState(false)
        const [light_49, setLight_49] = useState(false)
        const [light_50, setLight_50] = useState(false)

        const [light_51, setLight_51] = useState(false)
        const [light_52, setLight_52] = useState(false)
        const [light_53, setLight_53] = useState(false)
        const [light_54, setLight_54] = useState(false)
        const [light_55, setLight_55] = useState(false)
        const [light_56, setLight_56] = useState(false)
        const [light_57, setLight_57] = useState(false)
        const [light_58, setLight_58] = useState(false)
        const [light_59, setLight_59] = useState(false)
        const [light_60, setLight_60] = useState(false)

        const [light_61, setLight_61] = useState(false)
        const [light_62, setLight_62] = useState(false)
        const [light_63, setLight_63] = useState(false)
        const [light_64, setLight_64] = useState(false)

        const [global_1, setGlobal_1] = useState(false)
        const [global_2, setGlobal_2] = useState(false)
        const [global_3, setGlobal_3] = useState(false)
        const [global_4, setGlobal_4] = useState(false)
        const [global_5, setGlobal_5] = useState(false)
        const [global_6, setGlobal_6] = useState(false)
        const [global_7, setGlobal_7] = useState(false)
        const [global_8, setGlobal_8] = useState(false)
        const [global_9, setGlobal_9] = useState(false)
        const [global_10, setGlobal_10] = useState(false)
        const [global_11, setGlobal_11] = useState(false)
        const [global_12, setGlobal_12] = useState(false)



        useEffect(() => {
        
            //Global

            const global_1 =  window.CrComLib.subscribeState("b","348",(value: boolean) => {setGlobal_1(value);});
            const global_2 =  window.CrComLib.subscribeState("b","349",(value: boolean) => {setGlobal_2(value);});
            const global_3 =  window.CrComLib.subscribeState("b","350",(value: boolean) => {setGlobal_3(value);});
            const global_4 =  window.CrComLib.subscribeState("b","351",(value: boolean) => {setGlobal_4(value);});
            const global_5 =  window.CrComLib.subscribeState("b","352",(value: boolean) => {setGlobal_5(value);});
            const global_6 =  window.CrComLib.subscribeState("b","353",(value: boolean) => {setGlobal_6(value);});
            const global_7 =  window.CrComLib.subscribeState("b","354",(value: boolean) => {setGlobal_7(value);});
            const global_8 =  window.CrComLib.subscribeState("b","355",(value: boolean) => {setGlobal_8(value);});
            const global_9 =  window.CrComLib.subscribeState("b","356",(value: boolean) => {setGlobal_9(value);});
            const global_10 =  window.CrComLib.subscribeState("b","357",(value: boolean) => {setGlobal_10(value);});
            const global_11 =  window.CrComLib.subscribeState("b","358",(value: boolean) => {setGlobal_11(value);});
            const global_12 =  window.CrComLib.subscribeState("b","359",(value: boolean) => {setGlobal_12(value);});

          

            // Lights


            const light_1 =  window.CrComLib.subscribeState("b","250",(value: boolean) => {setLight_1(value);});
            const light_2 =  window.CrComLib.subscribeState("b","251",(value: boolean) => {setLight_2(value);});
            const light_3 =  window.CrComLib.subscribeState("b","252",(value: boolean) => {setLight_3(value);});
            const light_4 =  window.CrComLib.subscribeState("b","252",(value: boolean) => {setLight_4(value);});
            const light_5 =  window.CrComLib.subscribeState("b","254",(value: boolean) => {setLight_5(value);});

            const light_6 =  window.CrComLib.subscribeState("b","257",(value: boolean) => {setLight_6(value);});
            const light_7 =  window.CrComLib.subscribeState("b","258",(value: boolean) => {setLight_7(value);});
            const light_8 =  window.CrComLib.subscribeState("b","259",(value: boolean) => {setLight_8(value);});
            const light_9 =  window.CrComLib.subscribeState("b","260",(value: boolean) => {setLight_9(value);});
            const light_10 = window.CrComLib.subscribeState("b","261",(value: boolean) => {setLight_10(value);});

            const light_11 = window.CrComLib.subscribeState("b","264",(value: boolean) => {setLight_11(value);});
            const light_12 = window.CrComLib.subscribeState("b","265",(value: boolean) => {setLight_12(value);});
            const light_13 = window.CrComLib.subscribeState("b","266",(value: boolean) => {setLight_13(value);});
            const light_14 = window.CrComLib.subscribeState("b","267",(value: boolean) => {setLight_14(value);});

            const light_15 = window.CrComLib.subscribeState("b","342",(value: boolean) => {setLight_15(value);});
            const light_16 = window.CrComLib.subscribeState("b","271",(value: boolean) => {setLight_16(value);});
            const light_17 = window.CrComLib.subscribeState("b","272",(value: boolean) => {setLight_17(value);});
            const light_18 = window.CrComLib.subscribeState("b","273",(value: boolean) => {setLight_18(value);});
            const light_19 = window.CrComLib.subscribeState("b","274",(value: boolean) => {setLight_19(value);});
            const light_20 = window.CrComLib.subscribeState("b","275",(value: boolean) => {setLight_20(value);});

            const light_21 = window.CrComLib.subscribeState("b","278",(value: boolean) => {setLight_21(value);});
            const light_22 = window.CrComLib.subscribeState("b","279",(value: boolean) => {setLight_22(value);});
            const light_23 = window.CrComLib.subscribeState("b","280",(value: boolean) => {setLight_23(value);});
            const light_24 = window.CrComLib.subscribeState("b","281",(value: boolean) => {setLight_24(value);});
            const light_25 = window.CrComLib.subscribeState("b","282",(value: boolean) => {setLight_25(value);});

            const light_26 = window.CrComLib.subscribeState("b","285",(value: boolean) => {setLight_26(value);});
            const light_27 = window.CrComLib.subscribeState("b","286",(value: boolean) => {setLight_27(value);});
            const light_28 = window.CrComLib.subscribeState("b","287",(value: boolean) => {setLight_28(value);});
            const light_29 = window.CrComLib.subscribeState("b","288",(value: boolean) => {setLight_29(value);});
            const light_30 = window.CrComLib.subscribeState("b","289",(value: boolean) => {setLight_30(value);});

            const light_31 = window.CrComLib.subscribeState("b","292",(value: boolean) => {setLight_31(value);});
            const light_32 = window.CrComLib.subscribeState("b","293",(value: boolean) => {setLight_32(value);});
            const light_33 = window.CrComLib.subscribeState("b","294",(value: boolean) => {setLight_33(value);});
            const light_34 = window.CrComLib.subscribeState("b","295",(value: boolean) => {setLight_34(value);});
            const light_35 = window.CrComLib.subscribeState("b","296",(value: boolean) => {setLight_35(value);});

            const light_36 = window.CrComLib.subscribeState("b","299",(value: boolean) => {setLight_36(value);});
            const light_37 = window.CrComLib.subscribeState("b","300",(value: boolean) => {setLight_37(value);});
            const light_38 = window.CrComLib.subscribeState("b","301",(value: boolean) => {setLight_38(value);});
            const light_39 = window.CrComLib.subscribeState("b","302",(value: boolean) => {setLight_39(value);});
            const light_40 = window.CrComLib.subscribeState("b","303",(value: boolean) => {setLight_40(value);});

            const light_41 = window.CrComLib.subscribeState("b","308",(value: boolean) => {setLight_41(value);});
            const light_42 = window.CrComLib.subscribeState("b","309",(value: boolean) => {setLight_42(value);});
            const light_43 = window.CrComLib.subscribeState("b","310",(value: boolean) => {setLight_43(value);});
            const light_44 = window.CrComLib.subscribeState("b","311",(value: boolean) => {setLight_44(value);});
            const light_45 = window.CrComLib.subscribeState("b","312",(value: boolean) => {setLight_45(value);});

            const light_46 = window.CrComLib.subscribeState("b","315",(value: boolean) => {setLight_46(value);});
            const light_47 = window.CrComLib.subscribeState("b","316",(value: boolean) => {setLight_47(value);});
            const light_48 = window.CrComLib.subscribeState("b","317",(value: boolean) => {setLight_48(value);});
            const light_49 = window.CrComLib.subscribeState("b","318",(value: boolean) => {setLight_49(value);});
            const light_50 = window.CrComLib.subscribeState("b","319",(value: boolean) => {setLight_50(value);});

            const light_51 = window.CrComLib.subscribeState("b","322",(value: boolean) => {setLight_51(value);});
            const light_52 = window.CrComLib.subscribeState("b","323",(value: boolean) => {setLight_52(value);});
            const light_53 = window.CrComLib.subscribeState("b","324",(value: boolean) => {setLight_53(value);});
            const light_54 = window.CrComLib.subscribeState("b","325",(value: boolean) => {setLight_54(value);});
            const light_55 = window.CrComLib.subscribeState("b","326",(value: boolean) => {setLight_55(value);});

            const light_56 = window.CrComLib.subscribeState("b","330",(value: boolean) => {setLight_56(value);});
            const light_57 = window.CrComLib.subscribeState("b","331",(value: boolean) => {setLight_57(value);});
            const light_58 = window.CrComLib.subscribeState("b","332",(value: boolean) => {setLight_58(value);});
            const light_59 = window.CrComLib.subscribeState("b","333",(value: boolean) => {setLight_59(value);});
            const light_60 = window.CrComLib.subscribeState("b","334",(value: boolean) => {setLight_60(value);});

            const light_61 = window.CrComLib.subscribeState("b","338",(value: boolean) => {setLight_61(value);});
            const light_62 = window.CrComLib.subscribeState("b","339",(value: boolean) => {setLight_62(value);});
            const light_63 = window.CrComLib.subscribeState("b","340",(value: boolean) => {setLight_63(value);});
            const light_64 = window.CrComLib.subscribeState("b","341",(value: boolean) => {setLight_64(value);});
            

          
    
            
      
    
            return () => {
                window.CrComLib.unsubscribeState("b","348",global_1);
                window.CrComLib.unsubscribeState("b","349",global_2);
                window.CrComLib.unsubscribeState("b","350",global_3);
                window.CrComLib.unsubscribeState("b","351",global_4);
                window.CrComLib.unsubscribeState("b","352",global_5);
                window.CrComLib.unsubscribeState("b","353",global_6);
                window.CrComLib.unsubscribeState("b","354",global_7);
                window.CrComLib.unsubscribeState("b","355",global_8);
                window.CrComLib.unsubscribeState("b","356",global_9);
                window.CrComLib.unsubscribeState("b","357",global_10);
                window.CrComLib.unsubscribeState("b","358",global_11);
                window.CrComLib.unsubscribeState("b","359",global_12);


    
                
    
                // lights 
    
      
             
            
                window.CrComLib.unsubscribeState("b","250",light_1);
                window.CrComLib.unsubscribeState("b","251",light_2);
                window.CrComLib.unsubscribeState("b","252",light_3);
                window.CrComLib.unsubscribeState("b","252",light_4);
                window.CrComLib.unsubscribeState("b","254",light_5);
    
                window.CrComLib.unsubscribeState("b","257",light_6);
                window.CrComLib.unsubscribeState("b","258",light_7);
                window.CrComLib.unsubscribeState("b","259",light_8);
                window.CrComLib.unsubscribeState("b","260",light_9);
                window.CrComLib.unsubscribeState("b","261",light_10);
    
                window.CrComLib.unsubscribeState("b","264",light_11);
                window.CrComLib.unsubscribeState("b","265",light_12);
                window.CrComLib.unsubscribeState("b","266",light_13);
                window.CrComLib.unsubscribeState("b","267",light_14);
    
                window.CrComLib.unsubscribeState("b","342",light_15);
                window.CrComLib.unsubscribeState("b","271",light_16);
                window.CrComLib.unsubscribeState("b","272",light_17);
                window.CrComLib.unsubscribeState("b","273",light_18);
                window.CrComLib.unsubscribeState("b","274",light_19);
                window.CrComLib.unsubscribeState("b","275",light_20);
    
                window.CrComLib.unsubscribeState("b","278",light_21);
                window.CrComLib.unsubscribeState("b","279",light_22);
                window.CrComLib.unsubscribeState("b","280",light_23);
                window.CrComLib.unsubscribeState("b","281",light_24);
                window.CrComLib.unsubscribeState("b","282",light_25);
    
                window.CrComLib.unsubscribeState("b","285",light_26);
                window.CrComLib.unsubscribeState("b","286",light_27);
                window.CrComLib.unsubscribeState("b","287",light_28);
                window.CrComLib.unsubscribeState("b","288",light_29);
                window.CrComLib.unsubscribeState("b","289",light_30);
    
                window.CrComLib.unsubscribeState("b","292",light_31);
                window.CrComLib.unsubscribeState("b","293",light_32);
                window.CrComLib.unsubscribeState("b","294",light_33);
                window.CrComLib.unsubscribeState("b","295",light_34);
                window.CrComLib.unsubscribeState("b","296",light_35);
    
                window.CrComLib.unsubscribeState("b","299",light_36);
                window.CrComLib.unsubscribeState("b","300",light_37);
                window.CrComLib.unsubscribeState("b","301",light_38);
                window.CrComLib.unsubscribeState("b","302",light_39);
                window.CrComLib.unsubscribeState("b","303",light_40);
    
                window.CrComLib.unsubscribeState("b","308",light_41);
                window.CrComLib.unsubscribeState("b","309",light_42);
                window.CrComLib.unsubscribeState("b","310",light_43);
                window.CrComLib.unsubscribeState("b","311",light_44);
                window.CrComLib.unsubscribeState("b","312",light_45);
    
                window.CrComLib.unsubscribeState("b","315",light_46);
                window.CrComLib.unsubscribeState("b","316",light_47);
                window.CrComLib.unsubscribeState("b","317",light_48);
                window.CrComLib.unsubscribeState("b","318",light_49);
                window.CrComLib.unsubscribeState("b","319",light_50);
    
                window.CrComLib.unsubscribeState("b","322",light_51);
                window.CrComLib.unsubscribeState("b","323",light_52);
                window.CrComLib.unsubscribeState("b","324",light_53);
                window.CrComLib.unsubscribeState("b","325",light_54);
                window.CrComLib.unsubscribeState("b","326",light_55);
    
                window.CrComLib.unsubscribeState("b","330",light_56);
                window.CrComLib.unsubscribeState("b","331",light_57);
                window.CrComLib.unsubscribeState("b","332",light_58);
                window.CrComLib.unsubscribeState("b","333",light_59);
                window.CrComLib.unsubscribeState("b","334",light_60);
    
                window.CrComLib.unsubscribeState("b","338",light_61);
                window.CrComLib.unsubscribeState("b","339",light_62);
                window.CrComLib.unsubscribeState("b","340",light_63);
                window.CrComLib.unsubscribeState("b","341",light_64);
                
    
    
    
                
              
                
            }
          }, []);
    




        const zone_1 =
                {
                    title: "Backyard",
                    light1: ["Hanging","250",light_1],
                    light2: ["Sconces","251",light_2],
                    light3: ["Flood lights","252",light_3],
                    light4: ["Side lights","253",light_4],
                    light5: ["Planter","254",light_5]
                }

        const zone_2 =
                {
                    title: "Basement",
                    light1: ["Media","257",light_6],
                    light2: ["Playroom","258",light_7],
                    light3: ["Gym","259",light_8],
                    light4: ["Hall","260",light_9],
                    light5: ["Stairs","261",light_10]
                }

       
        const zone_3 =
                {
                    title: "Breakfast",
                    light1: ["Breakfast","264",light_11],
                    light2: ["Chandelier","265",light_12],
                    light3: ["Cove","266",light_13],
                    light4: ["Down Lights","267",light_14],
                }

        const zone_4 =
                {
                    title: "Bar and Library",
                    light1: ["Bar Downs","271",light_16],
                    light2: ["Cove Cabinet","272",light_17],
                    light3: ["Library Down","273",light_18],
                    light4: ["Library sconce","274",light_19],
                    light5: ["Hallway","275",light_20]
                }

        const zone_5 =
                {
                    title: "Dinning Room",
                    light1: ["Down Lights ","278",light_21],
                    light2: ["Chandelier","279",light_22],
                    light3: ["Cabinet","280",light_23],
                    light4: ["Butler Sink","281",light_24],
                    light5: ["Dine Hall","282",light_25]
                }

        const zone_6 =
                {
                    title: "Family Room",
                    light1: ["Down Lights","285",light_26],
                    light2: ["Center","286",light_27],
                    light3: ["Cabinet","287",light_28],
                    light4: ["Library Hall","288",light_29],
                    light5: ["Vaulted Hall","289",light_30]
                }

        const zone_7 =
                {
                    title: "Foyer",
                    light1: ["Front Sconces ","292",light_31],
                    light2: ["Front Chandelier","293",light_32],
                    light3: ["Interior Chandelier","294",light_33],
                    light4: ["Party","295",light_34],
                    light5: ["Nitch","296",light_35]
                }

        const zone_8 =
                {
                    title: "kids Room",
                    light1: ["Madison","299",light_36],
                    light2: ["logan","300",light_37],
                    light3: ["Hudson","301",light_38],
                    light4: ["Top Hall","302",light_39],
                    light5: ["Kids Hall","303",light_40]
                }

        const zone_9 =
                {
                    title: "Kitchen",
                    light1: ["Down Lights","308",light_41],
                    light2: ["Sink","309",light_42],
                    light3: ["Under Cab","310",light_43],
                    light4: ["Desk","311",light_44],
                    light5: ["Chandelier","312",light_45]
                }

        const zone_10 =
                {
                    title: "Living Room",
                    light1: ["living","315",light_46],
                    light2: ["Perimiter","316",light_47],
                    light3: ["Chandelier","317",light_48],
                    light4: ["Down lights","318",light_49],
                    light5: ["Sconces","319",light_50]
                }

        const zone_11 =
                {
                    title: "Master Bathroom",
                    light1: ["Center","322",light_51],
                    light2: ["Shower","323",light_52],
                    light3: ["Vanities","324",light_53],
                    light4: ["Chandelier","325",light_54],
                    light5: ["Bath Hall","326",light_55]
                }

                
        const zone_12 =
                {
                    title: "Master Bedroom",
                    light1: ["Center","330",light_56],
                    light2: ["Perimiter","331",light_57],
                    light3: ["Balcony","332",light_58],
                    light4: ["Kids Hall","333",light_59],
                    light5: ["Top Hall","334",light_60]
                }

        const zone_13 =
                {
                    title: "Office and Game Room",
                    light1: ["Office","338",light_61],
                    light2: ["Game Downs","339",light_62],
                    light3: ["Game Balcony","340",light_63],
                    light4: ["Top Hall","341",light_64],
                    light5: ["Kids Hall","342",light_15],
                

        }




        
        const lightingGroup_1 = (
            <>
              <div className="zone_section">
                <h1 className="zone_title"> {zone_12.title} </h1>
                <div className="light_wrapper">
                  <div
                    className="light_tile"
                    id={zone_12.light1[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_12.light1[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_12.light1[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_12.light1[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_12.light1[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_12.light1[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_12.light1[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_12.light2[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_12.light2[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_12.light2[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_12.light2[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_12.light2[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_12.light2[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_12.light2[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_12.light3[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_12.light3[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_12.light3[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_12.light3[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_12.light3[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_12.light3[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_12.light3[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_12.light4[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_12.light4[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_12.light4[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_12.light4[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_12.light4[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_12.light4[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_12.light4[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_12.light5[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_12.light5[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_12.light5[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_12.light5[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_12.light5[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_12.light5[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_12.light5[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          
              <div className="zone_section">
                <h1 className="zone_title"> {zone_11.title} </h1>
                <div className="light_wrapper">
                  <div
                    className="light_tile"
                    id={zone_11.light1[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_11.light1[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_11.light1[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_11.light1[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_11.light1[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_11.light1[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_11.light1[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_11.light2[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_11.light2[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_11.light2[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_11.light2[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_11.light2[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_11.light2[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_11.light2[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_11.light3[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_11.light3[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_11.light3[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_11.light3[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_11.light3[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_11.light3[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_11.light3[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_11.light4[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_11.light4[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_11.light4[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_11.light4[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_11.light4[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_11.light4[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_11.light4[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_11.light5[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_11.light5[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_11.light5[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_11.light5[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_11.light5[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_11.light5[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_11.light5[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          
              <div className="zone_section">
                <h1 className="zone_title"> {zone_8.title} </h1>
                <div className="light_wrapper">
                  <div
                    className="light_tile"
                    id={zone_8.light1[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_8.light1[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_8.light1[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_8.light1[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_8.light1[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_8.light1[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_8.light1[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_8.light2[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_8.light2[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_8.light2[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_8.light2[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_8.light2[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_8.light2[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_8.light2[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_8.light3[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_8.light3[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_8.light3[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_8.light3[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_8.light3[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_8.light3[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_8.light3[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_8.light4[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_8.light4[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_8.light4[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_8.light4[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_8.light4[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_8.light4[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_8.light4[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_8.light5[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_8.light5[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_8.light5[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_8.light5[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_8.light5[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_8.light5[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_8.light5[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          
              <div className="zone_section">
                <h1 className="zone_title"> {zone_13.title} </h1>
                <div className="light_wrapper">
                  <div
                    className="light_tile"
                    id={zone_13.light1[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_13.light1[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_13.light1[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_13.light1[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_13.light1[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_13.light1[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_13.light1[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_13.light2[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_13.light2[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_13.light2[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_13.light2[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_13.light2[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_13.light2[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_13.light2[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_13.light3[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_13.light3[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_13.light3[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_13.light3[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_13.light3[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_13.light3[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_13.light3[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_13.light4[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_13.light4[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_13.light4[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_13.light4[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_13.light4[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_13.light4[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_13.light4[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_13.light5[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_13.light5[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_13.light5[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_13.light5[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_13.light5[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_13.light5[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_13.light5[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
          
          const lightingGroup_2 = (
            <>
              <div className="zone_section">
                <h1 className="zone_title">
                  {" "}
                  {zone_3.title} & {zone_9.title}{" "}
                </h1>
                <div className="light_wrapper">
                  <div
                    className="light_tile"
                    id={zone_3.light1[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_3.light1[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_3.light1[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_3.light1[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{" "}
                      </p>
                      <p className="light_name">{zone_3.light1[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_3.light1[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_3.light1[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_3.light2[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_3.light2[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_3.light2[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_3.light2[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{" "}
                      </p>
                      <p className="light_name">{zone_3.light2[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_3.light2[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_3.light2[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_3.light3[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_3.light3[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_3.light3[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_3.light3[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{" "}
                      </p>
                      <p className="light_name">{zone_3.light3[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_3.light3[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_3.light3[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_3.light4[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_3.light4[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_3.light4[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_3.light4[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{" "}
                      </p>
                      <p className="light_name">{zone_3.light4[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_3.light4[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_3.light4[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_9.light1[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_9.light1[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_9.light1[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_9.light1[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{" "}
                      </p>
                      <p className="light_name">{zone_9.light1[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_9.light1[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_9.light1[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_9.light2[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_9.light2[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_9.light2[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_9.light2[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{" "}
                      </p>
                      <p className="light_name">{zone_9.light2[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_9.light2[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_9.light2[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_9.light3[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_9.light3[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_9.light3[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_9.light3[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{" "}
                      </p>
                      <p className="light_name">{zone_9.light3[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_9.light3[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_9.light3[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_9.light4[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_9.light4[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_9.light4[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_9.light4[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{" "}
                      </p>
                      <p className="light_name">{zone_9.light4[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_9.light4[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_9.light4[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_9.light5[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_9.light5[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_9.light5[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_9.light5[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{" "}
                      </p>
                      <p className="light_name">{zone_9.light5[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_9.light5[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_9.light5[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          
              <div className="zone_section">
                <h1 className="zone_title"> {zone_6.title} </h1>
                <div className="light_wrapper">
                  <div
                    className="light_tile"
                    id={zone_6.light1[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_6.light1[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_6.light1[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_6.light1[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_6.light1[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_6.light1[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_6.light1[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_6.light2[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_6.light2[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_6.light2[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_6.light2[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_6.light2[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_6.light2[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_6.light2[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_6.light3[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_6.light3[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_6.light3[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_6.light3[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_6.light3[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_6.light3[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_6.light3[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_6.light4[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_6.light4[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_6.light4[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_6.light4[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_6.light4[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_6.light4[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_6.light4[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_6.light5[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_6.light5[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_6.light5[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_6.light5[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_6.light5[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_6.light5[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_6.light5[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          
              <div className="zone_section">
                <h1 className="zone_title"> {zone_4.title} </h1>
                <div className="light_wrapper">
                  <div
                    className="light_tile"
                    id={zone_4.light1[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_4.light1[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_4.light1[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_4.light1[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_4.light1[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_4.light1[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_4.light1[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_4.light2[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_4.light2[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_4.light2[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_4.light2[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_4.light2[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_4.light2[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_4.light2[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_4.light3[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_4.light3[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_4.light3[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_4.light3[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_4.light3[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_4.light3[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_4.light3[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_4.light4[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_4.light4[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_4.light4[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_4.light4[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_4.light4[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_4.light4[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_4.light4[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_4.light5[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_4.light5[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_4.light5[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_4.light5[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_4.light5[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_4.light5[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_4.light5[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          
              <div className="zone_section">
                <h1 className="zone_title"> {zone_5.title} </h1>
                <div className="light_wrapper">
                  <div
                    className="light_tile"
                    id={zone_5.light1[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_5.light1[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_5.light1[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_5.light1[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_5.light1[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_5.light1[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_5.light1[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_5.light2[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_5.light2[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_5.light2[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_5.light2[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_5.light2[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_5.light2[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_5.light2[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_5.light3[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_5.light3[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_5.light3[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_5.light3[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_5.light3[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_5.light3[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_5.light3[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_5.light4[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_5.light4[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_5.light4[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_5.light4[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_5.light4[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_5.light4[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_5.light4[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_5.light5[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_5.light5[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_5.light5[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_5.light5[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_5.light5[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_5.light5[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_5.light5[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          
              <div className="zone_section">
                <h1 className="zone_title"> {zone_10.title} </h1>
                <div className="light_wrapper">
                  <div
                    className="light_tile"
                    id={zone_10.light1[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_10.light1[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_10.light1[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_10.light1[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_10.light1[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_10.light1[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_10.light1[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_10.light2[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_10.light2[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_10.light2[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_10.light2[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_10.light2[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_10.light2[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_10.light2[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_10.light3[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_10.light3[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_10.light3[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_10.light3[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_10.light3[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_10.light3[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_10.light3[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_10.light4[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_10.light4[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_10.light4[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_10.light4[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_10.light4[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_10.light4[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_10.light4[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_10.light5[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_10.light5[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_10.light5[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_10.light5[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_10.light5[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_10.light5[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_10.light5[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          
              <div className="zone_section">
                <h1 className="zone_title"> {zone_7.title} </h1>
                <div className="light_wrapper">
                  <div
                    className="light_tile"
                    id={zone_7.light1[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_7.light1[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_7.light1[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_7.light1[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_7.light1[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_7.light1[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_7.light1[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_7.light2[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_7.light2[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_7.light2[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_7.light2[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_7.light2[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_7.light2[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_7.light2[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_7.light3[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_7.light3[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_7.light3[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_7.light3[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_7.light3[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_7.light3[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_7.light3[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_7.light4[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_7.light4[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_7.light4[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_7.light4[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_7.light4[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_7.light4[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_7.light4[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_7.light5[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_7.light5[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_7.light5[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_7.light5[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_7.light5[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_7.light5[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_7.light5[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
          
          const lightingGroup_3 = (
            <>
              <div className="zone_section">
                <h1 className="zone_title"> {zone_2.title} </h1>
                <div className="light_wrapper">
                  <div
                    className="light_tile"
                    id={zone_2.light1[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_2.light1[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_2.light1[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_2.light1[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_2.light1[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_2.light1[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_2.light1[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_2.light2[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_2.light2[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_2.light2[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_2.light2[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_2.light2[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_2.light2[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_2.light2[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_2.light3[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_2.light3[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_2.light3[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_2.light3[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_2.light3[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_2.light3[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_2.light3[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_2.light4[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_2.light4[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_2.light4[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_2.light4[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_2.light4[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_2.light4[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_2.light4[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_2.light5[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_2.light5[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_2.light5[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_2.light5[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_2.light5[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_2.light5[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_2.light5[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
          
          const lightingGroup_4 = (
            <>
              <div className="zone_section">
                <h1 className="zone_title"> {zone_1.title} </h1>
                <div className="light_wrapper">
                  <div
                    className="light_tile"
                    id={zone_1.light1[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_1.light1[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_1.light1[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_1.light1[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_1.light1[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_1.light1[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_1.light1[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_1.light2[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_1.light2[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_1.light2[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_1.light2[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_1.light2[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_1.light2[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_1.light2[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_1.light3[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_1.light3[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_1.light3[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_1.light3[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_1.light3[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_1.light3[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_1.light3[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_1.light4[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_1.light4[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_1.light4[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_1.light4[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_1.light4[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_1.light4[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_1.light4[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
          
                  <div
                    className="light_tile"
                    id={zone_1.light5[2] ? '' : ''}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", `${zone_1.light5[1]}`, true),
                       window.CrComLib.publishEvent("b", `${zone_1.light5[1]}`, false))
                    }
                  >
                    <div className="light_info">
                      <p className="display_none">
                        {zone_1.light5[2] ? (
                          <span className="sub_text">On</span>
                        ) : (
                          <span className="sub_text">Off</span>
                        )}{' '}
                      </p>
                      <p className="light_name">{zone_1.light5[0]}</p>
                    </div>
          
                    <div className="light_controls">
                      <button
                        className="btn_circle"
                        id={zone_1.light5[2] ? "display_none" : "display_none"}
                      >
                        <img className="btn_image" src={lightOff} />
                      </button>
          
                      <button
                        className="btn_circle"
                        id={zone_1.light5[2] ? "light_btn_on" : ""}
                      >
                        <img className="btn_image" src={lightOn} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
          
          const lightingGroup_5 = (
            <>
              <div className="zone_section" id="global_lighting">
                <h1 className="zone_title"> Global Scenes </h1>
                <div className="light_wrapper">
                  <button
                    className="btn_square_wide"
                    id={global_1 ? "active_global" : ""}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", "348", true),
                       window.CrComLib.publishEvent("b", "348", false))
                    }
                  >

                    <img className="btn_image" src={entry} />
                    <p> Entry </p>
                  </button>
          
                  <button
                    className="btn_square_wide"
                    id={global_2 ? "active_global" : ""}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", "349", true),
                       window.CrComLib.publishEvent("b", "349", false))
                    }
                  >
                       <img className="btn_image" src={goodnight} />
                    <p>Goodnight</p>
                  </button>
          
                  <button
                    className="btn_square_wide"
                    id={global_3 ? "active_global" : ""}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", "350", true),
                       window.CrComLib.publishEvent("b", "350", false))
                    }
                  >
                      <img className="btn_image" src={stairs} />
                    <p>Stairs</p>
                  </button>
          
                  <button
                    className="btn_square_wide"
                    id={global_4 ? "active_global" : ""}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", "351", true),
                       window.CrComLib.publishEvent("b", "351", false))
                    }
                  >
                      <img className="btn_image" src={floodLights} />
                    <p>Flood Lights</p>
                  </button>
          
                  <button
                    className="btn_square_wide"
                    id={global_5 ? "active_global" : ""}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", "352", true),
                       window.CrComLib.publishEvent("b", "352", false))
                    }
                  >
                      <img className="btn_image" src={downS} />
                    <p> Downstairs Off </p>
                  </button>
          
                  <button
                    className="btn_square_wide"
                    id={global_6 ? "active_global" : ""}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", "353", true),
                       window.CrComLib.publishEvent("b", "353", false))
                    }
                  >
                      <img className="btn_image" src={mainIcon} />
                    <p> Main Off </p>
                  </button>
          
                  <button
                    className="btn_square_wide"
                    id={global_7 ? "active_global" : ""}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", "354", true),
                       window.CrComLib.publishEvent("b", "354", false))
                    }
                  >
                      <img className="btn_image" src={upS} />
                    <p> Up Stairs Off </p>
                  </button>
          
                  <button
                    className="btn_square_wide"
                    id={global_8 ? "active_global" : ""}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", "355", true),
                       window.CrComLib.publishEvent("b", "355", false))
                    }
                  >
                      <img className="btn_image" src={driveSconce} style ={{transform:"scaleY(-1)", position:"relative", bottom:"5px"}} />
                    <p> Drive Sconce </p>
                  </button>
          
            
                  <button
                    className="btn_square_wide"
                    id={global_11 ? "active_global" : ""}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", "358", true),
                       window.CrComLib.publishEvent("b", "358", false))
                    }
                  >
                      <img className="btn_image" src={welcome} />
                    <p> Welcome</p>
                  </button>
          
                  <button
                    className="btn_square_wide"
                    id={global_12 ? "active_global" : ""}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", "359", true),
                       window.CrComLib.publishEvent("b", "359", false))
                    }
                  >
                      <img className="btn_image" src={vac} />
                    <p> Away/Vacation</p>
                  </button>

                  <button
                    className="btn_square_wide"
                    id={global_9 ? "active_global" : ""}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", "356", true),
                       window.CrComLib.publishEvent("b", "356", false))
                    }
                  >
                    <p> All On</p>
                  </button>
          
                  <button
                    className="btn_square_wide"
                    id={global_10 ? "active_global" : ""}
                    onClick={() =>
                      (window.CrComLib.publishEvent("b", "357", true),
                       window.CrComLib.publishEvent("b", "357", false))
                    }
                  >
                    <p> All off</p>
                  </button>
          
                </div>
              </div>
            </>
          );
          

    

    


        

        const currentFloor = (id:string) => {
            if(id === "up"){
                setUpStairs(true)
                setMain(false)
                setDownStairs(false)
                setOutSide(false)
                setGlobalScenes(false)
            } else if (id === "main"){
                setUpStairs(false)
                setMain(true)
                setDownStairs(false)
                setOutSide(false)
                setGlobalScenes(false)

            } else if (id === "down"){
                setUpStairs(false)
                setMain(false)
                setDownStairs(true)
                setOutSide(false)
                setGlobalScenes(false)

        
            } else if (id === "out"){
                setUpStairs(false)
                setMain(false)
                setDownStairs(false)
                setOutSide(true)
                setGlobalScenes(false)

            }
             else if (id === "global"){
                setUpStairs(false)
                setMain(false)
                setDownStairs(false)
                setOutSide(false)
                setGlobalScenes(true)


             }
        }
 
    


   
   


   





      



    return(

    <div className="light_dashboard">

        
        

            
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
                    <button onClick={() => currentFloor("global")}    className={globalScenes?   "btn_selected" : "btn_not_selected"}>      <p> Global</p>     </button>
                    <button onClick={() => currentFloor("up")}    className={upStairs?   "btn_selected" : "btn_not_selected"}>      <p> Up Stairs</p>     </button>
                    <button onClick={() => currentFloor("main")}  className={main? "btn_selected" : "btn_not_selected"}>            <p> Main </p>         </button>
                    <button onClick={() => currentFloor("down")}  className={downStairs?   "btn_selected" : "btn_not_selected"}>    <p> Down Stairs</p>   </button>
                    <button onClick={() => currentFloor("out")}   className={outSide? "btn_selected" : "btn_not_selected"}>         <p> Out Doors</p>     </button>
                </div>
        </div>


        <div className="mobile_nav">
            <button onClick={() => currentFloor("global")}    className={globalScenes?   "btn_selected" : "btn_not_selected"}>      <p> Global</p>     </button>
            <button onClick={() => currentFloor("up")}    className={upStairs?   "btn_selected" : "btn_not_selected"}>      <p> Up Stairs</p>     </button>
            <button onClick={() => currentFloor("main")}  className={main? "btn_selected" : "btn_not_selected"}>            <p> Main </p>         </button>
            <button onClick={() => currentFloor("down")}  className={downStairs?   "btn_selected" : "btn_not_selected"}>    <p> Down Stairs</p>   </button>
            <button onClick={() => currentFloor("out")}   className={outSide? "btn_selected" : "btn_not_selected"}>         <p> Out Doors</p>     </button>
        </div>

        
       


            <h1 className="title_info"> Light Dashboard</h1>
                <div className={globalScenes? "display_none":"light_container"}>
                        {upStairs? lightingGroup_1 : <> </>}
                        {main? lightingGroup_2 : <> </>}
                        {downStairs? lightingGroup_3 : <> </>}
                        {outSide? lightingGroup_4 : <> </>}
                       
                </div>

                <div className="light_container_global">
                  {globalScenes? lightingGroup_5 : <> </>}
                </div>



                <div className="landscape_warning">
                <h1> Please rotate your device back to portrait mode. </h1>
                <img src={portraitMode}  />
        </div>

        </div>

    )

}


export default LightDashboard