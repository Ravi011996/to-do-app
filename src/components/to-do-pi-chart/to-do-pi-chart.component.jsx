import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Sample Task Data
const tasks = [
  {
    id: 1,
    taskName: "Complete React Project",
    description: "Work on the login and signup components.",
    dueDate: "2025-01-15",
    createDate: "2025-01-05",
    status: "Completed",
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
  },
];

// Helper function to filter tasks by month
const filterTasksByMonth = (tasks, month) => {
  return tasks.filter(
    (task) => new Date(task.createDate).getMonth() + 1 === month
  );
};

const TaskChart = () => {
  const [selectedMonth, setSelectedMonth] = useState(1); // Default to January

  // Filtered Tasks
  const filteredTasks = useMemo(
    () => filterTasksByMonth(tasks, selectedMonth),
    [selectedMonth]
  );

  // Count Tasks by Status
  const taskStatusCount = useMemo(() => {
    const statusCount = {
      Completed: 0,
      "In Progress": 0,
      Cancelled: 0,
    };

    filteredTasks.forEach((task) => {
      statusCount[task.status]++;
    });

    return statusCount;
  }, [filteredTasks]);

  // Pie Chart Data
  const chartData = {
    labels: ["Completed", "In Progress", "Cancelled"],
    datasets: [
      {
        label: "Tasks by Status",
        data: [
          taskStatusCount.Completed,
          taskStatusCount["In Progress"],
          taskStatusCount.Cancelled,
        ],
        backgroundColor: ["#4caf50", "#2196f3", "#f44336"],
        borderColor: ["#ffffff", "#ffffff", "#ffffff"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Task Overview
      </Typography>
      <FormControl sx={{ mb: 3, minWidth: 200 }}>
        <InputLabel>Month</InputLabel>
        <Select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <MenuItem value={1}>January</MenuItem>
          <MenuItem value={2}>February</MenuItem>
          <MenuItem value={3}>March</MenuItem>
          <MenuItem value={4}>April</MenuItem>
          <MenuItem value={5}>May</MenuItem>
          <MenuItem value={6}>June</MenuItem>
          <MenuItem value={7}>July</MenuItem>
          <MenuItem value={8}>August</MenuItem>
          <MenuItem value={9}>September</MenuItem>
          <MenuItem value={10}>October</MenuItem>
          <MenuItem value={11}>November</MenuItem>
          <MenuItem value={12}>December</MenuItem>
        </Select>
      </FormControl>

      {filteredTasks.length > 0 ? (
        <Pie data={chartData} />
      ) : (
        <Typography variant="h6" color="textSecondary">
          No tasks available for the selected month.
        </Typography>
      )}
    </Box>
  );
};

export default TaskChart;
