const User = require('../../models/userModel');

const createUser = async (username, password) => {
  try {
    const user = await User.create({
      username: username,
      password: password
    });
    return user.dataValues;
  }
  catch (err) {
    return null;
  }
}

module.exports = createUser;