import Project from "../../project";
import JSCalcPicOne from '../../img/JavaScript Calculator/main.png';
import { techJavaScript, techHTML, techCSS } from "../../technologies/technologies";

const name = "Pratt Parser/AST Calculator";
const appType = "Single-Page Web Application";
const descriptionShort = "Pratt Parser/AST Calculator with expanded feature set, including history, memory, and keyboard functionality. Part of The Odin Project programming course";
const description = 
"Pratt Parser/AST Calculator " +
"featuring history/memory functionality " +
"and keyboard inputs.";

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
