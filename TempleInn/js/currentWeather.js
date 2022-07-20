// GET ELEMENTS
const mainWeather = document.querySelector('.main-weather');
const threeDays = document.querySelector('.three-daysW');
const firstDiv = document.querySelector('.firstDay');
const secondDiv = document.querySelector('.secondDay');
const thirdDiv = document.querySelector('.thirdDay');

// CREATE MAIN WEATHER ELEMENTS
const currentD = document.createElement('p');
const placeName = document.createElement('h2');
const currentT = document.createElement('p');
const descriptionP = document.createElement('p');
const img = document.createElement('img');
const humidity = document.createElement('p');

// CREATE THE DATE
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentDate = new Date();
const month = months[currentDate.getMonth()];
const day = currentDate.getDate();

// CREATE THREE DAYS WETAHER ELEMENTS
const firstDay = document.createElement('p');
const firstTemp = document.createElement('p');
const firstImg = document.createElement('img');

const secondDay = document.createElement('p');
const secondTemp = document.createElement('p');
const secondImg = document.createElement('img');

const thirdDay = document.createElement('p');
const thirdTemp = document.createElement('p');
const thirdImg = document.createElement('img');



const weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Bethesda,US&units=metric&appid=7ef37c61e45f8bf0e9e8fdca462fac21';

// GET THE WEATHER DATA
async function getWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}

getWeather()

function displayWeather(data) {

    const weatherDesc= data.list[0].weather[0].description;

    // DISPLAY DATA IN THE MAIN WEATHER

    currentD.setAttribute('id', 'currentDate')
    currentD.innerHTML = `${month} ${day}`;
    placeName.innerHTML = `${data.city.name}, ${data.city.country}`;
    currentT.setAttribute('id', 'currentT');
    currentT.innerHTML = `${data.list[0].main.temp.toFixed(1)} °C` ;
    img.setAttribute('src', `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`);
    img.setAttribute('alt', `${weatherDesc} icon`);
    

    // capitalize the first letter of each word
    const capDesc = weatherDesc.split(" ");
    for (let i = 0; i < capDesc.length; i++) {
        capDesc[i] = capDesc[i].charAt(0).toUpperCase() + capDesc[i].slice(1);
    }
    const capitalizeDesc = capDesc.join(" ");
    descriptionP.setAttribute('id', 'description');
    descriptionP.innerHTML = capitalizeDesc;

    humidity.setAttribute('id', 'humidity');
    humidity.innerHTML = `Humidity: ${data.list[0].main.humidity}%`;
     

    // display the elements
   
    mainWeather.append(placeName);
    mainWeather.append(currentD);
    mainWeather.append(currentT);
    mainWeather.append(img);
    mainWeather.append(humidity);
    mainWeather.append(descriptionP);
    mainWeather.append(humidity);


    // DISPLAY DATA IN THE TRHEE DAYS WEATHER

    // display the first day data
    const day1 = day + 1;

    firstDay.setAttribute('id', 'firstDay');
    firstDay.innerHTML = `${month} ${day1}`;

    firstTemp.setAttribute('id', 'firstTemp');
    firstTemp.innerHTML = `${data.list[3].main.temp.toFixed(1)} °C`;

    firstImg.setAttribute('src', `https://openweathermap.org/img/w/${data.list[3].weather[0].icon}.png`)
    firstImg.setAttribute('alt', `${data.list[3].weather[0].description} icon`)

    firstDiv.append(firstDay);
    firstDiv.append(firstTemp);
    firstDiv.append(firstImg);


    // display the second day data
    const day2 = day + 2;

    secondDay.setAttribute('id', 'secondDay');
    secondDay.innerHTML = `${month} ${day2}`;

    secondTemp.setAttribute('id', 'secondTemp');
    secondTemp.innerHTML = `${data.list[11].main.temp.toFixed(1)} °C`;

    secondImg.setAttribute('src', `https://openweathermap.org/img/w/${data.list[11].weather[0].icon}.png`)
    secondImg.setAttribute('alt', `${data.list[11].weather[0].description} icon`)

    secondDiv.append(secondDay);
    secondDiv.append(secondTemp);
    secondDiv.append(secondImg);


    // display third day data
    const day3 = day + 3;

    thirdDay.setAttribute('id', 'thirdDay');
    thirdDay.innerHTML = `${month} ${day3}`;

    thirdTemp.setAttribute('id', 'thirdTemp');
    thirdTemp.innerHTML = `${data.list[19].main.temp.toFixed(1)} °C`;

    thirdImg.setAttribute('src', `https://openweathermap.org/img/w/${data.list[19].weather[0].icon}.png`)
    thirdImg.setAttribute('alt', `${data.list[19].weather[0].description} icon`)

    thirdDiv.append(thirdDay);
    thirdDiv.append(thirdTemp);
    thirdDiv.append(thirdImg);

}
