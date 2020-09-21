var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name:String,
    category:String,
    brand:String,
    description:String,
    size:Number,
    alcohol:Number,
    priceHT:Number,
    priceTTC:Number,
    stock:Number,
    discount:Number


    
   });
   
   var productModel = mongoose.model('products', productSchema);   

   module.exports = productModel;