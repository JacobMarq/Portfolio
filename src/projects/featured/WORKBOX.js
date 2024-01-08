import Project from "../../project";
import IMSILOGO from "../../img/Workbox/IMSI-Logo.png";
import WBLANDINGPAGE from "../../img/Workbox/WB-Landing-Page.png";
import WBDATACHART from "../../img/Workbox/piechart.png";
import OAOIDSCAN from "../../img/Workbox/IDSCAN.png";
import KEYSTONE from "../../img/Workbox/KEYSTONE-CORE.png";
import {DetailedProject, DetailedProjectSection } from "../../detailedProject";

const name = "IMS Integration";

const description = 
"IMS Integration, is a company that provides a suite of Industry Leading Software Solutions " +
"tailored to meet the specific standards and requirements of Credit Unions around the US. " +
"As a Software Developer at IMSI, I've contributed to upgrading, maintaining, and offering technical support for existing solutions, " +
"as well as Designing, Developing, and Implementing new features and functionality. ";

const extendedDesc =
"Improvements don't stop at the user. Achievements I'm most proud of during my time at IMSI include: " +
"Assisting in rewriting IMSI's master application, Workbox, from Struts2 to AngularJS. " +
"utilizing python scripting to create a suite of scripts that have improved response times, " +
"automating our Certificate renewal process for an extensive lists of over 100 clients, " +
"and expanding IMSI's software documentation for users and developers alike. ";

const p1 =
"Credit Unions depend on IMSI's software for collecting data on their online services and handling generation of their eStatements, Taxes, and Reports. " +
"I utilized JasperSoft and Adobe Acrobat to manage clients disclosures and documents. " +
"This required thorough requirements gathering, troubleshooting, and communication to ensure pixel perfect accuracy. " +
"Due to performance needs, since it was standard to process hundreds of thousands or even millions of documents, " +
"we would have to accomplish certain goals with minimal solutions often utilizing basic MySQL functionality.";

const p2 =
"Working with Credit Unions means having the highest quality security. " +
"With Fraud being an evergrowing problem, and experiencing exponential growth in the last 2 years, " +
"I would handle making upgrades to our integrations with 3rd party identity verification providers. " +
"This process was challenging and required collaboration between IMSI, our clients, and 3rd party providers. " +
"We also had regular security training for handling highly sensitive data and Industry best practices. ";

// const p3 = "Corelation Integrations";

export const IMSI = new Project(
    1001,
    "Featured",
    "imsi",
    name,
    description,
    [   
        {id: "one", url: IMSILOGO},
        {id: "two", url: WBLANDINGPAGE},
        {id: "three", url: WBDATACHART},
        {id: "four", url: OAOIDSCAN},
        {id: "five", url: KEYSTONE},
    ],    
    "",
    "",
    ["Angular", "Java", "JavaScript", "MySQL", "IBMDb2"],
    "",
    "Y"
);

const section1  = new DetailedProjectSection(
    "What is IMS Integration?",
    WBLANDINGPAGE,
    "L",
    description + extendedDesc
);
const section2 = new DetailedProjectSection(
    "Data Visualization & Report Generation",
    WBDATACHART,
    "S",
    p1
);
const section3 = new DetailedProjectSection(
    "Safe, Secure, & Compliant",
    OAOIDSCAN,
    "P",
    p2
);
// const section4 = new DetailedProjectSection(
//     "Corelation Integration",
//     KEYSTONE,
//     "S",
//     p3
// );

export const IMSIDetailed = new DetailedProject(
    1001,
    name,
    IMSILOGO,
    section1,
    section2,
    section3,
);