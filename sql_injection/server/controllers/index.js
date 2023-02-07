const express = require('express');
const router = express.Router();

const loginController = require('./LoginController.js');
const loginExController = require('./LoginExController.js');

router.use('/login',loginController);
router.use('/loginEx',loginExController);

module.exports = router;