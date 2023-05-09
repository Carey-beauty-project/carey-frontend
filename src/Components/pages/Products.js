import React from "react";
import '../../App.css';
import {BiTimeFive} from 'react-icons/bi'
//import p1 from '../../images/p1.jpg'
//mport p2 from '../../images/p2.jpg'
//import p3 from '../../images/p3.jpg'
//import p4 from '../../images/p4.jpg'
//import p5 from '../../images/p5.jpg'
//import p6 from '../../images/p6.jpg'

const Data=[
    {
        id:1,
       // image:p1,
        title:'CAREY COLLAGE',
        time:'Now',
        location:'Kenya',
        desc:'Makeup Classes | Weddings | Special Events',
        company:'CAREY  BEAUTY COLLAGE.'
    
    },
    {
        id:2,
        //image:p2,
        title:'CAREY COLLAGE',
        time:'Now',
        location:'Kenya',
        desc:'Makeup Classes | Weddings | Special Events',
        company:'CAREY  BEAUTY COLLAGE.'
    
    },
    {
        id:3,
      //  image:p3,
        title:'CAREY COLLAGE',
        time:'Now',
        location:'Kenya',
        desc:'Makeup Classes | Weddings | Special Events',
        company:'CAREY  BEAUTY COLLAGE.'
    
    },
    {
        id:4,
      //  image:p4,
        title:'CAREY COLLAGE',
        time:'Now',
        location:'Kenya',
        desc:'Makeup Classes | Weddings | Special Events',
        company:'CAREY  BEAUTY COLLAGE.'
    
    },
    {
        id:5,
       // image:p5,
        title:'CAREY COLLAGE',
        time:'Now',
        location:'Kenya',
        desc:'Makeup Classes | Weddings | Special Events',
        company:'CAREY  BEAUTY COLLAGE.'
    
    },
    {
        id:6,
      //  image:p6,
        title:'CAREY COLLAGE',
        time:'Now',
        location:'Kenya',
        desc:'Makeup Classes | Weddings | Special Events',
        company:'CAREY  BEAUTY COLLAGE.'
    
    },
    {
        id:6,
       // image:p6,
        title:'CAREY COLLAGE',
        time:'Now',
        location:'Kenya',
        desc:'Makeup Classes | Weddings | Special Events',
        company:'CAREY  BEAUTY COLLAGE.'
    
    },
    {
        id:6,
       // image:p6,
        title:'CAREY COLLAGE',
        time:'Now',
        location:'Kenya',
        desc:'Makeup Classes | Weddings | Special Events',
        company:'CAREY  BEAUTY COLLAGE.'
    
    },
    
]

const Products=()=>{
    return(
        <div>
            <div className="schoolContainer flex gap-10 justify-center flex-wrap items-center py-10">

               {
                Data.map(({id,image,title,time,location,description,company}) =>{
                    return (
                        <div key={id} className="group group/item singleSchool w-[250px] p-[20px] bg-white rounded[10px] 
                        hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                            
                            <span className="flex justify-between items-center gap-4">
        <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>
        <span className="flex items-center text-[#ccc] gap-1">
        <BiTimeFive/>{time}
        </span>
                            </span>
                            <h6 className="text-[#ccc">
                                {location}
                            </h6>
                            <p className="text-[13px] text-[#955959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white
                            ">
                     {description}
                            </p>
                            <div className="company flex items-center gap-2">
        <img src="" alt="" className="w-[10%]"/>
        <span className="text-[14px] py-[1rem] block group-hover:text-white">
            {company}
        </span>
                            </div>
        
                            <div className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">Apply Now</div>button
                        </div>
                    )
                })
               }
            </div>
        </div>
    )
}

export default Products;