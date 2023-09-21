import React, { useState } from 'react'
import img1 from  "../photos/logo.png"
import img4 from "../photos/Elecsa1.jpeg"

import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [click,setclick]=useState(false)
  return (
    
    <div className='navbar'>
        <div className='top1'>
           <div className='img'>
             <img width={'90'} height={'90'} src={img1} className={'nit'} alt="" />
             <img width={'100'} height={'100'} src={img4} className='ele' alt="" />
             
           </div>
           <div className='next'>
            <i class='bx bx-menu' onClick={()=>setclick(!click)} id="menu" ></i>

           </div>
           
           <div className={click?'middle act':'middle'}>
           
           
              <Link  className='links' to={"/"} onClick={()=>setclick(!click)}>
               
                  Home
                
              </Link>
            
            
              
              <Link className='links' to={"/event"} onClick={()=>setclick(!click)}>
                Events
                
              </Link>
          
            
            <Link className='links' to={"/faculty"} onClick={()=>setclick(!click)}>
              {/* <button className='linkto'> */}
                Faculty
              {/* </button> */}
            </Link>
            
            
            <Link className='links' to={"/studentbody"} onClick={()=>setclick(!click)}>
              {/* <button className='linkto'> */}
                Student Body
              {/* </button> */}
            </Link>
            
        {/* </div> */}
        </div>

           {/*  </div> */}
           {/* <div className='img1'>
            <img width={'100'} height={'100'} src={img2} alt=''/>
           </div> */}
      </div>
       
    </div>
  )
}

export default Navbar