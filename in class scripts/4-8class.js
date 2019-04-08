var fs = require('fs');

var html = "<html><head></head><body><h1>HOLA WORLD</h1></body></html>";

fs.writeFile('hey.html', html, function(err) {
    if (err)
    {console.log(err);}});