document.addEventListener("DOMContentLoaded", function () {
    const reviewKey = "reviewCount";
    let reviewCount = localStorage.getItem(reviewKey) || 0;
    reviewCount++;
    localStorage.setItem(reviewKey, reviewCount);

    const summary = document.getElementById("reviewSummary");
    const countMessage = document.createElement("p");
    countMessage.textContent = `You have completed ${reviewCount} review(s).`;
    summary.appendChild(countMessage);

    const params = new URLSearchParams(window.location.search);
    params.forEach((value, key) => {
        const item = document.createElement("li");
        item.textContent = `${key}: ${value}`;
        summary.appendChild(item);
    });

    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
});
