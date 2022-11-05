const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    }, 
    Price: {
        type: Integer,
        required: true    
    }, 
    Description:  {
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


        