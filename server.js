var path = require("path");
var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./client")));

require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// listen on 8000
app.listen(8000, function() {
 console.log("listening on port 8000!!");
})