// routes.js (or whatever the file name is)
const express = require('express');
const {auth} =require('../middleware/auth')
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register); // No middleware here
router.post('/login', auth, login);  // Ensure 'auth' is a function

module.exports = router;
