// TaskDashboard.js
import React from "react";
import { Box, Paper } from "@mui/material";
import TaskTable from "../to-do-table/to-do-table.component";
import TaskChart from "../to-do-pi-chart/to-do-pi-chart.component";
import "./task-dashboard.styles.css";


const TaskDashboard = ({ initialTasks = [] }) => {
  return (
    <Box className="task-dashboard">
      <Paper className="task-dashboard__table">
        <TaskTable initialTasks={initialTasks}/>
      </Paper>

      <Paper className="task-dashboard__chart">
        <TaskChart initialTasks={initialTasks}/>
      </Paper>
    </Box>
  );
};

export default TaskDashboard;
