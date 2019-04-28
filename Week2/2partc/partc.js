var express = require('express');
var mustacheExpress = require('mustache-express');
var app = express()



app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('partc', function (req, res) {

if (req.query.url){
request(req.query.url, function(error, response, html){
res.send(html);

});
} else{res.render('partc');}

});

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