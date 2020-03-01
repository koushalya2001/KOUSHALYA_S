const Profile = require('../models/profile');//REQUIRING MODEL FOR USE
var user="shiv"; //require('./session');//REQUIRING SESSION- CHANGE 1
var team="";//REQUIRE TEAM -CHANGE 2
var $=require('jquery');let rank,cp;
exports.display = (req,res,next) =>
  {
    Profile.find().sort([["level",-1],["updated_at",1]]).lean().then(docs => {

res.render('frontleader',{             //PLEASE CHECK VIEW NAME
  gamer :docs,
  current:user
});


  }).catch(err =>
    {
  console.log('error');
    });
      } ;
