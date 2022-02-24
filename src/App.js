import React from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer';
import Home from './components/Home/Home';
import './App.css';
import 'animate.css/animate.min.css';

class App extends React.Component {
  state = {
    menuActive: false,
    burgerActive: false,
    backdropActive: false,
  };

  menuClickHandler = () => {
    this.setState(prevState => {
      return { menuActive: !prevState.menuActive,
                burgerActive: !prevState.burgerActive,
                backdropActive: !prevState.backdropActive }
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <nav>
            <ul id="navigation" className="navbar">
              <NavLink exact to="/" className="nav-logo">
                Jacob's Portfolio
              </NavLink>

              <li>
                <NavLink exact to="/" activeClassName="active" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active" className="nav-link">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" activeClassName="active" className="nav-link">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
            <About />
            <ProjectsContainer />
            <Contact />
          </Route>
          <Route path="/projects">
            <ProjectsContainer />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
