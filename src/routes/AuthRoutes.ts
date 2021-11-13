import express from 'express';
import { healthCheck, loginController } from '../controllers/authController';


const AuthRouter = express.Router();

AuthRouter.route('/healthcheck').get(healthCheck);

AuthRouter.route('/login').post(loginController);

export default AuthRouter;