import React from "react";
import { Box, Table, TableContainer, Paper, TableBody } from "@mui/material";
import TaskRow from "./table-row.comonent";
import TaskTableHead from "./task-table-head.component";
import { useTasks } from "../../contexts/task/task-context";
import "./to-do-table.styles.css";

const TaskTable = ({ initialTasks }) => {
  const tasks =  initialTasks;
  const {  dispatch } = useTasks();

  const handleDeleteTask = (id) => {

    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };



  return (
    <Box className="task-table-container">
      <TableContainer component={Paper} className="task-table">
        <Table>
          <TaskTableHead />
          <TableBody>
            {tasks.map((task) => (
              <TaskRow
                key={task.id}
                task={task}
                onDelete={handleDeleteTask}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TaskTable;
