import './ProjectShowcase.css';
import ProjectTechnologyBar from '../ProjectTechnologyBar/ProjectTechnologyBar';

function ProjectShowcase(props) {
    const { project, toggleDetailedView } = props;

    return (
        <div className="featured-container pb-20 mb-15">
            <div className='featured-text-wrapper mr-auto'>
                <p className="featured-project-eyebrow mb-20 mt-0"><span>// FEATURED CASE STUDY </span></p>
                <h1 className="section-title mb-15 mt-0">{project.name}</h1>
                <p className="mt-0 mb-0 project-desc">{project.description}</p>
                <ProjectTechnologyBar displayLogo={true} projectName={project.name} technologies={project.technologies}/> 
                {project.type === "Featured" ?
                <div className="d-flex flex-row mr-auto">
                    <button className="primary-btn" id={project.id} onClick={toggleDetailedView}>View Case Study</button>
                    {project.link !== "" ?
                    <a target="_blank" rel='noreferrer' href={project.link} className='secondary-btn ml-5p'>Visit Site ➜ </a> :
                    (project.github !== "" ? 
                    <a target="_blank" rel='noreferrer' href={project.github} className='secondary-btn ml-5p'>Visit Repo ➜ </a> :
                    <></> )}
                </div>
                :
                <div className="d-flex flex-row mr-auto">
                    {project.link !== "" ?
                    <a target="_blank" rel='noreferrer' href={project.link} className='primary-btn ml-0'>View Application</a> :
                    (project.github !== "" ? 
                    <a target="_blank" rel='noreferrer' href={project.github} className='primary-btn ml-0'>View Repository</a> :
                    <button className="secondary-btn disabled">Currently Unavailable</button> )}
                    {(project.link !== "" && project.github !== "" ? 
                    <a target="_blank" rel='noreferrer' href={project.github} className='secondary-btn ml-5p'>Visit Repo ➜ </a> :
                    <></> )}
                </div>}
            </div>
            <div className="ml-auto mr-auto featured-img-desktop-wrapper">
                <img className="featured-img fi-desktop" src={project.images[0].url} alt='featured project desktop view'/>
            </div>
        </div>
    );
}

export default ProjectShowcase;