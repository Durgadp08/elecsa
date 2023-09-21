import React from 'react'
import { faculty, hod, tech } from '../components/students'
// import Studentbody from './Studentbody'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaunchIcon from '@mui/icons-material/Launch';
import Facultybody from './Facultybody';
import "./StudentBody.css"

const Faculty = () => {
  return (
    <>
      
      <div className='studentparent'>
    <div className='studentsbody'>
    <h2 style={{textAlign:'center',paddingTop:'18px'}}> FACULTY AND STAFF </h2>
    <hr style={{margin:'3px 20% 13px 20%'}} />
    <div className='wrapper'>
    <div className='studentsection'>

    <div className='card-section'>
<div className={`scard `}>
      <div className='temp'>
        <img className='cardimg' src={hod[0].img} alt="Student 1" />
        <a href={hod[0].linkedinurl} target='blank'>  <div class="icon linkedin">  <LaunchIcon fontSize='large' /></div> </a>
        </div> <h2>{hod[0].name}</h2>
        <p>{hod[0].designation1}</p>
        <p>{hod[0].designation2}</p>
        <p>Email : {hod[0].email}</p>
    </div>
    </div>

    </div>
    </div>
    </div>
    </div>

      <div className='studentparent'>
    <div className='studentsbody'>
    
   
    <div className='wrapper'>
    <div className='studentsection'>
    {faculty.map((item,index)=>{
    
      return (
        <Facultybody 
        linkedinurl={item.linkedinurl}
        name={item.name}
        designation1={item.designation1}
        designation2={item.designation2}
        year={item.year}
        img={item.img}
        email={item.email}
        />
      )
    })}
    </div>
    </div>
    </div>
    </div>
     

     <h2 style={{textAlign:"center",backgroundColor:"#40e0d0",paddingTop:"15px",}}>TECHNICIANS</h2>
    <div className='studentparent'>
    <div className='studentsbody'>
    
   
    <div className='wrapper'>
    <div className='studentsection'>
    {tech.map((item,index)=>{
    
      return (
        <Facultybody 
        linkedinurl={item.linkedinurl}
        name={item.name}
        designation1={item.designation1}
        designation2={item.designation2}
        year={item.year}
        img={item.img}
        email={item.email}
        />
      )
    })}
    </div>
    </div>
    </div>
    </div>

    </>
  )
}

export default Faculty