const router = require('express').Router();
const usersController = require('../../controllers/users-contoller');
const auth = require('../../middleware/auth');

// @route   GET api/users
// @desc    Get all users
// @access  Private
router.get('/',auth,usersController.get)

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/',usersController.post)

// @route   PUT api/users
// @desc    Update user
// @access  Private
router.put('/:id',auth,usersController.put)

// @route   DELETE api/users
// @desc    Delete user
// @access  Private
router.delete('/:id',auth,usersController.delete)

module.exports = router;