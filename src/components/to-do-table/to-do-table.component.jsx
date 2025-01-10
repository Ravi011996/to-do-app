import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Chip,
  IconButton,
  Tooltip,
  Button,
  TextField,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

// Sample Task Data
const initialTasks = [
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
];

const TaskTable = () => {
  const [tasks, setTasks] = useState(initialTasks);

  // Function to render a Chip based on status
  const renderStatusChip = (status) => {
    let color;
    switch (status) {
      case "Completed":
        color = "success";
        break;
      case "In Progress":
        color = "primary";
        break;
      case "Cancelled":
        color = "error";
        break;
      default:
        color = "default";
    }
    return <Chip label={status} color={color} />;
  };

  // Function to handle task deletion
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Function to handle adding a new task
  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      taskName: "New Task",
      description: "Description of the new task.",
      dueDate: "2025-01-20",
      createDate: "2025-01-10",
      status: "In Progress",
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Task Details
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2, pr: 2 }}>
        <Tooltip title="Add Task">
          <IconButton onClick={handleAddTask} color="primary">
            <AddCircleOutlineIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>
      <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "0 auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Task Name</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
              <TableCell><strong>Due Date</strong></TableCell>
              <TableCell><strong>Create Date</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.taskName}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.dueDate}</TableCell>
                <TableCell>{task.createDate}</TableCell>
                <TableCell>{renderStatusChip(task.status)}</TableCell>
                <TableCell>
                  <Tooltip title="Delete Task">
                    <IconButton
                      onClick={() => handleDeleteTask(task.id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TaskTable;
