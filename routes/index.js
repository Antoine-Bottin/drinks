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

router.post('/newProduct', async function(req, res, next){                              //Ajout d'un nouvel article, idéalement route pour un back office

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
    discount:req.body.discountFromFront,
    picture:req.body.pictureFromFront
   });

   var product = await newProduct.save();	
   console.log(product)
0
   res.json({result:true, message: "Nouveau produit ajouté"})
})

/*New Order*/
router.post('/newOrder', async function(req, res, next){   //Ajout du Panier validé en base de données
    console.log("route NEW ORDER", req.body.sentArticleIdFromFront)                         
  var user = await customerModel.findOne(
    {token:req.body.tokenFromFront}
  )
  console.log("LE USER",user)
 
  var newOrder = new orderModel ({                                                  
    date: new Date(),
    user: user._id,
    product:JSON.parse(req.body.sentArticleIdFromFront),
    priceTTC: req.body.totalPriceFromFront
   });
 
   var order = await newOrder.save();	
 
   res.json({result:true, message: "Commande ajoutée en BDD"})
})


/*Récupération de tous les Produits*/

router.get('/getProduct', async function(req, res, next){
  var message;
  var result;
  var articleTabFromBack = await productModel.find();
  if(articleTabFromBack){
    message="base de données chargée";
    res.json({result:true, message, articleTabFromBack})
  }
  
})

/*Récupérations des produits ajoutés au Panier*/

/*router.post('/getProductToBasket', async function(req, res, next){
    var basketArticle = req.body.IdFromFront ;  
    var receivedBasketArticle = JSON.parse(basketArticle);                       //Réception des Id des articles sélectionnés.
      console.log("========== DUBACK",receivedBasketArticle.length)
      var basketResult = await productModel.find(                                //Trouver dans la base de donnée, tous les _id qui correspondent à ceux stockés dans ma variable basketArticle et renvoyer l'ensemble de leur
          { _id: { $in: receivedBasketArticle } }  
    );    
       console.log("BASKET FROM BACK=======",basketResult)

res.json({result:true, basketResult})
})*/

/*Récupération des informations client pour la page Account*/

router.post('/getDataToAccount', async function(req, res, next){
  var customerToken = req.body.customerTokenFromFront;
  var customerData = await customerModel.findOne(
    {token:customerToken}
  );
  console.log("CUSTOMER DATA", customerData)
  res.json({result:true, customerData})

})

/*Récupération des informations de commandes pour la page Account*/

router.post('/getOrderToAccount', async function(req, res, next){
  var customerToken = req.body.customerTokenFromFront;
  console.log("VERIF",customerToken)
  var user = await customerModel.findOne(
    {token:customerToken}
  );
  var userOrder = await orderModel.find(
    {user:user}
  )

  console.log("userOrder", userOrder)
  res.json({result:true, userOrder})

})




/*SignUp*/

router.post('/signUp', async function(req, res, next){                                    
  var message;
  var result;
  if (req.body.firstNameFromFront === "" ||                                               //Vérifications champs vide
      req.body.lastNameFromFront === "" ||
      req.body.emailFromFront === "" ||
      req.body.passwordFromFront === "" ||
      req.body.confirmPasswordFromFront === ""||
      req.body.adressFromFront === "" ||
      req.body.zipCodeFromFront === null||
      req.body.cityFromFront === "" ||
      req.body.phoneFromFront === "") {                  
    message = "Merci de renseigner tous les champs.";
    result= false;
    res.json({result, message})
  }else{
  if (req.body.passwordFromFront !== req.body.confirmPasswordFromFront) {                  //Vérification que les mots de passe sont identiques
    message = "Les mots de passe ne sont pas identiques.";
    result= false;
    res.json({result, message})
  }else{
    var searchCustomer = await customerModel.findOne({email: req.body.emailFromFront})    //Vérification que l'adresse mail n'est pas déja en base de données.
    if(searchCustomer !== null){
    result = false
    message = "Cette adresse email n'est pas disponible, ou vous êtes déjà client";
    res.json({result, message});
  }else{

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
    
    
   });

   var customerSaved = await newCustomer.save();	                                      //Envoi du Token au front
   var customerTokenSignUp = customerSaved.token

   res.json({result:true, message: "Nouveau client ajouté", customerTokenSignUp})
   console.log(result, message)
  }}
  }
   console.log("==========",customerTokenSignUp);
})




/*SignIn*/

router.post('/signIn', async function(req, res, next){
  var message="vous êtes connecté";
  var result;
  var searchCustomer = await customerModel.findOne({email: req.body.emailFromFront})
  var customerTokenSignIn = searchCustomer.token;
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

res.json({result, message, customerTokenSignIn});                                           //Envoi du token au front
console.log("le signIn",result, message, customerTokenSignIn)
});


module.exports = router;
