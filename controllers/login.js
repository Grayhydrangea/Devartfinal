const mysql = require('mysql')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

exports.login = (req,res) => {
    console.log(req.body)
    
    const {email,password} = req.body

    db.query('SELECT email FROM member WHERE email = ?',[email],async(err,results) => {
        if(err)
        if(!results[0] || !await bcrypt.compare(password,results[0].password)){
            return res.render('login',{
                message: 'Emailหรือรหัสผ่านไม่ถูกต้อง กรุณาตรวจสอบ'
            })
        } else {
            console.log(results)
            return res.render('index')
        }

    })
}