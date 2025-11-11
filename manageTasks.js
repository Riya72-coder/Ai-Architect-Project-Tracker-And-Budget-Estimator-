// 🧾 Manage Tasks Page Script

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("taskTableBody");
    const logoutBtn = document.getElementById("logoutBtn");
    
    // Load user check
    const user = localStorage.getItem("loggedInUser");
    if (!user) {
    window.location.href = "login.html";
    return;
    }
    
    // Logout Function
    logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
    });
    
    // Load tasks
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    renderTasks();
    
    function renderTasks() {
    tableBody.innerHTML = "";
    if (tasks.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center;opacity:0.7;">No tasks found</td></tr>`;
    return;
    }
    
    
    tasks.forEach((task, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${task.name || "—"}</td>
        <td>${task.description || "—"}</td>
        <td>₹${task.cost || 0}</td>
        <td>${task.status || "Pending"}</td>
        <td>
          <button class="action-btn edit-btn" onclick="editTask(${index})">Edit</button>
          <button class="action-btn delete-btn" onclick="deleteTask(${index})">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
    
    
    }
    
    // Delete function
    window.deleteTask = (index) => {
    if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
    }
    };
    
    // Edit placeholder (optional)
    window.editTask = (index) => {
    const task = tasks[index];
    alert(`Edit feature coming soon!\n\nTask: ${task.name}`);
    };
    });
    