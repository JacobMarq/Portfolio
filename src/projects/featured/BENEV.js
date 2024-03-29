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
import {DetailedProject, DetailedProjectSection } from "../../detailedProject";

const name = "BENEVV Web & Mobile";

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

const p1 =
"Organizations using BENEVV need access to as much information " +
"about their campaigns and events as possible. This demand " +
"led to the implementation of gathering important analytics " +
"and displaying that data back to the Organization in a " +
"clean and readible format. Utilizing some 3rd-party services, " +
"bringing this page to life was one of my most recent tasks " +
"as part of the SmartTwigs team. ";

const p2 =
"As a form of social media platform, BENEVV needed a way for " +
"users to communicate effectively. This meant introducing a " +
"Real-Time messaging feature. ";

const p3 =
"Supporting community efforts is a large factor of what " +
"BENEVV stands for. Part of that support involves monetary " +
"aid in the form of donations. My first task as part of the " +
"SmartTwigs engineering team was to handle the development of " +
"the donation checkout process for Web and Mobile. ";

export const BENEV = new Project(
    1000,
    "Featured",
    "benevv",
    name,
    description,
    [   {id: "one", url: BENEVVHOME},
        {id: "two", url: DONATIONMAIN},
        {id: "three", url: REALTIMECHAT},
        {id: "four", url: BENEVVPAYMENTS}],
    "",
    "",
    ["React", "ReactNative", "Expo", "TypeScript", "JavaScript", "PHP", "Laravel", "MySQL"],
    BENEVVMAINMOBILE,
    "Y"
);

const section1 = new DetailedProjectSection(
    "What is BENEVV?",
    BENEVVMOBILE,
    "S",
    description + extendedDesc
);
const section2 = new DetailedProjectSection(
    "Data Visualization",
    ORGANIZATIONHOME,
    "P",
    p1
);
const section3 = new DetailedProjectSection(
    "Real Time Chat",
    REALTIMECHATMOBILE,
    "M",
    p2
);
const section4 = new DetailedProjectSection(
    "Donation Workflow",
    DONATIONCHECKOUT,
    "P",
    p3
);

export const BenevDetailed = new DetailedProject(
    1000,
    name,
    BENEVVHOME,
    section1,
    section2,
    section3,
    section4
);