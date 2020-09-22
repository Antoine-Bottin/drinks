var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//Modules génération Token et encryptage mots de passe.
var uid2 = require("uid2");
var SHA256 = require("crypto-js/sha256");
var encBase64 = require("crypto-js/enc-base64");


var customerModel = require('../models/customer');
var productModel = require('../models/product');
var orderModel = require('../models/order');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*New Product*/

router.post('/newProduct', async function(req, res, next){

  var newProduct = new productModel ({                                                  //Ajout d'un nouvel article, idéalement route pour un back office
    name:req.body.nameFromFront,
    category:req.body.categoryFromFront,
    brand:req.body.brandFromFront,
    description:req.body.descFromFront,
    size:req.body.sizeFromFront,
    alcohol:req.body.alcoholFromFront,
    priceHT:req.body.priceHTFromFront,
    priceTTC:req.body.priceTTCFromFront,
    stock:req.body.stockFromFront,
    discount:req.body.discountFromFront,
    picture:req.body.pictureFromFront
   });

   var product = await newProduct.save();	
   console.log(product)

   res.json({result:true, message: "Nouveau produit ajouté"})
})


/*SignUp*/

router.post('/signUp', async function(req, res, next){
  var message;
  var result = false;

  var searchCustomer = await customerModel.findOne({email: req.body.emailFromFront})    //Vérification que l'adresse mail n'est pas déja en base de données.
  if(searchCustomer !== null){
    message = "Cette adresse email n'est pas disponible.";
    res.json({result, message});
  }else{
    res.json({result:true, message: "Nouveau client ajouté"})
  }


    var salt = uid2(32);
    var customerToken = uid2(32);

  var newCustomer = new customerModel ({                                                //Enregistrement du nouveau membre en BDD
    lastName:req.body.lastNameFromFront,
    firstName:req.body.firstNameFromFront,
    email:req.body.emailFromFront,
    password:SHA256(req.body.passwordFromFront + salt).toString(encBase64),
    token:customerToken,
    salt:salt,
    adress:req.body.adressFromFront,
    zipCode:req.body.zipCodeFromFront,
    city:req.body.cityFromFront,
    phone:req.body.phoneFromFront,
    
   });

   var customer = await newCustomer.save();	
   console.log(customer);



})

module.exports = router;
