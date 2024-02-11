const express = require('express');
const router = express.Router();
const product = require('../controllers/product');

// Routes
router.post('/product', create);
  
module.exports = router;