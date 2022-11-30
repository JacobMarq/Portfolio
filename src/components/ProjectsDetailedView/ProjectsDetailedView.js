import react from "react";
import './ProjectsDetailedView.css';

function ProjectsDetailedView(props) {
    const { project, toggleDetailedView } = props;

    return (
        <div className="detailed-container">
            <div className="d-flex flex-row mt-10">
                <button className="back-btn secondary-btn" onClick={toggleDetailedView}>
                    Go Back
                </button>
                <h1 className='detailed-header ml-auto mr-auto'>{project.name}</h1>
            </div>
            <img className='mt-5p mb-25' src={project.mainImg}/>
            <div className="detailed-row mt-5p mb-5p">
                <div className="d-flex flex-column detailed-p">
                    <h2>What is {project.refName}?</h2>
                    <p className="color-white detailed-desc">{project.description}</p>
                </div>
                <img className="desc-img" src={project.descImg}/>
            </div>
            
            <span className="orb mt-5p"/>
            <span className="orb"/>
            <span className="orb mb-5p"/>

            <div className="detailed-row mt-5p mb-5p">
                <img className="body-img1" src={project.bodyImg1}/>
                <div className="d-flex flex-column detailed-p">
                    <h2>{project.header1}</h2>
                    <p className="color-white detailed-desc">{project.body1}</p>
                </div>
            </div>

            <span className="orb mt-5p"/>
            <span className="orb"/>
            <span className="orb mb-10p"/>

            <div className="detailed-row mt-10p mb-10p">
                <div className="d-flex flex-column detailed-p">
                    <h2>{project.header2}</h2>
                    <p className="color-white detailed-desc">{project.body2}</p>
                </div>
                <img className="body-img2" src={project.bodyImg2}/>
            </div>

            <span className="orb mt-10p"/>
            <span className="orb"/>
            <span className="orb mb-5p"/>

            <div className="detailed-row mt-5p mb-10p">
                <img className="body-img1" src={project.bodyImg3}/>
                <div className="d-flex flex-column detailed-p">
                    <h2>{project.header3}</h2>
                    <p className="color-white detailed-desc">{project.body3}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectsDetailedView;