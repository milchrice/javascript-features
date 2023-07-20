const btnMenu = document.querySelector('#btnMenu'); 
const respMenu = document.querySelector('.resp'); 
btnMenu.addEventListener('click', function(){
    respMenu.classList.toggle('toggle');
})