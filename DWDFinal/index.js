var express = require('express')
var app = express()
var cors = require('cors')
var mustacheExpress = require('mustache-express')
var bodypars = require('body-parser')
var urlencodedParser = bodypars.urlencoded({ extended: true });
let url = require('url')
let path = require('path')
var { Client } = require('pg')
var client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
client.connect()

var client2 = new Client({database: 'db1'})
client2.connect()



app.use(cors())
app.use('/static', express.static('MTT/public'));
app.use(urlencodedParser);

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function (req, res) {
    console.log('index is running!')
    res.render('index', {});
    

    client2.query('SELECT * FROM users', (err, resSQL) => {
        if (err) {
          console.log(err.stack)
        } else {
            let theArray = resSQL.rows
            // res.render('index', {
            //     theArray
            // });
        }
      })

      client.query('SELECT * FROM users', (err, resSQL) => {
        if (err) {
          console.log(err.stack)
        } else {
            let theArray = resSQL.rows
            // res.render('index', {
            //     theArray
            // });
        }
      })
})

app.post('/here', function (req, res) {
  
let name = req.body.name 
  if (name===undefined){
console.log("no name")
} else {

    client2.query('INSERT INTO users (name) VALUES (\'' + name + '\')', (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
            console.log('\'' + name + '\' posted successfully')
        }
      })

      client.query('INSERT INTO users (name) VALUES (\'' + name + '\')', (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
            console.log('\'' + name + '\' posted successfully')
        }
      })

      console.log('\'' + name + '\' posted successfully')
}




let age = req.body.age 
  if (age===undefined){
console.log("no age")
} else {
    client2.query('INSERT INTO users (age) VALUES (\'' + age + '\')', (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
            console.log('\'' + age + '\' posted successfully')
        }
      })

      client.query('INSERT INTO users (age) VALUES (\'' + age + '\')', (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
            console.log('\'' + age + '\' posted successfully')
        }
      })

    console.log(age)
}

let rap = req.body.email
if (rap === undefined){
    console.log("no answer for rap")
} else {
    console.log(rap)
    client2.query('INSERT INTO users (email) VALUES (\'' + rap + '\')', (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
            console.log('\'' + rap + '\' posted successfully')
        }
      })

      client.query('INSERT INTO users (email) VALUES (\'' + rap + '\')', (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
            console.log('\'' + rap + '\' posted successfully')
        }
      })
}

res.redirect('/')


})

app.listen(process.env.PORT || 7000, function () {
    console.log('Example app listening on port 7000!')
})