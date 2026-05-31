export class DetailedProjectSection {
    constructor({ header, subtitle='', image = '', imgType = '', paragraph, subsections = [], diagrams = []}) {
        this.header = header;
        this.subtitle = subtitle;
        this.image = {  
            src: image,
            type: imgType
        };
        this.paragraph = paragraph;
        this.subsections = subsections;
        this.diagrams = diagrams;
    }
};

export class DetailedProject {
    constructor({ id, name, mainImg, introduction, sections = [] }) {
        this.id = id;
        this.name = name;
        this.mainImg = mainImg;
        this.introduction = introduction;
        this.body = {sections: sections};
    }
};