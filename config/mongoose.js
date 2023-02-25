const mongoose=require('mongoose');

mongoose.set('strictQuery',false);

mongoose.connect("mongodb://localhost/Rpxiler-assignment");

const db=mongoose.connection;

db.on('error',()=>{console.log("error in connect DB")});

db.once('open',()=>{ console.log("Database connect successfully")});

module.exports=db;