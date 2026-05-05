import BLOG from "./public/Blog";
import BPAPI from "./private/BPAPI";
import JSCALC from "./public/JSCalc";
import SGCW from "./public/SGCW";
import RPS from "./public/RPS";
import FSA from "./private/FSA";
import { BENEV, BenevDetailed } from './featured/BENEV';
import { IMSI, IMSIDetailed } from "./featured/WORKBOX";
import CCFRAUD from "./school/CCFraudDetection";
import IRISDTC from "./school/IrisDecisionTreeClassifier";

export const Projects = [IMSI, BENEV, FSA, BLOG, BPAPI, SGCW, JSCALC, RPS, CCFRAUD, IRISDTC];
export const CaseStudies = [IMSIDetailed, BenevDetailed];