const http = require('http');
const url = require('url');
const express = require('express');
const path = require('path');
const dbase = require('baseDonnee');
const bodyParser = require('body-parser');
const app = express();

const db = new DataBase();

app.use(bodyParser.urlencoded({ extended: false }))
.get('/', function(req, res){
  res.sendFile(path.join(__dirname +'/index.html'));
})
.post('/post', function (req, res){
  const postBody = req.body;
  var nom = postBody.nom ;
  var service = postBody.service ;
  var magasin = postBody.magasin;
  var msg = postBody.texte;
  //db.NewTopic(nom, magasin, service, msg);
  console.log(db);
})
.get('/client',function(req, res){
  res.render('viewClient.ejs',{});
})
.get('/admin', function(req, res){
  res.render('viewAdmin.ejs',{});
})


app.listen(8080);
