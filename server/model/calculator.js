// MVC --> Model, View, Controller (Routers)
let mongoose = require('mongoose')
//create a model class
let calculatorModel = mongoose.Schema({
    Course:String,
    CourseCode:String,
    Professor:String,
    Percentage:Number,
    MarksG:Number,
    MarksT:Number
},
{
    collection: "Calculate"
}
)
module.exports = mongoose.model('Calculator', calculatorModel)