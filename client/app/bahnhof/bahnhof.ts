import { BahnhofField } from './bahnhof-field/bahnhof-field';

export class Bahnhof {
    region: BahnhofField[];
	kategorie: BahnhofField[];
	bhfInfo: BahnhofField[];
	tlBlm: BahnhofField[];
	blm: BahnhofField[];
	glSicherheitService: BahnhofField[];
	glReinigung: BahnhofField[];
	bkSicherheit: BahnhofField[];
	bkSiTeamasistent: BahnhofField[];

	constructor(region: BahnhofField[], kategorie: BahnhofField[], bhfInfo : BahnhofField[], tlBlm: BahnhofField[], blm: BahnhofField[],glSicherheitService: BahnhofField[],
		glReinigung: BahnhofField[], bkSicherheit: BahnhofField[], bkSiTeamasistent: BahnhofField[]) {
		this.region = region;
		this.kategorie = kategorie;
		this.bhfInfo = bhfInfo;
		this.tlBlm = tlBlm;
		this.blm = blm;
		this.glSicherheitService = glSicherheitService;
		this.glReinigung = glReinigung;
		this.bkSicherheit = bkSicherheit;
		this.bkSiTeamasistent = bkSiTeamasistent;
	}
    
}