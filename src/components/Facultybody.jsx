import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import "./StudentBody.css"
const Facultybody = (props) => {
  return (
    <>
    
       <div className='card-section'>
       <div className={`scard `}>
      <div className='temp'>
        <img className='cardimg' src={props.img} alt="Student 1" />
        <a href={props.linkedinurl} target='blank'>  <div class="icon linkedin">  <LaunchIcon fontSize='large' /></div> </a>
        </div> <h2>{props.name}</h2>
        <p>{props.designation1}</p>
        <p>{props.designation2}</p>
        <p>Email : {props.email}</p>
    </div>
    </div>

 

    </>
  )
}

export default Facultybody