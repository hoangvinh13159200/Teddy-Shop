const express = require('express')
const userControllers = require('../app/controllers/userControllers')
const router = express.Router()

const userController = require('../app/controllers/userControllers')

// router.get('/users', userController.user)
router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/users', userControllers.user);
router.get('/:slug', userController.show);

module.exports = router
