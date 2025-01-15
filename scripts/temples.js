// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
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
  
    // Ensure the menu resets visibility on window resize
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        navMenu.classList.remove("visible");
        hamburgerBtn.innerHTML = "☰";
      }
    });
  });
  