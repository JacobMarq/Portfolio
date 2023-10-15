import './Filterbar.css';
import React from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { pgLanguagesList } from '../../../pglanguages';
import FilterButton from './FilterButton/FilterButton';

const Filterbar = props => {
    return (
        <div className='table'>
            <Scrollbars
                className='scroll-shadow'
                style={{height: 130}}
                renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
                renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
                thumbSize={100}>
                <ul className='horizontal-list'>
                    {pgLanguagesList.map((pgLanguage, index) => {
                        return <li key={index}><FilterButton pgLanguage={pgLanguage} buttonClass={props.filterValues.includes(pgLanguage.identifier)?"active":""} click={props.click}/></li>;
                    })};
                </ul>
            </Scrollbars>
        </div>
    );
};

export default Filterbar;