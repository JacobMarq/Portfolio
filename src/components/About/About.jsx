import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './About.css';
import Pdf from '../../documents/JacobMarquez.pdf';

class About extends React.Component {
    render() {
        const viewResume = () => {
            window.open(Pdf)
        }

        return (
            <div className="container">
                <AnimationOnScroll 
                  animateIn='animate__fadeInDown' 
                  animateOnce={true}
                  initiallyVisible={window.innerWidth <= 700 ? true : false}>
                    <div className="d-flex flex-jc-center flex-column w-auto about-wrapper mt-10p mb-10p">
                        <h1 className="about-quote p-10 mb-0 default-cursor">
                            "...<span>PASSION</span> IS THE KEY THAT OPENS THE DOOR TO <span>JOY</span> AND <span>ABUNDANCE</span>."
                        </h1>
                        <p className="ml-auto mr-10p about-cite mt-0 default-cursor">
                            - David Cuschieri
                        </p>
                    </div>
                </AnimationOnScroll>
                
                <div className="d-flex w-auto">
                    <button onClick={viewResume} className="unselectable view-resume-btn center p-15" label='Resume'>
                        View Resume/CV
                    </button>
                </div>

                <div className='about-desc-container mt-10p mb-5p'>
                    <AnimationOnScroll 
                      className='about-question' 
                      animateIn='animate__slideInLeft' 
                      animateOnce={true}>
                        <h2 className='about-h2'>
                            Who am I?
                        </h2>
                    </AnimationOnScroll>

                    <AnimationOnScroll 
                      className='about-desc' 
                      animateIn='animate__slideInRight'
                      animateOnce={true}>
                        <p className="about-p default-cursor unselectable">
                            My name is Jacob Marquez, I am a Software Developer @ IMS Integrations
                            with 4+ years of Full Stack experience. I build 
                            <span> elegant</span> and <span>efficient </span> 
                            applications. I have a thorough understanding
                            of <span>Software Design Patterns</span> and finding the right tool for the job.
                            
                            My primary experience is with technologies such as <span>React</span>, <span>React Native</span>, <span>AngularJS</span>, <span>Ruby on Rails</span>, <span>Maven</span>, <span>Java</span>, <span>Python</span>, and <span>MySQL</span>.
                            
                            I am also familiar with Automation, AI, and Machine Learning through personal projects and experience at University.
                        </p>
                    </AnimationOnScroll>
                </div>

                <div className='about-desc-container mb-5p'>
                    <AnimationOnScroll 
                      className='about-question' 
                      animateIn='animate__slideInLeft' 
                      animateOnce={true}>
                        <h2 className='about-h2'>
                            Skills
                        </h2>
                    </AnimationOnScroll>

                    <AnimationOnScroll 
                      className='about-desc' 
                      animateIn='animate__slideInRight'
                      animateOnce={true}>
                        <h3>Front-end</h3>
                        <p className="about-p default-cursor unselectable">
                            My experience with Front-end development has
                            been primarily focused around JavaScript and TypeScript,
                            using React with Redux, React Native, and AngularJS.
                        </p>
                        <br />

                        <h3>Back-end</h3>
                        <p className="about-p default-cursor unselectable">
                            My expertise for back end languages is with Ruby, Java, and Python
                            with some additional experience in PHP from an Intership at Smarttwigs.
                            The frameworks I've developed with are Rails, Django, Maven, and Laravel.
                            Database languages I use are MySQL, PostgreSQL, IBMDb2, SOQL, and SQLite.
                        </p>
                        <br />
                        
                        <h3>General Knowledge</h3>
                        <p className="about-p default-cursor unselectable">
                            I've designed and developed REST APIs. I am familiar with
                            3rd party APIs, WebSockets, Webhooks, and SDK integration. 
                            I also have implemented analytical tools for data virtualization,
                            and visualization for business needs. At my current position I've
                            built a suite of automation tools to aid in improving developer
                            efficiency reducing maintainence time for our support team.
                        </p>
                    </AnimationOnScroll>
                </div>

                <div className='about-desc-container mb-5p'>
                    <AnimationOnScroll 
                      className='about-question' 
                      animateIn='animate__slideInLeft' 
                      animateOnce={true}>
                        <h2 className='about-h2'>
                            Current Goals
                        </h2>
                    </AnimationOnScroll>

                    <AnimationOnScroll 
                      className='about-desc' 
                      animateIn='animate__slideInRight'
                      animateOnce={true}>
                        <p className="about-p default-cursor unselectable">
                            My current progress goals include
                            expanding my existing knowledge of Full Stack development
                            and getting a better hold on Ai and Machine Learning. Over the past
                            4 years I've become proficient at developing and maintaing applications
                            from Front to back however, there is always more to learn and improve on.
                            I take pride in my work but am always open to other perspectives and constructive feedback.
                        </p>
                    </AnimationOnScroll>
                </div>
            </div>
        );
    }
}

export default About;