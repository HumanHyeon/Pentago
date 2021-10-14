var express = require('express');
var router = express.Router();
var app = express()

/* GET home page. */
router.get('/', function(req, res, next) {  
  console.log("Index Page")
  res.render('index');
});

//ejs경로 예상
router.post('/abc', function(req, res) {
  console.log("Move Sign Page");
  res.redirect('login');
})

router.post('/findPwd', function(req, res) {
  console.log("test");
  res.redirect('findPwd');
})

router.post('/findID', function(req, res){
  console.log("Move findID Page");
  res.redirect('findID');
})

router.post('/register', function(req, res) {
  console.log("Move register Page");
  res.redirect('register');
})

module.exports = router;
