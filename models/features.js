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

   // var features = new mongoose.Schema({
   //    "business_id" : "giC3pVVFxCRR89rApqklyw",
   //    "name" : "Knot Salon",
   //    "address" : "4848 E Cactus Rd, Ste 100",
   //    "city" : "Scottsdale",
   //    "state" : "AZ",
   //    "postal_code" : "85254",
   //    "latitude" : 33.600071,
   //    "longitude" : -111.977371,
   //    "stars" : 5,
   //    "review_count" : 5,
   //    "is_open" : 1,
   //    "attributes" : {
   //      "BusinessAcceptsCreditCards" : "True",
   //      "BusinessParking" : "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
   //      "GoodForKids" : "True",
   //      "RestaurantsPriceRange2" : "2",
   //      "ByAppointmentOnly" : "True"
   //       },
   //   "categories" : "Hair Stylists, Beauty & Spas, Hair Salons, Men's Hair Salons",
   //   "hours" : {
   //     "Monday" : "0:0-0:0", "Tuesday" : "9:0-19:0", "Wednesday" : "9:0-17:0", "Thursday" : "9:0-19:0", "Friday" : "8:0-17:0", "Saturday" : "8:0-17:0"
   //     }
   //    });

module.exports = mongoose.model("features", Features);
