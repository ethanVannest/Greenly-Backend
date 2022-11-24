const express = require('express')
const router = express.Router()

const ctrls = require('../controllers/Cart.ctrls')
const { cart } = require('./index.routes')

router.get('/cart', ctrls.cart.get)
router.post('/create', ctrls.cart.create)
router.delete('/remove/:id', ctrls.cart.destroy)
router.put('/updateCart/:id', ctrls.cart.update)

module.exports = router;