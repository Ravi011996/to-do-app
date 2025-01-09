import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";

const TaskForm = () => {
  // State to store form inputs
  const [taskDetails, setTaskDetails] = useState({
    taskName: "",
    description: "",
    dueDate: "",
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Task Details Submitted:", taskDetails);
    // Add further submission logic here
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      {/* Form Header */}
      <Typography variant="h4" gutterBottom>
        Task Details
      </Typography>

      {/* Task Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 3,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        {/* Task Name Field */}
        <TextField
          fullWidth
          label="Task Name"
          name="taskName"
          value={taskDetails.taskName}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />

        {/* Description Field */}
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={taskDetails.description}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
        />

        {/* Due Date Field */}
        <TextField
          fullWidth
          label="Due Date"
          name="dueDate"
          type="date"
          value={taskDetails.dueDate}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Submit Task
        </Button>
      </Box>
    </Container>
  );
};

export default TaskForm;
