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

/**
 * Renders a status chip component based on the provided status.
 *
 * @param {string} status - The status level, which can be "Completed", "In Progress", "Cancelled", or other strings.
 *                         - "Completed" renders a green chip.
 *                         - "In Progress" renders a blue chip.
 *                         - "Cancelled" renders a red chip.
 *                         - Other values render a default-colored chip.
 *
 * @returns {JSX.Element} A Chip component with the status label and appropriate color.
 */
export const renderStatusChip = (status) => {
  const color = statusColors[status] || "default";
  return <Chip label={status} color={color} />;
};

/**
 * Renders a priority chip component based on the provided priority level.
 *
 * @param {string} priority - The priority level, which can be "High", "Medium", "Low", or other strings.
 *                           - "High" renders a red chip.
 *                           - "Medium" renders an orange chip.
 *                           - "Low" renders a green chip.
 *                           - Other values render a default-colored chip.
 *
 * @returns {JSX.Element} A Chip component with the priority label and appropriate color.
 */
export const renderPriorityChip = (priority) => {
  const color = priorityColors[priority] || "default";
  return <Chip label={priority} color={color} />;
};