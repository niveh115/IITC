"use strict";

import { deleteTask, completeTask, getTasks } from "./todo-service.js";

document.addEventListener("DOMContentLoaded", () => {
  const listContainer = document.getElementById("taskList");
  renderTaskList(listContainer);
});

function renderTaskList(container) {
  const tasks = getTasks();
  container.innerHTML = "";
  // run through our tasks array and for each task we create a list item that contains the details we want from our form + complete and delete buttons
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task-item";
    li.id = task.id;

    const p = document.createElement("p");
    const link = document.createElement("a");
    link.href = `detail.html?id=${task.id}`;
    link.textContent = task.name;
    p.appendChild(link);

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
      completeTask(task.id); // we use our completeTask button to change isCompleted from true to false and vice versa
      renderTaskList(container);
    });

    deleteBtn.addEventListener("click", () => {
      deleteTask(task.id); // we use our deleteTask function to remove the task from our tasks
      renderTaskList(container);
    });

    li.appendChild(p);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    container.appendChild(li);
  });
}

export { renderTaskList };
