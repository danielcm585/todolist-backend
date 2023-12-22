const Task = require('../../models/taskModel');

const updateTaskById = async (task_id, data) => {
  try {
    const task = await Task.update(data, {
      where: { id: task_id }
    });
    return task;
  }
  catch (err) {
    return null;
  }
}

module.exports = updateTaskById;