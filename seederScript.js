require('dotenv').config();

const productData = require('./data/seederData')
const connectDB = require('./config/db.connection.js')
const Product = require('./models/Products')

const importData = async () => {
    try {

        await Product.insertMany(productData)

        console.log('Data Imported')

        process.exit()
    } catch(error) {
        console.log('Err with Data Import')
        console.log(error)
        process.exit(1)
    }
}

importData();