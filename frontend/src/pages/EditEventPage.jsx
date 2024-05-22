import React from "react";
import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

const EditEventPage = () => {
  const data = useRouteLoaderData("event");

  return <EventForm method="patch" event={data.event} />;
};

export default EditEventPage;
