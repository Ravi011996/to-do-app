import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useTasks } from "../../contexts/task/task-context";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarScheduler = () => {
  const { tasks } = useTasks(); 

  const events = tasks.map((task) => ({
    id: task.id,
    title: task.taskName,
    start: new Date(task.dueDate),
    end: new Date(task.dueDate),
    status: task.status,
  }));

  const eventStyleGetter = (event) => {
    let backgroundColor;
    if (event.status === "Completed") {
      backgroundColor = "green";
    } else if (event.status === "Cancelled") {
      backgroundColor = "red";
    } else {
      backgroundColor = "blue"; 
    }

    return {
      style: { backgroundColor, color: "white", borderRadius: "5px", padding: "2px" },
    };
  };

  return (
    <div style={{ height: "80vh", margin: "20px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="month" 
        style={{ height: 600 }}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
};

export default CalendarScheduler;
