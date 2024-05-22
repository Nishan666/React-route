import React from "react";
import EventItem from "../components/EventItem";
import { json, redirect, useRouteLoaderData } from "react-router-dom";

const EventDetailPage = () => {
  const data = useRouteLoaderData('event');
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetailPage;

export const loader = async ({request, params}) => {
  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event" },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
};


export const action = async({params , request}) => {
  const eventId = params.id;
  const res = await fetch('http://localhost:8080/events/'+eventId,{
    method : request.method
  })

  if (!res.ok) {
    throw json(
      { message: "Could not delete event" },
      {
        status: 500,
      }
    );
  }
  return redirect('/events')
}
