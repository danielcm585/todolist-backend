const getUserData = async (req, res) => {
  return res.status(200).json({
    message: 'User logged in',
    data: req.user
  });
}

module.exports = getUserData;