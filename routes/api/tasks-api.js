const router = require('express').Router();
const tasksController = require('../../controllers/tasks-controller');
const auth = require('../../middleware/auth');

// @route   GET api/tasks
// @desc    Get all tasks
// @access  Public
router.get('/',tasksController.get)

// @route   GET api/tasks
// @desc    Get task by id
// @access  Public
router.get('/:id',tasksController.getById)

// @route   GET api/tasks
// @desc    Add task
// @access  Private
router.post('/',auth,tasksController.post)

// @route   GET api/tasks
// @desc    Update task
// @access  Private
router.put('/:id',auth,tasksController.put)

// @route   GET api/tasks
// @desc    Delete task
// @access  Private
router.delete('/:id',auth,tasksController.delete)

module.exports = router;