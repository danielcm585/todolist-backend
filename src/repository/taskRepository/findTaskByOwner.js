const Task = require("../../models/taskModel");

const findTaskByOwner = async (ownerId) => {
  try {
    const tasks = await Task.findAll({
      where: { owner_id: ownerId },
    });
    return tasks.map((item) => item.dataValues);
  }
  catch (err) {
    return null;
  }
}

module.exports = findTaskByOwner;