document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("msgStatus");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const message = document.getElementById("contactMessage").value.trim();
  
      if (!name || !email || !message) {
        status.textContent = "⚠️ Please fill all fields!";
        status.style.color = "orange";
        return;
      }
  
      // Save message locally (you can replace this with backend integration)
      const messages = JSON.parse(localStorage.getItem("messages")) || [];
      messages.push({ name, email, message, time: new Date().toLocaleString() });
      localStorage.setItem("messages", JSON.stringify(messages));
  
      // Show success message
      status.textContent = `✅ Thank you, ${name}! Your message has been sent successfully.`;
      status.style.color = "lightgreen";
  
      // Reset form
      form.reset();
    });
  });
  