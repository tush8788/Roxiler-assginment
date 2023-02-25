const express=require('express');
const db=require('./config/mongoose');
const port=8000;

const app=express();
//handle req
app.use('/',require('./routes/index'));
//listen 
app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("server is up on port :: ",port);
})