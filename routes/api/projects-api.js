const router = require('express').Router();
const projectsController = require('../../controllers/projects-controller');
const auth = require('../../middleware/auth');

// @route   GET api/projects
// @desc    Get all projects
// @access  Public
router.get('/',projectsController.get)

// @route   GET api/projects
// @desc    Get project by id
// @access  Public
router.get('/:id',projectsController.getById)

// @route   GET api/projects
// @desc    Add project
// @access  Private
router.post('/',auth,projectsController.post)

// @route   GET api/projects
// @desc    Update project
// @access  Private
router.put('/:id',auth,projectsController.put)

// @route   GET api/projects
// @desc    Delete project
// @access  Private
router.delete('/:id',auth,projectsController.delete)

module.exports = router;