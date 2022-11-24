const express = require('express')
const app = express()
const connectDB = require('./config/db.connection') 
const routes = require('./routes')
const cors = require('cors')

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.use(
    cors({
        origin: "*"
    })
)
  
const PORT = process.env.PORT || 3000

connectDB();
app.use('/api/products', routes.products )

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}` )
})