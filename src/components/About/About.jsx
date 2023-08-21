import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';
import './About.css';
class About extends React.Component {
    render() {
        const viewResume = () => {
            window.open('https://drive.google.com/drive/folders/1HSE2ZuenJ2AvAGx91oOXywwQpzKWmqcM?usp=sharing')
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
                            My name is Jacob Marquez, I am a Software Developer @ IMS Integration
                            with 2+ years of Full Stack experience I build 
                            <span> elegant</span> and <span>efficient </span> 
                            applications. I'm experienced in 
                            <span> Front</span> and <span>
                            Back-end web development </span> 
                            with a <span>passion </span> 
                            for the type of work that I do. I am also familiar with
                            automation, AI, and Machine Learning.
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
                            The frameworks I've developed with are Rails, Django, Struts and Laravel.
                            Database languages I use are MySQL, PostgreSQL, and SQLite.
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
                            expanding my existing my existing knowledge of Full Stack development
                            and getting a better hold on Ai and Machine Learning. Over the past
                            2 years I've become proficient at developing and maintaing applications
                            from Front to back however, there is always more to learn.
                        </p>
                    </AnimationOnScroll>
                </div>
                
                <p className='text-center color-white mb-10'>- redirects to public Google Drive folder -</p>
                <div className="d-flex w-auto">
                    
                    <button onClick={viewResume} className="unselectable view-resume-btn center p-10 mb-5p">
                        View Resume/CV
                    </button>
                </div>
            </div>
        );
    }
}

export default About;