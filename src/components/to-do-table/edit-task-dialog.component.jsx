import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, MenuItem } from "@mui/material";

const EditTaskDialog = ({ open, task, onSave, onClose }) => {
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleEditChange = (field, value) => {
    setEditedTask({ ...editedTask, [field]: value });
  };

  const handleSave = () => {
    onSave(editedTask);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          label="Task Name"
          value={editedTask.taskName}
          onChange={(e) => handleEditChange("taskName", e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          value={editedTask.description}
          onChange={(e) => handleEditChange("description", e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Due Date"
          type="date"
          value={editedTask.dueDate}
          onChange={(e) => handleEditChange("dueDate", e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Create Date"
          type="date"
          value={editedTask.createDate}
          onChange={(e) => handleEditChange("createDate", e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          select
          fullWidth
          margin="normal"
          label="Priority"
          value={editedTask.priority}
          onChange={(e) => handleEditChange("priority", e.target.value)}
        >
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </TextField>
        <TextField
          fullWidth
          margin="normal"
          label="Status"
          value={editedTask.status}
          onChange={(e) => handleEditChange("status", e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTaskDialog;
