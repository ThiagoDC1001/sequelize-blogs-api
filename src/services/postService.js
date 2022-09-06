const models = require('../database/models');

const postService = {

  async getAll() {
    const posts = await models.BlogPost.findAll({ 
      include: [
        { model: models.User, as: 'user', attributes: { exclude: ['password'] } },
        { model: models.Category, as: 'categories', through: { attributes: [] } },  
      ],
    });
    return posts;
  },
};

module.exports = postService;