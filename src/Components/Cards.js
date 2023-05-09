import React from 'react';
import CardItem from './CardItem';
import {Card, Carousel, Button, Row, Col} from 'antd';
import './Cards.css'


function Cards() {
  return (
    <div className='cards'>
      <h1>Where learning is
guaranteed!</h1>
      <div className='cards_container'>
        <div className='card_wrapper'>
<div className='cards_items' style={{display: 'flex', justifyContent: 'space-evenly', marginTop:8}}>

    <CardItem 
    src="images/p1.jpg"
    text=""
    label='Adventure' 
    path='/services'/>
  
<CardItem 
    src="images/p8.jpg"
    text=""
    
    path='/services'/>
</div>
<div style={{display: 'flex', justifyContent:'space-between', marginTop:8}} className='cards_items'>
    <CardItem 
    src="images/p6.jpg"
    text=""
    label='Adventure' 
    path='/services'/>

<CardItem 
    src="images/p7.jpg"
    text=""
    label='Adventure' 
    path='/services'/>
    <CardItem 
    src="images/p8.jpg"
    text=""
    label='Adventure' 
    path='/services'/>
</div>

        </div>
      </div>
    </div>
  )
}

export default Cards
