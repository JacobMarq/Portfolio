class Project {
    constructor( id, reference, name, description, images, github, link, technologies ) {
        this.id = id;
        this.reference = reference;
        this.name = name;
        this.description = description;
        this.images = images;
        this.github = github;
        this.link = link;
        this.technologies = technologies;
    }
}

export default Project;