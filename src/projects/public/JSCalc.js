import Project from "../../project";
import JSCalcPicOne from '../../img/JavaScript Calculator/main.png';
import { techJavaScript, techHTML, techCSS } from "../../technologies/technologies";

const name = "JavaScript Calculator";
const appType = "Single-Page Web Application";
const descriptionShort = "JavaScript Calculator with expanded feature set, including History and Memory functionality, and keyboard functionality. Part of The Odin Project programming course";
const description = 
"A JavaScript calculator " +
"featuring a history/memory tab " +
"that allows keyboard inputs.";

const JSCALC = new Project(
    4,
    "Public",
    "jscalc",
    name,
    appType,
    descriptionShort,
    description,
    [{id: "one", url: JSCalcPicOne}],
    "https://github.com/JacobMarq/Calculator",
    "https://jacobmarq.github.io/Calculator/",
    [techJavaScript, techHTML, techCSS],
    "",
    "N",
    "Y"
);

export default JSCALC;
