export default class User {
    private username: String;
    private firstname: String;
    private lastname: String;
    private role: String;
    private token: String;


	constructor($username: String, $firstname: String, $lastname: String, $role: String, $token: String) {
		this.username = $username;
		this.firstname = $firstname;
		this.lastname = $lastname;
		this.role = $role;
		this.token = $token;
	}
    


	public get $username(): String {
		return this.username;
	}

	public set $username(value: String) {
		this.username = value;
	}

	public get $firstname(): String {
		return this.firstname;
	}

	public set $firstname(value: String) {
		this.firstname = value;
	}

	public get $lastname(): String {
		return this.lastname;
	}

	public set $lastname(value: String) {
		this.lastname = value;
	}

	public get $role(): String {
		return this.role;
	}

	public set $role(value: String) {
		this.role = value;
	}

	public get $token(): String {
		return this.token;
	}

	public set $token(value: String) {
		this.token = value;
	}
    
}