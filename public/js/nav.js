let menu = document.querySelector('.navlinks');
let btn = document.querySelector('.burger');
let cross = document.querySelector('.cross');

btn.addEventListener('click', ()=>{
    menu.classList.toggle('toggler');
})

cross.addEventListener('click', ()=>{
    menu.classList.toggle('toggler');
})