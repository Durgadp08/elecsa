import React from 'react'
import './Footer.css'

import { EmailOutlined } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedIn from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const Footer = () => {
  const email='elecsa@gmail.com';
  const mailtoUrl = `mailto:${email}`
  
  var screenWidth = window.screen.width;
  console.log(screenWidth);
  const a="fsection4";
  if(screenWidth>500){
        
  }

  return (
    <>
      <footer className="footer">
   
        <div className="fsection1">
        <LocationOnIcon fontSize='small' /> <a href="https://www.nitpy.ac.in/" style={{color:'black',textDecoration:'none'}} target='blank'> <p>Karaikal,NIT Puducherry</p></a>
        </div>

       
        <div className="fsection2">
            <span>Follow us on :</span>
          <a href="https://instagram.com/elecsa_nitpy?igshid=MzRlODBiNWFlZA==" target='blank'><div className="fab instagram"><div className='ico'><InstagramIcon fontSize='medium' className='footicon' /></div>   </div></a>
          <a href="https://www.linkedin.com/company/elecsa-nitpy/" target='blank'><i className="fab linkedin" ><LinkedIn fontSize='medium' className='footicon' /></i>  </a>
          {/* <a href="#"><i className="fab facebook"><FacebookIcon fontSize='medium' className='footicon'  /></i>  </a> */}
        
        </div>

       
        <div className={`fsection3`}>
       <EmailOutlined fontSize='small' className='footicon' />  <a href={mailtoUrl} style={{color:'black',textDecoration:'none'}}> <p> elecsanitpy@gmail.com</p></a> 
        </div>
    


      </footer>
      <div className='copy' style={{margin:"auto",marginBottom:"10px",textAlign:"center",width:"100%",backgroundColor:"white"}}>Copyright &copy; 2023 <span > <a href="/studentbody/#web">
            webteam</a>  </span> @elecsa,NIT Puducherry</div>
    </>

  
  )
}

export default Footer;