import Project from "../../project";
import IMSILOGO from "../../img/Workbox/IMSI-Logo.png";
import WBLANDINGPAGE from "../../img/Workbox/WB-Landing-Page.png";
import WBDATACHART from "../../img/Workbox/piechart.png";
import OAOIDSCAN from "../../img/Workbox/IDSCAN.png";
import KEYSTONE from "../../img/Workbox/KEYSTONE-CORE.png";
import { DetailedProject, DetailedProjectSection } from "../../detailedProject";
import { techAngular, techJava, techMySQL, techIBMDb2, techTypeScript, techPython } from "../../technologies/technologies";

const name = "IMS Integration Platform";

const appType = "Enterprise Fintech Platform";

const descriptionShort = "Powers account management, application processing, and document workflows across 100+ credit union."

const description = 
"Enterprise fintech platform powering account management, application processing, and document workflows across 100+ credit unions.\n\n" +
"I contribute to the design and evolution of high-volume backend systems that handle sensitive financial data, focusing on API development, workflow automation, and system performance. " +
"My work spans modernizing legacy architectures, improving reliability, and scaling systems that process millions of transactions and documents annually.";

const modernization = 
"I served as a key developer in a large-scale modernization initiative, migrating a legacy Struts2-based enterprise platform to AngularJS.\n\n" +
"My contributions focused on maintaining feature parity during the transition while improving usability, API consistency, and backend support for new workflows. " +
"I worked across both frontend and backend layers to ensure smooth integration with existing systems.\n\n" +
"This effort improved maintainability and positioned the platform for future scalability without disrupting existing client operations.";
const secureMessaging =
"Owned the integration and customization of a secure messaging system used by credit unions to communicate with applicants and members within financial workflows. " +
"\n\nContext\n" +
"Secure messaging is a critical component in financial applications, enabling institutions to communicate sensitive information while maintaining compliance and user trust. " +
"As part of a broader modernization effort, this functionality needed to be extended, integrated across systems, and adapted to client-specific workflows. " +
"\n\nScope & Ownership\n" +
"I was responsible for implementing and customizing this integration for multiple credit union clients, handling both frontend scripting and backend system behavior. " +
"This included tailoring workflows to meet client-specific operational requirements. " +
"\n\nFrontend Integration\n" +
"Developed custom UI scripts that interfaced directly with Corelation systems. " +
"These scripts validated user identity by reconciling Corelation users with Workbox users before dynamically retrieving and displaying relevant data within the secure messaging interface. " +
"\n\nBackend & Workflow Logic\n" +
"Extended backend services and API endpoints to support messaging workflows, including categorization and automated routing of messages based on application context. " +
"Implemented email notification logic to ensure messages were delivered to the appropriate internal teams, enabling faster response times and reducing manual triage." +
"\n\nSystem Integration\n" +
"Integrated secure messaging functionality into the modernized Workbox 2 platform, allowing credit union employees to access and manage messages directly within the new system. " +
"Also supported SSO-based access for applicants, ensuring secure and seamless interaction across systems." +
"\n\nOutcome\n" +
"Enabled more efficient communication workflows between financial institutions and their members, ensured secure and role-based access across systems, " +
"and reduced operational bottlenecks caused by shared inbox workflows and rigid assignment constraints through the introduction of automated routing and workflow-aware messaging logic.";

const dataVisualization =
"Worked on data reporting workflows used by credit unions to generate financial documents such as eStatements, tax forms, and operational reports.\n\n" +
"Built and maintained SQL queries and Java services to aggregate data from internal systems and third-party providers including Corelation and Symitar.\n\n" +
"Supported reporting pipelines utilizing Jaspersoft for report generation and Adobe Acrobat for document formatting and delivery, ensuring accuracy and reliability in high-volume financial outputs.";
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
"I was responsible for handling new and existing integrations with 3rd party identity verification providers such as Idology, Geolocation services, and Chexsystems. " +
"This process was challenging and required collaboration between IMSI, our clients, and 3rd party providers. ";
const idology =
"I contributed to the enhancement of existing identity verification workflows by implementing IDology’s iFrame-based verification component and improving ID scan UI. " +
"\n\nContext\n" +
"Identity verification was already a core part of the platform, but required improvements to balance fraud prevention with a smooth applicant experience across a diverse set of credit union clients. " +
"\n\nThe Challenge\n" +
"Identity scans are inherently sensitive to environmental variables like low lighting, poor camera quality, or improper document placement. " +
"These factors often lead to low-confidence results, requiring a sophisticated strategy to determine when to accept, reject, or manually review " +
"an attempt without alienating legitimate users. " +
"\n\nTechnical Strategy & Implementation\n" +
"I integrated the iFrame because its extensive feature set allowed our existing interceptors to hook into the workflow with minimal back-end and database overhead. " +
"The solution’s flexibility was critical, providing the granular settings necessary to meet the diverse security requirements of our credit union client list. " +
"\n\nStakeholder Collaboration\n" +
'To minimize user error and improve "pass rates", I collaborated directly with stakeholders at various credit unions. ' +
"By gathering feedback on specific friction points, I was able to refine the UI and provide clear, instructional guidance " +
"that helped applicants successfully complete the verification process on their first attempt. " +
"\n\nOutcome\n" +
"Improved reliability of the verification flow and reduced friction for end users, while delivering strong fraud prevention standards.";

const impact =
"- Supported systems processing millions of financial documents annually across 100+ institutions\n" +
"- Improved onboarding success rates through identity verification UX improvements\n" +
"- Contributed to modernization of legacy architecture to support long-term scalability\n" +
"- Reduced operational friction through workflow automation and API enhancements";

export const IMSI = new Project(
    1001,
    "Featured",
    "imsi",
    name,
    appType,
    descriptionShort,
    description,
    [   
        {id: "one", url: WBLANDINGPAGE},
        {id: "two", url: WBDATACHART},
        {id: "three", url: OAOIDSCAN},
        {id: "four", url: KEYSTONE},
    ],    
    "",
    "https://web.imsintegration.com",
    [techJava, techAngular, techTypeScript, techMySQL, techPython, techIBMDb2],
    "",
    "Y",
    "Y"
);

const sectionWorkDescription = new DetailedProjectSection({
    header: "IMS Integration",
    paragraph: description
});

const sectionModernization  = new DetailedProjectSection({
    header: "Enterprise Systems & Legacy Modernization",
    image: WBLANDINGPAGE,
    imgType: "L",
    paragraph: modernization
});
const sectionWorkboxSecureMessaging = new DetailedProjectSection({
    header: "Workbox Secure Messaging Application",
    paragraph: secureMessaging
});
const sectionSecureMessagingDiagram = new DetailedProjectSection({
    header: "Workbox Secure Messaging",
    paragraph: secureMessagingDiagram
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
    header: "Security & Compliance",
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
    sectionWorkboxSecureMessaging,
    // sectionSecureMessagingDiagram,
    sectionDataVisualization,
    // sectionWbMAS,
    sectionSecurity,
    sectionIDScan
);

function secureMessagingDiagram() {
    return (
        <div className="flow-diagram">
            {/* Applicant Entry */}
            <div className="diagram-row center">
                <div className="diagram-node">Applicant Portal (SSO)</div>
            </div>

            <div className="diagram-arrow">↓</div>

            <div className="diagram-row center">
                <div className="diagram-node">Application View / Messages</div>
            </div>

            <div className="diagram-arrow">↓</div>

            {/* Branch: Send / View */}
            <div className="diagram-row split">
                <div className="diagram-node small">Send Message</div>
                <div className="diagram-node small">View Messages</div>
            </div>

            <div className="diagram-arrow">↓</div>

            {/* Core System */}
            <div className="diagram-row center">
                <div className="diagram-node highlight">
                Workbox System
                <span className="sub">Message Processing & Storage</span>
                </div>
            </div>

            <div className="diagram-arrow">↓</div>

            {/* Routing */}
            <div className="diagram-row center">
                <div className="diagram-node">
                Routing Logic
                <span className="sub">Application Type • Rules • Config</span>
                </div>
            </div>

            <div className="diagram-arrow">↓</div>

            {/* Departments */}
            <div className="diagram-row center">
                <div className="diagram-node">Department Email / Teams</div>
            </div>

            <div className="diagram-arrow">↓</div>

            {/* Employee Entry */}
            <div className="diagram-row split">
                <div className="diagram-node small">Corelation Access</div>
                <div className="diagram-node small">Workbox Access</div>
            </div>

            <div className="diagram-arrow">↓</div>

            {/* Response */}
            <div className="diagram-row center">
                <div className="diagram-node">Employee Response</div>
            </div>

            <div className="diagram-arrow">↓</div>

            <div className="diagram-row center">
                <div className="diagram-node highlight">
                Workbox Update
                <span className="sub">Store Response + Trigger Notification</span>
                </div>
            </div>

            <div className="diagram-arrow">↓</div>

            <div className="diagram-row center">
                <div className="diagram-node">Applicant Notification</div>
            </div>
        </div>
    );
}