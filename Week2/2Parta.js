var express = require('express');
var app = express();

app.get("/", function(req,res){
    console.log('Hello World');
});

app.listen(8000, function(){
    console.log('listening port:8000');
});