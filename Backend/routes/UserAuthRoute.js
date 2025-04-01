const authController = require('../controllers/UserAuthController');
const express = require('express');
const router = express.Router();

router.post('/newuser',authController.newUser)
router.post('/login', authController.login)

module.exports = router;