const db = require('../models')

const index = (req, res) => {
    db.Products.find({}, (error, items) => {
        if(error) 
        return res.status(400).json({
            error: error.message
        })
        return res.status(200).json({
            items
        })
    })
}

const create = (req, res) => {
    db.Products.create(req.body, (error, createdItems) => {
        if (error) 
        return res.status(400).json({
            error: error.message
        })
        return res.status(200).json(createdItems)
    })
}

const update = (req, res) => {
    db.Products.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        { new: true }, 
        (error, updatedProducts) => {
            if (error)
            return res.status(400).json({
                error: error.message
            })
            return res.status(200).json(updatedProducts)
        }
    )
}

const destory = (req, res) => {
    db.Products.findByIdAndDelete(req.params.id,
        (error, deleteProducts) => {
            if (error)
            return res.status(400).json({
                error: error.message
            })
            return res.status(200).json({
                message: `${deleteProducts.name} has been deleted.`
            })
        })
}