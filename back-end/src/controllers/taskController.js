const taskService = require('../services/taskService');

const getAllTasks = async (_req, res, next) => {
  try {
    const tasks = await taskService.getAllTasks();

    res.status(201).json(tasks);
  } catch (error) {
    console.log(`Error getAllTasks: ${error.message}`);
    return next(error);
  }
};

const addTask = async (req, res, next) => {
  try {
    const { taskName } = req.body;

    const taskId = await taskService.addTask(taskName);

    res.status(201).json({ _id: taskId, message: 'task added successfully' });
  } catch (error) {
    console.log(`Error addTask: ${error.message}`);
    return next(error);
  }
};

module.exports = {
  getAllTasks,
  addTask,
};
