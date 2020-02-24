var express=require('express');
var app=express();
app.listen(3000);
app.set('view engine',express);
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/game', {useNewUrlParser: true,useUnifiedTopology: true});
var profileSchema=new mongoose.Schema({
  name:String,
  level:Number,
  team:String,
//  created_at:{type:Date,default:Date.now},
  updated_at:{type:Date,default:Date.now}
});var arr=[];
var ProfileSchema= mongoose.model('profileSchema',profileSchema);
app.get('/show',function(req,res){
ProfileSchema.find({},function(err, docs) {
if (err)
console.log(err);arr.push(docs);
console.log(docs);
}).sort([["level", "descending"], ["updated_at", "ascending"]]);
res.render('i',{gamer:arr});

/*ProfileSchema.estimatedDocumentCount({},function(err,count){if(err) //TO REDUCE DATABASE ACCESS TIME
console.log(err);
res.render('i',{c:count});
});
mongoose.connection.close();*/ 
});
//var om=require('./gamein');
