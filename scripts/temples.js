document.addEventListener("DOMContentLoaded", () => {
    const navMenu = document.querySelector(".nav-menu");
    const hamburgerBtn = document.createElement("button");
    hamburgerBtn.classList.add("hamburger-btn");
    hamburgerBtn.innerHTML = "☰"; // Hamburger icon
  
    // Append the hamburger button to the header
    const header = document.querySelector("header");
    if (header) {
      header.appendChild(hamburgerBtn);
    }
  
    // Toggle menu visibility on click
    hamburgerBtn.addEventListener("click", () => {
      navMenu.classList.toggle("visible");
      hamburgerBtn.innerHTML = navMenu.classList.contains("visible") ? "✖" : "☰"; // Toggle icon
    });
  
    // Ensure the menu resets visibility on window resize
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        navMenu.classList.add("visible"); // Always visible on larger screens
        hamburgerBtn.style.display = "none"; // Hide hamburger button
      } else {
        navMenu.classList.remove("visible"); // Hidden by default in mobile view
        hamburgerBtn.style.display = "block"; // Show hamburger button
      }
    });
  
    // Trigger resize event on page load to set the initial state
    window.dispatchEvent(new Event("resize"));
  });
  