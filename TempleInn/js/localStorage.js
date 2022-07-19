let bogota = window.localStorage.getItem('bogota-ls');
let barranquilla = window.localStorage.getItem('barranquilla-ls');
let caracas = window.localStorage.getItem('caracas-ls');
let roma = window.localStorage.getItem('roma-ls');

let likeBog = 'none';
let likeBarr = 'none';
let likeCar = 'none';
let likeRom = 'none';

window.localStorage.setItem('bogota-ls', likeBog);
window.localStorage.setItem('barranquilla-ls', likeBarr);
window.localStorage.setItem('caracas-ls', likeCar);
window.localStorage.setItem('roma-ls', likeRom);

const firstBtn = document.querySelector('#imgBtn1');
const secondBtn = document.querySelector('#imgBtn2');
const thirdBtn = document.querySelector('#imgBtn3');
const fourthBtn = document.querySelector('#imgBtn4');

firstBtn.addEventListener("click", () => {

    console.log('yes!')
});


