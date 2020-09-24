import React from 'react';
import './App.css';
import Menu from "./Menu";
import {Container,Row,Col,Form, FormGroup, Label,Input, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';



function Basket() {
    var styles={
     
      
        validateIcon:{
            height:'40px',
            width:'40px',
            paddingRight:'10px',

        },
      
       

        

    }


    var selectedArticleTab=[{cardImg:"bottle1.jpg",cardTitle:"Kraken", cardPrice:29.90},
                            {cardImg:"bottle2.jpg",cardTitle:"Belvedere", cardPrice:29.90},
                            {cardImg:"bottle1.jpg",cardTitle:"Nikka", cardPrice:29.90}
    ];
    var basket=[];
    for(let i=0; i<selectedArticleTab.length;i++){
        basket.push(<Row className="newArticle">
            <img className='articleImg' src={selectedArticleTab[i].cardImg}></img><h3 className="newArticleTitle">{selectedArticleTab[i].cardTitle}</h3><h3 className="newArticleTitle">Quantity</h3><h3 className="newArticleTitle">Price H.T</h3><h3 className="newArticleTitle">{selectedArticleTab[i].cardPrice}</h3><img  className='deleteIcon' src='trash.svg' alt='delete item'></img>
        </Row>)
    }

    
    
  return (
    <div className='background'>
        <Menu></Menu>
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

export default Basket;
