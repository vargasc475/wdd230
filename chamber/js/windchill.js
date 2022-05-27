// GET ELEMENTS
const temperature = document.querySelector('#weather-p');
const spanT = temperature.getElementsByTagName('span');
const windSpeed = document.getElementById('weather-km');
const spanW = windSpeed.getElementsByTagName('span');
const windC = document.getElementById('weather-N');

for (const s of spanT) {
    const number = s.innerHTML;
    let F = (number * 1.8) + 32;
    console.log(parseFloat(F));
}

for (const T of spanW) {
    const number = T.innerHTML;
    let MilePH = number / 1.609;
    console.log(parseFloat(MilePH))
}

const windChill = 35.74 + 0.6215 * 44.6 - 35.75 * 3.3**0.16 + 0.4275 * 44.6 * 3.3**0.16;
windC.innerText = windChill.toFixed(2);

