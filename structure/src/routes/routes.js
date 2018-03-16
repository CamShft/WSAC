const express = require('express');
const router = express.Router();

const userController = require('../controllers/usersController');


/**
 *  UserController
 * */
router.get('/users', userController.getUsers );
router.get('/user', userController.getUser );

module.exports = router;