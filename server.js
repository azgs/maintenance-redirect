var express = require('express')
  , fs = require('fs')
  , path = require('path')
  ;

var app = express()
  , home = path.join(__dirname, 'index.html')
  , style = path.join(__dirname, 'style')
  , vendor = path.join(__dirname, 'vendor')
  ;

app.use('/style', express.static(style));
app.use('/vendor', express.static(vendor));

app.get('/', function (req, res) {
  fs.readFile(home, 'utf8', function (err, text) {
    res.send(text);
  })
});

app.listen(3000, function () {
  console.log('Listening on port %d', this.address().port);
});