const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    price: {
        type: Integer,
        required: true    
    }, 
    description:  {
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

const Products = mongoose.model( 'Products', productSchema )

module.exports = Products 