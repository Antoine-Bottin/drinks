import React, {useState} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom'




function Menu() {
    
    

    // Les états et setteurs

    let [homeIcon, sethomeIcon]=useState(false)
    let [shopIcon, setshopIcon]=useState(false)
    let [basketIcon, setbasketIcon]=useState(false)
    let [accountIcon, setaccountIcon]=useState(false)

    // Les actions des onClick{}
        //Sur le bouton home, ou bottle
    var handleClickHome=()=>(
        console.log('click Home détecté'),
        sethomeIcon(true),
        setshopIcon(false),
        setbasketIcon(false),
        setaccountIcon(false)   
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

    let home='browser.svg'
    if (homeIcon){
        home= 'browserBlue.svg'
    }
    
    let shop='potion.svg'
    if(shopIcon){
        shop='potionGreen.svg'
    }

    let basket='smart-cart.svg'
    if (basketIcon){
        basket= 'smart-cartPink.svg'
    }
    
    let account='user.svg'
    if(accountIcon){
        account='userYellow.svg'
    }
  
    return (
  
         
         <Container fluid className = 'menu'>
            <Row>
                <Col xs={12} md={6}  >
                    <Row className ='col1'>
                        <Col xs={1} md={1}className='titleLetter'>D</Col>
                        <Col xs={1} md={1}className='titleLetter'>r</Col>
                        <Col xs={1} md={1}><Link to='/home'><img alt='icone Drinks' onClick={()=>handleClickHome()} className='Bottleicon' src='rum.svg'/></Link></Col> 
                        <Col xs={1} md={1}className='titleLetter'>n</Col>
                        <Col xs={1} md={1}className='titleLetter'>K</Col>
                        <Col xs={1} md={1}className='titleLetter'>s</Col>
                        <Col xs={1} md={1}className='titleLetterSmall'>  e.g </Col>
                    </Row>       
                </Col>
                <Col xs={12} md={6} > 
                        <Row className='col2'>
                            <Link to='/home' ><img alt='icone Home' onClick={()=>handleClickHome()} className='menuIcon' src={home}/></Link>
                            <Link to='/shop'><img alt='icone Shop'onClick={()=>handleClickShop()}className='menuIcon' src={shop}/></Link>
                            <Link to='/basket'>2<img alt='icone Basket' onClick={()=>handleClickBasket()}className='menuIcon' src={basket}/></Link>
                            <Link to='/account'><img alt='icone Account' onClick={()=>handleClickAccount()} className='menuIcon' src={account}/></Link>  
                        </Row>
                </Col>
            </Row>
        </Container> 
    
  );
}

export default Menu;