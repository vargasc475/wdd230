const url = "data/data.json";
const directoryCards = document.querySelector('.directory_cards');

async function getData() {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        // console.log(data)
        buildDirectoryCards(data);
    } else {
        throw Error(response.statusText)
    }
}



function buildDirectoryCards(data) {
    data.companies.forEach(companie => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let addres = document.createElement('p');
        let phone = document.createElement('p');
        let link = document.createElement('a');
        let level = document.createElement('p');
        let img = document.createElement('img');

        h2.innerHTML = companie.name;
        addres.innerHTML = companie.addres;
        phone.innerHTML = companie.phoneNumber;
        link.setAttribute('href', companie.url);
        link.setAttribute('target', '_blank')
        link.innerHTML = "Website";
        img.setAttribute('src', companie.image);
        img.setAttribute('alt', `${companie.name} logo`);
        level.innerHTML = companie.level;
        // console.log(h2)
        card.append(h2);
        card.appendChild(addres);
        card.appendChild(phone);
        card.appendChild(link);
        card.append(img);
        card.appendChild(level);
        directoryCards.append(card);
    });
}

getData()