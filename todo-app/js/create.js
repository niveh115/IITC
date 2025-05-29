"use strict";
import { createTask } from "./todo-service.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("createTaskForm");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const input = document.getElementById("taskInput"); // we get the input
    const text = input.value.trim(); // then we extract the value from the input and trim white spaces.
    const startDate = document.getElementById("startDateInput").value; // we extract the start date value.
    const deadline = document.getElementById("deadlineInput").value; // we extract the deadline / end date of the task

    if (!text || !startDate || !deadline) return; // here we check if there are no values then return.

    // we build an object containing our values for each task.
    createTask({
      name: text,
      startDate,
      deadline,
      isCompleted: false,
    });
    input.value = ""; // make sure to reset the input after each task creation.

    // Redirect to list page
    window.location.href = "index.html"; // once we press the create button it redirects us to the tasks list to view our tasks.
  });
});
