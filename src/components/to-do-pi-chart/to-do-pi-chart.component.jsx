import React, { useMemo } from "react";
import {Box,Typography} from "@mui/material";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);


const TaskChart = ({initialTasks}) => {
  const filteredTasks = initialTasks

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
      {filteredTasks.length > 0 ? (
        <Pie data={chartData}   width={260} height={260}/>
      ) : (
        <Typography variant="h6" color="textSecondary">
          No tasks available for the selected month.
        </Typography>
      )}
    </Box>
  );
};

export default TaskChart;
