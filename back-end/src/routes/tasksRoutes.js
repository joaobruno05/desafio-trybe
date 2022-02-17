const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

// rotas
router.get('/', taskController.getAllTasks);

router.post('/task', taskController.addTask);

router.put('/:id', taskController.updateTask);

module.exports = router;
