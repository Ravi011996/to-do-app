import { Chip } from "@mui/material";

const statusColors = {
  Completed: "success",
  "In Progress": "primary",
  Cancelled: "error",
};

const priorityColors = {
  High: "error",
  Medium: "warning",
  Low: "success",
};

export const renderStatusChip = (status) => {
  const color = statusColors[status] || "default";
  return <Chip label={status} color={color} />;
};

export const renderPriorityChip = (priority) => {
  const color = priorityColors[priority] || "default";
  return <Chip label={priority} color={color} />;
};