var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    email:String,
    password:String,
    salt:Number,
    token:Number,
    adress:String,
    zipCode:Number,
    city:String,
    phone:Number,
    orders:{type:mongoose.Schema.Types.ObjectId, ref:"orders"}
    
   });

   var customerModel = mongoose.model('customers', customerSchema);   

   module.exports = customerModel;