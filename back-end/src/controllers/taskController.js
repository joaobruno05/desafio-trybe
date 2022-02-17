const taskService = require('../services/taskService');

const getAllTasks = async (_req, res, next) => {
  try {
    const tasks = await taskService.getAllTasks();

    return res.status(200).json(tasks);
  } catch (error) {
    console.log(`Error getAllTasks: ${error.message}`);
    return next(error);
  }
};

const addTask = async (req, res, next) => {
  try {
    const { taskName } = req.body;

    const taskId = await taskService.addTask(taskName);

    return res.status(201).json({ _id: taskId, message: 'task added successfully' });
  } catch (error) {
    console.log(`Error addTask: ${error.message}`);
    return next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { taskName } = req.body;

    const task = await taskService.updateTask(id, taskName);

    return res.status(200).json(task);
  } catch (error) {
    console.log(`Error updateTask: ${error.message}`);
    return next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await taskService.deleteTask(id);

    return res.status(200).json(task);
  } catch (error) {
    console.log(`Error deleteTask: ${error.message}`);
    return next(error);
  }
};

module.exports = {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
};
