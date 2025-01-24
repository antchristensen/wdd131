
const today = new Date();


const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");


currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;


const temperatureC = 10; 
const windSpeedKmH = 6;  

/**
 * Calculate the wind chill factor using the metric formula.
 * @param {number} temp - The temperature in °C.
 * @param {number} windSpeed - The wind speed in km/h.
 * @returns {number} - The calculated wind chill factor.
 */
const calculateWindChill = (temp, windSpeed) => 
    13.12 + 0.6215 * temp - 11.37 * windSpeed ** 0.16 + 0.3965 * temp * windSpeed ** 0.16;


if (temperatureC <= 10 && windSpeedKmH > 4.8) {
    const windChillOutput = `${calculateWindChill(temperatureC, windSpeedKmH).toFixed(2)} °C`;
    document.querySelector(".weather-section ol").insertAdjacentHTML(
        "beforeend",
        `<li>Wind Chill: ${windChillOutput}</li>`
    );
}
