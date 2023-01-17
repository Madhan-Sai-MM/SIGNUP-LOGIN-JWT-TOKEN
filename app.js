const express = require('express') //commonJs Modules
const { initDB } = require('./dbConfig')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/authRouter')
const studentRouter = require('./routes/studentRouter')
//const bodyParser= require('body-parser');

const app = express()

//load all key-value pairs in .env file to process.env obj
const dotenv = require('dotenv')
dotenv.config()

initDB()

//middleware
app.use(express.static('public'))

//The urlencoded method within body-parser tells body-parser to extract data from the <form>
app.use(express.urlencoded())

//middleware
app.use(express.json())
app.use(cookieParser())

//Routers
app.use('/', authRouter)
app.use('/students', studentRouter)

//GET METHOD
app.get('/signup', function(req, res) {
  res.sendFile(__dirname + '/public/signup.html')
  //res.redirect('/login.html')
})

//GET METHOD
app.get('/login', function(req, res) {
  //res.send("hi mm")
  res.sendFile(__dirname + '/public/login.html')
})

//POST METHOD
//postEmployes is just a route to retrieve the html from
app.get('/postStudents', function(req,res){
  res.sendFile(__dirname + '/public/post.html')
})

//UPDATE METHOD
app.get('/update', function(req,res){
  res.sendFile(__dirname + '/public/update.html')
})


app.listen(8000, () => {
  console.log("Started Successfully")
})