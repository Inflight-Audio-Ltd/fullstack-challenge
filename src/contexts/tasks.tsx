import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { Task } from "../types/task";
import { storage } from "../storage/tasks";

export type TaskContextData = {
  tasks: Task[];
  addTask: (task: Task) => void;
};

const TaskContext = createContext({} as TaskContextData);

const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = useCallback((task: Task) => {
    setTasks((p) => {
      const updated = [...p, task];
      storage.store(updated);
      return updated;
    });
  }, []);

  const value = useMemo(() => ({ tasks, addTask }), [tasks, addTask]);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
}

export { TaskProvider, useTasks };
