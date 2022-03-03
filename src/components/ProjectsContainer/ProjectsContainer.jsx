import './ProjectsContainer.css';
import React from 'react';
import BLOG from "../../projects/public/Blog";
import BPAPI from "../../projects/private/BPAPI";
import JSCALC from "../../projects/public/JSCalc";
import SGCW from "../../projects/public/SGCW";
import RPS from "../../projects/public/RPS";
import FSA from "../../projects/private/FSA";
import Filterbar from './Filterbar/Filterbar';
import ProjectDisplay from '../ProjectsDisplay/ProjectDisplay';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Projects = [BLOG, BPAPI, JSCALC, SGCW, RPS, FSA];

class ProjectsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: Projects,
            filterValues: [],
        }
    };

    // array1 represents containing array
    // array2 represents values to be compared
    compareValues(array1, array2) {
        //create empty object
        let obj = {};

        //assign all unique elements from array1
        //to obj as keys
        //assign key values equal to true
        for(let i = 0; i < array1.length; i++) {
            if(!obj[array1[i]]){
                const element = array1[i];
                obj[element] = true;
            }
        }
        
        //check if all elements from array2
        //exist within obj
        for(let j = 0; j < array2.length; j++) {
            if(obj[array2[j]]) {
                return true;
            }
        }
        return false;
    };

    filterProjects() {
        // show all projects if there are 
        // no active filters
        let projects = this.state.projects;
        if(this.state.filterValues.length === 0) {
            return projects;
        }
        
        const filteredProjects = projects.filter(project => {
            if(this.compareValues(project.technologies, this.state.filterValues))
                return project;            
            return null;
        });

        return filteredProjects;
    };

    addFilter(value) {
        let filterValues = [...this.state.filterValues];
        filterValues.push(value);

        this.setState({ filterValues: filterValues });
    };

    removeFilter(index) {
        let filterValues = [...this.state.filterValues];
        filterValues.splice(index, 1);

        this.setState({ filterValues: filterValues });
    };

    updateFilterValues(value) {
        // check if filterValues is empty
        const filterValues = this.state.filterValues;
        if(filterValues.length === 0) {
            this.addFilter(value);
            return;
        };

        // check for value within filterValues
        let index = filterValues.indexOf(value);
        if(index > -1) {
            this.removeFilter(index);
            return;
        };
        
        this.addFilter(value);
    };
    
    //handles onClick function for Filterbar elements
    filterOnClickHandler = (e) => {
        const filterClicked = e.target.id;
        this.updateFilterValues(filterClicked);
    };
    
    render() {
        const filteredProjects = this.filterProjects();
        return (
            <div className='container projects mb-10p'>
                <AnimationOnScroll
                  animateIn='animate__fadeInUp'
                  initiallyVisible={false}
                  animateOnce={true}>
                <h1 className='header ml-10'>Projects</h1>
                <p className='color-white ml-10'>Hover over project images to preview slideshow. (tap if on mobile)</p>
                
                <h3 className='filter-header text-center'>Filters</h3>
                <Filterbar filterValues={this.state.filterValues} click={this.filterOnClickHandler}/>

                <p className='filter-results text-center'>{filteredProjects.length} result(s)</p>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn='animate__fadeIn'>
                {filteredProjects.map(project => {
                    if(!project) {
                        <p className='ml-10'>no projects to load...</p>
                    }

                    return(
                        
                    <ProjectDisplay key={project.id} project={project}/>
                    );
                })}
                </AnimationOnScroll>
            </div>
        );
    };
};

export default ProjectsContainer;