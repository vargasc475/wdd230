const url = 'data/listTemple.json';

async function getData() {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        console.log(data);
        // displayTemples(data);
        templeCards(data);
    } else {
        throw Error(response.statusText)
    }
}

getData()

// GET DIV FOR TEMPLE CARDS
const divCards = document.querySelector('.temple-cards');
const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
const card4 = document.querySelector('#card4');

// CREATE ELEMENTS FOR SECTION CARD 1
const cardSection1 = document.createElement('section');
const cardT1 = document.createElement('h2');
const addresT1 = document.createElement('h3');
const addres1 = document.createElement('p');
const telephoneT1 = document.createElement('h3');
const telephone1 = document.createElement('p');
const emailT1 = document.createElement('h3');
const email1 = document.createElement('p');
const servicesT1 = document.createElement('h3');
const servicesList1 = document.createElement('ul'); 
const history1 = document.createElement('h3');
const announced1 = document.createElement('p');
const groundbreaking1 = document.createElement('p');
const dedicated1 = document.createElement('p');
const ordinanceT1 = document.createElement('h3');
const ordinance1 = document.createElement('p');
const sessionT1 = document.createElement('h3');
const session1 = document.createElement('p');
const closureT1 = document.createElement('h3');
const closureList1 = document.createElement('ul');
const cardImg1 = document.createElement('img');
const imgBtn1 = document.createElement('button');
const button1 = document.createElement('img');

// CREATE ELEMENTS FOR SECTION CARD 2
const cardSection2 = document.createElement('section');
const cardT2 = document.createElement('h2');
const addresT2 = document.createElement('h3');
const addres2 = document.createElement('p');
const telephoneT2 = document.createElement('h3');
const telephone2 = document.createElement('p');
const emailT2 = document.createElement('h3');
const email2 = document.createElement('p');
const servicesT2 = document.createElement('h3');
const servicesList2 = document.createElement('ul'); 
const history2 = document.createElement('h3');
const announced2 = document.createElement('p');
const groundbreaking2 = document.createElement('p');
const dedicated2 = document.createElement('p');
const ordinanceT2 = document.createElement('h3');
const ordinance2 = document.createElement('p');
const sessionT2 = document.createElement('h3');
const session2 = document.createElement('p');
const closureT2 = document.createElement('h3');
const closureList2 = document.createElement('ul');
const cardImg2 = document.createElement('img');
const imgBtn2 = document.createElement('button');
const button2 = document.createElement('img');

// CREATE ELEMENTS FOR SECTION CARD 3
const cardSection3 = document.createElement('section');
const cardT3 = document.createElement('h2');
const addresT3 = document.createElement('h3');
const addres3 = document.createElement('p');
const telephoneT3 = document.createElement('h3');
const telephone3 = document.createElement('p');
const emailT3 = document.createElement('h3');
const email3 = document.createElement('p');
const servicesT3 = document.createElement('h3');
const servicesList3 = document.createElement('ul'); 
const history3 = document.createElement('h3');
const announced3 = document.createElement('p');
const groundbreaking3 = document.createElement('p');
const dedicated3 = document.createElement('p');
const ordinanceT3 = document.createElement('h3');
const ordinance3 = document.createElement('p');
const sessionT3 = document.createElement('h3');
const session3 = document.createElement('p');
const closureT3 = document.createElement('h3');
const closureList3 = document.createElement('ul');
const cardImg3 = document.createElement('img');
const imgBtn3 = document.createElement('button');
const button3 = document.createElement('img');

// CREATE ELEMENTS FOR SECTION CARD 4
const cardSection4 = document.createElement('section');
const cardT4 = document.createElement('h2');
const addresT4 = document.createElement('h3');
const addres4 = document.createElement('p');
const telephoneT4 = document.createElement('h3');
const telephone4 = document.createElement('p');
const emailT4 = document.createElement('h3');
const email4 = document.createElement('p');
const servicesT4 = document.createElement('h3');
const servicesList4 = document.createElement('ul'); 
const history4 = document.createElement('h3');
const announced4 = document.createElement('p');
const groundbreaking4 = document.createElement('p');
const dedicated4 = document.createElement('p');
const ordinanceT4 = document.createElement('h3');
const ordinance4 = document.createElement('p');
const sessionT4 = document.createElement('h3');
const session4 = document.createElement('p');
const closureT4 = document.createElement('h3');
const closureList4 = document.createElement('ul');
const cardImg4 = document.createElement('img');
const imgBtn4 = document.createElement('button');
const button4 = document.createElement('img');


function templeCards(data) {
    
    // display card 1
    cardT1.innerHTML = data.temples[0].name;
    addresT1.innerHTML = 'Addres';
    addres1.innerHTML = data.temples[0].addres;
    telephoneT1.innerHTML = 'Telephone';
    telephone1.innerHTML = data.temples[0].telephone;
    emailT1.innerHTML = 'Email';
    email1.innerHTML = data.temples[0].email;
    servicesT1.innerHTML = 'Services'
    servicesList1.innerHTML = `<li>${data.temples[0].services[0]}</li>
                            <li>${data.temples[0].services[1]}</li>
                            <li>${data.temples[0].services[2]}</li>
                            <li>${data.temples[0].services[3]}</li>`;
    history1.innerHTML = 'History';
    announced1.innerHTML = `<strong>Announced:</strong> ${data.temples[0].announced}`;
    groundbreaking1.innerHTML = `<strong>Groundbreaking:</strong> ${data.temples[0].groundbreaking}`;
    dedicated1.innerHTML = `<strong>Dedicated:</strong> ${data.temples[0].dedicated}`;
    ordinanceT1.innerHTML = 'Ordinance Schedule';
    ordinance1.innerHTML = data.temples[0].ordinances;
    sessionT1.innerHTML = 'Session Schedule';
    session1.innerHTML = data.temples[0].sessions;
    closureT1.innerHTML = 'CLosure Schedule';
    closureList1.innerHTML = `<h4>2022</h4>
                            <li>${data.temples[0].current[0]}</li>
                            <li>${data.temples[0].current[1]}</li>
                            <li>${data.temples[0].current[2]}</li>
                            <h4>2023</h4>
                            <li>${data.temples[0].next[0]}</li>
                            <li>${data.temples[0].next[1]}</li>
                            <li>${data.temples[0].next[2]}</li>
                            <li>${data.temples[0].next[3]}</li>`;
    cardImg1.setAttribute('src', `${data.temples[0].image}`);
    cardImg1.setAttribute('alt', `${data.temples[0].name}`);
    cardImg1.setAttribute('width', `500`);
    button1.setAttribute('src', 'images/heart-regular.svg');
    button1.setAttribute('alt', 'heart icon');
    imgBtn1.setAttribute('id', 'imgBtn1');
    imgBtn1.setAttribute('class', 'none');
    imgBtn1.append(button1);



    cardSection1.append(cardT1);
    cardSection1.append(cardImg1);
    cardSection1.append(addresT1);
    cardSection1.append(addres1);
    cardSection1.append(telephoneT1);
    cardSection1.append(telephone1);
    cardSection1.append(emailT1);
    cardSection1.append(email1);
    cardSection1.append(servicesT1);
    cardSection1.append(servicesList1);
    cardSection1.append(history1);
    cardSection1.append(announced1);
    cardSection1.append(groundbreaking1);
    cardSection1.append(dedicated1);
    cardSection1.append(ordinanceT1);
    cardSection1.append(ordinance1);
    cardSection1.append(sessionT1);
    cardSection1.append(session1);
    cardSection1.append(closureT1);
    cardSection1.append(closureList1);
    // cardSection1.append(imgBtn1);

    // display card 2
    cardT2.innerHTML = data.temples[1].name;
    addresT2.innerHTML = 'Addres';
    addres2.innerHTML = data.temples[1].addres;
    telephoneT2.innerHTML = 'Telephone';
    telephone2.innerHTML = data.temples[1].telephone;
    emailT2.innerHTML = 'Email';
    email2.innerHTML = data.temples[1].email;
    servicesT2.innerHTML = 'Services'
    servicesList2.innerHTML = `<li>${data.temples[1].services[0]}</li>
                            <li>${data.temples[1].services[1]}</li>
                            <li>${data.temples[1].services[2]}</li>
                            <li>${data.temples[1].services[3]}</li>`;
    history2.innerHTML = 'History';
    announced2.innerHTML = `<strong>Announced:</strong> ${data.temples[1].announced}`;
    groundbreaking2.innerHTML = `<strong>Groundbreaking:</strong> ${data.temples[1].groundbreaking}`;
    dedicated2.innerHTML = `<strong>Dedicated:</strong> ${data.temples[1].dedicated}`;
    ordinanceT2.innerHTML = 'Ordinance Schedule';
    ordinance2.innerHTML = data.temples[1].ordinances;
    sessionT2.innerHTML = 'Session Schedule';
    session2.innerHTML = data.temples[1].sessions;
    closureT2.innerHTML = 'CLosure Schedule';
    closureList2.innerHTML = `<h4>2022</h4>
                            <li>${data.temples[1].current[0]}</li>
                            <h4>2023</h4>
                            <li>${data.temples[1].next[0]}</li>
                            <li>${data.temples[1].next[1]}</li>`;
    cardImg2.setAttribute('src', `${data.temples[1].image}`);
    cardImg2.setAttribute('alt', `${data.temples[1].name}`);
    cardImg2.setAttribute('width', `500`);
    button2.setAttribute('src', 'images/heart-regular.svg');
    button2.setAttribute('alt', 'heart icon');
    button2.setAttribute('id', 'like');
    imgBtn2.setAttribute('id', 'imgBtn2');
    imgBtn2.append(button2);



    cardSection2.append(cardT2);
    cardSection2.append(cardImg2);
    cardSection2.append(addresT2);
    cardSection2.append(addres2);
    cardSection2.append(telephoneT2);
    cardSection2.append(telephone2);
    cardSection2.append(emailT2);
    cardSection2.append(email2);
    cardSection2.append(servicesT2);
    cardSection2.append(servicesList2);
    cardSection2.append(history2);
    cardSection2.append(announced2);
    cardSection2.append(groundbreaking2);
    cardSection2.append(dedicated2);
    cardSection2.append(ordinanceT2);
    cardSection2.append(ordinance2);
    cardSection2.append(sessionT2);
    cardSection2.append(session2);
    cardSection2.append(closureT2);
    cardSection2.append(closureList2);
    // cardSection2.append(imgBtn2);

    // display card 3
    cardT3.innerHTML = data.temples[2].name;
    addresT3.innerHTML = 'Addres';
    addres3.innerHTML = data.temples[2].addres;
    telephoneT3.innerHTML = 'Telephone';
    telephone3.innerHTML = data.temples[2].telephone;
    emailT3.innerHTML = 'Email';
    email3.innerHTML = data.temples[2].email;
    servicesT3.innerHTML = 'Services'
    servicesList3.innerHTML = `<li>${data.temples[2].services[0]}</li>
                            <li>${data.temples[2].services[1]}</li>
                            <li>${data.temples[2].services[2]}</li>
                            <li>${data.temples[2].services[3]}</li>`;
    history3.innerHTML = 'History';
    announced3.innerHTML = `<strong>Announced:</strong> ${data.temples[2].announced}`;
    groundbreaking3.innerHTML = `<strong>Groundbreaking:</strong> ${data.temples[2].groundbreaking}`;
    dedicated3.innerHTML = `<strong>Dedicated:</strong> ${data.temples[2].dedicated}`;
    ordinanceT3.innerHTML = 'Ordinance Schedule';
    ordinance3.innerHTML = data.temples[2].ordinances;
    sessionT3.innerHTML = 'Session Schedule';
    session3.innerHTML = data.temples[2].sessions;
    closureT3.innerHTML = 'CLosure Schedule';
    closureList3.innerHTML = `<h4>2022</h4>
                            <li>${data.temples[2].current[0]}</li>
                            <li>${data.temples[2].current[1]}</li>
                            <li>${data.temples[2].current[2]}</li>
                            <li>${data.temples[2].current[3]}</li>
                            <li>${data.temples[2].current[4]}</li>
                            <h4>2023</h4>
                            <li>${data.temples[2].next[0]}</li>
                            <li>${data.temples[2].next[1]}</li>`;
    cardImg3.setAttribute('src', `${data.temples[2].image}`);
    cardImg3.setAttribute('alt', `${data.temples[2].name}`);
    cardImg3.setAttribute('width', `500`);
    button3.setAttribute('src', 'images/heart-regular.svg');
    button3.setAttribute('alt', 'heart icon');
    button3.setAttribute('id', 'like');
    imgBtn3.setAttribute('id', 'imgBtn3');
    imgBtn3.append(button3);



    cardSection3.append(cardT3);
    cardSection3.append(cardImg3);
    cardSection3.append(addresT3);
    cardSection3.append(addres3);
    cardSection3.append(telephoneT3);
    cardSection3.append(telephone3);
    cardSection3.append(emailT3);
    cardSection3.append(email3);
    cardSection3.append(servicesT3);
    cardSection3.append(servicesList3);
    cardSection3.append(history3);
    cardSection3.append(announced3);
    cardSection3.append(groundbreaking3);
    cardSection3.append(dedicated3);
    cardSection3.append(ordinanceT3);
    cardSection3.append(ordinance3);
    cardSection3.append(sessionT3);
    cardSection3.append(session3);
    cardSection3.append(closureT3);
    cardSection3.append(closureList3);
    // cardSection3.append(imgBtn3);

    // display card 4
    cardT4.innerHTML = data.temples[3].name;
    addresT4.innerHTML = 'Addres';
    addres4.innerHTML = data.temples[3].addres;
    telephoneT4.innerHTML = 'Telephone';
    telephone4.innerHTML = data.temples[3].telephone;
    emailT4.innerHTML = 'Email';
    email4.innerHTML = data.temples[3].email;
    servicesT4.innerHTML = 'Services'
    servicesList4.innerHTML = `<li>${data.temples[3].services[0]}</li>
                            <li>${data.temples[3].services[1]}</li>
                            <li>${data.temples[3].services[2]}</li>
                            <li>${data.temples[3].services[3]}</li>`;
    history4.innerHTML = 'History';
    announced4.innerHTML = `<strong>Announced:</strong> ${data.temples[3].announced}`;
    groundbreaking4.innerHTML = `<strong>Groundbreaking:</strong> ${data.temples[3].groundbreaking}`;
    dedicated4.innerHTML = `<strong>Dedicated:</strong> ${data.temples[3].dedicated}`;
    ordinanceT4.innerHTML = 'Ordinance Schedule';
    ordinance4.innerHTML = data.temples[3].ordinances;
    sessionT4.innerHTML = 'Session Schedule';
    session4.innerHTML = data.temples[3].sessions;
    closureT4.innerHTML = 'CLosure Schedule';
    closureList4.innerHTML = `<h4>2022</h4>
                            <li>${data.temples[3].current[0]}</li>
                            <li>${data.temples[3].current[1]}</li>
                            <li>${data.temples[3].current[2]}</li>
                            <li>${data.temples[3].current[3]}</li>
                            <li>${data.temples[3].current[4]}</li>
                            <h4>2023</h4>
                            <li>${data.temples[3].next[0]}</li>
                            <li>${data.temples[3].next[1]}</li>`;
    cardImg4.setAttribute('src', `${data.temples[3].image}`);
    cardImg4.setAttribute('alt', `${data.temples[3].name}`);
    cardImg4.setAttribute('width', `500`);
    button4.setAttribute('src', 'images/heart-regular.svg');
    button4.setAttribute('alt', 'heart icon');
    button4.setAttribute('id', 'like');
    imgBtn4.setAttribute('id', 'imgBtn4');
    imgBtn4.append(button4);



    cardSection4.append(cardT4);
    cardSection4.append(cardImg4);
    cardSection4.append(addresT4);
    cardSection4.append(addres4);
    cardSection4.append(telephoneT4);
    cardSection4.append(telephone4);
    cardSection4.append(emailT4);
    cardSection4.append(email4);
    cardSection4.append(servicesT4);
    cardSection4.append(servicesList4);
    cardSection4.append(history4);
    cardSection4.append(announced4);
    cardSection4.append(groundbreaking4);
    cardSection4.append(dedicated4);
    cardSection4.append(ordinanceT4);
    cardSection4.append(ordinance4);
    cardSection4.append(sessionT4);
    cardSection4.append(session4);
    cardSection4.append(closureT4);
    cardSection4.append(closureList4);
    // cardSection4.append(imgBtn4);



    card1.append(cardSection1);
    card2.append(cardSection2);
    card3.append(cardSection3);
    card4.append(cardSection4);

}



