import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Sample task data with completion date and status
const tasks = [
  {
    id: 1,
    taskName: "Complete React Project",
    description: "Work on the login and signup components.",
    dueDate: "2025-01-15",
    createDate: "2025-01-05",
    status: "Completed",
    completedDate: "2025-01-14", // Completed before due date
  },
  {
    id: 2,
    taskName: "Team Meeting",
    description: "Discuss the project roadmap and tasks.",
    dueDate: "2025-01-10",
    createDate: "2025-01-06",
    status: "In Progress",
  },
  {
    id: 3,
    taskName: "Submit Report",
    description: "Submit the progress report to the manager.",
    dueDate: "2025-01-12",
    createDate: "2025-01-07",
    status: "Cancelled",
  },
  {
    id: 4,
    taskName: "Bug Fixing",
    description: "Fix reported bugs in the application.",
    dueDate: "2025-02-05",
    createDate: "2025-01-30",
    status: "In Progress",
  },
  {
    id: 5,
    taskName: "Client Presentation",
    description: "Prepare a presentation for the client meeting.",
    dueDate: "2025-02-10",
    createDate: "2025-01-31",
    status: "Completed",
    completedDate: "2025-02-09",
  },
];

// Function to check if a task was completed on time
const isTaskCompletedOnTime = (task) => {
  if (!task.completedDate) return false;  // If there's no completion date, it's not completed
  const completedDate = new Date(task.completedDate);
  const dueDate = new Date(task.dueDate);

  // Task is completed on time if completedDate is before or on the due date
  return task.status === "Completed" && completedDate <= dueDate;
};

// Function to check task status for a given date
const getTaskStatusForDate = (date) => {
  const dateString = date.toISOString().split("T")[0]; // Convert date to yyyy-mm-dd format
  const taskForDate = tasks.filter(
    (task) =>
      task.createDate === dateString || task.completedDate === dateString
  );

  if (taskForDate.length > 0) {
    if (
      taskForDate.every(
        (task) =>
          task.status === "Completed" && isTaskCompletedOnTime(task)
      )
    ) {
      return "green"; // Completed on time
    }
    if (taskForDate.some((task) => task.status === "Cancelled")) {
      return "red"; // Cancelled task
    }
    if (taskForDate.some((task) => task.status === "In Progress")) {
      return "blue"; // Task in progress
    }
  }
  return null; // No task
};

// Calendar component
const TaskCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // Custom tileClassName to add color based on task completion
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const status = getTaskStatusForDate(date);
      if (status) {
        return `task-status-${status}`; // Adding class based on task status
      }
    }
    return '';
  };

  return (
    <div>
      <h2>Task Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName={tileClassName}
      />
      <div style={{ marginTop: '20px' }}>
        <h3>Selected Date: {date.toDateString()}</h3>
      </div>
    </div>
  );
};

export default TaskCalendar;
