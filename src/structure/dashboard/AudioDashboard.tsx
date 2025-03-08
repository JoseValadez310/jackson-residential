import React, { useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import "../../assets/css/dashboard_css/Audio_Dashboard.css";
import CryptoJS from "crypto-js"

import play from "../../assets/images/icons/icons8-play.svg";
//import pasue from "../../assets/images/icons/icons8-pause.svg";
import repeat from "../../assets/images/icons/icons8-replay.svg";
import shuffle from "../../assets/images/icons/icons8-shuffle.svg";
import skip from '../../assets/images/icons/icons8-fast-forward.svg';
//import musicIcon from "../../assets/images/icons/icons8-music (1).svg";
//import close from "../../assets/images/icons/icons8-x.svg";
import backbutton from "../../assets/images/icons/icons8-arrow.svg";
//import topmenu from "../../assets/images/icons/icons8-top-menu.svg";
//import menu from "../../assets/images/icons/icons8-menu.svg"
//import arrow from "../../assets/images/icons/icons8-triangle-arrow.svg"
//import MuteIcon from "../../assets/images/icons/icons8-no-audio.svg"

// Streaming services
//import amazonMusic from "../../assets/images/logos/streaming_services_logos/Amazon_Music_(Logo).svg"
//import deezer from "../../assets/images/logos/streaming_services_logos/Deezer_logo,_2023.svg"
//import iheart from "../../assets/images/logos/streaming_services_logos/IHeartRadio_logo.svg"
//import liveOne from "../../assets/images/logos/streaming_services_logos/LVO_BIG.svg"
//import murfie from "../../assets/images/logos/streaming_services_logos/murfie-magenta-logo.png"
//import pandora from "../../assets/images/logos/streaming_services_logos/Pandora_wordmark.svg"
//import siriusXM from "../../assets/images/logos/streaming_services_logos/Sirius_XM_logo_2023.svg"
//import soundMachine from "../../assets/images/logos/streaming_services_logos/idM17aNGAN_logos.svg"
//import spotify from "../../assets/images/logos/streaming_services_logos/2024_Spotify_Logo.svg"
//import tidal from "../../assets/images/logos/streaming_services_logos/tidal.svg"
//import tuneIn from "../../assets/images/logos/streaming_services_logos/TuneIn_Logo_2018.svg"

//import power from "../../assets/images/icons/icons8-power.svg"


import portraitMode from "../../assets/images/icons/icons8-iphone-16-pro.svg"










const MediaServerWebSocket: React.FC  = () => {


  const httpMethod = "GET";
  const httpUri = "wss://192.168.1.198/subscriptionmgr";
  const clientID = "bb473582-371c-437a-8e9b-59850ab181db";
  const clientSecret = "DJQgiW5GWHmfX3hdmP+wo13LlN0TS8dKNts24Ci/7fc=";
  
  function getSignature(clientId: string, timeStamp: number, nonce: string): string {
    // Create the signature string by concatenating values
    const signatureString = clientId + httpMethod + httpUri + timeStamp + nonce;
    
    // Parse the clientSecret from base64 into a CryptoJS word array
    const secret = CryptoJS.enc.Base64.parse(clientSecret);
    
    // Generate HMAC using SHA256 and convert it back to a base64 encoded string
    const hmac = CryptoJS.HmacSHA256(signatureString, secret);
    const hmacBase64 = CryptoJS.enc.Base64.stringify(hmac);
    
    return hmacBase64;
  }
  
  function getAuthHeader(): string {
    // Generate a nonce using the browser's crypto API (supported in modern browsers)
    const nonce = window.crypto.randomUUID();
    
    // Get the current timestamp (in seconds)
    const timeStamp = Math.floor(Date.now() / 1000);
    
    // Generate the signature using the provided parameters
    const signature = getSignature(clientID, timeStamp, nonce);
    
    // Create the client info string and encode it in base64 using btoa
    const clientInfo = `${clientID}:${signature}:${nonce}:${timeStamp}`;
    const crestronAuth = `CrestronAuth-SHA256 ${btoa(clientInfo)}`;
    
    console.log("Authorization:", crestronAuth);
    return crestronAuth;
  }
  

    useEffect(() => {
      // Call the function on component mount
      getAuthHeader();
    }, []);

  
   

    const navigate = useNavigate()

    




 

  return (
   
      <div className='audio_dashboard'>


          
    <div className="audio_back_button" onClick={() => navigate(-1)}> 
        <button className="audio_back">
            <img src={backbutton}/>
        </button>
    </div> 
        
    
  
        <div className='streaming_service_logo'>
       
        </div>

        <div className='background_image'>
        
        </div>

        <div className='status_info'>
         
        </div>

        <div className='album_art'>
        
        </div>

        <div className='album_info'>
          <p className='album_info_title'>'Unknown'</p>
          <p className='album_info_artist'>'Unknown</p>
          <p className='album_info_album'>'Unknown'</p>
        </div>

        <div className='playback_controls'>
          <button 
          
            className='btn_circle'
          >
            <img className='btn_image' src={shuffle} alt="shuffle" />
          </button>
          <button className='btn_circle'>
            <img  className='btn_image' src={skip} style={{transform:'rotate(180deg)'}} alt="previous" />
          </button>
          <button  className='btn_circle'>
            <img 
             className='btn_image'
              src={play} 
              alt="play/pause" 
            />
          </button>
          <button  className='btn_circle'>
            <img className='btn_image' src={skip} alt="next" />
          </button>
          <button 
           
            className='btn_circle'
          >
            <img className='btn_image' src={repeat} alt="repeat" style={{transform:"scaleX(-1)"}}/>
          </button>
        </div>

        <div className="progress_bar">
          <p className='current_postition'></p>
          <input
            type="range"
            min="0"
           
            style={{
              borderRadius: '15px',
              background: `linear-gradient(to right, rgb(85, 83, 83) 0%, rgb(207, 241, 231) 1%, #e0e0e0 10%, #e0e0e0 100%)`
            }}
          />
          <p className='end_postition'></p> 
        </div>

        <div className='music_button_container'>
          <button 
            className="home_button" 
           
          >
           
          </button>
        </div>

        <div className='browser_container'>
         
        </div>

        <div className="volume_controls">
          <button 
          
            className='btn_circle'
          >
            <p style={{fontSize:"16px"}}>Mute</p>
          </button>




          
        </div>

      

      




    <div className="landscape_warning">
                <h1> Please rotate your device back to portrait mode. </h1>
                <img src={portraitMode}  />
    </div>
 

 

 </div>
  );
};

export default MediaServerWebSocket;
