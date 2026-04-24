import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Backdrop from './Backdrop/Backdrop';
import BurgerButton from './BurgerButton/BurgerButton';
import DropDownMenu from './DropDownMenu/DropDownMenu';
import ListLinkItems from './ListLinkItems/ListLinkItems';
import './Navbar.css';

const Navbar = () => {
    const [navMenuActive, setNavMenuActive] = useState(false);

    const navMenuClickHandler = () => {
        setNavMenuActive(prevState => {
        const body = document.getElementById('body');

        if(prevState)
            body.classList.remove('non-scrollable');
        else
            body.classList.add('non-scrollable');

        return !prevState;
        });
    }
    
    return (
      <div className='sticky-nav'>
        <nav>
          <ul id="navigation" className="navbar">
            <NavLink exact to="/" className="nav-logo">
              <h1 className="nav-hook m-0 no-pe main-3d-sm">
                  Jacob Marquez
              </h1>
              <p className="nav-text m-0 no-pe">
                  Software Developer
              </p>
            </NavLink>
            <BurgerButton click={navMenuClickHandler} active={navMenuActive} />

            <ListLinkItems baseClass={'nav-link'}/>
          </ul>
        </nav>
        
        <DropDownMenu click={navMenuClickHandler} show={navMenuActive} />
        <Backdrop click={navMenuClickHandler} show={navMenuActive} />
      </div>
    )
}

export default Navbar;