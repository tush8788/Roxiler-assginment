const express=require('express');
const router = express.Router();
const homeController=require('../../controller/v1/home_controller');

router.get("/getdata",homeController.reqData);

module.exports=router;