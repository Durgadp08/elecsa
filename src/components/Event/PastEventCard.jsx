import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Events.css"

export const PastEventCard = ({ id, EventImage, EventName, desc, date }) => {
  const nagvigate = useNavigate();
  const datesplit = date.split("-");
  const [currentDate, setCurrentDate] = useState(new Date());
  const eventDate = new Date(date);
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  const [pastEvent, setPastEvent] = useState(false);
  let s = desc[0]
  const halfDesc = s.substring(0, s.length / 2);
  useEffect(() => {
    if (currentDate > eventDate) {
      setPastEvent(true);
    } else {
      setPastEvent(false);
    }
  })
  return (
    <>
      {pastEvent &&
        <div className='EventCard-divison-Past'>
          <div className='EventCard-Past'>
            <div className='EventImage'><img src={EventImage}></img></div>
            <div className='EventCard-Title'>
              <h4>{EventName}</h4>
              <div>{halfDesc}....</div>
              <div className='EventCard-Details'>
                <div className='EventCard-Details-Date'>
                  <i class="fa-regular fa-calendar-days"></i>
                  <p>{datesplit[2]}-{months[datesplit[1] - 1]}-{datesplit[0]}</p>
                </div>
                <div className='EventCard-Details-Button' onClick={() => {
                  nagvigate(`/event/${id}`)
                }}>
                Read More
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}