
const Profile = require('../models/profile');                       //REQUIRING MODEL FOR USE
var user="pillaiyarappa";                                         //REQUIRING SESSION- CHANGE 1
var $=require('jquery');
let rank,cp;
exports.display = (req,res,next) =>                              //ROUTE -/display
  {
    Profile.find().sort([["level",-1],["updated_at",1]]).lean().then(docs => {
      var l=docs.some(function(entry,i)
         { if(entry.name==user)
           {
            //rank=i;console.log(i);
             rank=i;
             cp=entry;

            return true;
           }
         }
      );

    rank=rank+1;
res.render('frontleader',{                                                  //PLEASE CHECK VIEW NAME
  gamer :docs,
  current:cp,
  rank:rank
});


  }).catch(err =>
    {
  console.log('error');
    });
      } ;
      //PLEASE USE FOR CHECKING
        /*console.log('in controller');*/
        /*
        var l=docs.some(function(entry,i)
           { if(entry.name==user)
             {
              //rank=i;console.log(i);
               rank=i;
               cp=entry;
              return true;
             }

           }
           rank=rank+1;
        */
      //RANK CALCULATION
      //var start=new Date();//res.json(docs);
       /*let cp,rank;/*Profile.findOne({'name':"pillaiyar"}).lean()]*/
      /*var l=docs.some(function(entry,i)
         { if(entry.name==user)
           {
            //rank=i;console.log(i);
             rank=i;
             cp=entry;
            return true;
           }
           rank=rank+1;
         }
         console.log("current user:",cp);
           console.log("rank of current user: " ,rank);
         */
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
