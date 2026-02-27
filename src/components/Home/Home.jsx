import './Home.css';
import React from 'react';
// import PurpleSky6 from '../../img/PurpleSky10.png';
// import RightCloudsPurple from '../../img/HomeComponentImages/Large-Clouds-Purple-Right.png';
// import RightCloudsBlue from '../../img/HomeComponentImages/Large-Clouds-Blue-Right.png';
// import RightCloudsPink from '../../img/HomeComponentImages/Large-Clouds-Pink-Right.png';
// import LeftCloudsPink from '../../img/HomeComponentImages/Small-Clouds-Pink-Left.png';
// import LeftCloudsBlue from '../../img/HomeComponentImages/Small-Clouds-Blue-Left.png';
import BirdPNG from '../../img/HomeComponentImages/Bird.png';
// import { Link } from 'react-router-dom';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
// import Pdf from '../../documents/JacobMarquez.pdf';
import HomeLayeredClouds from './HomeLayeredClouds/HomeLayeredClouds';
// import TypingAnim from '../TextComponents/TypingAnim/TypingAnim.jsx';
import HomeSubText from './HomeSubText/HomeSubText.js';
import StyledDownButton from '../ButtonComponent/StyledDownButton/StyledDownButton.jsx';

class Home extends React.Component {
  render() {
    // const viewResume = () => {
    //     window.open(Pdf)
    // }

    return (
        <div>
        {/*<div style={{ background: `url(${PurpleSky6}) no-repeat top center`, backgroundSize: "100% 100%" }}>*/}
            {/* <header className="App-header d-flex flex-center-content" /*style={{ background: `url(${background}) no-repeat left top fixed`, backgroundSize: "cover" }}/> */}
            <header className="App-header"> 
                <h1 className="home-hook default-cursor">
                  FROM CONCEPT <br/> TO REALITY
                </h1>
                {/*
                <h1 className="home-hook main-3d-sm default-cursor">
                  FROM CONCEPT <br/> TO REALITY
                </h1>
                */}
                <HomeSubText/>
                {/*<p className="home-text-muted default-cursor">
                  //WEB DEVELOPMENT
                </p>*/}
                <img src={BirdPNG} className="bird" alt='bird'/>
                <HomeLayeredClouds/>
                <StyledDownButton/>
                {/*
                <AnimationOnScroll
                  className="cloud-layered d-block w-100 flex-center-content flex-column"
                  animateIn='animate__slideInLeft'
                  animateOut='animate__slideOutLeft'
                  initiallyVisible={window.innerWidth <= 700 ? true : false}>  
                    <img src={LeftCloudsBlue} className="cloud-left-blue"/>
                    <img src={LeftCloudsPink} className="cloud-left-pink"/>
                </AnimationOnScroll>
                <AnimationOnScroll
                  className="cloud-layered d-block w-100 flex-center-content flex-column"
                  animateIn='animate__slideInRight'
                  animateOut='animate__slideOutRight'
                  initiallyVisible={window.innerWidth <= 700 ? true : false}>  
                    <img src={RightCloudsPurple} className="cloud-right-purple"/>
                    <img src={RightCloudsBlue} className="cloud-right-blue"/>
                    <img src={RightCloudsPink} className="cloud-right-pink"/>
                </AnimationOnScroll>
                */}
                {/*<AnimationOnScroll 
                  className="home-wrapper d-flex flex-center-content flex-column"
                  animateIn='animate__slideInLeft'
                  animateOut='animate__slideOutLeft'
                  initiallyVisible={window.innerWidth <= 700 ? true : false}>
                    <h1 className="home-hook main-3d-sm default-cursor">
                        FROM CONCEPT <br/> TO REALITY
                    </h1>
                    <p className="home-text-muted mt-5 mb-0 default-cursor">
                        // Full Stack web development
                    </p>
                    <p className="default-cursor text-center intro-text">
                        Discover the innovative world of a professional software developer. 
                        <br/> 
                        Explore my portfolio for cutting-edge solutions and transformative digital experiences.
                    </p>
                    { eslint-disable-next-line }
                    <p className="home-text-muted mt-5 mb-0 default-cursor">
                        // Full Stack web development
                    </p>
                    <div className="d-flex flex-row">
                        <Link to="/about" className="unselectable mt-12-5p mb-5 mr-5 primary-btn">
                            View My Portfolio
                        </Link>
                        <Link to="/contact" className="unselectable mt-12-5p mb-5 ml-5 tertiary-btn">
                            Contact Me
                        </Link>
                    </div>
                </AnimationOnScroll>*/}
            </header>
        </div>
        );
    }
}

export default Home;