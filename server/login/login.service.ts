import User from '../user/user';


export default class LoginService {


	constructor() {
	}
    

    public login(username:String, password: String) {
        
        return new User('test.user', 'test', 'user', 'ADMIN','123-abc');
    }
}