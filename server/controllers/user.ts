import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import BaseCtrl from './base';

export default class UserCtrl extends BaseCtrl {

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
