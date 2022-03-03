import './DropDownMenu.css';
import React from 'react';
import { Link } from 'react-router-dom';

const DropDownMenu = props => {
    let menuClasses = ['dropdown-menu-wrapper'];

    if(props.show) {
        menuClasses = ['dropdown-menu-wrapper', ' active'];
    }
    return (
        <div className={menuClasses.join('')}>
            <ul className='dropdown-menu'>
                <li>
                    <Link to="/" onClick={props.click}>Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={props.click}>About</Link>
                </li>
                <li>
                    <Link to="/projects" onClick={props.click}>Projects</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={props.click}>Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default DropDownMenu;