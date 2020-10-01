import React from 'react';
import './App.css';
import Menu from "./Menu";
import {Container,Row,Col} from 'reactstrap';
import "./Account.css"



function Account() {

  
  return (
    <div className="background">
      <Menu currentPage="account"></Menu>
      <Container className="blackboard">
        <Row>
          <Col xs={12} md={6}>
            <Row>
              <h4 className='title' >Order History</h4>
            </Row>
            <Row>
              <img  className="icon" src='potionBlue.svg'></img>
            </Row>
            <Row>
              <h5 className="h4">Order Number</h5><h5 className='h4'>Date</h5><h5 className='h4'>Price</h5>
            </Row>
          </Col>
          <Col xs={12} md={6}>
          <Row>
          <h4 className="title">About Me</h4>
          </Row>
          <Row>
            <img className="icon" src='userBlue.svg'></img>
          </Row>
          <Row className='h4'>
            Surname :
          </Row>
          <Row className='h4'>
            Name : 
          </Row>
          <Row className='h4'>
            Email :
          </Row>
          <Row className='h4'>
            Phone Number :
          </Row>
          <Row className='h4'>
            Billing Adress
          </Row>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}


export default Account;
