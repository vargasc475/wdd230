let lastV = window.localStorage.getItem('last-visit-ls');
let currentV = new Date();
window.localStorage.setItem('last-visit-ls', currentV);

let sinceLastV = Math.round((currentV - new Date(lastV)) / (1000 * 60 * 60 * 24));
message = "Days since last visit: " + sinceLastV;
document.getElementById('last-visit').textContent = message;
