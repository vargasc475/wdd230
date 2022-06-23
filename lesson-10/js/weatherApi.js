// select HTML elements in the document
const section = document.createElement('section');
const p = document.createElement('p');
const h2 = document.createElement('h2');
const figure = document.createElement('figure');
const img = document.createElement('img');
const figcaption = document.createElement('figcaption');
const body = document.querySelector('body');


const url =  'http://api.openweathermap.org/data/2.5/forecast?q=Fairbanks&units=imperial&appid=7ef37c61e45f8bf0e9e8fdca462fac21';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        
        const list = data['list'];
        console.log(list); // this is for testing the call
        // list.forEach(displayResults);
        displayResults(list[0]);
        displayResults(list[5]);
        displayResults(list[10]);
        displayResults(list[20]);

        // displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

function  displayResults(weatherData) {

    // select HTML elements in the document
  const section = document.createElement('section');
  const p = document.createElement('p');
  const h2 = document.createElement('h2');
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  const figcaption = document.createElement('figcaption');
  const body = document.querySelector('.grid');
    p.innerHTML = `The current temperature in Fairbanks, Alaska is <strong>${weatherData.main.temp.toFixed(0)}</strong>&deg;F`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    h2.innerHTML = 'Current Condition Icon';
  
    img.setAttribute('src', iconsrc);
    img.setAttribute('alt', desc);

    const arr = desc.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    
    const str2 = arr.join(" ");
    figcaption.textContent = str2;
    section.append(p);
    section.append(h2);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    section.append(figure);
    body.append(section);
};