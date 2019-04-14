var express = require('express')
var app = express()
var cors = require('cors')
 
app.use(cors())
app.use(express.static("."));


app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})


// // Create a JavaScript Object with data to store
// var datatosave = {
// 	name: "Shawn",
// 	message: "Hello world"
// };
		


