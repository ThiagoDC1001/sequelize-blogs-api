const { Router } = require('express');
const postController = require('../controllers/postController');
const middleware = require('../middlewares');

const postRoute = Router();

postRoute.get('/post', middleware.tokenMiddleware, postController.getAll);
// postRoute.get('/user/:id', middleware.tokenMiddleware, postController.getById);

module.exports = postRoute;