document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  // Check if the login form exists on the page before adding a listener
  if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();

        if (!email || !password) {
            alert('Please fill in both fields');
            return;
        }

        // Store login info
        localStorage.setItem('lastLogin', email);

        // Demo login effect
        const card = document.querySelector('.login-card');
        if (card) {
            card.style.boxShadow = '0 0 25px rgba(0,255,255,0.5)';
        }

        alert(`Welcome back, ${email}!`);
        
        // Redirect to the projects page
        window.location.href = 'projects.html';
    });
  }
  });
