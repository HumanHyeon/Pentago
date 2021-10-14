var express = require('express');
var router = express.Router();
var app = express();

router.get('/', function(req, res, next) {
  console.log("register page")
	res.render('register');
  });

// router.post('/dev', function(req, res) {
//   console.log("Move findPwd");
//        //res.redirect('findPwd');
// })


  module.exports = router;