import React,{useState,} from 'react';
import './App.css';
import Menu from "./Menu";
import { useHistory } from "react-router-dom";

//import {Carousel} from 'reactstrap';
import {Modal, Button, Carousel} from 'react-bootstrap';



function Splash() {
    var styles={
       
        image:{
          marginLeft:'40%'
        },
        
        modalButton:{
          marginTop:'20px',
          marginBottom:'20px',
          
        },
        
         
    }

        
        //let history = useHistory();

         // Etats pour la Modal 
         const [show, setShow] = useState(true);
         const handleClose = () => 
         setShow(false);
        // history.push("/bhome");
    
  return (
    <div className='backgroundSplash'>
        <Menu/>
          
          <Carousel className='carouselSplash'>
            <Carousel.Item>
              <img
                className='carouselImgSplash'
                src="bottle1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='carouselImgSplash'
                src="bottle2.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='carouselImgSplash'
                src="bottle3.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='carouselImgSplash'
                src="bottle4.jpeg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Fourth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
       
        //Affichage Modal 1
        
        <Modal  
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered 
                backdrop='static'
                keyboard={false}
                show={show} 
                onHide={handleClose} 
                animation={false}
                >
            <div className='allModal' >
              <div className='divImg'>
              <img className='modalImg' src='potionBlue.svg'/>
              </div>
            <Modal.Title className='modalTitle'>Alcohol is forbidden under 18yo</Modal.Title>
          
            <Modal.Body className='modalBody'>Please confirm you're more than 18yo</Modal.Body>
            <Modal.Footer className="modalFooter">
                <Button className='modalButton' variant='danger' href='https://google.com'>
                  Oups, I'm -18yo
                </Button>
                <Button className='modalButton' onClick={handleClose}>
                  Yes, I'm +18yo
                </Button>
            </Modal.Footer>
            </div>
          
        </Modal>

     
    </div>

  );

  

  


      
  
}

export default Splash;
