const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.get('/', ctrls.products.get)
router.delete('/:id', ctrls.products.destroy)
router.put('/:id', ctrls.products.update)

module.exports = router