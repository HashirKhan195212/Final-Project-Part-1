// MVC --> Model, View, Controller (Routers)
let mongoose = require('mongoose')
//create a model class
let bookModel = mongoose.Schema({
    Name:String,
    Author:String,
    Description:String,
    Published:Number,
    Price:Number
},
{
    collection: "Bio_books"
}
)
module.exports = mongoose.model('Book', bookModel)