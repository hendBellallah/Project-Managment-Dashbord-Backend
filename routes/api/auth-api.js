const router = require("express").Router();
const auth = require("../../middleware/auth");

const authController = require('../../controllers/auth-controller')

// @route   GET api/auth
// @desc    Login user
// @access  Public
router.get("/", authController.login);

// @route   GET api/auth/user
// @desc    Get current user
// @access  Public
router.get("/user", auth, authController.verifyToken);

module.exports = router;