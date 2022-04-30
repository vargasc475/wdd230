// GET FOOTER ELEMENT
const footer = document.getElementById('footer');

// GET CURRENT YEAR AND LAST UPDATED
let currentDate = new Date();

let currentYear = currentDate.getFullYear();
let lastModified = document.lastModified;

// CREATE ELEMENT
let paragraph = document.createElement('p');
paragraph.innerHTML = `&copy ${currentYear} | Christian D. Vargas | Last Updated: ${lastModified}`;
footer.appendChild(paragraph);
