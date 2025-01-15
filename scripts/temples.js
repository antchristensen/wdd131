document.addEventListener("DOMContentLoaded", () => {
    const navMenu = document.querySelector(".nav-menu");
    const hamburgerBtn = document.createElement("button");
    hamburgerBtn.classList.add("hamburger-btn");
    hamburgerBtn.innerHTML = "☰"; 
  
    const header = document.querySelector("header");
    if (header) {
      header.appendChild(hamburgerBtn);
    }
  
    hamburgerBtn.addEventListener("click", () => {
      navMenu.classList.toggle("visible");
      hamburgerBtn.innerHTML = navMenu.classList.contains("visible") ? "✖" : "☰"; 
    });
  
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        navMenu.classList.add("visible"); 
        hamburgerBtn.style.display = "none"; 
      } else {
        navMenu.classList.remove("visible"); 
        hamburgerBtn.style.display = "block"; 
      }
    });
  
    window.dispatchEvent(new Event("resize"));
  });
  