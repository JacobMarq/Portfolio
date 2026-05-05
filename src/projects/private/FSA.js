import Project from "../../project";
import FSAOne from "../../img/FrontendAssessment/initial.png";
import FSATwo from "../../img/FrontendAssessment/nameSearch.png";
import FSAThree from "../../img/FrontendAssessment/tagSearch.png";
import FSAFour from "../../img/FrontendAssessment/nameTagSearch.png";
import { techNetlify, techReact, techHTML, techCSS } from "../../technologies/technologies";

const name = "Students Assessment";
const appType = "React Integration Assignment";
const descriptionShort = "Integrates with a 3rd party API to filter and query a list of students";

const description = 
"A react application that displays " +
"a list of students and their information " +
"received by an API request." +
"\n\n- allows for a user to filter students real time " +
"by two values: name and tags" +
"\n\n- tags can be added to each student"

const FSA = new Project(
    6,
    "Private",
    "fsa",
    name,
    appType,
    descriptionShort,
    description,
    [   {id: "one", url: FSAOne}, 
        {id: "two", url: FSATwo}, 
        {id: "three", url: FSAThree}, 
        {id: "three", url: FSAFour}],
    "",
    // "https://github.com/JacobMarq/hatchways-frontend-assessment",
    "https://students-assessments.netlify.app/",
    [techNetlify, techReact, techHTML, techCSS],
    "",
    "N",
    "Y"
);

export default FSA;