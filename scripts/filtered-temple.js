document.addEventListener("DOMContentLoaded", () => {
  const templeGallery = document.getElementById("templeGallery");
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

  const temples = [
      {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl:
              "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
      },
      {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl:
              "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl:
              "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
      {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },
      {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },
      {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 72000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-48141.jpg"
    },
    {
        templeName: "Cebu City Philippines",
        location: "Cebu City, Philippines",
        dedicated: "2010, June, 13",
        area: 29786,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/cebu-city-philippines-temple/cebu-city-philippines-temple-33251.jpg"
    },
    {
        templeName: "Frankfurt Germany",
        location: "Frankfurt, Germany",
        dedicated: "1987, August, 28",
        area: 21736,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-6612.jpg"
    }
  ];

  function renderTemples(filteredTemples) {
      templeGallery.innerHTML = "";
      filteredTemples.forEach(temple => {
          const figure = document.createElement("figure");
          figure.innerHTML = `
              <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
              <figcaption>
                  <h3>${temple.templeName}</h3>
                  <p><strong>Location:</strong> ${temple.location}</p>
                  <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                  <p><strong>Area:</strong> ${temple.area} sq ft</p>
              </figcaption>
          `;
          templeGallery.appendChild(figure);
      });
  }

  function filterTemples(criteria) {
      let filtered;
      switch(criteria) {
          case "Old":
              filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
              break;
          case "New":
              filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
              break;
          case "Large":
              filtered = temples.filter(t => t.area > 90000);
              break;
          case "Small":
              filtered = temples.filter(t => t.area < 10000);
              break;
          default:
              filtered = temples;
      }
      renderTemples(filtered);
  }

  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach(link => {
      link.addEventListener("click", (event) => {
          event.preventDefault();
          filterTemples(event.target.textContent);
      });
  });

  renderTemples(temples);

  const currentYear = document.querySelector("#currentYear");
  const lastModified = document.querySelector("#lastModified");
  currentYear.textContent = new Date().getFullYear();
  lastModified.textContent = `Last Modification: ${document.lastModified}`;
});
