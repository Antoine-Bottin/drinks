import React, {useState, useEffect} from 'react';
import './App.css';
import Menu from "./Menu";
import {Container,Row,Col,FormGroup, Label,Input, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import './Shop.css'
import {connect} from 'react-redux';



function Shop(props) {
   
     const [articleTab, setArticleTab] = useState([]);

                                                                 /*Chargement des articles depuis la Base de données*/
    useEffect( () => {
        async function loadData() {
            console.log('useEffect OK')
            var rawResponse = await fetch('/getProduct');
            var response = await rawResponse.json();
            setArticleTab(response.articleTabFromBack);
        }
        loadData()
      }, []);
      console.log("ici========",articleTab)
      
        
   

    


    const [ginSelected, setGinSelected] = useState(false)
    const handleClickGinSelected=()=>{
        console.log("cliqué");
        setGinSelected(true);
    }

    const handleClickBasket = (articleId)=>{
        props.onIncreaseClick();
        props.addToBasket(articleId);

    }
    
     
        
    var shop=[];
    for(let i=0; i<articleTab.length; i++){
        shop.push(
        <Col  xs={12}  md={6} lg={2}>
            <Card className='card' >
                <CardImg className="cardImg" top width="100%" src={articleTab[i].picture} alt="Card image cap" />
                <CardBody className="cardBody">
                <CardTitle className="cardTitle">{articleTab[i].name}</CardTitle>
                <CardSubtitle className='category'>{articleTab[i].category}</CardSubtitle>
                <CardText className='cardText'>{articleTab[i].description}</CardText>
                <CardSubtitle className="cardStock">Stock restant :<span className='cardStockNumber'>{articleTab[i].stock}</span> </CardSubtitle>
                <h3 className="price">{articleTab[i].priceTTC}€<img className='icon' src='smart-cartBlue.svg' cursor='pointer' onClick={()=>handleClickBasket(articleTab[i]._id)}></img></h3>
                </CardBody>
            </Card>
        </Col>)
    }


  return (
    <div className='background'>
        <Menu currentPage="shop"/>
        <div className='shopPage'>
{/* Filtres */}
                <div className='filters'>
                        <div className='title'>Filtres</div>
                        <FormGroup check>
                            <Label className='check' check>
                            <Input  type="checkbox" id="checkbox1" onChange={()=>handleClickGinSelected()}/>{' '}
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
                            <Label classeName="range" for="exampleRange">Prix</Label>
                            <Input type="range" name="range" id="exampleRange" />
                        
                    </FormGroup>
                </div>
                <Container fluid >
                    <Row>
                        {shop} 
                    </Row>
                </Container>
        </div>
        
    </div>
  );
}

function mapDispatchToProps(dispatch) {
    return {
      onIncreaseClick: function() {  
        dispatch( {type: 'addArticleToCount'} )    
  },
     addToBasket: function(articleId) {
        dispatch({type:'addArticleToBasket',
                value:articleId})

  }
    
}
	
}
export default connect(
    null, 
    mapDispatchToProps
    )(Shop);