import React, { useEffect, useState } from "react";
import { Container, Paper, Box } from "@mui/material";
import DatePickerRange from "../components/date-picker/date-picker-range.component";
import TaskActions from "../components/actions/task-actions.component";
import TaskDashboard from "../components/dashboard/task-dashboard.component";
import {useTasks} from "../contexts/task/task-context";
import './router.styles.css';

const Home = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { tasks } = useTasks()
  const [data, setData] = useState(tasks);
  
  useEffect(()=>{
    HandleFilter()
  },[tasks])
  
  const HandleFilter = () => {
    const filterData = tasks.filter((task) => {
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;
      const taskDate = new Date(task.createDate);
      return (
        (!start || taskDate >= start) &&
        (!end || taskDate <= end)
      );
    });
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
