import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./task-actions.styles.css";

const TaskActions = () => {
  return (
    <Link to="/add" className="task-actions__button">
      <Button variant="contained" color="primary">
        Add Task
      </Button>
    </Link>
  );
};

export default TaskActions;
