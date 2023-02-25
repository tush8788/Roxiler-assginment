const express=require('express');
const db=require('./config/mongoose')
const port=8000;

const app=express();

app.use(express.urlencoded({extended:false}));

app.use('/',require('./routes/index'));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("server is up on port :: ",port);
})