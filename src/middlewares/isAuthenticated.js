const jwt = require('jsonwebtoken');
const findUserById = require('../repository/authRepository/findUserById');

const isAuthenticated = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  console.log(token)
  if (!token) return res.status(401).json({
    message: 'Not logged in'
  });
  try {
    const { userId } = jwt.verify(token, process.env.TOKEN);
    const user = await findUserById(userId);
    if (!user) return res.status(404).json({
      message: 'User not found'
    });
    const { password, ...userData } = user;
    req.user = userData;
    next()
  }
  catch (err) {
    return res.status(401).json({
      message: 'Token expired'
    });
  }
}

module.exports = isAuthenticated;