document.addEventListener("DOMContentLoaded", function ()  {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav ul");
  
    // Hamburger menu functionality
    
  hamburger.addEventListener('click',function () 
  {
    navMenu.classList.toggle('active');
    

    
    
      
    });
  });


  document.addEventListener("DOMContentLoaded", (event) => {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
  
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
  });