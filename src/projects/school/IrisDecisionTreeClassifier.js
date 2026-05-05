import Project from "../../project";
import IrisDTCPicOne from "../../img/IrisDTC/TitleImage.png";
import IrisDTCPicTwo from "../../img/IrisDTC/Tree1.png";
import IrisDTCPicThree from "../../img/IrisDTC/Tree2.png";
import IrisDTCFile from '../../documents/IrisDecisionTreeClassifier.pdf';
import { techPython } from "../../technologies/technologies";

const name = "Iris Decision Tree Classifier";
const appType = "Ai/ML Assignment";
const descriptionShort = "A Decision Tree Classifier that decides the species of Iris flowers based on their features.";
const IRISDTC = new Project(
    3795,
    "School",
    "irisdtc",
    name,
    appType,
    descriptionShort,
    descriptionShort,
    [   
        {id: "one", url: IrisDTCPicOne},
        {id: "two", url: IrisDTCPicTwo},
        {id: "three", url: IrisDTCPicThree} 
    ],
    "",
    IrisDTCFile,
    [techPython],
    "",
    "N",
    "Y"
);

export default IRISDTC;
