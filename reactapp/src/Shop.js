import React from 'react';
import './App.css';
import Menu from "./Menu";
import {Container,Row,Col,Form, FormGroup, Label,Input, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';



function Shop() {

    var styles={
        card:{
           
            marginTop:'20px',
            marginBottom:'20px',
            backgroundColor:'black',
            
        },
        cardImg:{
            height:'40%',
            width:'40%',
            margin:'auto',
            marginTop:'5px'    
        },
        cardTitle:{
            textAlign:'center',
            color:'#CFDEE7'
        },
        cardText:{
            color:'#CFDEE7'
        },
        cardSubtitle:{
            display:'flex',
            color:'#CFDEE7'
        },
        category:{
            color:'#CFDEE7',
            paddingBottom:'5px',
            fontSize:'20px'

        },
        stock:{
            color:'red',
            fontSize:'20px',
            fontWeight:'bold',
            paddingLeft:'43%'
        },
        icon:{
            height:"20px",
            width:"20px",
            marginLeft:'55%'
        },
        h3:{
            color:'#CFDEE7',
            fontFamily:'Candara Light',
            fontSize:'20px',
            paddingTop:'5px'
        },
        container:{
            borderStyle:'solid',
            borderColor:'white',
            width:'auto',
        },
        formGroup:{
            display:'flex',
            flexDirection:'column'
        },
        check:{
            fontFamily:'Candara Light',
            fontSize:'15px',
            color:'#CFDEE7',
            textAlign:'left',
            marginTop:'10px',
            marginLeft:'10px',
            marginRight:'10px'
        },
        range:{
            fontSize:'12px',
            color:'#CFDEE7',
            marginTop:'20px' ,
            marginRight:'10px'
        },
        rangeInput:{
            background:'yellow'
        }

        
     }


        
    


  return (
    <div className='background'>
        <Menu/>
        <div className='shopPage'>
{/* Filtres */}
                <div className='filters'>
                        <div className='title'>Filtres</div>
                        <FormGroup check>
                            <Label className='check' check>
                            <Input  type="checkbox" id="checkbox1" />{' '}
                            Gin
                            </Label>
                            <Label className='check' check>
                            <Input  type="checkbox" id="checkbox2" />{' '}
                            Whisky
                            </Label>
                            <Label className='check' check>
                            <Input  type="checkbox" id="checkbox3" />{' '}
                            Armagnac
                            </Label>
                            <Label className='check' check>
                            <Input  type="checkbox" id="checkbox4" />{' '}
                            Cognac
                            </Label>
                            <Label className='check' check>
                            <Input  type="checkbox" id="checkbox4" />{' '}
                            Rhum
                            </Label>
                            <Label className='check' check>
                            <Input  type="checkbox" id="checkbox4" />{' '}
                            Calvados
                            </Label>
                            <Label style={styles.range} for="exampleRange">Prix</Label>
                            <Input type="range" name="range" id="exampleRange" />
                        
                    </FormGroup>
                </div>
{/* Articles */}
                <Container fluid style={styles.container}>
                    <Row style={styles.allCard}>
                        <Col  xs={10} md={3}>
                            <Card style={styles.card}>
                                <CardImg style={styles.cardImg} top width="100%" src="bottle1.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle style={styles.cardTitle}>Card title</CardTitle>
                                <CardSubtitle style={styles.category}>Catégorie: Rhum</CardSubtitle>
                                <CardText style = {styles.cardText}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <CardSubtitle style={styles.cardSubtitle}>Stock restant :<span style={styles.stock}>5</span> </CardSubtitle>
                                <h3 style={styles.h3}>29,90€<img style={styles.icon} src='smart-cartBlue.svg'></img></h3>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={10} md={3} >
                            <Card style={styles.card}>
                                <CardImg style={styles.cardImg} top width="100%" src="bottle1.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle style={styles.cardTitle}>Card title</CardTitle>
                                <CardSubtitle style={styles.category}>Catégorie: Rhum</CardSubtitle>
                                <CardText style = {styles.cardText}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <CardSubtitle style={styles.cardSubtitle}>Stock restant :<span style={styles.stock}>5</span> </CardSubtitle>
                                <h3 style={styles.h3}>29,90€<img style={styles.icon} src='smart-cartBlue.svg'></img></h3>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={10} md={3} >
                            <Card style={styles.card}>
                                <CardImg style={styles.cardImg} top width="100%" src="bottle1.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle style={styles.cardTitle}>Card title</CardTitle>
                                <CardSubtitle style={styles.category}>Catégorie: Rhum</CardSubtitle>
                                <CardText style = {styles.cardText}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <CardSubtitle style={styles.cardSubtitle}>Stock restant :<span style={styles.stock}>5</span> </CardSubtitle>
                                <h3 style={styles.h3}>29,90€<img style={styles.icon} src='smart-cartBlue.svg'></img></h3>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={10} md={3} >
                            <Card style={styles.card}>
                                <CardImg style={styles.cardImg} top width="100%" src="bottle1.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle style={styles.cardTitle}>Card title</CardTitle>
                                <CardSubtitle style={styles.category}>Catégorie: Rhum</CardSubtitle>
                                <CardText style = {styles.cardText}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <CardSubtitle style={styles.cardSubtitle}>Stock restant :<span style={styles.stock}>5</span> </CardSubtitle>
                                <h3 style={styles.h3}>29,90€<img style={styles.icon} src='smart-cartBlue.svg'></img></h3>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={10} md={3} >
                            <Card style={styles.card}>
                                <CardImg style={styles.cardImg} top width="100%" src="bottle1.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle style={styles.cardTitle}>Card title</CardTitle>
                                <CardSubtitle style={styles.category}>Catégorie: Rhum</CardSubtitle>
                                <CardText style = {styles.cardText}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <CardSubtitle style={styles.cardSubtitle}>Stock restant :<span style={styles.stock}>5</span> </CardSubtitle>
                                <h3 style={styles.h3}>29,90€<img style={styles.icon} src='smart-cartBlue.svg'></img></h3>
                                </CardBody>
                            </Card>
                        </Col>
                        </Row>
                </Container>
        </div>
        
    </div>
  );
}

export default Shop;
