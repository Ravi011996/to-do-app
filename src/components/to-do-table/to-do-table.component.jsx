import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Chip,
  IconButton,
  Tooltip,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);

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

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };


  const handleEditTask = (task) => {
    setEditTask(task);
    setEditDialogOpen(true);
  };

  const handleEditSave = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editTask.id ? { ...editTask } : task
      )
    );
    setEditDialogOpen(false);
    setEditTask(null);
  };

  const handleEditChange = (field, value) => {
    setEditTask({ ...editTask, [field]: value });
  };

  return (
    <Box sx={{ mt: 5 }}>
      <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "0 auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Task Name</strong>
              </TableCell>
              <TableCell>
                <strong>Description</strong>
              </TableCell>
              <TableCell>
                <strong>Due Date</strong>
              </TableCell>
              <TableCell>
                <strong>Create Date</strong>
              </TableCell>
              <TableCell>
                <strong>Status</strong>
              </TableCell>
              <TableCell>
                <strong>Actions</strong>
              </TableCell>
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
                  <Tooltip title="Edit Task">
                    <IconButton
                      onClick={() => handleEditTask(task)}
                      color="primary"
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
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

      {/* Edit Task Dialog */}
      {editTask && (
        <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              margin="normal"
              label="Task Name"
              value={editTask.taskName}
              onChange={(e) => handleEditChange("taskName", e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Description"
              value={editTask.description}
              onChange={(e) => handleEditChange("description", e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Due Date"
              type="date"
              value={editTask.dueDate}
              onChange={(e) => handleEditChange("dueDate", e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Create Date"
              type="date"
              value={editTask.createDate}
              onChange={(e) => handleEditChange("createDate", e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Status"
              value={editTask.status}
              onChange={(e) => handleEditChange("status", e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditDialogOpen(false)} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleEditSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default TaskTable;
