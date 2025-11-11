document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("loggedInUser");
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const logoutBtn = document.getElementById("logoutBtn");
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
  });

  const editTaskForm = document.getElementById("editTaskForm");
  const taskIndex = localStorage.getItem("editTaskIndex");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (taskIndex === null || !tasks[taskIndex]) {
    alert("No task selected for editing.");
    window.location.href = "manageTasks.html";
    return;
  }

  const task = tasks[taskIndex];

  // Populate the form with the existing task data
  document.getElementById("taskName").value = task.name;
  document.getElementById("deadline").value = task.deadline || "";
  document.getElementById("status").value = task.status;
  document.getElementById("priority").value = task.priority;

  editTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Update the task object with new values from the form
    tasks[taskIndex].name = document.getElementById("taskName").value;
    tasks[taskIndex].deadline = document.getElementById("deadline").value;
    tasks[taskIndex].status = document.getElementById("status").value;
    tasks[taskIndex].priority = document.getElementById("priority").value;

    // Save the updated tasks array back to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Clean up localStorage
    localStorage.removeItem("editTaskIndex");

    alert("✅ Task updated successfully!");
    window.location.href = "manageTasks.html"; // Redirect back to the manage tasks page
  });
});