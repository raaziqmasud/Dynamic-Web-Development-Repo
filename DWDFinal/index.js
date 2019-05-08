var express = require('express')
var app = express()
var cors = require('cors')
var mustacheExpress = require('mustache-express')
var bodypars = require('body-parser')
var urlencodedParser = bodypars.urlencoded({ extended: true });
let url = require('url')
let path = require('path')
let { Client } = require('pg')

app.use(cors())
app.use('/static', express.static('MTT/public'));
app.use(urlencodedParser);

let client;

if (process.env.DATABASE_URL){
    client = new Client({connectionString: process.env.DATABASE_URL, ssl: true});
  } else {
    client = new Client({database: 'DWDForum'});
  }
  client.connect();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);


app.get('/', function (req, res) {
    console.log('index is running!')
    res.render('index', {});
})

app.listen(process.env.PORT || 7000, function () {
    console.log('Example app listening on port 7000!')
})