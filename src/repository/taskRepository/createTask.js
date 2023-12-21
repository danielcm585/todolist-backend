const Task = require('../../models/taskModel');

const createTask = async (name, description, dueDate, ownerId) => {
  try {
    const task = await Task.create({
      name: name,
      description: description,
      due_date: dueDate,
      owner_id: ownerId
    });
    console.log(task)
    return task.dataValues;
  }
  catch (err) {
    console.log(err)
    return null;
  }
}

module.exports = createTask;