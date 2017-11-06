import UserService from './user.service';
import User from './user';
import * as app from '../app';

export default class UserCtrl {

  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }
  
  public findUser = (req, res) => {
    this.userService.findUser(req.params.id)
      .then(user => {
        app.logger.log('info', 'log msg 123');
        if(user == undefined){
          res.status(404).send(null);
        }else {
          res.status(200).send(user);
        }
      });
  }

  public findAllUsers = (req, res) => {
    this.userService.findAllUsers().then(users => res.send(users));
  }

  public createUser = (req, res) => {
    this.userService.createUser(req.params).then(ok => res.send(ok));
  }
}