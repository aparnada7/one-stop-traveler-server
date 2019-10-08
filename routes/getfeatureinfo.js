const express = require('express')
const router = express.Router()
var Features = require("../models/features");

router.get("/getfeatureinfo/:star", function(req, res) {
    console.log("Inside get features info request:");
    console.log("Parameter : ", req.params.star);
    let findStar = req.params.star;
    Features.findOne({stars: findStar}, function(err, data){
        if(err){
        console.log(err);
        throw err
        }
        else{
            console.log("Data fetched from features collection:", data)
            res.send(data)
        // callback(null, data);
        }
});
})


module.exports = router
