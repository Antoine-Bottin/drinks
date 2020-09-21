var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
    date:Number,
    product:{type:mongoose.Schema.Types.ObjectId, ref:products},
    quantity:Number
    
   });
   
   var orderModel = mongoose.model('orders', orderSchema);   

   module.exports = orderModel;