// Hashir Khan 100911091
// Afeef Hossain 100923314
// Kapiraj Sivakumar 100817815
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
    // creating a collection
    collection: "Calculate"
}
)
module.exports = mongoose.model('Calculator', calculatorModel)