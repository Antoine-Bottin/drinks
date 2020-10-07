var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
    date:Date,
    //product:{type:mongoose.Schema.Types.ObjectId, ref:"products"},
    priceTTC:Number
    
   });

var customerSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    email:String,
    password:String,
    confirmPassword:String,
    salt:String,
    token:String,
    adress:String,
    zipCode:Number,
    city:String,
    phone:String,
    orders:orderSchema
    
   });

   var customerModel = mongoose.model('customers', customerSchema);   

   module.exports = customerModel;