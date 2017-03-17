//Load npm packages
var express = require('express');
var logger=require("morgan");
var bodyParser=require("body-parser");
var errorHandler=require("errorhandler");

var routes=require('./routes');

//Create new express app
var app = express();
var host="localhost";
var port=1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use("/api/plants",routes.plants);
app.use("/api/animals",routes.animals);

app.use(errorHandler);

//Start express server
app.listen(port,function () {
  console.log('NatureServ listening on port ' + port);
});
