import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <div className="container">
                <AnimationOnScroll 
                  animateIn='animate__fadeInDown' 
                  animateOnce={true}
                  initiallyVisible={true}>
                    <div className="d-flex flex-jc-center flex-column w-auto about-wrapper mt-10p mb-10p">
                        <h1 className="about-quote p-10 mb-0 default-cursor">
                            "...<span>PASSION</span> IS THE KEY THAT OPENS THE DOOR TO <span>JOY</span> AND <span>ABUNDANCE</span>."
                        </h1>
                        <p className="ml-auto mr-10p about-cite mt-0 default-cursor">
                            - David Cuschieri
                        </p>
                    </div>
                </AnimationOnScroll>;
                
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
                            My name is Jacob Marquez, I build 
                            <span> elegant</span> and <span>efficient </span> 
                            applications. I'm experienced in 
                            <span> Front</span> and <span>
                            Back-end web development </span> 
                            with a <span>passion </span> 
                            for the type of work that I do.
                        </p>
                    </AnimationOnScroll>
                </div>

                <div className='about-desc-container mb-5p'>
                    <AnimationOnScroll 
                      className='about-question' 
                      animateIn='animate__slideInLeft' 
                      animateOnce={true}>
                        <h2 className='about-h2'>
                            Current Skills
                        </h2>
                    </AnimationOnScroll>

                    <AnimationOnScroll 
                      className='about-desc' 
                      animateIn='animate__slideInRight'
                      animateOnce={true}>
                        <p className="about-p default-cursor unselectable">
                            My experience with Front-end development has
                            been centered around React. Starting with the
                            standard HTML, CSS, and JavaScript my goal is 
                            to keep my code clean, structed, and concise.
                            With React I began using only Standard Components,
                            and have since learned about Functional Components;
                            React Hooks such as useEffect, useState, useMemo,
                            and useRef; and managing global state with the 
                            help of Redux.
                        </p>
                        <br />

                        <p className="about-p default-cursor unselectable">
                            My Back-end language of choice is Ruby. The Rails
                            framework has proven to be intuitive and a pleasure
                            to work with. As a result my experience with
                            databases began with MySQL and SQLite through
                            focused learning. Upon further understanding Rails
                            and its production environment I took on learning
                            the nuance between SQLite and PostgreSQL. While Ruby
                            is my language of choice, I am always open to working
                            with whatever tools best fit the job at hand. 
                        </p>
                    </AnimationOnScroll>
                </div>

                <div className='about-desc-container mb-5p'>
                    <AnimationOnScroll 
                      className='about-question' 
                      animateIn='animate__slideInLeft' 
                      animateOnce={true}>
                        <h2 className='about-h2'>
                            Progression Goals
                        </h2>
                    </AnimationOnScroll>

                    <AnimationOnScroll 
                      className='about-desc' 
                      animateIn='animate__slideInRight'
                      animateOnce={true}>
                        <p className="about-p default-cursor unselectable">
                            My current progression goals include
                            becoming more well rounded with React
                            and Redux, implementing SASS, tinkering
                            with a true Front-end Framework such as
                            Vue, and expanding my JavaScript 
                            knowledge by working with Node.js.
                        </p>
                    </AnimationOnScroll>
                </div>
                
                <div className="d-flex w-auto">
                    <Link to="/projects" id='view-projects-btn' className="unselectable primary-btn center p-10 mb-5p">
                        View Projects
                    </Link>
                </div>
            </div>
        );
    }
}

export default About;