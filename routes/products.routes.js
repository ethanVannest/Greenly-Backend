const express = require('express')
const router = express.Router()

const ctrls = require('../controllers/Products.ctrls')

router.get('/products', ctrls.index)

router.get('/:id', ctrls.show)

module.exports = router