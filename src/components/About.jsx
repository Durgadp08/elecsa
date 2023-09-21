import React, { useEffect } from 'react'
import './About.css'

const About = () => {

  return (
    <>
    
     <div className="sections-container">
       <div className='sections'>
        <div className="section1">
          <h1>About Us</h1>
          <h6>
         <span> Welcome to Elecsa,</span> the heart of innovation at the National Institute of Technology's Electronics and Communication Engineering Department!
           Founded on the 16th of September 2022, Elecsa is more than just a student community.
          Elecsa offers a rich tapestry of activities, with a primary focus on events and workshops. 
           From hackathons to seminars,we provide a platform for both learning and networking.
           we are a dynamic hub for aspiring engineers and tech enthusiasts.
          </h6>
          
        </div>

        <div className="section2">
          <div className="video-container">
        
          <iframe src="https://drive.google.com/file/d/1qUepnQMPmxa3bsU_KH1WtYwDIINwCZ3k/preview"
           title="YouTube video player"
            frameborder="0"
            //  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
           </iframe>
          </div>
        </div>
        </div>
      </div>

    </>
  )
}

export default About