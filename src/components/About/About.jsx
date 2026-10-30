import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './About.css';
import Pdf from '../../documents/Jacob_Marquez_Resume.pdf';
import StyledDownButton from '../ButtonComponent/StyledDownButton/StyledDownButton.jsx';
import AboutImg from '../../img/About-Img/Non-Selfie-Sq.JPG'
import SocialsBar from '../SocialsBar/SocialsBar.jsx';
import { useScroll } from '../../context/ScrollContext.js';

const About = () => {
  const viewResume = () => {
    window.open(Pdf)
  }

  const { scrollToSection } = useScroll();

  return (
    <div id="home" className="container">
      <div className='about-content'>
        <AnimationOnScroll 
          className='about-text-container'
          animateIn='animate__fadeInRight'
          animateOnce={true}
        >
          <p className='home-stack-text'>Software | Systems | Automation</p>
          <h1 className="section-title default-cursor mb-0 mt-0">
            I build software that makes business workflows work better.
          </h1>
          <br/>
          <div className='about-desc'>
            <p className='default-cursor'>
              I'm a software engineer with 5 years of experience building and improving enterprise applications. At <a aria-label='IMS-Integrations-link' className='red-link'  href='https://web.imsintegration.com' target="_blank" rel="noopener noreferrer">IMS Integration</a>, I contributed to modernizing legacy systems and extending the backend logic, APIs, and integrations behind financial workflows used by credit unions.
              <br/>
              <br/>
              My work spans the layers of an application, from database queries and business rules to frontend behavior and system integrations. I focus on understanding how a system works, where it falls short, and how to improve it without disrupting the processes people depend on.
              <br/>
              <br/>
            </p>
            <div className="d-flex flex-row ml-0 mr-auto">
              <button className='ml-0 mr-5p mt-10 primary-btn home-cta' onClick={() => scrollToSection('work')}>View Featured Work</button>
              <button onClick={viewResume} className="ml-0 mr-auto mt-10 unselectable secondary-btn mr-auto" label='Resume'>
                View Resume
              </button>
            </div>
          </div>
        </AnimationOnScroll>

        <div className='about-image-container'>
          <img src={AboutImg} className="about-me-image" alt='about-me-image'/>
          <div>
            <SocialsBar/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;