//myapi

var http = require('http');
var express = require('express');

var app = express();

var inputs = [{value: true},
		{ value: "on"}];
//this allows us to link index.html
app.use(express.static(__dirname ));

//Express route for incoming rerquests for a customer name
app.get('/inputs/status', function( req, res) {
	res.send(inputs[0])
});
app.get('/inputs/order',function(req, res) {
	res.send(inputs[1])
});

app.get('/inputs/:id', function(req, res) {
	res.send(inputs[req.params.id])
});

app.get('/inputs', function(req, res) {
	res.status(200).send(inputs)
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
