const express = require('express')
const router = express.Router()

const cartControllers = require('../app/controllers/cartControllers')

router.get('/', cartControllers.cart)

module.exports = router