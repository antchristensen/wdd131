// Set the current year in the first paragraph
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set the last modified date in the second paragraph
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
