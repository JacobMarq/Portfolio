import './Home.css';
import React from 'react';
import WireframeDove3 from '../../img/HomeComponentImages/Wireframe_Dove_Blend_3.png';
import WireframeLandscape from '../../img/HomeComponentImages/Wireframe_Landscape_Blend.png';
import HomeSubText from './HomeSubText/HomeSubText.jsx';
import StyledDownButton from '../ButtonComponent/StyledDownButton/StyledDownButton.jsx';
import { useScroll } from '../../context/ScrollContext.js';

const Home = () => {
  const { scrollToSection } = useScroll();

  return (
    <div id="home" className='mb-5p'>
      <header className="app-header">
        <div className='home-text-wrapper'>
          <h1 className="home-hook default-cursor">
            FROM CONCEPT <br/> TO REALITY
          </h1>
          <HomeSubText/>
          <p className='home-stack-text'>Java • TypeScript • MySQL</p>
          <button className='ml-0 mr-auto primary-btn home-cta' onClick={() => scrollToSection('work')}>View Featured Work</button>
        </div>


        <StyledDownButton/>
        <img src={WireframeDove3} className="wf-dove" alt='wf-dove'/>
        <img src={WireframeLandscape} className='wf-ls' alt='wf-ls'/>
      </header>
    </div>
  );
}

export default Home;