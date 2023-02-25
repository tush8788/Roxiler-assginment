const express=require('express');
const router = express.Router();
// import home controller
const homeController=require('../../controller/v1/home_controller');

//geting data form thirdparty api and store in DB
router.get("/getdata",homeController.reqData);

//genrate sales report
router.get('/salesreport/:month',homeController.genrateReport);

//sales url redirect to sales file
router.use('/sales',require('./sales'));

module.exports=router;