import './App.css';
import React from 'react';
import background from './homebackground.jpg'
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    const image = window.innerWidth >= 650 ? background : null;

    return (
        <div className="App">
            <header className="App-header" style={{ background: `url(${image}) no-repeat center left fixed`, backgroundSize: "cover" }}>
                <h1 className="home-name m-0">
                    Jacob Marquez
                </h1>
                <p className="home-text m-0">
                    Web Developer
                </p>
                <p className="home-text-muted mt-5 mb-0">
                    Full Stack Developer
                </p>
                <div className="d-inline-flex">
                    <Link to="/about" className="mr-10 mt-25 primary-neon-btn">
                        Learn More
                    </Link>
                    <Link to="/contact" className="ml-10 mt-25 secondary-btn">
                        Contact Me
                    </Link>
                </div>
            </header>
        </div>
        );
    }
}

export default Home;