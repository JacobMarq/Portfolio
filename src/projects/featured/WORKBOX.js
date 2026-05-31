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
"I served as a key developer in a large-scale modernization initiative, migrating a legacy Struts2-based enterprise platform to AngularJS. " +
"\n\nMy contributions focused on maintaining feature parity during the transition while improving usability, API consistency, and backend support for new workflows. " +
"I worked across both frontend and backend layers to ensure smooth integration with existing systems. " +
"\n\nThis effort improved maintainability and positioned the platform for future scalability without disrupting existing client operations.";
const secureMessaging =
"I owned the integration and customization of a secure messaging system that enabled credit unions to communicate with applicants and members throughout the account opening and lending process. " +
"\n\nContext:\n\n" +
"Secure communication is a critical component of financial applications, allowing institutions to exchange sensitive information while maintaining compliance, security, and user trust. As part of a broader modernization initiative, messaging capabilities needed to be integrated into existing workflows, connected with multiple systems, and adapted to the operational requirements of individual credit unions. " +
"\n\nChallenge:\n\n" +
"The existing communication process relied heavily on manual assignment and shared inbox workflows, creating operational bottlenecks and making it difficult to ensure messages reached the appropriate teams efficiently. The solution also needed to support secure access for both applicants and employees while integrating with existing financial systems and authentication mechanisms. " +
"\n\nSolution & Implementation:\n\n" +
"I implemented and customized secure messaging workflows for multiple credit union clients, working across both frontend and backend layers of the platform. " +
"\n\nOn the frontend, I developed custom integration scripts that interfaced with Corelation systems to validate user identities and dynamically retrieve messaging data within the secure messaging experience. " +
"\n\nOn the backend, I extended services and API endpoints to support message categorization, workflow-aware routing, and automated notification delivery. This allowed messages to be directed to the appropriate departments based on application context, reducing manual triage and improving response times. " +
"\n\nSystem Integration:\n\n" +
"The messaging platform was integrated directly into the modernized Workbox 2 application, allowing employees to manage communications without leaving their primary workflow. I also supported secure SSO-based access for applicants, ensuring a seamless experience across systems while maintaining appropriate security controls and role-based access. " +
"\n\nOutcome:\n\n" +
"The integration transformed messaging from a manual communication process into a workflow-aware system that connected applicants, employees, and core financial platforms. Automated routing reduced operational bottlenecks, improved response efficiency, and ensured secure, role-based communication throughout the application lifecycle. ";


const dataVisualization = 
"Credit unions depend on accurate reporting and document generation systems to support member communications, regulatory compliance, and operational decision-making. These workflows process large volumes of financial data and transform information from multiple internal and third-party systems into reports, statements, notices, and business intelligence tools. " +
"\n\nI developed and maintained SQL queries, Java services, and reporting workflows responsible for aggregating data from systems including Corelation and Symitar. My work supported the generation of member-facing documents such as eStatements and tax forms, as well as operational reports used by internal teams to monitor onboarding workflows, identify processing failures, and track application status. " +
"\n\nI also supported reporting pipelines built on Jaspersoft and Adobe Acrobat, helping ensure the accuracy, reliability, and timely delivery of high-volume financial documents across multiple credit union clients.";
const memberStatements = 
"Context:\n\n" +
"Member statements and notices are critical communication channels for financial institutions, delivering account information, regulatory disclosures, and other important documents to members. These workflows must operate reliably at scale while accommodating client-specific requirements and delivery schedules. " +
"\n\nChallenge:\n\n" +
"Document generation pipelines rely on large-scale data processing, reporting logic, and scheduled batch operations. Failures can delay document delivery, create operational overhead, and require detailed investigation to identify root causes and restore processing. " +
"\n\nSolution & Implementation:\n\n" +
"I investigated and resolved issues affecting statement and notice generation while developing backend jobs to support new document workflows and client requirements. " +
"\n\nMy responsibilities included troubleshooting reporting failures, validating generated outputs, maintaining reporting logic, and implementing enhancements that improved reliability and supported evolving business needs. I also worked with underlying data aggregation services and reporting infrastructure to ensure documents were generated accurately and delivered successfully. " +
"\n\nOutcome:\n\n" +
"Improved reliability of member communication workflows, reduced operational disruptions caused by reporting failures, and enabled new statement and notice capabilities for credit union clients.";
const additionalReporting = 
"Tax Document Processing:\n\n" +
"Supported workflows responsible for generating tax-related financial documents, ensuring accurate reporting and reliable document production for credit union members. " +
"\n\nCore Banking Data Aggregation:\n\n" +
"Developed and maintained SQL queries and Java services that aggregated data from Corelation, Symitar, and internal systems to support reporting and document generation workflows. " +
"\n\nOperational Reporting & Analytics:\n\n" +
"Created and maintained reports that helped internal teams monitor onboarding workflows, identify applications stuck in specific states, track processing failures, and surface operational trends requiring attention.";


const security =
"Financial institutions must balance strong fraud prevention measures with a seamless applicant experience. Identity verification, risk assessment, and regulatory compliance workflows play a critical role in protecting both credit unions and their members while ensuring legitimate applicants can successfully complete the account opening process. " +
"\n\nI worked on the integration and enhancement of several security-focused services, including IDology, geolocation verification providers, and ChexSystems. These integrations required collaboration between internal teams, credit union stakeholders, and third-party vendors to ensure solutions met diverse security requirements while remaining maintainable and user-friendly. " +
"\n\nMy responsibilities included implementing verification workflows, supporting fraud prevention initiatives, improving user experience around identity validation, and integrating external systems into existing onboarding and application processing platforms.";
const iFrame = 
"I enhanced the platform's identity verification workflow by integrating IDology's document verification system and improving the applicant experience surrounding ID scans. " +
"\n\nContext:\n\n" +
"Identity verification is a critical component of online account opening and loan application workflows. Credit unions must balance strong fraud prevention measures with a seamless user experience, ensuring legitimate applicants can successfully complete verification without unnecessary friction. " +
"\n\nChallenge:\n\n" +
"Document verification is highly sensitive to real-world conditions such as poor lighting, low camera quality, glare, and incorrect document positioning. These factors can produce low-confidence verification results, increasing manual review workloads and creating frustration for applicants. " +
"The challenge was to strengthen fraud prevention while minimizing unnecessary verification failures across a diverse set of credit union clients with varying security requirements. " +
"\n\nSolution & Implementation:\n\n" +
"I integrated IDology's iFrame-based verification component into the existing application workflow, leveraging its flexibility to support a wide range of client-specific security configurations without requiring significant backend or database changes. " +
"The integration was designed to work alongside existing interceptors and validation workflows, allowing verification results to be incorporated into established application processing logic with minimal disruption to the surrounding platform. " +
"\n\nUser Experience Improvements:\n\n" +
"To improve verification success rates, I collaborated directly with credit union stakeholders to identify common points of user confusion. Using this feedback, I refined the verification interface and introduced clearer instructions that helped applicants successfully complete identity verification on their first attempt. " +
"\n\nOutcome:\n\n" +
"The enhanced verification workflow improved reliability, reduced user friction, and supported strong fraud prevention standards. The solution provided credit unions with greater flexibility in configuring verification requirements while helping legitimate applicants move through the application process more efficiently."


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

const sectionWorkboxSecureMessaging = new DetailedProjectSection({
    header: "Workbox Secure Messaging Integration",
    paragraph: secureMessaging,
    diagrams: [secureMessagingDiagram],
});
const sectionModernization  = new DetailedProjectSection({
    header: "Enterprise Systems & Legacy Modernization",
    subtitle: 'Migrated a legacy enterprise platform to modern technologies while preserving client workflows and expanding system capabilities.',
    image: WBLANDINGPAGE,
    imgType: "L",
    paragraph: modernization,
    subsections: [
        sectionWorkboxSecureMessaging,
    ],
});

const additionalReportingSubSection = new DetailedProjectSection({
    header: "Additional Reporting Initiatives",
    paragraph: additionalReporting,
});
const makeAStatementSubSection = new DetailedProjectSection({
    header: "Member Statements & Notices (MAS)",
    paragraph: memberStatements,
});
const sectionDataVisualization = new DetailedProjectSection({
    header: "Data Visualization & Report Generation",
    subtitle: 'Built and maintained reporting and document generation systems supporting financial statements, tax documents, operational reporting, and client onboarding workflows.',
    image: WBDATACHART,
    imgType: "S",
    paragraph: dataVisualization,
    subsections: [
        makeAStatementSubSection,
        additionalReportingSubSection,
    ],
});

const sectionIDScan = new DetailedProjectSection({
    header: "IDology - ID Scan integration",
    paragraph: iFrame
});
const sectionSecurity = new DetailedProjectSection({
    header: "Security & Compliance",
    subtitle: 'Implemented and enhanced identity verification workflows that balanced fraud prevention, regulatory compliance, and user experience.',
    image: OAOIDSCAN,
    imgType: "P",
    paragraph: security,
    subsections: [
        sectionIDScan
    ],
});

export const IMSIDetailed = new DetailedProject({
    id: 1001,
    name: name,
    mainImg: IMSILOGO,
    introduction: sectionWorkDescription,
    sections:  [
        sectionModernization,
        sectionDataVisualization,
        sectionSecurity,
    ],
});

function secureMessagingDiagram() {
    return (
        <div key="secure-message-diagram" className="flow-diagram" style={{marginLeft:"5%", padding:"5%", background: "rgba(0,0,0,.20)", border: "1px solid rgba(255,255,255,.05)", borderRadius: "12px"}}>
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