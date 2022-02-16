const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

// rotas
router.get('/', taskController.getAllTasks);

router.post('/tasks', taskController.addTask);

module.exports = router;
