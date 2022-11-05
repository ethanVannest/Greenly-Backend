const db = require('../models')

const index = (req, res) => {
    db.Cart.find({}, (error, items) => {
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
    db.Cart.create(req.body, (error, createdItems) => {
        if (error) 
        return res.status(400).json({
            error: error.message
        })
        return res.status(200).json(createdCart)
    })
}

const update = (req, res) => {
    db.Cart.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        { new: true }, 
        (error, updatedCart) => {
            if (error)
            return res.status(400).json({
                error: error.message
            })
            return res.status(200).json(updatedCart)
        }
    )
}

const destory = (req, res) => {
    db.Cart.findByIdAndDelete(req.params.id,
        (error, deleteCart) => {
            if (error)
            return res.status(400).json({
                error: error.message
            })
            return res.status(200).json({
                message: `${deleteCart.name} has been deleted.`
            })
        })
}

module.exports = {
    index,
    create,
    update,
    destory
}