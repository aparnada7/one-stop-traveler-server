var mongoose = require("mongoose");

var Features = new mongoose.Schema({
   business_id : String,
   name : String,
   address : String,
   city : String,
   state : String,
   postal_code : String,
   stars : Number,
   review_count : Number,
   is_open : Number,
   categories : String
   // "hours" : {
   //     "Monday" : "0:0-0:0", "Tuesday" : "9:0-19:0", "Wednesday" : "9:0-17:0", "Thursday" : "9:0-19:0", "Friday" : "8:0-17:0", "Saturday" : "8:0-17:0"
   //     }
   });


module.exports = mongoose.model("features", Features);
