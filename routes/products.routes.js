const express = require('express')
const router = express.Router()
const { index, show, update } = require('../controllers/Products.ctrls')

const cors = require('cors')

router.get('/', index)
router.put('/:id', cors(), update)
router.get('/:id', show)

module.exports = router