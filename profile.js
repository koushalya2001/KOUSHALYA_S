const mongoose = require('mongoose');
const  Schema  =mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/test", {useNewUrlParser: true, useCreateIndex: true,useNewUrlParser: true,useUnifiedTopology: true});
const connection = mongoose.connection;


connection.once('open', () => {
	console.log("connected");
});
const profileSchema = new Schema({
name : {
    type: String,
    required : true

},
level :
{
    type: Number,
    required : true
},team:String,
created_at: {type: Date, default: Date.now},
updated_at: {type: Date, default: Date.now,index:true}//INDEX CREATION STEP 1
  });
profileSchema.index({level:-1,updated_at:1});//INDEX CREATION STEP 2
  console.log('created');
var Profile=mongoose.model('Profile',profileSchema);
module.exports= Profile;

//AUTONICREMENT ID ATTEMPT -DROPPED AS EXPENSIVE

//autoIncrement.initialize(connection);
//var autoIncrement=require('mongoose-auto-increment');
//  uid:{type: Schema.Types.ObjectId},
//profileSchema.plugin(autoIncrement.plugin,{model:'Profile',field:'uid',startAt:1,incrementBy:1});
