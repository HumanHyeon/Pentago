var express = require('express');
var router = express.Router();
var app = express();

router.get('/', function(req, res, next) {
  console.log("land login page")
	res.render('login');
  });

// router.post('/dev', function(req, res) {
//   console.log("Move findPwd");
//        //res.redirect('findPwd');
// })

// router.get('/dev', function(req, res, next) {
//   console.log("나 봐라 이거 동작한다.")
// });


  module.exports = router;
  