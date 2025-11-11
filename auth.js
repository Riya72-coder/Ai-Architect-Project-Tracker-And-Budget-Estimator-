document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  // === Registration ===
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const company = document.getElementById("company").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!name || !email || !password) {
        alert("Please fill all required fields!");
        return;
      }

      const user = { name, email, company, password };
      localStorage.setItem("user", JSON.stringify(user));
      alert("Registration Successful! Please login now.");
      window.location.href = "login.html";
    });
  }

  // === Login ===
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const loginEmail = document.getElementById("loginEmail").value.trim();
      const loginPassword = document.getElementById("loginPassword").value.trim();
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        alert("No user found! Please register first.");
        return;
      }

      if (storedUser.email === loginEmail && storedUser.password === loginPassword) {
        alert("Login Successful!");
        localStorage.setItem("loggedInUser", storedUser.name);
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid credentials. Try again!");
      }
    });
  }
});
