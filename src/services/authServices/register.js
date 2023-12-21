const bcrypt = require('bcrypt');
const createUser = require('../../repository/authRepository/createUser');

const register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await createUser(req.body.username, hashedPassword);
    if (!user) throw new Error();
    const { password, ...userData } = user;
    return res.status(201).json({
      message: 'User created successfully',
      data: userData
    });
  }
  catch (err) {
    return res.status(500).json({ 
      message: 'Failed creating user' 
    });
  }
}

module.exports = register;