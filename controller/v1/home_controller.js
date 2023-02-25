const axios=require('axios');
const SalesDB=require('../../models/sales');

// feching data from thirdparty api
module.exports.reqData= async function(req,res){
    try{
        // call third party api for data using axios
        let response=await axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json");

        // adding month fild in response
        for(let i of response.data){
            let date=new Date(i.dateOfSale);
            i.month=date.getMonth()+1
        }
        //insert data in DB
        let salesData=await SalesDB.create(response.data);
        //return res
        return res.status(200).json({
            message:"Data Available in DB",
            data:salesData
        })
    }
    catch(err){
        //handle data already exist in db error
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
    }
}

//genrate report month wise
module.exports.genrateReport=async function(req,res){
    try{
        //find product using month
        let salesOfMonth=await SalesDB.find({month:req.params.month});
        
        // internal API Call using axios
        //get total sale amount, total number of sold items, and total number of not sold items
        let saleAmt=await axios.get(`http://localhost:8000/v1/sales/getamount/${req.params.month}`);
        //get all price range count of given month
        let priceRange=await axios.get(`http://localhost:8000/v1/sales/pricerange/${req.params.month}`)
        //get all category count of given month
        let categoryRange=await axios.get(`http://localhost:8000/v1/sales/categoryrange/${req.params.month}`)

        //send res
        return res.status(200).json({
            salesamount:saleAmt.data,
            priceRange:priceRange.data.Range,
            category:categoryRange.data.categorise
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}