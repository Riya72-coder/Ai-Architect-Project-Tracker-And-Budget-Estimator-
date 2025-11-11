document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    
    // === Save New Task ===
    if (taskForm) {
    taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    
      const name = document.getElementById("taskName").value.trim();
      const desc = document.getElementById("taskDesc").value.trim();
      const cost = document.getElementById("taskCost").value.trim();
      const status = document.getElementById("taskStatus").value;
    
      if (!name || !cost) {
        alert("Please enter all required fields!");
        return;
      }
    
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const newTask = {
        id: Date.now(),
        name,
        desc,
        cost: parseFloat(cost),
        status,
      };
    
      tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    
      alert("Task added successfully!");
      window.location.href = "manageTasks.html"; // Redirect to manage tasks page
    });
   
    
    }
    });
    