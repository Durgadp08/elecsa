import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Events.css"

export const FutureEventCard = ({ id, EventImage, EventName, desc ,date }) => {
  const nagvigate = useNavigate();
  const datesplit = date.split("-");
  const [currentDate, setCurrentDate] = useState(new Date());
  const eventDate = new Date(date);
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  const [pastEvent, setPastEvent] = useState(false);
  useEffect(() => {
    if (currentDate > eventDate) {
      setPastEvent(true);
    } else {
      setPastEvent(false);
    }
  })
  return (
    <>
      {!pastEvent &&
        <div className='EventCard-divison-Future'>
          <div className='EventCard-Future' onClick={() => {
            nagvigate(`/event/${id}`)
          }}>
            <div className='EventImage'><img src={EventImage}></img></div>
            <div className='EventCard-Title'>
              <h4 style={{margin:0}}>{EventName}</h4>
              <div>
              </div>
              <div className='EventCard-Details-Date'>
                <i class="fa-regular fa-calendar-days"></i>
                <p>{datesplit[2]}-{months[datesplit[1] - 0]}-{datesplit[0]}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
