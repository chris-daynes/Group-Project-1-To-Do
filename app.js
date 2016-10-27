var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path')
var bodyParser = require('body-parser')


var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

var listData = {items: [
  {name: 'Bananas', category: 'shopping', description: 'but some bananas'},
  {name: 'Apples', category: 'shopping', description: 'but some bananas'},
  {name: 'Carrots', category: 'shopping', description: 'but some bananas'}
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

app.post('/list', function (req, res) {
  console.log (req.body)
})



app.listen(3000);
