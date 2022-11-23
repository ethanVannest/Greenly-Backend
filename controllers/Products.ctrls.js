const Product = require('../models/Products')
const db = require('../models/Products')


const index = async (req, res) => {
    try {
        const products = await Product.find({});

        res.json(products)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Error'})
    }
}
const show = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Error'})
    }
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

module.exports = {
    index,
    show,
    create,
    update,
    destory
}