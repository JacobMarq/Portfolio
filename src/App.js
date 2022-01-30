import React from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import Contact from './components/contact/contact';
import About from './components/about/about';
import ProjectsDisplay from './components/projectsdisplay/projectsdisplay';
import Home from './components/home/home';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav>
            <ul id="navigation" className="navbar">
              <li className="nav-logo">
                Jacob's Portfolio
              </li>
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
          </Route>
          <Route path="/projects">
            <ProjectsDisplay />
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
