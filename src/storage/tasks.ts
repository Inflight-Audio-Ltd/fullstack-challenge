import type { Task } from "../types/task";

const storage_id = "@task-manager";

export const storage = {
  store: (tasks: Task[]) => {
    localStorage.setItem(storage_id, JSON.stringify(tasks));
  },
  get: () => {},
};
