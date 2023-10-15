import Project from "../../project";
import BPAPIPicOne from "../../img/BPostsApi/start.png";
import BPAPIPicTwo from "../../img/BPostsApi/search.png";
import BPAPIPicThree from "../../img/BPostsApi/response.png";

const description = 
"A Ruby on Rails JSON API that allows " +
"a user to fetch blog posts from a " +
"third party API with query strings." +
"\n\n- utilizes multithreading for making " +
"parallel requests" +
"\n\n- Recently moved from Heroku to Render " +
"due to the recent removal of Heroku's free tier" +
"\n\n- Permitted Parameters are: " +
"\ntags(required), sortBy, direction";

const BPAPI = new Project(
    2,
    "Private",
    "bpapi",
    "Blog Posts API",
    description,
    [   {id: "one", url: BPAPIPicOne}, 
        {id: "two", url: BPAPIPicTwo}, 
        {id: "three", url: BPAPIPicThree}],
    "https://github.com/JacobMarq/blog_posts",
    "",
    ["Render", "Heroku", "Ruby", "Rails"],
);

export default BPAPI;