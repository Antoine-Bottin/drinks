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
  console.log("ReqBody",req.body)

  var searchCustomer = await customerModel.findOne({email: req.body.emailFromFront})    //Vérification que l'adresse mail n'est pas déja en base de données.
  if(searchCustomer !== null){
    message = "Cette adresse email n'est pas disponible, ou vous êtes déjà client";
    res.json({result, message});
  }else{
    res.json({result:true, message: "Nouveau client ajouté"})
  }


    var salt = uid2(32);
    var customerToken = uid2(32);

  var newCustomer = new customerModel ({                                                //Enregistrement du nouveau membre en BDD
    firstName:req.body.firstNameFromFront,
    lastName:req.body.lastNameFromFront,
    email:req.body.emailFromFront,
    password:SHA256(req.body.passwordFromFront + salt).toString(encBase64),
    confirmPassword:SHA256(req.body.confirmPasswordFromFront + salt).toString(encBase64),
    token:customerToken,
    salt:salt,
    adress:req.body.adressFromFront,
    zipCode:req.body.zipCodeFromFront,
    city:req.body.cityFromFront,
    phone:req.body.phoneFromFront,
    //order:orderSaved._id
    
   });

   var customer = await newCustomer.save();	
   console.log("==========",customer);
})



/*SignIn*/

router.post('/signIn', async function(req, res, next){
  var message;
  var result;
  var searchCustomer = await customerModel.findOne({email: req.body.emailFromFront})
  console.log(searchCustomer)
if (searchCustomer === null) {
  message = "Email ou mot de passe incorrect."
  result = false;
} else {
  var salt = searchCustomer.salt;
  
  if (SHA256(req.body.passwordFromFront + salt).toString(encBase64) === searchCustomer.password) {
    result = true;
  } else {
    message = "Email ou mot de passe incorrect."
    result = false;   
  }
}    

res.json({result, message});
});


module.exports = router;
