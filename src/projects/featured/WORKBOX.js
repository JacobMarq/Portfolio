import Project from "../../project";
import IMSILOGO from "../../img/Workbox/IMSI-Logo.png";
import WBLANDINGPAGE from "../../img/Workbox/WB-Landing-Page.png";
import WBDATACHART from "../../img/Workbox/piechart.png";
import OAOIDSCAN from "../../img/Workbox/IDSCAN.png";
import KEYSTONE from "../../img/Workbox/KEYSTONE-CORE.png";
import {DetailedProject, DetailedProjectSection } from "../../detailedProject";
import { techAngular, techJava, techJavaScript, techMySQL, techIBMDb2 } from "../../technologies/technologies";

const name = "Projects at IMS Integration";

const description = 
"IMS Integration, is a company that provides a suite of industry leading software solutions in the Fintech sector " +
"tailored to meet the high demand and specific standard of Credit Unions around the US. " +
"As a Software Developer at IMSI, I specialize in the lifecycle of enterprise software for the credit union industry. " +
"My work sits at the intersection of maintaining high-security legacy systems and engineering the modern tools that replace them.";

// const extendedDesc =
// "Improvements don't stop at the user. Achievements I'm most proud of during my time at IMSI include: " +
// "Assisting in rewriting IMSI's master application, Workbox, from Struts2 to AngularJS. " +
// "utilizing python scripting to create a suite of scripts that have improved response times, " +
// "automating our Certificate renewal process for an extensive lists of over 100 clients, " +
// "and expanding IMSI's software documentation for users and developers alike. ";

const modernization = 
"I served as a key developer in a large-scale modernization initiative, " +
"migrating our flagship enterprise application from Struts2 to AngularJS. " +
"My focus was on ensuring feature parity and improving the overall user experience during the transition, " +
"While adding to and improving API endpoints and backend functionality.";
const workbox =
"In the FinTech sector, identity verification is the primary line of defense against fraud. " +
"At IMS Integration, I owned the implementation of the IDology iFrame, a solution designed to balance robust security with a frictionless applicant experience. " +
"\n\nThe Engineering Challenge\n\n" +
"Identity scans are inherently sensitive to environmental variables like low lighting, poor camera quality, or improper document placement. " +
"These factors often lead to low-confidence results, requiring a sophisticated strategy to determine when to accept, reject, or manually review " +
"an attempt without alienating legitimate users. " +
"\n\nTechnical Strategy & Implementation\n\n" +
"I integrated the iFrame because its extensive feature set allowed our existing interceptors to hook into the workflow with minimal back-end and database overhead. " +
"The solution’s flexibility was critical, providing the granular settings necessary to meet the diverse security requirements of our broad credit union client list. " +
"\n\nStakeholder Collaboration\n\n" +
'To minimize user error and improve "pass rates", I collaborated directly with stakeholders at various credit unions. ' +
"By gathering feedback on specific friction points, I was able to refine the UI and provide clear, instructional guidance " +
"that helped applicants successfully complete the verification process on their first attempt.";

const dataVisualization =
"Credit Unions depend on IMSI's software for collecting data on their online services and handling generation of their eStatements, Taxes, and Reports. " +
"This required thorough requirements gathering, troubleshooting, and communication to ensure the needs of our financial partners were met. " +
"On the technical side of things, these reports utilized a combination of Jaspersoft and Adobe Acrobat for visualization, " +
"as well as complex SQL queries and Java to handle data both from IMSI internal systems and third-party systems such as Corelation and Symitar.";
const Wbmas =
"In the FinTech sector, identity verification is the primary line of defense against fraud. " +
"At IMS Integration, I owned the implementation of the IDology iFrame, a solution designed to balance robust security with a frictionless applicant experience. " +
"\n\nThe Engineering Challenge\n\n" +
"Identity scans are inherently sensitive to environmental variables like low lighting, poor camera quality, or improper document placement. " +
"These factors often lead to low-confidence results, requiring a sophisticated strategy to determine when to accept, reject, or manually review " +
"an attempt without alienating legitimate users. " +
"\n\nTechnical Strategy & Implementation\n\n" +
"I integrated the iFrame because its extensive feature set allowed our existing interceptors to hook into the workflow with minimal back-end and database overhead. " +
"The solution’s flexibility was critical, providing the granular settings necessary to meet the diverse security requirements of our broad credit union client list. " +
"\n\nStakeholder Collaboration\n\n" +
'To minimize user error and improve "pass rates", I collaborated directly with stakeholders at various credit unions. ' +
"By gathering feedback on specific friction points, I was able to refine the UI and provide clear, instructional guidance " +
"that helped applicants successfully complete the verification process on their first attempt.";

const security =
"Working with Credit Unions means having the highest quality security. " +
"With Fraud being an evergrowing problem, and experiencing exponential growth in the last 2 years, " +
"I would handle making upgrades to our integrations with 3rd party identity verification providers such as Idology, Geolocation services, and Chexsystems. " +
"This process was challenging and required collaboration between IMSI, our clients, and 3rd party providers. " +
"We also had regular security training for handling highly sensitive data and Industry best practices. ";
const idology =
"In the FinTech sector, identity verification is the primary line of defense against fraud. " +
"At IMS Integration, I owned the implementation of the IDology iFrame, a solution designed to balance robust security with a frictionless applicant experience. " +
"\n\nThe Engineering Challenge\n\n" +
"Identity scans are inherently sensitive to environmental variables like low lighting, poor camera quality, or improper document placement. " +
"These factors often lead to low-confidence results, requiring a sophisticated strategy to determine when to accept, reject, or manually review " +
"an attempt without alienating legitimate users. " +
"\n\nTechnical Strategy & Implementation\n\n" +
"I integrated the iFrame because its extensive feature set allowed our existing interceptors to hook into the workflow with minimal back-end and database overhead. " +
"The solution’s flexibility was critical, providing the granular settings necessary to meet the diverse security requirements of our broad credit union client list. " +
"\n\nStakeholder Collaboration\n\n" +
'To minimize user error and improve "pass rates", I collaborated directly with stakeholders at various credit unions. ' +
"By gathering feedback on specific friction points, I was able to refine the UI and provide clear, instructional guidance " +
"that helped applicants successfully complete the verification process on their first attempt.";

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

const sectionWorkDescription = new DetailedProjectSection({
    header: "IMS Integration",
    paragraph: description
});

const sectionModernization  = new DetailedProjectSection({
    header: "Legacy Maintenance & Modernization",
    image: WBLANDINGPAGE,
    imgType: "L",
    paragraph: modernization
});
const sectionWorkboxMigration = new DetailedProjectSection({
    header: "The Workbox Migration",
    paragraph: workbox
});

const sectionDataVisualization = new DetailedProjectSection({
    header: "Data Visualization & Report Generation",
    image: WBDATACHART,
    imgType: "S",
    paragraph: dataVisualization
});
const sectionWbMAS = new DetailedProjectSection({
    header: "Workbox & Make A Statement",
    paragraph: Wbmas
});

const sectionSecurity = new DetailedProjectSection({
    header: "Safe, Secure, & Compliant",
    image: OAOIDSCAN,
    imgType: "P",
    paragraph: security
});
const sectionIDScan = new DetailedProjectSection({
    header: "IDology - ID Scan integration",
    paragraph: idology
});

export const IMSIDetailed = new DetailedProject(
    1001,
    name,
    IMSILOGO,
    sectionWorkDescription,
    sectionModernization,
    // sectionWorkboxMigration,
    sectionDataVisualization,
    // sectionWbMAS,
    sectionSecurity,
    sectionIDScan
);