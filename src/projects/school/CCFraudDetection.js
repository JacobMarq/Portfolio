import Project from "../../project";
import CCFraudPicOne from "../../img/CCFraud/TitleImage.png";
import CCFraudFile from '../../documents/CreditCardFraudDetection.pdf';

const CCFRAUD = new Project(
    3793,
    "School",
    "ccfraud",
    "CC Fraud Detection",
    "An exploration of credit card transaction data, harnessing the power of the Random Forest algorithm",
    [   
        {id: "one", url: CCFraudPicOne} 
    ],
    "",
    CCFraudFile,
    ["Python"],
);

export default CCFRAUD;
