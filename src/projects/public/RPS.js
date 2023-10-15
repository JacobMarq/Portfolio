import Project from "../../project";
import RPSPicOne from '../../img/rock-paper-scissors/analytics.png';
import RPSPicTwo from '../../img/rock-paper-scissors/Round.png';
import RPSPicThree from '../../img/rock-paper-scissors/lose.png';

const RPS = new Project(
    5,
    "Public",
    "rps",
    "Rock-Paper-Scissors",
    "Play as your local school nerd against a Netflix-teen-sized School Bully in a heated match of Rock, Paper, Scissors.\n\nThis game will keep track of you and your opponents moves and their respective outcomes as well as increase or decrease in difficulty depending on how you're doing.",
    [   {id: "one", url: RPSPicOne}, 
        {id: "two", url: RPSPicTwo}, 
        {id: "three", url: RPSPicThree}],
    "https://github.com/JacobMarq/Rock-Paper-Scissors",
    "https://jacobmarq.github.io/Rock-Paper-Scissors/",
    ["HTML", "CSS", "JavaScript"],
);

export default RPS;
