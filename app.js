var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path')
var bodyParser = require('body-parser')
// var fs = require('fs')
// var listData = ('./data/listData.json')

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

var listData = {items: [
  {id: 1, name: 'Bananas', category: 'shopping', description: 'but some bananas'},
  {id: 2, name: 'Apples', category: 'shopping', description: 'but some bananas'},
  {id: 3, name: 'Carrots', category: 'shopping', description: 'but some bananas'}
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
  console.log(req.body);

  // var id = generateId()

  var newObj = {
    name: req.body.name,
    description: req.body.textArea,
    id: id
  }

  listData.items.push(newObj)
  res.redirect("/list");
})

// function generateId() {
//   var ids = []
//   for (var i = 0; i < listData.items.length; i++) {
//     ids.push(listData.items[i].id)
//     console.log(ids)
//   }
//
//   var id = 1;
//   while (ids.includes(id)) {
//     id++;
//   }
//   return id;
// }


app.listen(3000);
