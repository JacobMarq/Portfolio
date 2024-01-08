class Project {
    constructor( id, type, reference, name, description, images, github, link, technologies, featuredMobileImg, active ) {
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
        this.active = active;
    }
}

export default Project;