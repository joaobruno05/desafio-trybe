const { ObjectId } = require('mongodb');
const taskModel = require('../models/taskModel');
const errorDefault = require('../error/errorDefault');

const getAllTasks = async () => {
  const tasks = await taskModel.getAllTasks();

  return tasks;
};

const addTask = async (taskName) => {
  const taskId = await taskModel.addTask(taskName);

  if (!taskName) throw (errorDefault(400, 'Task Name is required'));

  return taskId;
};

const updateTask = async (id, taskName) => {
  if (!ObjectId.isValid(id)) throw (errorDefault(400, 'This Id is invalid'));

  const task = await taskModel.updateTask(new ObjectId(id), taskName);

  if (!task) throw (errorDefault(404, 'Task not found'));

  return task;
};

const deleteTask = async (id) => {
  if (!ObjectId.isValid(id)) throw (errorDefault(400, 'This Id is invalid'));

  const task = await taskModel.deleteTask(new ObjectId(id));

  if (!task) throw (errorDefault(404, 'Task not found'));

  return task;
};

module.exports = {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
};
