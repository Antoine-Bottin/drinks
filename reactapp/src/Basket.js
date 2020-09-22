import React from 'react';
import './App.css';
import Menu from "./Menu";
import {Container,Row,Col,Form, FormGroup, Label,Input, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';



function Basket() {

    var styles={
        background:{
            minHeight:'100vh',
            width:'100vw',
            backgroundColor:'#121D2B',
            paddingBottom:'20px'
        },
        blackBoard:{
            backgroundColor:'black',
            minHeight:'auto',
            width:'90vw',
            margin:'20px auto',
            
        },
        title:{
            justifyContent:'center',
            color:'#CFDEE7',
            fontFamily:'Avenir Next Condensed',
            paddingTop:'20px',
            fontSize:'55px'

        },
        icon:{
            margin:'auto',
            height:'35px',
            width:'35px'
        },
        arrayTitle:{
            display:'flex',
            justifyContent:'space-between',
            borderStyle:'solid',
            borderColor:'white',
            marginTop:'20px',
            padding:'5px 20px'
        },
        articleTitle:{
            fontSize:'15px',
            fontFamily:'Avenir Next Condensed',
            fontWeight:'bold',
            color:'#CFDEE7',
            marginLeft:'20px'

        },
        newArticle:{
            display:'flex',
            justifyContent:'space-between',
            height:'auto',
            // borderStyle:'solid',
            // borderColor:'white',
            marginTop:'10px',
            padding:'5px 20px',
            
        },
        articleImg:{
            height:'50px',
            width:'30px'
        },
        newArticleTitle:{
            paddingTop:'10px',
            fontSize:'15px',
            fontFamily:'Avenir Next Condensed',
            color:'#CFDEE7',
        },
        totalArray:{
            display:'flex',
            justifyContent:'space-between',
            borderStyle:'solid',
            marginTop:'15vh',
            paddingTop:'5px',
            paddingBottom:'5px',
            borderColor:'white',
            color:'#CFDEE7',

        },
        validateIcon:{
            height:'40px',
            width:'40px',
            paddingRight:'10px',

        },
        total:{
            paddingLeft:'10px',
            fontSize:'15px',
            fontFamily:'Avenir Next Condensed',
            fontWeight:'bold',

            

        },
        deleteIcon:{
            height:'18px',
            width:'18px',
            marginTop:'10px'
        }

        

    }
  return (
    <div style={styles.background}>
        <Menu></Menu>

        <Container style={styles.blackBoard} fluid>
            
            <Row style={styles.title}>
            <h4>My Basket</h4>
            </Row>
            <Row>
            <img  style={styles.icon} src='smart-cartBlue.svg' alt='Panier'></img>
            </Row>
            <Row style={styles.arrayTitle}>
                <h3 style={styles.articleTitle}>Item</h3><h3 style={styles.articleTitle}>Name</h3><h3 style={styles.articleTitle}>Quantity</h3><h3 style={styles.articleTitle}>Price H.T</h3><h3 style={styles.articleTitle}>Price T.T.C</h3><h3 style={styles.articleTitle}>Delete</h3>
            </Row>
            <Row style={styles.newArticle}>
                <img style={styles.articleImg} src='bottle1.jpg'></img><h3 style={styles.newArticleTitle}>Name</h3><h3 style={styles.newArticleTitle}>Quantity</h3><h3 style={styles.newArticleTitle}>Price H.T</h3><h3 style={styles.newArticleTitle}>Price T.T.C</h3><img style={styles.deleteIcon}src='trash.svg' alt='delete item'></img>
            </Row>
            <Row style={styles.newArticle}>
                <img style={styles.articleImg} src='bottle1.jpg'></img><h3 style={styles.newArticleTitle}>Name</h3><h3 style={styles.newArticleTitle}>Quantity</h3><h3 style={styles.newArticleTitle}>Price H.T</h3><h3 style={styles.newArticleTitle}>Price T.T.C</h3><img style={styles.deleteIcon}src='trash.svg' alt='delete item'></img>
            </Row>
            <Row style={styles.newArticle}>
                <img style={styles.articleImg} src='bottle1.jpg'></img><h3 style={styles.newArticleTitle}>Name</h3><h3 style={styles.newArticleTitle}>Quantity</h3><h3 style={styles.newArticleTitle}>Price H.T</h3><h3 style={styles.newArticleTitle}>Price T.T.C</h3><img style={styles.deleteIcon}src='trash.svg' alt='delete item'></img>
            </Row>
            <Row style={styles.newArticle}>
                <img style={styles.articleImg} src='bottle1.jpg'></img><h3 style={styles.newArticleTitle}>Name</h3><h3 style={styles.newArticleTitle}>Quantity</h3><h3 style={styles.newArticleTitle}>Price H.T</h3><h3 style={styles.newArticleTitle}>Price T.T.C</h3><img style={styles.deleteIcon}src='trash.svg' alt='delete item'></img>
            </Row>
            <Row style={styles.newArticle}>
                <img style={styles.articleImg} src='bottle1.jpg'></img><h3 style={styles.newArticleTitle}>Name</h3><h3 style={styles.newArticleTitle}>Quantity</h3><h3 style={styles.newArticleTitle}>Price H.T</h3><h3 style={styles.newArticleTitle}>Price T.T.C</h3><img style={styles.deleteIcon}src='trash.svg' alt='delete item'></img>
            </Row>
            <Row style={styles.newArticle}>
                <img style={styles.articleImg} src='bottle1.jpg'></img><h3 style={styles.newArticleTitle}>Name</h3><h3 style={styles.newArticleTitle}>Quantity</h3><h3 style={styles.newArticleTitle}>Price H.T</h3><h3 style={styles.newArticleTitle}>Price T.T.C</h3><img style={styles.deleteIcon}src='trash.svg' alt='delete item'></img>
            </Row>
            <Row style={styles.totalArray}>
                <h3 style={styles.total}>Total H.T</h3><h3 style={styles.total}>Total T.T.C</h3><img  style={styles.validateIcon} src='checkBlue.svg' alt='validate Basket'/>
            </Row>
        </Container>
      
    </div>
  );
}

export default Basket;
