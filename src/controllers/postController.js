const postService = require('../services/postService');

const postController = {
  async getAll(_req, res) {
    const posts = await postService.getAll();
    res.status(200).json(posts);
  },
};

module.exports = postController;