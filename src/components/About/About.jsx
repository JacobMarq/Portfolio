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
            <p className='default-cursor unselectable'>
              My name is <span>Jacob Marquez</span>, a Software Developer at <span>IMS Integration </span>
              with <span>4+ years of professional full-stack experience </span>
              and a <span>B.S. in Computer Science (Summa Cum Laude)</span>. 
              I specialize in building <span>elegant, secure, and efficient applications </span>
              by solving high-stakes technical debt and operational bottlenecks.
              <br/>
              <br/>
              I thrive on finding the right tool for the job, 
              whether it’s <span>modernizing enterprise financial systems </span>
              from legacy frameworks to <span>AngularJS</span>, 
              or building responsive front-ends in <span>React and React Native</span>.  
              My work is grounded in a deep understanding of <span>software design patterns </span>
              and a commitment to meaningful impact.
              <br/>
              <br/>
              Core Stack: Java, TypeScript, Python, Ruby, SQL, React, and Ruby on Rails.
            </p>
          </div>
          <br/>
          <button onClick={viewResume} className="unselectable view-resume-btn center p-15" label='Resume'>
            View Resume/CV
          </button>
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