export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: String;
    role: String;

    constructor(username: string, fn: string) {
        this.username = username;
        this.firstName = fn;
    }

    public get $username(): String {
        return this.username;
    }

    public get $firstname(): String {
        return this.firstName;
    }
}
