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
  



    



    // BAR
    const [light_1_fb_BAR, setLight_1_fb_BAR] = useState(false);
    const light_1_join_BAR = "250";
    const light_1_title_BAR = "Ceiling";
    
    const [light_2_fb_BAR, setLight_2_fb_BAR] = useState(false);
    const light_2_join_BAR = "251";
    const light_2_title_BAR = "Lights";
    
    const [light_3_fb_BAR, setLight_3_fb_BAR] = useState(false);
    const light_3_join_BAR = "252";
    const light_3_title_BAR = "Accent";
    
    // BILLIARD ROOM
    const [light_1_fb_BILLIARD_ROOM, setLight_1_fb_BILLIARD_ROOM] = useState(false);
    const light_1_join_BILLIARD_ROOM = "254";
    const light_1_title_BILLIARD_ROOM = "Pendant";
    
    const [light_2_fb_BILLIARD_ROOM, setLight_2_fb_BILLIARD_ROOM] = useState(false);
    const light_2_join_BILLIARD_ROOM = "255";
    const light_2_title_BILLIARD_ROOM = "Path";
    
    const [light_3_fb_BILLIARD_ROOM, setLight_3_fb_BILLIARD_ROOM] = useState(false);
    const light_3_join_BILLIARD_ROOM = "256";
    const light_3_title_BILLIARD_ROOM = "Sconces";
    
    const [light_4_fb_BILLIARD_ROOM, setLight_4_fb_BILLIARD_ROOM] = useState(false);
    const light_4_join_BILLIARD_ROOM = "257";
    const light_4_title_BILLIARD_ROOM = "Ceiling";
    
    // BREAKFAST
    const [light_1_fb_BREAKFAST, setLight_1_fb_BREAKFAST] = useState(false);
    const light_1_join_BREAKFAST = "259";
    const light_1_title_BREAKFAST = "Window";
    
    const [light_2_fb_BREAKFAST, setLight_2_fb_BREAKFAST] = useState(false);
    const light_2_join_BREAKFAST = "260";
    const light_2_title_BREAKFAST = "Ceiling";
    
    const [light_3_fb_BREAKFAST, setLight_3_fb_BREAKFAST] = useState(false);
    const light_3_join_BREAKFAST = "261";
    const light_3_title_BREAKFAST = "Accent";
    
    const [light_4_fb_BREAKFAST, setLight_4_fb_BREAKFAST] = useState(false);
    const light_4_join_BREAKFAST = "262";
    const light_4_title_BREAKFAST = "Pendant";
    
    // BUTLER PANTRY
    const [light_1_fb_BUTLER_PANTRY, setLight_1_fb_BUTLER_PANTRY] = useState(false);
    const light_1_join_BUTLER_PANTRY = "264";
    const light_1_title_BUTLER_PANTRY = "Butler hall";
    
    // DINING ROOM
    const [light_1_fb_DINING_ROOM, setLight_1_fb_DINING_ROOM] = useState(false);
    const light_1_join_DINING_ROOM = "266";
    const light_1_title_DINING_ROOM = "Chand";
    
    const [light_2_fb_DINING_ROOM, setLight_2_fb_DINING_ROOM] = useState(false);
    const light_2_join_DINING_ROOM = "267";
    const light_2_title_DINING_ROOM = "Accent";
    
    const [light_3_fb_DINING_ROOM, setLight_3_fb_DINING_ROOM] = useState(false);
    const light_3_join_DINING_ROOM = "268";
    const light_3_title_DINING_ROOM = "Window";
    
    const [light_4_fb_DINING_ROOM, setLight_4_fb_DINING_ROOM] = useState(false);
    const light_4_join_DINING_ROOM = "269";
    const light_4_title_DINING_ROOM = "Ceiling";
    
    // ELEVATOR HALL
    const [light_1_fb_ELEVATOR_HALL, setLight_1_fb_ELEVATOR_HALL] = useState(false);
    const light_1_join_ELEVATOR_HALL = "271";
    const light_1_title_ELEVATOR_HALL = "Night lights";
    
    const [light_2_fb_ELEVATOR_HALL, setLight_2_fb_ELEVATOR_HALL] = useState(false);
    const light_2_join_ELEVATOR_HALL = "272";
    const light_2_title_ELEVATOR_HALL = "Stair hall";
    
    const [light_3_fb_ELEVATOR_HALL, setLight_3_fb_ELEVATOR_HALL] = useState(false);
    const light_3_join_ELEVATOR_HALL = "273";
    const light_3_title_ELEVATOR_HALL = "Elevator hall";
    
    // FAMILY ROOM
    const [light_1_fb_FAMILY_ROOM, setLight_1_fb_FAMILY_ROOM] = useState(false);
    const light_1_join_FAMILY_ROOM = "275";
    const light_1_title_FAMILY_ROOM = "Sconces";
    
    const [light_2_fb_FAMILY_ROOM, setLight_2_fb_FAMILY_ROOM] = useState(false);
    const light_2_join_FAMILY_ROOM = "276";
    const light_2_title_FAMILY_ROOM = "Accent";
    
    const [light_3_fb_FAMILY_ROOM, setLight_3_fb_FAMILY_ROOM] = useState(false);
    const light_3_join_FAMILY_ROOM = "277";
    const light_3_title_FAMILY_ROOM = "Window";
    
    const [light_4_fb_FAMILY_ROOM, setLight_4_fb_FAMILY_ROOM] = useState(false);
    const light_4_join_FAMILY_ROOM = "278";
    const light_4_title_FAMILY_ROOM = "Ceiling";
    
    // FOYER
    const [light_1_fb_FOYER, setLight_1_fb_FOYER] = useState(false);
    const light_1_join_FOYER = "280";
    const light_1_title_FOYER = "Ceiling";
    
    const [light_2_fb_FOYER, setLight_2_fb_FOYER] = useState(false);
    const light_2_join_FOYER = "281";
    const light_2_title_FOYER = "Entry";
    
    const [light_3_fb_FOYER, setLight_3_fb_FOYER] = useState(false);
    const light_3_join_FOYER = "282";
    const light_3_title_FOYER = "Chand";
    
    // KITCHEN
    const [light_1_fb_KITCHEN, setLight_1_fb_KITCHEN] = useState(false);
    const light_1_join_KITCHEN = "284";
    const light_1_title_KITCHEN = "Under cab";
    
    const [light_2_fb_KITCHEN, setLight_2_fb_KITCHEN] = useState(false);
    const light_2_join_KITCHEN = "285";
    const light_2_title_KITCHEN = "Island";
    
    const [light_3_fb_KITCHEN, setLight_3_fb_KITCHEN] = useState(false);
    const light_3_join_KITCHEN = "286";
    const light_3_title_KITCHEN = "Ceiling";
    
    const [light_4_fb_KITCHEN, setLight_4_fb_KITCHEN] = useState(false);
    const light_4_join_KITCHEN = "287";
    const light_4_title_KITCHEN = "Kitchen hall";
    
    // LIVING ROOM
    const [light_1_fb_LIVING_ROOM, setLight_1_fb_LIVING_ROOM] = useState(false);
    const light_1_join_LIVING_ROOM = "289";
    const light_1_title_LIVING_ROOM = "Cove";
    
    const [light_2_fb_LIVING_ROOM, setLight_2_fb_LIVING_ROOM] = useState(false);
    const light_2_join_LIVING_ROOM = "290";
    const light_2_title_LIVING_ROOM = "Ceiling";
    
    const [light_3_fb_LIVING_ROOM, setLight_3_fb_LIVING_ROOM] = useState(false);
    const light_3_join_LIVING_ROOM = "291";
    const light_3_title_LIVING_ROOM = "Accent";
    
    const [light_4_fb_LIVING_ROOM, setLight_4_fb_LIVING_ROOM] = useState(false);
    const light_4_join_LIVING_ROOM = "292";
    const light_4_title_LIVING_ROOM = "Mantle";
    
    const [light_5_fb_LIVING_ROOM, setLight_5_fb_LIVING_ROOM] = useState(false);
    const light_5_join_LIVING_ROOM = "293";
    const light_5_title_LIVING_ROOM = "Window";
    
    const [light_6_fb_LIVING_ROOM, setLight_6_fb_LIVING_ROOM] = useState(false);
    const light_6_join_LIVING_ROOM = "294";
    const light_6_title_LIVING_ROOM = "Piano";
    
    // OFFICE POWDER
    const [light_1_fb_OFFICE_POWDER, setLight_1_fb_OFFICE_POWDER] = useState(false);
    const light_1_join_OFFICE_POWDER = "296";
    const light_1_title_OFFICE_POWDER = "Vanity";
    
    const [light_2_fb_OFFICE_POWDER, setLight_2_fb_OFFICE_POWDER] = useState(false);
    const light_2_join_OFFICE_POWDER = "297";
    const light_2_title_OFFICE_POWDER = "Ceiling";
    
    // STEVE'S OFFICE
    const [light_1_fb_STEVE_S_OFFICE, setLight_1_fb_STEVE_S_OFFICE] = useState(false);
    const light_1_join_STEVE_S_OFFICE = "299";
    const light_1_title_STEVE_S_OFFICE = "Window";
    
    const [light_2_fb_STEVE_S_OFFICE, setLight_2_fb_STEVE_S_OFFICE] = useState(false);
    const light_2_join_STEVE_S_OFFICE = "300";
    const light_2_title_STEVE_S_OFFICE = "Ceiling";
    
    // HALL
    const [light_1_fb_HALL, setLight_1_fb_HALL] = useState(false);
    const light_1_join_HALL = "302";
    const light_1_title_HALL = "Master night light";
    
    const [light_2_fb_HALL, setLight_2_fb_HALL] = useState(false);
    const light_2_join_HALL = "303";
    const light_2_title_HALL = "2nd fl hall night lights";
    
    const [light_3_fb_HALL, setLight_3_fb_HALL] = useState(false);
    const light_3_join_HALL = "304";
    const light_3_title_HALL = "N hall";
    
    const [light_4_fb_HALL, setLight_4_fb_HALL] = useState(false);
    const light_4_join_HALL = "305";
    const light_4_title_HALL = "Main stair hall";
    
    const [light_5_fb_HALL, setLight_5_fb_HALL] = useState(false);
    const light_5_join_HALL = "306";
    const light_5_title_HALL = "South hall";
    
    const [light_6_fb_HALL, setLight_6_fb_HALL] = useState(false);
    const light_6_join_HALL = "307";
    const light_6_title_HALL = "Master hall";
    
    // MEDIA ROOM
    const [light_1_fb_MEDIA_ROOM, setLight_1_fb_MEDIA_ROOM] = useState(false);
    const light_1_join_MEDIA_ROOM = "309";
    const light_1_title_MEDIA_ROOM = "Ceiling";
    
    const [light_2_fb_MEDIA_ROOM, setLight_2_fb_MEDIA_ROOM] = useState(false);
    const light_2_join_MEDIA_ROOM = "310";
    const light_2_title_MEDIA_ROOM = "Game table";
    
    const [light_3_fb_MEDIA_ROOM, setLight_3_fb_MEDIA_ROOM] = useState(false);
    const light_3_join_MEDIA_ROOM = "311";
    const light_3_title_MEDIA_ROOM = "Bar";
    
    const [light_4_fb_MEDIA_ROOM, setLight_4_fb_MEDIA_ROOM] = useState(false);
    const light_4_join_MEDIA_ROOM = "312";
    const light_4_title_MEDIA_ROOM = "Art";
    
    const [light_5_fb_MEDIA_ROOM, setLight_5_fb_MEDIA_ROOM] = useState(false);
    const light_5_join_MEDIA_ROOM = "313";
    const light_5_title_MEDIA_ROOM = "Cabinet";
    
    // SOUTH STAIRS
    const [light_1_fb_SOUTH_STAIRS, setLight_1_fb_SOUTH_STAIRS] = useState(false);
    const light_1_join_SOUTH_STAIRS = "315";
    const light_1_title_SOUTH_STAIRS = "South stairs";
    
    // FRONT
    const [light_1_fb_FRONT, setLight_1_fb_FRONT] = useState(false);
    const light_1_join_FRONT = "317";
    const light_1_title_FRONT = "Front columns";
    
    const [light_2_fb_FRONT, setLight_2_fb_FRONT] = useState(false);
    const light_2_join_FRONT = "318";
    const light_2_title_FRONT = "Front trees";
    
    const [light_3_fb_FRONT, setLight_3_fb_FRONT] = useState(false);
    const light_3_join_FRONT = "319";
    const light_3_title_FRONT = "Outside entry";
    
    const [light_4_fb_FRONT, setLight_4_fb_FRONT] = useState(false);
    const light_4_join_FRONT = "320";
    const light_4_title_FRONT = "Outside garage";
    
    const [light_5_fb_FRONT, setLight_5_fb_FRONT] = useState(false);
    const light_5_join_FRONT = "321";
    const light_5_title_FRONT = "Outside entry";
    
    // LANDSCAPE
    const [light_1_fb_LANDSCAPE, setLight_1_fb_LANDSCAPE] = useState(false);
    const light_1_join_LANDSCAPE = "323";
    const light_1_title_LANDSCAPE = "Front yard";
    
    const [light_2_fb_LANDSCAPE, setLight_2_fb_LANDSCAPE] = useState(false);
    const light_2_join_LANDSCAPE = "324";
    const light_2_title_LANDSCAPE = "Back yard";
    
    const [light_3_fb_LANDSCAPE, setLight_3_fb_LANDSCAPE] = useState(false);
    const light_3_join_LANDSCAPE = "325";
    const light_3_title_LANDSCAPE = "Tennis sconces";
    
    const [light_4_fb_LANDSCAPE, setLight_4_fb_LANDSCAPE] = useState(false);
    const light_4_join_LANDSCAPE = "326";
    const light_4_title_LANDSCAPE = "Breezeway";
    
    const [light_5_fb_LANDSCAPE, setLight_5_fb_LANDSCAPE] = useState(false);
    const light_5_join_LANDSCAPE = "327";
    const light_5_title_LANDSCAPE = "Step lights";
    
    const [light_6_fb_LANDSCAPE, setLight_6_fb_LANDSCAPE] = useState(false);
    const light_6_join_LANDSCAPE = "328";
    const light_6_title_LANDSCAPE = "Fountain";
    
    const [light_7_fb_LANDSCAPE, setLight_7_fb_LANDSCAPE] = useState(false);
    const light_7_join_LANDSCAPE = "329";
    const light_7_title_LANDSCAPE = "North exterior";
    
    const [light_8_fb_LANDSCAPE, setLight_8_fb_LANDSCAPE] = useState(false);
    const light_8_join_LANDSCAPE = "330";
    const light_8_title_LANDSCAPE = "Fountain lawn";
    
    const [light_9_fb_LANDSCAPE, setLight_9_fb_LANDSCAPE] = useState(false);
    const light_9_join_LANDSCAPE = "331";
    const light_9_title_LANDSCAPE = "Pool hill";
    
    // REAR
    const [light_1_fb_REAR, setLight_1_fb_REAR] = useState(false);
    const light_1_join_REAR = "333";
    const light_1_title_REAR = "Trellis";
    
    const [light_2_fb_REAR, setLight_2_fb_REAR] = useState(false);
    const light_2_join_REAR = "334";
    const light_2_title_REAR = "Dog run";
    
    const [light_3_fb_REAR, setLight_3_fb_REAR] = useState(false);
    const light_3_join_REAR = "335";
    const light_3_title_REAR = "Pool patio";
    
    const [light_4_fb_REAR, setLight_4_fb_REAR] = useState(false);
    const light_4_join_REAR = "336";
    const light_4_title_REAR = "Pool sconces";
    
    const [light_5_fb_REAR, setLight_5_fb_REAR] = useState(false);
    const light_5_join_REAR = "337";
    const light_5_title_REAR = "Brkfst patio in";
    
    const [light_6_fb_REAR, setLight_6_fb_REAR] = useState(false);
    const light_6_join_REAR = "338";
    const light_6_title_REAR = "Brkfst patio out";
    
    const [light_7_fb_REAR, setLight_7_fb_REAR] = useState(false);
    const light_7_join_REAR = "339";
    const light_7_title_REAR = "Kitchen patio";
    
    const [light_8_fb_REAR, setLight_8_fb_REAR] = useState(false);
    const light_8_join_REAR = "340";
    const light_8_title_REAR = "Outside family";
    
    const [light_9_fb_REAR, setLight_9_fb_REAR] = useState(false);
    const light_9_join_REAR = "341";
    const light_9_title_REAR = "Garage back";
    

    useEffect(() => {
        // BAR
        const sub_light_1_BAR = window.CrComLib.subscribeState("b", light_1_join_BAR, (value:boolean) => setLight_1_fb_BAR(value));
        const sub_light_2_BAR = window.CrComLib.subscribeState("b", light_2_join_BAR, (value:boolean) => setLight_2_fb_BAR(value));
        const sub_light_3_BAR = window.CrComLib.subscribeState("b", light_3_join_BAR, (value:boolean) => setLight_3_fb_BAR(value));
      
        // BILLIARD ROOM
        const sub_light_1_BILLIARD_ROOM = window.CrComLib.subscribeState("b", light_1_join_BILLIARD_ROOM, (value:boolean) => setLight_1_fb_BILLIARD_ROOM(value));
        const sub_light_2_BILLIARD_ROOM = window.CrComLib.subscribeState("b", light_2_join_BILLIARD_ROOM, (value:boolean) => setLight_2_fb_BILLIARD_ROOM(value));
        const sub_light_3_BILLIARD_ROOM = window.CrComLib.subscribeState("b", light_3_join_BILLIARD_ROOM, (value:boolean) => setLight_3_fb_BILLIARD_ROOM(value));
        const sub_light_4_BILLIARD_ROOM = window.CrComLib.subscribeState("b", light_4_join_BILLIARD_ROOM, (value:boolean) => setLight_4_fb_BILLIARD_ROOM(value));
      
        // BREAKFAST
        const sub_light_1_BREAKFAST = window.CrComLib.subscribeState("b", light_1_join_BREAKFAST, (value:boolean) => setLight_1_fb_BREAKFAST(value));
        const sub_light_2_BREAKFAST = window.CrComLib.subscribeState("b", light_2_join_BREAKFAST, (value:boolean) => setLight_2_fb_BREAKFAST(value));
        const sub_light_3_BREAKFAST = window.CrComLib.subscribeState("b", light_3_join_BREAKFAST, (value:boolean) => setLight_3_fb_BREAKFAST(value));
        const sub_light_4_BREAKFAST = window.CrComLib.subscribeState("b", light_4_join_BREAKFAST, (value:boolean) => setLight_4_fb_BREAKFAST(value));
      
        // BUTLER PANTRY
        const sub_light_1_BUTLER_PANTRY = window.CrComLib.subscribeState("b", light_1_join_BUTLER_PANTRY, (value:boolean) => setLight_1_fb_BUTLER_PANTRY(value));
      
        // DINING ROOM
        const sub_light_1_DINING_ROOM = window.CrComLib.subscribeState("b", light_1_join_DINING_ROOM, (value:boolean) => setLight_1_fb_DINING_ROOM(value));
        const sub_light_2_DINING_ROOM = window.CrComLib.subscribeState("b", light_2_join_DINING_ROOM, (value:boolean) => setLight_2_fb_DINING_ROOM(value));
        const sub_light_3_DINING_ROOM = window.CrComLib.subscribeState("b", light_3_join_DINING_ROOM, (value:boolean) => setLight_3_fb_DINING_ROOM(value));
        const sub_light_4_DINING_ROOM = window.CrComLib.subscribeState("b", light_4_join_DINING_ROOM, (value:boolean) => setLight_4_fb_DINING_ROOM(value));
      
        // ELEVATOR HALL
        const sub_light_1_ELEVATOR_HALL = window.CrComLib.subscribeState("b", light_1_join_ELEVATOR_HALL, (value:boolean) => setLight_1_fb_ELEVATOR_HALL(value));
        const sub_light_2_ELEVATOR_HALL = window.CrComLib.subscribeState("b", light_2_join_ELEVATOR_HALL, (value:boolean) => setLight_2_fb_ELEVATOR_HALL(value));
        const sub_light_3_ELEVATOR_HALL = window.CrComLib.subscribeState("b", light_3_join_ELEVATOR_HALL, (value:boolean) => setLight_3_fb_ELEVATOR_HALL(value));
      
        // FAMILY ROOM
        const sub_light_1_FAMILY_ROOM = window.CrComLib.subscribeState("b", light_1_join_FAMILY_ROOM, (value:boolean) => setLight_1_fb_FAMILY_ROOM(value));
        const sub_light_2_FAMILY_ROOM = window.CrComLib.subscribeState("b", light_2_join_FAMILY_ROOM, (value:boolean) => setLight_2_fb_FAMILY_ROOM(value));
        const sub_light_3_FAMILY_ROOM = window.CrComLib.subscribeState("b", light_3_join_FAMILY_ROOM, (value:boolean) => setLight_3_fb_FAMILY_ROOM(value));
        const sub_light_4_FAMILY_ROOM = window.CrComLib.subscribeState("b", light_4_join_FAMILY_ROOM, (value:boolean) => setLight_4_fb_FAMILY_ROOM(value));
      
        // FOYER
        const sub_light_1_FOYER = window.CrComLib.subscribeState("b", light_1_join_FOYER, (value:boolean) => setLight_1_fb_FOYER(value));
        const sub_light_2_FOYER = window.CrComLib.subscribeState("b", light_2_join_FOYER, (value:boolean) => setLight_2_fb_FOYER(value));
        const sub_light_3_FOYER = window.CrComLib.subscribeState("b", light_3_join_FOYER, (value:boolean) => setLight_3_fb_FOYER(value));
      
        // KITCHEN
        const sub_light_1_KITCHEN = window.CrComLib.subscribeState("b", light_1_join_KITCHEN, (value:boolean) => setLight_1_fb_KITCHEN(value));
        const sub_light_2_KITCHEN = window.CrComLib.subscribeState("b", light_2_join_KITCHEN, (value:boolean) => setLight_2_fb_KITCHEN(value));
        const sub_light_3_KITCHEN = window.CrComLib.subscribeState("b", light_3_join_KITCHEN, (value:boolean) => setLight_3_fb_KITCHEN(value));
        const sub_light_4_KITCHEN = window.CrComLib.subscribeState("b", light_4_join_KITCHEN, (value:boolean) => setLight_4_fb_KITCHEN(value));
      
        // LIVING ROOM
        const sub_light_1_LIVING_ROOM = window.CrComLib.subscribeState("b", light_1_join_LIVING_ROOM, (value:boolean) => setLight_1_fb_LIVING_ROOM(value));
        const sub_light_2_LIVING_ROOM = window.CrComLib.subscribeState("b", light_2_join_LIVING_ROOM, (value:boolean) => setLight_2_fb_LIVING_ROOM(value));
        const sub_light_3_LIVING_ROOM = window.CrComLib.subscribeState("b", light_3_join_LIVING_ROOM, (value:boolean) => setLight_3_fb_LIVING_ROOM(value));
        const sub_light_4_LIVING_ROOM = window.CrComLib.subscribeState("b", light_4_join_LIVING_ROOM, (value:boolean) => setLight_4_fb_LIVING_ROOM(value));
        const sub_light_5_LIVING_ROOM = window.CrComLib.subscribeState("b", light_5_join_LIVING_ROOM, (value:boolean) => setLight_5_fb_LIVING_ROOM(value));
        const sub_light_6_LIVING_ROOM = window.CrComLib.subscribeState("b", light_6_join_LIVING_ROOM, (value:boolean) => setLight_6_fb_LIVING_ROOM(value));
      
        // OFFICE POWDER
        const sub_light_1_OFFICE_POWDER = window.CrComLib.subscribeState("b", light_1_join_OFFICE_POWDER, (value:boolean) => setLight_1_fb_OFFICE_POWDER(value));
        const sub_light_2_OFFICE_POWDER = window.CrComLib.subscribeState("b", light_2_join_OFFICE_POWDER, (value:boolean) => setLight_2_fb_OFFICE_POWDER(value));
      
        // STEVE'S OFFICE
        const sub_light_1_STEVE_S_OFFICE = window.CrComLib.subscribeState("b", light_1_join_STEVE_S_OFFICE, (value:boolean) => setLight_1_fb_STEVE_S_OFFICE(value));
        const sub_light_2_STEVE_S_OFFICE = window.CrComLib.subscribeState("b", light_2_join_STEVE_S_OFFICE, (value:boolean) => setLight_2_fb_STEVE_S_OFFICE(value));
      
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
      
        // SOUTH STAIRS
        const sub_light_1_SOUTH_STAIRS = window.CrComLib.subscribeState("b", light_1_join_SOUTH_STAIRS, (value:boolean) => setLight_1_fb_SOUTH_STAIRS(value));
      
        // FRONT
        const sub_light_1_FRONT = window.CrComLib.subscribeState("b", light_1_join_FRONT, (value:boolean) => setLight_1_fb_FRONT(value));
        const sub_light_2_FRONT = window.CrComLib.subscribeState("b", light_2_join_FRONT, (value:boolean) => setLight_2_fb_FRONT(value));
        const sub_light_3_FRONT = window.CrComLib.subscribeState("b", light_3_join_FRONT, (value:boolean) => setLight_3_fb_FRONT(value));
        const sub_light_4_FRONT = window.CrComLib.subscribeState("b", light_4_join_FRONT, (value:boolean) => setLight_4_fb_FRONT(value));
        const sub_light_5_FRONT = window.CrComLib.subscribeState("b", light_5_join_FRONT, (value:boolean) => setLight_5_fb_FRONT(value));
      
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
      
        // REAR
        const sub_light_1_REAR = window.CrComLib.subscribeState("b", light_1_join_REAR, (value:boolean) => setLight_1_fb_REAR(value));
        const sub_light_2_REAR = window.CrComLib.subscribeState("b", light_2_join_REAR, (value:boolean) => setLight_2_fb_REAR(value));
        const sub_light_3_REAR = window.CrComLib.subscribeState("b", light_3_join_REAR, (value:boolean) => setLight_3_fb_REAR(value));
        const sub_light_4_REAR = window.CrComLib.subscribeState("b", light_4_join_REAR, (value:boolean) => setLight_4_fb_REAR(value));
        const sub_light_5_REAR = window.CrComLib.subscribeState("b", light_5_join_REAR, (value:boolean) => setLight_5_fb_REAR(value));
        const sub_light_6_REAR = window.CrComLib.subscribeState("b", light_6_join_REAR, (value:boolean) => setLight_6_fb_REAR(value));
        const sub_light_7_REAR = window.CrComLib.subscribeState("b", light_7_join_REAR, (value:boolean) => setLight_7_fb_REAR(value));
        const sub_light_8_REAR = window.CrComLib.subscribeState("b", light_8_join_REAR, (value:boolean) => setLight_8_fb_REAR(value));
        const sub_light_9_REAR = window.CrComLib.subscribeState("b", light_9_join_REAR, (value:boolean) => setLight_9_fb_REAR(value));
      
        return () => {
          // BAR
          window.CrComLib.unsubscribeState("b", light_1_join_BAR, sub_light_1_BAR);
          window.CrComLib.unsubscribeState("b", light_2_join_BAR, sub_light_2_BAR);
          window.CrComLib.unsubscribeState("b", light_3_join_BAR, sub_light_3_BAR);
          // BILLIARD ROOM
          window.CrComLib.unsubscribeState("b", light_1_join_BILLIARD_ROOM, sub_light_1_BILLIARD_ROOM);
          window.CrComLib.unsubscribeState("b", light_2_join_BILLIARD_ROOM, sub_light_2_BILLIARD_ROOM);
          window.CrComLib.unsubscribeState("b", light_3_join_BILLIARD_ROOM, sub_light_3_BILLIARD_ROOM);
          window.CrComLib.unsubscribeState("b", light_4_join_BILLIARD_ROOM, sub_light_4_BILLIARD_ROOM);
          // BREAKFAST
          window.CrComLib.unsubscribeState("b", light_1_join_BREAKFAST, sub_light_1_BREAKFAST);
          window.CrComLib.unsubscribeState("b", light_2_join_BREAKFAST, sub_light_2_BREAKFAST);
          window.CrComLib.unsubscribeState("b", light_3_join_BREAKFAST, sub_light_3_BREAKFAST);
          window.CrComLib.unsubscribeState("b", light_4_join_BREAKFAST, sub_light_4_BREAKFAST);
          // BUTLER PANTRY
          window.CrComLib.unsubscribeState("b", light_1_join_BUTLER_PANTRY, sub_light_1_BUTLER_PANTRY);
          // DINING ROOM
          window.CrComLib.unsubscribeState("b", light_1_join_DINING_ROOM, sub_light_1_DINING_ROOM);
          window.CrComLib.unsubscribeState("b", light_2_join_DINING_ROOM, sub_light_2_DINING_ROOM);
          window.CrComLib.unsubscribeState("b", light_3_join_DINING_ROOM, sub_light_3_DINING_ROOM);
          window.CrComLib.unsubscribeState("b", light_4_join_DINING_ROOM, sub_light_4_DINING_ROOM);
          // ELEVATOR HALL
          window.CrComLib.unsubscribeState("b", light_1_join_ELEVATOR_HALL, sub_light_1_ELEVATOR_HALL);
          window.CrComLib.unsubscribeState("b", light_2_join_ELEVATOR_HALL, sub_light_2_ELEVATOR_HALL);
          window.CrComLib.unsubscribeState("b", light_3_join_ELEVATOR_HALL, sub_light_3_ELEVATOR_HALL);
          // FAMILY ROOM
          window.CrComLib.unsubscribeState("b", light_1_join_FAMILY_ROOM, sub_light_1_FAMILY_ROOM);
          window.CrComLib.unsubscribeState("b", light_2_join_FAMILY_ROOM, sub_light_2_FAMILY_ROOM);
          window.CrComLib.unsubscribeState("b", light_3_join_FAMILY_ROOM, sub_light_3_FAMILY_ROOM);
          window.CrComLib.unsubscribeState("b", light_4_join_FAMILY_ROOM, sub_light_4_FAMILY_ROOM);
          // FOYER
          window.CrComLib.unsubscribeState("b", light_1_join_FOYER, sub_light_1_FOYER);
          window.CrComLib.unsubscribeState("b", light_2_join_FOYER, sub_light_2_FOYER);
          window.CrComLib.unsubscribeState("b", light_3_join_FOYER, sub_light_3_FOYER);
          // KITCHEN
          window.CrComLib.unsubscribeState("b", light_1_join_KITCHEN, sub_light_1_KITCHEN);
          window.CrComLib.unsubscribeState("b", light_2_join_KITCHEN, sub_light_2_KITCHEN);
          window.CrComLib.unsubscribeState("b", light_3_join_KITCHEN, sub_light_3_KITCHEN);
          window.CrComLib.unsubscribeState("b", light_4_join_KITCHEN, sub_light_4_KITCHEN);
          // LIVING ROOM
          window.CrComLib.unsubscribeState("b", light_1_join_LIVING_ROOM, sub_light_1_LIVING_ROOM);
          window.CrComLib.unsubscribeState("b", light_2_join_LIVING_ROOM, sub_light_2_LIVING_ROOM);
          window.CrComLib.unsubscribeState("b", light_3_join_LIVING_ROOM, sub_light_3_LIVING_ROOM);
          window.CrComLib.unsubscribeState("b", light_4_join_LIVING_ROOM, sub_light_4_LIVING_ROOM);
          window.CrComLib.unsubscribeState("b", light_5_join_LIVING_ROOM, sub_light_5_LIVING_ROOM);
          window.CrComLib.unsubscribeState("b", light_6_join_LIVING_ROOM, sub_light_6_LIVING_ROOM);
          // OFFICE POWDER
          window.CrComLib.unsubscribeState("b", light_1_join_OFFICE_POWDER, sub_light_1_OFFICE_POWDER);
          window.CrComLib.unsubscribeState("b", light_2_join_OFFICE_POWDER, sub_light_2_OFFICE_POWDER);
          // STEVE'S OFFICE
          window.CrComLib.unsubscribeState("b", light_1_join_STEVE_S_OFFICE, sub_light_1_STEVE_S_OFFICE);
          window.CrComLib.unsubscribeState("b", light_2_join_STEVE_S_OFFICE, sub_light_2_STEVE_S_OFFICE);
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
          // SOUTH STAIRS
          window.CrComLib.unsubscribeState("b", light_1_join_SOUTH_STAIRS, sub_light_1_SOUTH_STAIRS);
          // FRONT
          window.CrComLib.unsubscribeState("b", light_1_join_FRONT, sub_light_1_FRONT);
          window.CrComLib.unsubscribeState("b", light_2_join_FRONT, sub_light_2_FRONT);
          window.CrComLib.unsubscribeState("b", light_3_join_FRONT, sub_light_3_FRONT);
          window.CrComLib.unsubscribeState("b", light_4_join_FRONT, sub_light_4_FRONT);
          window.CrComLib.unsubscribeState("b", light_5_join_FRONT, sub_light_5_FRONT);
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
          // REAR
          window.CrComLib.unsubscribeState("b", light_1_join_REAR, sub_light_1_REAR);
          window.CrComLib.unsubscribeState("b", light_2_join_REAR, sub_light_2_REAR);
          window.CrComLib.unsubscribeState("b", light_3_join_REAR, sub_light_3_REAR);
          window.CrComLib.unsubscribeState("b", light_4_join_REAR, sub_light_4_REAR);
          window.CrComLib.unsubscribeState("b", light_5_join_REAR, sub_light_5_REAR);
          window.CrComLib.unsubscribeState("b", light_6_join_REAR, sub_light_6_REAR);
          window.CrComLib.unsubscribeState("b", light_7_join_REAR, sub_light_7_REAR);
          window.CrComLib.unsubscribeState("b", light_8_join_REAR, sub_light_8_REAR);
          window.CrComLib.unsubscribeState("b", light_9_join_REAR, sub_light_9_REAR);
        };
      }, []);
      
        
 

    //--------------------------------------------------------------------------------------------------------------------------------------- Current Floor section 

      

 // Zone: Bar
 const lightZone_BAR = (
    <>
      <h2 className="light_menu_title">Bar</h2>
      <div className="button_list">
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_1_join_BAR, true);
          window.CrComLib.publishEvent("b", light_1_join_BAR, false);
          console.log(`Triggered join [${light_1_join_BAR}] coming from [${light_1_title_BAR}]`);
        }}>
          <img className="btn_image" src={light_1_fb_BAR ? lightOn : lightOff} alt={light_1_title_BAR} />
          <p>{light_1_title_BAR}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_2_join_BAR, true);
          window.CrComLib.publishEvent("b", light_2_join_BAR, false);
          console.log(`Triggered join [${light_2_join_BAR}] coming from [${light_2_title_BAR}]`);
        }}>
          <img className="btn_image" src={light_2_fb_BAR ? lightOn : lightOff} alt={light_2_title_BAR} />
          <p>{light_2_title_BAR}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_3_join_BAR, true);
          window.CrComLib.publishEvent("b", light_3_join_BAR, false);
          console.log(`Triggered join [${light_3_join_BAR}] coming from [${light_3_title_BAR}]`);
        }}>
          <img className="btn_image" src={light_3_fb_BAR ? lightOn : lightOff} alt={light_3_title_BAR} />
          <p>{light_3_title_BAR}</p>
        </button>
      </div>
    </>
  );

  // Zone: Billiard Room
  const lightZone_BILLIARD_ROOM = (
    <>
      <h2 className="light_menu_title">Billiard Room</h2>
      <div className="button_list">
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_1_join_BILLIARD_ROOM, true);
          window.CrComLib.publishEvent("b", light_1_join_BILLIARD_ROOM, false);
          console.log(`Triggered join [${light_1_join_BILLIARD_ROOM}] coming from [${light_1_title_BILLIARD_ROOM}]`);
        }}>
          <img className="btn_image" src={light_1_fb_BILLIARD_ROOM ? lightOn : lightOff} alt={light_1_title_BILLIARD_ROOM} />
          <p>{light_1_title_BILLIARD_ROOM}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_2_join_BILLIARD_ROOM, true);
          window.CrComLib.publishEvent("b", light_2_join_BILLIARD_ROOM, false);
          console.log(`Triggered join [${light_2_join_BILLIARD_ROOM}] coming from [${light_2_title_BILLIARD_ROOM}]`);
        }}>
          <img className="btn_image" src={light_2_fb_BILLIARD_ROOM ? lightOn : lightOff} alt={light_2_title_BILLIARD_ROOM} />
          <p>{light_2_title_BILLIARD_ROOM}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_3_join_BILLIARD_ROOM, true);
          window.CrComLib.publishEvent("b", light_3_join_BILLIARD_ROOM, false);
          console.log(`Triggered join [${light_3_join_BILLIARD_ROOM}] coming from [${light_3_title_BILLIARD_ROOM}]`);
        }}>
          <img className="btn_image" src={light_3_fb_BILLIARD_ROOM ? lightOn : lightOff} alt={light_3_title_BILLIARD_ROOM} />
          <p>{light_3_title_BILLIARD_ROOM}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_4_join_BILLIARD_ROOM, true);
          window.CrComLib.publishEvent("b", light_4_join_BILLIARD_ROOM, false);
          console.log(`Triggered join [${light_4_join_BILLIARD_ROOM}] coming from [${light_4_title_BILLIARD_ROOM}]`);
        }}>
          <img className="btn_image" src={light_4_fb_BILLIARD_ROOM ? lightOn : lightOff} alt={light_4_title_BILLIARD_ROOM} />
          <p>{light_4_title_BILLIARD_ROOM}</p>
        </button>
      </div>
    </>
  );

  // Zone: Breakfast
  const lightZone_BREAKFAST = (
    <>
      <h2 className="light_menu_title">Breakfast</h2>
      <div className="button_list">
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_1_join_BREAKFAST, true);
          window.CrComLib.publishEvent("b", light_1_join_BREAKFAST, false);
          console.log(`Triggered join [${light_1_join_BREAKFAST}] coming from [${light_1_title_BREAKFAST}]`);
        }}>
          <img className="btn_image" src={light_1_fb_BREAKFAST ? lightOn : lightOff} alt={light_1_title_BREAKFAST} />
          <p>{light_1_title_BREAKFAST}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_2_join_BREAKFAST, true);
          window.CrComLib.publishEvent("b", light_2_join_BREAKFAST, false);
          console.log(`Triggered join [${light_2_join_BREAKFAST}] coming from [${light_2_title_BREAKFAST}]`);
        }}>
          <img className="btn_image" src={light_2_fb_BREAKFAST ? lightOn : lightOff} alt={light_2_title_BREAKFAST} />
          <p>{light_2_title_BREAKFAST}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_3_join_BREAKFAST, true);
          window.CrComLib.publishEvent("b", light_3_join_BREAKFAST, false);
          console.log(`Triggered join [${light_3_join_BREAKFAST}] coming from [${light_3_title_BREAKFAST}]`);
        }}>
          <img className="btn_image" src={light_3_fb_BREAKFAST ? lightOn : lightOff} alt={light_3_title_BREAKFAST} />
          <p>{light_3_title_BREAKFAST}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_4_join_BREAKFAST, true);
          window.CrComLib.publishEvent("b", light_4_join_BREAKFAST, false);
          console.log(`Triggered join [${light_4_join_BREAKFAST}] coming from [${light_4_title_BREAKFAST}]`);
        }}>
          <img className="btn_image" src={light_4_fb_BREAKFAST ? lightOn : lightOff} alt={light_4_title_BREAKFAST} />
          <p>{light_4_title_BREAKFAST}</p>
        </button>
      </div>
    </>
  );

  // Zone: Butler Pantry
  const lightZone_BUTLER_PANTRY = (
    <>
      <h2 className="light_menu_title">Butler Pantry</h2>
      <div className="button_list">
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_1_join_BUTLER_PANTRY, true);
          window.CrComLib.publishEvent("b", light_1_join_BUTLER_PANTRY, false);
          console.log(`Triggered join [${light_1_join_BUTLER_PANTRY}] coming from [${light_1_title_BUTLER_PANTRY}]`);
        }}>
          <img className="btn_image" src={light_1_fb_BUTLER_PANTRY ? lightOn : lightOff} alt={light_1_title_BUTLER_PANTRY} />
          <p>{light_1_title_BUTLER_PANTRY}</p>
        </button>
      </div>
    </>
  );

  // Zone: Dining Room
  const lightZone_DINING_ROOM = (
    <>
      <h2 className="light_menu_title">Dining Room</h2>
      <div className="button_list">
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_1_join_DINING_ROOM, true);
          window.CrComLib.publishEvent("b", light_1_join_DINING_ROOM, false);
          console.log(`Triggered join [${light_1_join_DINING_ROOM}] coming from [${light_1_title_DINING_ROOM}]`);
        }}>
          <img className="btn_image" src={light_1_fb_DINING_ROOM ? lightOn : lightOff} alt={light_1_title_DINING_ROOM} />
          <p>{light_1_title_DINING_ROOM}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_2_join_DINING_ROOM, true);
          window.CrComLib.publishEvent("b", light_2_join_DINING_ROOM, false);
          console.log(`Triggered join [${light_2_join_DINING_ROOM}] coming from [${light_2_title_DINING_ROOM}]`);
        }}>
          <img className="btn_image" src={light_2_fb_DINING_ROOM ? lightOn : lightOff} alt={light_2_title_DINING_ROOM} />
          <p>{light_2_title_DINING_ROOM}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_3_join_DINING_ROOM, true);
          window.CrComLib.publishEvent("b", light_3_join_DINING_ROOM, false);
          console.log(`Triggered join [${light_3_join_DINING_ROOM}] coming from [${light_3_title_DINING_ROOM}]`);
        }}>
          <img className="btn_image" src={light_3_fb_DINING_ROOM ? lightOn : lightOff} alt={light_3_title_DINING_ROOM} />
          <p>{light_3_title_DINING_ROOM}</p>
        </button>
        <button className="btn_square" onClick={() => {
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
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_1_join_ELEVATOR_HALL, true);
          window.CrComLib.publishEvent("b", light_1_join_ELEVATOR_HALL, false);
          console.log(`Triggered join [${light_1_join_ELEVATOR_HALL}] coming from [${light_1_title_ELEVATOR_HALL}]`);
        }}>
          <img className="btn_image" src={light_1_fb_ELEVATOR_HALL ? lightOn : lightOff} alt={light_1_title_ELEVATOR_HALL} />
          <p>{light_1_title_ELEVATOR_HALL}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_2_join_ELEVATOR_HALL, true);
          window.CrComLib.publishEvent("b", light_2_join_ELEVATOR_HALL, false);
          console.log(`Triggered join [${light_2_join_ELEVATOR_HALL}] coming from [${light_2_title_ELEVATOR_HALL}]`);
        }}>
          <img className="btn_image" src={light_2_fb_ELEVATOR_HALL ? lightOn : lightOff} alt={light_2_title_ELEVATOR_HALL} />
          <p>{light_2_title_ELEVATOR_HALL}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_3_join_ELEVATOR_HALL, true);
          window.CrComLib.publishEvent("b", light_3_join_ELEVATOR_HALL, false);
          console.log(`Triggered join [${light_3_join_ELEVATOR_HALL}] coming from [${light_3_title_ELEVATOR_HALL}]`);
        }}>
          <img className="btn_image" src={light_3_fb_ELEVATOR_HALL ? lightOn : lightOff} alt={light_3_title_ELEVATOR_HALL} />
          <p>{light_3_title_ELEVATOR_HALL}</p>
        </button>
      </div>
    </>
  );

  // Zone: Family Room
  const lightZone_FAMILY_ROOM = (
    <>
      <h2 className="light_menu_title">Family Room</h2>
      <div className="button_list">
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_1_join_FAMILY_ROOM, true);
          window.CrComLib.publishEvent("b", light_1_join_FAMILY_ROOM, false);
          console.log(`Triggered join [${light_1_join_FAMILY_ROOM}] coming from [${light_1_title_FAMILY_ROOM}]`);
        }}>
          <img className="btn_image" src={light_1_fb_FAMILY_ROOM ? lightOn : lightOff} alt={light_1_title_FAMILY_ROOM} />
          <p>{light_1_title_FAMILY_ROOM}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_2_join_FAMILY_ROOM, true);
          window.CrComLib.publishEvent("b", light_2_join_FAMILY_ROOM, false);
          console.log(`Triggered join [${light_2_join_FAMILY_ROOM}] coming from [${light_2_title_FAMILY_ROOM}]`);
        }}>
          <img className="btn_image" src={light_2_fb_FAMILY_ROOM ? lightOn : lightOff} alt={light_2_title_FAMILY_ROOM} />
          <p>{light_2_title_FAMILY_ROOM}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_3_join_FAMILY_ROOM, true);
          window.CrComLib.publishEvent("b", light_3_join_FAMILY_ROOM, false);
          console.log(`Triggered join [${light_3_join_FAMILY_ROOM}] coming from [${light_3_title_FAMILY_ROOM}]`);
        }}>
          <img className="btn_image" src={light_3_fb_FAMILY_ROOM ? lightOn : lightOff} alt={light_3_title_FAMILY_ROOM} />
          <p>{light_3_title_FAMILY_ROOM}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_4_join_FAMILY_ROOM, true);
          window.CrComLib.publishEvent("b", light_4_join_FAMILY_ROOM, false);
          console.log(`Triggered join [${light_4_join_FAMILY_ROOM}] coming from [${light_4_title_FAMILY_ROOM}]`);
        }}>
          <img className="btn_image" src={light_4_fb_FAMILY_ROOM ? lightOn : lightOff} alt={light_4_title_FAMILY_ROOM} />
          <p>{light_4_title_FAMILY_ROOM}</p>
        </button>
      </div>
    </>
  );

  // Zone: Foyer
  const lightZone_FOYER = (
    <>
      <h2 className="light_menu_title">Foyer</h2>
      <div className="button_list">
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_1_join_FOYER, true);
          window.CrComLib.publishEvent("b", light_1_join_FOYER, false);
          console.log(`Triggered join [${light_1_join_FOYER}] coming from [${light_1_title_FOYER}]`);
        }}>
          <img className="btn_image" src={light_1_fb_FOYER ? lightOn : lightOff} alt={light_1_title_FOYER} />
          <p>{light_1_title_FOYER}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_2_join_FOYER, true);
          window.CrComLib.publishEvent("b", light_2_join_FOYER, false);
          console.log(`Triggered join [${light_2_join_FOYER}] coming from [${light_2_title_FOYER}]`);
        }}>
          <img className="btn_image" src={light_2_fb_FOYER ? lightOn : lightOff} alt={light_2_title_FOYER} />
          <p>{light_2_title_FOYER}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_3_join_FOYER, true);
          window.CrComLib.publishEvent("b", light_3_join_FOYER, false);
          console.log(`Triggered join [${light_3_join_FOYER}] coming from [${light_3_title_FOYER}]`);
        }}>
          <img className="btn_image" src={light_3_fb_FOYER ? lightOn : lightOff} alt={light_3_title_FOYER} />
          <p>{light_3_title_FOYER}</p>
        </button>
      </div>
    </>
  );

  // Zone: Kitchen
  const lightZone_KITCHEN = (
    <>
      <h2 className="light_menu_title">Kitchen</h2>
      <div className="button_list">
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_1_join_KITCHEN, true);
          window.CrComLib.publishEvent("b", light_1_join_KITCHEN, false);
          console.log(`Triggered join [${light_1_join_KITCHEN}] coming from [${light_1_title_KITCHEN}]`);
        }}>
          <img className="btn_image" src={light_1_fb_KITCHEN ? lightOn : lightOff} alt={light_1_title_KITCHEN} />
          <p>{light_1_title_KITCHEN}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_2_join_KITCHEN, true);
          window.CrComLib.publishEvent("b", light_2_join_KITCHEN, false);
          console.log(`Triggered join [${light_2_join_KITCHEN}] coming from [${light_2_title_KITCHEN}]`);
        }}>
          <img className="btn_image" src={light_2_fb_KITCHEN ? lightOn : lightOff} alt={light_2_title_KITCHEN} />
          <p>{light_2_title_KITCHEN}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_3_join_KITCHEN, true);
          window.CrComLib.publishEvent("b", light_3_join_KITCHEN, false);
          console.log(`Triggered join [${light_3_join_KITCHEN}] coming from [${light_3_title_KITCHEN}]`);
        }}>
          <img className="btn_image" src={light_3_fb_KITCHEN ? lightOn : lightOff} alt={light_3_title_KITCHEN} />
          <p>{light_3_title_KITCHEN}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_4_join_KITCHEN, true);
          window.CrComLib.publishEvent("b", light_4_join_KITCHEN, false);
          console.log(`Triggered join [${light_4_join_KITCHEN}] coming from [${light_4_title_KITCHEN}]`);
        }}>
          <img className="btn_image" src={light_4_fb_KITCHEN ? lightOn : lightOff} alt={light_4_title_KITCHEN} />
          <p>{light_4_title_KITCHEN}</p>
        </button>
      </div>
    </>
  );

  // Zone: Living Room
  const lightZone_LIVING_ROOM = (
    <>
      <h2 className="light_menu_title">Living Room</h2>
      <div className="button_list">
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_1_join_LIVING_ROOM, true);
          window.CrComLib.publishEvent("b", light_1_join_LIVING_ROOM, false);
          console.log(`Triggered join [${light_1_join_LIVING_ROOM}] coming from [${light_1_title_LIVING_ROOM}]`);
        }}>
          <img className="btn_image" src={light_1_fb_LIVING_ROOM ? lightOn : lightOff} alt={light_1_title_LIVING_ROOM} />
          <p>{light_1_title_LIVING_ROOM}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_2_join_LIVING_ROOM, true);
          window.CrComLib.publishEvent("b", light_2_join_LIVING_ROOM, false);
          console.log(`Triggered join [${light_2_join_LIVING_ROOM}] coming from [${light_2_title_LIVING_ROOM}]`);
        }}>
          <img className="btn_image" src={light_2_fb_LIVING_ROOM ? lightOn : lightOff} alt={light_2_title_LIVING_ROOM} />
          <p>{light_2_title_LIVING_ROOM}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_3_join_LIVING_ROOM, true);
          window.CrComLib.publishEvent("b", light_3_join_LIVING_ROOM, false);
          console.log(`Triggered join [${light_3_join_LIVING_ROOM}] coming from [${light_3_title_LIVING_ROOM}]`);
        }}>
          <img className="btn_image" src={light_3_fb_LIVING_ROOM ? lightOn : lightOff} alt={light_3_title_LIVING_ROOM} />
          <p>{light_3_title_LIVING_ROOM}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_4_join_LIVING_ROOM, true);
          window.CrComLib.publishEvent("b", light_4_join_LIVING_ROOM, false);
          console.log(`Triggered join [${light_4_join_LIVING_ROOM}] coming from [${light_4_title_LIVING_ROOM}]`);
        }}>
          <img className="btn_image" src={light_4_fb_LIVING_ROOM ? lightOn : lightOff} alt={light_4_title_LIVING_ROOM} />
          <p>{light_4_title_LIVING_ROOM}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_5_join_LIVING_ROOM, true);
          window.CrComLib.publishEvent("b", light_5_join_LIVING_ROOM, false);
          console.log(`Triggered join [${light_5_join_LIVING_ROOM}] coming from [${light_5_title_LIVING_ROOM}]`);
        }}>
          <img className="btn_image" src={light_5_fb_LIVING_ROOM ? lightOn : lightOff} alt={light_5_title_LIVING_ROOM} />
          <p>{light_5_title_LIVING_ROOM}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_6_join_LIVING_ROOM, true);
          window.CrComLib.publishEvent("b", light_6_join_LIVING_ROOM, false);
          console.log(`Triggered join [${light_6_join_LIVING_ROOM}] coming from [${light_6_title_LIVING_ROOM}]`);
        }}>
          <img className="btn_image" src={light_6_fb_LIVING_ROOM ? lightOn : lightOff} alt={light_6_title_LIVING_ROOM} />
          <p>{light_6_title_LIVING_ROOM}</p>
        </button>
      </div>
    </>
  );

  // Zone: Office Powder
  const lightZone_OFFICE_POWDER = (
    <>
      <h2 className="light_menu_title">Office Powder</h2>
      <div className="button_list">
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_1_join_OFFICE_POWDER, true);
          window.CrComLib.publishEvent("b", light_1_join_OFFICE_POWDER, false);
          console.log(`Triggered join [${light_1_join_OFFICE_POWDER}] coming from [${light_1_title_OFFICE_POWDER}]`);
        }}>
          <img className="btn_image" src={light_1_fb_OFFICE_POWDER ? lightOn : lightOff} alt={light_1_title_OFFICE_POWDER} />
          <p>{light_1_title_OFFICE_POWDER}</p>
        </button>
        <button className="btn_square" onClick={() => {
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
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_1_join_STEVE_S_OFFICE, true);
          window.CrComLib.publishEvent("b", light_1_join_STEVE_S_OFFICE, false);
          console.log(`Triggered join [${light_1_join_STEVE_S_OFFICE}] coming from [${light_1_title_STEVE_S_OFFICE}]`);
        }}>
          <img className="btn_image" src={light_1_fb_STEVE_S_OFFICE ? lightOn : lightOff} alt={light_1_title_STEVE_S_OFFICE} />
          <p>{light_1_title_STEVE_S_OFFICE}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_2_join_STEVE_S_OFFICE, true);
          window.CrComLib.publishEvent("b", light_2_join_STEVE_S_OFFICE, false);
          console.log(`Triggered join [${light_2_join_STEVE_S_OFFICE}] coming from [${light_2_title_STEVE_S_OFFICE}]`);
        }}>
          <img className="btn_image" src={light_2_fb_STEVE_S_OFFICE ? lightOn : lightOff} alt={light_2_title_STEVE_S_OFFICE} />
          <p>{light_2_title_STEVE_S_OFFICE}</p>
        </button>
      </div>
    </>
  );

  // Zone: Hall

  const lightZone_HALL = (
    <>
      <h2 className="light_menu_title">Hall</h2>
      <div className="button_list">
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_1_join_HALL, true);
          window.CrComLib.publishEvent("b", light_1_join_HALL, false);
          console.log(`Triggered join [${light_1_join_HALL}] coming from [${light_1_title_HALL}]`);
        }}>
          <img className="btn_image" src={light_1_fb_HALL ? lightOn : lightOff} alt={light_1_title_HALL} />
          <p>{light_1_title_HALL}</p>
        </button>
        
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_2_join_HALL, true);
          window.CrComLib.publishEvent("b", light_2_join_HALL, false);
          console.log(`Triggered join [${light_2_join_HALL}] coming from [${light_2_title_HALL}]`);
        }}>
          <img className="btn_image" src={light_2_fb_HALL ? lightOn : lightOff} alt={light_2_title_HALL} />
          <p>{light_2_title_HALL}</p>
        </button>
        
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_3_join_HALL, true);
          window.CrComLib.publishEvent("b", light_3_join_HALL, false);
          console.log(`Triggered join [${light_3_join_HALL}] coming from [${light_3_title_HALL}]`);
        }}>
          <img className="btn_image" src={light_3_fb_HALL ? lightOn : lightOff} alt={light_3_title_HALL} />
          <p>{light_3_title_HALL}</p>
        </button>
        

        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_4_join_HALL, true);
          window.CrComLib.publishEvent("b", light_4_join_HALL, false);
          console.log(`Triggered join [${light_4_join_HALL}] coming from [${light_4_title_HALL}]`);
        }}>
          <img className="btn_image" src={light_4_fb_HALL ? lightOn : lightOff} alt={light_4_title_HALL} />
          <p>{light_4_title_HALL}</p>
        </button>
        
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_5_join_HALL, true);
          window.CrComLib.publishEvent("b", light_5_join_HALL, false);
          console.log(`Triggered join [${light_5_join_HALL}] coming from [${light_5_title_HALL}]`);
        }}>
          <img className="btn_image" src={light_5_fb_HALL ? lightOn : lightOff} alt={light_5_title_HALL} />
          <p>{light_5_title_HALL}</p>
        </button>
        

        <button className="btn_square" onClick={() => {
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
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_1_join_MEDIA_ROOM, true);
          window.CrComLib.publishEvent("b", light_1_join_MEDIA_ROOM, false);
          console.log(`Triggered join [${light_1_join_MEDIA_ROOM}] coming from [${light_1_title_MEDIA_ROOM}]`);
        }}>
          <img className="btn_image" src={light_1_fb_MEDIA_ROOM ? lightOn : lightOff} alt={light_1_title_MEDIA_ROOM} />
          <p>{light_1_title_MEDIA_ROOM}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_2_join_MEDIA_ROOM, true);
          window.CrComLib.publishEvent("b", light_2_join_MEDIA_ROOM, false);
          console.log(`Triggered join [${light_2_join_MEDIA_ROOM}] coming from [${light_2_title_MEDIA_ROOM}]`);
        }}>
          <img className="btn_image" src={light_2_fb_MEDIA_ROOM ? lightOn : lightOff} alt={light_2_title_MEDIA_ROOM} />
          <p>{light_2_title_MEDIA_ROOM}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_3_join_MEDIA_ROOM, true);
          window.CrComLib.publishEvent("b", light_3_join_MEDIA_ROOM, false);
          console.log(`Triggered join [${light_3_join_MEDIA_ROOM}] coming from [${light_3_title_MEDIA_ROOM}]`);
        }}>
          <img className="btn_image" src={light_3_fb_MEDIA_ROOM ? lightOn : lightOff} alt={light_3_title_MEDIA_ROOM} />
          <p>{light_3_title_MEDIA_ROOM}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_4_join_MEDIA_ROOM, true);
          window.CrComLib.publishEvent("b", light_4_join_MEDIA_ROOM, false);
          console.log(`Triggered join [${light_4_join_MEDIA_ROOM}] coming from [${light_4_title_MEDIA_ROOM}]`);
        }}>
          <img className="btn_image" src={light_4_fb_MEDIA_ROOM ? lightOn : lightOff} alt={light_4_title_MEDIA_ROOM} />
          <p>{light_4_title_MEDIA_ROOM}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_5_join_MEDIA_ROOM, true);
          window.CrComLib.publishEvent("b", light_5_join_MEDIA_ROOM, false);
          console.log(`Triggered join [${light_5_join_MEDIA_ROOM}] coming from [${light_5_title_MEDIA_ROOM}]`);
        }}>
          <img className="btn_image" src={light_5_fb_MEDIA_ROOM ? lightOn : lightOff} alt={light_5_title_MEDIA_ROOM} />
          <p>{light_5_title_MEDIA_ROOM}</p>
        </button>
      </div>
    </>
  );

  // Zone: South Stairs
  const lightZone_SOUTH_STAIRS = (
    <>
      <h2 className="light_menu_title">South Stairs</h2>
      <div className="button_list">
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_1_join_SOUTH_STAIRS, true);
          window.CrComLib.publishEvent("b", light_1_join_SOUTH_STAIRS, false);
          console.log(`Triggered join [${light_1_join_SOUTH_STAIRS}] coming from [${light_1_title_SOUTH_STAIRS}]`);
        }}>
          <img className="btn_image" src={light_1_fb_SOUTH_STAIRS ? lightOn : lightOff} alt={light_1_title_SOUTH_STAIRS} />
          <p>{light_1_title_SOUTH_STAIRS}</p>
        </button>
      </div>
    </>
  );

  // Zone: Front
  const lightZone_FRONT = (
    <>
      <h2 className="light_menu_title">Front</h2>
      <div className="button_list">
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_1_join_FRONT, true);
          window.CrComLib.publishEvent("b", light_1_join_FRONT, false);
          console.log(`Triggered join [${light_1_join_FRONT}] coming from [${light_1_title_FRONT}]`);
        }}>
          <img className="btn_image" src={light_1_fb_FRONT ? lightOn : lightOff} alt={light_1_title_FRONT} />
          <p>{light_1_title_FRONT}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_2_join_FRONT, true);
          window.CrComLib.publishEvent("b", light_2_join_FRONT, false);
          console.log(`Triggered join [${light_2_join_FRONT}] coming from [${light_2_title_FRONT}]`);
        }}>
          <img className="btn_image" src={light_2_fb_FRONT ? lightOn : lightOff} alt={light_2_title_FRONT} />
          <p>{light_2_title_FRONT}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_3_join_FRONT, true);
          window.CrComLib.publishEvent("b", light_3_join_FRONT, false);
          console.log(`Triggered join [${light_3_join_FRONT}] coming from [${light_3_title_FRONT}]`);
        }}>
          <img className="btn_image" src={light_3_fb_FRONT ? lightOn : lightOff} alt={light_3_title_FRONT} />
          <p>{light_3_title_FRONT}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_4_join_FRONT, true);
          window.CrComLib.publishEvent("b", light_4_join_FRONT, false);
          console.log(`Triggered join [${light_4_join_FRONT}] coming from [${light_4_title_FRONT}]`);
        }}>
          <img className="btn_image" src={light_4_fb_FRONT ? lightOn : lightOff} alt={light_4_title_FRONT} />
          <p>{light_4_title_FRONT}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_5_join_FRONT, true);
          window.CrComLib.publishEvent("b", light_5_join_FRONT, false);
          console.log(`Triggered join [${light_5_join_FRONT}] coming from [${light_5_title_FRONT}]`);
        }}>
          <img className="btn_image" src={light_5_fb_FRONT ? lightOn : lightOff} alt={light_5_title_FRONT} />
          <p>{light_5_title_FRONT}</p>
        </button>
      </div>
    </>
  );

  // Zone: Landscape
  const lightZone_LANDSCAPE = (
    <>
      <h2 className="light_menu_title">Landscape</h2>
      <div className="button_list">
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_1_join_LANDSCAPE, true);
          window.CrComLib.publishEvent("b", light_1_join_LANDSCAPE, false);
          console.log(`Triggered join [${light_1_join_LANDSCAPE}] coming from [${light_1_title_LANDSCAPE}]`);
        }}>
          <img className="btn_image" src={light_1_fb_LANDSCAPE ? lightOn : lightOff} alt={light_1_title_LANDSCAPE} />
          <p>{light_1_title_LANDSCAPE}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_2_join_LANDSCAPE, true);
          window.CrComLib.publishEvent("b", light_2_join_LANDSCAPE, false);
          console.log(`Triggered join [${light_2_join_LANDSCAPE}] coming from [${light_2_title_LANDSCAPE}]`);
        }}>
          <img className="btn_image" src={light_2_fb_LANDSCAPE ? lightOn : lightOff} alt={light_2_title_LANDSCAPE} />
          <p>{light_2_title_LANDSCAPE}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_3_join_LANDSCAPE, true);
          window.CrComLib.publishEvent("b", light_3_join_LANDSCAPE, false);
          console.log(`Triggered join [${light_3_join_LANDSCAPE}] coming from [${light_3_title_LANDSCAPE}]`);
        }}>
          <img className="btn_image" src={light_3_fb_LANDSCAPE ? lightOn : lightOff} alt={light_3_title_LANDSCAPE} />
          <p>{light_3_title_LANDSCAPE}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_4_join_LANDSCAPE, true);
          window.CrComLib.publishEvent("b", light_4_join_LANDSCAPE, false);
          console.log(`Triggered join [${light_4_join_LANDSCAPE}] coming from [${light_4_title_LANDSCAPE}]`);
        }}>
          <img className="btn_image" src={light_4_fb_LANDSCAPE ? lightOn : lightOff} alt={light_4_title_LANDSCAPE} />
          <p>{light_4_title_LANDSCAPE}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_5_join_LANDSCAPE, true);
          window.CrComLib.publishEvent("b", light_5_join_LANDSCAPE, false);
          console.log(`Triggered join [${light_5_join_LANDSCAPE}] coming from [${light_5_title_LANDSCAPE}]`);
        }}>
          <img className="btn_image" src={light_5_fb_LANDSCAPE ? lightOn : lightOff} alt={light_5_title_LANDSCAPE} />
          <p>{light_5_title_LANDSCAPE}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_6_join_LANDSCAPE, true);
          window.CrComLib.publishEvent("b", light_6_join_LANDSCAPE, false);
          console.log(`Triggered join [${light_6_join_LANDSCAPE}] coming from [${light_6_title_LANDSCAPE}]`);
        }}>
          <img className="btn_image" src={light_6_fb_LANDSCAPE ? lightOn : lightOff} alt={light_6_title_LANDSCAPE} />
          <p>{light_6_title_LANDSCAPE}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_7_join_LANDSCAPE, true);
          window.CrComLib.publishEvent("b", light_7_join_LANDSCAPE, false);
          console.log(`Triggered join [${light_7_join_LANDSCAPE}] coming from [${light_7_title_LANDSCAPE}]`);
        }}>
          <img className="btn_image" src={light_7_fb_LANDSCAPE ? lightOn : lightOff} alt={light_7_title_LANDSCAPE} />
          <p>{light_7_title_LANDSCAPE}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_8_join_LANDSCAPE, true);
          window.CrComLib.publishEvent("b", light_8_join_LANDSCAPE, false);
          console.log(`Triggered join [${light_8_join_LANDSCAPE}] coming from [${light_8_title_LANDSCAPE}]`);
        }}>
          <img className="btn_image" src={light_8_fb_LANDSCAPE ? lightOn : lightOff} alt={light_8_title_LANDSCAPE} />
          <p>{light_8_title_LANDSCAPE}</p>
        </button>
        <button className="btn_square" onClick={() => {
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
      <h2 className="light_menu_title">Rear</h2>
      <div className="button_list">
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_1_join_REAR, true);
          window.CrComLib.publishEvent("b", light_1_join_REAR, false);
          console.log(`Triggered join [${light_1_join_REAR}] coming from [${light_1_title_REAR}]`);
        }}>
          <img className="btn_image" src={light_1_fb_REAR ? lightOn : lightOff} alt={light_1_title_REAR} />
          <p>{light_1_title_REAR}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_2_join_REAR, true);
          window.CrComLib.publishEvent("b", light_2_join_REAR, false);
          console.log(`Triggered join [${light_2_join_REAR}] coming from [${light_2_title_REAR}]`);
        }}>
          <img className="btn_image" src={light_2_fb_REAR ? lightOn : lightOff} alt={light_2_title_REAR} />
          <p>{light_2_title_REAR}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_3_join_REAR, true);
          window.CrComLib.publishEvent("b", light_3_join_REAR, false);
          console.log(`Triggered join [${light_3_join_REAR}] coming from [${light_3_title_REAR}]`);
        }}>
          <img className="btn_image" src={light_3_fb_REAR ? lightOn : lightOff} alt={light_3_title_REAR} />
          <p>{light_3_title_REAR}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_4_join_REAR, true);
          window.CrComLib.publishEvent("b", light_4_join_REAR, false);
          console.log(`Triggered join [${light_4_join_REAR}] coming from [${light_4_title_REAR}]`);
        }}>
          <img className="btn_image" src={light_4_fb_REAR ? lightOn : lightOff} alt={light_4_title_REAR} />
          <p>{light_4_title_REAR}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_5_join_REAR, true);
          window.CrComLib.publishEvent("b", light_5_join_REAR, false);
          console.log(`Triggered join [${light_5_join_REAR}] coming from [${light_5_title_REAR}]`);
        }}>
          <img className="btn_image" src={light_5_fb_REAR ? lightOn : lightOff} alt={light_5_title_REAR} />
          <p>{light_5_title_REAR}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_6_join_REAR, true);
          window.CrComLib.publishEvent("b", light_6_join_REAR, false);
          console.log(`Triggered join [${light_6_join_REAR}] coming from [${light_6_title_REAR}]`);
        }}>
          <img className="btn_image" src={light_6_fb_REAR ? lightOn : lightOff} alt={light_6_title_REAR} />
          <p>{light_6_title_REAR}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_7_join_REAR, true);
          window.CrComLib.publishEvent("b", light_7_join_REAR, false);
          console.log(`Triggered join [${light_7_join_REAR}] coming from [${light_7_title_REAR}]`);
        }}>
          <img className="btn_image" src={light_7_fb_REAR ? lightOn : lightOff} alt={light_7_title_REAR} />
          <p>{light_7_title_REAR}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_8_join_REAR, true);
          window.CrComLib.publishEvent("b", light_8_join_REAR, false);
          console.log(`Triggered join [${light_8_join_REAR}] coming from [${light_8_title_REAR}]`);
        }}>
          <img className="btn_image" src={light_8_fb_REAR ? lightOn : lightOff} alt={light_8_title_REAR} />
          <p>{light_8_title_REAR}</p>
        </button>
        <button className="btn_square" onClick={() => {
          window.CrComLib.publishEvent("b", light_9_join_REAR, true);
          window.CrComLib.publishEvent("b", light_9_join_REAR, false);
          console.log(`Triggered join [${light_9_join_REAR}] coming from [${light_9_title_REAR}]`);
        }}>
          <img className="btn_image" src={light_9_fb_REAR ? lightOn : lightOff} alt={light_9_title_REAR} />
          <p>{light_9_title_REAR}</p>
        </button>
      </div>
    </>
       
    )


        const currentFloor = (id:string) => {
            if (id === "main"){
                setUpStairs(false)
                setMain(true)
                setOutDoors(false)
              } 

            else if (id === "up"){
                setUpStairs(true)
                setMain(false)
                setOutDoors(false)
            }   

            else if (id === "out"){
              setUpStairs(false)
              setMain(false)
              setOutDoors(true)
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
              }else if (id === "zone_13"){
          

                setZone_13(true)
                setZone_14(false)
                setZone_15(false)
              }else if (id === "zone_14"){
               

                setZone_13(false)
                setZone_14(true)
                setZone_15(false)
              }else if (id === "zone_15"){

                setZone_13(false)
                setZone_14(false)
                setZone_15(true)
              }
            
          }
      



    return(

    <div className="light_dashboard">

        
        

            <div className="room_back_corner">
              <Link to={"/"}> 
                    <button className="back_button">
                        <img src={menu_button}/>
                    </button>
                </Link>

            </div>
          



        <div className="nav_container">
            <div className="nav">
                <button onClick={() => ( currentFloor("up"))}    className={upStairs?   "btn_selected" : "btn_not_selected"}>      <p> 2nd Floor</p>     </button>
                <button onClick={() => (currentFloor("main"))}  className={main? "btn_selected" : "btn_not_selected"}>            <p> 1st Floor </p>         </button>
                <button onClick={() => (currentFloor("out"))}  className={outDoors? "btn_selected" : "btn_not_selected"}>            <p> Out Door </p>         </button>
            </div>
        </div>


      
        
    


            <h1 className="title_info" id ="display_none"> Light Dashboard</h1>
                
                
                
                <div className="light_map_container">
                    
                
                   {main?    
                    <>
                        <div className={map1}> 
                            <img className="floor_1_img" src={floor1}/>
                            <button className="btn_location_1" onClick={()=>(lightMenu("openMap1"),  lightZone("zone_1"))}>  Z1  </button>
                            <button className="btn_location_2" onClick={()=>(lightMenu("openMap1"),  lightZone("zone_2"))}>  Z2  </button>
                            <button className="btn_location_3" onClick={()=>(lightMenu("openMap1"),  lightZone("zone_3"))}>  Z3  </button>
                            <button className="btn_location_4" onClick={()=>(lightMenu("openMap1"),  lightZone("zone_4"))}>  Z4  </button>
                            <button className="btn_location_5" onClick={()=>(lightMenu("openMap1"),  lightZone("zone_5"))}>  Z5  </button>
                            <button className="btn_location_6" onClick={()=>(lightMenu("openMap1"),  lightZone("zone_6"))}>  Z6  </button>
                            <button className="btn_location_7" onClick={()=>(lightMenu("openMap1"),  lightZone("zone_7"))}>  Z7  </button>
                            <button className="btn_location_8" onClick={()=>(lightMenu("openMap1"),  lightZone("zone_8"))}>  Z8  </button>
                            <button className="btn_location_9" onClick={()=>(lightMenu("openMap1"),  lightZone("zone_9"))}>  Z9  </button>
                            <button className="btn_location_10" onClick={()=>(lightMenu("openMap1"), lightZone("zone_10"))}> Z10 </button>
                            <button className="btn_location_11" onClick={()=>(lightMenu("openMap1"), lightZone("zone_11"))}> Z11 </button>
                            <button className="btn_location_12" onClick={()=>(lightMenu("openMap1"), lightZone("zone_12"))}> Z12 </button>
                          
                        </div> 

                        <div className={lightMenuDisplay}>

                            <div className="close_menu_btn">
                                <img className="btn_image" onClick={()=>lightMenu("closeMap1")} src={close}/>
                            </div>
                            



                            {zone_1? lightZone_BAR : <></>}
                            {zone_2? lightZone_BILLIARD_ROOM: <></>}
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
                          








                        </div>

                        
                        
                    </>
                    : <></>}

                   {upStairs?     
                    <>
                            <div className={map2}> 
                                <img className="floor_2_img" src={floor2}/>
                                <button className="btn_location_13" onClick={()=>(lightMenu("openMap2"),  lightZone("zone_13"))}>  Z13  </button>
                                <button className="btn_location_14" onClick={()=>(lightMenu("openMap2"),  lightZone("zone_14"))}>  Z14  </button>
                                <button className="btn_location_15" onClick={()=>(lightMenu("openMap2"),  lightZone("zone_15"))}>  Z14  </button>

                               
                              
                            </div> 

                            <div className={lightMenuDisplay2}>

                                <div className="close_menu_btn">
                                    <img className="btn_image" onClick={()=>lightMenu("closeMap2")} src={close}/>
                                </div>
                                



                                {zone_13? lightZone_HALL : <></>}
                                {zone_14? lightZone_MEDIA_ROOM: <></>}
                                {zone_15? lightZone_SOUTH_STAIRS : <></>}
                           
                              
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

          



                <div className="landscape_warning">
                <h1> Please rotate your device back to portrait mode. </h1>
                <img src={portraitMode}  />
        </div>

        </div>

    )

}


export default LightDashboard