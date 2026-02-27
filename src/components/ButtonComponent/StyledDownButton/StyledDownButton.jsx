import React from 'react';
import './StyledDownButton.css';

const Button = () => {
  const scrollPage = () => {
    // window.scrollBy(0, window.innerHeight); // Scroll down one screen height
    window.scrollBy({
        top: window.innerHeight, // Scroll by one screen height
        behavior: 'smooth'       // Make the scroll smooth
      });
  }

  return (
    // <div className='down-btn-container' style={containerStyle}>
    <div className='down-btn-container' onClick={scrollPage}>
      {/* Dashed Circle */}
      {/* <div className='down-btn-dashed-cir' style={dashedCircleStyle}></div> */}
      <div className='down-btn-dashed-cir'/>

      {/* Solid Circle */}
      {/* <div className='down-btn-solid-cir' style={solidCircleStyle}></div> */}
      <div className='down-btn-solid-cir'/>

      <div className='down-btn-solid-cir-inner'/>

      {/* Triangles */}
      {/* <div className='down-btn-tri' style={triangleStyle(105, 'red')}></div>
      <div className='down-btn-tri' style={triangleStyle(95, 'white')}></div>
      <div className='down-btn-tri' style={triangleStyle(60, 'red')}></div>
      <div className='down-btn-tri' style={triangleStyle(50,'white')}></div> */}
      <div className='down-btn-tri-container'>
        <div className='down-btn-tri'/>
        <div className='down-btn-tri'/>
        <div className='down-btn-tri'/>
        <div className='down-btn-tri'/>
      </div>
    </div>
  );
};

export default Button;

