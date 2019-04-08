var express = require('express');
var Mus= require('mustache-express');

var app = express()

app.engine('html', mustacheExpress());
app.set('view.engine', 'html');
app.set('views',__dirname);

    //
app.get('/', function(req, res){

    //can fill with html content
res.send("hey");})
res.render('form')

app.listen(8000, function(){
console.log('serving websites and not drugs')

}); 


