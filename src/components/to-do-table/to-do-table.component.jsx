import React from "react";
import { Box, Table, TableContainer, Paper, TableBody } from "@mui/material";
import TaskRow from "./table-row.comonent";
import TaskTableHead from "./task-table-head.component";
import "./to-do-table.styles.css";

const TaskTable = ({ initialTasks }) => {
  const tasks =  initialTasks

  const handleDeleteTask = (id) => {
    // need to handle delete items
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

      {/* {editTask && (
        <EditTaskDialog
          open={editDialogOpen}
          task={editTask}
          onSave={handleEditSave}
          onClose={() => setEditDialogOpen(false)}
        />
      )} */}
    </Box>
  );
};

export default TaskTable;
