const mongoose=require('mongoose');

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

const Sales= mongoose.model("Sales",salesSchema);

module.exports=Sales;