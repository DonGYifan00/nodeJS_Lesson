  var express = require('express');
var router = express.Router();
var data = require('../sucai/data.json');

router.get('/', function(req, res, next) {
  res.render('login');
});

router.post("/login",function(req,res,next){
  for(var i = 0; i < data.users.length; i++){
    if(data.users[i].username == req.body.user && data.users[i].password == req.body.pwd){
      res.render('list',{chapterList:data.chapterList});
    }
    else{
      res.render('error',{message:'用户名密码错误'});
    }
  }    
});

module.exports = router;