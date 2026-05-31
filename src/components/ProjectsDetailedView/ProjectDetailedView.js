import './ProjectsDetailedView.css';
import DetailedSection from "./DetailedSection/DetailedSection";
import DetailedSeparator from "./DetailedSeparator/DetailedSeparator";
import { useScroll } from '../../context/ScrollContext.js';
import Accordion from '../Accordion/Accordion.jsx';
import { useState } from 'react';

function ProjectDetailedView(props) {
    const { project, toggleDetailedView } = props;
    const { scrollToSection } = useScroll();
    const [activeTab, setActiveTab] = useState(null);
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
            <div id={project.name + " pointer"}></div>
            <DetailedSection index={1} length={1} section={project.introduction}/>
            { project.body.sections.map((section, index) => {
                return(
                    <Accordion
                        // "Enterprise Systems & Legacy Modernization" 
                        key={section.header}
                        title={section.header}
                        subtitle={section.subtitle}
                        isOpen={activeTab === index}
                        returnPointer={project.name + " pointer"}
                        onToggle={() =>
                            setActiveTab(
                                activeTab === index
                                    ? null
                                    : index
                            )
                        }
                    >
                        {/* <DetailedSeparator index={index} length={project.body.sections.length} section={section}/> */}
                        <DetailedSection key={section.header} index={index} length={project.body.sections.length} section={section}/>
                    </Accordion>
                );
            })}
            <br/>
            <br/>
            <button id="0" className="back-btn secondary-btn" onClick={handleBackButton}>
                Back to Projects Catalog ↩
            </button>
        </div>
    );
}

export default ProjectDetailedView;