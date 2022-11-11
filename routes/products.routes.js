const express = require('express')
const router = express.Router()

const ctrls = require('../controllers/Products.ctrls')

router.get('/', ctrls.index)

router.get('/:id', ctrls.show)

module.exports = router