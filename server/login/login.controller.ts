import LoginService from './login.service';
import User from '../user/user';
import {createConnection} from "typeorm";

export default class LoginCtrl {
    private service: LoginService;


	constructor() {
		this.service = new LoginService();
	}
    

    login(req, res) {
        
        let user: User = new User('test.user', 'test', 'user', 'ADMIN','123-abc');//this.service.login(req.params.username, req.params.password);
        if (user != null) {
            res.status(200).json(user);
        } else {
            res.status(404).json({});
        }
    }
}