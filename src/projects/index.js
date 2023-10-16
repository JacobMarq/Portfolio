import BLOG from "./public/Blog";
import BPAPI from "./private/BPAPI";
import JSCALC from "./public/JSCalc";
import SGCW from "./public/SGCW";
import RPS from "./public/RPS";
import FSA from "./private/FSA";
import { BENEV, BenevDetailed } from './featured/BENEV';
// import { WORKBOX, WorkboxDetailed } from "./featured/WORKBOX";
import CCFRAUD from "./school/CCFraudDetection";
import IRISDTC from "./school/IrisDecisionTreeClassifier";

export const Projects = [BLOG, BPAPI, JSCALC, SGCW, RPS, FSA, BENEV, CCFRAUD, IRISDTC];
export const DetailedProjects = [BenevDetailed];