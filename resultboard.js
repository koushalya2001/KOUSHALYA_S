const Profile = require('../models/profile');//REQUIRING MODEL FOR USE
var user=""; //require('./session');//REQUIRING SESSION-PLEASE ADD CORRECT NAME
var $=require('jquery');
let cp,g,co;//DECLARING VARIABLES TO ACCEPT DATA FROM DATABASE
exports.display = (req,res,next) =>
  { console.log('in controller');
    Promise.all([Profile.find().sort([["level",-1],["updated_at",1]]),Profile.countDocuments(),Profile.findOne({'name':user})]).
then(docs => { cp=docs[2];
                g=docs[0];
                co=docs[1]; 
                res.json(g);//TO CHECK IF RETRIEVAL HAPPENED AS EBEN IF RENDERED FRONT END NOT ABLE TO DISPLAY
        
        /*res.render('finalfront',{
        pt :'leaderboard',
        gamer :g,
        count:co,
        current:cp,
      //  rank:n+1
        });*/ //COMMENTING IT OUT AS FRONT END NOT DISPLAYING

}).catch(err =>
  {
console.log('error');
  });
} ;

//BELOW IS THE ATTEMPT TO FIND RANK OF CURRENT USER
/*
Profile.find({"level":{"$gt":cp.level},"updated_at":{"$lt":cp.updated_at}}).count().then(n=>{
  console.log(cp);console.log(g);console.log(co);
res.render('finalfront',{
pt :'leaderboard',
gamer :g,
count:co,
current:cp,
rank:n+1
});
*/
