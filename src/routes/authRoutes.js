const express = require('express');
const login = require('../services/authServices/login');
const register = require('../services/authServices/register');
const getUserData = require('../services/authServices/getUserData');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/', isAuthenticated, getUserData);

module.exports = router;
