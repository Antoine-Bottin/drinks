import React, {useState, useEffect} from 'react';
import './App.css';
import Menu from "./Menu";
import {Container,Row, Button} from 'reactstrap';
import './Basket.css'
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom'





function Basket(props) {
    
    const articleId = props.articleId;
    var totalPrice = 134.9;
    var successOrder = "";
    var token = props.customerToken;
    



    const [basketArticleTab, setBasketArticleTab] = useState([]);
    const [redirect,setRedirect] = useState(false)
    const [isConnected, setIsConnected] = useState(props.isConnected)
    const [orderValidated, setOrderValidated] = useState(false);
    const [basketEmpty, setBasketEmpty] = useState(false);
    const [articleQuantity, setArticleQuantity] = useState(1);


    console.log(" DANS LE BASKET", isConnected)
    



    const sentArticleId = JSON.stringify(articleId)
    console.log("=======stringifié",sentArticleId)
    useEffect( () => {
        async function loadDataToBasket() {
            var rawResponse = await fetch('/getProductToBasket',{
                method: 'POST',
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                body:`IdFromFront=${sentArticleId}`
            })
            var response = await rawResponse.json();
            setBasketArticleTab(response.basketResult)
        
            
            
        }
        loadDataToBasket()
      }, [articleId]);                                              //Le useEffect se rejoue à la modification de l'état articleId dans le réduceur.
     
      console.log("=====useState PANIER", basketArticleTab)
    
      /*Vérification du panier et Envoi du panier en base de données*/  
      
      const handleClickValidate= async ()=>{
        if(articleId.length<1){
             setBasketEmpty(true)
             console.log("PANIER VIDE", basketEmpty)
        }else{
        setOrderValidated(true);
        console.log('le clic marche sur valider');
        
        var rawResponse = await fetch('/newOrder',{
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body:`sentArticleIdFromFront=${sentArticleId}&totalPriceFromFront=${totalTTC}&tokenFromFront=${token}`
                    
        })
        var response = await rawResponse.json();
        }
        
        
      };

      /* Va effacer l'article selctionné dans le tableau d'achat en BDD*/ 
     const handleClickTrash=(articleIdToDelete)=>{
         props.deleteArticleIdToBasket(articleIdToDelete);
         console.log("ID DE LARTICLE A SUPPRIMER", articleIdToDelete)
     }
         
     
     /* Augmente ou diminue la quantité d'un article*/
     const handleClickDecrease =(position) =>{
        console.log(position) 
        if(articleQuantity>1){
         setArticleQuantity(articleQuantity-1)
     }
    }
     
    const handleClickIncrease =(position) =>{
        console.log(position)
        setArticleQuantity(articleQuantity+1)
    }
   
 
    var totalHT = 0;
    var totalTTC = 0;;
    var basket=[];
    for(let i=0; i<basketArticleTab.length;i++){
        basket.push(<Row className="newArticle">
                        <img className='newArticleTitle' src={basketArticleTab[i].picture}></img><h3 className="newArticleTitle">{basketArticleTab[i].name}</h3><h3 className="newArticleTitle"><img src='minus.svg' class="minus"  onClick={()=>handleClickDecrease(basketArticleTab[i])} ></img>{articleQuantity}<img src='plus.svg' class="plus"  onClick={()=>handleClickIncrease()}></img></h3><h3 className="newArticleTitle">{basketArticleTab[i].priceHT * articleQuantity}€ HT</h3><h3 className="newArticleTitle">{basketArticleTab[i].priceHT*1.20 * articleQuantity}€TTC</h3><img onClick={()=>handleClickTrash(basketArticleTab[i]._id)} className='deleteIcon' src='trash.svg' alt='delete item'></img>
                    </Row>)
        totalHT=+ basketArticleTab[i].priceHT * articleQuantity
        totalTTC = totalHT *1.2;
    }



    /*Conditions de panier vide, envoi en base de données si client connecté, sinon renvoi à la page de connection*/ 
    if(basketEmpty){
        successOrder = <div className = "successOrder">Votre panier est vide</div>;   
    }else if(orderValidated && isConnected ){
        console.log("YES");
        successOrder = <div className = "successOrder">Votre commande est bien validée</div>;   
    }else if (orderValidated){    
        return(
        <Redirect to='sign'/>)
    }
    
  return (
    <div className='background'>
        <Menu currentPage="basket"></Menu>
        <Container className="blackboard" fluid>
            <Row className="title">
                <p>My Basket</p>
            </Row>
            <Row>
                 <img  className="basketIcon" src='smart-cartBlue.svg' alt='Panier'></img>
            </Row>
           
                {basket}
            <Row className="totalArray">
                <h3 className='total'>Total H.T : {totalHT}€</h3><h3 className='total'>Total T.T.C : {totalTTC}€</h3><img onClick={()=>handleClickValidate()}  className='validateIcon' src='checkBlue.svg' alt='validate Basket'/>
            </Row>
            {successOrder}
        </Container>
        
      
    </div>
  );
}

function mapDispatchToProps(dispatch) {
    return {
        deleteArticleIdToBasket: function(articleIdToDelete) {
        dispatch({type:'deleteArticleIdToBasket',
                value:articleIdToDelete})
  }
    
}
}

function mapStateToProps(state){
    return { articleId: state.articleId, isConnected:state.isConnected, customerToken:state.customerToken
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Basket);

