var http = require('http');
var url = require('url');
var express = require('express');
var path = require('path');

var app = express();

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname +'/index.html'));
})
.get('/envoiFormulaire', function (req, res){

})


app.listen(8080);
