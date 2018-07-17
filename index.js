/*
*Primary file for the API
*
*/

var http = require("http");

// server should responsd to all te request with a string
var server = http.createServer(function(req, res){
	res.end("Hello World\n");
});

// start the sever and it will listen on port 3000
server.listen(3000, function(){
	console.log("Listening to port 3000");
});