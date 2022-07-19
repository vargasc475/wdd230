// GET ELEMENTS
const nav = document.querySelector('#nav');
const hamButton = document.querySelector('#hamburguerBtn');
const lastM = document.querySelector('.lastModified');
const lastM2 = document.querySelector('.lastModified2');

// FUNCTION TO DISPLAY THE NAV
function toggleMenu() {
    nav.classList.toggle('open');
    hamButton.classList.toggle('open');
}

hamButton.onclick = toggleMenu;

// GET  AND DISPLAY "LAST MODIFIED"
const date = new Date();
const lastUpdated = document.lastModified;

const copy = document.createElement('p');
const project = document.createElement('p');
const last = document.createElement('p');
const author = document.createElement('p');
const completeSentence = document.createElement('p');

copy.innerHTML = `&copy ${date.getFullYear()} Temple Inn & Suits`;
project.innerHTML = "WDD 230 Final Project";
author.innerHTML = `<strong>Christian Vargas</strong>`;
last.innerHTML = `Last Modified: ${lastUpdated}`;

completeSentence.innerHTML = `&copy ${date.getFullYear()} Temple Inn & Suits | WDD 230 Final Project | <strong>Christian Vargas</strong> | Last Modified: ${lastUpdated}`;


lastM.appendChild(copy);
lastM.appendChild(project);
lastM.appendChild(author);
lastM.appendChild(last);

lastM2.appendChild(completeSentence);

// DISPLAY TEMPLE QUOTES

const quoteUrl = 'data/templeQuotes.json';

async function quoteFetch() {
    let response = await fetch(quoteUrl);
    if (response.ok) {
        let data = await response.json()
        displayQuote(data);
    } else {
        throw Error(response.statusText0)
    }
}

quoteFetch()

let randomNumber = Math.floor(Math.random() * 5);

// get element and create elements
const quoteDiv = document.querySelector('.quote');
const h1 = document.createElement('h1');
const p = document.createElement('p');

function displayQuote(data) {
    h1.innerHTML = `"${data.quotes[randomNumber].quote}"`;
    p.innerHTML = `<strong>${data.quotes[randomNumber].name}</strong>`;

    quoteDiv.append(h1);
    quoteDiv.append(p);

}