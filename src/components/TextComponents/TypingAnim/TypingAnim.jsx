import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types'; // To add type validation
import './TypingAnim.css';

const TypingAnim = ({ componentType, classNames, textValues, textPrefixValue, textSuffixValue, animationName, animationDuration}) => {
  const [text, setText] = useState(textValues[0]);
  const [textValuesIndex, setTextValuesIndex] = useState(0);
  const [animPlayDirection, setAnimPlayDirection] = useState('normal');
  const [animFillMode, setAnimFillMode] = useState('forwards');

  const handleAnimationEnd = (e) => {
    if (animPlayDirection.match('normal')) {
        e.target.style.animation = `typeHighlighted 1s 0s ${animFillMode} linear infinite`;
    } else if (animPlayDirection.match('reverse')) {
        e.target.style.animation = `typeHighlightedReversed 1s 0s ${animFillMode} linear infinite`;
    }
  };

  const updateTextValue = useCallback(() => {
    if (textValues.length < 1) {
        setText('');
        return;
    } else if (textValuesIndex < 0 || textValuesIndex > textValues.length) {
        return;
    }
    setText(textValues[textValuesIndex]);
  }, [textValues, textValuesIndex]);

  const incrementTextValuesIndex = useCallback(() => {
    if (textValues.length < 1) { return; }
    if (textValuesIndex >= (textValues.length - 1) || textValuesIndex < 0) {
        setTextValuesIndex(0);
    } else {
        setTextValuesIndex(textValuesIndex + 1);
    }
  }, [textValuesIndex, textValues.length]);

  const updateAnimFillMode = useCallback(() => {
    /*
        none	    No styles are retained after the animation finishes.
        forwards	The element retains the final keyframe styles after the animation ends.
        backwards	The element retains the initial keyframe styles before the animation starts.
        both	    The element retains the initial keyframe styles before the animation starts and the final keyframe styles after the animation ends.
    */
    if (animFillMode === 'both') {
        setAnimFillMode('forwards');
    } else if (animFillMode === 'forwards') {
        setAnimFillMode('both');
    } else {
        setAnimFillMode('forwards');
    }
  }, [animFillMode]);

  const updateAnimPlayDirection = useCallback(() => {
    if (animPlayDirection === 'normal') {
        setAnimPlayDirection('reverse');
    } else if (animPlayDirection === 'reverse') {
        setAnimPlayDirection('normal');
    } else {
        setAnimPlayDirection('normal');
    }
  }, [animPlayDirection]);

  useEffect(() => {
    const changeTextInterval = animationDuration * (text.length * 1.5) * 1000;

    const intervalId = setInterval(() => {
      if (animPlayDirection === 'normal') {
        updateAnimPlayDirection();
        updateAnimFillMode();
      } else {
        incrementTextValuesIndex();
        updateAnimPlayDirection();
        updateAnimFillMode();
      }
    }, changeTextInterval);
  
    // Cleanup the interval when the effect is cleaned up
    return () => clearInterval(intervalId);
  }, [  animPlayDirection,
        incrementTextValuesIndex,
        updateAnimFillMode, 
        updateAnimPlayDirection, 
        updateTextValue, 
        animationDuration, 
        text.length
  ]);
  
  useEffect(() => {
    updateTextValue();
  }, [textValuesIndex, updateTextValue]);

  /*
    animation rules for typing:
        - letters should highlight one at a time from left to right
        - while highlighted each letter is revealed
        - the final letter should be left blinking like a text carat
        - then letters should highlight right to left
        - last letter will hide first
        - first letter will be left blinking with no letter visible
        - then repeat for each value of textValues

    - blinking carat = '`typeHighlighted 1s ${index * animationDuration}s ${animFillMode} linear infinite`'
    - highlight = '`typing ${animationDuration}s ${index * animationDuration}s ${animPlayDirection} forwards`'
    - hidden final letter = '`hidden 1s ${index * animationDuration}s ${animFillMode} linear infinite`'
    - highlight reverse = '`typingReverse ${animationDuration}s ${(text.length - index) * animationDuration}s normal backwards`'
    - blinking carat reverse = '`typeHighlightedReversed 1s ${(text.length - index) * animationDuration}s reverse backwards linear infinite`'
  */

  const Component = (componentType || 'h1');
  const characters = text.split('');

  return (
    <div className='typing-anim-container'>
      {textPrefixValue? <Component className={`${classNames}`}>{textPrefixValue}</Component>:<></>}
      {characters.map((char, index) => (
        <Component
          id={`${text}-${index}`}
          key={`${text}-${index}`}
          className={`typing-character ${classNames}`}
          style={{ 'animation': `${animPlayDirection.match('normal') ?
                                `typing ${animationDuration}s ${index * animationDuration}s ${animPlayDirection} forwards` :
                                `typingReverse ${animationDuration}s ${(text.length - index) * animationDuration}s normal backwards`}`
                }}
          onAnimationEnd={ animPlayDirection.match('normal') ?
                            (text.length - 1 === index ? handleAnimationEnd : null) :
                            (index === 0 ? handleAnimationEnd : null) }
        >
          {char}
        </Component>
      ))}
      {textSuffixValue? <Component className={`${classNames}`}>{textSuffixValue}</Component>:<></>}
    </div>
  );
}

// Adding prop validation
TypingAnim.propTypes = {
  componentType: PropTypes.string,              // e.g., 'h1', 'p', etc.
  classNames: PropTypes.string,                 // Additional classes you want to add
  textPrefixValue: PropTypes.string,            // Unanimated Text placed before textValue, ComponentType
  textSuffixValue: PropTypes.string,            // Unanimated Text placed after textValue, ComponentType
  animationName: PropTypes.string,
  animationDuration: PropTypes.string,
  textValues: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TypingAnim;