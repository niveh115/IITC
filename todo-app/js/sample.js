"use strict";

import {
  deleteTask,
  completeTask,
  createTask,
  getTasks,
} from "./todo-service.js";

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  document
    .getElementById("createTaskForm")
    .addEventListener("submit", onCreateTask);

  renderTaskList();
}

function onCreateTask(ev) {
  ev.preventDefault();

  const inputEl = document.getElementById("taskInput");
  const taskText = inputEl.value.trim();

  if (!taskText) return;

  const taskField = {
    name: taskText,
    isCompleted: false,
  };

  createTask(taskField);
  inputEl.value = "";
  renderTaskList();
}

export function renderTaskList() {
  const list = document.getElementById("taskList");
  const tasks = getTasks();

  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task-item";
    li.id = task.id;

    const p = document.createElement("p");
    p.textContent = task.name;

    const completeBtn = document.createElement("button");
    completeBtn.className = "completed btn btn-primary";
    completeBtn.dataset.id = task.id;
    completeBtn.textContent = task.isCompleted ? "🔄️" : "✅";
    if (task.isCompleted) li.classList.add("completed");

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete btn btn-delete";
    deleteBtn.dataset.id = task.id;
    deleteBtn.textContent = "❌";

    completeBtn.addEventListener("click", () => {
      completeTask(task.id); // toggle task completion in your data
      renderTaskList(); // re-render list
    });

    deleteBtn.addEventListener("click", () => {
      deleteTask(task.id); // you need to implement this
      renderTaskList(); // re-render list
    });

    li.appendChild(p);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}
