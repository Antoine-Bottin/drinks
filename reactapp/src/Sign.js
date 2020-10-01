import React, {useState}  from 'react';
import './App.css';
import Menu from "./Menu";
import {Container,Row,Col} from 'reactstrap';
import { Form, Button } from 'react-bootstrap';
import './Sign.css'




function Sign() {
    //Etats du formulaire SignIn
   
   
   const [signInEmail, setSignInEmail] = useState('');
   const [signInPassword, setSignInPassword] = useState('');

   const [signInMessageFromBack, setSignInMessageFromBack]=useState("")

   const handleClickSignIn = async ()=>{
    var rawResponse = await fetch('/SignIn', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body:`emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
})
      var response = await rawResponse.json();
      setSignInMessageFromBack(response.message)
      

   }
   console.log("------------",signInMessageFromBack)

   //Etats du formulaire SignUp

   const [signUpFirstName, setSignUpFirstName] = useState('');
   const [signUpLastName, setSignUpLastName] = useState('');
   const [signUpEmail, setSignUpEmail] = useState('');
   const [signUpPassword, setSignUpPassword] = useState('');
   const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
   const [signUpAdress, setSignUpAdress] = useState('');
   const [signUpZipCode, setSignUpZipCode] = useState('');
   const [signUpCity, setSignUpCity] = useState('');
   const [signUpPhone, setSignUpPhone] = useState('');
   const[signUpMessageFromBack, setSignUpMessageFromBack]=useState("")

   const handleClickSignUp = async ()=>{
      var rawResponse = await fetch('/SignUp', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body:`firstNameFromFront=${signUpFirstName}&lastNameFromFront=${signUpLastName}&emailFromFront=${signUpEmail}&passwordFromFront=${signUpPassword}&confirmPasswordFromFront=${signUpConfirmPassword}&adressFromFront=${signUpAdress}&zipCodeFromFront=${signUpZipCode}&cityFromFront=${signUpCity}&phoneFromFront=${signUpPhone}`
})
      var response = await rawResponse.json();
      setSignUpMessageFromBack(response.message)
      
};
      console.log(signUpMessageFromBack)

  return (
    <div className='background'>
    <Menu/>
    <Container>
      <Row>
        <Col xs={12} md={6}> 
        <h5 className='h5'>Already Member ?</h5>
        <h2 className='h2'>SIGN IN</h2>
        <div>
        <Form className='sign'>
            <Form.Group controlId="formBasicEmail">
            <Form.Label className="label">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
                          onChange={(e) => setSignInEmail(e.target.value)} 
                          value={signInEmail} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
            <Form.Label className="label">Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
                          onChange={(e) => setSignInPassword(e.target.value)} 
                          value={signInPassword} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            <Form.Check className="label" type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary"  onClick={()=>handleClickSignIn()}>
              Sign In
            </Button>
        </Form>
        </div>
        </Col>
        <Col xs={12} md={6}>
        <h5 className='h5'>Not Yet a Member ?</h5>
        <h2 className='h2'>SIGN UP</h2>
        <div>
        <Form className='sign'>
          <Row>
            <Col>
              <Form.Group controlId="Firstname">
                <Form.Label className="label">Prénom</Form.Label>
                <Form.Control type="text" placeholder="Enter your firstname"
                              onChange={(e) => setSignUpFirstName(e.target.value)} 
                              value={signUpFirstName} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="Lastname">
                <Form.Label className="label">Nom</Form.Label>
                <Form.Control type="text" placeholder="Enter your lastname"
                              onChange={(e) => setSignUpLastName(e.target.value)} 
                              value={signUpLastName} />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="Email">
                <Form.Label className="label">Email</Form.Label>
                <Form.Control type="text" placeholder="Enter your Email"
                              onChange={(e) => setSignUpEmail(e.target.value)} 
                              value={signUpEmail} />
  
              </Form.Group>
              <Form.Group controlId="Password">
                <Form.Label className="label">Mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Enter your password"
                              onChange={(e) => setSignUpPassword(e.target.value)} 
                              value={signUpPassword} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="Confirm Password">
                <Form.Label className="label">Confirmer mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Confirm your password"
                              onChange={(e) => setSignUpConfirmPassword(e.target.value)} 
                              value={signUpConfirmPassword} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="Adress">
                <Form.Label className="label">Adress</Form.Label>
                <Form.Control type="text" placeholder="Enter your adress"
                              onChange={(e) => setSignUpAdress(e.target.value)} 
                              value={signUpAdress} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group controlId="Zip Code">
                  <Form.Label className="label">Zip Code</Form.Label>
                  <Form.Control type="text" placeholder="Zip Code"
                                onChange={(e) => setSignUpZipCode(e.target.value)} 
                                value={signUpZipCode} />
                  <Form.Text className="text-muted">
                  </Form.Text>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="City">
                  <Form.Label className="label">City</Form.Label>
                  <Form.Control type="text" placeholder="City"
                                onChange={(e) => setSignUpCity(e.target.value)} 
                                value={signUpCity} />
                  <Form.Text className="text-muted">
                  </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
                  <Form.Group controlId="Phone Number">
                  <Form.Label className="label">Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="Phone Number"
                                onChange={(e) => setSignUpPhone(e.target.value)} 
                                value={signUpPhone} />
                  <Form.Text className="text-muted">
                  </Form.Text>
                  </Form.Group>
              
                  <p className="messageFromFront">Réponse:{signUpMessageFromBack}</p>
            <Button variant="primary" 
                    onClick={()=>handleClickSignUp()}
                  >
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