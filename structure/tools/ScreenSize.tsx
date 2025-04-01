import { Link } from "react-router-dom"
import { useState, useEffect } from "react";



const ScreenSize = () =>{

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
  


    return (



        <div style={{height:"100vh",width:"100vw", display:"flex", justifyContent:"center",alignItems:"center",gap:"2rem", zIndex:"30"}}>


            <h1>{`Width: ${screenSize.width}, Height: ${screenSize.height}`}</h1>


            <button style={{height:"5rem", width:"5rem"}}> 
                <p style={{height:"100%", width:"100%"}}><Link to = {"/"} style={{height:"100%", width:"100%"}}> Exit Developer Menu</Link> </p>
            </button>

        </div>




    )
} 

export default ScreenSize