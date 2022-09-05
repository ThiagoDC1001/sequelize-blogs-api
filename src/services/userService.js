const models = require('../database/models');
const createToken = require('../helpers/createToken');

const userService = {
  async createUser(user) {
    const { email } = user.email;    
    const { dataValues: { id } } = await models.User.create({ 
      displayName: `${user.displayName}`,
      email: `${user.email}`,
      password: `${user.password}`,
      image: `${user.image}`,
     });
     const token = createToken.makeToken({ email, id });
    return token;
  },

  async getByEmail(email) {    
    const user = await models.User.findOne({ where: { email } });        
    return user;
  },

  async getAll() {
    const users = await models.User.findAll(
      { attributes: ['id', 'displayName', 'email', 'image'] },
);
    const allUsers = users.map((e) => e.dataValues);
    return allUsers;
  },

};

module.exports = userService;