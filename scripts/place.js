const today = new Date();

const currentYear = document.querySelector("#currentYear")
const lastModified = document.querySelector("#lastModified")


const fullYear = today.getFullYear()

const lastModification = document.lastModified

currentYear.textContent = fullYear
lastModified.textContent = `Last Modification: ${lastModification}`


const temperatureC = 10; // Static temperature in °C
const windSpeedKmH = 6; // Static wind speed in km/h

/**
 * Calculate the wind chill factor using the metric formula.
 * @param {number} temp - The temperature in °C.
 * @param {number} windSpeed - The wind speed in km/h.
 * @returns {number} - The calculated wind chill factor.
 */
function calculateWindChill(temp, windSpeed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16)
    );
}

/**
 * Display the wind chill or "N/A" if conditions are not met.
 * @param {number} temp - The temperature in °C.
 * @param {number} windSpeed - The wind speed in km/h.
 * @returns {string} - Wind chill as a formatted string or "N/A".
 */
function displayWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) { // Conditions for valid wind chill calculation
        const windChill = calculateWindChill(temp, windSpeed);
        return `${windChill.toFixed(2)} °C`; 
    } else {
        return "N/A";
    }
}

// Perform the calculation
const windChillOutput = displayWindChill(temperatureC, windSpeedKmH);

// Update the weather section in the HTML
const weatherSection = document.querySelector(".weather-section ol");
if (weatherSection) {
    weatherSection.insertAdjacentHTML(
        "beforeend",
        `<li>Wind Chill: ${windChillOutput}</li>`
    );
} else {
    console.error("Weather section not found in the DOM.");
}
