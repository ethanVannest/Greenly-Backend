const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    Name: {
        type:String,
        required: true
    },
    Price: {
        type: Integer,
        required: true
    }, 
    Description: {
        type: String,
        required: true
    },
    Stocked: {
        type:Boolean,
        required: true
    }, 
    Image: {
        type: String,
        required: true
    }
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart