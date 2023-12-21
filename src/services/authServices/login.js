const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const findUserByUsername = require('../../repository/authRepository/findUserByUsername');

const login = async (req, res) => {
  const user = await findUserByUsername(req.body.username);
  if (!user) return res.status(404).json({
    message: 'Wrong username or password'
  });
  const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
  if (!isPasswordCorrect) return res.status(400).json({
    message: 'Wrong username or password'
  });
  const token = jwt.sign(
    { userId: user.id }, 
    process.env.TOKEN, 
    { expiresIn: '1000s' }
  );
  const refreshToken = jwt.sign(
    { userId: user.id }, 
    process.env.REFRESH_TOKEN
  );
  return res.status(200).json({
    message: 'Login successful',
    data: {
      token: token,
      refreshToken: refreshToken,
    }
  })
}

module.exports = login;