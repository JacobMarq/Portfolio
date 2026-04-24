import './DropDownMenu.css';
import React from 'react';
import ListLinkItems from '../ListLinkItems/ListLinkItems';

const DropDownMenu = props => {
    let menuClasses = ['dropdown-menu-wrapper'];

    if(props.show) {
        menuClasses = ['dropdown-menu-wrapper', ' active'];
    }
    return (
        <div className={menuClasses.join('')}>
            <ul className='dropdown-menu'>
                <ListLinkItems/>
            </ul>
        </div>
    );
};

export default DropDownMenu;