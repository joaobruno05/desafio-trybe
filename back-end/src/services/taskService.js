const taskModel = require('../models/taskModel');

const getAllTasks = async () => {
  const tasks = await taskModel.getAllTasks();

  return tasks;
};

const addTask = async (taskName) => {
  const taskId = await taskModel.addTask(taskName);

  return taskId;
};

module.exports = {
  getAllTasks,
  addTask,
};
