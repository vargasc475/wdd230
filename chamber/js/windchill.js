// GET ELEMENTS
const temperature = parseFloat(document.getElementById('temperature').innerText);
const windSpeed = parseFloat(document.getElementById('wind-speed').innerText);
const windC = document.getElementById('weather-N');

// CONVERT CELSIUS TO FARENHEIT
const f = (temperature * 1.8) + 32;

// CONVERT KM/H TO MPH
const mph = windSpeed / 1.609;

// DISPLAY WIND CHILL OR N/A IN THE SCREEN
if (f < 51 && mph > 3) {
    let windChill = 35.74 + 0.6215 * f - 35.75 * mph**0.16 + 0.4275 * f * mph**0.16;
    windC.innerText = windChill.toFixed(2);
} else {
    windC.innerText = "N/A";
}


console.log(f);
console.log(windSpeed);


