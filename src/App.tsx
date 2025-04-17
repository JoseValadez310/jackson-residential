import './assets/css/Index.css'
import 'animate.css';
import {useMemo, useState, useEffect} from 'react';
import useWebXPanel from './hooks/useWebXPanel';

import {createHashRouter, RouterProvider} from 'react-router-dom'

//css
import "../src/assets/css/index.css"


// Dashboard
import Home from './structure/dashboard/HomeDashboard';
import RoomsDashboard from './structure/dashboard/RoomDashboard';

import AudioDashboard from './structure/dashboard/AudioDashboard'

import LightDashboard from './structure/dashboard/LightDashboard'
import Climate  from './structure/dashboard/ClimateDashboard';
import Security from './structure/dashboard/SecurityDashboard'
import PoolSpa from './structure/dashboard/PoolSpaDashboard';

// Pages -------------------------------------------------------------------------

// upStairs
import MasterBedroom from './structure/page/upStairs/masterbedroom';
import GuestBedroom from './structure/page/upStairs/guestbedroom';
import GuestBathroom from "./structure/page/upStairs/guestbathroom"
import EllensOffice from './structure/page/upStairs/ellensoffice';
import EllensBath from './structure/page/upStairs/ellensbath';
import EllensExcercise from './structure/page/upStairs/ellensexcercise';
import Mediaroom from './structure/page/upStairs/mediaroom';


// main
import Breakfast from './structure/page/main/breakfast';
import DinningRoom from './structure/page/main/dinningroom';
import FamilyRoom from "./structure/page/main/FamilyRoom"
import GameRoom from './structure/page/main/gameroom';

// down stairs
import Arcade from './structure/page/downStairs/arcade';
import BasketBall from './structure/page/downStairs/basketBall'

// out Doors
import PoolPatio from "./structure/page/outDoors/poolpatio"


// Tools
import ScreenSize from './structure/tools/ScreenSize';
       
import imageBackground from "../src/assets/images/backgrounds/the-cleveland-museum-of-art-xylbmpHmZhM-unsplash.jpg"
        
     

   

function App() {


  
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
  
  

 

  const router = createHashRouter ([
    {
      path: '/',
      element: <Home />
    },
  
    // ------------------------------------ Dashboards
    {
      path: '/roomsDashboard',
      element: <RoomsDashboard />
    },

   
    
    {
      path: '/AudioDashboard',
      element: <AudioDashboard />
    },

   
    {
      path: '/LightDashboard',
      element: <LightDashboard />
    },
    {
      path: '/Climate',
      element: <Climate />
    },
    {
      path: '/Security',
      element: <Security />
    },
    {
      path: '/PoolSpa',
      element: <PoolSpa />
    },
    
    //------------------------------------ Second Floor
  
    {
      path: '/masterbedroom',
      element: <MasterBedroom />
    },
  
    {
      path: '/guestbedroom',
      element: <GuestBedroom />
    },

    {
      path: '/guestbathroom',
      element: <GuestBathroom />
    },
  
    {
      path: '/ellensoffice',
      element: <EllensOffice />
    },
  
    {
      path: '/ellensbath',
      element: <EllensBath />
    },
  
    {
      path: '/ellensexercise',
      element: <EllensExcercise />
    },
  
    {
      path: '/mediaroom',
      element: <Mediaroom />
    },
  
  
     //------------------------------------ Main Floor
    {
      path: '/breakfast',
      element: <Breakfast/>
    },
    {
      path: '/familyroom',
      element: <FamilyRoom />
    },
   
    {
      path: '/dinningroom',
      element: <DinningRoom />
    },
   
  
    {
      path: '/gameroom',
      element: <GameRoom />
    },
   
    
     //------------------------------------ Main Floor
     {
      path: '/arcade',
      element: <Arcade/>
      },

      {
        path: '/basketballcourt',
        element: <BasketBall/>
        },
  
  
  
  
  
  
  //---------------------------------------------
  
    
   
   
  
    //-------------------------------------- outdoors
    {
      path: '/poolpatio',
      element: <PoolPatio/>
      },
    
  
    //------------------------------------ Tools
  
  
    {
      path: '/ScreenSize',
      element: <ScreenSize />
    },
  
  ])
  

  
  const webXPanelConfig = useMemo(() => ({
    ipId: '31',
    host: '192.168.14.90',
    roomId: '',
    authToken: ''
  }), []); // Dependencies array is empty, so this object is created only once

  useWebXPanel(webXPanelConfig);


  
  return (
    <div className='project_container' id={screenSize.width > 1500? "xPanel":""}>
      <RouterProvider router={router} />
      <img className="imageApp" src={imageBackground} />
    </div>
  );
}

export default App
