const url1 = "data/data.json";
// const directoryCards = document.querySelector('.directory_cards');


// -------- WORKING WITH SPOTLIGHTS ---------
// get the SPOT1 elements
const spot1H2 = document.querySelector('#spot1-h2');
const spot1Img = document.querySelector('#spot1-img');
const spot1P = document.querySelector('#spot1-p');
const spot1Email = document.querySelector('#spot1-email');
const spot1Number = document.querySelector('#spot1-number');

// get the SPOT2 elements
const spot2H2 = document.querySelector('#spot2-h2');
const spot2Img = document.querySelector('#spot2-img');
const spot2P = document.querySelector('#spot2-p');
const spot2Email = document.querySelector('#spot2-email');
const spot2Number = document.querySelector('#spot2-number');

// get the SPOT3 elements
const spot3H2 = document.querySelector('#spot3-h2');
const spot3Img = document.querySelector('#spot3-img');
const spot3P = document.querySelector('#spot3-p');
const spot3Email = document.querySelector('#spot3-email');
const spot3Number = document.querySelector('#spot3-number');

async function getData() {
    let response = await fetch(url1);
    if (response.ok) {
        let data = await response.json();
        console.log(data)
        displayAdvertising(data);
    } else {
        throw Error(response.statusText)
    }
}

getData()

let randomNumber1 = Math.floor((Math.random() * 7) + 1);
let randomNumber2 = Math.floor((Math.random() * 7) + 1);
let randomNumber3 = Math.floor((Math.random() * 7) + 1);

function displayAdvertising(data) {
    let companie1 = data.companies[randomNumber1];
    let companie2 = data.companies[randomNumber2];
    let companie3 = data.companies[randomNumber3];
    // spotlight 1
    spot1H2.innerHTML = companie1.name;
    spot1Img.setAttribute('src', companie1.image);
    spot1Img.setAttribute('alt', `${companie1.name} logo`);
    spot1P.innerHTML = `<em>${companie1.comment}</em>`;
    spot1Email.innerHTML = companie1.email;
    spot1Number.innerHTML = `${companie1.phoneNumber} | <a href="https//:${companie1.url}" target:"_blank>Website</a>`;

    // spotlight 2
    spot2H2.innerHTML = companie2.name;
    spot2Img.setAttribute('src', companie2.image);
    spot2Img.setAttribute('alt', `${companie2.name} logo`);
    spot2P.innerHTML = `<em>${companie2.comment}</em>`;
    spot2Email.innerHTML = companie2.email;
    spot2Number.innerHTML = `${companie2.phoneNumber} | <a href="https//:${companie2.url}" target:"_blank>Website</a>`;

    // spotlight 3
    spot3H2.innerHTML = companie3.name;
    spot3Img.setAttribute('src', companie3.image);
    spot3Img.setAttribute('alt', `${companie3.name} logo`);
    spot3P.innerHTML = `<em>${companie3.comment}</em>`;
    spot3Email.innerHTML = companie3.email;
    spot3Number.innerHTML = `${companie3.phoneNumber} | <a href="https//:${companie3.url}" target:"_blank>Website</a>`;
}
