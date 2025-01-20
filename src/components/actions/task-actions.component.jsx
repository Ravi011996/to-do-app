import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./task-actions.styles.css";

const TaskActions = () => {
  return (
    <div className="task-actions">
      <Link to="/add" className="task-actions__button">
        <Button variant="contained" color="primary">
          Add Task
        </Button>
      </Link>

      <Link to="/calendar" className="task-actions__button">
        <Button variant="contained" color="primary" sx={{ m: 2 }}>
           Calendar
        </Button>
      </Link>
    </div>
  );
};

export default TaskActions;
