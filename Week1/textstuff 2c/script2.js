var http = require('http');

http.createServer(function (req, res) {
  var html = buildHtml(req);

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);
}).listen(8080);

function buildHtml(req) {
  var header = '';
  var body = 'file.txt';

  // concatenate header string
  // concatenate body string

return '<!DOCTYPE html>'
       + '<html><head>' + header + '</head><body>' + body + '</body></html>';
};

const fs = require ('fs')

fs.readFile('file.txt', 'utf-8', (err, data)=> {


    if (err) throw err;
    console.log(data)
});