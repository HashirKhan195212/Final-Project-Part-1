// MVC --> Model, View, Controller (Routers)
let mongoose = require('mongoose')
//create a model class
let calculatorModel = mongoose.Schema({
    Name:String,
    Author:String,
    Description:String,
    Published:Number,
    Price:Number
},
{
    collection: "Calculate"
}
)
module.exports = mongoose.model('Calculator', calculatorModel)