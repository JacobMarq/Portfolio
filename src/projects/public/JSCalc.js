import Project from "../../project";
import JSCalcPicOne from '../../img/JavaScript Calculator/main.png';

const description = 
"A JavaScript calculator " +
"featuring a history/memory tab " +
"that allows keyboard inputs.";

const JSCALC = new Project(
    3,
    "Public",
    "jscalc",
    "JavaScript Calculator",
    description,
    [{id: "one", url: JSCalcPicOne}],
    "https://github.com/JacobMarq/Calculator",
    "https://jacobmarq.github.io/Calculator/",
    ["JavaScript", "HTML", "CSS"],
);

export default JSCALC;
