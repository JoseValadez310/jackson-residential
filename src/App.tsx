import './assets/css/Index.css'
import 'animate.css';
import {useMemo, useState} from 'react';
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

// Pages

import Mediaroom from './structure/page/mediaroom';
import Gym from './structure/page/gym';

import BreakfastNook from './structure/page/breakfastnook';
import FamilyRoom from './structure/page/FamilyRoom';
import Bar from './structure/page/bar'

import GameRoom from './structure/page/gameroom';
import MasterBedroom from './structure/page/masterbedroom';
import MasterBathroom from './structure/page/masterbathroom'
import Office from './structure/page/office';

//lights only 
import Backyard from './structure/page/backyard';
import DiningRoom from './structure/page/diningroom';
import Foyer from './structure/page/foyer';
import KidsRoom from './structure/page/kidsroom';
import LivingRoom from './structure/page/livingroom';
      
// Tools
import ScreenSize from './structure/tools/ScreenSize';

       
     import imageBackground from "../src/assets/images/backgrounds/the-cleveland-museum-of-art-xylbmpHmZhM-unsplash.jpg"
        
     

   

function App() {
  const [mute, setMute] = useState<string>("False");

  const router = createHashRouter ([
  {
    path: '/',
    element: <Home   />
  },

  // ------------------------------------ Dashboards
  {
    path: '/roomsDashboard',
    element: <RoomsDashboard />
  },
  {
    path: '/AudioDashboard',
    element: <AudioDashboard  mute={mute} setMute={setMute} />
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
   //------------------------------------ Basement Floor
  {
    path: '/mediaroom',
    element: <Mediaroom />
  },
  {
    path: '/gym',
    element: <Gym />
  },
   //------------------------------------ Main Floor
  {
    path: '/breakfastnook',
    element: <BreakfastNook />
  },
  {
    path: '/familyroom',
    element: <FamilyRoom />
  },
  {
    path: '/bar',
    element: <Bar />
  },
  {
    path: '/diningroom',
    element: <DiningRoom />
  },
  {
    path: '/foyer',
    element: <Foyer />
  }, {
    path: '/livingroom',
    element: <LivingRoom />
  },

  //------------------------------------ Second Floor
  {
    path: '/gameroom',
    element: <GameRoom />
  },
  {
    path: '/masterbedroom',
    element: <MasterBedroom />
  },
  {
    path: '/masterbathroom',
    element: <MasterBathroom />
  },
  {
    path: '/office',
    element: <Office />
  },
  {
    path: '/kidsroom',
    element: <KidsRoom />
  },

  //-------------------------------------- outdoors

    {
      path:'/backyard',
      element: <Backyard />
    },


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

  console.log(mute)

  
  return (
    <div className='project_container'>
      <RouterProvider router={router} />
      <img className="imageApp" src={imageBackground} />
    </div>
  );
}

export default App
