import LoginService from './login.service';
import User from '../user/user';
import {createConnection} from "typeorm";

export default class LoginCtrl {
    private service: LoginService;


	constructor() {
		this.service = new LoginService();
	}
    

    public login = (req, res) => {
        this.service.login(req.body.username, req.body.password).then(
            (loggedIn) => {
                console.log(loggedIn);
                let user: User = new User('test.user', 'test', 'user', 'ADMIN','123-abc');
                if (loggedIn) {
                    res.status(200).json(user);
                } else {
                    res.status(404).json({});
                }
            }
        ).catch(
            (error)=>{
                console.log(error);
                res.status(501).json({});
            }
        );
        
        
    }
}