var express = require('express')
var db=require("../database.js")
var router = express.Router()

//Get all plants
router.get("/", function(request,response,next){
  db.Animal.find({}, function(err,animals){
    response.send(JSON.stringify(animals));
  })
});

router.get("/:animalid", function(request,response,next){
    db.Animal.find({_id:request.params.animalid}, function(err,animals){
        if(err) return next(err);
        response.send(JSON.stringify(animals));
      });
});

//Create plant and return newly created plant
router.post("/", function(request,response,next){
  var animal=new db.Animal(request.body);
  animal.save(function(err, result){
    if(err) return next(err);
    response.send(result);
  })
});

router.put("/:animalid",function(request,response,next){
  var animal=new db.Animal(request.body);

  db.Animal.findByIdAndUpdate({_id:request.params.animalid}, { "$set": { "fruits": 10 } }, function(err,animal){
    if(err) return next(err);
    response.send(animal);
  });

})

router.delete("/:animalid",function(request,response,next){
  var animal=new db.Animal(request.body);

  db.Animal.findByIdAndRemove({_id:request.params.plantid}, function(err,animal){
    if(err) return next(err);
    response.send(animal);
  });

})

module.exports = router
