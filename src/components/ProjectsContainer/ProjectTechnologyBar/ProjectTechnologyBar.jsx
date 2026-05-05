import './ProjectTechnologyBar.css';
import { Scrollbars } from 'react-custom-scrollbars-2';

function ProjectTechnologyBar(props) {
    const { displayLogo, projectName, technologies } = props;

    return (
        <Scrollbars
            className={displayLogo?'mt-25 mb-20':'mt-5 mb-5'}
            style={displayLogo?{height: 60}:{height: 40}}
            renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
            renderThumbHorizontal={props => <div {...props} className="thumb"/>}
            thumbSize={50}>
            <div className="d-flex flex-row project-tools mt-auto">
                {technologies.map((tech, key) =>
                    <div key={projectName + key} className='card card-inner'>
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
        </Scrollbars>
    );
}

export default ProjectTechnologyBar;