var express = require("express");
var app = express();
var http = require("http").Server(app);

app.use(express.static("public"));

http.listen(3000, function(){
	console.log("Listening on port 3000")
})