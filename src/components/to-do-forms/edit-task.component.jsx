import React, { useEffect, useState } from "react";
import TaskForm from "./to-do-form.component";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../../contexts/task/task-context";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, dispatch } = useTasks();

  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    const taskToEdit = tasks.find((task) => task.id === parseInt(id));
    if (taskToEdit) {
      setInitialValues(taskToEdit);
    } else {
      alert("Task not found");
      navigate("/dashboard");
    }
  }, [id, tasks, navigate]);

  const handleEdit = (updatedTask) => {
    dispatch({
      type: "EDIT_TASK",
      payload: { id: parseInt(id), ...updatedTask },
    });
    alert("Task updated successfully!");
    navigate("/dashboard");
  };

  if (!initialValues) return null;

  return (
    <TaskForm
      initialValues={initialValues}
      onSubmit={handleEdit}
      formTitle="Edit Task"
    />
  );
};

export default EditTask;
