class Project {
    constructor( id, type, reference, name, description, images, github, link, technologies, featuredMobileImg ) {
        this.id = id;
        this.type = type;
        this.reference = reference;
        this.name = name;
        this.description = description;
        this.images = images;
        this.github = github;
        this.link = link;
        this.technologies = technologies;
        this.featuredMobileImg = featuredMobileImg;
    }
}

export default Project;