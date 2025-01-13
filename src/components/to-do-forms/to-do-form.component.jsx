import React, { useState } from "react";
import { Container, Button, Box } from "@mui/material";
import InputField from "./to-do-input.component";
import "./to-do-form.styles.css";

const TaskForm = () => {
  const [taskDetails, setTaskDetails] = useState({
    taskName: "",
    description: "",
    dueDate: "",
    priority: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Task Details Submitted:", taskDetails);
  };

  return (
    <Container maxWidth="sm" className="container">
      <Box component="form" onSubmit={handleSubmit} className="formBox">
        <InputField
          label="Task Name"
          name="taskName"
          type="text"
          value={taskDetails.taskName}
          onChange={handleChange}
        />

        <InputField
          label="Description"
          name="description"
          type="text"
          value={taskDetails.description}
          onChange={handleChange}
        />

        <InputField
          label="Due Date"
          name="dueDate"
          type="date"
          value={taskDetails.dueDate}
          onChange={handleChange}
        />

        <InputField
          label="Priority"
          name="priority"
          value={taskDetails.priority}
          onChange={handleChange}
          isSelect={true}
          options={["High", "Medium", "Low"]}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="submitButton"
        >
          Submit Task
        </Button>
      </Box>
    </Container>
  );
};

export default TaskForm;
