import Project from "../../project";
import CCFraudPicOne from "../../img/CCFraud/TitleImage.png";
import CCFraudFile from '../../documents/CreditCardFraudDetection.pdf';
import { techPython } from "../../technologies/technologies";

const name = "CC Fraud Detection";
const appType = "Ai/ML Assignment";
const descriptionShort = "An exploration of credit card transaction data, harnessing the power of the Random Forest algorithm";
const CCFRAUD = new Project(
    3793,
    "School",
    "ccfraud",
    name,
    appType,
    descriptionShort,
    descriptionShort,
    [   
        {id: "one", url: CCFraudPicOne} 
    ],
    "",
    CCFraudFile,
    [techPython],
    "",
    "N",
    "Y"
);

export default CCFRAUD;
