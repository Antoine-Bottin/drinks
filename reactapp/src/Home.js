import React,{useState,} from 'react';
import './App.css';
import Menu from "./Menu";
import './Home.css'

//import {Carousel} from 'reactstrap';
import {Modal, Button, Carousel} from 'react-bootstrap';



function Home() {
    
  return (
    <div className='background'>
        <Menu currentPage="home"></Menu>
          
          <Carousel className='carousel'>
            <Carousel.Item>
              <img
                className="carouselImg"
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
                className="carouselImg"
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
                className="carouselImg"
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
                className="carouselImg"
                src="bottle4.jpeg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Fourth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className='text'>
              <img src='LeftquoteBlue.svg' className='quoteIconLeft'/>
              <p className='lorem'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis dignissim eros. Ut hendrerit leo libero, vitae fringilla quam vestibulum vel. Maecenas tincidunt at leo ut aliquam. Suspendisse gravida lobortis ante et ullamcorper. Mauris nec semper urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vitae odio vitae purus viverra mattis eu nec nulla.
              Praesent mattis mi et porttitor dictum. Donec orci risus, pharetra vitae enim at, molestie tempus nunc. Donec a nulla ut lectus sollicitudin sodales. Aenean tincidunt arcu sit amet nisl vulputate sollicitudin. Nulla sit amet ullamcorper nisl. Etiam in elit laoreet, efficitur arcu non, placerat enim. Sed tincidunt placerat lectus, ac cursus eros sollicitudin sed. Nullam pellentesque enim tincidunt, dictum ligula quis, interdum felis. Sed non orci aliquam felis eleifend aliquam. Morbi vehicula sem vitae pretium varius. Phasellus aliquet ultricies est, vitae egestas metus sollicitudin non. Suspendisse ultricies bibendum eros sed sagittis. Suspendisse urna sem, gravida ac enim eget, pharetra scelerisque ligula. Morbi dictum ipsum eu feugiat mollis. Quisque id eleifend neque, ut ullamcorper lectus.
              Proin dui urna, tristique a ipsum sit amet, egestas consequat erat. Nulla iaculis magna orci, tincidunt maximus nisi porta vel. Nunc arcu erat, tincidunt ac efficitur in, tincidunt pulvinar est. Nunc interdum eget nisi et ultricies. Etiam vitae quam condimentum, laoreet mi a, tempor diam. Etiam iaculis pretium augue non lacinia. Suspendisse sit amet lorem felis. Nulla erat eros, condimentum auctor hendrerit et, laoreet id odio.
              </p>
              <img src='RightquoteBlue.svg' className='quoteIconRight'/>
          </div>
          <div>
          <p className="pouet">L'abus d'alcool est dangeureux pour la santé, à consommer avec modération!</p>
          </div>

          
          
          
       
     
    </div>

  );

  

  


      
  
}

export default Home;
