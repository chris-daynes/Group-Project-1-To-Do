var express = require('express');
var exphbs  = require('express-handlebars');
var listData = require('./data/listData.json')

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home', listData);
});

app.listen(3000);
