import './BurgerButton.css'
import React from 'react'; 

const BurgerButton = props => {
    let burgerClasses = ['burger'];

    if(props.active) {
        burgerClasses = ['burger', ' active']
    }

    return(
    <div className={burgerClasses.join('')} aria-label='burger-button' onClick={props.click}>
        <span />
    </div>
)};

export default BurgerButton;