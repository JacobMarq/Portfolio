import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './About.css';
import Pdf from '../../documents/JacobMarquez.pdf';
import StyledDownButton from '../ButtonComponent/StyledDownButton/StyledDownButton.jsx';
import AboutImg from '../../img/About-Img/Non-Selfie-Sq.JPG'
import SocialsBar from '../SocialsBar/SocialsBar.jsx';

const About = () => {
  const viewResume = () => {
    window.open(Pdf)
  }

  return (
    <div id='about' className="container">
      <div className='about-content'>
        <AnimationOnScroll 
          className='about-text-container'
          animateIn='animate__fadeInRight'
          animateOnce={true}
        >
          <h1 className="section-title default-cursor mb-0 mt-0">
            Hi, my name is Jacob!
          </h1>
          <br/>
          <div className='about-desc'>
            <p className='default-cursor'>
              Software Developer at <span>IMS Integration</span> with 4+ years of experience building scalable systems in the fintech space. I work at the intersection of high-security legacy platforms and engineering the modern solutions that replace them.
              <br/>
              <br/>
               My work includes modernizing legacy systems and architectures, developing APIs and workflow automation tools, and building data reporting systems that support high-volume financial operations. I focus on reducing technical debt while improving system performance and user experience.
              <br/>
              <br/>
              I’ve collaborated directly with stakeholders across <span>100+ credit unions</span>, contributing to systems that process <span>millions of documents annually</span>.
              <br/>
              <br/>
            </p>
            <p className='core-stack-header'>Core Stack:</p>
            <p className='core-stack-list'>Java • TypeScript • Python • SQL • React • Angular</p>
            <br/>
            <button onClick={viewResume} className="unselectable primary-btn mr-auto" label='Resume'>
              View Resume
            </button>
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