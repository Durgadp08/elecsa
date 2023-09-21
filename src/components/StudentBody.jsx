import React, { useEffect } from "react";
import "./StudentBody.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Studentbody = (props) => {
  return (
    <>
      <div className="card-section">
        <div className="scard">
          <div className="temp">
            <img className="cardimg" src={props.img} alt="Student 1" />
            <a href={props.linkedinurl} target="blank">
              
              <div class="icon linkedin">
                
                <LinkedInIcon fontSize="large" />
              </div>
            </a>
          </div>
          <h2>{props.designation}</h2>
          <p>{props.name}</p>
        {(props.year) &&  <p>{props.year}</p>}  
        </div>
      </div>
    </>
  );
};

export default Studentbody;
