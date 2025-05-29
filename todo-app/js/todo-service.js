import { makeId } from "../modules-crud/js/utils.js";
import { loadFromStorage, saveToStorage } from "./storage.service.js";

const STORAGE_KEY = "tasks";
let tasks = loadFromStorage(STORAGE_KEY) || [];

export function createTask(fields) {
  const taskToAdd = { ...fields, id: makeId() };
  tasks.push(taskToAdd);
  saveToStorage(STORAGE_KEY, tasks);
}

export function getTasks() {
  return tasks;
}

export function completeTask(taskId) {
  tasks.forEach((task) => {
    if (task.id === taskId) {
      task.isCompleted = !task.isCompleted;
    }
  });
  saveToStorage(STORAGE_KEY, tasks);
  // NO renderTaskList() call here
}

export function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveToStorage(STORAGE_KEY, tasks);
}
