// Get current date
const today = new Date();

// Get elements for current year and last modification date
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

// Display the current year and last modification date
currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

// Define temperature and wind speed for wind chill calculation
const temperatureC = 10; // Example temperature in °C
const windSpeedKmH = 6;  // Example wind speed in km/h

/**
 * Calculate the wind chill factor using the metric formula.
 * @param {number} temp - The temperature in °C.
 * @param {number} windSpeed - The wind speed in km/h.
 * @returns {number} - The calculated wind chill factor.
 */
const calculateWindChill = (temp, windSpeed) => 
    13.12 + 0.6215 * temp - 11.37 * windSpeed ** 0.16 + 0.3965 * temp * windSpeed ** 0.16;

// Display wind chill if conditions are met
if (temperatureC <= 10 && windSpeedKmH > 4.8) {
    const windChillOutput = `${calculateWindChill(temperatureC, windSpeedKmH).toFixed(2)} °C`;
    document.querySelector(".weather-section ol").insertAdjacentHTML(
        "beforeend",
        `<li>Wind Chill: ${windChillOutput}</li>`
    );
}
