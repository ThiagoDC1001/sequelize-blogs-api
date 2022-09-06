const models = require('../database/models');

const categoriesService = {
  async create(req, res, _next) {
    const { name } = req.body;
    if (!name) { return res.status(400).json({ messagem: '"name" is required' }); }
    const category = await models.Category.create({ name });
    return category;
  },

  async getAll() {
    const categories = await models.Category.findAll(
      { attributes: ['id', 'name'] },
);
    const allCategories = categories.map((e) => e.dataValues);
    return allCategories;
  },
};

module.exports = categoriesService;