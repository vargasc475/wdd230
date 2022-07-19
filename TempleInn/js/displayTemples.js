// GET ELEMENTS 
const templeInf = document.querySelector('.placeholder-temple-information');
const url = 'data/listTemple.json';

// CREATE ELEMENTS 

const h2 = document.createElement('h2');
const templeImgHome = document.createElement('img');
const summary = document.createElement('p');


// GET THE TEMPLE LIST 
async function getData() {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        console.log(data);
        displayTemples(data);
        // templeCards(data);
    } else {
        throw Error(response.statusText)
    }
}

getData()

// DISPLAY TEMPLE
function displayTemples(data) {
    let temple = data.temples[0];

    h2.innerHTML = temple.name;

    templeImgHome.setAttribute('id', 'templeImage')
    templeImgHome.setAttribute('src', `${temple.image}`);
    templeImgHome.setAttribute('alt', `${temple.name}`);

    summary.innerHTML = temple.summary;
    
    templeInf.appendChild(h2);
    templeInf.appendChild(templeImgHome);
    templeInf.appendChild(summary);

}




