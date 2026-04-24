import './Home.css';
import React from 'react';
import WireframeDove3 from '../../img/HomeComponentImages/Wireframe_Dove_Blend_3.png';
import WireframeLandscape from '../../img/HomeComponentImages/Wireframe_Landscape_Blend.png';
import HomeSubText from './HomeSubText/HomeSubText.js';
import StyledDownButton from '../ButtonComponent/StyledDownButton/StyledDownButton.jsx';

const Home = () => {
  return (
    <div id="home" className='mb-5p'>
      <header className="App-header"> 
        <h1 className="home-hook default-cursor">
          FROM CONCEPT <br/> TO REALITY
        </h1>

        <HomeSubText/>
        <StyledDownButton/>
        <img src={WireframeDove3} className="wf-dove" alt='wf-dove'/>
        <img src={WireframeLandscape} className='wf-ls' alt='wf-ls'/>
      </header>
    </div>
  );
}

export default Home;