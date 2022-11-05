const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    price: {
        type: Integer,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    stocked: {
        type:Boolean,
        required: true
    }, 
    image: {
        type: String,
        required: true
    }
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart