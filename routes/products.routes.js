const express = require('express')
const router = express.Router()
const { index, show } = require('../controllers/Products.ctrls')

router.get('/products', index)

router.get('/:id', show)

module.exports = router