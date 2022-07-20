// GET ELEMENTS 
const templeInf = document.querySelector('.placeholder-temple-information');
const url = 'data/listTemple.json';

// CREATE ELEMENTS 

const h2 = document.createElement('h2');
const pictureImg = document.createElement('picture');
const sourceLarge = document.createElement('source');
const sourceMedium = document.createElement('source');
const templeImgHome = document.createElement('img');
const summary = document.createElement('p');


// GET THE TEMPLE LIST 
async function getData() {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        displayTemples(data);
    } else {
        throw Error(response.statusText)
    }
}

getData()

// DISPLAY TEMPLE
function displayTemples(data) {
    let temple = data.temples[1];

    h2.innerHTML = temple.name;

    sourceLarge.setAttribute('media', '(min-width: 1000px)');
    sourceLarge.setAttribute('srcset', 'images/large/caracas-temple-large.jpg');
    sourceMedium.setAttribute('media', '(min-width: 700px) and (max-width: 900px)');
    sourceMedium.setAttribute('srcset', 'images/large/caracas-temple-medium.jpg');
    templeImgHome.setAttribute('id', 'templeImage')
    templeImgHome.setAttribute('src', `${temple.image}`);
    templeImgHome.setAttribute('alt', `${temple.name}`);
    pictureImg.append(sourceLarge);
    pictureImg.append(sourceMedium);
    pictureImg.append(templeImgHome);

    summary.innerHTML = temple.summary;
    
    templeInf.appendChild(h2);
    templeInf.appendChild(pictureImg);
    templeInf.appendChild(summary);

}




