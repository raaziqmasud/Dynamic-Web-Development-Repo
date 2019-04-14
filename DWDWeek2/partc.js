var express = require('express');
var mustacheExpress = require('mustache-express');
var fs = require('fs');
var app = express()

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function(req, res) {
  res.render('partc', {
    ans: req.query.form_input_url
  });
})
app.get('/processit', function(req,res) {
    var yeah = res.query.url;
    res.send("http://" + yeah);

})


app.listen(8000, function() {
  console.log('port 8000 running')
})