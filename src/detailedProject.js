export class DetailedProjectSection {
    constructor( header, image, imgType, paragraph ) {
        this.header = header;
        this.image = {  
            src: image,
            type: imgType
        };
        this.paragraph = paragraph;
    }
};

export class DetailedProject {
    constructor( id, name, mainImg, ...sections ) {
        this.id = id;
        this.name = name;
        this.mainImg = mainImg;
        this.body = {sections: sections};
    }
};