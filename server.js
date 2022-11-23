const express = require('express')
const app = express()
const connectDB = require('./config/db.connection')
const routes = require('./routes/products.routes')
const cors = require('cors')
app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.use(
    cors({
        origin: "*"
    })
)
  
//   app.put('/:id', (req, res) => {
//     request(
//       { url: 'http://localhost:3001/' },
//       (error, response, body) => {
//         if (error || response.statusCode !== 200) {
//           return res.status(500).json({ type: 'error', message: err.message });
//         }
  
//         res.json(JSON.parse(body));
//       }
//     )
//   });
const PORT = process.env.PORT || 3000

connectDB();

app.use('/api/products/', routes )

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}` )
})