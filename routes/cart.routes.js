const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.get('/', ctrls.cart.get)
router.post('/', ctrls.cart.create)
router.delete('/:id', ctrls.cart.destroy)
router.put('/:id', ctrls.cart.update)

module.exports = router