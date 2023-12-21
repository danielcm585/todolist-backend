const findTaskById = require("../../repository/taskRepository/findTaskById");

const getTaskById = async (req, res) => {
  const task = await findTaskById(req.params.id);
  if (!task) return res.status(404).json({
    message: 'Task not found'
  });
  if (task.owner_id)
  return res.status(200).json({
    message: 'Success',
    data: task
  });
}

module.exports = getTaskById;