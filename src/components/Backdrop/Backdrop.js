import './Backdrop.css';
import React from 'react';

const Backdrop = props => {
    let backdropClasses = ['backdrop'];

    if(props.show) {
        backdropClasses = ['backdrop', ' active']
    }

    return(
    <div className={backdropClasses.join('')} aria-label='backdrop' onClick={props.click}>
        <span />
    </div>
)};

export default Backdrop;