// GET FOOTER ELEMENTS
const footerText1 = document.querySelector("#footerText1");
const footerText2 = document.getElementById("footerText2");

// GET CURRENT DATE
const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDay = currentDate.getDay();
let lastModified = document.lastModified;

// DISPLAY TEXT
footerText1.innerHTML = `&copy ${currentYear} .:|:. Christian D. Vargas .:|:. Utah`;
footerText2.innerHTML = `Last Updated: ${lastModified}`
