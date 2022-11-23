const express = require('express')
const router = express.Router()
const { index, show, update } = require('../controllers/Products.ctrls')

router.get('/', index)
router.put('/update/:id', update)
router.get('/:id', show)

module.exports = router