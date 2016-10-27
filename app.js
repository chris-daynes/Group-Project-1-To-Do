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

app.get('/', function (req, res) {
    res.render('home', listData);
});

app.listen(3000);
