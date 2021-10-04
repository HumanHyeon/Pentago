var express = require('express');
var router = express.Router();

const config = require('../config/db')
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
.then(() => console.log("DB Connected..."))
.catch(err => console.log(err));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
