import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import eventDetails from './EventInfo';
import "./Events.css"
const EventPage = () => {
  const { id } = useParams();
  const eve = eventDetails[id];
  const [currentDate, setCurrentDate] = useState(new Date());
  const registrationEndDate = new Date(eve.date);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);
  const nagvigate = useNavigate();
  useEffect(() => {
    if (currentDate > registrationEndDate) {
      setIsRegistrationOpen(false);
    } else {
      setIsRegistrationOpen(true);
    }
  }, [currentDate, registrationEndDate]);
  const des = eve.LongDescrption;

  return (
    <div className='Event-Page'>
      <div className="arrow" onClick={()=>{
        nagvigate("/event");
      }}></div>
      <div className='Event-Content'>
        <div className='Event-Image'>
          <img src={eve.eventMainPic}></img>
        </div>
        <div className='Event-Title'>
          <h3>{eve.eventName}</h3>
          {des.map((paragraph, index) => (
            <div className='Event-Descrip'><p key={index}>{paragraph}</p></div>
          ))}
        </div>
      </div>
      {isRegistrationOpen ? (
      <div class="box-1">
        <div class="btn btn-one">
          <span>Register</span>
        </div>
      </div>) : (<></>)}
    </div>
  );
};
export default EventPage

{/* // 
<div className='Event-Title'>
    <h3>{eve.eventName}</h3> */}
// </div>
// <div className='Event-Image'><img src={eve.eventMainPic}></img></div>
// {des.map((paragraph, index) => (
//     <div className='Event-Descrip'><p key={index}>{paragraph}</p></div>
//   ))}
// </div>