const mysql = require('mysql')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { connect } = require('../routes/page')

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
                    return res.render('index'),{
                        message: 'ลงทะเบียนสำเร็จ'
                    }
                }
            })
                

    })
}

exports.getlogin = (req, res) => {
    res.render('login');
};

exports.postlogin = (req, res) => {
    const { email, password } = req.body;
    // ค้นหาผู้ใช้จากฐานข้อมูล
    const queryString = 'SELECT * FROM member WHERE email = ? AND password = ?';
    db.query(queryString, [email, password], (error, results) => {
        if (error) {
            console.error('Error fetching user:', error);
            return res.status(500).send('Internal Server Error');
        }
        if (results.length === 0) {
            // หากไม่พบผู้ใช้ ให้แสดงข้อความแจ้งเตือน
            return res.render('login', { error: 'Invalid username or password' });
        }
        // หากพบผู้ใช้ ให้ทำการล็อกอินและเปลี่ยนเส้นทางไปยังหน้า dashboard
        req.session.isLoggedIn = true;
        res.redirect('/index');
    });
};