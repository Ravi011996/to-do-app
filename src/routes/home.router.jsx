import React, { useState } from "react";
import { Container, Paper, Box } from "@mui/material";
import DatePickerRange from "../components/date-picker/date-picker-range.component";
import TaskActions from "../components/actions/task-actions.component";
import { Button } from "@mui/material";
import TaskDashboard from "../components/dashboard/task-dashboard.component";
import './router.styles.css';
const initialTasks = [
  {
    id: 1,
    taskName: "Complete React Project",
    description: "Work on the login and signup components.",
    dueDate: "2025-01-15",
    createDate: "2025-01-05",
    status: "Completed",
    priority: "High",
  },
  {
    id: 2,
    taskName: "Team Meeting",
    description: "Discuss the project roadmap and tasks.",
    dueDate: "2025-01-10",
    createDate: "2025-01-06",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: 3,
    taskName: "Submit Report",
    description: "Submit the progress report to the manager.",
    dueDate: "2025-01-12",
    createDate: "2025-01-07",
    status: "Cancelled",
    priority: "Low",
  },
];

const Home = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState(initialTasks);

  const HandleFilter = () => {
    const filterData = initialTasks.filter((task) => {
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;
      const taskDate = new Date(task.createDate);
      return (
        (!start || taskDate >= start) &&
        (!end || taskDate <= end)
      );
    });
    console.log("filterData ::", filterData);
    
    setData(filterData)
  }

  return (
    <Container className="home-container">
      <Paper className="home-paper">
        <Box className="home-box">
          <DatePickerRange
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            HandleFilter={HandleFilter}
          />
          <TaskActions />
        </Box>
      </Paper>
      <TaskDashboard initialTasks={data} />
    </Container>
  );
};

export default Home;
