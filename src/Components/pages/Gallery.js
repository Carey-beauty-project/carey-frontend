import React from 'react';
import { useEffect,useState } from 'react';
import { GalleryData } from './GalleryData';
import './Gallery.css'

function Gallery() {
    const[data,setData]=useState([]);
    const[collection,setCollection]=useState([]);
  
    useEffect(()=>{
  setData(GalleryData);
  setCollection([... new Set(GalleryData.map((item)=>item.title))])
 
    },[])
  
    const gallery_filter=(itemData)=>{
const filterData =GalleryData.filter((item)=>item.title == itemData);
setData(filterData);

    }


  return (
    <div className='Gallery'>
    <div className='gallerywrapper'>
<div className='filterItem'>
<ul>
    <li><button onClick={()=>setData(GalleryData)}> All</button>
       
    </li>

    
    {
        collection.map((item)=><li><button onClick={()=>{gallery_filter(item)}}>{item}</button></li>)
    }
    
</ul>
</div>

        <div className='gallerycontainer' style={{display: 'flex'}}>
{
    data.map((item)=> <div key={item.id} className='galleryItem'><img src={item.image}/></div>)
}
        </div>
    </div>
    </div>
  )
}

export default Gallery
