'use strict';

// Variable
const toogleBtn = document.querySelector('#toogle-btn');
const body = document.querySelector('body');

document.getElementById('#toogle-btn');

// Event
toogleBtn.addEventListener('click', ()=> {
    if(toogleBtn.value === 'day') {
        body.style.backgroundColor = 'var(--color-white-incarnadine)'
        toogleBtn.value = 'night'
    } else {
        body.style.backgroundColor = 'var(--color-dark-white)'
        toogleBtn.value = 'day'
    }
})
