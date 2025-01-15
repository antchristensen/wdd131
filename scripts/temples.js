// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Footer: Update copyright year
    const currentYear = document.getElementById("currentYear");
    if (currentYear) {
      currentYear.textContent = new Date().getFullYear();
    }
  
    // Footer: Update last modified date
    const lastModified = document.getElementById("lastModified");
    if (lastModified) {
      lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }
  
    // Hamburger Menu Functionality
    const navMenu = document.querySelector(".nav-menu");
    const hamburgerBtn = document.createElement("button");
    hamburgerBtn.classList.add("hamburger-btn");
    hamburgerBtn.innerHTML = "☰"; // Hamburger icon
  
    // Add the hamburger button to the header
    const header = document.querySelector("header");
    if (header) {
      header.appendChild(hamburgerBtn);
    }
  
    // Toggle menu visibility on click
    hamburgerBtn.addEventListener("click", () => {
      const isMenuVisible = navMenu.classList.toggle("visible");
      hamburgerBtn.innerHTML = isMenuVisible ? "✖" : "☰"; // Toggle between hamburger and close icon
    });
  });
  