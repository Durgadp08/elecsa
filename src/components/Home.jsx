import React from 'react'
// import "./Home.css"
import {Carousel} from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Home.css"

import img1 from '../photos/ELECSA 1.jpeg'
import img2 from '../photos/ELECSA 2.jpeg'
import img3 from '../photos/ELECSA 3.jpeg'
import img4 from '../photos/ELECSA 4.jpeg'
import img5 from '../photos/ELECSA 5.jpeg'
import img6 from '../photos/ELECSA 6.jpeg'
import Home1 from './Home1';
import About from './About';
import Footer from './Footer';


const Home = () => {
  return (
    <>
    <Home1/>
    
    <div className='container'>
      <Carousel infiniteLoop autoPlay   showThumbs={false} interval={3000} showStatus={false} className='carousel-container'>
        <div className='box'>
          <img className='Image'   src={img1} alt="" />
          {/* <h1 className='matter'>WELCOME TO ELECSA</h1> */}
        </div>
        <div className='box' >
          <img className='Image' src={img2} alt="" />
          {/* <h1 className='matter'>WELCOME TO ELECSA</h1> */}
        </div>
        <div className='box'>
          <img className='Image'   src={img3} alt="" />
          {/* <h1 className='matter'>WELCOME TO ELECSA</h1> */}
        </div>
        <div className='box'>
          <img className='Image'   src={img4} alt="" />
          {/* <h1 className='matter'>WELCOME TO ELECSA</h1> */}
        </div>
        {/* <div className='box'>
          <img className='Image'   src={img5} alt="" />
          <h1 className='matter'>WELCOME TO ELECSA</h1>
        </div> */}
        <div className='box'>
          <img className='Image'   src={img6} alt="" />
          {/* <h1 className='matter'>WELCOME TO ELECSA</h1> */}
        </div>
      </Carousel>
     
    </div>
    <About/>
    </>
  )
}

export default Home