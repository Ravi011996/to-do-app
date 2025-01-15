import React from "react";
import TaskForm from "./to-do-form.component";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../../contexts/task/task-context";

const CreateTask = () => {
  const navigate = useNavigate();
  const { dispatch } = useTasks();

  const handleCreate = (taskDetails) => {
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        ...taskDetails,
        createDate: new Date().toISOString(),
      },
    });
    alert("Task created successfully!");
    navigate("/dashboard");
  };

  return (
    <TaskForm
      initialValues={{
        taskName: "",
        description: "",
        dueDate: "",
        priority: "",
        status: "In Progress",
      }}
      onSubmit={handleCreate}
      formTitle="Create Task"
    />
  );
};

export default CreateTask;
