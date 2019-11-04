const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')
const requestPromise = require("request-promise")
const WheatherDB = require("../models/City")

const APPID = "693487d5ce7f67db0872c3ce4dbe3b15"
const WheatherAPIbasicURL = "https://api.openweathermap.org/data/2.5/weather"

// const data = new WheatherDB({name:"Noam", temperature :23, condition: "hot", conditionPic:"nana"})
// data.save()

router.get('/city/:cityName', async function (req, res) {
    const cityName = req.params.cityName
    try {
        const weatherData =  await requestPromise(`${WheatherAPIbasicURL}?q=${cityName}&units=metric&APPID=${APPID}`)
        res.send(JSON.parse(weatherData))
    }
    catch (err) {
        res.send(`city not found`)
    }

})
router.get('/cities', async function (req, res) {
      const allCities=await WheatherDB.find({})
        res.send(allCities)
})

router.post('/city', async function (req, res) {
    const newCity =new WheatherDB(req.body)
    newCity.save()
      res.send("Saved")
})
router.delete('/city/:cityName', async function (req, res) {
    const cityName =req.params.cityName
    await WheatherDB.deleteOne({name:cityName})
    res.send("deleted")
})
// router.post('/new', function (req, res) {

//     let PostObj = {
//         name: req.body.name,
//         amount: req.body.amount,
//         date: (req.body.date) ? moment(req.body.date).format("LLLL") : moment(new Date()).format("LLLL"),
//         group: req.body.group
//     }
//     const newExpense = new Expense(PostObj)
//     newExpense.save().then(function () {
//         Expense.count({}).exec(function (err, count) {
//             console.log("We have a " + count + " EXpenses");
//         })
//     })
//     res.end()
// })

// router.put('/update', function (req, res) {
//     Expense.findOneAndUpdate
//         (
//             { group: `${req.body.group1}` },
//             { $set: { group: `${req.body.group2}` } },
//             { new: true }
//         )
//         .exec(function (err, expense) {
//             res.send(expense._id + " changed to " + expense.group);
//         })

// })
// router.get('/expenses/:group', function (req, res) {
// }












module.exports = router
