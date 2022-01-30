import './home.css';
import React from 'react';
import background from '../../img/homebackground.jpg';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
        <div className="App">
            <header className="App-header" style={{ background: `url(${background}) no-repeat center left fixed`, backgroundSize: "cover" }}>
                <div className="home-wrapper">
                    <h1 className="home-name m-0 default-cursor unselectable">
                        Jacob Marquez
                    </h1>
                    <p className="home-text m-0 default-cursor unselectable">
                        Software Developer
                    </p>
                    <p className="home-text-muted mt-5 mb-0 default-cursor">
                        | Full Stack Developer
                    </p>
                    <div className="d-inline-flex">
                        <Link to="/about" className="unselectable mr-10 mt-25 primary-btn">
                            Learn More
                        </Link>
                        <Link to="/contact" className="unselectable ml-10 mt-25 secondary-btn">
                            Contact Me
                        </Link>
                    </div>
                </div>
            </header>
        </div>
        );
    }
}

export default Home;