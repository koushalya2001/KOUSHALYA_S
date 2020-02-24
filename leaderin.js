
var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var urlencodedParser=bodyparser.urlencoded({extended:false});
//app.use(urlencodedParser());
app.listen(3000);
app.set('view engine','ejs');
var mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/game", { useNewUrlParser: true ,useUnifiedTopology: true });
var profileSchema=new mongoose.Schema({

  name:String,
  level:Number,
  team:String,
//  created_at:{type:Date,default:Date.now},
  updated_at:{type:Date,default:Date.now}
});
var ProfileSchema= mongoose.model('profileSchema',profileSchema);
app.get('/upload',function(req,res){
res.render('game2');
});
var use,now,levels,tea;
app.post('/upload',urlencodedParser,function(req,res){
  now=new Date();
use=req.body.user;
  levels=req.body.l;
  tea="csk";
  var one=ProfileSchema({name:use,level:levels,team:tea,updated_at:now}).save(function(err,data){ if(err) throw err;
      res.send('thank you');
    console.log("saved");
 //res.redirect('/show');
});
});
module.exports=ProfileSchema;
