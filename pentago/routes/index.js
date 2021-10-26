var express = require('express');
var router = express.Router();
var app = express()
const { User } = require('../models/User');

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

router.post('/tryLogin', function(req, res) {
  console.log("Move register Page");
  res.redirect('/');
})

router.post('/signUp', function(req, res) {
  console.log('name : ' + req.body.name);
  console.log('id : ' + req.body.id);
  console.log('password : ' + req.body.password);
  
  User.findOne({ id: req.body.id }, (err, user) => {
    if (err) {
      throw err;
    }
    if (user != null){
      console.log('login fail');
    } else {
      const user = new User({
        name: req.body.name,
        id: req.body.id,
        password: req.body.password
      })

      user.save()
      .then(() => {
        console.log(user);
      })
      .catch((err) => {
        console.log('login err : ' + err);
      })
    }   
  }
  )
  res.redirect('/');
})

router.post('/signIn', function(req, res) {
  console.log('id : ' + req.body.user_id);
  console.log('password : ' + req.body.password);

  User.findOne({ id: req.body.user_id, password: req.body.password }, (err, user) => {
    if (err) {
      throw err;
    } else {
      if (user == null){
        console.log('signIn fail');
      } else {
        console.log('sigIn success');
      }
    }
  })
  res.redirect('/');
})

module.exports = router;
