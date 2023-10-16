import './Filterbar.css';
import React, { useRef, useState } from "react";
// import { Scrollbars } from 'react-custom-scrollbars-2';
import { pgLanguagesList } from '../../../pglanguages';
import FilterButton from './FilterButton/FilterButton';

const Filterbar = props => {
    const [isScrolling, setIsScrolling] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollX, setScrollX] = useState(0);
    const divRef = useRef();
  
    const handleMouseDown = (e) => {
      setIsScrolling(true);
      setStartX(e.pageX - divRef.current.offsetLeft);
      setScrollX(divRef.current.scrollLeft);
    };
  
    const handleMouseEnter = (e) => {
      e.preventDefault();
    };
  
    const handleMouseUp = () => {
      setIsScrolling(false);
    };
  
    const handleMouseMove = (e) => {
      if (!isScrolling) return;
      const x = e.pageX - divRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      divRef.current.scrollLeft = scrollX - walk;
    };

    return (
        <div className='table'>
            {/*<Scrollbars
                className='scroll-shadow'
                ref={scrollRef}
                onWheel={handleWheel}
                style={{height: 130}}
                renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
                renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
                thumbSize={100}>*/}
            <div className='scroll-shadow'
                ref={divRef}
                onMouseDown={handleMouseDown}
                onMouseEnter={handleMouseEnter}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp}
                style={{ overflowX: "auto", whiteSpace: "nowrap", width: "100%", cursor: "grab" }}
            >
                <ul className='horizontal-list'>
                    {pgLanguagesList.map((pgLanguage, index) => {
                        return <li key={index}><FilterButton pgLanguage={pgLanguage} buttonClass={props.filterValues.includes(pgLanguage.identifier)?"pglanguage active":"pglanguage"} click={props.click}/></li>;
                    })}
                </ul>
            </div>
            {/*</Scrollbars>*/}
        </div>
    );
};

export default Filterbar;