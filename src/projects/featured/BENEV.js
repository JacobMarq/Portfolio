import Project from "../../project";
import BENEVVHOME from "../../img/BENEVV/BenevvHome.png";
import BENEVVMAINMOBILE from "../../img/BENEVV/BenevvMainMobile.png";
import DONATIONMAIN from "../../img/BENEVV/DonationMain.png";
import REALTIMECHAT from "../../img/BENEVV/RealTimeChat.png";

const description = 
"A social cause platform for sharing and supporting " +
"community/organization campaigns, programs, and events " +
"for social change."

export const BENEV = new Project(
    999,
    "bpapi",
    "BENEVV Web & Mobile Apps",
    description,
    [   {id: "one", url: BENEVVHOME},
        {id: "two", url: DONATIONMAIN},
        {id: "three", url: REALTIMECHAT}],
    "",
    "",
    ["React", "ReactNative", "Expo", "TypeScript", "JavaScript", "PHP", "Laravel", "MySQL"],
    BENEVVMAINMOBILE,
);

export const BenevDetailed = {}