import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

const TaskTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Task Name</TableCell>
        <TableCell>Description</TableCell>
        <TableCell>Due Date</TableCell>
        <TableCell>Create Date</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Priority</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TaskTableHead;
