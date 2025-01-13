import React from "react";
import { TableRow, TableCell, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { renderStatusChip, renderPriorityChip } from '../../utils/task/task.utils';

const TaskRow = ({ task, onEdit, onDelete }) => {
  return (
    <TableRow>
      <TableCell>{task.taskName}</TableCell>
      <TableCell>{task.description}</TableCell>
      <TableCell>{task.dueDate}</TableCell>
      <TableCell>{task.createDate}</TableCell>
      <TableCell>{renderStatusChip(task.status)}</TableCell>
      <TableCell>{renderPriorityChip(task.priority)}</TableCell>
      <TableCell>
        <Tooltip title="Edit Task">
          <IconButton color="primary">
          <Link to={`/add/${task.id}`} className="auth-button-link">
            <EditIcon />
          </Link>
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete Task">
          <IconButton onClick={() => onDelete(task.id)} color="error">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

export default TaskRow;
