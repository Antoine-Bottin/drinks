import React, {useState} from 'react';
import './App.css';
import Menu from "./Menu";
import {Container,Row} from 'reactstrap';
import './Basket.css'
import {connect} from 'react-redux';




function Basket(props) {
   console.log("================ DANS LE BASKET",props.articleId)
    var selectedArticleTab=[{cardImg:"bottle1.jpg",cardTitle:"Kraken", cardPrice:29.90},
                            {cardImg:"bottle2.jpg",cardTitle:"Belvedere", cardPrice:29.90},
                            {cardImg:"bottle1.jpg",cardTitle:"Nikka", cardPrice:29.90}
    ];
    
    /*const [newBasket, setNewBasket] = useState([]);*/

    const handleClickDelete = (position)=>{
       selectedArticleTab.splice(position,1) 
    }

    var basket=[];
    for(let i=0; i<selectedArticleTab.length;i++){
        basket.push(<Row className="newArticle">
                        <img className='articleImg' src={selectedArticleTab[i].cardImg}></img><h3 className="newArticleTitle">{selectedArticleTab[i].cardTitle}</h3><h3 className="newArticleTitle">Quantity</h3><h3 className="newArticleTitle">Price H.T</h3><h3 className="newArticleTitle">{selectedArticleTab[i].cardPrice}</h3><img onClick={()=>handleClickDelete({i})} className='deleteIcon' src='trash.svg' alt='delete item'></img>
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

function mapStateToProps(state){
    return { articleId: state.basket,
    }
}


export default connect(
    mapStateToProps,
    null
  )(Basket);

