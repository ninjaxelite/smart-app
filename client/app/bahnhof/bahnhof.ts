import { BahnhofField } from './bahnhof-field';

export class Bahnhof {
    region: BahnhofField[];
    kategorie: BahnhofField[];



	constructor(region: BahnhofField[], kategorie: BahnhofField[]) {
		this.region = region;
		this.kategorie = kategorie;
	}
    
}