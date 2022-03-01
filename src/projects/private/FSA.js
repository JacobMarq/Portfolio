import Project from "../../project";
import FSAOne from "../../img/FrontendAssessment/initial.png";
import FSATwo from "../../img/FrontendAssessment/nameSearch.png";
import FSAThree from "../../img/FrontendAssessment/tagSearch.png";
import FSAFour from "../../img/FrontendAssessment/nameTagSearch.png";

const description = 
"A react application that displays " +
"a list of students and their information " +
"received by an API request." +
"\n\n- allows for a user to filter students real time " +
"by two values: name and tags" +
"\n\n- tags can be added to each student"

const FSA = new Project(
    6,
    "fsa",
    "Students Assessment",
    description,
    [   {id: "one", url: FSAOne}, 
        {id: "two", url: FSATwo}, 
        {id: "three", url: FSAThree}, 
        {id: "three", url: FSAFour}],
    "https://github.com/JacobMarq/hatchways-frontend-assessment",
    "https://students-assessments.netlify.app/",
    ["Netlify", "React", "HTML", "CSS"],
);

export default FSA;