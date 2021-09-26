import React from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import Projects from './projects';
import Home from './home';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav>
            <ul id="navigation" className="navbar">
              <li>
                <NavLink exact to="/" activeClassName="nav-link--active" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="nav-link--active" className="nav-link">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" activeClassName="nav-link--active" className="nav-link">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="nav-link--active" className="nav-link">
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
            <Projects />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
