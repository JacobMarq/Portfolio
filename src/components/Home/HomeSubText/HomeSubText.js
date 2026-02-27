import './HomeSubText.css';
import React from 'react';
import TypingAnim from '../../TextComponents/TypingAnim/TypingAnim.jsx';

const HomeSubText = () => {
  return (
    <TypingAnim componentType='span' 
        classNames='home-text-muted default-cursor' 
        textPrefixValue='//' 
        textSuffixValue='' 
        textValues={['WEB-DEVELOPMENT.','GAME-DEVELOPMENT.']}
        animationDuration={'0.1'}
    />
  );
}

export default HomeSubText;