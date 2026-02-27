import './HomeSubText.css';
import React from 'react';
import TypingAnim from '../TextComponents/TypingAnim/TypingAnim.jsx';

class HomeSubText extends React.Component {
  render() {
    return (
        <TypingAnim componentType='span' 
                    classNames='home-text-muted default-cursor' 
                    textPrefixValue='//' 
                    textSuffixValue='' 
                    textValue='WEB-DEVELOPMENT.'
        />
      );
  }
}

export default HomeSubText;