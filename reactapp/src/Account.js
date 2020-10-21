import React, {useState, useEffect} from 'react';
import './App.css';
import Menu from "./Menu";
import {Container,Row,Col} from 'reactstrap';
import "./Account.css"
import {connect} from 'react-redux';




function Account(props) {

  var customerToken = props.customerToken;
  const [customerData, setCustomerData] = useState({})
  const [orderData, setOrderData] = useState({})
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
    
    
    async function loadOrderToAccount() {
      var rawResponse = await fetch('/getOrderToAccount',{
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body:`customerTokenFromFront=${customerToken}`
      })
      var orderResponse = await rawResponse.json();
      var userOrder = orderResponse.userOrder;

      setOrderData(userOrder) ;
   
}
  loadOrderToAccount()
    
  }, []);     
  console.log("ORDER DATA",orderData)

  var orderTab=[];
  for (var i=0; i<orderData.length; i++){
      orderTab.push(
              <Row>
              <div className="order">{orderData[i]._id}</div><div className='order'>{orderData[i].date}</div><div className='order'>{orderData[i].priceTTC}</div>
              </Row>
      )
  }

 
  
  
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
              <div className="orderTitle">Order Number</div><div className='orderTitle'>Date</div><div className='orderTitle'>Price</div>
            </Row>
            {orderTab}
          </Col>
          <Col xs={12} md={6}>
          <Row>
          <h4 className="title">About Me</h4>
          </Row>
          <Row>
            <img className="icon" src='userBlue.svg'></img>
          </Row>
          <Row className='orderTitle'>
            Informations:
          </Row>
          <Row className='order'>
            Surname : {customerData.firstName}
          </Row>
          <Row className='order'>
            Name : {customerData.lastName}
          </Row>
          <Row className='order'>
            Email : {customerData.email}
          </Row>
          <Row className='order'>
            Phone Number : {customerData.phone}
          </Row>
          <Row className='order'>
            Billing Adress : {customerData.adress}
          </Row>
          <Row className='order'>
             ZipCode: {customerData.zipCode}
          </Row>
          <Row className='order'>
             City: {customerData.city}
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

