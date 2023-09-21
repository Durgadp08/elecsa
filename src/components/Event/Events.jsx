import React from "react";
import eventDetails from "./EventInfo.js";
import { PastEventCard } from "./PastEventCard";
import { FutureEventCard } from "./FutureEventCard";
import "./Events.css";
import img from "../no-event-removebg-preview.png"

const Event = () => {
  const TodayDate = new Date();
  const eve = eventDetails;
  let NoOfFutureEvents = 0;
  console.log(eve.length);
  for (let i = 0; i < eve.length; i++) {
    const eventDate = new Date(eve[i].date);
    console.log(eve[i].date + " " + TodayDate);
    if (TodayDate <= eventDate) {
      NoOfFutureEvents++;
    }
  }
  console.log(NoOfFutureEvents);
  console.log("hbdhw");
  return (
    <div>
      <div className="Event-main">
        <div className="Event-main-Title">
          <p>Events</p>
        </div>
        <div className="Event-main-inside">
          <div className="Event-Cards-Past">
            <p>Past Events</p>
            {eventDetails.map((card, index) => {
              return (
                <PastEventCard
                  key={index}
                  id={index}
                  EventImage={card.eventposter}
                  EventName={card.eventName}
                  desc={card.LongDescrption}
                  date={card.date}
                />
              );
            })}
          </div>
          <div className="Event-Cards-Future">
            <p>Upcoming Events</p>
            {NoOfFutureEvents > 0 ? (
              eventDetails.map((card, index) => (
                <FutureEventCard
                  key={index}
                  id={index}
                  EventImage={card.eventposter}
                  EventName={card.eventName}
                  desc={card.LongDescrption}
                  date={card.date}
                />
              ))
            ) : (
              <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"10px"}}>
                <img src={img} alt="No-Event" style={{backgroundColor:"white"}}></img>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Event;
