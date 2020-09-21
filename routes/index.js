var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');



var customerModel = require('../public/models/customers');
var productModel = require('../public/models/products');
var orderModel = require('../public/models/orders');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*New Product*/

router.post('/newProduct', async function(req, res, next){

  var newProduct = new productModel ({
    name:req.body.nameFromFront,
    category:req.body.categoryFromFront,
    brand:req.body.brandFromFront,
    description:req.body.descFromFront,
    size:req.body.sizeFromFront,
    alcohol:req.body.alcoholFromFront,
    priceHT:req.body.priceHTFromFront,
    priceTTC:req.body.priceTTCFromFront,
    stock:req.body.stockFromFront,
    discount:req.body.discountFromFront
   });

   var product = await newProduct.save();	

})





module.exports = router;
