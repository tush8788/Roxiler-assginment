const SalesDB=require('../../models/sales');

//get total sale amount, total number of sold items, and total number of not sold items
module.exports.totalSales =async function(req,res){
    try{
        // find product in DB using month
        let saleData=await SalesDB.find({month:req.params.month});
        //veriables 
        let total_sale_amount=0,total_sold_items=0,total_not_sold_items=0;
        
        for(let sale of saleData){
          //find sold items  
          if(sale.sold){
            total_sale_amount+=sale.price;
            total_sold_items+=1;
          }
          else{
            total_not_sold_items+=1;
          }
        }
        
        //return res
        return res.status(200).json({
            total_sale_amount:total_sale_amount,
            total_sold_items:total_sold_items,
            total_not_sold_items:total_not_sold_items
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}

//get price range count
module.exports.getPriceRange=async function(req,res){
    try{
        // find product in DB using month
        let salesData=await SalesDB.find({month:req.params.month});
        //price range 
        let priceRange=[0,0,0,0,0,0,0,0,0,0];
        
        for(let product of salesData){
            if(product.price>=0 && product.price<=100){
                priceRange[0]+=1;
            }
            else if(product.price>=101 && product.price<=200){
                priceRange[1]+=1;
            }
            else if(product.price>=201 && product.price<=300){
                priceRange[2]+=1;
            }
            else if(product.price>=301 && product.price<=400){
                priceRange[3]+=1;
            }
            else if(product.price>=401 && product.price<=500){
                priceRange[4]+=1;
            }
            else if(product.price>=501 && product.price<=600){
                priceRange[5]+=1;
            }
            else if(product.price>=601 && product.price<=700){
                priceRange[6]+=1;
            }
            else if(product.price>=701 && product.price<=800){
                priceRange[7]+=1;
            }
            else if(product.price>=801 && product.price<=900){
                priceRange[1]+=1;
            }
            else if(product.price>=901 ){
                priceRange[9]+=1;
            }
        }

        // return 
        return res.status(200).json({
            Range:[
                {
                    Range:"0-100",
                    Count:priceRange[0]
                },
                {
                    Range:"101-200",
                    Count:priceRange[1]
                },
                {
                    Range:"201-300",
                    Count:priceRange[2]
                },
                {
                    Range:"301-400",
                    Count:priceRange[3]
                },
                {
                    Range:"401-500",
                    Count:priceRange[4]
                },
                {
                    Range:"501-600",
                    Count:priceRange[5]
                },
                {
                    Range:"601-700",
                    Count:priceRange[6]
                },
                {
                    Range:"701-800",
                    Count:priceRange[7]
                },
                {
                    Range:"801-900",
                    Count:priceRange[8]
                },
                {
                    Range:"901-above",
                    Count:priceRange[9]
                }
            ]
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message:"Internal Server error"
        })
    }
}

//get category count
module.exports.getCategoryCount=async function(req,res){
    try{
        // find product in DB using month
        let saleData=await SalesDB.find({month:req.params.month});
        
        let categoryRange=[];

        //make set for storing unique category
        let categorySet=new Set();

        //string category inside set 
        for(let product of saleData){
            categorySet.add(product.category);
        }

        //storing category and count of category inside categoryRange 
        for(let category of categorySet){

            let count=0;
            for(let product of saleData){
                if(category==product.category){
                   count+=1;
                }
            }

            categoryRange.push({
                categorys:category,
                count:count
            })
        }

        //return res
        return res.status(200).json({
            categorise:categoryRange
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message:"Internal Server error"
        })
    }
}