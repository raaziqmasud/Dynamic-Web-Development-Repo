const request = require('request');
request('https://www.popxtwo.co', { json: true }, (err, res, body) => {
if (err) { return console.log(err); }
console.log(body.url);
console.log(body.explanation);
console.log('body:', body);
});