import React from 'react'
import Typed from 'react-typed'
import "./Home1.css"
import img1 from "../photos/ELECSA_BR.png"
const Home1 = () => {
  return (
    <div className='intro'>
      <div className='left'>
        <div className='word'>
          <h1>ELE</h1>
          <span>
            
              <Typed
               strings={[
                "ctronics"  
              ]}
              loop
               typeSpeed={150}
               backSpeed={102}
          
          /></span>
        </div>
        <div className='word'>
          <h1>C</h1>
          <span>
            
              <Typed
               strings={[
                "ommunication"  
              ]}
              loop
               typeSpeed={100}
               backSpeed={68}
          
          /></span>
        </div>
        <div className='word'>
          <h1>S</h1>
          <span>
            
              <Typed
               strings={[
                "tudent"  
              ]}
              loop
               typeSpeed={200}
               backSpeed={130}
          
          /></span>
        </div>
        <div className='word'>
          <h1>A</h1>
          <span>
            
              <Typed
               strings={[
                "ssociation"  
              ]}
              loop
               typeSpeed={120}
               backSpeed={81.6}
               
          
          /></span>
        </div>
        
      </div>
      <div className='right'>
        <div className='right-img'>
          <img   src={img1} alt="ELECSA" />
        </div>
      </div>
    </div>
    
    
  )
}

export default Home1