var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set("debug", true);


  mongoose.connect('mongodb://kjain:cmpe295@ds135456.mlab.com:35456/cmpe295a', {poolSize: 1000, useNewUrlParser: true}).then(() => {
      console.log("Connection to MongoDB establsihed cmpe295b!!");


      //Get the default connection
      var db = mongoose.connection;

      //Bind connection to error event (to get notification of connection errors)
      db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    })
    .catch(err => {
      console.log("Something went wrong! MongoDB disconnected - cmpe295b");
    });;

module.exports = {mongoose};
