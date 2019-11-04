// Server setup
const path = require('path')
const express = require('express')
const app = express()
const api = require('./server/routes/api')
const bodyParser=require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/WheatherApp', { useNewUrlParser: true ,useUnifiedTopology: true})

app.use(express.static(path.join(__dirname,  './dist')))
app.use(express.static(path.join(__dirname,  './node_modules')))
app.use('/', api)

const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})

