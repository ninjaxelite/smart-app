import BahnhofField from './bahnhof-field';

export default class Bahnhof {
    private region: BahnhofField[];
    private kategorie: BahnhofField[];



	constructor(region: BahnhofField[], kategorie: BahnhofField[]) {
		this.region = region;
		this.kategorie = kategorie;
	}	

	public get $region(): BahnhofField[] {
		return this.region;
	}

	public set $region(value: BahnhofField[]) {
		this.region = value;
	}
    

	public get $kategorie(): BahnhofField[] {
		return this.kategorie;
	}

	public set $kategorie(value: BahnhofField[]) {
		this.kategorie = value;
	}
    
}