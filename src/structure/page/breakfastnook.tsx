//React

//React Router

import {useNavigate} from "react-router-dom"

// CSS
import "../../assets/css/page_css/genericRoom.css"

// Icons
import backbutton from "../../assets/images/icons/icons8-arrow.svg";


const BreakfastNook =() =>{
 const roomName = "Breakfast Nook"

    const navigate = useNavigate()

    return(

        <div className="generic_room">
           
                <button className="back_button" onClick={() => navigate(-1)}>
                    <img src={backbutton} />
                </button>
         
                
                <p>{roomName}</p>


        </div>
    )
    
            
}

export default BreakfastNook