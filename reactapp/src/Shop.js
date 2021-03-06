import React, {useState, useEffect} from 'react';
import './App.css';
import Menu from "./Menu";
import {Container,Row,Col,Form, FormGroup, Label,Input, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import './Shop.css'
import {connect} from 'react-redux';



function Shop(props) {
   
     const [articleTab, setArticleTab] = useState([]);
     console.log("ARTICLETAB", articleTab)
     const [refreshedArticleTab, setRefreshedArticleTab] = useState([])
     console.log("REFRESHED", refreshedArticleTab)
     

                                                                 /*Chargement des articles depuis la Base de données*/
    useEffect( () => {
        async function loadData() {
            var rawResponse = await fetch('/getProduct');
            var response = await rawResponse.json();
            setArticleTab(response.articleTabFromBack);
            setRefreshedArticleTab(response.articleTabFromBack)
        }
        loadData()
      }, []);
      console.log("ici========",articleTab)
      
        
      var ginTab = articleTab.filter(alcohol=>alcohol.category ==="Gin")
      var whiskyTab = articleTab.filter(alcohol=>alcohol.category ==="Whisky")
      var armagnacTab = articleTab.filter(alcohol=>alcohol.category ==="Armagnac")
      var cognacTab = articleTab.filter(alcohol=>alcohol.category ==="Cognac")
      var rhumTab = articleTab.filter(alcohol=>alcohol.category ==="Rhum")
      var calvadosTab = articleTab.filter(alcohol=>alcohol.category ==="Calvados")


      console.log("GINTAB3", ginTab)
    
      const handleClickAllSelected=()=>{
        console.log("All");
        setRefreshedArticleTab(articleTab);   
    }
    const handleClickGinSelected=()=>{
        console.log("Gin");
        setRefreshedArticleTab(ginTab);   
    }
    const handleClickWhiskySelected=()=>{
        console.log("Whisky");
        setRefreshedArticleTab(whiskyTab);
    }
    const handleClickArmagnacSelected=()=>{
        console.log("Armagnac");
        setRefreshedArticleTab(armagnacTab);
    }
    const handleClickCognacSelected=()=>{
        console.log("Cognac");
        setRefreshedArticleTab(cognacTab);
    }
    const handleClickRhumSelected=()=>{
        console.log("Rhum");
        setRefreshedArticleTab(rhumTab);
    }
    const handleClickCalvadosSelected=()=>{
        console.log("Calvados");
        setRefreshedArticleTab(calvadosTab);
    }




    const handleClickBasket = (articleId, picture, name, category, description, stock, priceHT, quantity)=>{
        props.addArticleIdToBasket(articleId, picture, name, category, description, stock, priceHT, quantity);

    }
    
     
        
    var shop=[];
    for(let i=0; i<refreshedArticleTab.length; i++){
        shop.push(
        <Col  xs={12}  md={6} lg={4} xl={3}>
            <Card className='card' >
                <CardImg className="cardImg" top width="100%" src={refreshedArticleTab[i].picture} alt="Card image cap" />
                <CardBody className="cardBody">
                <CardTitle className="cardTitle">{refreshedArticleTab[i].name}</CardTitle>
                <CardSubtitle className='category'>{refreshedArticleTab[i].category}</CardSubtitle>
                <CardText className='cardText'>{refreshedArticleTab[i].description}</CardText>
                <CardSubtitle className="cardStock">Stock restant :<span className='cardStockNumber'>{refreshedArticleTab[i].stock}</span> </CardSubtitle>
                <h3 className="price">{refreshedArticleTab[i].priceHT*1.20}€</h3>
                <img className='icon' src='smart-cartBlue.svg' onClick={()=>handleClickBasket(refreshedArticleTab[i]._id,refreshedArticleTab[i].picture,refreshedArticleTab[i].name, refreshedArticleTab[i].category,refreshedArticleTab[i].description,refreshedArticleTab[i].stock,refreshedArticleTab[i].priceHT,1)}></img><span>Add to Cart</span>
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
                    <Form>
                        <FormGroup check>
                            <Label check className='check'>
                            <Input type="radio" name="radio2" onChange={()=>handleClickAllSelected()} />{' '}
                            All
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check className='check'>
                            <Input type="radio" name="radio2" onChange={()=>handleClickGinSelected()} />{' '}
                            Gin
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check className='check'>
                            <Input type="radio" name="radio2" onChange={()=>handleClickWhiskySelected()} />{' '}
                            Whisky
                            </Label>
                        </FormGroup>  
                        <FormGroup check>
                            <Label check className='check'>
                            <Input type="radio" name="radio2" onChange={()=>handleClickArmagnacSelected()}/>{' '}
                            Armagnac
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check className='check'>
                            <Input type="radio" name="radio2" onChange={()=>handleClickCognacSelected()}/>{' '}
                            Cognac
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check className='check'>
                            <Input type="radio" name="radio2" onChange={()=>handleClickRhumSelected()}/>{' '}
                            Rhum
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check className='check'>
                            <Input type="radio" name="radio2" onChange={()=>handleClickCalvadosSelected()}/>{' '}
                            Calvados
                            </Label>
                        </FormGroup>
                    </Form>
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
     addArticleIdToBasket: function(articleId, picture, name, category, description, stock, priceHT, quantity, ) {
        dispatch({type:'addArticleIdToBasket',
                id:articleId,picture, picture,name:name, category:category, description: description, stock:stock, priceHT:priceHT, quantity:quantity})
  }
    
}
	
}
export default connect(
    null, 
    mapDispatchToProps
    )(Shop);