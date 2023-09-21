import React, { useEffect } from 'react'
import Studentbody from './StudentBody.jsx'
import { elecsateam,eventteam,socialteam,webteam } from './students'
import "./StudentBody.css"
const Studentspage = () => {
 
  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);


  return (
    <>
    <div className='studentparent'>
    <div className='studentsbody'>
    <h2 style={{textAlign:'center',paddingTop:'18px'}}> STUDENT BODY OF ELECSA </h2>
    <hr style={{margin:'3px 20% 13px 20%'}} />
    <div className='wrapper'>
    <div className='studentsection'>
    {elecsateam.map((item,index)=>{
    
      return (
        <Studentbody 
        linkedinurl={item.linkedinurl}
        name={item.name}
        designation={item.designation}
        year={item.year}
        img={item.img}
        />
      )
    })}
    </div>
    </div>
    </div>
    </div>
   
    <div className='studentparent'>
    <div className='studentsbody'>
    <h2 style={{textAlign:'center',paddingTop:'18px'}}> EVENT MANAGEMENT TEAM </h2>
    <hr style={{margin:'3px 20% 13px 20%'}} />
    <div className='wrapper'>
    <div className='studentsection'>
    {eventteam.map((item)=>{
      return (
        <Studentbody 
        linkedinurl={item.linkedinurl}
        img={item.img}
        name={item.name}
        year={item.year}
        />
      )
    })}
    </div>
    </div>
    </div>
     </div>


     <div className='studentparent'>
    <div className='studentsbody'>
    <h2 style={{textAlign:'center',paddingTop:'18px'}}> SOCIAL MEDIA TEAM</h2>
    <hr style={{margin:'3px 20% 13px 20%'}} />
    <div className='wrapper'>
    <div className='studentsection'>
    {socialteam.map((item)=>{
      return (
        <Studentbody 
        linkedinurl={item.linkedinurl}
        img={item.img}
        name={item.name}
        year={item.year}
        />
      )
    })}
    </div>
    </div>
    </div>
    </div>
   <div className=''>
   <section >
    <div className='studentparent ' id='web' >
    <div className='studentsbody'>
    <h2 style={{textAlign:'center',paddingTop:'18px'}}> WEB TEAM </h2>
    <hr style={{margin:'3px 20% 13px 20%',color:"white"}} />
    <div className='wrapper'>
    <div className='studentsection'>
    {webteam.map((item)=>{
      return (
        <Studentbody 
        linkedinurl={item.linkedinurl}
        img={item.img}
        name={item.name}
        year={item.year}
        />
      )
    })}
    </div>
    </div>
    </div>
    </div>
    </section>
    </div>

    </>
  )
}

export default Studentspage