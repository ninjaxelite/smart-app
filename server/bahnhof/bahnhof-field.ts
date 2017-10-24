export default class BahnhofField {
    private type: Type;
    private label: String;
    private url: String;

    constructor(type: Type, label: String, url: String) {
        this.type = type;
        this.label = label;
        this.url = url;
    }


	public get $type(): Type {
		return this.type;
	}

	public set $type(value: Type) {
		this.type = value;
    }
    

	public get $label(): String {
		return this.label;
	}

	public set $label(value: String) {
		this.label = value;
	}
    

	public get $url(): String {
		return this.url;
	}

	public set $url(value: String) {
		this.url = value;
	}
    
}

export enum Type {
    address,
	email,
	phone,
	other,
	profile
}