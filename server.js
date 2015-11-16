var express = require('express');
var app = express();

var port = 3000;

var middleware = require('./middleware.js');


app.use(middleware.logger);


//Challenge

// /about  -- Send Back About Us

app.get('/about', middleware.requireAuthentication, function(req,res)
{
	res.send('About Us!!');
});


app.use(express.static(__dirname + '/public'))

app.listen(port, function()
{
	console.log('Express Server Started- running on port: ' + port);
});


//Challenge 2   -print the port
