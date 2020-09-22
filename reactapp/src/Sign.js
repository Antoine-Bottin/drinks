import React from 'react';
import './App.css';
import Menu from "./Menu";
import {Container,Row,Col} from 'reactstrap';
import { Form, Button } from 'react-bootstrap';



function Sign() {

  var styles={
    background:{
      backgroundSize:'cover',
      paddingBottom:'266px',
      backgroundColor:'#121D2B',
    },
    h5:{
      fontFamily:'Avenir Next Condensed',
      color:'#CFDEE7',
      textAlign:'center',
      marginTop:'10vh'
    },
    h2:{
      fontFamily:'Avenir Next Condensed',
      color:'#CFDEE7',
      textAlign:'center',
    },
    signIn:{
      width:'auto',
      margin:'5%',
      borderStyle:'solid',
      borderColor:'white',
      borderRadius:'10px',
      padding:'30px'
    },
    label:{
      color:'white'
    }
    
    
}
  return (
    <div style={styles.background}>
    <Menu/>
    <Container>
      <Row>
        <Col xs={12} md={6}> 
        <h5 style={styles.h5}>Already Member ?</h5>
        <h2 style={styles.h2}>SIGN IN</h2>
        <div>
        <Form style={styles.signIn}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={styles.label}>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label style={styles.label}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check style={styles.label} type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
        </Form>
        </div>
        </Col>
        <Col xs={12} md={6}>
        <h5 style={styles.h5}>Not Yet a Member ?</h5>
        <h2 style={styles.h2}>SIGN UP</h2>
        <div>
        <Form style={styles.signIn}>
          <Row>
            <Col>
              <Form.Group controlId="Firstname">
                <Form.Label style={styles.label}>Prénom</Form.Label>
                <Form.Control type="text" placeholder="Enter your firstname" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="Lastname">
                <Form.Label style={styles.label}>Nom</Form.Label>
                <Form.Control type="text" placeholder="Enter your lastname" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="Email">
                <Form.Label style={styles.label}>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter your Email" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="Password">
                <Form.Label style={styles.label}>Mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="Confirm Password">
                <Form.Label style={styles.label}>Confirmer mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Confirm your password" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="Adress">
                <Form.Label style={styles.label}>Adress</Form.Label>
                <Form.Control type="text" placeholder="Enter your adress" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group controlId="Zip Code">
                  <Form.Label style={styles.label}>Zip Code</Form.Label>
                  <Form.Control type="text" placeholder="Zip Code" />
                  <Form.Text className="text-muted">
                  </Form.Text>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="City">
                  <Form.Label style={styles.label}>City</Form.Label>
                  <Form.Control type="text" placeholder="City" />
                  <Form.Text className="text-muted">
                  </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
                  <Form.Group controlId="Phone Number">
                  <Form.Label style={styles.label}>Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="Phone Number" />
                  <Form.Text className="text-muted">
                  </Form.Text>
                  </Form.Group>
              
              
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
        </Form>

        </div>
        </Col>
      </Row>
    </Container>
    </div> 
  )
}


export default Sign;