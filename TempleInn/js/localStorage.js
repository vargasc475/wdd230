let bogota = window.localStorage.getItem('bogota-ls');
let barranquilla = window.localStorage.getItem('barranquilla-ls');
let caracas = window.localStorage.getItem('caracas-ls');
let rome = window.localStorage.getItem('roma-ls');


let likeBog = 'none';
let likeBarr = 'none';
let likeCar = 'none';
let likeRom = 'none';

const firstBtn = document.querySelector('#imgBtn1');
const secondBtn = document.querySelector('#imgBtn2');
const thirdBtn = document.querySelector('#imgBtn3');
const fourthBtn = document.querySelector('#imgBtn4');



// ACTIVE FIRST BUTTON
firstBtn.addEventListener("click", () => {

    
    if(likeRom === "none") {
        firstBtn.classList.replace('dont-like', 'like-color');
        likeRom = 'Like!';
        window.localStorage.setItem('roma-ls', likeRom);
    } else {
        firstBtn.classList.replace('like-color', 'dont-like');
        likeRom = 'none';
        window.localStorage.setItem('roma-ls', likeRom);    
    }


    
});


function showLikeBtn1(data) {
    if(data === 'Like!') {
        firstBtn.classList.replace('dont-like', 'like-color');
    } else {
        firstBtn.classList.replace('like-color', 'dont-like');
    }

}
showLikeBtn1(rome)

// ACTIVE SECOND BUTTON
secondBtn.addEventListener("click", () => {

    
    if(likeCar === "none") {
        secondBtn.classList.replace('dont-like', 'like-color');
        likeCar = 'Like!';
        window.localStorage.setItem('caracas-ls', likeCar);
    } else {
        secondBtn.classList.replace('like-color', 'dont-like');
        likeCar = 'none';
        window.localStorage.setItem('caracas-ls', likeCar);    
    }


    
});


function showLikeBtn2(data) {
    if(data === 'Like!') {
        secondBtn.classList.replace('dont-like', 'like-color');
    } else {
        secondBtn.classList.replace('like-color', 'dont-like');
    }

}
showLikeBtn2(caracas)

// ACTIVE THIRD BUTTON
thirdBtn.addEventListener("click", () => {

    
    if(likeBog === "none") {
        thirdBtn.classList.replace('dont-like', 'like-color');
        likeBog = 'Like!';
        window.localStorage.setItem('bogota-ls', likeBog);
    } else {
        thirdBtn.classList.replace('like-color', 'dont-like');
        likeBog = 'none';
        window.localStorage.setItem('bogota-ls', likeBog);    
    }


    
});


function showLikeBtn3(data) {
    if(data === 'Like!') {
        thirdBtn.classList.replace('dont-like', 'like-color');
    } else {
        thirdBtn.classList.replace('like-color', 'dont-like');
    }

}
showLikeBtn3(bogota)


// ACTIVE FOURTH BUTTON
fourthBtn.addEventListener("click", () => {

    
    if(likeBarr === "none") {
        fourthBtn.classList.replace('dont-like', 'like-color');
        likeBarr = 'Like!';
        window.localStorage.setItem('barranquilla-ls', likeBarr);
    } else {
        fourthBtn.classList.replace('like-color', 'dont-like');
        likeBarr = 'none';
        window.localStorage.setItem('barranquilla-ls', likeBarr);    
    }


    
});


function showLikeBtn4(data) {
    if(data === 'Like!') {
        fourthBtn.classList.replace('dont-like', 'like-color');
    } else {
        fourthBtn.classList.replace('like-color', 'dont-like');
    }

}
showLikeBtn4(barranquilla)


