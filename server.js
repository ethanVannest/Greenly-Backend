const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

require('./config/db.connection')

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}` )
})