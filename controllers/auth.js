const mysql = require('mysql')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

exports.register = (req,res) => {
    console.log(req.body)
    
    const {username,email,password,confirmpassword} = req.body

    db.query('SELECT email FROM member WHERE email = ?',[email],async(err,results) => {
        if(err){
            console.log(err)
        }

        if(results.length>0){
            return res.render('register',{
                message: 'Emailมีผู้ใช้งานแล้ว'
            })
        } else if(password !== confirmpassword){
            return res.render('register',{
                message: 'รหัสยืนยันไม่ตรงกัน กรุณาตรวจสอบ'
            })
        }

            let hashedPassword = await bcrypt.hash(password,8)
            console.log(hashedPassword)

            db.query('INSERT INTO member SET ?',{username: username,email: email,password: hashedPassword},(err,results) => {
                if(err){
                    console.log(err)
                } else{
                    console.log(results)
                    return res.render('login'),{
                        message: 'ลงทะเบียนสำเร็จ'
                    }
                }
            })
                

    })
}
