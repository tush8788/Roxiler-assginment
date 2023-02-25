const express=require('express');
const router = express.Router();
const salesController=require('../../controller/v1/sales_controller');

//get total sale amount, total number of sold items, and total number of not sold items 
router.get('/getamount/:month',salesController.totalSales);
//get all price range count of given month
router.get('/pricerange/:month',salesController.getPriceRange);
//get all category count of given month
router.get('/categoryrange/:month',salesController.getCategoryCount);

module.exports=router;