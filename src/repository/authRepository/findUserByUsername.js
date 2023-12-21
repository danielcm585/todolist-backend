const User = require('../../models/userModel');

const findUserByUsername = async (username) => {
  try {
    const user = await User.findOne({ 
      where: { username: username }
    });
    return user.dataValues;
  }
  catch (err) {
    return null;
  }
}

module.exports = findUserByUsername;