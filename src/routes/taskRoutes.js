const express = require('express');
const createNewTask = require('../services/taskServices/createNewTask');
const getAllTasks = require('../services/taskServices/getAllTasks');
const getTaskById = require('../services/taskServices/getTaskById');
const toggleTask = require('../services/taskServices/toggleTask');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

router.post('/create', isAuthenticated, createNewTask);
router.get('/all', isAuthenticated, getAllTasks);
router.get('/:id', isAuthenticated, getTaskById);
router.post('/toggle/:id', isAuthenticated, toggleTask);

module.exports = router;
