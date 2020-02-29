
const Profile = require('../models/profile');            //REQUIRING MODEL FOR USE
var user="";                                              //require('./session');//REQUIRING SESSION- CHANGE 1
var team="";                                              //REQUIRE TEAM -CHANGE 2
var $=require('jquery');let cp,co,rank;
exports.display = (req,res,next) =>
  { console.log('in controller');var start=new Date();
    Profile.find().sort([["level",-1],["updated_at",1]]).lean().then(docs => {            /*Profile.findOne({'name':"pillaiyar"}).lean()]*/
co=docs.length;

var l=docs.some(function(entry,i)                          //FINDING CURRENT USER AND CURRENT USER RANK
   { if(entry.name=="")                                   //PLEASE WRITE VARIABLE IDENTIFIER WHOSE EMAIL IS REQUIRED FROM SESSION WITHOUT QUOTES
     {
      //rank=i;console.log(i);
       rank=i;
       cp=entry;
      return true;
     }
   }
);
rank=rank+1;//AS INDEX STARTS FROM 0
res.render('frontleader',{
  gamer :docs,
  count:co,
  current:cp,
  rank:rank,
  team:team
});
console.log("current user:",cp);
  console.log("rank of current user: " ,rank);
//res.json(docs[0]);
  }).catch(err =>
    {
  console.log('error');
    });
      } ;
      
      
    // WE CAN INCLUDE RENDER COMMAND ON RESOLVING FRONT END-NOTE
    /*res.render('finalfront',{
      gamer :g,
      count:co,
      current:cp,
      rank:rank
    });*/

//TRAVERSING THROUGH ARRAY
/*;var json=[];cp=docs[1]
json.push(docs[0]);
//var arr=JSON.parse(json);*/
//var task = json.find(FindrankById);
/*function FindrankById(task) {

        return task.name === "pillaiyar";
    }
    res.send(rank);
    /*for(var i=0;i<co;i++)
      { if(json[i].name=="pillaiyar")
            {
              rank=i+1;break;
            }
      }*/
              //res.json(g);
        // const[gamer,count,current]=docs;
      /*res.render('finalfront',{
        gamer :g,
        count:co,
        current:cp,
        rank:rank
      });*/
      /*res.json(cp);
console.log(new Date()-start);*/

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
