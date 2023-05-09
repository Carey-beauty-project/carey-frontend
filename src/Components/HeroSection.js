import React from 'react';
import '../App.css'
import './HeroSection.css';
import {Card, Carousel, Button, Row, Col} from 'antd';


function HeroSection() {
  return (
    <div className='hero-container'>
      <Carousel autoplay>  
         <img src={require("./photos/images/p1.jpg")} alt="image here"/>
          <img src={("./photos/images/p2.jpg")} alt="image here"/>
          <img src={("./photos/images/p3.jpg")} alt="image here"/>
          
      </Carousel>
     
     <p>What are you waiting for?</p>
     <div className='hero-btns'>
       
     </div>
    </div>
  )
}

export default HeroSection
