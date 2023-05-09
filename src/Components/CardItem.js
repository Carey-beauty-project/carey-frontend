import React from 'react'
import { Link } from 'react-router-dom'


function CardItem(props) {
  return (
    <>
    <Link className='cards_item_link'to={props.path}>
        <figure className='cards_item_pic-wrap'dat-category={props.label}>
            <img src={props.src} alt='Travel Image' style={{
                width:350, height: 200, borderRadius: 7, objectFit:'contain'
            }} className='cards_item_img'/>
        </figure>
        <div className='cards_item_info'>
            <h5 className='cards_item_text'>{props.text}</h5>
        </div>
    </Link>
    </>
  )
}

export default CardItem
