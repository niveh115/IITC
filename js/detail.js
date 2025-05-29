"use strict";
import { getTasks } from "./todo-service.js";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search); // Collecting the ?= part of the url
  const taskId = urlParams.get("id"); // using the key word of id we set in list.js we get the value that is the ID of our task.

  const task = getTasks().find((task) => task.id === taskId); // we call on our tasks array to check if any of our tasks id matches the id we got from the url.

  const container = document.getElementById("taskDetails");

  if (!task) {
    // if we don't have that task we return a task not found message.
    container.innerHTML = "<p>Task not found.</p>";
    return;
  }

  const deadline = new Date(task.deadline); // here we define a new date using the Date class and we insert our deadline input
  const today = new Date(); // using the Date class we get the date of today.
  const daysLeft = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24)); // using a formula from chatGPT to calculate the days left to finish the task

  container.innerHTML = ` 
    <h2>${task.name}</h2>
    <p class="detail-text">Start Date: ${task.startDate}</p>
    <p class="detail-text">Deadline: ${task.deadline}</p>
    <p class="detail-text">Days Left: ${daysLeft}</p>
    <p class="detail-text">Status: ${
      task.isCompleted ? "Completed ✅" : "Incomplete ❌"
    }</p>
  `;
});
