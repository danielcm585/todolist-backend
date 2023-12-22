const findTaskById = require("../../repository/taskRepository/findTaskById");
const updateTaskById = require("../../repository/taskRepository/updateTaskById");

const toggleTask = async (req, res) => {
  console.log(req.params.id)
  const task = findTaskById(req.params.id);
  if (!task) return res.status(404).json({
    message: 'Failed'
  });
  const updatedTask = updateTaskById(req.params.id, { isDone: !task.isDone });
  if (!updatedTask) return res.status(404).json({
    message: 'Failed'
  });
  return res.status(200).json({
    message: 'Success',
    data: updatedTask
  });
}

module.exports = toggleTask;