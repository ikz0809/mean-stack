// import the required module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// delecare the schema which hold the biriyani order
var biriyani = new Schema({
  name: String,
  quantity: Number,
  orderDate: {type: Date, default: Date.now}
});

// export the schema
module.exports = mongoose.model('Order', biriyani);
