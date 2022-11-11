require('dotenv').config();

const productItems = require('./data/seederData')
const connectDB = require('./config/db.connection.js')
const Product = require('./models/Products')

connectDB();

const importData = async() => {
    try {
        await Product.insertMany(productItems);

        console.log("Seed complete")

        process.exit();

    } catch (error) {
        console.log('Failed Data Seed')
        // console.log(error)
        process.exit(1);
    }
}

importData();