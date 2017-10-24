import * as express from 'express';
import LoginCtrl from './login/login.controller';
import BahnhofCtrl from './bahnhof/bahnhof.controller';

export default function setRoutes(app) {

  const router = express.Router();
  const loginCtrl = new LoginCtrl();
  const bahnhofCtrl = new BahnhofCtrl();

  // Login
  router.route('/login').post(loginCtrl.login);

  // Bahnhofe
  router.route('/bahnhof/:id').get(bahnhofCtrl.findOne);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
