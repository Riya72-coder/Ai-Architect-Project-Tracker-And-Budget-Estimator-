document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value.trim();
  
      if (!email || !password) {
        alert('Please fill in both fields');
        return;
      }
  
      // simple demo logic
      localStorage.setItem('lastLogin', email);
      alert(`Welcome back, ${email}!`);
      form.reset();
  
      // Optional redirect
      // window.location.href = 'dashboard.html';
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value.trim();
  
      if (!email || !password) {
        alert('Please fill in both fields');
        return;
      }
  
      // demo login effect
      const card = document.querySelector('.login-card');
      card.style.boxShadow = '0 0 25px rgba(0,255,255,0.5)';
      setTimeout(() => (card.style.boxShadow = '0 0 25px rgba(0,255,255,0.1)'), 600);
  
      alert(`Welcome back, ${email}!`);
      form.reset();
    });
  });
  
