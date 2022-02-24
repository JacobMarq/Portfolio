import Project from "../../project";
import PicOne from '../../img/SGCW/StainedGlassCW1.png';
import PicTwo from '../../img/SGCW/StainedGlassCW2.png';
import PicThree from '../../img/SGCW/StainedGlassCW3.png';
import PicFour from '../../img/SGCW/StainedGlassCW4.png';

const description = 
"A prototype for a client's business site " +
"made with simple functionality to match " +
"the current needs of the company" +
"\n\nCustom icons made with Adobe Illustrator";

const SGCW = new Project(
    4,
    "sgcw",
    "Stained-Glass-CW",
    description,
    [{id: "one", url: PicOne}, {id: "two", url: PicTwo}, {id: "three", url: PicThree}, {id: "four", url: PicFour}],
    "https://github.com/JacobMarq/stained-glass-cw",
    "https://jacobmarq.github.io/stained-glass-cw/",
    ["React", "HTML", "CSS", "JavaScript", "Adobe Illustrator"],
);

export default SGCW;
