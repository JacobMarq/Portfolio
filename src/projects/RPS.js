import Project from "../project";
import RPSPicOne from '../img/rock-paper-scissors/analytics.png';
import RPSPicTwo from '../img/rock-paper-scissors/Round.png';
import RPSPicThree from '../img/rock-paper-scissors/lose.png';

const RPS = new Project(
    4,
    "rps",
    "Rock-Paper-Scissors",
    "Play as your local school nerd against a\nNetflix-teen-sized School\nBully in a heated match of\nRock, Paper, Scissors.\n\nThis game will keep track\nof you and your opponents\nmoves and their respective\noutcomes as well as increase\n or decrease in difficulty\ndepending on how you're doing.",
    [{id: "one", url: RPSPicOne}, {id: "two", url: RPSPicTwo}, {id: "three", url: RPSPicThree}],
    "https://github.com/JacobMarq/Rock-Paper-Scissors",
    "https://jacobmarq.github.io/Rock-Paper-Scissors/",
    ["Html", "CSS", "JavaScript"],
);

export default RPS;
