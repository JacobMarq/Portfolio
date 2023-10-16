import './ProjectsContainer.css';
import React from 'react';
import Filterbar from './Filterbar/Filterbar';
import ProjectDisplay from '../ProjectsDisplay/ProjectDisplay';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ProjectsFeature from '../ProjectsFeature/ProjectsFeature';
import ProjectsDetailedView from '../ProjectsDetailedView/ProjectsDetailedView';
import { DetailedProjects, Projects } from '../../projects';
import ProjectsListLengthSelect from './ProjectsListLengthSelect/ProjectsListLengthSelect';
import PaginationControls from './PaginationControls/PaginationControls';

const numToDisplayOptions = [3,5,7];

class ProjectsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            numToDisplay: numToDisplayOptions[0],
            detailedView: false,
            curDetailedView: 0,
            projects: Projects,
            filteredProjects: Projects,
            featuredProjects: Projects.filter((project) => project.type === "Featured"),
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

    getTotalPages() {
        return (this.state.filteredProjects.length % this.state.numToDisplay === 0 ? this.state.filteredProjects.length / this.state.numToDisplay : parseInt(this.state.filteredProjects.length / this.state.numToDisplay) + 1);
    }

    filterProjects(filterValues) {
        // show all projects if there are 
        // no active filters
        let projects = this.state.projects;
        if(filterValues.length === 0) {
            return projects;
        }
        
        const filteredProjects = projects.filter(project => {
            if(this.compareValues(project.technologies, filterValues))
                return project;
            return null;
        });

        return filteredProjects;
    };

    addFilter(value) {
        let filterValues = [...this.state.filterValues];
        filterValues.push(value);

        const filteredProjects = this.filterProjects(filterValues);
        this.setState({ 
            filterValues: filterValues,
            filteredProjects: filteredProjects,
            currentPage: 1 
        });
    };

    removeFilter(index) {
        let filterValues = [...this.state.filterValues];
        filterValues.splice(index, 1);

        const filteredProjects = this.filterProjects(filterValues);
        this.setState({ 
            filterValues: filterValues,
            filteredProjects: filteredProjects,
            currentPage: 1 
        });
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
    
    filterOnClickHandler = (e) => {
        const filterClicked = e.target.id;
        this.updateFilterValues(filterClicked);
    };

    toggleDetailedView = (e) => {
        this.setState(prevState => ({
            detailedView: !prevState.detailedView,
            curDetailedView: parseInt(e.target.id),
            numToDisplay: numToDisplayOptions[0],
            currentPage: 1,
        }));
    }

    getDetailedView() {
        return this.state.detailedProjects.find((project) => project.id === this.state.curDetailedView);
    }
    
    determineStart() {
        if (this.state.currentPage === 1) {
            return 0;
        }
        return ((this.state.currentPage - 1) * this.state.numToDisplay);
    }

    determineEnd() {
        return ((this.state.currentPage * this.state.numToDisplay));
    }

    handleSelectChange = (event) => {
        const value = parseInt(event.target.value);
        if (numToDisplayOptions.includes(value)) {
            this.setState({
                numToDisplay: value,
                currentPage: 1
            });
        }
    }

    handlePageTraversal = (event) => {
        const value = event.target.value; 

        switch (value) {
            case "next":
                if (this.state.currentPage === this.getTotalPages()) { return; }
                this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
                break;
            case "back":
                if (this.state.currentPage === 1) { return; }
                this.setState(prevState => ({ currentPage: prevState.currentPage - 1 }));
                break;
            case "first":
                this.setState({ currentPage: 1 });
                break;
            case "last":
                this.setState({ currentPage: this.getTotalPages() });
                break;
            default:
                return;
        }
    }

    render() {
        if (this.state.detailedView) {
            return <ProjectsDetailedView project={this.getDetailedView()} toggleDetailedView={this.toggleDetailedView}/>
        }

        return (
            <div className='container projects mb-10p mr-5p ml-5p'>
                <AnimationOnScroll
                  animateIn='animate__fadeInDown'
                  initiallyVisible={false}
                  animateOnce={true}>
                    <h1 className='header ml-10'>Projects</h1>

                    <h2 className='ml-10 featured-header'>Featured Project(s)</h2>
                    {this.state.featuredProjects.map((featuredProject, index) => {
                        return <ProjectsFeature key={index} project={featuredProject} toggleDetailedView={this.toggleDetailedView}/>;
                    })}
                    
                    <h3 className='filter-header mt-25 text-center'>FILTERS:</h3>
                    <Filterbar filterValues={this.state.filterValues} click={this.filterOnClickHandler}/>

                    <p className='filter-results text-center mb-0'>{this.state.filteredProjects.length} result(s)</p>
                    <ProjectsListLengthSelect numToDisplayOptions={numToDisplayOptions} handleSelectChange={this.handleSelectChange}/>
                    <PaginationControls handlePageTraversal={this.handlePageTraversal} currentPage={this.state.currentPage} totalPages={this.getTotalPages()}/>

                    <p className='color-white ml-10 mb-25'>Hover over project images to preview slideshow. (tap if on mobile)</p>
                </AnimationOnScroll>
                {this.state.filteredProjects.slice(this.determineStart(), this.determineEnd()).map(project => {
                    if(!project) {
                        return <p className='ml-10'>no projects to load...</p>;
                    }

                    return(
                        <ProjectDisplay key={project.id} project={project} toggleDetailedView={this.toggleDetailedView}/>
                    );
                })}
                <PaginationControls handlePageTraversal={this.handlePageTraversal} currentPage={this.state.currentPage} totalPages={this.getTotalPages()}/>
            </div>
        );
    };
};

export default ProjectsContainer;