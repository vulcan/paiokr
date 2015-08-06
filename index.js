var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static(path.resolve('.', 'static')));

app.get('/', function(req, res) {
    res.render('home');
});

app.listen(3000);
