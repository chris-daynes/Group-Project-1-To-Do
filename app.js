var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var listData = {items: [
  {name: 'Bananas'},
  {name: 'Apples'},
  {name: 'Carrots'}
]}
//This is the home page which redirects us to /home
app.get('/' ,function (req, res) {
  res.redirect('/list')
})
//this is the home page
app.get('/list', function (req, res) {
    res.render('home', listData);
});

app.get('/list/new', function (req, res) {
  res.render('newItem')
})



app.listen(3000);
