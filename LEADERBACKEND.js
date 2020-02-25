const Profile = require('../models/profile');//REQUIRING MODEL FOR USE
var user=require('./session');//REQUIRING SESSION
var $=require('jquery');let cp,g,co;
exports.display = (req,res,next) =>
  {Promise.all([Profile.find().sort([["level",-1],["updated_at",1]]),Profile.countDocuments(),Profile.findOne({'name':user})]).
then(docs => { cp=docs[2];g=docs[0];co=docs[1];
        // const[gamer,count,current]=docs;
           Profile.find({"level":{"$gt":cp.level},"update_time":{"$lt":cp.update_time}}).count().then(n=>{
             console.log(cp,g,docs);
  res.render('display',{
    pt :'leaderboard',
    gamer :g,
    count:co,
    current:cp,
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
