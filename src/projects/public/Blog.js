import Project from "../../project";
import BlogPicOne from '../../img/Blog/article-show.png';
import BlogPicTwo from '../../img/Blog/home.png';
import BlogPicThree from '../../img/Blog/user-profile.png';
import BlogPicFour from '../../img/Blog/responsive.png';

const description = 
"A responsive blog app, with " +
"a focus on community, where " +
"users can show their appreciation " +
"or disagreement for other users " +
"content by liking, disliking, " +
"favoriting, and following." +
"\n\n- Currently deployed on Heroku Free " +
"Dynos so initial load WILL BE SLOW.";

const BLOG = new Project(
    1,
    "blog",
    "The-Blog-Spot",
    description,
    [   {id: "one", url: BlogPicOne}, 
        {id: "two", url: BlogPicTwo}, 
        {id: "three", url: BlogPicThree}, 
        {id: "four", url: BlogPicFour}],
    "https://github.com/JacobMarq/Blog",
    "https://the-blog-spot.herokuapp.com/",
    ["PostgreSQL", "Heroku", "HTML", "JavaScript", "CSS", "Ruby", "Rails"],
);

export default BLOG;