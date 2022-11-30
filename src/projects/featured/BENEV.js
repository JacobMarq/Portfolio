import Project from "../../project";
import BPAPIPicOne from "../../img/BPostsApi/start.png";
import BPAPIPicTwo from "../../img/BPostsApi/search.png";
import BPAPIPicThree from "../../img/BPostsApi/response.png";

const description = 
"A social cause platform for sharing and supporting " +
"community/organization campaigns, programs, and events " +
"for social change."

export const BENEV = new Project(
    999,
    "bpapi",
    "BENEVV Web & Mobile Apps",
    description,
    [   {id: "one", url: BPAPIPicOne}, 
        {id: "two", url: BPAPIPicTwo}, 
        {id: "three", url: BPAPIPicThree}],
    "",
    "",
    ["React", "ReactNative", "Expo", "TypeScript", "JavaScript", "PHP", "Laravel", "MySQL"],
    
);

export const BenevDetailed = {}