import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

export default class UserCtrl {

  login = (req, res) => {
    res.send(JSON.stringify({
      id: "1",
      username:"test.user",
      firstName:"test",
      lastName:"user",
      token: "123"
    })
);
  }

}
