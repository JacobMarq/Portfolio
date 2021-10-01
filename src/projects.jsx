import React from 'react';
import BlogPicOne from './img/Blog/article-show.png';
import BlogPicTwo from './img/Blog/home.png';
import BlogPicThree from './img/Blog/user-profile.png';
import BlogPicFour from './img/Blog/responsive.png';
import JSCalcPicOne from './img/JavaScript Calculator/main.png';
import RPSPicOne from './img/rock-paper-scissors/analytics.png';
import RPSPicTwo from './img/rock-paper-scissors/Round.png';
import RPSPicThree from './img/rock-paper-scissors/lose.png';
import GOLPicOne from "./img/John Conway's Game of Life/Game.png";
import GOLPicTwo from "./img/John Conway's Game of Life/Result.png";
import GitHubLogo from "./img/Icons/GitHub-Mark-32px.png"
import GlobeIcon from "./img/Icons/globe.svg"
import './App.css';

class Projects extends React.Component {
    componentDidMount(){
        const blogCarousel = document.getElementsByClassName("blog");
        const rpsCarousel = document.getElementsByClassName("rps");
        const golCarousel = document.getElementsByClassName("gol");
        const BlogCard = document.getElementById("BlogCard");
        const RPSCard = document.getElementById("RPSCard");
        const GOLCard = document.getElementById("GOLCard");
        const loop_timer = ms => new Promise(res => setTimeout(res, ms));
        // let hover_cancelled = false;
        // let long_press_cancelled = false;
        
        async function shiftCarousel(carousel) {
            for ( let i = 0; i <= carousel.length; i++ ){
                if (i == carousel.length) {
                    i = 0;
                }
                carousel[i].classList.remove("show");
                carousel[(i + 1) % carousel.length].classList.add("show");
                // if (hover_cancelled || long_press_cancelled){
                //     break;
                // }
                await loop_timer(2000);
            }
            // hover_cancelled = false;
            // long_press_cancelled = false;
        }
        
        // function onLongPress(element, callback) {
        //     let timer;
          
        //     element.addEventListener('touchstart', () => { 
        //       timer = setTimeout(() => {
        //         timer = null;
        //         callback();
        //       }, 500);
        //     });
          
        //     function cancel() {
        //       long_press_cancelled = true;
        //       clearTimeout(timer);
        //     }
          
        //     element.addEventListener('touchend', cancel);
        //     element.addEventListener('touchmove', cancel);
        // }

        // function onHover(element, callback) {
        //     let timer;
          
        //     element.addEventListener('mouseenter', () => { 
        //       hover_cancelled = false;
        //       timer = setTimeout(() => {
        //         timer = null;
        //         callback();
        //       }, 500);
        //     });
          
        //     function cancel() {
        //       hover_cancelled = true;
        //       clearTimeout(timer);
        //     }
          
        //     element.addEventListener('mouseleave', cancel);
        // }

        shiftCarousel(blogCarousel);
        shiftCarousel(rpsCarousel);
        shiftCarousel(golCarousel);

        // onHover(BlogCard, ()=>shiftCarousel(blogCarousel));
        // onHover(RPSCard, ()=>shiftCarousel(rpsCarousel));
        // onHover(GOLCard, ()=>shiftCarousel(golCarousel));
        // onLongPress(BlogCard, ()=>shiftCarousel(blogCarousel));
        // onLongPress(RPSCard, ()=>shiftCarousel(rpsCarousel));
        // onLongPress(GOLCard, ()=>shiftCarousel(golCarousel));
    }
    
    render() {
        function openCard(e) {
            if (e.currentTarget.classList.contains('closed-card')){
                e.currentTarget.classList.remove('closed-card');
                e.currentTarget.classList.add('open-card');
            }
            else {
                e.currentTarget.classList.remove('open-card');
                e.currentTarget.classList.add('closed-card');
            }
        }

        return (
            <div className="container projects">
                <h1 className="contact-header mt-5p mb-5p">Projects</h1>

                <div className="d-flex flex-column flex-jc-center mb-5p">
                    
                    <h2 className="color-white text-center">The-Blog-Spot</h2>
                    <div id="BlogCard" className="project-card closed-card" onClick={(e) => openCard(e)}>
                        <div className="d-flex flex-column project-context">
                            <p className="ml-25p mt-10 h-75 project-desc">
                                A responsive blog app, with
                                a focus on community, where
                                users can show their appreciation
                                or disagreement for other users 
                                content by liking, disliking,
                                favoriting, and following. 
                            </p>
                            <div className="d-flex flex-row flex-jc-space-between mt-auto project-card-footer">
                                <div className="d-flex flex-row mt-auto">
                                    <a href="https://the-blog-spot.herokuapp.com/" className="ml-10 mb-5 project-link" style={{background: `url(${GlobeIcon}) no-repeat`, backgroundSize: '100% 100%'}}></a>
                                    <a href="https://github.com/JacobMarq/Blog" className="ml-10 mb-5 project-link" style={{background: `url(${GitHubLogo}) no-repeat`, backgroundSize: '100% 100%'}}></a>
                                </div>
                                <div className="d-flex flex-row project-tools w-65 mt-auto ml-10">
                                    <p className="mb-10">Heroku</p>
                                    <p className="ml-10 mb-10">Html</p>
                                    <p className="ml-10 mb-10">CSS</p>
                                    <p className="ml-10 mb-10">JavaScript</p>
                                    <p className="ml-10 mb-10">Ruby</p>
                                    <p className="ml-10 mr-10 mb-10">Rails</p>
                                </div>
                            </div>
                        </div>

                        <div className="show blog one flex-column project-pic" style={{background: `url(${BlogPicOne}) no-repeat`, backgroundSize: '100% 100%'}}></div>
                        <div className="blog two flex-column project-pic" style={{background: `url(${BlogPicTwo}) no-repeat`, backgroundSize: '100% 100%'}}></div>
                        <div className="blog three flex-column project-pic" style={{background: `url(${BlogPicThree}) no-repeat`, backgroundSize: '100% 100%'}}></div>
                        <div className="blog four flex-column project-pic" style={{background: `url(${BlogPicFour}) no-repeat`, backgroundSize: '100% 100%'}}></div>
                    </div>

                    <h2 className="color-white text-center">JavaScript Calculator</h2>
                    <div id="CalcCard" className="project-card closed-card" onClick={(e) => openCard(e)}>
                        <div className="d-flex flex-column project-context">
                            <p className="ml-25p mt-10 h-75 project-desc">
                                A JavaScript calculator based around the
                                functionality of the standard
                                Window's calculator. Also, featuring 
                                a history/memory tab and keyboard
                                functionality.
                            </p>
                            <div className="d-flex flex-row flex-jc-space-between mt-auto project-card-footer">
                                <div className="d-flex flex-row mt-auto">
                                    <a href="https://jacobmarq.github.io/Calculator/" className="ml-10 mb-5 project-link" style={{background: `url(${GlobeIcon}) no-repeat`, backgroundSize: '100% 100%'}}></a>
                                    <a href="https://github.com/JacobMarq/Calculator" className="ml-10 mb-5 project-link" style={{background: `url(${GitHubLogo}) no-repeat`, backgroundSize: '100% 100%'}}></a>
                                </div>
                                <div className="d-flex flex-row project-tools w-65 mt-auto ml-10">
                                    <p className="mb-10">Html</p>
                                    <p className="ml-10 mb-10">CSS</p>
                                    <p className="ml-10 mr-10 mb-10">JavaScript</p>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column project-pic show" style={{background: `url(${JSCalcPicOne}) no-repeat`, backgroundSize: '100% 100%'}}></div>
                    </div>

                    <h2 className="color-white text-center">Rock-Paper-Scissors</h2>
                    <div id="RPSCard" className="project-card closed-card" onClick={(e) => openCard(e)}>
                        <div className="d-flex flex-column project-context">
                            <p className="ml-25p mt-10 h-75 project-desc">
                                Play as your local school 
                                nerd against a 
                                Netflix-teen-sized School 
                                Bully in a heated match of 
                                Rock, Paper, Scissors.
                                <br />
                                <br />
                                This game will keep track 
                                of you and your opponents 
                                moves and their respective 
                                outcomes as well as increase 
                                or decrease in difficulty 
                                depending on how you're doing.
                            </p>
                            <div className="d-flex flex-row flex-jc-space-between mt-auto project-card-footer">
                                <div className="d-flex flex-row mt-auto">
                                    <a href="https://jacobmarq.github.io/Rock-Paper-Scissors/" className="ml-10 mb-5 project-link" style={{background: `url(${GlobeIcon}) no-repeat`, backgroundSize: '100% 100%'}}></a>
                                    <a href="https://github.com/JacobMarq/Rock-Paper-Scissors" className="ml-10 mb-5 project-link" style={{background: `url(${GitHubLogo}) no-repeat`, backgroundSize: '100% 100%'}}></a>
                                </div>
                                <div className="d-flex flex-row project-tools w-65 mt-auto ml-10">
                                    <p className="mb-10">Html</p>
                                    <p className="ml-10 mb-10">CSS</p>
                                    <p className="ml-10 mr-10 mb-10">JavaScript</p>
                                </div>
                            </div>
                        </div>

                        <div className="show rps one flex-column project-pic" style={{background: `url(${RPSPicOne}) no-repeat`, backgroundSize: '100% 100%'}}></div>
                        <div className="rps two flex-column project-pic" style={{background: `url(${RPSPicTwo}) no-repeat`, backgroundSize: '100% 100%'}}></div>
                        <div className="rps three flex-column project-pic" style={{background: `url(${RPSPicThree}) no-repeat`, backgroundSize: '100% 100%'}}></div>
                    </div>

                    <h2 className="color-white text-center">John Conway's Game of Life</h2>
                    <div id="GOLCard" className="project-card closed-card" onClick={(e) => openCard(e)}>
                        <div className="d-flex flex-column project-context">
                            <p className="ml-25p mt-10 h-75 project-desc">
                                A simple demonstration of John 
                                Conway's Game of Life where 
                                if a cell has too many or 
                                too little living neighbors 
                                it will die. Game end will 
                                display a report of your
                                games results.
                            </p>
                            <div className="d-flex flex-row flex-jc-space-between mt-auto project-card-footer">
                                <div className="d-flex flex-row mt-auto ">
                                    <a href="https://jacobmarq.github.io/Game-of-Life/" className="ml-10 mb-5 project-link" style={{background: `url(${GlobeIcon}) no-repeat`, backgroundSize: '100% 100%'}}></a>
                                    <a href="https://github.com/JacobMarq/Game-of-Life" className="ml-10 mb-5 project-link" style={{background: `url(${GitHubLogo}) no-repeat`, backgroundSize: '100% 100%'}}></a>
                                </div>
                                <div className="d-flex flex-row project-tools w-65 mt-auto ml-10">
                                    <p className="ml-10 mb-10">Html</p>
                                    <p className="ml-10 mb-10">CSS</p>
                                    <p className="ml-10 mr-10 mb-10">JavaScript</p>
                                </div>
                            </div>
                        </div>

                        <div className="show gol one flex-column project-pic" style={{background: `url(${GOLPicOne}) no-repeat`, backgroundSize: '100% 100%'}}></div>
                        <div className="gol two flex-column project-pic" style={{background: `url(${GOLPicTwo}) no-repeat`, backgroundSize: '100% 100%'}}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;