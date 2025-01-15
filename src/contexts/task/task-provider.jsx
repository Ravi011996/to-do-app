import {useReducer} from 'react';
import { TaskContext } from './task-context';
import taskReducer from './task-reducer'


const initialTasks = [
  {
    id: 1,
    taskName: "Complete React Project",
    description: "Work on the login and signup components.",
    dueDate: "2025-01-15",
    createDate: "2025-01-05",
    status: "Completed",
    priority: "High",
  },
  {
    id: 2,
    taskName: "Prepare for Meeting",
    description: "Create a presentation for the client meeting.",
    dueDate: "2025-01-20",
    createDate: "2025-01-10",
    status: "Cancelled",
    priority: "Medium",
  },
];

export const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  
    return (
      <TaskContext.Provider value={{ tasks, dispatch }}>
        {children}
      </TaskContext.Provider>
    );
  };
  