import Project from "../../project";
import IrisDTCPicOne from "../../img/IrisDTC/Title Image.png";
import IrisDTCPicTwo from "../../img/IrisDTC/Tree1.png";
import IrisDTCPicThree from "../../img/IrisDTC/Tree2.png";
import IrisDTCFile from '../../documents/IrisDecisionTreeClassifier.pdf';

const IRISDTC = new Project(
    379,
    "School",
    "irisdtc",
    "Iris Decision Tree Classifier",
    "A Decision Tree Classifier that decides the species of Iris flowers based on their features. ",
    [   
        {id: "one", url: IrisDTCPicOne},
        {id: "two", url: IrisDTCPicTwo},
        {id: "three", url: IrisDTCPicThree} 
    ],
    "",
    IrisDTCFile,
    ["Python"],
);

export default IRISDTC;
