const createTask = require('../../repository/taskRepository/createTask');

const createNewTask = async (req, res) => {
  try {
    const task = await createTask(
      req.body.name, 
      req.body.description, 
      new Date(req.body.dueDate),
      req.user.id
    );
    if (!task) throw new Error();
    return res.status(201).json({
      message: 'Task created successfully',
      data: task
    });
  }
  catch (err) {
    return res.status(500).json({ 
      message: 'Failed creating task'
    });
  }
}

module.exports = createNewTask;