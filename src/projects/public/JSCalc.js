import Project from "../../project";
import JSCalcPicOne from '../../img/JavaScript Calculator/main.png';

const description = 
"A JavaScript calculator based around the " +
"functionality of the standard Window's " +
"calculator. Also, featuring a history/memory " +
"tab and keyboard functionality.";

const JSCALC = new Project(
    3,
    "jscalc",
    "JavaScript Calculator",
    description,
    [{id: "one", url: JSCalcPicOne}],
    "https://github.com/JacobMarq/Calculator",
    "https://jacobmarq.github.io/Calculator/",
    ["JavaScript", "HTML", "CSS"],
);

export default JSCALC;
