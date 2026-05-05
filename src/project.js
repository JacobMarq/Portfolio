class Project {
    constructor( id, type, reference, name, appType, descriptionShortened, description, images, github, link, technologies, featuredMobileImg, featured, active ) {
        this.id = id;
        this.type = type;
        this.reference = reference;
        this.name = name;
        this.appType = appType;
        this.descriptionShortened = descriptionShortened;
        this.description = description;
        this.images = images;
        this.github = github;
        this.link = link;
        this.technologies = technologies;
        this.featuredMobileImg = featuredMobileImg;
        this.featured = featured;
        this.active = active;
    }
}

export default Project;