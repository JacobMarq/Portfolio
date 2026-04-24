import './StyledDownButton.css';
import React from 'react';
import Chevron from '../../../img/Icons/down-chevron-svgrepo-com.svg';
import Chevron2 from '../../../img/Icons/down-chevron-svgrepo-com (1).svg';
import { useScroll } from '../../../context/ScrollContext';

const Button = () => {
  const { scrollToSection } = useScroll();

  return (
    <button className='down-btn-container' onClick={() => scrollToSection('about')}>
      <div className='down-btn-dashed-cir'/>
      
      <div className='down-btn-solid-cir'/>
      <div className='down-btn-solid-cir-inner'/>

      <div className='down-btn-tri-container'>
        <img src={Chevron2} className='down-btn-chevron' alt='down-btn-chevron'/>
      </div>
    </button>
  );
};

export default Button;

