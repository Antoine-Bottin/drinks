import React, {useState, useEffect} from 'react';
import './App.css';
import Menu from "./Menu";
import {Container,Row,Col} from 'reactstrap';
import "./Account.css"
import {connect} from 'react-redux';




function Account(props) {

  var customerToken = props.customerToken;
  const [customerData, setCustomerData] = useState({})
  console.log("LA VARIABLE", customerData)

  useEffect( () => {
    async function loadDataToAccount() {
        var rawResponse = await fetch('/getDataToAccount',{
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body:`customerTokenFromFront=${customerToken}`
        })
        var response = await rawResponse.json();
        console.log("CUSTOMER DATA",response.customerData.firstName)
        setCustomerData(response.customerData) ;
    
        
        
    }
    loadDataToAccount()
  }, []);         
  
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
            Surname : {customerData.firstName}
          </Row>
          <Row className='h4'>
            Name : {customerData.lastName}
          </Row>
          <Row className='h4'>
            Email : {customerData.email}
          </Row>
          <Row className='h4'>
            Phone Number : {customerData.phone}
          </Row>
          <Row className='h4'>
            Billing Adress : {customerData.adress}
          </Row>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}


function mapStateToProps(state){
  return { articleId: state.articleId, isConnected:state.isConnected, customerToken:state.customerToken
  }
}

export default connect(
  mapStateToProps,
  null
)(Account);

