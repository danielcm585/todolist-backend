const User = require('../../models/userModel');

const findUserById = async (id) => {
  try {
    const user = await User.findOne({ 
      where: { id: id }
    });
    return user.dataValues;
  }
  catch (err) {
    return null;
  }
}

module.exports = findUserById;