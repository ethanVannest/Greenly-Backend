const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')


router.get('/cart', ctrls.cart.index)
router.post('/create', ctrls.cart.create)
router.delete('/remove/:id', ctrls.cart.remove)
router.put('/updateCart/:id' , ctrls.cart.update)

module.exports = router;