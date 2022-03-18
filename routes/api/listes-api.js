const router = require('express').Router();
const listesController = require('../../controllers/listes-controller');
const auth = require('../../middleware/auth');

// @route   GET api/listes
// @desc    Get all listes
// @access  Public
router.get('/',listesController.get)

// @route   GET api/listes
// @desc    Get liste by id
// @access  Public
router.get('/:id',listesController.getById)

// @route   GET api/listes
// @desc    Add liste
// @access  Private
router.post('/',auth,listesController.post)

// @route   GET api/listes
// @desc    Update liste
// @access  Private
router.put('/:id',auth,listesController.put)

// @route   GET api/listes
// @desc    Delete liste
// @access  Private
router.delete('/:id',auth,listesController.delete)

module.exports = router;