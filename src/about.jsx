import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class About extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="d-flex flex-jc-center flex-column w-auto about-wrapper mt-10p mb-10p">
                    <h1 className="about-quote p-10 mb-0 default-cursor">
                        "...<span>PASSION</span> IS THE <span>KEY</span> THAT OPENS THE DOOR TO <span>JOY</span> AND <span>ABUNDANCE</span>."
                    </h1>
                    <p className="ml-auto mr-10p about-cite mt-0 default-cursor">
                        - David Cuschieri
                    </p>
                </div>
                
                <h2 className="about-desc mt-10p mb-5p default-cursor unselectable">
                    I build <span>elegant</span> and <span>efficient</span> applications. I'm experienced in <span>front</span> and <span>back-end web development</span> with a <span>passion</span> for the type of work that I do.
                </h2>
                
                <div className="d-flex w-auto">
                    <Link to="/projects" className="unselectable primary-neon-btn center p-10 about-desc mb-5p ">
                        View Projects
                    </Link>
                </div>
            </div>
        );
    }
}

export default About;