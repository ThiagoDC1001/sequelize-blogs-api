const { Router } = require('express');
const authController = require('../controllers/authController');
const middleware = require('../middlewares');

const authRoute = Router();

authRoute.post('/login', middleware.loginMiddleware, authController.login);

module.exports = authRoute;