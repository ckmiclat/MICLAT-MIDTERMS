const express = require('express');
var app = express ();

app.get('/', function (req,res){
    console.log("There is GET request for the homepage!");
    res.send('Here is the GET method!');
})

app.post ('/', function (req, res){
    console.log("A POST request for the homepage is accessed");
    res.send('Here is the POST Method!');
})

app.get ('/list_user', function (req, res){
    console.log("Got a GET request for the /list_user");
    res.send('This is Page Listing');
})

app.get ('/ab*cd', function (req, res){
    console.log("Got a Get request for /ab*cd");
    res.send('Pattern Match Page');
})

var server = app.listen (4000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening ay http://127.0.0.1:8081/Images/logo.jpeg", host, port)
})