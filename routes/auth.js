const express = require('express')
const authController = require('../controllers/auth')

const router = express.Router()

router.post('/register',authController.register)
router.get('/login',authController.getlogin)
router.post('/login',authController.postlogin)

module.exports = router