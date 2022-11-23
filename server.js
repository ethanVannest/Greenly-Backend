const express = require('express')
const app = express()
const connectDB = require('./config/db.connection')
const routes = require('./routes/products.routes')

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3000

connectDB();

app.use('/api/products', routes )

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}` )
})