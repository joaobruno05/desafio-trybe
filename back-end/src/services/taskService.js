const taskModel = require('../models/taskModel');

const addTask = async (taskName) => {
  const taskId = await taskModel.addTask(taskName);

  return taskId;
};

module.exports = {
  addTask,
};
