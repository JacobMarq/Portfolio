import './ProjectTechnologyBar.css';
import { Scrollbars } from 'react-custom-scrollbars-2';

function ProjectTechnologyBar(props) {
    const { displayLogo, projectName, technologies } = props;

    const technologiesList = (displayLogo ? technologies : technologies.slice(0,3));

    return (
        <div id='technologyBar' className={"d-flex flex-row project-technologies " + (displayLogo?'mt-15 mb-10':'mt-5 mb-5')}>
            {technologiesList.map((tech, key) =>
                <div key={projectName + key} className='ml-0 card card-inner'>
                    <div className='d-flex flex-row align-items-center technology'>
                        {displayLogo ?
                        <img className='technology-icon' src={tech.image} alt={tech.identifier + " logo"}/>
                        :
                        <></>
                        }
                        <p className={'technology-label mb-10 ' + (displayLogo ? 'ml-10 mr-10' : 'ml-0 mr-0 w-maxc')}>{tech.identifier}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectTechnologyBar;