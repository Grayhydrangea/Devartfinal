const express = require('express')

const router = express.Router()

router.get('/',(req,res) => {
    res.render('login')
})

router.get('/index',(req,res) => {
    res.render('index')
})

router.get('/login',(req,res) => {
    res.render('login')
})

router.get('/register',(req,res) => {
    res.render('register')
})

router.get('/menu',(req,res) => {
    res.render('menu')
})

router.get('/like',(req,res) => {
    res.render('like')
})

router.get('/upload',(req,res) => {
    res.render('upload')
})

router.get('/user',(req,res) => {
    res.render('user')
})

router.get('/web2',(req,res) => {
    res.render('web2')
})

router.get('/support',(req,res) => {
    res.render('support')
})

router.get('/about',(req,res) => {
    res.render('about')
})

router.get('/contact',(req,res) => {
    res.render('contact')
})

module.exports = router