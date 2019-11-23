
const express = require('express')
const router = express.Router()
var Features = require("../models/features");


router.post("/search", function(req, res) {
    console.log("Inside search info request:");
    console.log("City : ", req.body.city);
    console.log("Preference 1: ", req.body.preference1)
    let city = JSON.stringify(req.body.city);
    let preference1 = JSON.stringify(req.body.preference1);
    console.log("String City : ", city, preference1);

    // console.log("String Preference 1: ", req.body.preference1)
    // {$and: [{"stars":{$gte: 4.5} }, {"city":"Las Vegas"}, {"name": {$regex:"Fitness", $options:"$i"}   }]}
    //   Features.findOne({$and: [{"stars":{$gte: 4.5} }, {"city":city}, {} ]}, function(err, data){
    Features.findOne({$and: [{"stars":{$gte: 4.5} }, {"city":city}, {"name": {$regex: preference1, $options:"$i"}   }]}, function(err, data){
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
