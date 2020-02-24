const Profile = require('../models/profile');//REQUIRING MODEL FOR USE
var user=require('./session');//REQUIRING SESSION
var $=require('jquery');let cp;
exports.display = (req,res,next) =>
  {Promise.all([Profile.find().sort([["level",-1],["updated_at",1]]),Profile.countDocuments(),Profile.findOne({'name':user})]).
then(docs => { cp=result[2];
         const[gamer,count,current]=docs;
           Profile.find({"level":{"$gt":cp.level},"update_time":{"$lt":cp.update_time}}).count().then(n=>{
  res.render('display',{
    pt :'leaderboard',
    gamer :gamer,
    count:count,
    current:current,
    rank:n+1
  });
}).
catch(err =>
  {
console.log('error');
  });
}).catch(err =>
  {
console.log('error');
  });
} ;
