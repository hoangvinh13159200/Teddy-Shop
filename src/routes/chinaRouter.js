const express = require('express')
const chinaRoute = express.Router()
const chinaController = require('../app/controllers/chinaControllers')

chinaRoute.get('/', chinaController.index)

module.exports = chinaRoute