const mongoose = require('mongoose')
// mongoose connects to the 'mongo-atlas'

const connectDB = (url) => {
  return mongoose.connect(url)
    .then( () => console.log("Connected to DB..."))
    .catch(error => console.log(error));
}

module.exports = connectDB;
