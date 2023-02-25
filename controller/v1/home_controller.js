module.exports.reqData=function(req,res){
    return res.status(200).json({
        message:"Data Available in DB"
    })
}