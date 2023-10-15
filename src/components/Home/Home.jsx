import './Home.css';
import React from 'react';
import background from '../../img/homebackground.jpg';
import { Link } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';

class Home extends React.Component {
  render() {
    return (
        <div>
            <header className="App-header" style={{ background: `url(${background}) no-repeat left top fixed`, backgroundSize: "cover" }}>
                <AnimationOnScroll 
                  className="home-wrapper"
                  animateIn='animate__slideInLeft'
                  animateOut='animate__slideOutLeft'
                  initiallyVisible={window.innerWidth <= 700 ? true : false}>
                    <h1 className="home-name m-0 default-cursor unselectable">
                        Jacob Marquez
                    </h1>
                    <p className="home-text m-0 default-cursor unselectable">
                        Software Developer
                    </p>
                    {/* eslint-disable-next-line */}
                    <p className="home-text-muted mt-5 mb-0 default-cursor">
                        // Full Stack web development
                    </p>
                    <div className="d-inline-flex">
                        <Link to="/about" className="unselectable mr-10 mt-25 primary-btn">
                            Learn More
                        </Link>
                        <Link to="/contact" className="unselectable ml-10 mt-25 secondary-btn">
                            Contact Me
                        </Link>
                    </div>
                </AnimationOnScroll>
            </header>
        </div>
        );
    }
}

export default Home;