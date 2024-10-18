const Express = require('express');
const AuthRouter = Express.Router();
const AuthController = require('../controllers/auth.controller');

AuthRouter.post('/sign-up', AuthController.signUp);
AuthRouter.post('/sign-in', AuthController.signIn);

module.exports = AuthRouter;
