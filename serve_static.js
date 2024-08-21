const express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req,res){
    res.send('You have successfully created second app!');
})

var server = app.listen (8081, function (){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://127.0.0.1:8081/Images/logo.jpeg",host, port)
})