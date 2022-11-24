const express = require('express')
const router = express.Router()
const ctrls = require('../controllers')

router.get('/', ctrls.products.index)
router.put('/update/:id', ctrls.products.update)
router.get('/:id', ctrls.products.show)

module.exports = router