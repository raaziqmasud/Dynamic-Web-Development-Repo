var express = require('express');
var mustacheExpress = require('mustache-express');
var app = express()



app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function(req, res) {
    res.render('PageOne', {
      userName: req.query.form_input_name
    });
  });

// app.get('/answer', function(req, res){
//     var bandName = req.query.band
//     console.log(req.query.band)
//     var x = Math.floor(Math.random() * 3);
//     res.send("I heard " + bandName + " is " + insults[x]);
// })


app.listen(4000, function () {
  console.log('port 4000 running')})