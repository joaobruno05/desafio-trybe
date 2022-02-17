const { ObjectId } = require('mongodb');
const taskModel = require('../models/taskModel');

const getAllTasks = async () => {
  const tasks = await taskModel.getAllTasks();

  // const tasksNameMap = tasks.map(({ taskName }) => ({ taskName: taskName.toLowerCase() }));
  // const tasksNameSort = tasksNameMap.sort();
  // console.log(tasksNameSort);

  return tasks;
};

const addTask = async (taskName) => {
  const taskId = await taskModel.addTask(taskName);

  return taskId;
};

const updateTask = async (id, taskName) => {
  const task = await taskModel.updateTask(new ObjectId(id), taskName);

  return task;
};

const deleteTask = async (id) => {
  const task = await taskModel.deleteTask(new ObjectId(id));

  return task;
};

module.exports = {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
};
