const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WeatherSchema = new Schema({
    name: String ,
    temperature: Number,
    condition:String,
    conditionPic: String
})

const Weather = mongoose.model("Wheather", WeatherSchema)
module.exports = Weather
