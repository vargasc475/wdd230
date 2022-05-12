// GET ELEMENTS
const headerDate = document.querySelector('.header-date');
const copy = document.querySelector('.copy');
const studentName = document.querySelector('.name');
const project = document.querySelector('.project');
const last = document.querySelector('.last-updated');
const subfooter = document.querySelector('.subfooter');
const nav = document.getElementById('nav');
const hamButton = document.getElementById('hamburguerBtn');

// GET CURRENT DATE
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const date = new Date();
let day = days[date.getDay()];
let month = months[date.getMonth()];
let numberDay = date.getDay();
let year = date.getFullYear();
let lastUpdated = document.lastModified;

// DISPLAY THE CURRENT DATE
headerDate.innerHTML = `${day}, ${numberDay} ${month} ${year}`;

copy.innerHTML = `&copy ${year} The Garden Chamber`;
studentName.innerHTML = `<strong>Christian Vargas</strong>`;
project.innerHTML = `WDD 230 Project`;
last.innerHTML = `Last Modified: ${lastUpdated}`;
subfooter.innerHTML = `&copy ${year} The Garde Chamber | <strong>Christian Vargas</strong> | WDD 230 Project | Last Modified: ${lastUpdated}`;

function toggleMenu() {
    nav.classList.toggle('open');
    hamButton.classList.toggle('open');
}

hamButton.onclick = toggleMenu;