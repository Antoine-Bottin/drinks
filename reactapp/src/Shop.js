import React, {useState} from 'react';
import './App.css';
import Menu from "./Menu";
import {Container,Row,Col,Form, FormGroup, Label,Input, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';



function Shop() {


    const [selectedArticle, setSelectedArticle] = useState([{valeur:0,image:"", titre:"", prix:0}])

    const handleClickBasket=(valeur, titre, prix)=>{
        console.log("=========",valeur, titre, prix)
        setSelectedArticle([...selectedArticle, [{valeur, titre, prix }]])
        console.log(selectedArticle)
    }
    var styles={
        formGroup:{
            display:'flex',
            flexDirection:'column'
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

     var articleTab=[{cardImg:"bottle1.jpg",cardTitle:"Kraken",category:'Rhum',cardText:'pouet pouet', cardSubtitle:5, cardPrice:29.90},
                     {cardImg:"bottle2.jpg", cardTitle:"Bacardi", category:"Rhum",cardText:'tiouf tiouf', cardSubtitle: 12, cardPrice:12.90},
                     {cardImg:"bottle1.jpg", cardTitle:"Monkey42", category:"Gin",cardText:'tiouf tiouf', cardSubtitle: 11, cardPrice:22.90},
                     {cardImg:"bottle2.jpg", cardTitle:"Beefeater", category:"Gin",cardText:'tiouf tiouf', cardSubtitle: 120, cardPrice:10.90},
                     {cardImg:"bottle1.jpg", cardTitle:"Nikka", category:"Whisky",cardText:'tiouf tiouf', cardSubtitle: 1, cardPrice:32.90},
                     {cardImg:"bottle2.jpg", cardTitle:"Belvedere", category:"Vodka",cardText:'tiouf tiouf', cardSubtitle: 50, cardPrice:19.90},
                     {cardImg:"bottle1.jpg",cardTitle:"Kraken",category:'Rhum',cardText:'pouet pouet', cardSubtitle:5, cardPrice:29.90},
                     {cardImg:"bottle2.jpg", cardTitle:"Bacardi", category:"Rhum",cardText:'tiouf tiouf', cardSubtitle: 12, cardPrice:12.90},
                     {cardImg:"bottle1.jpg", cardTitle:"Monkey42", category:"Gin",cardText:'tiouf tiouf', cardSubtitle: 11, cardPrice:22.90},
                     {cardImg:"bottle2.jpg", cardTitle:"Beefeater", category:"Gin",cardText:'tiouf tiouf', cardSubtitle: 120, cardPrice:10.90},
                     {cardImg:"bottle1.jpg", cardTitle:"Nikka", category:"Whisky",cardText:'tiouf tiouf', cardSubtitle: 1, cardPrice:32.90},
                     {cardImg:"bottle2.jpg", cardTitle:"Belvedere", category:"Vodka",cardText:'tiouf tiouf', cardSubtitle: 50, cardPrice:19.90}
    ];
        
    var shop=[];
    for(let i=0; i<articleTab.length; i++){
        shop.push(
        <Col  xs={12}  md={4} lg={2}>
            <Card className='card' >
                <CardImg className="cardImg" top width="100%" src={articleTab[i].cardImg} alt="Card image cap" />
                <CardBody className="cardBody">
                <CardTitle className="cardTitle">{articleTab[i].cardTitle}</CardTitle>
                <CardSubtitle className='category'>{articleTab[i].category}</CardSubtitle>
                <CardText className='cardText'>{articleTab[i].cardText}</CardText>
                <CardSubtitle className="cardStock">Stock restant :<span className='cardStockNumber'>{articleTab[i].cardSubtitle}</span> </CardSubtitle>
                <h3 className="price">{articleTab[i].cardPrice}€<img className='icon' src='smart-cartBlue.svg' cursor='pointer' onClick={()=>handleClickBasket({i},articleTab[i].cardImg,articleTab[i].cardTitle, articleTab[i].cardPrice)}></img></h3>
                </CardBody>
            </Card>
        </Col>)
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
                            <Input  type="checkbox" id="checkbox1" onSelected/>{' '}
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
                        {shop} 
                    </Row>
                </Container>
        </div>
        
    </div>
  );
}

export default Shop;
