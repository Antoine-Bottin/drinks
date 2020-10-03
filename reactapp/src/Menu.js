import React, {useState} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {Link,Redirect} from 'react-router-dom'
import "./Menu.css";
import {connect} from 'react-redux';





function Menu(props) {
    // Les états et setteurs

    let [homeIcon, sethomeIcon]=useState(false)
    let [shopIcon, setshopIcon]=useState(false)
    let [basketIcon, setbasketIcon]=useState(false)
    let [accountIcon, setaccountIcon]=useState(false)

    let [homeRedirect, setHomeRedirect]=useState(false)
    let [shopRedirect, setShopRedirect]=useState(false)
    let [basketRedirect, setBasketRedirect]=useState(false)
    let [accountRedirect, setAccountRedirect]=useState(false)

    // Les actions des onClick{}
        //Sur le bouton home, ou bottle
    var handleClickHome=()=>(
        console.log('click Home détecté'),
        sethomeIcon(true),
        setshopIcon(false),
        setbasketIcon(false),
        setaccountIcon(false),
        setHomeRedirect(true) 
    )
        //Sur le bouton potion
    var handleClickShop=()=>(
        console.log("click Shop détecté"),
        sethomeIcon(false),
        setshopIcon(true),
        setbasketIcon(false),
        setaccountIcon(false)
    )
        //Sur le bouton panier
    var handleClickBasket=()=>(
        console.log("click Basket détecté"),
        sethomeIcon(false),
        setshopIcon(false),
        setbasketIcon(true),
        setaccountIcon(false)
    )
        //Sur le bouton profil
    var handleClickAccount=()=>(
        console.log("click Profile détecté"),
        sethomeIcon(false),
        setshopIcon(false),
        setbasketIcon(false),
        setaccountIcon(true)
    )
        
        //Les conditions pour illuminer les icones.

        let home="browser.svg";
        let shop="potion.svg";
        let basket="smart-cart.svg";
        let account="user.svg"
    if (props.currentPage==="home"){
        home="browserBlue.svg"
    }
    if (props.currentPage==="shop"){
        shop = "potionGreen.svg"
    }
    if(props.currentPage==="basket"){
        basket="smart-cartPink.svg"
    }
    if(props.currentPage==="account"){
        account="userYellow.svg"
    }
    return (
  
         
         <Container fluid className = 'menu'>
            <Row>
                <Col xs={12} md={6}  >
                    <Row className ='col1'>
                        <Col xs={1} md={1}className='titleLetter'>D</Col>
                        <Col xs={1} md={1}className='titleLetter'>r</Col>
                        <Col xs={1} md={1}><Link to='/home'><img alt='icone Drinks' onClick={()=>handleClickHome()} className='Bottleicon' src='rumBlue.svg'/></Link></Col> 
                        <Col xs={1} md={1}className='titleLetter'>n</Col>
                        <Col xs={1} md={1}className='titleLetter'>K</Col>
                        <Col xs={1} md={1}className='titleLetter'>s</Col>
                        <Col xs={1} md={1}className='titleLetterSmall'>  e.g </Col>
                    </Row>       
                </Col>
                <Col xs={12} md={6} > 
                    <Row className='col2'>
                        <Link to="/home"><img alt='icone Home' className='menuIcon' src={home}/></Link>
                        <Link to="/shop"><img alt='icone Shop'onClick={()=>handleClickShop()}className='menuIcon' src={shop}/></Link>
                        <Link to="/basket"><img alt='icone Basket' onClick={()=>handleClickBasket()}className='menuIcon' src={basket}/>{props.countToDisplay}</Link>
                        <Link to="/account"><img alt='icone Account' onClick={()=>handleClickAccount()} className='menuIcon' src={account}/></Link>
                    </Row>
                </Col>
            </Row>
        </Container> 
    
  );
}

function mapStateToProps(state) {
    return { countToDisplay: state.articleId.length }
}

export default connect(
    mapStateToProps, 
    null
    )(Menu);
        
