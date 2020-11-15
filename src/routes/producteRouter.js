const express = require('express')
const router = express.Router()
const producteController = require('../app/controllers/producteController')


router.get('/create', producteController.create)
router.post('/store', producteController.store)
router.get('/:slug', producteController.show)

module.exports = router