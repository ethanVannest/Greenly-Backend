const express = require('express')
const router = express.Router()
const { index, show, update } = require('../controllers/Products.ctrls')


const cors = require('cors')

// app.use(function(req, res, next) {
// res.header("Access-Control-Allow-Origin", "http://localhost:3000/cart"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

router.get('/', index)
router.put('/:id', update)
router.get('/:id', show)

module.exports = router