const bcrypt = require('bcrypt');
const login = require('./login');
const createUser = require('../../repository/authRepository/createUser');

const register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await createUser(req.body.username, hashedPassword);
    if (!user) throw new Error();
    return login(req, res);
  }
  catch (err) {
    return res.status(500).json({ 
      message: 'Failed creating user' 
    });
  }
}

module.exports = register;