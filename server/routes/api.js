const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')
const requestPromise = require("request-promise")
const WheatherDB = require("../models/City")

const APPID = "693487d5ce7f67db0872c3ce4dbe3b15"
const WheatherAPIbasicURL = "https://api.openweathermap.org/data/2.5/weather"

router.get('/city/:cityName', async function (req, res) {
    const cityName = req.params.cityName
    try {
        const weatherData =  await requestPromise(`${WheatherAPIbasicURL}?q=${cityName}&units=metric&APPID=${APPID}`)
        res.send(JSON.parse(weatherData))
    }
    catch (err) {
         res.status(400)
        res.send(err.message)
        
    }

})
router.get('/cities', async function (req, res) {
      const allCities=await WheatherDB.find({})
     res.send(allCities)
})

router.post('/city', function (req, res) {
    const newCity =new WheatherDB({...req.body})
    newCity.save()
    res.send("Saved")
    
})
router.delete('/city/:cityName', async function (req, res) {
    const cityName =req.params.cityName
    await WheatherDB.deleteOne({name:cityName})
    res.send("deleted")
})












module.exports = router
