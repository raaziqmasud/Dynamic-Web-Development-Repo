var express = require('express');

var app = express()

    //
app.get('/', function(req, res){

    //can fill with html content
res.send("hey");})

app.listen(8000, function(){
console.log('serving websites and not drugs')

}); 


