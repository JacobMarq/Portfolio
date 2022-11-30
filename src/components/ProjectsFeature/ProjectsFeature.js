import react from "react";
import './ProjectsFeature.css';
import GitHubLogo from "../../img/Icons/GitHub-Mark-32px.png";
import GlobeIcon from "../../img/Icons/globe.svg";
import { Scrollbars } from 'react-custom-scrollbars-2';

function ProjectsFeature(props) {
    const { project, toggleDetailedView } = props;

    return (
        <>
            <div className="featured-container mb-25">
                <h3 className="project-name ml-10 text-center">{project.name}</h3>

                <div className="d-flex flex-row">
                    <div className="featured-img-desktop-wrapper">
                        <img className="featured-img" src={project.images[0].url} />
                    </div>
                    <div className="featured-img-mobile-wrapper">
                        <img className="featured-img" src={project.featuredProjectImg} />
                    </div>
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
                    <button onClick={toggleDetailedView} className="mb-25 project-details-btn center">
                        View project details
                    </button> }
                </div>


                <div className="d-flex flex-column project-context mb-25">
                    <div className="d-flex flex-row flex-jc-space-between mt-auto featured-tool-bar mb-25"> 
                        
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

                    <Scrollbars
                        style={{ height: 100 }}
                        hideTracksWhenNotNeeded={true}
                        renderThumbVertical={props => <div {...props} className='thumb'/>}
                        autoHideTimeout={0}
                        autoHideDuration={25}>
                        <p className="mt-10 w-80 project-desc">
                            {project.description}
                        </p>
                    </Scrollbars>
                </div>
            </div>
        </>
    );
}

export default ProjectsFeature;