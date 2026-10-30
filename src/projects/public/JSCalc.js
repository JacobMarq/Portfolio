import Project from "../../project";
import JSCalcPicOne from '../../img/JavaScript Calculator/main.png';
import { techJavaScript, techHTML, techCSS } from "../../technologies/technologies";

const name = "Pratt Parser/AST Calculator";
const appType = "Single-Page Web Application";
const descriptionShort = "Calulator built using tokenized inputs and a Pratt Parser + AST to handle complex equations. Includes an expanded feature set to traditional calulator projects, such as history, memory, and keyboard functionality.";
const description = 
"Expanded on the common calculator app by tokenizing input and utilizing the Pratt Parser algorithm with ASTs to handle layered mathematical equations." +
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
