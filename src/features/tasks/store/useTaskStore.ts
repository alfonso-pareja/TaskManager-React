import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { type Task, type TaskFilter } from "../types";

interface TaskState {
  tasks: Task[];
  filter: TaskFilter;
  addTask: (title: string, description?: string, priority?: Task["priority"]) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  
  setFilter: (filter: TaskFilter) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  filter: "all",
  addTask: (title, description, priority = "medium") =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: uuidv4(),
          title,
          description,
          status: "todo",
          priority,
          createdAt: Date.now(),
        },
      ],
    })),
  updateTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task,
      ),
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  setFilter: (filter) => set({ filter }),
}));
