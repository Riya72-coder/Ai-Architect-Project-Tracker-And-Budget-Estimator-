document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("estimateForm");
    const result = document.getElementById("result");
    
    if (form) {
    form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    
      const projectType = document.getElementById("projectType").value;
      const projectArea = parseInt(document.getElementById("squareFootage").value);
    
      if (!projectType || !projectArea || projectArea <= 0) {
        result.innerHTML = "⚠️ Please enter a valid project type and area.";
        return;
      }
    
      // AI-like cost estimation logic for architecture
      let costPerSqFt = 0;
      switch (projectType) {
        case "Residential":
          costPerSqFt = 1800; // Cost per sq. ft. for residential
          break;
        case "Commercial":
          costPerSqFt = 2500; // Higher for commercial spaces
          break;
        default:
          costPerSqFt = 1500;
      }
    
      // Small random variation for realistic feel
      const variation = 0.9 + Math.random() * 0.3;
      const totalCost = Math.round(costPerSqFt * projectArea * variation);

      result.innerHTML = `
        Estimated Cost: <b>₹${(totalCost).toLocaleString()}</b>
      `;
    });
   }
    });
    