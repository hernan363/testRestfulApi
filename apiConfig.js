//myapi

var http = require('http');
var express = require('express');

var app = express();

var states = [{currentState: false},
	{targetState: false}];

//this allows us to link index.html
app.use(express.static(__dirname ));

//Express route for incoming rerquests for a customer name
app.get('/api/status', function( req, res) {
	res.send(states[0])
});
app.get('/api/order',function(req, res) {
	states[1].targetState = true;
	if(!(states[0] === states[1])) {
		states[0].currentState = true;
		res.send('The switch was turned on and has a statue of: ' + states[0].currentState);
	} else {
		res.send(states[0].currentState);
		//res.send('The switch was already on');
	}
});

app.get('/api/:id', function(req, res) {
	res.send(states[req.params.id])
});

app.get('/api', function(req, res) {
	res.status(200).send(states)
});

//express route for any other unrecognised incoming requests
app.get('*', function(req, res) {
	res.status(404).send('unrecognised API call');
});

//Epress route handle errors
app.use(function(err, req, res, next) {
	if(req.xhr) {
		res.status(500).send('Ooops, Something went wrong!');
	} else {
		next(err);
	}
});


app.listen(3000);
console.log('app server running at port 3000');
