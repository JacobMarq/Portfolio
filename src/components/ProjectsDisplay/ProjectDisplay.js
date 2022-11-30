import React, { useState, useEffect, useRef } from "react";
import GitHubLogo from "../../img/Icons/GitHub-Mark-32px.png";
import GlobeIcon from "../../img/Icons/globe.svg";
import './ProjectDisplay.css';
import { Scrollbars } from 'react-custom-scrollbars-2';

const ProjectPicDefaultClasses = " flex-column project-pic";
const ProjectPicShow = " show flex-column project-pic"

const ProjectDisplay = props => {
    const _intervalRef = useRef(null);
    const [activeImageIndex, setIndex] = useState(0);
    const [hovered, setHovered] = useState(false);

    const { project } = props;

    //check if image is hovered
    //use a counter ranged from 0 to the length of a project image array
    //use the counter number to determine which image is active by index
    useEffect(() => {
        if (hovered) {
                _intervalRef.current = setInterval(() => {
                setIndex(activeImageIndex => (activeImageIndex + 1) % project.images.length);
            }, 1000);
        } else {
            clearInterval(_intervalRef.current);
        }
        return() => clearInterval(_intervalRef.current);
    },[hovered, project.images.length]);

    return (
        <div className="d-flex flex-column flex-jc-center mb-5p">
        
            <h3 className="project-name ml-10">{project.name}</h3>

            <div className="project-container">
                <div className="project-column-left">
                    <div
                        onMouseOver={() => setHovered(true)}
                        onMouseOut={() => setHovered(false)}
                        className='project-img-wrapper'>
                        {project.images.map((image, key) => 
                            <div key={key}
                                className={key === activeImageIndex ? project.reference + " " + image.id + ProjectPicShow : project.reference + " " + image.id + ProjectPicDefaultClasses} 
                                style={{background: `url(${image.url}) no-repeat`, backgroundSize: '100% 100%'}}>
                            </div>
                        )}
                    </div>
                    
                    <div className="d-flex flex-row mt-5p">  
                        { (project.link || project.github) ? <>
                            <a target={project.link === "" ? "_self" : "_blank"}
                                rel='noreferrer'
                                href={project.link === "" ? "/" : project.link}
                                className="ml-10 mb-5 project-link"
                                style={{background: `url(${project.link === "" ? "" : GlobeIcon}) no-repeat`, backgroundSize: '100% 100%'}}>
                                view app
                            </a>
                            
                            <a target={project.github === "" ? "_self" : "_blank"}
                                rel='noreferrer'
                                href={project.github === "" ? "/" : project.github}
                                className="ml-10 mb-5 project-link"
                                style={{background: `url(${project.github === "" ? "" : GitHubLogo}) no-repeat`, backgroundSize: '100% 100%'}}>
                                view repo
                            </a>
                        </>
                        :
                        <button className="mb-10 project-details-btn">
                            View project details
                        </button> }
                    </div>
                </div>

                <div className="project-column-right">
                    <div className="d-flex flex-column project-context">
                        
                        <Scrollbars
                            style={{ height: 200 }}
                            hideTracksWhenNotNeeded={true}
                            renderThumbVertical={props => <div {...props} className='thumb'/>}
                            autoHideTimeout={0}
                            autoHideDuration={25}>
                            <p className="mt-10 h-75 project-desc">
                                {project.description}
                            </p>
                        </Scrollbars>
                        
                        <div className="d-flex flex-row flex-jc-space-between mt-auto project-card-footer"> 
                            
                            <Scrollbars
                                style={{height: 50}}
                                renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
                                renderThumbHorizontal={props => <div {...props} className="thumb"/>}
                                thumbSize={100}>
                                <div className="d-flex flex-row project-tools w-65 mt-auto ml-10">
                                    {project.technologies.map((tech, key) => 
                                        <p key={key} className="ml-10 mr-10 mb-10 unselectable">{tech}</p>
                                    )}
                                </div>
                            </Scrollbars>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDisplay;