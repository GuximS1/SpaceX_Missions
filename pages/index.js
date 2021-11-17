/* eslint-disable */
import React from 'react';
import Missions from '../components/missions';

function Home() {
  return (
  <div>
    <h1 style={{color:'white'}}>SpaceX Past Launches</h1>
   <div className='myCards'><Missions/></div> 
    </div>
  );
}


export default Home;