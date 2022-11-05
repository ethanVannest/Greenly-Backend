const db = require('../models')

const index = (req, res) => {
    db.Products.find({}, (error, items) => {
        if(error) return res.status(400).json({
            error: error.message
        })
        return res.status(200).json({
            items
        })
    })
}
