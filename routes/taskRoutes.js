const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { validateTaskData } = require('../middlewares/validation');
const { errorHandler } = require('../middlewares/errorHandler');

// POST /tasks
router.post('/', validateTaskData, taskController.createTask);

// GET /tasks
router.get('/', taskController.getAllTasks);

// GET /tasks/:id
router.get('/:id', taskController.getTaskById);

// PUT /tasks/:id
router.put('/:id', validateTaskData, taskController.updateTaskById);

// DELETE /tasks/:id
router.delete('/:id', taskController.deleteTaskById);

module.exports = router;
