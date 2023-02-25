const axios=require('axios');
const SalesDB=require('../../models/sales');

module.exports.reqData= async function(req,res){

    try{

        let response=await axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json");

        // console.log(response);
        
        for(let i of response.data){
            // console.log(i);
            let date=new Date(i.dateOfSale);
            i.month=date.getMonth()+1
            // console.log(" month ",date.getMonth()+1)
        }

        let salesData=await SalesDB.create(response.data);

        

        return res.status(200).json({
            message:"Data Available in DB",
            data:salesData
        })
    }
    catch(err){
        if(err.code==11000){
            return res.status(403).json({
                message:"Data Allready exist in DB"
            })
        }
        else{
            return res.status(500).json({
                message:"Internal server error"
            })
        }
        return
        console.log("error :: ",err);
        return res.status(500)
    }
}