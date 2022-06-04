let lastV = window.localStorage.getItem('last-visit-ls');
let currentV = new Date();
window.localStorage.setItem('last-visit-ls', currentV);

let sinceLastV = Math.round((currentV - new Date(lastV)) / (1000 * 60 * 60 * 24));
message = "Days since last visit: " + sinceLastV;
document.getElementById('last-visit').textContent = message;














// let lastVisited = window.localStorage.getItem("last-visited-date");
// let currentVisit = new Date();
// window.localStorage.setItem("last-visited-date", currentVisit);

// let lastVisitedMessage = "This is your first visit!";

// if (lastVisited) {
// let sinceLastVisit = Math.round((currentVisit - new Date(lastVisited)) / (1000 * 60 * 60 * 24));
// lastVisitedMessage = "Days since last visit: " + sinceLastVisit;
// 

// document.getElementById("last-visited").textContent = lastVisitedMessage;
