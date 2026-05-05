import './ProjectsDetailedView.css';
import DetailedSection from "./DetailedSection/DetailedSection";
import DetailedSeparator from "./DetailedSeparator/DetailedSeparator";
import { useScroll } from '../../context/ScrollContext.js';

function ProjectDetailedView(props) {
    const { project, toggleDetailedView } = props;
    const { scrollToSection } = useScroll();
    const handleBackButton = (e) => {
        toggleDetailedView(e);
        scrollToSection('work');
    }

    if (!project) {
        return <div>{"I'm sorry, an error has occured :("}</div>;
    }

    return (
        <div className="detailed-container">
            <div className="d-flex flex-column mt-10">
                <button id="0" className="back-btn secondary-btn" onClick={handleBackButton}>
                    Back to Projects Catalog ↩
                </button>
                <h1 className='detailed-header ml-auto mr-auto'>{project.name}</h1>
            </div>
            <img className='mt-5p mb-25 project-banner-img' src={project.mainImg} alt='main project banner'/>
            { project.body.sections.map((section, index) => {
                return(
                    <div key={index}>
                        <DetailedSeparator index={index} length={project.body.sections.length} section={section}/>
                        <DetailedSection index={index} length={project.body.sections.length} section={section}/>
                    </div>
                );
            })}
            <button id="0" className="back-btn secondary-btn" onClick={handleBackButton}>
                Back to Projects Catalog ↩
            </button>
        </div>
    );
}

export default ProjectDetailedView;