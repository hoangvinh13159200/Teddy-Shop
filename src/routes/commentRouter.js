const express = require('express')
const router = express.Router()
const commentController = require('../app/controllers/commentController')


router.get('/', commentController.showcm)

module.exports = router