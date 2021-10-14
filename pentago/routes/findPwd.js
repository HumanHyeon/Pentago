var express = require('express');
var router = express.Router();
var app = express();

router.get('/', function(req, res, next) {
  console.log("land findPwd Page")
	res.render('findPwd');
});

router.post('/findPwd', function(req, res) {
  console.log("test");
  //res.redirect('findPwd');
})

module.exports = router;
  