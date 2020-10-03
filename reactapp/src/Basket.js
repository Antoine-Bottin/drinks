import React, {useState, useEffect} from 'react';
import './App.css';
import Menu from "./Menu";
import {Container,Row} from 'reactstrap';
import './Basket.css'
import {connect} from 'react-redux';




function Basket(props) {
    const articleId = props.articleId

    const [basketArticleTab, setBasketArticleTab] = useState([]);

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
    


     const handleClickTrash=(articleIdToDelete)=>{
         props.deleteArticleIdToBasket(articleIdToDelete);
         console.log("ID DE LARTICLE A SUPPRIMER", articleIdToDelete)
     }
 
    var basket=[];
    for(let i=0; i<basketArticleTab.length;i++){
        basket.push(<Row className="newArticle">
                        <img className='articleImg' src={basketArticleTab[i].picture}></img><h3 className="newArticleTitle">{basketArticleTab[i].name}</h3><h3 className="newArticleTitle">Quantity</h3><h3 className="newArticleTitle">Price H.T</h3><h3 className="newArticleTitle">{basketArticleTab[i].priceHT}</h3><img onClick={()=>handleClickTrash(basketArticleTab[i]._id)} className='deleteIcon' src='trash.svg' alt='delete item'></img>
                    </Row>)
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
            <Row className="arrayTitle">
                <h3 className="articleTitle">Item</h3><h3 className="articleTitle">Name</h3><h3 className="articleTitle">Quantity</h3><h3 className="articleTitle">Price H.T</h3><h3 className="articleTitle">Price T.T.C</h3><h3 className="articleTitle">Delete</h3>
            </Row>
                {basket}
            <Row className="totalArray">
                <h3 className='total'>Total H.T</h3><h3 className='total'>Total T.T.C</h3><img  className='validateIcon' src='checkBlue.svg' alt='validate Basket'/>
            </Row>
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
    return { articleId: state.articleId, 
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Basket);

