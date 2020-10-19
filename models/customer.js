var mongoose = require('mongoose');



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
    
   });

   var customerModel = mongoose.model('customers', customerSchema);   

   module.exports = customerModel;