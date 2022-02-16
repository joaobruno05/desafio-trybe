const taskService = require('../services/taskService');

const addTask = async (req, res, next) => {
  try {
    const { taskName } = req.body;

    const taskId = await taskService.addTask(taskName);

    res.status(201).json({ id: taskId, message: 'task added successfully' });
  } catch (error) {
    console.log(`Error addTask: ${error.message}`);
    return next(error);
  }
};

module.exports = {
  addTask,
};
