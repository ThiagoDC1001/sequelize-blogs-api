const models = require('../database/models');
const createToken = require('../helpers/createToken');

const usersService = {
  async createUser(user) {
    const { email } = user.email;
    const { dataValues: { id } } = await models.User.create({ 
      displayName: `${user.displayName}`,
      email: `${user.email}`,
      password: `${user.password}`,
      image: `${user.image}`,
     });
     const token = createToken.makeToken({ email, id });
    return { token };
  },

  async getByEmail(email) {    
    const user = await models.User.findOne({ where: { email } });        
    return user;
  },
};

module.exports = usersService;