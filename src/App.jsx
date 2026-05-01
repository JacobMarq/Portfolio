import './App.css';
import 'animate.css/animate.min.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { ScrollProvider } from './context/ScrollContext';

const App = () => {
  const sectionIds = ["home", "work", "about", "contact"];

  return (
    <div className='App'>
      <ScrollProvider sectionIds={sectionIds}>
        <div className='shade'/>
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
              <ProjectsContainer />
              <About />
              <Contact />
            </Route>
            <Route path="/work">
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
      </ScrollProvider>
    </div>
  );
}

export default App;
