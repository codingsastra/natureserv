var express = require('express')
var db=require("../database.js")
var router = express.Router();

//Get all plants
router.get("/", function(request,response,next){
  db.Plant.find({}, function(err,plants){
    response.json(plants);
  })
});

router.get("/:plantid", function(request,response,next){
      db.Plant.find({_id:request.params.plantid}, function(err,plants){
        if(err) return next(err);
        response.send(JSON.stringify(plants));
      });
});

//Create plant and return newly created plant
router.post("/", function(request,response,next){
  var plant=new db.Plant(request.body);
  plant.save(function(err, result){
    if(err) return next(err);
    response.send(result);
  })
});

router.put("/:plantid",function(request,response,next){
  var plant=new db.Plant(request.body);

  db.Plant.findByIdAndUpdate({_id:request.params.plantid}, { "$set": { "fruits": 10 } }, function(err,plant){
    if(err) return next(err);
    response.send(plant);
  });

})

router.delete("/:plantid",function(request,response,next){
  var plant=new db.Plant(request.body);

  db.Plant.findByIdAndRemove({_id:request.params.plantid}, function(err,plant){
    if(err) return next(err);
    response.send(plant);
  });

})

module.exports = router
