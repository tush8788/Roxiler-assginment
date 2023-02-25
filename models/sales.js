const mongoose=require('mongoose');
//create schema
const salesSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    sold:{
        type:Boolean,
        required:true
    },
    dateOfSale:{
        type:Date,
        required:true
    },
    month:{
        type:Number,
        required:true
    }
});
//create model
const Sales= mongoose.model("Sales",salesSchema);
//export
module.exports=Sales;