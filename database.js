var mongoose=require('mongoose');
//Mongoose - Connect to database
mongoose.connect("mongodb://localhost:27017/natureserv")

//Create plant schema
var plantSchema=mongoose.Schema({
   name:{
     type: String,
     required: true
   },
   description: String,
   scientific_name: String,
   classification: String,
   isVegetable: {
     type: Boolean,
     default: false
   },
   views:0,
   createDate: {
     type: Date,
     default: Date.now
   }
},{strict:false});

//Create model
exports.Plant=mongoose.model("Plant",plantSchema,"plants");


var animalSchema=mongoose.Schema({
   name:{
     type: String,
     required: true
   },
   description: String,
   scientific_name: String,
   classification: String,
   isWildAnimal: {
     type: Boolean,
     default: false
   },
   views:0,
   createDate: {
     type: Date,
     default: Date.now
   }
},{strict:false});

//Create model
exports.Animal=mongoose.model("Animal",animalSchema,"animals");
