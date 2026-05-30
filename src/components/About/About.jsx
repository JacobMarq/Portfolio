import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './About.css';
import Pdf from '../../documents/Jacob_Marquez_Resume.pdf';
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
              Software Developer with 4+ years of experience building and maintaining enterprise software. At <span>IMS Integration</span>, I worked on onboarding systems, document-processing workflows, reporting platforms, and applications integrated with Corelation CORE environments used by credit unions across the United States.
              <br/>
              <br/>
              My work has included modernizing legacy applications, developing APIs and automation tools, and supporting production systems that process <span>millions of documents annually</span>.
              <br/>
              <br/>
              I’ve collaborated directly with stakeholders from <span>100+ credit unions</span> to improve operational workflows, reduce manual processes, and support day-to-day business operations.
              <br/>
              <br/>
            </p>
            <p className='core-stack-header mb-0'>Core Stack</p>
            <p className='core-stack-list mt-0'>Java • Angular • TypeScript • SQL</p>
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