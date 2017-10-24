import BahnhofField from './bahnhof-field';

export default class Bahnhof {
    private region: BahnhofField[];
    private kategorie: BahnhofField[];
	private bhfInfo: BahnhofField[];
	private tlBlm: BahnhofField[];
	private blm: BahnhofField[];
	private glSicherheitService: BahnhofField[];
	private glReinigung: BahnhofField[];
	private bkSicherheit: BahnhofField[];
	private bkSiTeamasistent: BahnhofField[];

	

	constructor(region: BahnhofField[], kategorie: BahnhofField[], bhfInfo: BahnhofField[], tlBlm: BahnhofField[], blm: BahnhofField[], glSicherheitService: BahnhofField[],
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


	public get $bhfInfo(): BahnhofField[] {
		return this.bhfInfo;
	}

	public set $bhfInfo(value: BahnhofField[]) {
		this.bhfInfo = value;
	}


	public get $tlBlm(): BahnhofField[] {
		return this.tlBlm;
	}

	public set $tlBlm(value: BahnhofField[]) {
		this.tlBlm = value;
	}
	

	public get $blm(): BahnhofField[] {
		return this.blm;
	}

	public set $blm(value: BahnhofField[]) {
		this.blm = value;
	}

	public get $glSicherheitService(): BahnhofField[] {
		return this.glSicherheitService;
	}

	public set $glSicherheitService(value: BahnhofField[]) {
		this.glSicherheitService = value;
	}

	public get $glReinigung(): BahnhofField[] {
		return this.glReinigung;
	}

	public set $glReinigung(value: BahnhofField[]) {
		this.glReinigung = value;
	}

	public get $bkSicherheit(): BahnhofField[] {
		return this.bkSicherheit;
	}

	public set $bkSicherheit(value: BahnhofField[]) {
		this.bkSicherheit = value;
	}

	public get $bkSiTeamasistent(): BahnhofField[] {
		return this.bkSiTeamasistent;
	}

	public set $bkSiTeamasistent(value: BahnhofField[]) {
		this.bkSiTeamasistent = value;
	}
	
    
}