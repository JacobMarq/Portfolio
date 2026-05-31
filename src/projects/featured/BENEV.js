import Project from "../../project";
import BENEVVHOME from "../../img/BENEVV/BenevvHome.png";
import BENEVVMOBILE from "../../img/BENEVV/BENEVVMOBILE.png";
import BENEVVMAINMOBILE from "../../img/BENEVV/BenevvMainMobile.png";
import DONATIONMAIN from "../../img/BENEVV/DonationMain.png";
import REALTIMECHAT from "../../img/BENEVV/RealTimeChat.png";
import REALTIMECHATMOBILE from "../../img/BENEVV/RealTimeChatMobile.png";
import ORGANIZATIONHOME from "../../img/BENEVV/OrganizationHome.png";
import DONATIONCHECKOUT from "../../img/BENEVV/DonationPaymentCard.png";
import BENEVVPAYMENTS from "../../img/BENEVV/BenevvPayments.png";
import { DetailedProject, DetailedProjectSection } from "../../detailedProject";
import { techExpo, techPHP, techLaravel, techTypeScript, techReact, techMySQL, techReactNative } from "../../technologies/technologies";

const name = "BENEVV Web & Mobile";

const appType = "Social Platform";

const descriptionShort = "built to support community and corporate events, programs, and social campaigns.";

const description = 
"Owned by SmartTwigs, BENEVV is a social platform meant for sharing and " +
"supporting community/organization campaigns, programs, " +
"and events to give back to the community and " +
"promote social change. ";

const extendedDesc =
"BENEVV is a full scale web app built using React.js, with Redux, " +
"in TypeScript. In combination with a full scale Mobile " +
"App using ReactNative with Expo. On the back-end " +
"BENEVV uses PHP, the Laravel framework, and MySQL " +
"for its database. ";

const dataVisualization =
"Organizations using BENEVV rely on data to understand campaign performance, volunteer engagement, fundraising activity, and overall event success. To support these needs, I contributed to the development of a centralized analytics dashboard that combined data from multiple sources into a clear and actionable reporting experience. " +
"\n\nThe dashboard aggregated information from BENEVV's internal platform, Stripe payment data, and Mixpanel analytics to provide organizations with visibility into campaign performance, donation trends, volunteer participation, and user engagement metrics. My work focused on transforming raw operational and behavioral data into meaningful visualizations that allowed organizations to better understand the effectiveness of their initiatives. " +
"\n\nChallenge:\n\n" +
"The primary challenge was consolidating data originating from multiple systems into a cohesive and easy-to-understand experience. Each source provided a different view of organizational activity, requiring careful integration and presentation to ensure users could quickly identify trends and make informed decisions. " +
"\n\nSolution & Implementation:\n\n" +
"I helped develop dashboard components and reporting workflows that surfaced key organizational metrics through charts, summaries, and visual analytics. The solution combined internal application data with external analytics and payment information, creating a centralized reporting hub that reduced the need for organizations to navigate multiple systems. " +
"\n\nOutcome\n\n" +
"Delivered a unified analytics experience that improved visibility into fundraising performance, volunteer engagement, and campaign effectiveness while providing organizations with actionable insights derived from multiple data sources.";

const p2 =
"As a form of social media platform, BENEVV needed a way for " +
"users to communicate effectively. This meant introducing a " +
"Real-Time messaging feature. ";

const p3 =
"Supporting charitable organizations is central to the BENEVV platform. To enable organizations to raise funds effectively, I contributed to the development of a secure cross-platform donation system used by supporters to make one-time and recurring contributions through the mobile application. " +
"\n\nContext:\n\n" +
"Online donations are a critical component of nonprofit fundraising. The donation experience must be simple and trustworthy for donors while ensuring secure payment processing, accurate transaction tracking, and seamless integration with organizational reporting systems. " +
"\n\nChallenge:\n\n" +
"Building a donation platform requires balancing ease of use with the complexity of payment processing. Transactions must be validated securely, failed payments handled gracefully, recurring contributions managed reliably, and donation data propagated throughout the platform for reporting and fundraising analytics. " +
"\n\nSolution & Implementation:\n\n" +
"I developed the donation workflow for mobile experiences, implementing the end-to-end checkout process and integrating Stripe payment services into the platform. " +
"\n\nMy work included transaction validation, payment processing, recurring donation support, failed payment handling, receipt generation, and integration with the platform's reporting and fundraising systems. The solution was designed to provide a streamlined donor experience while maintaining the security and reliability required for financial transactions. " +
"\n\nOutcome:\n\n" +
"Delivered a secure and scalable donation platform that enabled organizations to accept online contributions through mobile channels. The implementation improved the donor experience, supported recurring fundraising efforts, and provided reliable transaction data for organizational reporting and analytics.";


export const BENEV = new Project(
    1000,
    "Featured",
    "benevv",
    name,
    appType,
    descriptionShort,
    description,
    [   {id: "one", url: BENEVVHOME},
        {id: "two", url: DONATIONMAIN},
        {id: "three", url: REALTIMECHAT},
        {id: "four", url: BENEVVPAYMENTS}],
    "",
    "",
    [techExpo, techPHP, techLaravel, techReactNative, techTypeScript, techReact, techMySQL],
    BENEVVMAINMOBILE,
    "N",
    "Y"
);

const section1 = new DetailedProjectSection({
    header: "What is BENEVV?",
    subtitle: '',
    image: BENEVVMOBILE,
    imgType: "S",
    paragraph: description + extendedDesc
});
const section2 = new DetailedProjectSection({
    header: "Data Visualization",
    subtitle: 'Combined behavioral analytics, fundraising metrics, and operational data into a unified reporting experience for nonprofit organizations.',
    image: ORGANIZATIONHOME,
    imgType: "P",
    paragraph: dataVisualization,
    subsections: [],
});
const section3 = new DetailedProjectSection({
    header: "Real Time Chat",
    subtitle: '',
    image: REALTIMECHATMOBILE,
    imgType: "M",
    paragraph: p2,
    subsections: [],
});
const section4 = new DetailedProjectSection({
    header: "Donation Workflow",
    subtitle: "Contributed to the development of BENEVV's donation platform by implementing payment processing workflows and integrating Stripe services across mobile experiences.",
    image: DONATIONCHECKOUT,
    imgType: "P",
    paragraph: p3,
    subsections: [],
});

export const BenevDetailed = new DetailedProject({
    id: 1000,
    name: name,
    mainImg: BENEVVHOME,
    introduction: section1,
    sections: [
        section2,
        section4,
    ],
});

// this.id = id;
// this.name = name;
// this.mainImg = mainImg;
// this.introduction = introduction;
// this.body = {sections: sections};