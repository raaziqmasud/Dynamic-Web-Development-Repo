var fs = require('fs');

var html = "<html><head></head><body><h1>I dont know if it works but it will. I dont know its broken but it works. hello world it makes sense.</h1></body></html>";

fs.writeFile('hey.html', html, function(err) {
    if (err)
    {console.log(err);}}); 
