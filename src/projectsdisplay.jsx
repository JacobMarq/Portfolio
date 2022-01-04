import React from "react";
import BLOG from "./projects/Blog";
import BPAPI from "./projects/BPAPI";
import JSCALC from "./projects/JSCalc";
import SGCW from "./projects/SGCW";
import GitHubLogo from "./img/Icons/GitHub-Mark-32px.png";
import GlobeIcon from "./img/Icons/globe.svg";
import './App.css';

const Projects = [BLOG, BPAPI, JSCALC, SGCW];
const ProjectPicDefaultClasses = " flex-column project-pic";

class ProjectsDisplay extends React.Component {
    componentDidMount(){
        const CarouselOne = document.getElementsByClassName(Projects[0].reference);
        const CarouselTwo = document.getElementsByClassName(Projects[1].reference);
        const CarouselThree = document.getElementsByClassName(Projects[2].reference);
        const CarouselFour = document.getElementsByClassName(Projects[3].reference);

        const loop_timer = ms => new Promise(res => setTimeout(res, ms));

        async function shiftCarousel(carousel) {
            if (carousel.length === 1)
                carousel[0].classList.add("show");

            for ( let i = 0; i <= carousel.length; i++ ){
                if (i === carousel.length) {
                    i = 0;
                }
                carousel[i].classList.remove("show");
                carousel[(i + 1) % carousel.length].classList.add("show");
                await loop_timer(2000);
            }
        }
        
        shiftCarousel(CarouselOne);
        shiftCarousel(CarouselTwo);
        shiftCarousel(CarouselThree);
        shiftCarousel(CarouselFour);
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
                
                {Projects.map(project => 
                    <div key={project.id}>
                        <h2 className="color-white text-center">{project.name}</h2>
                        <div className="project-card closed-card" onClick={(e) => openCard(e)}>
                            <div className="d-flex flex-column project-context">
                                <p className="ml-25p mt-10 h-75 project-desc">
                                    {project.description}
                                </p>
                                <div className="d-flex flex-row flex-jc-space-between mt-auto project-card-footer">
                                    <div className="d-flex flex-row mt-auto">
                                        <a href={project.link === "" ? "/" : project.link} className="ml-10 mb-5 project-link" style={{background: `url(${project.link === "" ? "" : GlobeIcon}) no-repeat`, backgroundSize: '100% 100%'}}></a>
                                        <a href={project.github === "" ? "/" : project.github} className="ml-10 mb-5 project-link" style={{background: `url(${project.github === "" ? "" : GitHubLogo}) no-repeat`, backgroundSize: '100% 100%'}}></a>
                                    </div>
                                    <div className="d-flex flex-row project-tools w-65 mt-auto ml-10">
                                        {project.technologies.map((tech, key) => 
                                            <p key={key} className="ml-10 mr-10 mb-10">{tech}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            {project.images.map((image, key) => 
                                <div 
                                key={key}
                                className={project.reference + " " + image.id + ProjectPicDefaultClasses} 
                                style={{background: `url(${image.url}) no-repeat`, 
                                        backgroundSize: '100% 100%'}}>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                </div>
            </div>
        );
    };
};

export default ProjectsDisplay;