export class BahnhofField {
    type: Type;
    label: String;
    url: String;

    constructor(type: Type, label: String, url: String) {
        this.type = type;
        this.label = label;
        this.url = url;
    }
    
}

export enum Type {
    address,
    email,
    other
}