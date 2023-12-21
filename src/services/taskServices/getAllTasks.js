const findTaskByOwner = require('../../repository/taskRepository/findTaskByOwner');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await findTaskByOwner(req.user.id);
    return res.status(201).json({
      message: 'Success' ,
      data: tasks || []
    });
  }
  catch (err) {
    return res.status(500).json({ 
      message: 'An error occurred'
    });
  }
}

module.exports = getAllTasks;