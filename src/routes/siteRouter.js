const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/siteControllers')

// router.get('/users', siteController.user)

router.get('/', siteController.home)

module.exports = router