// React 
import {  useState, useEffect } from "react"

// React Router
import { Link } from "react-router-dom"

//CSS 
import "../../assets/css/dashboard_css/light_dashboard.css"







//icons
import menu_button from "../../assets/images/icons/icons8-arrow.svg"
import close from "../../assets/images/icons/icons8-x.svg"
import lightOff from "../../assets/images/icons/icons8-light-off.svg"
import lightOn from "../../assets/images/icons/icons8-light-on.svg"


import portraitMode from "../../assets/images/icons/icons8-iphone-16-pro.svg"
import floor1 from "../../assets/images/backgrounds/Steve Jackson House Map 1st Floor V2.0 3-3-25.svg"
import floor2 from "../../assets/images/backgrounds/Steve Jackson House Map 2nd Floor 3-3-25.svg"






const LightDashboard = () => {
    const [lightMenuDisplay, setLightMenuDisplay] = useState("light_menu_closed")
    const [lightMenuDisplay2, setLightMenuDisplay2] = useState("light_menu_closed")
    const [map1,setMap1] = useState("map_layout_1")
    const [map2,setMap2] = useState("map_layout_2")
    const [upStairs, setUpStairs]     = useState(false)
    const [main, setMain]             = useState(true)
    const [outDoors, setOutDoors]     = useState(false)

    const [zone_1,setZone_1] = useState(false)
    const [zone_2,setZone_2] = useState(false)
    const [zone_3,setZone_3] = useState(false)
    const [zone_4,setZone_4] = useState(false)
    const [zone_5,setZone_5] = useState(false)
    const [zone_6,setZone_6] = useState(false)
    const [zone_7,setZone_7] = useState(false)
    const [zone_8,setZone_8] = useState(false)
    const [zone_9,setZone_9] = useState(false)
    const [zone_10,setZone_10] = useState(false)
    const [zone_11,setZone_11] = useState(false)
    const [zone_12,setZone_12] = useState(false)
    const [zone_13,setZone_13] = useState(false)
    const [zone_14,setZone_14] = useState(false)
    const [zone_15,setZone_15] = useState(false)

    const [zone_16,setZone_16] = useState(false)
    const [zone_17,setZone_17] = useState(false)
    const [zone_18,setZone_18] = useState(false)
    const [zone_19,setZone_19] = useState(false)
    const [zone_20,setZone_20] = useState(false)

    const [zone_21,setZone_21] = useState(false)




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


  



    



    // BAR Section updated
    const [light_1_fb_BAR, setLight_1_fb_BAR] = useState(false);
    const light_1_join_BAR = "250";
    const light_1_title_BAR = "Normal";
    
    const [light_2_fb_BAR, setLight_2_fb_BAR] = useState(false);
    const light_2_join_BAR = "251";
    const light_2_title_BAR = "Down Lights";
    
    const [light_3_fb_BAR, setLight_3_fb_BAR] = useState(false);
    const light_3_join_BAR = "252";
    const light_3_title_BAR = "Bar Lights";
    
    const [light_4_fb_BAR, setLight_4_fb_BAR] = useState(false);
    const light_4_join_BAR = "253";
    const light_4_title_BAR = "Area Off";

    // BILLIARD ROOM section updated 
    const [light_1_fb_BILLIARD_ROOM, setLight_1_fb_BILLIARD_ROOM] = useState(false);
    const light_1_join_BILLIARD_ROOM = "255";
    const light_1_title_BILLIARD_ROOM = "Family Room";
    
    const [light_2_fb_BILLIARD_ROOM, setLight_2_fb_BILLIARD_ROOM] = useState(false);
    const light_2_join_BILLIARD_ROOM = "256";
    const light_2_title_BILLIARD_ROOM = "Down Light";
    
    const [light_3_fb_BILLIARD_ROOM, setLight_3_fb_BILLIARD_ROOM] = useState(false);
    const light_3_join_BILLIARD_ROOM = "257";
    const light_3_title_BILLIARD_ROOM = "Accent";
    
    const [light_4_fb_BILLIARD_ROOM, setLight_4_fb_BILLIARD_ROOM] = useState(false);
    const light_4_join_BILLIARD_ROOM = "258";
    const light_4_title_BILLIARD_ROOM = "Sconces";

    const [light_5_fb_BILLIARD_ROOM, setLight_5_fb_BILLIARD_ROOM] = useState(false);
    const light_5_join_BILLIARD_ROOM = "260";
    const light_5_title_BILLIARD_ROOM = "B. Down Light";
    
    const [light_6_fb_BILLIARD_ROOM, setLight_6_fb_BILLIARD_ROOM] = useState(false);
    const light_6_join_BILLIARD_ROOM = "261";
    const light_6_title_BILLIARD_ROOM = "B. Sconces";

    const [light_7_fb_BILLIARD_ROOM, setLight_7_fb_BILLIARD_ROOM] = useState(false);
    const light_7_join_BILLIARD_ROOM = "262";
    const light_7_title_BILLIARD_ROOM = "Sitting Lights";
    
    const [light_8_fb_BILLIARD_ROOM, setLight_8_fb_BILLIARD_ROOM] = useState(false);
    const light_8_join_BILLIARD_ROOM = "263";
    const light_8_title_BILLIARD_ROOM = "Pathway";
    
    const [light_9_fb_BILLIARD_ROOM, setLight_9_fb_BILLIARD_ROOM] = useState(false);
    const light_9_join_BILLIARD_ROOM = "265";
    const light_9_title_BILLIARD_ROOM = "Pool Patio";


    
    // BREAKFAST
    const [light_1_fb_BREAKFAST, setLight_1_fb_BREAKFAST] = useState(false);
    const light_1_join_BREAKFAST = "267";
    const light_1_title_BREAKFAST = "Normal";
    
    const [light_2_fb_BREAKFAST, setLight_2_fb_BREAKFAST] = useState(false);
    const light_2_join_BREAKFAST = "268";
    const light_2_title_BREAKFAST = "Pendant";
    
    const [light_3_fb_BREAKFAST, setLight_3_fb_BREAKFAST] = useState(false);
    const light_3_join_BREAKFAST = "269";
    const light_3_title_BREAKFAST = "Accent";
    
    const [light_4_fb_BREAKFAST, setLight_4_fb_BREAKFAST] = useState(false);
    const light_4_join_BREAKFAST = "270";
    const light_4_title_BREAKFAST = "Down Lights";

    const [light_5_fb_BREAKFAST, setLight_5_fb_BREAKFAST] = useState(false);
    const light_5_join_BREAKFAST = "272";
    const light_5_title_BREAKFAST = "Inner Patio";
    
    const [light_6_fb_BREAKFAST, setLight_6_fb_BREAKFAST] = useState(false);
    const light_6_join_BREAKFAST = "273";
    const light_6_title_BREAKFAST = "Outer Patio";
    
    const [light_7_fb_BREAKFAST, setLight_7_fb_BREAKFAST] = useState(false);
    const light_7_join_BREAKFAST = "274";
    const light_7_title_BREAKFAST = "Kitchen";
    
    const [light_8_fb_BREAKFAST, setLight_8_fb_BREAKFAST] = useState(false);
    const light_8_join_BREAKFAST = "275";
    const light_8_title_BREAKFAST = "Outside";
    
    // BUTLER PANTRY
    const [light_1_fb_BUTLER_PANTRY, setLight_1_fb_BUTLER_PANTRY] = useState(false);
    const light_1_join_BUTLER_PANTRY = "277";
    const light_1_title_BUTLER_PANTRY = "Normal";
    
    const [light_2_fb_BUTLER_PANTRY, setLight_2_fb_BUTLER_PANTRY] = useState(false);
    const light_2_join_BUTLER_PANTRY = "278";
    const light_2_title_BUTLER_PANTRY = "Under Cab";
    
    const [light_3_fb_BUTLER_PANTRY, setLight_3_fb_BUTLER_PANTRY] = useState(false);
    const light_3_join_BUTLER_PANTRY = "279";
    const light_3_title_BUTLER_PANTRY = "Island";

    const [light_4_fb_BUTLER_PANTRY, setLight_4_fb_BUTLER_PANTRY] = useState(false);
    const light_4_join_BUTLER_PANTRY = "280";
    const light_4_title_BUTLER_PANTRY = "Down lights";


    const [light_5_fb_BUTLER_PANTRY, setLight_5_fb_BUTLER_PANTRY] = useState(false);
    const light_5_join_BUTLER_PANTRY = "282";
    const light_5_title_BUTLER_PANTRY = "Kitchen Hall";
    
    const [light_6_fb_BUTLER_PANTRY, setLight_6_fb_BUTLER_PANTRY] = useState(false);
    const light_6_join_BUTLER_PANTRY = "283";
    const light_6_title_BUTLER_PANTRY = "Elevator Hall";
    
    const [light_7_fb_BUTLER_PANTRY, setLight_7_fb_BUTLER_PANTRY] = useState(false);
    const light_7_join_BUTLER_PANTRY = "284";
    const light_7_title_BUTLER_PANTRY = "Elevator";

    const [light_8_fb_BUTLER_PANTRY, setLight_8_fb_BUTLER_PANTRY] = useState(false);
    const light_8_join_BUTLER_PANTRY = "285";
    const light_8_title_BUTLER_PANTRY = "Area Off";
    
    // DINING ROOM updated 
    const [light_1_fb_DINING_ROOM, setLight_1_fb_DINING_ROOM] = useState(false);
    const light_1_join_DINING_ROOM = "287";
    const light_1_title_DINING_ROOM = "Normal";
    
    const [light_2_fb_DINING_ROOM, setLight_2_fb_DINING_ROOM] = useState(false);
    const light_2_join_DINING_ROOM = "288";
    const light_2_title_DINING_ROOM = "Chandalier";
    
    const [light_3_fb_DINING_ROOM, setLight_3_fb_DINING_ROOM] = useState(false);
    const light_3_join_DINING_ROOM = "289";
    const light_3_title_DINING_ROOM = "Accent";
    
    const [light_4_fb_DINING_ROOM, setLight_4_fb_DINING_ROOM] = useState(false);
    const light_4_join_DINING_ROOM = "290";
    const light_4_title_DINING_ROOM = "Window";
    
    // ELEVATOR HALL updated 
    const [light_1_fb_ELEVATOR_HALL, setLight_1_fb_ELEVATOR_HALL] = useState(false);
    const light_1_join_ELEVATOR_HALL = "292";
    const light_1_title_ELEVATOR_HALL = "Elevator";
    
    const [light_2_fb_ELEVATOR_HALL, setLight_2_fb_ELEVATOR_HALL] = useState(false);
    const light_2_join_ELEVATOR_HALL = "293";
    const light_2_title_ELEVATOR_HALL = "Stair Hallway";
    
    const [light_3_fb_ELEVATOR_HALL, setLight_3_fb_ELEVATOR_HALL] = useState(false);
    const light_3_join_ELEVATOR_HALL = "294";
    const light_3_title_ELEVATOR_HALL = "Kitchen Hall";

    const [light_4_fb_ELEVATOR_HALL, setLight_4_fb_ELEVATOR_HALL] = useState(false);
    const light_4_join_ELEVATOR_HALL = "295";
    const light_4_title_ELEVATOR_HALL = "South Stairs";
    
    // FAMILY ROOM
    const [light_1_fb_FAMILY_ROOM, setLight_1_fb_FAMILY_ROOM] = useState(false);
    const light_1_join_FAMILY_ROOM = "297";
    const light_1_title_FAMILY_ROOM = "Normal";
    
    const [light_2_fb_FAMILY_ROOM, setLight_2_fb_FAMILY_ROOM] = useState(false);
    const light_2_join_FAMILY_ROOM = "298";
    const light_2_title_FAMILY_ROOM = "Down lights";
    
    const [light_3_fb_FAMILY_ROOM, setLight_3_fb_FAMILY_ROOM] = useState(false);
    const light_3_join_FAMILY_ROOM = "299";
    const light_3_title_FAMILY_ROOM = "Accent";
    
    const [light_4_fb_FAMILY_ROOM, setLight_4_fb_FAMILY_ROOM] = useState(false);
    const light_4_join_FAMILY_ROOM = "300";
    const light_4_title_FAMILY_ROOM = "Sconces";

    const [light_5_fb_FAMILY_ROOM, setLight_5_fb_FAMILY_ROOM] = useState(false);
    const light_5_join_FAMILY_ROOM = "302";
    const light_5_title_FAMILY_ROOM = "Bar";
    
    const [light_6_fb_FAMILY_ROOM, setLight_6_fb_FAMILY_ROOM] = useState(false);
    const light_6_join_FAMILY_ROOM = "303";
    const light_6_title_FAMILY_ROOM = "Pathway";
    
    const [light_7_fb_FAMILY_ROOM, setLight_7_fb_FAMILY_ROOM] = useState(false);
    const light_7_join_FAMILY_ROOM = "304";
    const light_7_title_FAMILY_ROOM = "Bar Sitting";
    
    const [light_8_fb_FAMILY_ROOM, setLight_8_fb_FAMILY_ROOM] = useState(false);
    const light_8_join_FAMILY_ROOM = "305";
    const light_8_title_FAMILY_ROOM = "Bar Sitting Off";

     
    const [light_9_fb_FAMILY_ROOM, setLight_9_fb_FAMILY_ROOM] = useState(false);
    const light_9_join_FAMILY_ROOM = "307";
    const light_9_title_FAMILY_ROOM = "Outside";


    
    // FOYER updated
    const [light_1_fb_FOYER, setLight_1_fb_FOYER] = useState(false);
    const light_1_join_FOYER = "309";
    const light_1_title_FOYER = "Foyer";
    
    const [light_2_fb_FOYER, setLight_2_fb_FOYER] = useState(false);
    const light_2_join_FOYER = "310";
    const light_2_title_FOYER = "Front Exterior";
    
    const [light_3_fb_FOYER, setLight_3_fb_FOYER] = useState(false);
    const light_3_join_FOYER = "311";
    const light_3_title_FOYER = "Foyer Entry";

    const [light_4_fb_FOYER, setLight_4_fb_FOYER] = useState(false);
    const light_4_join_FOYER = "312";
    const light_4_title_FOYER = "Foyer Ceiling";


    const [light_5_fb_FOYER, setLight_5_fb_FOYER] = useState(false);
    const light_5_join_FOYER = "314";
    const light_5_title_FOYER = "Chandelier";

    const [light_6_fb_FOYER, setLight_6_fb_FOYER] = useState(false);
    const light_6_join_FOYER = "315";
    const light_6_title_FOYER = "Stairs";

    //Garage New 


    const [light_1_fb_GARAGE, setLight_1_fb_GARAGE] = useState(false);
    const light_1_join_GARAGE = "317";
    const light_1_title_GARAGE = "Hallway";
    
    const [light_2_fb_GARAGE, setLight_2_fb_GARAGE] = useState(false);
    const light_2_join_GARAGE = "318";
    const light_2_title_GARAGE = "House Off";
    

  
    // KITCHEN updated 
    const [light_1_fb_KITCHEN, setLight_1_fb_KITCHEN] = useState(false);
    const light_1_join_KITCHEN = "320";
    const light_1_title_KITCHEN = "Kitchen";

    const [light_2_fb_KITCHEN, setLight_2_fb_KITCHEN] = useState(false);
    const light_2_join_KITCHEN = "321";
    const light_2_title_KITCHEN = "Breakfast";

    const [light_3_fb_KITCHEN, setLight_3_fb_KITCHEN] = useState(false);
    const light_3_join_KITCHEN = "322";
    const light_3_title_KITCHEN = "Hall";

    const [light_4_fb_KITCHEN, setLight_4_fb_KITCHEN] = useState(false);
    const light_4_join_KITCHEN = "323";
    const light_4_title_KITCHEN = "Foyer";


    const [light_5_fb_KITCHEN, setLight_5_fb_KITCHEN] = useState(false);
    const light_5_join_KITCHEN = "325";
    const light_5_title_KITCHEN = "Kitchen Patio";

    const [light_6_fb_KITCHEN, setLight_6_fb_KITCHEN] = useState(false);
    const light_6_join_KITCHEN = "326";
    const light_6_title_KITCHEN = "Pool Patio Sconces";
    
    // LIVING ROOM
    const [light_1_fb_LIVING_ROOM, setLight_1_fb_LIVING_ROOM] = useState(false);
    const light_1_join_LIVING_ROOM = "328";
    const light_1_title_LIVING_ROOM = "Normal";
    
    const [light_2_fb_LIVING_ROOM, setLight_2_fb_LIVING_ROOM] = useState(false);
    const light_2_join_LIVING_ROOM = "329";
    const light_2_title_LIVING_ROOM = "Cove";
    
    const [light_3_fb_LIVING_ROOM, setLight_3_fb_LIVING_ROOM] = useState(false);
    const light_3_join_LIVING_ROOM = "330";
    const light_3_title_LIVING_ROOM = "Accent";
    
    const [light_4_fb_LIVING_ROOM, setLight_4_fb_LIVING_ROOM] = useState(false);
    const light_4_join_LIVING_ROOM = "331";
    const light_4_title_LIVING_ROOM = "Piano";
    

    
    // OFFICE POWDER
    const [light_1_fb_OFFICE_POWDER, setLight_1_fb_OFFICE_POWDER] = useState(false);
    const light_1_join_OFFICE_POWDER = "333";
    const light_1_title_OFFICE_POWDER = "Powder On";
    
    const [light_2_fb_OFFICE_POWDER, setLight_2_fb_OFFICE_POWDER] = useState(false);
    const light_2_join_OFFICE_POWDER = "334";
    const light_2_title_OFFICE_POWDER = "Powder Off";
    
    // STEVE'S OFFICE
    const [light_1_fb_STEVE_S_OFFICE, setLight_1_fb_STEVE_S_OFFICE] = useState(false);
    const light_1_join_STEVE_S_OFFICE = "336";
    const light_1_title_STEVE_S_OFFICE = "Normal";
    
    const [light_2_fb_STEVE_S_OFFICE, setLight_2_fb_STEVE_S_OFFICE] = useState(false);
    const light_2_join_STEVE_S_OFFICE = "337";
    const light_2_title_STEVE_S_OFFICE = "Down Lights";

    const [light_3_fb_STEVE_S_OFFICE, setLight_3_fb_STEVE_S_OFFICE] = useState(false);
    const light_3_join_STEVE_S_OFFICE = "338";
    const light_3_title_STEVE_S_OFFICE = "Window DN LTS";
    
    const [light_4_fb_STEVE_S_OFFICE, setLight_4_fb_STEVE_S_OFFICE] = useState(false);
    const light_4_join_STEVE_S_OFFICE = "339";
    const light_4_title_STEVE_S_OFFICE = "Room Off";
    
    // HALL upper 
    const [light_1_fb_HALL, setLight_1_fb_HALL] = useState(false);
    const light_1_join_HALL = "341";
    const light_1_title_HALL = "Hallway North";
    
    const [light_2_fb_HALL, setLight_2_fb_HALL] = useState(false);
    const light_2_join_HALL = "342";
    const light_2_title_HALL = "Hallway South";
    
    const [light_3_fb_HALL, setLight_3_fb_HALL] = useState(false);
    const light_3_join_HALL = "343";
    const light_3_title_HALL = "Hallway Office";
    

    const [light_4_fb_HALL, setLight_4_fb_HALL] = useState(false);
    const light_4_join_HALL = "345";
    const light_4_title_HALL = "Stairs Hallway";
    
    const [light_5_fb_HALL, setLight_5_fb_HALL] = useState(false);
    const light_5_join_HALL = "346";
    const light_5_title_HALL = "Chandailer";
    
    const [light_6_fb_HALL, setLight_6_fb_HALL] = useState(false);
    const light_6_join_HALL = "347";
    const light_6_title_HALL = "House Off";
    
    // MEDIA ROOM
    const [light_1_fb_MEDIA_ROOM, setLight_1_fb_MEDIA_ROOM] = useState(false);
    const light_1_join_MEDIA_ROOM = "349";
    const light_1_title_MEDIA_ROOM = "Normal";
    
    const [light_2_fb_MEDIA_ROOM, setLight_2_fb_MEDIA_ROOM] = useState(false);
    const light_2_join_MEDIA_ROOM = "350";
    const light_2_title_MEDIA_ROOM = "Bar";
    
    const [light_3_fb_MEDIA_ROOM, setLight_3_fb_MEDIA_ROOM] = useState(false);
    const light_3_join_MEDIA_ROOM = "351";
    const light_3_title_MEDIA_ROOM = "Down Light";
    
    const [light_4_fb_MEDIA_ROOM, setLight_4_fb_MEDIA_ROOM] = useState(false);
    const light_4_join_MEDIA_ROOM = "352";
    const light_4_title_MEDIA_ROOM = "Accent";

    
    const [light_5_fb_MEDIA_ROOM, setLight_5_fb_MEDIA_ROOM] = useState(false);
    const light_5_join_MEDIA_ROOM = "354";
    const light_5_title_MEDIA_ROOM = "Game Table";

    const [light_6_fb_MEDIA_ROOM, setLight_6_fb_MEDIA_ROOM] = useState(false);
    const light_6_join_MEDIA_ROOM = "355";
    const light_6_title_MEDIA_ROOM = "Stairs";
    
    

    // LANDSCAPE
    const [light_1_fb_LANDSCAPE, setLight_1_fb_LANDSCAPE] = useState(false);
    const light_1_join_LANDSCAPE = "357";
    const light_1_title_LANDSCAPE = "Tennis";
    
    const [light_2_fb_LANDSCAPE, setLight_2_fb_LANDSCAPE] = useState(false);
    const light_2_join_LANDSCAPE = "358";
    const light_2_title_LANDSCAPE = "Breezeway";
    
    const [light_3_fb_LANDSCAPE, setLight_3_fb_LANDSCAPE] = useState(false);
    const light_3_join_LANDSCAPE = "359";
    const light_3_title_LANDSCAPE = "Step Lights";
    
    const [light_4_fb_LANDSCAPE, setLight_4_fb_LANDSCAPE] = useState(false);
    const light_4_join_LANDSCAPE = "361";
    const light_4_title_LANDSCAPE = "North Exterior";
    
    const [light_5_fb_LANDSCAPE, setLight_5_fb_LANDSCAPE] = useState(false);
    const light_5_join_LANDSCAPE = "362";
    const light_5_title_LANDSCAPE = "Fountain Lawn";
    
    const [light_6_fb_LANDSCAPE, setLight_6_fb_LANDSCAPE] = useState(false);
    const light_6_join_LANDSCAPE = "363";
    const light_6_title_LANDSCAPE = "Fountain";
    
    const [light_7_fb_LANDSCAPE, setLight_7_fb_LANDSCAPE] = useState(false);
    const light_7_join_LANDSCAPE = "365";
    const light_7_title_LANDSCAPE = "Back Yard";
    
    const [light_8_fb_LANDSCAPE, setLight_8_fb_LANDSCAPE] = useState(false);
    const light_8_join_LANDSCAPE = "366";
    const light_8_title_LANDSCAPE = "Front Yard";
    
    const [light_9_fb_LANDSCAPE, setLight_9_fb_LANDSCAPE] = useState(false);
    const light_9_join_LANDSCAPE = "367";
    const light_9_title_LANDSCAPE = "Pool Area";
    

    useEffect(() => {
        // BAR
        const sub_light_1_BAR = window.CrComLib.subscribeState("b", light_1_join_BAR, (value:boolean) => setLight_1_fb_BAR(value));
        const sub_light_2_BAR = window.CrComLib.subscribeState("b", light_2_join_BAR, (value:boolean) => setLight_2_fb_BAR(value));
        const sub_light_3_BAR = window.CrComLib.subscribeState("b", light_3_join_BAR, (value:boolean) => setLight_3_fb_BAR(value));
        const sub_function_4_BAR = window.CrComLib.subscribeState("b", light_4_join_BAR, (value:boolean) => setLight_4_fb_BAR(value));

        // BILLIARD ROOM
        const sub_light_1_BILLIARD_ROOM = window.CrComLib.subscribeState("b", light_1_join_BILLIARD_ROOM, (value:boolean) => setLight_1_fb_BILLIARD_ROOM(value));
        const sub_light_2_BILLIARD_ROOM = window.CrComLib.subscribeState("b", light_2_join_BILLIARD_ROOM, (value:boolean) => setLight_2_fb_BILLIARD_ROOM(value));
        const sub_light_3_BILLIARD_ROOM = window.CrComLib.subscribeState("b", light_3_join_BILLIARD_ROOM, (value:boolean) => setLight_3_fb_BILLIARD_ROOM(value));
        const sub_light_4_BILLIARD_ROOM = window.CrComLib.subscribeState("b", light_4_join_BILLIARD_ROOM, (value:boolean) => setLight_4_fb_BILLIARD_ROOM(value));
      
        const sub_light_5_BILLIARD_ROOM = window.CrComLib.subscribeState("b", light_5_join_BILLIARD_ROOM, (value:boolean) => setLight_5_fb_BILLIARD_ROOM(value));
        const sub_light_6_BILLIARD_ROOM = window.CrComLib.subscribeState("b", light_6_join_BILLIARD_ROOM, (value:boolean) => setLight_6_fb_BILLIARD_ROOM(value));
        const sub_light_7_BILLIARD_ROOM = window.CrComLib.subscribeState("b", light_7_join_BILLIARD_ROOM, (value:boolean) => setLight_7_fb_BILLIARD_ROOM(value));
        const sub_light_8_BILLIARD_ROOM = window.CrComLib.subscribeState("b", light_8_join_BILLIARD_ROOM, (value:boolean) => setLight_8_fb_BILLIARD_ROOM(value));
      
        const sub_light_9_BILLIARD_ROOM = window.CrComLib.subscribeState("b", light_9_join_BILLIARD_ROOM, (value:boolean) => setLight_9_fb_BILLIARD_ROOM(value));
       
        // BREAKFAST
        const sub_light_1_BREAKFAST = window.CrComLib.subscribeState("b", light_1_join_BREAKFAST, (value:boolean) => setLight_1_fb_BREAKFAST(value));
        const sub_light_2_BREAKFAST = window.CrComLib.subscribeState("b", light_2_join_BREAKFAST, (value:boolean) => setLight_2_fb_BREAKFAST(value));
        const sub_light_3_BREAKFAST = window.CrComLib.subscribeState("b", light_3_join_BREAKFAST, (value:boolean) => setLight_3_fb_BREAKFAST(value));
        const sub_light_4_BREAKFAST = window.CrComLib.subscribeState("b", light_4_join_BREAKFAST, (value:boolean) => setLight_4_fb_BREAKFAST(value));
      
        const sub_light_5_BREAKFAST = window.CrComLib.subscribeState("b", light_5_join_BREAKFAST, (value:boolean) => setLight_5_fb_BREAKFAST(value));
        const sub_light_6_BREAKFAST = window.CrComLib.subscribeState("b", light_6_join_BREAKFAST, (value:boolean) => setLight_6_fb_BREAKFAST(value));
        const sub_light_7_BREAKFAST = window.CrComLib.subscribeState("b", light_7_join_BREAKFAST, (value:boolean) => setLight_7_fb_BREAKFAST(value));
        const sub_light_8_BREAKFAST = window.CrComLib.subscribeState("b", light_8_join_BREAKFAST, (value:boolean) => setLight_8_fb_BREAKFAST(value));
      
        // BUTLER PANTRY
        const sub_light_1_BUTLER_PANTRY = window.CrComLib.subscribeState("b", light_1_join_BUTLER_PANTRY, (value:boolean) => setLight_1_fb_BUTLER_PANTRY(value));
        const sub_light_2_BUTLER_PANTRY = window.CrComLib.subscribeState("b", light_2_join_BUTLER_PANTRY, (value:boolean) => setLight_2_fb_BUTLER_PANTRY(value));
        const sub_light_3_BUTLER_PANTRY = window.CrComLib.subscribeState("b", light_3_join_BUTLER_PANTRY, (value:boolean) => setLight_3_fb_BUTLER_PANTRY(value));
        const sub_light_4_BUTLER_PANTRY = window.CrComLib.subscribeState("b", light_4_join_BUTLER_PANTRY, (value:boolean) => setLight_4_fb_BUTLER_PANTRY(value));

        const sub_light_5_BUTLER_PANTRY = window.CrComLib.subscribeState("b", light_5_join_BUTLER_PANTRY, (value:boolean) => setLight_5_fb_BUTLER_PANTRY(value));
        const sub_light_6_BUTLER_PANTRY = window.CrComLib.subscribeState("b", light_6_join_BUTLER_PANTRY, (value:boolean) => setLight_6_fb_BUTLER_PANTRY(value));
        const sub_light_7_BUTLER_PANTRY = window.CrComLib.subscribeState("b", light_7_join_BUTLER_PANTRY, (value:boolean) => setLight_7_fb_BUTLER_PANTRY(value));
        const sub_light_8_BUTLER_PANTRY = window.CrComLib.subscribeState("b", light_8_join_BUTLER_PANTRY, (value:boolean) => setLight_8_fb_BUTLER_PANTRY(value));

        // DINING ROOM
        const sub_light_1_DINING_ROOM = window.CrComLib.subscribeState("b", light_1_join_DINING_ROOM, (value:boolean) => setLight_1_fb_DINING_ROOM(value));
        const sub_light_2_DINING_ROOM = window.CrComLib.subscribeState("b", light_2_join_DINING_ROOM, (value:boolean) => setLight_2_fb_DINING_ROOM(value));
        const sub_light_3_DINING_ROOM = window.CrComLib.subscribeState("b", light_3_join_DINING_ROOM, (value:boolean) => setLight_3_fb_DINING_ROOM(value));
        const sub_light_4_DINING_ROOM = window.CrComLib.subscribeState("b", light_4_join_DINING_ROOM, (value:boolean) => setLight_4_fb_DINING_ROOM(value));
      
        // ELEVATOR HALL
        const sub_light_1_ELEVATOR_HALL = window.CrComLib.subscribeState("b", light_1_join_ELEVATOR_HALL, (value:boolean) => setLight_1_fb_ELEVATOR_HALL(value));
        const sub_light_2_ELEVATOR_HALL = window.CrComLib.subscribeState("b", light_2_join_ELEVATOR_HALL, (value:boolean) => setLight_2_fb_ELEVATOR_HALL(value));
        const sub_light_3_ELEVATOR_HALL = window.CrComLib.subscribeState("b", light_3_join_ELEVATOR_HALL, (value:boolean) => setLight_3_fb_ELEVATOR_HALL(value));
        const sub_light_4_ELEVATOR_HALL = window.CrComLib.subscribeState("b", light_4_join_ELEVATOR_HALL, (value:boolean) => setLight_4_fb_ELEVATOR_HALL(value));

        // FAMILY ROOM
        const sub_light_1_FAMILY_ROOM = window.CrComLib.subscribeState("b", light_1_join_FAMILY_ROOM, (value:boolean) => setLight_1_fb_FAMILY_ROOM(value));
        const sub_light_2_FAMILY_ROOM = window.CrComLib.subscribeState("b", light_2_join_FAMILY_ROOM, (value:boolean) => setLight_2_fb_FAMILY_ROOM(value));
        const sub_light_3_FAMILY_ROOM = window.CrComLib.subscribeState("b", light_3_join_FAMILY_ROOM, (value:boolean) => setLight_3_fb_FAMILY_ROOM(value));
        const sub_light_4_FAMILY_ROOM = window.CrComLib.subscribeState("b", light_4_join_FAMILY_ROOM, (value:boolean) => setLight_4_fb_FAMILY_ROOM(value));
      
        const sub_light_5_FAMILY_ROOM = window.CrComLib.subscribeState("b", light_5_join_FAMILY_ROOM, (value:boolean) => setLight_5_fb_FAMILY_ROOM(value));
        const sub_light_6_FAMILY_ROOM = window.CrComLib.subscribeState("b", light_6_join_FAMILY_ROOM, (value:boolean) => setLight_6_fb_FAMILY_ROOM(value));
        const sub_light_7_FAMILY_ROOM = window.CrComLib.subscribeState("b", light_7_join_FAMILY_ROOM, (value:boolean) => setLight_7_fb_FAMILY_ROOM(value));
        const sub_light_8_FAMILY_ROOM = window.CrComLib.subscribeState("b", light_8_join_FAMILY_ROOM, (value:boolean) => setLight_8_fb_FAMILY_ROOM(value));
      
        const sub_light_9_FAMILY_ROOM = window.CrComLib.subscribeState("b", light_9_join_FAMILY_ROOM, (value:boolean) => setLight_9_fb_FAMILY_ROOM(value));
       
        // FOYER
        const sub_light_1_FOYER = window.CrComLib.subscribeState("b", light_1_join_FOYER, (value:boolean) => setLight_1_fb_FOYER(value));
        const sub_light_2_FOYER = window.CrComLib.subscribeState("b", light_2_join_FOYER, (value:boolean) => setLight_2_fb_FOYER(value));
        const sub_light_3_FOYER = window.CrComLib.subscribeState("b", light_3_join_FOYER, (value:boolean) => setLight_3_fb_FOYER(value));
        const sub_light_4_FOYER = window.CrComLib.subscribeState("b", light_4_join_FOYER, (value:boolean) => setLight_4_fb_FOYER(value));
       
        const sub_light_5_FOYER = window.CrComLib.subscribeState("b", light_5_join_FOYER, (value:boolean) => setLight_5_fb_FOYER(value));
        const sub_light_6_FOYER = window.CrComLib.subscribeState("b", light_6_join_FOYER, (value:boolean) => setLight_6_fb_FOYER(value));
      
        // Garage
        const sub_light_1_GARAGE = window.CrComLib.subscribeState("b", light_1_join_GARAGE, (value:boolean) => setLight_1_fb_GARAGE(value));
        const sub_light_2_GARAGE = window.CrComLib.subscribeState("b", light_2_join_GARAGE, (value:boolean) => setLight_2_fb_GARAGE(value));
        

        // KITCHEN
        const sub_light_1_KITCHEN = window.CrComLib.subscribeState("b", light_1_join_KITCHEN, (value:boolean) => setLight_1_fb_KITCHEN(value));
        const sub_light_2_KITCHEN = window.CrComLib.subscribeState("b", light_2_join_KITCHEN, (value:boolean) => setLight_2_fb_KITCHEN(value));
        const sub_light_3_KITCHEN = window.CrComLib.subscribeState("b", light_3_join_KITCHEN, (value:boolean) => setLight_3_fb_KITCHEN(value));
        const sub_light_4_KITCHEN = window.CrComLib.subscribeState("b", light_4_join_KITCHEN, (value:boolean) => setLight_4_fb_KITCHEN(value));
      
        const sub_light_5_KITCHEN = window.CrComLib.subscribeState("b", light_5_join_KITCHEN, (value:boolean) => setLight_5_fb_KITCHEN(value));
        const sub_light_6_KITCHEN = window.CrComLib.subscribeState("b", light_6_join_KITCHEN, (value:boolean) => setLight_6_fb_KITCHEN(value));
      
        // LIVING ROOM
        const sub_light_1_LIVING_ROOM = window.CrComLib.subscribeState("b", light_1_join_LIVING_ROOM, (value:boolean) => setLight_1_fb_LIVING_ROOM(value));
        const sub_light_2_LIVING_ROOM = window.CrComLib.subscribeState("b", light_2_join_LIVING_ROOM, (value:boolean) => setLight_2_fb_LIVING_ROOM(value));
        const sub_light_3_LIVING_ROOM = window.CrComLib.subscribeState("b", light_3_join_LIVING_ROOM, (value:boolean) => setLight_3_fb_LIVING_ROOM(value));
        const sub_light_4_LIVING_ROOM = window.CrComLib.subscribeState("b", light_4_join_LIVING_ROOM, (value:boolean) => setLight_4_fb_LIVING_ROOM(value));
        
        // OFFICE POWDER
        const sub_light_1_OFFICE_POWDER = window.CrComLib.subscribeState("b", light_1_join_OFFICE_POWDER, (value:boolean) => setLight_1_fb_OFFICE_POWDER(value));
        const sub_light_2_OFFICE_POWDER = window.CrComLib.subscribeState("b", light_2_join_OFFICE_POWDER, (value:boolean) => setLight_2_fb_OFFICE_POWDER(value));
      
        // STEVE'S OFFICE
        const sub_light_1_STEVE_S_OFFICE = window.CrComLib.subscribeState("b", light_1_join_STEVE_S_OFFICE, (value:boolean) => setLight_1_fb_STEVE_S_OFFICE(value));
        const sub_light_2_STEVE_S_OFFICE = window.CrComLib.subscribeState("b", light_2_join_STEVE_S_OFFICE, (value:boolean) => setLight_2_fb_STEVE_S_OFFICE(value));
        const sub_light_3_STEVE_S_OFFICE = window.CrComLib.subscribeState("b", light_3_join_STEVE_S_OFFICE, (value:boolean) => setLight_3_fb_STEVE_S_OFFICE(value));
        const sub_light_4_STEVE_S_OFFICE = window.CrComLib.subscribeState("b", light_4_join_STEVE_S_OFFICE, (value:boolean) => setLight_4_fb_STEVE_S_OFFICE(value));
      
        // HALL
        const sub_light_1_HALL = window.CrComLib.subscribeState("b", light_1_join_HALL, (value:boolean) => setLight_1_fb_HALL(value));
        const sub_light_2_HALL = window.CrComLib.subscribeState("b", light_2_join_HALL, (value:boolean) => setLight_2_fb_HALL(value));
        const sub_light_3_HALL = window.CrComLib.subscribeState("b", light_3_join_HALL, (value:boolean) => setLight_3_fb_HALL(value));
        const sub_light_4_HALL = window.CrComLib.subscribeState("b", light_4_join_HALL, (value:boolean) => setLight_4_fb_HALL(value));
        const sub_light_5_HALL = window.CrComLib.subscribeState("b", light_5_join_HALL, (value:boolean) => setLight_5_fb_HALL(value));
        const sub_light_6_HALL = window.CrComLib.subscribeState("b", light_6_join_HALL, (value:boolean) => setLight_6_fb_HALL(value));
      
        // MEDIA ROOM
        const sub_light_1_MEDIA_ROOM = window.CrComLib.subscribeState("b", light_1_join_MEDIA_ROOM, (value:boolean) => setLight_1_fb_MEDIA_ROOM(value));
        const sub_light_2_MEDIA_ROOM = window.CrComLib.subscribeState("b", light_2_join_MEDIA_ROOM, (value:boolean) => setLight_2_fb_MEDIA_ROOM(value));
        const sub_light_3_MEDIA_ROOM = window.CrComLib.subscribeState("b", light_3_join_MEDIA_ROOM, (value:boolean) => setLight_3_fb_MEDIA_ROOM(value));
        const sub_light_4_MEDIA_ROOM = window.CrComLib.subscribeState("b", light_4_join_MEDIA_ROOM, (value:boolean) => setLight_4_fb_MEDIA_ROOM(value));
        const sub_light_5_MEDIA_ROOM = window.CrComLib.subscribeState("b", light_5_join_MEDIA_ROOM, (value:boolean) => setLight_5_fb_MEDIA_ROOM(value));
        const sub_light_6_MEDIA_ROOM = window.CrComLib.subscribeState("b", light_6_join_MEDIA_ROOM, (value:boolean) => setLight_6_fb_MEDIA_ROOM(value));
      
    
        // LANDSCAPE
        const sub_light_1_LANDSCAPE = window.CrComLib.subscribeState("b", light_1_join_LANDSCAPE, (value:boolean) => setLight_1_fb_LANDSCAPE(value));
        const sub_light_2_LANDSCAPE = window.CrComLib.subscribeState("b", light_2_join_LANDSCAPE, (value:boolean) => setLight_2_fb_LANDSCAPE(value));
        const sub_light_3_LANDSCAPE = window.CrComLib.subscribeState("b", light_3_join_LANDSCAPE, (value:boolean) => setLight_3_fb_LANDSCAPE(value));
        const sub_light_4_LANDSCAPE = window.CrComLib.subscribeState("b", light_4_join_LANDSCAPE, (value:boolean) => setLight_4_fb_LANDSCAPE(value));
        const sub_light_5_LANDSCAPE = window.CrComLib.subscribeState("b", light_5_join_LANDSCAPE, (value:boolean) => setLight_5_fb_LANDSCAPE(value));
        const sub_light_6_LANDSCAPE = window.CrComLib.subscribeState("b", light_6_join_LANDSCAPE, (value:boolean) => setLight_6_fb_LANDSCAPE(value));
        const sub_light_7_LANDSCAPE = window.CrComLib.subscribeState("b", light_7_join_LANDSCAPE, (value:boolean) => setLight_7_fb_LANDSCAPE(value));
        const sub_light_8_LANDSCAPE = window.CrComLib.subscribeState("b", light_8_join_LANDSCAPE, (value:boolean) => setLight_8_fb_LANDSCAPE(value));
        const sub_light_9_LANDSCAPE = window.CrComLib.subscribeState("b", light_9_join_LANDSCAPE, (value:boolean) => setLight_9_fb_LANDSCAPE(value));
      
      
        return () => {
          // BAR
          window.CrComLib.unsubscribeState("b", light_1_join_BAR, sub_light_1_BAR);
          window.CrComLib.unsubscribeState("b", light_2_join_BAR, sub_light_2_BAR);
          window.CrComLib.unsubscribeState("b", light_3_join_BAR, sub_light_3_BAR);
          window.CrComLib.unsubscribeState("b", light_4_join_BAR, sub_function_4_BAR);

          // BILLIARD ROOM
          window.CrComLib.unsubscribeState("b", light_1_join_BILLIARD_ROOM, sub_light_1_BILLIARD_ROOM);
          window.CrComLib.unsubscribeState("b", light_2_join_BILLIARD_ROOM, sub_light_2_BILLIARD_ROOM);
          window.CrComLib.unsubscribeState("b", light_3_join_BILLIARD_ROOM, sub_light_3_BILLIARD_ROOM);
          window.CrComLib.unsubscribeState("b", light_4_join_BILLIARD_ROOM, sub_light_4_BILLIARD_ROOM);

          window.CrComLib.unsubscribeState("b", light_5_join_BILLIARD_ROOM, sub_light_5_BILLIARD_ROOM);
          window.CrComLib.unsubscribeState("b", light_6_join_BILLIARD_ROOM, sub_light_6_BILLIARD_ROOM);
          window.CrComLib.unsubscribeState("b", light_7_join_BILLIARD_ROOM, sub_light_7_BILLIARD_ROOM);
          window.CrComLib.unsubscribeState("b", light_8_join_BILLIARD_ROOM, sub_light_8_BILLIARD_ROOM);

          window.CrComLib.unsubscribeState("b", light_9_join_BILLIARD_ROOM, sub_light_9_BILLIARD_ROOM);
       
          // BREAKFAST
          window.CrComLib.unsubscribeState("b", light_1_join_BREAKFAST, sub_light_1_BREAKFAST);
          window.CrComLib.unsubscribeState("b", light_2_join_BREAKFAST, sub_light_2_BREAKFAST);
          window.CrComLib.unsubscribeState("b", light_3_join_BREAKFAST, sub_light_3_BREAKFAST);
          window.CrComLib.unsubscribeState("b", light_4_join_BREAKFAST, sub_light_4_BREAKFAST);

          window.CrComLib.unsubscribeState("b", light_1_join_BREAKFAST, sub_light_5_BREAKFAST);
          window.CrComLib.unsubscribeState("b", light_2_join_BREAKFAST, sub_light_6_BREAKFAST);
          window.CrComLib.unsubscribeState("b", light_3_join_BREAKFAST, sub_light_7_BREAKFAST);
          window.CrComLib.unsubscribeState("b", light_4_join_BREAKFAST, sub_light_8_BREAKFAST);
          // BUTLER PANTRY
          window.CrComLib.unsubscribeState("b", light_1_join_BUTLER_PANTRY, sub_light_1_BUTLER_PANTRY);
          window.CrComLib.unsubscribeState("b", light_2_join_BUTLER_PANTRY, sub_light_2_BUTLER_PANTRY);
          window.CrComLib.unsubscribeState("b", light_3_join_BUTLER_PANTRY, sub_light_3_BUTLER_PANTRY);
          window.CrComLib.unsubscribeState("b", light_4_join_BUTLER_PANTRY, sub_light_4_BUTLER_PANTRY);
          window.CrComLib.unsubscribeState("b", light_5_join_BUTLER_PANTRY, sub_light_5_BUTLER_PANTRY);
          window.CrComLib.unsubscribeState("b", light_6_join_BUTLER_PANTRY, sub_light_6_BUTLER_PANTRY);
          window.CrComLib.unsubscribeState("b", light_7_join_BUTLER_PANTRY, sub_light_7_BUTLER_PANTRY);
          window.CrComLib.unsubscribeState("b", light_8_join_BUTLER_PANTRY, sub_light_8_BUTLER_PANTRY);
          // DINING ROOM
          window.CrComLib.unsubscribeState("b", light_1_join_DINING_ROOM, sub_light_1_DINING_ROOM);
          window.CrComLib.unsubscribeState("b", light_2_join_DINING_ROOM, sub_light_2_DINING_ROOM);
          window.CrComLib.unsubscribeState("b", light_3_join_DINING_ROOM, sub_light_3_DINING_ROOM);
          window.CrComLib.unsubscribeState("b", light_4_join_DINING_ROOM, sub_light_4_DINING_ROOM);
          // ELEVATOR HALL
          window.CrComLib.unsubscribeState("b", light_1_join_ELEVATOR_HALL, sub_light_1_ELEVATOR_HALL);
          window.CrComLib.unsubscribeState("b", light_2_join_ELEVATOR_HALL, sub_light_2_ELEVATOR_HALL);
          window.CrComLib.unsubscribeState("b", light_3_join_ELEVATOR_HALL, sub_light_3_ELEVATOR_HALL);
          window.CrComLib.unsubscribeState("b", light_4_join_ELEVATOR_HALL, sub_light_4_ELEVATOR_HALL);

          // FAMILY ROOM
          window.CrComLib.unsubscribeState("b", light_1_join_FAMILY_ROOM, sub_light_1_FAMILY_ROOM);
          window.CrComLib.unsubscribeState("b", light_2_join_FAMILY_ROOM, sub_light_2_FAMILY_ROOM);
          window.CrComLib.unsubscribeState("b", light_3_join_FAMILY_ROOM, sub_light_3_FAMILY_ROOM);
          window.CrComLib.unsubscribeState("b", light_4_join_FAMILY_ROOM, sub_light_4_FAMILY_ROOM);
         
          window.CrComLib.unsubscribeState("b", light_1_join_FAMILY_ROOM, sub_light_5_FAMILY_ROOM);
          window.CrComLib.unsubscribeState("b", light_2_join_FAMILY_ROOM, sub_light_6_FAMILY_ROOM);
          window.CrComLib.unsubscribeState("b", light_3_join_FAMILY_ROOM, sub_light_7_FAMILY_ROOM);
          window.CrComLib.unsubscribeState("b", light_4_join_FAMILY_ROOM, sub_light_8_FAMILY_ROOM);

          window.CrComLib.unsubscribeState("b", light_1_join_FAMILY_ROOM, sub_light_9_FAMILY_ROOM);
     
          // FOYER
          window.CrComLib.unsubscribeState("b", light_1_join_FOYER, sub_light_1_FOYER);
          window.CrComLib.unsubscribeState("b", light_2_join_FOYER, sub_light_2_FOYER);
          window.CrComLib.unsubscribeState("b", light_3_join_FOYER, sub_light_3_FOYER);
          window.CrComLib.unsubscribeState("b", light_4_join_FOYER, sub_light_4_FOYER);
          window.CrComLib.unsubscribeState("b", light_5_join_FOYER, sub_light_5_FOYER);
          window.CrComLib.unsubscribeState("b", light_6_join_FOYER, sub_light_6_FOYER);
          // KITCHEN
          window.CrComLib.unsubscribeState("b", light_1_join_KITCHEN, sub_light_1_KITCHEN);
          window.CrComLib.unsubscribeState("b", light_2_join_KITCHEN, sub_light_2_KITCHEN);
          window.CrComLib.unsubscribeState("b", light_3_join_KITCHEN, sub_light_3_KITCHEN);
          window.CrComLib.unsubscribeState("b", light_4_join_KITCHEN, sub_light_4_KITCHEN);
          window.CrComLib.unsubscribeState("b", light_3_join_KITCHEN, sub_light_5_KITCHEN);
          window.CrComLib.unsubscribeState("b", light_4_join_KITCHEN, sub_light_6_KITCHEN);
          // LIVING ROOM
          window.CrComLib.unsubscribeState("b", light_1_join_LIVING_ROOM, sub_light_1_LIVING_ROOM);
          window.CrComLib.unsubscribeState("b", light_2_join_LIVING_ROOM, sub_light_2_LIVING_ROOM);
          window.CrComLib.unsubscribeState("b", light_3_join_LIVING_ROOM, sub_light_3_LIVING_ROOM);
          window.CrComLib.unsubscribeState("b", light_4_join_LIVING_ROOM, sub_light_4_LIVING_ROOM);
   
          // OFFICE POWDER
          window.CrComLib.unsubscribeState("b", light_1_join_OFFICE_POWDER, sub_light_1_OFFICE_POWDER);
          window.CrComLib.unsubscribeState("b", light_2_join_OFFICE_POWDER, sub_light_2_OFFICE_POWDER);
          // STEVE'S OFFICE
          window.CrComLib.unsubscribeState("b", light_1_join_STEVE_S_OFFICE, sub_light_1_STEVE_S_OFFICE);
          window.CrComLib.unsubscribeState("b", light_2_join_STEVE_S_OFFICE, sub_light_2_STEVE_S_OFFICE);
          window.CrComLib.unsubscribeState("b", light_3_join_STEVE_S_OFFICE, sub_light_3_STEVE_S_OFFICE);
          window.CrComLib.unsubscribeState("b", light_4_join_STEVE_S_OFFICE, sub_light_4_STEVE_S_OFFICE);
          // HALL
          window.CrComLib.unsubscribeState("b", light_1_join_HALL, sub_light_1_HALL);
          window.CrComLib.unsubscribeState("b", light_2_join_HALL, sub_light_2_HALL);
          window.CrComLib.unsubscribeState("b", light_3_join_HALL, sub_light_3_HALL);
          window.CrComLib.unsubscribeState("b", light_4_join_HALL, sub_light_4_HALL);
          window.CrComLib.unsubscribeState("b", light_5_join_HALL, sub_light_5_HALL);
          window.CrComLib.unsubscribeState("b", light_6_join_HALL, sub_light_6_HALL);
          // MEDIA ROOM
          window.CrComLib.unsubscribeState("b", light_1_join_MEDIA_ROOM, sub_light_1_MEDIA_ROOM);
          window.CrComLib.unsubscribeState("b", light_2_join_MEDIA_ROOM, sub_light_2_MEDIA_ROOM);
          window.CrComLib.unsubscribeState("b", light_3_join_MEDIA_ROOM, sub_light_3_MEDIA_ROOM);
          window.CrComLib.unsubscribeState("b", light_4_join_MEDIA_ROOM, sub_light_4_MEDIA_ROOM);
          window.CrComLib.unsubscribeState("b", light_5_join_MEDIA_ROOM, sub_light_5_MEDIA_ROOM);
          window.CrComLib.unsubscribeState("b", light_5_join_MEDIA_ROOM, sub_light_6_MEDIA_ROOM);
     
          // LANDSCAPE
          window.CrComLib.unsubscribeState("b", light_1_join_LANDSCAPE, sub_light_1_LANDSCAPE);
          window.CrComLib.unsubscribeState("b", light_2_join_LANDSCAPE, sub_light_2_LANDSCAPE);
          window.CrComLib.unsubscribeState("b", light_3_join_LANDSCAPE, sub_light_3_LANDSCAPE);
          window.CrComLib.unsubscribeState("b", light_4_join_LANDSCAPE, sub_light_4_LANDSCAPE);
          window.CrComLib.unsubscribeState("b", light_5_join_LANDSCAPE, sub_light_5_LANDSCAPE);
          window.CrComLib.unsubscribeState("b", light_6_join_LANDSCAPE, sub_light_6_LANDSCAPE);
          window.CrComLib.unsubscribeState("b", light_7_join_LANDSCAPE, sub_light_7_LANDSCAPE);
          window.CrComLib.unsubscribeState("b", light_8_join_LANDSCAPE, sub_light_8_LANDSCAPE);
          window.CrComLib.unsubscribeState("b", light_9_join_LANDSCAPE, sub_light_9_LANDSCAPE);


          // Garage 
     

          window.CrComLib.unsubscribeState("b", light_1_join_GARAGE, sub_light_1_GARAGE);
          window.CrComLib.unsubscribeState("b", light_2_join_GARAGE, sub_light_2_GARAGE);
 
        };
      }, []);
      
        
 

    //--------------------------------------------------------------------------------------------------------------------------------------- Current Floor section 

      

 // Zone: Bar
 const lightZone_BAR = (
    <>
      <h2 className="light_menu_title">Bar</h2>
      <div className="button_list">
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_1_join_BAR, true);
          window.CrComLib.publishEvent("b", light_1_join_BAR, false);
          console.log(`Triggered join [${light_1_join_BAR}] coming from [${light_1_title_BAR}]`);
        }}>
          <img className="btn_image" src={light_1_fb_BAR ? lightOn : lightOff} alt={light_1_title_BAR} />
          <p>{light_1_title_BAR}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_2_join_BAR, true);
          window.CrComLib.publishEvent("b", light_2_join_BAR, false);
          console.log(`Triggered join [${light_2_join_BAR}] coming from [${light_2_title_BAR}]`);
        }}>
          <img className="btn_image" src={light_2_fb_BAR ? lightOn : lightOff} alt={light_2_title_BAR} />
          <p>{light_2_title_BAR}</p>
        </button>
        
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_3_join_BAR, true);
          window.CrComLib.publishEvent("b", light_3_join_BAR, false);
          console.log(`Triggered join [${light_3_join_BAR}] coming from [${light_3_title_BAR}]`);
        }}>
          <img className="btn_image" src={light_3_fb_BAR ? lightOn : lightOff} alt={light_3_title_BAR} />
          <p>{light_3_title_BAR}</p>
        </button>
     
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_4_join_BAR, true);
          window.CrComLib.publishEvent("b", light_4_join_BAR, false);
          console.log(`Triggered join [${light_4_join_BAR}] coming from [${light_4_title_BAR}]`);
        }}>
          <img className="btn_image" src={light_4_fb_BAR ? lightOn : lightOff} alt={light_4_title_BAR} />
          <p>{light_4_title_BAR}</p>
        </button>
  


      </div>
    </>
  );

  const lightZone_Billiard = (
    <>
      <h2 className="light_menu_title">Game Room </h2>
      <div className="button_list">

      <button className="btn_square" onTouchEnd={() => {
        window.CrComLib.publishEvent("b", light_1_join_BILLIARD_ROOM, true);
        window.CrComLib.publishEvent("b", light_1_join_BILLIARD_ROOM, false);
      }}>
        <img className="btn_image" src={light_1_fb_BILLIARD_ROOM ? lightOn : lightOff} alt={light_1_title_BILLIARD_ROOM} />
        <p>{light_1_title_BILLIARD_ROOM}</p>
      </button>
      <button className="btn_square" onTouchEnd={() => {
        window.CrComLib.publishEvent("b", light_2_join_BILLIARD_ROOM, true);
        window.CrComLib.publishEvent("b", light_2_join_BILLIARD_ROOM, false);
        console.log(`Triggered join [${light_2_join_BILLIARD_ROOM}] coming from [${light_2_title_BILLIARD_ROOM}]`);
      }}>
        <img className="btn_image" src={light_2_fb_BILLIARD_ROOM ? lightOn : lightOff} alt={light_2_title_BILLIARD_ROOM} />
        <p>{light_2_title_BILLIARD_ROOM}</p>
      </button>
      <button className="btn_square" onTouchEnd={() => {
        window.CrComLib.publishEvent("b", light_3_join_BILLIARD_ROOM, true);
        window.CrComLib.publishEvent("b", light_3_join_BILLIARD_ROOM, false);
        console.log(`Triggered join [${light_3_join_BILLIARD_ROOM}] coming from [${light_3_title_BILLIARD_ROOM}]`);
      }}>
        <img className="btn_image" src={light_3_fb_BILLIARD_ROOM ? lightOn : lightOff} alt={light_3_title_BILLIARD_ROOM} />
        <p>{light_3_title_BILLIARD_ROOM}</p>
      </button>
      <button className="btn_square" onTouchEnd={() => {
        window.CrComLib.publishEvent("b", light_4_join_BILLIARD_ROOM, true);
        window.CrComLib.publishEvent("b", light_4_join_BILLIARD_ROOM, false);
        console.log(`Triggered join [${light_4_join_BILLIARD_ROOM}] coming from [${light_4_title_BILLIARD_ROOM}]`);
      }}>
        <img className="btn_image" src={light_4_fb_BILLIARD_ROOM ? lightOn : lightOff}  />
        <p>{light_4_title_BILLIARD_ROOM}</p>
      </button>


      <button className="btn_square" onTouchEnd={() => {
        window.CrComLib.publishEvent("b", light_5_join_BILLIARD_ROOM, true);
        window.CrComLib.publishEvent("b", light_5_join_BILLIARD_ROOM, false);
      }}>
        <img className="btn_image" src={light_5_fb_BILLIARD_ROOM ? lightOn : lightOff}  />
        <p>{light_5_title_BILLIARD_ROOM}</p>
      </button>

      <button className="btn_square" onTouchEnd={() => {
        window.CrComLib.publishEvent("b", light_6_join_BILLIARD_ROOM, true);
        window.CrComLib.publishEvent("b", light_6_join_BILLIARD_ROOM, false);
      }}>
        <img className="btn_image" src={light_6_fb_BILLIARD_ROOM ? lightOn : lightOff} alt={light_2_title_BILLIARD_ROOM} />
        <p>{light_6_title_BILLIARD_ROOM}</p>
      </button>

      <button className="btn_square" onTouchEnd={() => {
        window.CrComLib.publishEvent("b", light_7_join_BILLIARD_ROOM, true);
        window.CrComLib.publishEvent("b", light_7_join_BILLIARD_ROOM, false);
      }}>
        <img className="btn_image" src={light_7_fb_BILLIARD_ROOM ? lightOn : lightOff} alt={light_3_title_BILLIARD_ROOM} />
        <p>{light_7_title_BILLIARD_ROOM}</p>
      </button>

      <button className="btn_square" onTouchEnd={() => {
        window.CrComLib.publishEvent("b", light_8_join_BILLIARD_ROOM, true);
        window.CrComLib.publishEvent("b", light_8_join_BILLIARD_ROOM, false);
      }}>
        <img className="btn_image" src={light_8_fb_BILLIARD_ROOM ? lightOn : lightOff}  />
        <p>{light_8_title_BILLIARD_ROOM}</p>
      </button>



      <button className="btn_square" onTouchEnd={() => {
        window.CrComLib.publishEvent("b", light_9_join_BILLIARD_ROOM, true);
        window.CrComLib.publishEvent("b", light_9_join_BILLIARD_ROOM, false);
      }}>
        <img className="btn_image" src={light_9_fb_BILLIARD_ROOM ? lightOn : lightOff}  />
        <p>{light_9_title_BILLIARD_ROOM}</p>
      </button>

   
      </div>


    
  </>
  )

  // Zone: Breakfast
  const lightZone_BREAKFAST = (
    <>
      <h2 className="light_menu_title">Breakfast</h2>
      <div className="button_list">
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_1_join_BREAKFAST, true);
          window.CrComLib.publishEvent("b", light_1_join_BREAKFAST, false);
          console.log(`Triggered join [${light_1_join_BREAKFAST}] coming from [${light_1_title_BREAKFAST}]`);
        }}>
          <img className="btn_image" src={light_1_fb_BREAKFAST ? lightOn : lightOff} alt={light_1_title_BREAKFAST} />
          <p>{light_1_title_BREAKFAST}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_2_join_BREAKFAST, true);
          window.CrComLib.publishEvent("b", light_2_join_BREAKFAST, false);
          console.log(`Triggered join [${light_2_join_BREAKFAST}] coming from [${light_2_title_BREAKFAST}]`);
        }}>
          <img className="btn_image" src={light_2_fb_BREAKFAST ? lightOn : lightOff} alt={light_2_title_BREAKFAST} />
          <p>{light_2_title_BREAKFAST}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_3_join_BREAKFAST, true);
          window.CrComLib.publishEvent("b", light_3_join_BREAKFAST, false);
          console.log(`Triggered join [${light_3_join_BREAKFAST}] coming from [${light_3_title_BREAKFAST}]`);
        }}>
          <img className="btn_image" src={light_3_fb_BREAKFAST ? lightOn : lightOff} alt={light_3_title_BREAKFAST} />
          <p>{light_3_title_BREAKFAST}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_4_join_BREAKFAST, true);
          window.CrComLib.publishEvent("b", light_4_join_BREAKFAST, false);
          console.log(`Triggered join [${light_4_join_BREAKFAST}] coming from [${light_4_title_BREAKFAST}]`);
        }}>
          <img className="btn_image" src={light_4_fb_BREAKFAST ? lightOn : lightOff} alt={light_4_title_BREAKFAST} />
          <p>{light_4_title_BREAKFAST}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_5_join_BREAKFAST, true);
          window.CrComLib.publishEvent("b", light_5_join_BREAKFAST, false);
        }}>
          <img className="btn_image" src={light_5_fb_BREAKFAST ? lightOn : lightOff}  />
          <p>{light_5_title_BREAKFAST}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_6_join_BREAKFAST, true);
          window.CrComLib.publishEvent("b", light_6_join_BREAKFAST, false);
        }}>
          <img className="btn_image" src={light_6_fb_BREAKFAST ? lightOn : lightOff}  />
          <p>{light_6_title_BREAKFAST}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_7_join_BREAKFAST, true);
          window.CrComLib.publishEvent("b", light_7_join_BREAKFAST, false);
        }}>
          <img className="btn_image" src={light_7_fb_BREAKFAST ? lightOn : lightOff}  />
          <p>{light_7_title_BREAKFAST}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_8_join_BREAKFAST, true);
          window.CrComLib.publishEvent("b", light_8_join_BREAKFAST, false);
        }}>
          <img className="btn_image" src={light_8_fb_BREAKFAST ? lightOn : lightOff}  />
          <p>{light_8_title_BREAKFAST}</p>
        </button>


      </div>
    </>
  );

  // Zone: Butler Pantry
  const lightZone_BUTLER_PANTRY = (
    <>
      <h2 className="light_menu_title">Butler Pantry</h2>
      <div className="button_list">
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_1_join_BUTLER_PANTRY, true);
          window.CrComLib.publishEvent("b", light_1_join_BUTLER_PANTRY, false);
        }}>
          <img className="btn_image" src={light_1_fb_BUTLER_PANTRY ? lightOn : lightOff}  />
          <p>{light_1_title_BUTLER_PANTRY}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_2_join_BUTLER_PANTRY, true);
          window.CrComLib.publishEvent("b", light_2_join_BUTLER_PANTRY, false);
        }}>
          <img className="btn_image" src={light_2_fb_BUTLER_PANTRY ? lightOn : lightOff}  />
          <p>{light_2_title_BUTLER_PANTRY}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_3_join_BUTLER_PANTRY, true);
          window.CrComLib.publishEvent("b", light_3_join_BUTLER_PANTRY, false);
        }}>
          <img className="btn_image" src={light_3_fb_BUTLER_PANTRY ? lightOn : lightOff}  />
          <p>{light_3_title_BUTLER_PANTRY}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_4_join_BUTLER_PANTRY, true);
          window.CrComLib.publishEvent("b", light_4_join_BUTLER_PANTRY, false);
        }}>
          <img className="btn_image" src={light_4_fb_BUTLER_PANTRY ? lightOn : lightOff}  />
          <p>{light_4_title_BUTLER_PANTRY}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_5_join_BUTLER_PANTRY, true);
          window.CrComLib.publishEvent("b", light_5_join_BUTLER_PANTRY, false);
        }}>
          <img className="btn_image" src={light_5_fb_BUTLER_PANTRY ? lightOn : lightOff}  />
          <p>{light_5_title_BUTLER_PANTRY}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_6_join_BUTLER_PANTRY, true);
          window.CrComLib.publishEvent("b", light_6_join_BUTLER_PANTRY, false);
        }}>
          <img className="btn_image" src={light_6_fb_BUTLER_PANTRY ? lightOn : lightOff}  />
          <p>{light_6_title_BUTLER_PANTRY}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_7_join_BUTLER_PANTRY, true);
          window.CrComLib.publishEvent("b", light_7_join_BUTLER_PANTRY, false);
        }}>
          <img className="btn_image" src={light_7_fb_BUTLER_PANTRY ? lightOn : lightOff}  />
          <p>{light_7_title_BUTLER_PANTRY}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_8_join_BUTLER_PANTRY, true);
          window.CrComLib.publishEvent("b", light_8_join_BUTLER_PANTRY, false);
        }}>
          <img className="btn_image" src={light_8_fb_BUTLER_PANTRY ? lightOn : lightOff}  />
          <p>{light_8_title_BUTLER_PANTRY}</p>
        </button>

        
      </div>
    </>
  );

  // Zone: Dining Room
  const lightZone_DINING_ROOM = (
    <>
      <h2 className="light_menu_title">Dining Room</h2>
      <div className="button_list">
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_1_join_DINING_ROOM, true);
          window.CrComLib.publishEvent("b", light_1_join_DINING_ROOM, false);
          console.log(`Triggered join [${light_1_join_DINING_ROOM}] coming from [${light_1_title_DINING_ROOM}]`);
        }}>
          <img className="btn_image" src={light_1_fb_DINING_ROOM ? lightOn : lightOff} alt={light_1_title_DINING_ROOM} />
          <p>{light_1_title_DINING_ROOM}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_2_join_DINING_ROOM, true);
          window.CrComLib.publishEvent("b", light_2_join_DINING_ROOM, false);
          console.log(`Triggered join [${light_2_join_DINING_ROOM}] coming from [${light_2_title_DINING_ROOM}]`);
        }}>
          <img className="btn_image" src={light_2_fb_DINING_ROOM ? lightOn : lightOff} alt={light_2_title_DINING_ROOM} />
          <p>{light_2_title_DINING_ROOM}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_3_join_DINING_ROOM, true);
          window.CrComLib.publishEvent("b", light_3_join_DINING_ROOM, false);
          console.log(`Triggered join [${light_3_join_DINING_ROOM}] coming from [${light_3_title_DINING_ROOM}]`);
        }}>
          <img className="btn_image" src={light_3_fb_DINING_ROOM ? lightOn : lightOff} alt={light_3_title_DINING_ROOM} />
          <p>{light_3_title_DINING_ROOM}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_4_join_DINING_ROOM, true);
          window.CrComLib.publishEvent("b", light_4_join_DINING_ROOM, false);
          console.log(`Triggered join [${light_4_join_DINING_ROOM}] coming from [${light_4_title_DINING_ROOM}]`);
        }}>
          <img className="btn_image" src={light_4_fb_DINING_ROOM ? lightOn : lightOff} alt={light_4_title_DINING_ROOM} />
          <p>{light_4_title_DINING_ROOM}</p>
        </button>
      </div>
    </>
  );

  // Zone: Elevator Hall
  const lightZone_ELEVATOR_HALL = (
    <>
      <h2 className="light_menu_title">Elevator Hall</h2>
      <div className="button_list">
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_1_join_ELEVATOR_HALL, true);
          window.CrComLib.publishEvent("b", light_1_join_ELEVATOR_HALL, false);
          console.log(`Triggered join [${light_1_join_ELEVATOR_HALL}] coming from [${light_1_title_ELEVATOR_HALL}]`);
        }}>
          <img className="btn_image" src={light_1_fb_ELEVATOR_HALL ? lightOn : lightOff} alt={light_1_title_ELEVATOR_HALL} />
          <p>{light_1_title_ELEVATOR_HALL}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_2_join_ELEVATOR_HALL, true);
          window.CrComLib.publishEvent("b", light_2_join_ELEVATOR_HALL, false);
          console.log(`Triggered join [${light_2_join_ELEVATOR_HALL}] coming from [${light_2_title_ELEVATOR_HALL}]`);
        }}>
          <img className="btn_image" src={light_2_fb_ELEVATOR_HALL ? lightOn : lightOff} alt={light_2_title_ELEVATOR_HALL} />
          <p>{light_2_title_ELEVATOR_HALL}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_3_join_ELEVATOR_HALL, true);
          window.CrComLib.publishEvent("b", light_3_join_ELEVATOR_HALL, false);
          console.log(`Triggered join [${light_3_join_ELEVATOR_HALL}] coming from [${light_3_title_ELEVATOR_HALL}]`);
        }}>
          <img className="btn_image" src={light_3_fb_ELEVATOR_HALL ? lightOn : lightOff} alt={light_3_title_ELEVATOR_HALL} />
          <p>{light_3_title_ELEVATOR_HALL}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_4_join_ELEVATOR_HALL, true);
          window.CrComLib.publishEvent("b", light_4_join_ELEVATOR_HALL, false);
        }}>
          <img className="btn_image" src={light_4_fb_ELEVATOR_HALL ? lightOn : lightOff} alt={light_3_title_ELEVATOR_HALL} />
          <p>{light_4_title_ELEVATOR_HALL}</p>
        </button>
      </div>
    </>
  );

  // Zone: Family Room
  const lightZone_FAMILY_ROOM = (
    <>
      <h2 className="light_menu_title">Family Room</h2>
      <div className="button_list">
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_1_join_FAMILY_ROOM, true);
          window.CrComLib.publishEvent("b", light_1_join_FAMILY_ROOM, false);
          console.log(`Triggered join [${light_1_join_FAMILY_ROOM}] coming from [${light_1_title_FAMILY_ROOM}]`);
        }}>
          <img className="btn_image" src={light_1_fb_FAMILY_ROOM ? lightOn : lightOff} alt={light_1_title_FAMILY_ROOM} />
          <p>{light_1_title_FAMILY_ROOM}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_2_join_FAMILY_ROOM, true);
          window.CrComLib.publishEvent("b", light_2_join_FAMILY_ROOM, false);
          console.log(`Triggered join [${light_2_join_FAMILY_ROOM}] coming from [${light_2_title_FAMILY_ROOM}]`);
        }}>
          <img className="btn_image" src={light_2_fb_FAMILY_ROOM ? lightOn : lightOff} alt={light_2_title_FAMILY_ROOM} />
          <p>{light_2_title_FAMILY_ROOM}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_3_join_FAMILY_ROOM, true);
          window.CrComLib.publishEvent("b", light_3_join_FAMILY_ROOM, false);
          console.log(`Triggered join [${light_3_join_FAMILY_ROOM}] coming from [${light_3_title_FAMILY_ROOM}]`);
        }}>
          <img className="btn_image" src={light_3_fb_FAMILY_ROOM ? lightOn : lightOff} alt={light_3_title_FAMILY_ROOM} />
          <p>{light_3_title_FAMILY_ROOM}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_4_join_FAMILY_ROOM, true);
          window.CrComLib.publishEvent("b", light_4_join_FAMILY_ROOM, false);
        }}>
          <img className="btn_image" src={light_4_fb_FAMILY_ROOM ? lightOn : lightOff}  />
          <p>{light_4_title_FAMILY_ROOM}</p>
        </button>


        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_5_join_FAMILY_ROOM, true);
          window.CrComLib.publishEvent("b", light_5_join_FAMILY_ROOM, false);
        }}>
          <img className="btn_image" src={light_5_fb_FAMILY_ROOM ? lightOn : lightOff}  />
          <p>{light_5_title_FAMILY_ROOM}</p>
        </button>


        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_6_join_FAMILY_ROOM, true);
          window.CrComLib.publishEvent("b", light_6_join_FAMILY_ROOM, false);
        }}>
          <img className="btn_image" src={light_6_fb_FAMILY_ROOM ? lightOn : lightOff}  />
          <p>{light_6_title_FAMILY_ROOM}</p>
        </button>


        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_7_join_FAMILY_ROOM, true);
          window.CrComLib.publishEvent("b", light_7_join_FAMILY_ROOM, false);
        }}>
          <img className="btn_image" src={light_7_fb_FAMILY_ROOM ? lightOn : lightOff}  />
          <p>{light_7_title_FAMILY_ROOM}</p>
        </button>


        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_8_join_FAMILY_ROOM, true);
          window.CrComLib.publishEvent("b", light_8_join_FAMILY_ROOM, false);
        }}>
          <img className="btn_image" src={light_8_fb_FAMILY_ROOM ? lightOn : lightOff}  />
          <p>{light_8_title_FAMILY_ROOM}</p>
        </button>


        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_9_join_FAMILY_ROOM, true);
          window.CrComLib.publishEvent("b", light_9_join_FAMILY_ROOM, false);
        }}>
          <img className="btn_image" src={light_9_fb_FAMILY_ROOM ? lightOn : lightOff}  />
          <p>{light_9_title_FAMILY_ROOM}</p>
        </button>
      </div>
    </>
  );

  // Zone: Foyer
  const lightZone_FOYER = (
    <>
      <h2 className="light_menu_title">Foyer</h2>
      <div className="button_list">
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_1_join_FOYER, true);
          window.CrComLib.publishEvent("b", light_1_join_FOYER, false);
          console.log(`Triggered join [${light_1_join_FOYER}] coming from [${light_1_title_FOYER}]`);
        }}>
          <img className="btn_image" src={light_1_fb_FOYER ? lightOn : lightOff} alt={light_1_title_FOYER} />
          <p>{light_1_title_FOYER}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_2_join_FOYER, true);
          window.CrComLib.publishEvent("b", light_2_join_FOYER, false);
          console.log(`Triggered join [${light_2_join_FOYER}] coming from [${light_2_title_FOYER}]`);
        }}>
          <img className="btn_image" src={light_2_fb_FOYER ? lightOn : lightOff} alt={light_2_title_FOYER} />
          <p>{light_2_title_FOYER}</p>
        </button>


        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_3_join_FOYER, true);
          window.CrComLib.publishEvent("b", light_3_join_FOYER, false);
        }}>
          <img className="btn_image" src={light_3_fb_FOYER ? lightOn : lightOff}  />
          <p>{light_3_title_FOYER}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_4_join_FOYER, true);
          window.CrComLib.publishEvent("b", light_4_join_FOYER, false);
        }}>
          <img className="btn_image" src={light_4_fb_FOYER ? lightOn : lightOff}  />
          <p>{light_4_title_FOYER}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_5_join_FOYER, true);
          window.CrComLib.publishEvent("b", light_5_join_FOYER, false);
        }}>
          <img className="btn_image" src={light_5_fb_FOYER ? lightOn : lightOff}  />
          <p>{light_5_title_FOYER}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_6_join_FOYER, true);
          window.CrComLib.publishEvent("b", light_6_join_FOYER, false);
        }}>
          <img className="btn_image" src={light_6_fb_FOYER ? lightOn : lightOff}  />
          <p>{light_6_title_FOYER}</p>
        </button>

      
      </div>
    </>
  );

  // Zone: Kitchen
  const lightZone_KITCHEN = (
    <>
      <h2 className="light_menu_title">Kitchen</h2>
      <div className="button_list">
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_1_join_KITCHEN, true);
          window.CrComLib.publishEvent("b", light_1_join_KITCHEN, false);
          console.log(`Triggered join [${light_1_join_KITCHEN}] coming from [${light_1_title_KITCHEN}]`);
        }}>
          <img className="btn_image" src={light_1_fb_KITCHEN ? lightOn : lightOff} alt={light_1_title_KITCHEN} />
          <p>{light_1_title_KITCHEN}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_2_join_KITCHEN, true);
          window.CrComLib.publishEvent("b", light_2_join_KITCHEN, false);
          console.log(`Triggered join [${light_2_join_KITCHEN}] coming from [${light_2_title_KITCHEN}]`);
        }}>
          <img className="btn_image" src={light_2_fb_KITCHEN ? lightOn : lightOff} alt={light_2_title_KITCHEN} />
          <p>{light_2_title_KITCHEN}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_3_join_KITCHEN, true);
          window.CrComLib.publishEvent("b", light_3_join_KITCHEN, false);
          console.log(`Triggered join [${light_3_join_KITCHEN}] coming from [${light_3_title_KITCHEN}]`);
        }}>
          <img className="btn_image" src={light_3_fb_KITCHEN ? lightOn : lightOff} alt={light_3_title_KITCHEN} />
          <p>{light_3_title_KITCHEN}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_4_join_KITCHEN, true);
          window.CrComLib.publishEvent("b", light_4_join_KITCHEN, false);
        }}>
          <img className="btn_image" src={light_4_fb_KITCHEN ? lightOn : lightOff}  />
          <p>{light_4_title_KITCHEN}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_5_join_KITCHEN, true);
          window.CrComLib.publishEvent("b", light_5_join_KITCHEN, false);
        }}>
          <img className="btn_image" src={light_5_fb_KITCHEN ? lightOn : lightOff}  />
          <p>{light_5_title_KITCHEN}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_6_join_KITCHEN, true);
          window.CrComLib.publishEvent("b", light_6_join_KITCHEN, false);
        }}>
          <img className="btn_image" src={light_6_fb_KITCHEN ? lightOn : lightOff}  />
          <p>{light_6_title_KITCHEN}</p>
        </button>
      </div>
    </>
  );

  // Zone: Living Room
  const lightZone_LIVING_ROOM = (
    <>
      <h2 className="light_menu_title">Living Room</h2>
      <div className="button_list">
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_1_join_LIVING_ROOM, true);
          window.CrComLib.publishEvent("b", light_1_join_LIVING_ROOM, false);
          console.log(`Triggered join [${light_1_join_LIVING_ROOM}] coming from [${light_1_title_LIVING_ROOM}]`);
        }}>
          <img className="btn_image" src={light_1_fb_LIVING_ROOM ? lightOn : lightOff} alt={light_1_title_LIVING_ROOM} />
          <p>{light_1_title_LIVING_ROOM}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_2_join_LIVING_ROOM, true);
          window.CrComLib.publishEvent("b", light_2_join_LIVING_ROOM, false);
          console.log(`Triggered join [${light_2_join_LIVING_ROOM}] coming from [${light_2_title_LIVING_ROOM}]`);
        }}>
          <img className="btn_image" src={light_2_fb_LIVING_ROOM ? lightOn : lightOff} alt={light_2_title_LIVING_ROOM} />
          <p>{light_2_title_LIVING_ROOM}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_3_join_LIVING_ROOM, true);
          window.CrComLib.publishEvent("b", light_3_join_LIVING_ROOM, false);
          console.log(`Triggered join [${light_3_join_LIVING_ROOM}] coming from [${light_3_title_LIVING_ROOM}]`);
        }}>
          <img className="btn_image" src={light_3_fb_LIVING_ROOM ? lightOn : lightOff} alt={light_3_title_LIVING_ROOM} />
          <p>{light_3_title_LIVING_ROOM}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_4_join_LIVING_ROOM, true);
          window.CrComLib.publishEvent("b", light_4_join_LIVING_ROOM, false);
          console.log(`Triggered join [${light_4_join_LIVING_ROOM}] coming from [${light_4_title_LIVING_ROOM}]`);
        }}>
          <img className="btn_image" src={light_4_fb_LIVING_ROOM ? lightOn : lightOff} alt={light_4_title_LIVING_ROOM} />
          <p>{light_4_title_LIVING_ROOM}</p>
        </button>
        
      </div>
    </>
  );

  // Zone: Office Powder
  const lightZone_OFFICE_POWDER = (
    <>
      <h2 className="light_menu_title">Office Powder</h2>
      <div className="button_list">
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_1_join_OFFICE_POWDER, true);
          window.CrComLib.publishEvent("b", light_1_join_OFFICE_POWDER, false);
          console.log(`Triggered join [${light_1_join_OFFICE_POWDER}] coming from [${light_1_title_OFFICE_POWDER}]`);
        }}>
          <img className="btn_image" src={light_1_fb_OFFICE_POWDER ? lightOn : lightOff} alt={light_1_title_OFFICE_POWDER} />
          <p>{light_1_title_OFFICE_POWDER}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_2_join_OFFICE_POWDER, true);
          window.CrComLib.publishEvent("b", light_2_join_OFFICE_POWDER, false);
          console.log(`Triggered join [${light_2_join_OFFICE_POWDER}] coming from [${light_2_title_OFFICE_POWDER}]`);
        }}>
          <img className="btn_image" src={light_2_fb_OFFICE_POWDER ? lightOn : lightOff} alt={light_2_title_OFFICE_POWDER} />
          <p>{light_2_title_OFFICE_POWDER}</p>
        </button>
      </div>
    </>
  );

  // Zone: Steve's Office
  const lightZone_STEVE_S_OFFICE = (
    <>
      <h2 className="light_menu_title">Steve's Office</h2>
      <div className="button_list">
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_1_join_STEVE_S_OFFICE, true);
          window.CrComLib.publishEvent("b", light_1_join_STEVE_S_OFFICE, false);
          console.log(`Triggered join [${light_1_join_STEVE_S_OFFICE}] coming from [${light_1_title_STEVE_S_OFFICE}]`);
        }}>
          <img className="btn_image" src={light_1_fb_STEVE_S_OFFICE ? lightOn : lightOff} alt={light_1_title_STEVE_S_OFFICE} />
          <p>{light_1_title_STEVE_S_OFFICE}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_2_join_STEVE_S_OFFICE, true);
          window.CrComLib.publishEvent("b", light_2_join_STEVE_S_OFFICE, false);
        }}>
          <img className="btn_image" src={light_2_fb_STEVE_S_OFFICE ? lightOn : lightOff}  />
          <p>{light_2_title_STEVE_S_OFFICE}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_3_join_STEVE_S_OFFICE, true);
          window.CrComLib.publishEvent("b", light_3_join_STEVE_S_OFFICE, false);
        }}>
          <img className="btn_image" src={light_3_fb_STEVE_S_OFFICE ? lightOn : lightOff}  />
          <p>{light_3_title_STEVE_S_OFFICE}</p>
        </button>


        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_4_join_STEVE_S_OFFICE, true);
          window.CrComLib.publishEvent("b", light_4_join_STEVE_S_OFFICE, false);
        }}>
          <img className="btn_image" src={light_4_fb_STEVE_S_OFFICE ? lightOn : lightOff}  />
          <p>{light_4_title_STEVE_S_OFFICE}</p>
        </button>
      </div>
    </>
  );

  // Zone: Hall

  const lightZone_HALL = (
    <>
      <h2 className="light_menu_title">Hall</h2>
      <div className="button_list">
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_1_join_HALL, true);
          window.CrComLib.publishEvent("b", light_1_join_HALL, false);
          console.log(`Triggered join [${light_1_join_HALL}] coming from [${light_1_title_HALL}]`);
        }}>
          <img className="btn_image" src={light_1_fb_HALL ? lightOn : lightOff} alt={light_1_title_HALL} />
          <p>{light_1_title_HALL}</p>
        </button>
        
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_2_join_HALL, true);
          window.CrComLib.publishEvent("b", light_2_join_HALL, false);
          console.log(`Triggered join [${light_2_join_HALL}] coming from [${light_2_title_HALL}]`);
        }}>
          <img className="btn_image" src={light_2_fb_HALL ? lightOn : lightOff} alt={light_2_title_HALL} />
          <p>{light_2_title_HALL}</p>
        </button>
        
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_3_join_HALL, true);
          window.CrComLib.publishEvent("b", light_3_join_HALL, false);
          console.log(`Triggered join [${light_3_join_HALL}] coming from [${light_3_title_HALL}]`);
        }}>
          <img className="btn_image" src={light_3_fb_HALL ? lightOn : lightOff} alt={light_3_title_HALL} />
          <p>{light_3_title_HALL}</p>
        </button>
        

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_4_join_HALL, true);
          window.CrComLib.publishEvent("b", light_4_join_HALL, false);
          console.log(`Triggered join [${light_4_join_HALL}] coming from [${light_4_title_HALL}]`);
        }}>
          <img className="btn_image" src={light_4_fb_HALL ? lightOn : lightOff} alt={light_4_title_HALL} />
          <p>{light_4_title_HALL}</p>
        </button>
        
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_5_join_HALL, true);
          window.CrComLib.publishEvent("b", light_5_join_HALL, false);
          console.log(`Triggered join [${light_5_join_HALL}] coming from [${light_5_title_HALL}]`);
        }}>
          <img className="btn_image" src={light_5_fb_HALL ? lightOn : lightOff} alt={light_5_title_HALL} />
          <p>{light_5_title_HALL}</p>
        </button>
        

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_6_join_HALL, true);
          window.CrComLib.publishEvent("b", light_6_join_HALL, false);
          console.log(`Triggered join [${light_6_join_HALL}] coming from [${light_6_title_HALL}]`);
        }}>
          <img className="btn_image" src={light_6_fb_HALL ? lightOn : lightOff} alt={light_6_title_HALL} />
          <p>{light_6_title_HALL}</p>
        </button>

      </div>
    </>
  );

  // Zone: Media Room
  const lightZone_MEDIA_ROOM = (
    <>
      <h2 className="light_menu_title">Media Room</h2>
      <div className="button_list">
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_1_join_MEDIA_ROOM, true);
          window.CrComLib.publishEvent("b", light_1_join_MEDIA_ROOM, false);
          console.log(`Triggered join [${light_1_join_MEDIA_ROOM}] coming from [${light_1_title_MEDIA_ROOM}]`);
        }}>
          <img className="btn_image" src={light_1_fb_MEDIA_ROOM ? lightOn : lightOff} alt={light_1_title_MEDIA_ROOM} />
          <p>{light_1_title_MEDIA_ROOM}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_2_join_MEDIA_ROOM, true);
          window.CrComLib.publishEvent("b", light_2_join_MEDIA_ROOM, false);
          console.log(`Triggered join [${light_2_join_MEDIA_ROOM}] coming from [${light_2_title_MEDIA_ROOM}]`);
        }}>
          <img className="btn_image" src={light_2_fb_MEDIA_ROOM ? lightOn : lightOff} alt={light_2_title_MEDIA_ROOM} />
          <p>{light_2_title_MEDIA_ROOM}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_3_join_MEDIA_ROOM, true);
          window.CrComLib.publishEvent("b", light_3_join_MEDIA_ROOM, false);
          console.log(`Triggered join [${light_3_join_MEDIA_ROOM}] coming from [${light_3_title_MEDIA_ROOM}]`);
        }}>
          <img className="btn_image" src={light_3_fb_MEDIA_ROOM ? lightOn : lightOff} alt={light_3_title_MEDIA_ROOM} />
          <p>{light_3_title_MEDIA_ROOM}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_4_join_MEDIA_ROOM, true);
          window.CrComLib.publishEvent("b", light_4_join_MEDIA_ROOM, false);
          console.log(`Triggered join [${light_4_join_MEDIA_ROOM}] coming from [${light_4_title_MEDIA_ROOM}]`);
        }}>
          <img className="btn_image" src={light_4_fb_MEDIA_ROOM ? lightOn : lightOff} alt={light_4_title_MEDIA_ROOM} />
          <p>{light_4_title_MEDIA_ROOM}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_5_join_MEDIA_ROOM, true);
          window.CrComLib.publishEvent("b", light_5_join_MEDIA_ROOM, false);
          console.log(`Triggered join [${light_5_join_MEDIA_ROOM}] coming from [${light_5_title_MEDIA_ROOM}]`);
        }}>
          <img className="btn_image" src={light_5_fb_MEDIA_ROOM ? lightOn : lightOff} alt={light_5_title_MEDIA_ROOM} />
          <p>{light_5_title_MEDIA_ROOM}</p>
        </button>



        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_6_join_MEDIA_ROOM, true);
          window.CrComLib.publishEvent("b", light_6_join_MEDIA_ROOM, false);
        }}>
          <img className="btn_image" src={light_6_fb_MEDIA_ROOM ? lightOn : lightOff}  />
          <p>{light_6_title_MEDIA_ROOM}</p>
        </button>
      </div>
    </>
  );

  // Zone: South Stairs


  // Zone: Front
  const lightZone_FRONT = (
    <>
    </>
  );

  // Zone: Landscape
  const lightZone_LANDSCAPE = (
    <>
      <h2 className="light_menu_title">Landscape</h2>
      <div className="button_list">
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_1_join_LANDSCAPE, true);
          window.CrComLib.publishEvent("b", light_1_join_LANDSCAPE, false);
          console.log(`Triggered join [${light_1_join_LANDSCAPE}] coming from [${light_1_title_LANDSCAPE}]`);
        }}>
          <img className="btn_image" src={light_1_fb_LANDSCAPE ? lightOn : lightOff} alt={light_1_title_LANDSCAPE} />
          <p>{light_1_title_LANDSCAPE}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_2_join_LANDSCAPE, true);
          window.CrComLib.publishEvent("b", light_2_join_LANDSCAPE, false);
          console.log(`Triggered join [${light_2_join_LANDSCAPE}] coming from [${light_2_title_LANDSCAPE}]`);
        }}>
          <img className="btn_image" src={light_2_fb_LANDSCAPE ? lightOn : lightOff} alt={light_2_title_LANDSCAPE} />
          <p>{light_2_title_LANDSCAPE}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_3_join_LANDSCAPE, true);
          window.CrComLib.publishEvent("b", light_3_join_LANDSCAPE, false);
          console.log(`Triggered join [${light_3_join_LANDSCAPE}] coming from [${light_3_title_LANDSCAPE}]`);
        }}>
          <img className="btn_image" src={light_3_fb_LANDSCAPE ? lightOn : lightOff} alt={light_3_title_LANDSCAPE} />
          <p>{light_3_title_LANDSCAPE}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_4_join_LANDSCAPE, true);
          window.CrComLib.publishEvent("b", light_4_join_LANDSCAPE, false);
          console.log(`Triggered join [${light_4_join_LANDSCAPE}] coming from [${light_4_title_LANDSCAPE}]`);
        }}>
          <img className="btn_image" src={light_4_fb_LANDSCAPE ? lightOn : lightOff} alt={light_4_title_LANDSCAPE} />
          <p>{light_4_title_LANDSCAPE}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_5_join_LANDSCAPE, true);
          window.CrComLib.publishEvent("b", light_5_join_LANDSCAPE, false);
          console.log(`Triggered join [${light_5_join_LANDSCAPE}] coming from [${light_5_title_LANDSCAPE}]`);
        }}>
          <img className="btn_image" src={light_5_fb_LANDSCAPE ? lightOn : lightOff} alt={light_5_title_LANDSCAPE} />
          <p>{light_5_title_LANDSCAPE}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_6_join_LANDSCAPE, true);
          window.CrComLib.publishEvent("b", light_6_join_LANDSCAPE, false);
          console.log(`Triggered join [${light_6_join_LANDSCAPE}] coming from [${light_6_title_LANDSCAPE}]`);
        }}>
          <img className="btn_image" src={light_6_fb_LANDSCAPE ? lightOn : lightOff} alt={light_6_title_LANDSCAPE} />
          <p>{light_6_title_LANDSCAPE}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_7_join_LANDSCAPE, true);
          window.CrComLib.publishEvent("b", light_7_join_LANDSCAPE, false);
          console.log(`Triggered join [${light_7_join_LANDSCAPE}] coming from [${light_7_title_LANDSCAPE}]`);
        }}>
          <img className="btn_image" src={light_7_fb_LANDSCAPE ? lightOn : lightOff} alt={light_7_title_LANDSCAPE} />
          <p>{light_7_title_LANDSCAPE}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_8_join_LANDSCAPE, true);
          window.CrComLib.publishEvent("b", light_8_join_LANDSCAPE, false);
          console.log(`Triggered join [${light_8_join_LANDSCAPE}] coming from [${light_8_title_LANDSCAPE}]`);
        }}>
          <img className="btn_image" src={light_8_fb_LANDSCAPE ? lightOn : lightOff} alt={light_8_title_LANDSCAPE} />
          <p>{light_8_title_LANDSCAPE}</p>
        </button>
        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_9_join_LANDSCAPE, true);
          window.CrComLib.publishEvent("b", light_9_join_LANDSCAPE, false);
          console.log(`Triggered join [${light_9_join_LANDSCAPE}] coming from [${light_9_title_LANDSCAPE}]`);
        }}>
          <img className="btn_image" src={light_9_fb_LANDSCAPE ? lightOn : lightOff} alt={light_9_title_LANDSCAPE} />
          <p>{light_9_title_LANDSCAPE}</p>
        </button>
      </div>
    </>
  );

  // Zone: Rear
  const lightZone_REAR = (
    <>
      
    
    </>
       
    )


   // Zone: Landscape
   const lightZone_GARAGE = (
    <>
      <h2 className="light_menu_title"> Garage</h2>
      <div className="button_list">

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_1_join_GARAGE, true);
          window.CrComLib.publishEvent("b", light_1_join_GARAGE, false);
        }}>
          <img className="btn_image" src={light_1_fb_GARAGE ? lightOn : lightOff} />
          <p>{light_1_title_GARAGE}</p>
        </button>

        <button className="btn_square" onTouchEnd={() => {
          window.CrComLib.publishEvent("b", light_2_join_GARAGE, true);
          window.CrComLib.publishEvent("b", light_2_join_GARAGE, false);
        }}>
          <img className="btn_image" src={light_2_fb_GARAGE ? lightOn : lightOff} />
          <p>{light_2_title_GARAGE}</p>
        </button>


    
      </div>
    </>
  );

  // single zones

  const singleZone_tennis =( <>
    <h2 className="light_menu_title"> Tennis</h2>
      <div className="button_list">

      <button className="btn_square" onTouchEnd={() => {
        window.CrComLib.publishEvent("b", light_1_join_LANDSCAPE, true);
        window.CrComLib.publishEvent("b", light_1_join_LANDSCAPE, false);
      }}>
        <img className="btn_image" src={light_1_join_LANDSCAPE ? lightOn : lightOff} />
        <p>{light_1_title_LANDSCAPE}</p>
      </button>

    
    </div>
  </>)
  const singleZone_poolArea =(<>
   <h2 className="light_menu_title"> Pool Area </h2>
      <div className="button_list">

      <button className="btn_square" onTouchEnd={() => {
        window.CrComLib.publishEvent("b", light_9_join_LANDSCAPE, true);
        window.CrComLib.publishEvent("b", light_9_join_LANDSCAPE, false);
      }}>
        <img className="btn_image" src={light_9_join_LANDSCAPE ? lightOn : lightOff} />
        <p>{light_9_title_LANDSCAPE}</p>
      </button>

    
    </div>
  </>)
  const singleZone_frontYard =(<>
   <h2 className="light_menu_title"> Front Yard</h2>
      <div className="button_list">

      <button className="btn_square" onTouchEnd={() => {
        window.CrComLib.publishEvent("b", light_8_join_LANDSCAPE, true);
        window.CrComLib.publishEvent("b", light_8_join_LANDSCAPE, false);
      }}>
        <img className="btn_image" src={light_8_join_LANDSCAPE ? lightOn : lightOff} />
        <p>{light_8_title_LANDSCAPE}</p>
      </button>

    
    </div>
  </>)
  const singleZone_backYard =(<>
   <h2 className="light_menu_title"> Back Yard</h2>
      <div className="button_list">

      <button className="btn_square" onTouchEnd={() => {
        window.CrComLib.publishEvent("b", light_7_join_LANDSCAPE, true);
        window.CrComLib.publishEvent("b", light_7_join_LANDSCAPE, false);
      }}>
        <img className="btn_image" src={light_7_join_LANDSCAPE ? lightOn : lightOff} />
        <p>{light_7_title_LANDSCAPE}</p>
      </button>

    
    </div>
  </>)
  const singleZone_breezyway =(<>
   <h2 className="light_menu_title"> Breezeway </h2>
      <div className="button_list">

      <button className="btn_square" onTouchEnd={() => {
        window.CrComLib.publishEvent("b", light_2_join_LANDSCAPE, true);
        window.CrComLib.publishEvent("b", light_2_join_LANDSCAPE, false);
      }}>
        <img className="btn_image" src={light_2_join_LANDSCAPE ? lightOn : lightOff} />
        <p>{light_2_title_LANDSCAPE}</p>
      </button>

    
    </div>
  </>)



        const currentFloor = (id:string) => {
            if (id === "main"){
                setUpStairs(false)
                setMain(true)
                setOutDoors(false)
                setLightMenuDisplay("light_menu_closed")
                setLightMenuDisplay2("light_menu_closed")
                setMap1("map_layout_1")
                setMap2("map_layout_2")

              } 

            else if (id === "up"){
                setUpStairs(true)
                setMain(false)
                setOutDoors(false)
                setLightMenuDisplay("light_menu_closed")
                setLightMenuDisplay2("light_menu_closed")
                setMap1("map_layout_1")
                setMap2("map_layout_2")
            }   

            else if (id === "out"){
              setUpStairs(false)
              setMain(false)
              setOutDoors(true)
              setLightMenuDisplay("light_menu_closed")
              setLightMenuDisplay2("light_menu_closed")
              setMap1("map_layout_1")
              setMap2("map_layout_2")
            }   
        }


        const lightMenu = (id: string) => {
            if (id === "openMap1") {
              setMap1("map_layout_1_active");
              setLightMenuDisplay("light_menu_open");
            } 
            
            
            else if (id === "closeMap1") {
             
              setMap1("map_layout_1_closing");
              setLightMenuDisplay("light_menu_closing")
            
              const intervalId = setInterval(() => {
                setMap1("map_layout_1");
                setLightMenuDisplay("light_menu_closed")
                clearInterval(intervalId); 
              }, 1000);
            }






            else if (id === "openMap2") {
              setMap2("map_layout_2_active");
              setLightMenuDisplay2("light_menu_open");
            } 
            
            
            else if (id === "closeMap2") {
             
              setMap2("map_layout_2_closing");
              setLightMenuDisplay2("light_menu_closing")
            
              const intervalId2 = setInterval(() => {
                setMap2("map_layout_2");
                setLightMenuDisplay2("light_menu_closed")
                clearInterval(intervalId2); 
              }, 1000);
            }
        };

        const lightZone = (id:string) =>{
            if(id === "zone_1"){
              setZone_1(true)
              setZone_2(false)
              setZone_3(false)
              setZone_4(false)
              setZone_5(false)
              setZone_6(false)
              setZone_7(false)
              setZone_8(false)
              setZone_9(false)
              setZone_10(false)
              setZone_11(false)
              setZone_12(false)
              setZone_13(false)
              setZone_14(false)
              setZone_15(false)
              setZone_16(false)
              setZone_17(false)
              setZone_18(false)
              setZone_19(false)
              setZone_20(false)
                            setZone_21(false)


            } else if (id === "zone_2"){
              setZone_1(false)
              setZone_2(true)
              setZone_3(false)
              setZone_4(false)
              setZone_5(false)
              setZone_6(false)
              setZone_7(false)
              setZone_8(false)
              setZone_9(false)
              setZone_10(false)
              setZone_11(false)
              setZone_12(false)
              setZone_13(false)
              setZone_14(false)
              setZone_15(false)
              setZone_16(false)
              setZone_17(false)
              setZone_18(false)
              setZone_19(false)
              setZone_20(false)
                            setZone_21(false)


            } else if (id === "zone_3"){
              setZone_1(false)
              setZone_2(false)
              setZone_3(true)
              setZone_4(false)
              setZone_5(false)
              setZone_6(false)
              setZone_7(false)
              setZone_8(false)
              setZone_9(false)
              setZone_10(false)
              setZone_11(false)
              setZone_12(false)
              setZone_13(false)
              setZone_14(false)
                              setZone_15(false)
                                setZone_16(false)
                                setZone_17(false)
                                  setZone_18(false)
                                  setZone_19(false)
                                  setZone_20(false)
                                                setZone_21(false)


            }else if (id === "zone_4"){
              setZone_1(false)
              setZone_2(false)
              setZone_3(false)
              setZone_4(true)
              setZone_5(false)
              setZone_6(false)
              setZone_7(false)
              setZone_8(false)
              setZone_9(false)
              setZone_10(false)
              setZone_11(false)
              setZone_12(false)
              setZone_13(false)
              setZone_14(false)
                              setZone_15(false)
                                setZone_16(false)
                                setZone_17(false)
                                  setZone_18(false)
                                  setZone_19(false)
                                  setZone_20(false)
                                                setZone_21(false)


            }else if (id === "zone_5"){
              setZone_1(false)
              setZone_2(false)
              setZone_3(false)
              setZone_4(false)
              setZone_5(true)
              setZone_6(false)
              setZone_7(false)
              setZone_8(false)
              setZone_9(false)
              setZone_10(false)
              setZone_11(false)
              setZone_12(false)
              setZone_13(false)
              setZone_14(false)
                              setZone_15(false)
                                setZone_16(false)
                                setZone_17(false)
                                  setZone_18(false)
                                  setZone_19(false)
                                  setZone_20(false)
                                                setZone_21(false)


            }else if (id === "zone_6"){
              setZone_1(false)
              setZone_2(false)
              setZone_3(false)
              setZone_4(false)
              setZone_5(false)
              setZone_6(true)
              setZone_7(false)
              setZone_8(false)
              setZone_9(false)
              setZone_10(false)
              setZone_11(false)
              setZone_12(false)
              setZone_13(false)
              setZone_14(false)
                              setZone_15(false)
                                setZone_16(false)
                                setZone_17(false)
                                  setZone_18(false)
                                  setZone_19(false)
                                  setZone_20(false)
                                                setZone_21(false)


            }else if (id === "zone_7"){
              setZone_1(false)
              setZone_2(false)
              setZone_3(false)
              setZone_4(false)
              setZone_5(false)
              setZone_6(false)
              setZone_7(true)
              setZone_8(false)
              setZone_9(false)
              setZone_10(false)
              setZone_11(false)
              setZone_12(false)
              setZone_13(false)
              setZone_14(false)
                              setZone_15(false)
                                setZone_16(false)
                                setZone_17(false)
                                  setZone_18(false)
                                  setZone_19(false)
                                  setZone_20(false)
                                                setZone_21(false)


            }else if (id === "zone_8"){
              setZone_1(false)
              setZone_2(false)
              setZone_3(false)
              setZone_4(false)
              setZone_5(false)
              setZone_6(false)
              setZone_7(false)
              setZone_8(true)
              setZone_9(false)
              setZone_10(false)
              setZone_11(false)
              setZone_12(false)
              setZone_13(false)
              setZone_14(false)
                              setZone_15(false)
                                setZone_16(false)
                                setZone_17(false)
                                  setZone_18(false)
                                  setZone_19(false)
                                  setZone_20(false)
                                                setZone_21(false)


            }else if (id === "zone_9"){
              setZone_1(false)
              setZone_2(false)
              setZone_3(false)
              setZone_4(false)
              setZone_5(false)
              setZone_6(false)
              setZone_7(false)
              setZone_8(false)
              setZone_9(true)
              setZone_10(false)
              setZone_11(false)
              setZone_12(false)
              setZone_13(false)
              setZone_14(false)
                              setZone_15(false)
                                setZone_16(false)
                                setZone_17(false)
                                  setZone_18(false)
                                  setZone_19(false)
                                  setZone_20(false)
                                                setZone_21(false)


            }else if (id === "zone_10"){
              setZone_1(false)
              setZone_2(false)
              setZone_3(false)
              setZone_4(false)
              setZone_5(false)
              setZone_6(false)
              setZone_7(false)
              setZone_8(false)
              setZone_9(false)
              setZone_10(true)
              setZone_11(false)
              setZone_12(false)
              setZone_13(false)
              setZone_14(false)
                              setZone_15(false)
                                setZone_16(false)
                                setZone_17(false)
                                  setZone_18(false)
                                  setZone_19(false)
                                  setZone_20(false)
                                                setZone_21(false)


            }else if (id === "zone_11"){
              setZone_1(false)
              setZone_2(false)
              setZone_3(false)
              setZone_4(false)
              setZone_5(false)
              setZone_6(false)
              setZone_7(false)
              setZone_8(false)
              setZone_9(false)
              setZone_10(false)
              setZone_11(true)
              setZone_12(false)
              setZone_13(false)
              setZone_14(false)
                              setZone_15(false)
                                setZone_16(false)
                                setZone_17(false)
                                  setZone_18(false)
                                  setZone_19(false)
                                  setZone_20(false)
                                                setZone_21(false)


              

            }else if (id === "zone_12"){
              setZone_1(false)
              setZone_2(false)
              setZone_3(false)
              setZone_4(false)
              setZone_5(false)
              setZone_6(false)
              setZone_7(false)
              setZone_8(false)
              setZone_9(false)
              setZone_10(false)
              setZone_11(false)
              setZone_12(true)
              setZone_13(false)
              setZone_14(false)
              setZone_15(false)
              setZone_16(false)
              setZone_17(false)
              setZone_18(false)
              setZone_19(false)
              setZone_20(false)
                            setZone_21(false)

            }else if (id === "zone_13"){
        
              setZone_1(false)
              setZone_2(false)
              setZone_3(false)
              setZone_4(false)
              setZone_5(false)
              setZone_6(false)
              setZone_7(false)
              setZone_8(false)
              setZone_9(false)
              setZone_10(false)
              setZone_11(false)
              setZone_12(false)
              setZone_13(true)
              setZone_14(false)
              setZone_15(false)
              setZone_16(false)
              setZone_17(false)
              setZone_18(false)
              setZone_19(false)
              setZone_20(false)
                            setZone_21(false)

            }else if (id === "zone_14"){
              
              setZone_1(false)
              setZone_2(false)
              setZone_3(false)
              setZone_4(false)
              setZone_5(false)
              setZone_6(false)
              setZone_7(false)
              setZone_8(false)
              setZone_9(false)
              setZone_10(false)
              setZone_11(false)
              setZone_12(false)
              setZone_13(false)
              setZone_14(true)
              setZone_15(false)
              setZone_16(false)
              setZone_17(false)
              setZone_18(false)
              setZone_19(false)
              setZone_20(false)
                            setZone_21(false)

            }else if (id === "zone_15"){

              setZone_1(false)
              setZone_2(false)
              setZone_3(false)
              setZone_4(false)
              setZone_5(false)
              setZone_6(false)
              setZone_7(false)
              setZone_8(false)
              setZone_9(false)
              setZone_10(false)
              setZone_11(false)
              setZone_12(false)
              setZone_13(false)
              setZone_14(false)
              setZone_15(true)
              setZone_16(false)
              setZone_17(false)
              setZone_18(false)
              setZone_19(false)
              setZone_20(false)
                            setZone_21(false)


            } else if (id === "zone_16"){

              setZone_1(false)
              setZone_2(false)
              setZone_3(false)
              setZone_4(false)
              setZone_5(false)
              setZone_6(false)
              setZone_7(false)
              setZone_8(false)
              setZone_9(false)
              setZone_10(false)
              setZone_11(false)
              setZone_12(false)
              setZone_13(false)
              setZone_14(false)
              setZone_15(false)
              setZone_16(true)
              setZone_17(false)
              setZone_18(false)
              setZone_19(false)
              setZone_20(false)
                            setZone_21(false)


            } else if (id === "zone_17"){

              setZone_1(false)
              setZone_2(false)
              setZone_3(false)
              setZone_4(false)
              setZone_5(false)
              setZone_6(false)
              setZone_7(false)
              setZone_8(false)
              setZone_9(false)
              setZone_10(false)
              setZone_11(false)
              setZone_12(false)
              setZone_13(false)
              setZone_14(false)
              setZone_15(false)
              setZone_16(false)
              setZone_17(true)
              setZone_18(false)
              setZone_19(false)
              setZone_20(false)
                            setZone_21(false)


            } else if (id === "zone_18"){

              setZone_1(false)
              setZone_2(false)
              setZone_3(false)
              setZone_4(false)
              setZone_5(false)
              setZone_6(false)
              setZone_7(false)
              setZone_8(false)
              setZone_9(false)
              setZone_10(false)
              setZone_11(false)
              setZone_12(false)
              setZone_13(false)
              setZone_14(false)
              setZone_15(false)
              setZone_16(false)
              setZone_17(false)
              setZone_18(true)
              setZone_19(false)
              setZone_20(false)
                            setZone_21(false)


            } else if (id === "zone_19"){

              setZone_1(false)
              setZone_2(false)
              setZone_3(false)
              setZone_4(false)
              setZone_5(false)
              setZone_6(false)
              setZone_7(false)
              setZone_8(false)
              setZone_9(false)
              setZone_10(false)
              setZone_11(false)
              setZone_12(false)
              setZone_13(false)
              setZone_14(false)
              setZone_15(false)
              setZone_16(false)
              setZone_17(false)
              setZone_18(false)
              setZone_19(true)
              setZone_20(false)
                            setZone_21(false)


            } else if (id === "zone_20"){

              setZone_1(false)
              setZone_2(false)
              setZone_3(false)
              setZone_4(false)
              setZone_5(false)
              setZone_6(false)
              setZone_7(false)
              setZone_8(false)
              setZone_9(false)
              setZone_10(false)
              setZone_11(false)
              setZone_12(false)
              setZone_13(false)
              setZone_14(false)
              setZone_15(false)
              setZone_16(false)
              setZone_17(false)
              setZone_18(false)
              setZone_19(false)
              setZone_20(true)
              setZone_21(false)


            } else if (id === "zone_21"){

              setZone_1(false)
              setZone_2(false)
              setZone_3(false)
              setZone_4(false)
              setZone_5(false)
              setZone_6(false)
              setZone_7(false)
              setZone_8(false)
              setZone_9(false)
              setZone_10(false)
              setZone_11(false)
              setZone_12(false)
              setZone_13(false)
              setZone_14(false)
              setZone_15(false)
              setZone_16(false)
              setZone_17(false)
              setZone_18(false)
              setZone_19(false)
              setZone_20(false)
                           


              setZone_21(true)


            }
          
        }
      


  const lightMap = (
    <div className="light_map_container">
                    
                
    {main?    
     <>
         <div className={map1}> 
             <img className="floor_1_img" src={floor1}/>

             <button className="btn_location_1" onTouchEnd={()=>(lightMenu("openMap1"),lightZone("zone_1"))}>
                 {light_1_fb_BAR || light_2_fb_BAR || light_3_fb_BAR ? 
                 <img className="light_icon_z1" id="lightZoneActive" src={lightOn} />  
                 :
                 <img className="light_icon_z1" src={lightOff} />  
                 }
             </button>

             <button className="btn_location_2" onTouchEnd={()=>(lightMenu("openMap1"),lightZone("zone_2"))}>
                {light_1_fb_BILLIARD_ROOM || light_2_fb_BILLIARD_ROOM || light_3_fb_BILLIARD_ROOM || light_4_fb_BILLIARD_ROOM || light_5_fb_BILLIARD_ROOM || light_6_fb_BILLIARD_ROOM || light_7_fb_BILLIARD_ROOM || light_8_fb_BILLIARD_ROOM || light_9_fb_BILLIARD_ROOM?  
                 <img className="light_icon_z2" id="lightZoneActive" src={lightOn} />  
                 :
                 <img className="light_icon_z2" src={lightOff} />  
                 }

             </button>

             <button className="btn_location_3" onTouchEnd={()=>(lightMenu("openMap1"),lightZone("zone_3"))}>  
                 {light_1_fb_BREAKFAST || light_2_fb_BREAKFAST || light_3_fb_BREAKFAST  || light_4_fb_BREAKFAST || light_5_fb_BREAKFAST || light_6_fb_BREAKFAST || light_7_fb_BREAKFAST  || light_8_fb_BREAKFAST  ? 
                 <img className="light_icon_z3" id="lightZoneActive" src={lightOn} />  
                 :
                 <img className="light_icon_z3" src={lightOff} />  
                 } 
              </button>

             <button className="btn_location_4" onTouchEnd={()=>(lightMenu("openMap1"),lightZone("zone_4"))}>  
                 {light_1_fb_BUTLER_PANTRY||light_2_fb_BUTLER_PANTRY||light_3_fb_BUTLER_PANTRY||light_4_fb_BUTLER_PANTRY||light_5_fb_BUTLER_PANTRY||light_6_fb_BUTLER_PANTRY||light_7_fb_BUTLER_PANTRY ? 
                 <img className="light_icon_z4" id="lightZoneActive" src={lightOn} />  
                 :
                 <img className="light_icon_z4" src={lightOff} />  
                 } 
             </button>


             <button className="btn_location_5" onTouchEnd={()=>(lightMenu("openMap1"),lightZone("zone_5"))}>  
                 {light_1_fb_DINING_ROOM || light_2_fb_DINING_ROOM || light_3_fb_DINING_ROOM   || light_4_fb_DINING_ROOM  ? 
                 <img className="light_icon_z5" id="lightZoneActive" src={lightOn} />  
                 :
                 <img className="light_icon_z5" src={lightOff} />  
                 } 
             </button>

             <button className="btn_location_6" onTouchEnd={()=>(lightMenu("openMap1"),lightZone("zone_6"))}>
               {light_1_fb_ELEVATOR_HALL|| light_2_fb_ELEVATOR_HALL|| light_3_fb_ELEVATOR_HALL || light_4_fb_ELEVATOR_HALL  ? 
                 <img className="light_icon_z6" id="lightZoneActive" src={lightOn} />  
                 :
                 <img className="light_icon_z6" src={lightOff} />  
                 } 
             </button>


             <button className="btn_location_7" onTouchEnd={()=>(lightMenu("openMap1"),  lightZone("zone_7"))}>    
                 {light_1_fb_FAMILY_ROOM || light_2_fb_FAMILY_ROOM  || light_3_fb_FAMILY_ROOM || light_4_fb_FAMILY_ROOM || light_5_fb_FAMILY_ROOM || light_6_fb_FAMILY_ROOM  || light_7_fb_FAMILY_ROOM? 
                 <img className="light_icon_z7" id="lightZoneActive" src={lightOn} />  
                 :
                 <img className="light_icon_z7" src={lightOff} />  
                 } 
             </button>

             <button className="btn_location_8" onTouchEnd={()=>(lightMenu("openMap1"),  lightZone("zone_8"))}>   
                 {light_1_fb_FOYER|| light_2_fb_FOYER || light_3_fb_FOYER || light_4_fb_FOYER|| light_5_fb_FOYER || light_6_fb_FOYER ? 
                 <img className="light_icon_z8" id="lightZoneActive" src={lightOn} />  
                 :
                 <img className="light_icon_z8" src={lightOff} />  
                 } 
             </button>

             <button className="btn_location_9" onTouchEnd={()=>(lightMenu("openMap1"),  lightZone("zone_9"))}> 
                 {light_1_fb_KITCHEN|| light_3_fb_KITCHEN || light_4_fb_KITCHEN || light_5_fb_KITCHEN || light_6_fb_KITCHEN ? 
                 <img className="light_icon_z9" id="lightZoneActive" src={lightOn} />  
                 :
                 <img className="light_icon_z9" src={lightOff} />  
                 } 
             </button>


             <button className="btn_location_10" onTouchEnd={()=>(lightMenu("openMap1"), lightZone("zone_10"))}> 
                 {light_1_fb_LIVING_ROOM|| light_2_fb_LIVING_ROOM || light_3_fb_LIVING_ROOM || light_4_fb_LIVING_ROOM? 
                 <img className="light_icon_z10" id="lightZoneActive" src={lightOn} />  
                 :
                 <img className="light_icon_z10" src={lightOff} />  
                 }  
             </button>


             <button className="btn_location_11" onTouchEnd={()=>(lightMenu("openMap1"), lightZone("zone_11"))}> 
                 {light_1_fb_OFFICE_POWDER  ? 
                 <img className="light_icon_z11" id="lightZoneActive" src={lightOn} />  
                 :
                 <img className="light_icon_z11" src={lightOff} />  
                 } 
             </button>

             <button className="btn_location_12" onTouchEnd={()=>(lightMenu("openMap1"), lightZone("zone_12"))}> 
                 {light_1_fb_STEVE_S_OFFICE||light_2_fb_STEVE_S_OFFICE||light_3_fb_STEVE_S_OFFICE? 
                 <img className="light_icon_z12" id="lightZoneActive" src={lightOn} />  
                 :
                 <img className="light_icon_z12" src={lightOff} />  
                 } 
             </button>


             <button className="btn_location_15" onTouchEnd={()=>(lightMenu("openMap1"),  lightZone("zone_15"))}>   
               {light_1_fb_GARAGE? 
                 <img className="light_icon_z15" id="lightZoneActive" src={lightOn} />  
                 :
                 <img className="light_icon_z15" src={lightOff} />  
                 }   
             </button>


             <button className="btn_location_16" onTouchEnd={()=>(lightMenu("openMap1"),  lightZone("zone_16"))}>   
               {light_1_fb_LANDSCAPE? 
                 <img className="light_icon_z16" id="lightZoneActive" src={lightOn} />  
                 :
                 <img className="light_icon_z16" src={lightOff} />  
                 }   
             </button>

             <button className="btn_location_17" onTouchEnd={()=>(lightMenu("openMap1"),  lightZone("zone_17"))}>   
               {light_9_fb_LANDSCAPE? 
                 <img className="light_icon_z17" id="lightZoneActive" src={lightOn} />  
                 :
                 <img className="light_icon_z17" src={lightOff} />  
                 }   
             </button>

             <button className="btn_location_18" onTouchEnd={()=>(lightMenu("openMap1"),  lightZone("zone_18"))}>   
               {light_7_fb_LANDSCAPE? 
                 <img className="light_icon_z18" id="lightZoneActive" src={lightOn} />  
                 :
                 <img className="light_icon_z18" src={lightOff} />  
                 }   
             </button>

             <button className="btn_location_19" onTouchEnd={()=>(lightMenu("openMap1"),  lightZone("zone_19"))}>   
               {light_8_fb_LANDSCAPE? 
                 <img className="light_icon_z19" id="lightZoneActive" src={lightOn} />  
                 :
                 <img className="light_icon_z19" src={lightOff} />  
                 }   
             </button>

             <button className="btn_location_20" onTouchEnd={()=>(lightMenu("openMap1"),  lightZone("zone_20"))}>   
               {light_2_fb_LANDSCAPE? 
                 <img className="light_icon_z20" id="lightZoneActive" src={lightOn} />  
                 :
                 <img className="light_icon_z20" src={lightOff} />  
                 }   
             </button>

           
         </div> 

         <div className={lightMenuDisplay}>

             <div className="close_menu_btn">
                 <img className="btn_image" onTouchEnd={()=>lightMenu("closeMap1")} src={close}/>
             </div>
             



             {zone_1? lightZone_BAR : <></>}
             {zone_2? lightZone_Billiard: <></>}
             {zone_3? lightZone_BREAKFAST : <></>}
             {zone_4? lightZone_BUTLER_PANTRY : <></>}
             {zone_5? lightZone_DINING_ROOM : <></>}
             {zone_6? lightZone_ELEVATOR_HALL : <></>}
             {zone_7? lightZone_FAMILY_ROOM : <></>}
             {zone_8? lightZone_FOYER : <></>}
             {zone_9? lightZone_KITCHEN : <></>}
             {zone_10? lightZone_LIVING_ROOM : <></>}
             {zone_11? lightZone_OFFICE_POWDER : <></>}
             {zone_12? lightZone_STEVE_S_OFFICE : <></>}
             {zone_15? lightZone_GARAGE : <></>}

             {zone_16? singleZone_tennis : <></>}
             {zone_17? singleZone_poolArea : <></>}
             {zone_18? singleZone_backYard : <></>}
             {zone_19? singleZone_frontYard : <></>}
             {zone_20? singleZone_breezyway: <></>}

           








         </div>

         
         
     </>
     : <></>}

    {upStairs?     
     <>
             <div className={map2}> 
                 <img className="floor_2_img" src={floor2}/>

                 <button className="btn_location_13" onTouchEnd={()=>(lightMenu("openMap2"),  lightZone("zone_13"))}>  
                   {light_1_fb_BAR || light_2_fb_HALL || light_3_fb_HALL || light_4_fb_HALL || light_5_fb_HALL? 
                   <img className="light_icon_z13" id="lightZoneActive" src={lightOn} />  
                   :
                   <img className="light_icon_z13" src={lightOff} />  
                   }
                 </button>

                 <button className="btn_location_14" onTouchEnd={()=>(lightMenu("openMap2"),  lightZone("zone_14"))}>  
                   {light_1_fb_MEDIA_ROOM || light_2_fb_MEDIA_ROOM || light_3_fb_MEDIA_ROOM || light_4_fb_MEDIA_ROOM || light_5_fb_MEDIA_ROOM? 
                   <img className="light_icon_z14" id="lightZoneActive" src={lightOn} />  
                   :
                   <img className="light_icon_z14" src={lightOff} />  
                   }
                 </button>

                
               
             </div> 

             <div className={lightMenuDisplay2}>

                 <div className="close_menu_btn">
                     <img className="btn_image" onTouchEnd={()=>lightMenu("closeMap2")} src={close}/>
                 </div>
                 



                 {zone_13? lightZone_HALL : <></>}
                 {zone_14? lightZone_MEDIA_ROOM: <></>}
                 
            
               
             </div>

            
             
     </>
     :<></>
    }

    {outDoors?
    <>

     <div className="out_door_lighting">
         <div className="out_door_1"> {lightZone_REAR}       </div>
         <div className="out_door_2"> {lightZone_LANDSCAPE}  </div>
         <div className="out_door_3"> {lightZone_FRONT}      </div>
     </div>

    </>:<></>}
     

    </div>

  )



  const [panelOverlay, setPanelOverlay] = useState(false)

  const lightPanel = (

    <>
    
    <div className={main? "light_map_panel":"display_none"}>
      <div className={panelOverlay? "display_none":"light_panel"}>
            <button className="btn_square" onClick={()=>(lightZone("zone_1"), setPanelOverlay(true))}>
                {light_1_fb_BAR || light_2_fb_BAR || light_3_fb_BAR ? 
                <>
                  <p> Breakfast </p>
                  <img className="light_icon_z1" id="lightZoneActive" src={lightOn} />  
                </>
              :
                <>
                <p> Breakfast </p>
                <img className="light_icon_z1" src={lightOff} />  
                </>
                }
            </button>


            <button className="btn_square" onClick={()=>(lightZone("zone_2"), setPanelOverlay(true))}>
                {light_1_fb_BILLIARD_ROOM || light_2_fb_BILLIARD_ROOM || light_3_fb_BILLIARD_ROOM || light_4_fb_BILLIARD_ROOM || light_5_fb_BILLIARD_ROOM || light_6_fb_BILLIARD_ROOM || light_7_fb_BILLIARD_ROOM || light_8_fb_BILLIARD_ROOM || light_9_fb_BILLIARD_ROOM?  
                
                <>
                
                <p>Billiards</p>
                <img className="light_icon_z2" id="lightZoneActive" src={lightOn} />  

                </>
                  :

                  <>
                
                  <p>Billiards</p>
                  <img className="light_icon_z2" src={lightOff} />  
                  </>
                  }

              </button>

              <button className="btn_square" onClick={()=>( setPanelOverlay(true),lightZone("zone_3"))}>  
                  {light_1_fb_BREAKFAST || light_2_fb_BREAKFAST || light_3_fb_BREAKFAST  || light_4_fb_BREAKFAST || light_5_fb_BREAKFAST || light_6_fb_BREAKFAST || light_7_fb_BREAKFAST  || light_8_fb_BREAKFAST  ? 
                  
                  <>
                
                  <p>Breaskfast</p>
                  <img className="light_icon_z3" id="lightZoneActive" src={lightOn} />  
                  </>
                  :
                  <>
                
                <p>Breaskfast</p>
                  <img className="light_icon_z3" src={lightOff} />  
                  </>
                  } 
              </button>

              <button className="btn_square" onClick={()=>( setPanelOverlay(true),lightZone("zone_4"))}>  
                  {light_1_fb_BUTLER_PANTRY||light_2_fb_BUTLER_PANTRY||light_3_fb_BUTLER_PANTRY||light_4_fb_BUTLER_PANTRY||light_5_fb_BUTLER_PANTRY||light_6_fb_BUTLER_PANTRY||light_7_fb_BUTLER_PANTRY ? 
                    <>
                    <p>Butler Pantry</p>
                    <img className="light_icon_z4" id="lightZoneActive" src={lightOn} />  
                    </>
                  :

                  <>
                  <p>Butler Pantry</p>
                  <img className="light_icon_z4" src={lightOff} />  
                  </>
            
                  } 
              </button>

              <button className="btn_square" onClick={()=>( setPanelOverlay(true),lightZone("zone_5"))}>  
                  {light_1_fb_DINING_ROOM || light_2_fb_DINING_ROOM || light_3_fb_DINING_ROOM   || light_4_fb_DINING_ROOM  ? 
                    <>
                      <p>Dining Room</p>
                    <img className="light_icon_z5" id="lightZoneActive" src={lightOn} />  
                    </>
                  :
                  <>
                    <p>Dining Room</p>
                    <img className="light_icon_z5" src={lightOff} />  
                    </>
              
                  } 
              </button>

              <button className="btn_square" onClick={()=>( setPanelOverlay(true),lightZone("zone_6"))}>
                {light_1_fb_ELEVATOR_HALL|| light_2_fb_ELEVATOR_HALL|| light_3_fb_ELEVATOR_HALL || light_4_fb_ELEVATOR_HALL  ? 
                <>
                  <p>Elevator Hall</p>
                  <img className="light_icon_z6" id="lightZoneActive" src={lightOn} />  
                </> 
                  :

                <>
                    <p>Elevator Hall</p>
                  <img className="light_icon_z6" src={lightOff} />   
                </> 
            
                  } 
              </button>

              <button className="btn_square" onClick={()=>( setPanelOverlay(true),  lightZone("zone_7"))}>    
                  {light_1_fb_FAMILY_ROOM || light_2_fb_FAMILY_ROOM  || light_3_fb_FAMILY_ROOM || light_4_fb_FAMILY_ROOM || light_5_fb_FAMILY_ROOM || light_6_fb_FAMILY_ROOM  || light_7_fb_FAMILY_ROOM? 
                  <>
                  <p>Family Room </p>
                  <img className="light_icon_z7" id="lightZoneActive" src={lightOn} />  
                </> 
                  :

                  <>
                    <p>Family Room </p>
                    <img className="light_icon_z7" src={lightOff} />  
                  </> 
                  } 
              </button>

              <button className="btn_square" onClick={()=>( setPanelOverlay(true),  lightZone("zone_8"))}>   
                  {light_1_fb_FOYER|| light_2_fb_FOYER || light_3_fb_FOYER || light_4_fb_FOYER|| light_5_fb_FOYER || light_6_fb_FOYER ? 
                    <>
                    <p>Foyer</p>
                    <img className="light_icon_z8" id="lightZoneActive" src={lightOn} />  
                  </> 
                  :

                  <>
                  <p>Foyer</p>
                  <img className="light_icon_z8" src={lightOff} />  
                </> 
                  } 
              </button>

              <button className="btn_square" onClick={()=>( setPanelOverlay(true),  lightZone("zone_9"))}> 
                  {light_1_fb_KITCHEN|| light_3_fb_KITCHEN || light_4_fb_KITCHEN || light_5_fb_KITCHEN || light_6_fb_KITCHEN ? 
                  <>
                  <p>Kitchen </p>
                  <img className="light_icon_z9" id="lightZoneActive" src={lightOn} />  
                </> 
                  :

                  <>
                  <p>Kitchen</p>
                  <img className="light_icon_z9" src={lightOff} />  
                </> 
                  } 
              </button>

              <button className="btn_square" onClick={()=>( setPanelOverlay(true), lightZone("zone_10"))}> 
                  {light_1_fb_LIVING_ROOM|| light_2_fb_LIVING_ROOM || light_3_fb_LIVING_ROOM || light_4_fb_LIVING_ROOM? 
                <>
                  <p>Living Room </p>
                  <img className="light_icon_z10" id="lightZoneActive" src={lightOn} />  
                </>                  
                :
                <>
                <p>Living Room </p>
                <img className="light_icon_z10" src={lightOff} />  
                </> 
                
                  }  
              </button>

              <button className="btn_square" onClick={()=>( setPanelOverlay(true), lightZone("zone_11"))}> 
                  {light_1_fb_OFFICE_POWDER  ? 
                  <>
                  <p>Office Powder </p>
                  <img className="light_icon_z11" id="lightZoneActive" src={lightOn} />  
                  </> 
                  :
                  <>
                  <p>Office Powder </p>
                  <img className="light_icon_z11" src={lightOff} />  
                </> 
                
                  } 
              </button>

              <button className="btn_square" onClick={()=>( setPanelOverlay(true), lightZone("zone_12"))}> 
                  {light_1_fb_STEVE_S_OFFICE||light_2_fb_STEVE_S_OFFICE||light_3_fb_STEVE_S_OFFICE? 
                    <>
                    <p>Steve's Office </p>
                    <img className="light_icon_z12" id="lightZoneActive" src={lightOn} />  
                  </> 
                  :

                  <>
                  <p>Steve's Office </p>
                  <img className="light_icon_z12" src={lightOff} />  
                  </> 
                  } 
              </button>

              <button className="btn_square" onClick={()=>( setPanelOverlay(true),  lightZone("zone_15"))}>   
                {light_1_fb_GARAGE? 
                  <>
                  <p>Garage </p>
                  <img className="light_icon_z15" id="lightZoneActive" src={lightOn} />  
                </> 
                  :
                  <>
                  <p>Garage </p>
                  <img className="light_icon_z15" src={lightOff} />  
                </> 
                  }   
              </button>


        

      </div>
    </div>

    <div className={upStairs? "light_map_panel":"display_none"}>
      <div className={panelOverlay? "display_none":"light_panel"}>


        
   



              <button className="btn_square" id="low_light_count" onClick={()=>(lightZone("zone_13"), setPanelOverlay(true))}>
              {light_1_fb_BAR || light_2_fb_HALL || light_3_fb_HALL || light_4_fb_HALL || light_5_fb_HALL? 
                
                <>
                
                <p>Hall</p>
                <img className="light_icon_z2" id="lightZoneActive" src={lightOn} />  

                </>
                  :

                  <>
                
                  <p>Hall</p>
                  <img className="light_icon_z2" src={lightOff} />  
                  </>
                  }

              </button>

              <button className="btn_square" id="low_light_count"  onClick={()=>( setPanelOverlay(true),lightZone("zone_14"))}>  
               {light_1_fb_MEDIA_ROOM || light_2_fb_MEDIA_ROOM || light_3_fb_MEDIA_ROOM || light_4_fb_MEDIA_ROOM || light_5_fb_MEDIA_ROOM? 
                  
                  <>
                
                  <p>Media Room</p>
                  <img className="light_icon_z2" id="lightZoneActive" src={lightOn} />  
                  </>
                  :
                  <>
                
                <p>Media Room</p>
                  <img className="light_icon_z2" src={lightOff} />  
                  </>
                  } 
              </button>

    

      </div>
    </div>


    <div className={outDoors? "light_map_panel":"display_none"}>
    <div className={panelOverlay? "display_none":"light_panel"}>


        



              <button className="btn_square" id="low_light_count_single"  onClick={()=>( setPanelOverlay(true),lightZone("zone_21"))}>  
                {light_1_fb_MEDIA_ROOM || light_2_fb_MEDIA_ROOM || light_3_fb_MEDIA_ROOM || light_4_fb_MEDIA_ROOM || light_5_fb_MEDIA_ROOM? 
                  
                  <>
                
                  <p>Media Room</p>
                  <img className="light_icon_z2" id="lightZoneActive" src={lightOn} />  
                  </>
                  :
                  <>
                
                <p>Media Room</p>
                  <img className="light_icon_z2" src={lightOff} />  
                  </>
                  } 
              </button>



      </div>
    </div>
    

    <div className={panelOverlay? "light_panel_overlay" : "display_none"}>

<button className = "btn_square" id="light_panel_overlay_close" onClick={()=> setPanelOverlay(false)}> <img className="btn_image" src={close}/> <p>Close</p> </button>
 


 <div className="panel_title"> 

  {zone_1? <p>Bar</p> : <></>}
  {zone_2? <p>Billiard</p>: <></>}
  {zone_3? <p>Breakfast</p> : <></>}
  {zone_4? <p>Butler Pantry </p>: <></>}
  {zone_5? <p>Dining Room</p> : <></>}
  {zone_6? <p>Elevator Room</p> : <></>}
  {zone_7? <p>Family Room</p> : <></>}
  {zone_8? <p>Foyer</p> : <></>}
  {zone_9? <p>Kitchen</p> : <></>}
  {zone_10? <p>Living Room</p> : <></>}
  {zone_11? <p>Steve's Powder</p> : <></>}
  {zone_12? <p>Steve's Office</p> : <></>}
  {zone_13? <p>Hallway</p> : <></>}
  {zone_14? <p>Media Room</p> : <></>}
  {zone_15? <p>Garage</p> : <></>}

  {zone_21? <p> Landscape</p> : <> </>}


 </div>
 
<div className="panel_light_display">
  {zone_1? lightZone_BAR : <></>}
  {zone_2? lightZone_Billiard: <></>}
  {zone_3? lightZone_BREAKFAST : <></>}
  {zone_4? lightZone_BUTLER_PANTRY : <></>}
  {zone_5? lightZone_DINING_ROOM : <></>}
  {zone_6? lightZone_ELEVATOR_HALL : <></>}
  {zone_7? lightZone_FAMILY_ROOM : <></>}
  {zone_8? lightZone_FOYER : <></>}
  {zone_9? lightZone_KITCHEN : <></>}
  {zone_10? lightZone_LIVING_ROOM : <></>}
  {zone_11? lightZone_OFFICE_POWDER : <></>}
  {zone_12? lightZone_STEVE_S_OFFICE : <></>}
  {zone_13? lightZone_HALL : <></>}
  {zone_14? lightZone_MEDIA_ROOM : <></>}
  {zone_15? lightZone_GARAGE : <></>}
  {zone_21? lightZone_LANDSCAPE:<></>}

</div>


    </div>
    </>
  )


    return(

    <div className="light_dashboard">

        
        

            <div className="room_back_corner">
              <Link to={"/"}> 
                    <button className="back_button">
                        <img src={menu_button}/>
                    </button>
                </Link>

            </div>
          


        {screenSize.height > 1200?   
        
        <div className="nav_container" style={{gridColumn:"1/13", width:"100%"}}>
            <div className="nav">
                <button onTouchEnd={() => (currentFloor("up"))}    className={upStairs?   "btn_selected" : "btn_not_selected"}>      <p> 2nd Floor</p>     </button>
                <button onTouchEnd={() => (currentFloor("main"))}  className={main? "btn_selected" : "btn_not_selected"}>            <p> 1st Floor </p>         </button>
                <button onTouchEnd={() => (currentFloor("out"))}  className={outDoors? "btn_selected" : "btn_not_selected"}>         <p> Out Door </p>         </button>
            </div>
        </div>  
        :   
        <div className="nav_container">
            <div className="nav">
                <button onTouchEnd={() => (currentFloor("up"))}    className={upStairs?   "btn_selected" : "btn_not_selected"}>      <p> 2nd Floor</p>     </button>
                <button onTouchEnd={() => (currentFloor("main"))}  className={main? "btn_selected" : "btn_not_selected"}>            <p> 1st Floor </p>         </button>
                <button onTouchEnd={() => (currentFloor("out"))}  className={outDoors? "btn_selected" : "btn_not_selected"}>         <p> Out Door </p>         </button>
            </div>
        </div> } 
      


      
        
    


            <h1 className="title_info"> Light Dashboard</h1>
                
                

                
                {screenSize.height > 1200? 
                <div className="landscape_warning" style={{zIndex:"10", display:"flex", gridColumn:"2/12", gridRow:"3/6", backgroundColor:"red", borderRadius:"10px", boxSizing:"border-box",padding:"2rem"}}>
                  <h1> Please rotate your device back to landscape mode. </h1>
                  <img style={{rotate:"90deg"}} src={portraitMode}  />
                </div> 
                
                : 

                (screenSize.width > 875 ? lightMap : screenSize.width > screenSize.height?  
                <div className="landscape_warning" style={{zIndex:"10", display:"flex", gridColumn:"2/12", gridRow:"3/6", backgroundColor:"red", borderRadius:"10px", boxSizing:"border-box",padding:"2rem"}}>
                  <h1> Please rotate your device back to portrait mode. </h1>
                  <img style={{rotate:"90deg"}} src={portraitMode}  />
                </div> : lightPanel ) }

                
        
               

        </div>

    )

}


export default LightDashboard