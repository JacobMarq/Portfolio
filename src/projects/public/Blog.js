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
"\n\n- Recently moved from Heroku to Render " +
"due to the recent removal of Heroku's free tier";

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
    "https://theblogspot.onrender.com/",
    ["PostgreSQL", "Render", "Heroku", "HTML", "JavaScript", "CSS", "Ruby", "Rails"],
);

export default BLOG;