import * as express from 'express';

import UserCtrl from './controllers/user';

export default function setRoutes(app) {

  const router = express.Router();
  const userCtrl = new UserCtrl();

  // Users
  router.route('/login').post(userCtrl.login);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
