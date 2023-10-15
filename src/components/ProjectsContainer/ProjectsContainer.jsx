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
import { BENEV, BenevDetailed } from '../../projects/featured/BENEV';
import ProjectsFeature from '../ProjectsFeature/ProjectsFeature';
import ProjectsDetailedView from '../ProjectsDetailedView/ProjectsDetailedView';

const Projects = [BLOG, BPAPI, JSCALC, SGCW, RPS, FSA, BENEV];
const DetailedProjects = [BenevDetailed];

class ProjectsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailedView: false,
            curDetailedView: 0,
            projects: Projects,
            featuredProjects: Projects.filter((project) => project.id >= 1000),
            detailedProjects: DetailedProjects,
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

    toggleDetailedView = (e) => {
        this.setState(prevState => ({
            detailedView: !prevState.detailedView,
            curDetailedView: parseInt(e.target.id)
        }));
    }

    getDetailedView() {
        return this.state.detailedProjects.find((project) => project.id === this.state.curDetailedView);
    }
    
    render() {
        if (this.state.detailedView) {
            return <ProjectsDetailedView project={this.getDetailedView()} toggleDetailedView={this.toggleDetailedView}/>
        }

        const filteredProjects = this.filterProjects();
        return (
            <div className='container projects mb-10p mr-5p ml-5p'>
                <AnimationOnScroll
                  animateIn='animate__fadeInDown'
                  initiallyVisible={false}
                  animateOnce={true}>
                    <h1 className='header ml-10'>Projects</h1>

                    <h2 className='ml-10 featured-header'>Featured Projects</h2>
                    {this.state.featuredProjects.map((featuredProject, index) => {
                        return <ProjectsFeature key={index} project={featuredProject} toggleDetailedView={this.toggleDetailedView}/>;
                    })}
                    
                    <h3 className='filter-header mt-25 text-center'>FILTERS:</h3>
                    <Filterbar filterValues={this.state.filterValues} click={this.filterOnClickHandler}/>

                    <p className='filter-results text-center mb-25'>{filteredProjects.length} result(s)</p>
                    <p className='color-white ml-10 mb-25'>Hover over project images to preview slideshow. (tap if on mobile)</p>
                </AnimationOnScroll>
                    {filteredProjects.map(project => {
                        if(!project) {
                            <p className='ml-10'>no projects to load...</p>
                        }

                        return(
                            <ProjectDisplay key={project.id} project={project} toggleDetailedView={this.toggleDetailedView}/>
                        );
                    })}
            </div>
        );
    };
};

export default ProjectsContainer;