const mongoose=require('mongoose');
//set propertise 
mongoose.set('strictQuery',false);
//connect with mongodb
mongoose.connect("mongodb://localhost/Roxiler-assignment");
//stoing connection in db veriable
const db=mongoose.connection;
//handle error 
db.on('error',()=>{console.log("error in connect DB")});
//handle connection success
db.once('open',()=>{ console.log("Database connect successfully")});
//export
module.exports=db;