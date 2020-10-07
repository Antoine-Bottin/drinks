var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
    date:Date,
    product:{type:mongoose.Schema.Types.ObjectId, ref:"products"},
    priceTTC:Number
    
   });
   
   var orderModel = mongoose.model('orders', orderSchema);   

   module.exports = orderModel;