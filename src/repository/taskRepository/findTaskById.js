const Task = require('../../models/taskModel');

const findTaskById = async (id) => {
  try {
    const task = await Task.findOne({ 
      where: { id: id }
    });
    return task.dataValues;
  }
  catch (err) {
    return null;
  }
}

module.exports = findTaskById;