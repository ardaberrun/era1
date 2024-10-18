const Express = require('express');
const UserRouter = Express.Router();
const UserController = require('../controllers/user.controller');
const AuthMiddleware = require('../middlewares/auth.middleware');

UserRouter.get('/verify', AuthMiddleware, UserController.verify);
UserRouter.get('/:userId', UserController.getProfileDetails);
UserRouter.patch('/:userId', AuthMiddleware, UserController.updateUser);

module.exports = UserRouter;
