const express = require('express')
require('dotenv').config()
const cors = require('cors')
const EmailsRouter = require('./controllers/Emails')

const port = process.env.PORT || 4000

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:5173']
}))

app.get('/', (req, res) => {
  res.json({ message: 'running...' })
})

app.get('/images/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  res.sendFile(`${__dirname}/${imageName}`)
});

app.use('/emails', EmailsRouter)

app.listen(port, () => {
  console.log('server running port ' + port)
})