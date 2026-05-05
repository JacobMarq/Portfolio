import './ProjectsContainer.css';
import React from 'react';
import Filterbar from './Filterbar/Filterbar';
import ProjectDisplay from '../ProjectsDisplay/ProjectDisplay';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ProjectShowcase from './ProjectShowcase/ProjectShowcase';
import ProjectDetailedView from '../ProjectsDetailedView/ProjectDetailedView';
import { CaseStudies, Projects } from '../../projects';
import ProjectsListLengthSelect from './ProjectsListLengthSelect/ProjectsListLengthSelect';
import PaginationControls from './PaginationControls/PaginationControls';

const numToDisplayOptions = [3,5,7];
const projects = Projects.filter((project) => project.active === "Y");

class ProjectsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            numToDisplay: numToDisplayOptions[0],
            detailedView: false,
            curDetailedView: 0,
            projects: projects,
            filteredProjects: projects.filter((project) => project.featured !== "Y"),
            // featuredProjects: projects.filter((project) => project.type === "Featured"),
            featuredProject: projects.find((project) => project.featured === "Y"),
            caseStudies: CaseStudies,
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

    filterProjects(filterValues, ...exclusions) {
        // show all projects if there are 
        // no active filters
        let projects = this.state.projects.filter((project) => !exclusions.includes(project));
        if(filterValues.length === 0) {
            return projects;
        }
        
        const filteredProjects = projects.filter(project => {
            if(this.compareValues(project.technologies, filterValues))
                return project;
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
        return this.state.caseStudies.find((project) => project.id === this.state.curDetailedView);
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

    updateFeaturedProject = (e) => {
        const featureProject = this.state.projects.find((project) => project.id === parseInt(e.target.id));
        if (featureProject) {
            this.setState(prevState => ({
                projects: projects.filter((project) => project.id != featureProject.id),
                filteredProjects: this.filterProjects(prevState.filterValues, featureProject),
                featuredProject: featureProject,
            }));
        }
    }

    render() {
        return (
            <div id="work" className='container'>
                <div className='projects-content'>
                    {this.state.detailedView ? 
                    <ProjectDetailedView project={this.getDetailedView()} toggleDetailedView={this.toggleDetailedView}/>
                    :
                    <div>
                        {/* {this.state.featuredProjects.map((featuredProject, index) => {
                            return <ProjectShowcase key={index} project={featuredProject} toggleDetailedView={this.toggleDetailedView}/>;
                        })} */}
                        <ProjectShowcase project={this.state.featuredProject} toggleDetailedView={this.toggleDetailedView}/>;
                        <div className='d-flex flex-column ml-auto mr-auto other-projects-container'>
                            <div className='d-flex align-items-center flex-jc-space-between w-100 mb-10 other-projects-header'>
                                <div className='d-flex flex-column w-fitc mr-auto other-project-text-wrapper'>
                                    <p className="project-catalog-eyebrow mb-0 mt-0"><span>// PROJECT CATALOG </span></p>
                                    <h2 className="project-catalog-h2 mb-0 mt-0">More Work</h2>
                                </div>
                                <div className='d-flex flex-row flex-jc-right ml-auto other-project-tabs-wrapper'>
                                    <button className='other-project-tab-btn'>All Projects</button>
                                    <button className='other-project-tab-btn'>Web Development</button>
                                    <button className='other-project-tab-btn'>Enterprise Systems</button>
                                    <button className='other-project-tab-btn'>Tools & Utilies</button>
                                </div>
                            </div>

                            {/* <ProjectsListLengthSelect numToDisplayOptions={numToDisplayOptions} handleSelectChange={this.handleSelectChange}/>
                            <PaginationControls handlePageTraversal={this.handlePageTraversal} currentPage={this.state.currentPage} totalPages={this.getTotalPages()}/>
                            <p className='color-white ml-10 mb-25'>Hover over project images to preview slideshow. (tap if on mobile)</p> */}
                            <div className='ml-auto mr-auto other-projects-list'>
                                {this.state.filteredProjects.slice(this.determineStart(), this.determineEnd()).map(project => {
                                    if(!project) {
                                        return <p className='ml-10'>no projects to load...</p>;
                                    }
                                    console.log(project)
                                    return(
                                        <ProjectDisplay key={project.id} project={project} toggleDetailedView={this.toggleDetailedView} updateFeaturedProject={this.updateFeaturedProject}/>
                                    );
                                })}
                            </div>
                            <PaginationControls handlePageTraversal={this.handlePageTraversal} currentPage={this.state.currentPage} totalPages={this.getTotalPages()}/> 
                        </div>
                    </div>
                    }
                    {/* <h1 className="section-title default-cursor mb-0 mt-5p">
                        Project Catalog
                    </h1> */}

                    {/* <div className='projects-image-container'>
                        <button className='projects-image'><h2 className='catalog-title'>Work Experience</h2><img src={WireframeDove} className="" alt='work-experience-image'/></button>
                        <button className='projects-image'><h2 className='catalog-title'>Web-Dev Projects</h2><img src={WireframeDove} className="" alt='web-dev-projects-image'/></button>
                        <button className='projects-image'><h2 className='catalog-title'>Other Projects</h2><img src={WireframeDove} className="" alt='other-projects-image'/></button>
                    </div> */}

                    
                    {/* <h3 className='filter-header mt-25 text-center'>FILTERS:</h3>
                    <Filterbar filterValues={this.state.filterValues} click={this.filterOnClickHandler}/> */}

                    {/* <p className='filter-results text-center mb-0'>{this.state.filteredProjects.length} result(s)</p>
                    <ProjectsListLengthSelect numToDisplayOptions={numToDisplayOptions} handleSelectChange={this.handleSelectChange}/>
                    <PaginationControls handlePageTraversal={this.handlePageTraversal} currentPage={this.state.currentPage} totalPages={this.getTotalPages()}/>

                    <p className='color-white ml-10 mb-25'>Hover over project images to preview slideshow. (tap if on mobile)</p>
                    {this.state.filteredProjects.slice(this.determineStart(), this.determineEnd()).map(project => {
                        if(!project) {
                            return <p className='ml-10'>no projects to load...</p>;
                        }

                        return(
                            <ProjectDisplay key={project.id} project={project} toggleDetailedView={this.toggleDetailedView}/>
                        );
                    })}
                    <PaginationControls handlePageTraversal={this.handlePageTraversal} currentPage={this.state.currentPage} totalPages={this.getTotalPages()}/> */}
                </div>
            </div>
        );
    };
};

export default ProjectsContainer;