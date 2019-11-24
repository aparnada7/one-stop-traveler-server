
const express = require('express')
const router = express.Router()
const yelp = require('yelp-fusion');

const apiKey = 'qfjf-vrfja9R-Jp2nYuzfAShPORGeXSO8eBsxsOLk8a8ojbkx3mIRH0v9rj3AsqWM8kMo6dUD95pLfpX_TOT-g5zDMQ1LOaa11Qiil0PC4FcPhMM9ibtnY-pLOjYXXYx';
const client = yelp.client(apiKey);

var Features = require("../models/features");


router.post("/search", function(req, res) {
    console.log("Inside search info request:");
    // console.log(req);
    console.log("City : ", req.body.city);
    console.log("Preference 1: ", req.body.preference1)
    // let request = JSON.parse(req);
    // console.log("----> ", request);
    // let city = JSON.stringify(req.body.city);
    // let preference1 = JSON.stringify(req.body.preference1);
    let city = req.body.city;
    let preference1 = req.body.preference1;
    let proximity = req.body.proximity
    console.log("String proximity : ", city, preference1, proximity);
    // console.log("String Preference 1: ", req.body.preference1)
    // {$and: [{"stars":{$gte: 4.5} }, {"city":"Las Vegas"}, {"name": {$regex:"Fitness", $options:"$i"}   }]}
    //   Features.findOne({$and: [{"stars":{$gte: 4.5} }, {"city":city}, {} ]}, function(err, data){
    //Sample Mongo query:
    // db.features.find({$and: [{"stars":{$gte: 4.5} }, {"city":"Scottsdale"}, {"name": {$regex:"Shop", $options:"$i"}   }]});
    Features.findOne({$and: [{"stars":{$gte: 4.5} }, {"city":city}, {"name": {$regex:preference1, $options:"$i"}   }]}, function(err, data){
        if(err){
        console.log(err);
        res.send({})
        }
        else{
            console.log("Data fetched from features collection:")
            //Call API here
            const searchRequest = {
                term:req.body.preference2,
                location: req.body.city,
                latitude: 37.786882, //data.latitude
                longitude:-122.399972, //data.longitude
                radius: proximity,
                limit: 5
            };
            var prettyJson;
            client.search(searchRequest).then(response => {
                //console.log('Here')
                let firstResult = response.jsonBody.businesses;
                //console.log('length ', firstResult.length)
                for (var i = 0; i < firstResult.length; i++){
                    firstResult[i]['pref1'] = data.name
                    firstResult[i]['pref1Stars'] = data.stars
                    firstResult[i]['pref1Cat'] = preference1
                    //console.log(firstResult)
                }
                //console.log(firstResult)
                 prettyJson = JSON.stringify(firstResult);
                res.send(prettyJson)
                //console.log(prettyJson);
                //console.log(data)

            }).catch(e => {
                console.log(e);
            });


            //console.log(prettyJson)
            //res.json({'data' :prettyJson})
        // callback(null, data);
        }
});
})


module.exports = router
