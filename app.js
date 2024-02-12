const express = require('express')
const mysql = require('mysql')
const dotenv = require('dotenv')
const path = require('path')
const bodyParser = require('body-parser')

dotenv.config({path: './.env'})

const app = express()

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

const publicDir = path.join(__dirname,'./public')
app.use(express.static(publicDir))

app.use('/bootstrap',express.static(__dirname + '/node_modules/bootstrap/dist'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.set('view engine','hbs')

db.connect((err) => {
    if(err){
        console.log(err)
    } else {
        console.log("Connect")
    }
})

app.use('/',require('./routes/page'))
app.use('/auth',require('./routes/auth'))

app.listen(3000,() => {
    console.log('Server run 3000')
})