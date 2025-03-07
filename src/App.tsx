import './assets/css/Index.css'
import 'animate.css';
import {useMemo} from 'react';
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
import StevesBath from './structure/page/upStairs/stevesbath';
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




// Tools
import ScreenSize from './structure/tools/ScreenSize';

       
     import imageBackground from "../src/assets/images/backgrounds/the-cleveland-museum-of-art-xylbmpHmZhM-unsplash.jpg"
        
     

   

function App() {

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
      path: '/stevesbath',
      element: <StevesBath />
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
      path: '/ellensexcercise',
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
  
  
  
  
  
  
  //---------------------------------------------
  
    
   
   
  
    //-------------------------------------- outdoors
  
    
  
    //------------------------------------ Tools
  
  
    {
      path: '/ScreenSize',
      element: <ScreenSize />
    },
  
  ])
  

  
  const webXPanelConfig = useMemo(() => ({
    ipId: '0x03',
    host: '0.0.0.0',
    roomId: '',
    authToken: ''
  }), []); // Dependencies array is empty, so this object is created only once

  useWebXPanel(webXPanelConfig);


  
  return (
    <div className='project_container'>
      <RouterProvider router={router} />
      <img className="imageApp" src={imageBackground} />
    </div>
  );
}

export default App
