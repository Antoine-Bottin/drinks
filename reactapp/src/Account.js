import React from 'react';
import './App.css';
import Menu from "./Menu";
import {Container,Row,Col,Form, FormGroup, Label,Input, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';



function Account() {

  var styles={
    background:{
        minHeight:'100vh',
        width:'100vw',
        backgroundColor:'#121D2B',
        paddingBottom:'20px'

    },
    blackBoard:{
      backgroundColor:'black',
      width:'1000px',
      //marginLeft:'auto',
      //marginRight:'auto'
      
  },
    h4:{
      color:'#CFDEE7',
      fontFamily:'Avenir Next Condensed',
      paddingTop:'20px',
      paddingBottom:'20px',
      margin:'auto'
      
    },
    icon:{
      height:'30px',
      width:'30px',
      margin:'auto'
    },
    title:{
      color:'#CFDEE7',
      fontFamily:'Avenir Next Condensed',
      fontWeight:'bold',
      margin:'auto',
      paddingTop:'20px'
    }
    
            
}
  return (
    <div style={styles.background}>
      <Menu></Menu>
      <Container style={styles.blackBoard}>
        <Row>
          <Col xs={12} md={6}>
            <Row>
              <h4 style={styles.h4} >Order History</h4>
            </Row>
            <Row>
              <img  style={styles.icon}src='potionBlue.svg'></img>
            </Row>
            <Row>
              <h5 style={styles.title}>Order Number</h5><h5 style={styles.title}>Date</h5><h5 style={styles.title}>Price</h5>
            </Row>
          </Col>
          <Col xs={12} md={6}>
          <Row>
          <h4 style={styles.h4}>About Me</h4>
          </Row>
          <Row>
            <img style={styles.icon} src='userBlue.svg'></img>
          </Row>
          <Row style={styles.h4}>
            Surname :
          </Row>
          <Row style={styles.h4}>
            Name : 
          </Row>
          <Row style={styles.h4}>
            Email :
          </Row>
          <Row style={styles.h4}>
            Phone Number :
          </Row>
          <Row style={styles.h4}>
            Billing Adress
          </Row>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}


export default Account;
