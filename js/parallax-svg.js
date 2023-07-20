let frontEl = document.querySelector('.front');
let firstEl = document.querySelector('.first');
let secondEl = document.querySelector('.second');
let thirdEl = document.querySelector('.third');
let fourthEl = document.querySelector('.fourth');
let lastEl = document.querySelector('.last');
let moonEl = document.querySelector('.moon');
let backEL = document.querySelectorAll('.back');
let svgContainer = document.querySelector('.parallax-svg');
let svgTitle = document.querySelector('.svgtitle');

function parallaxSvg() {
    const scrollHeight = document.documentElement.scrollTop;
    svgTitle.style.top = scrollHeight * 0.1 + '%';

    svgContainer.style.height = 100 - (scrollHeight * 0.05) + '%';

    frontEl.style.transform = 'translateY(' + scrollHeight * -0.003 + 'px)';
    firstEl.style.transform = 'translateY(' + scrollHeight * 0.8 + 'px)';
    secondEl.style.transform = 'translateY(' + scrollHeight * 0.7 + 'px)';
    thirdEl.style.transform = 'translateY(' + scrollHeight * 0.6 + 'px)';
    fourthEl.style.transform = 'translateY(' + scrollHeight * 0.08 + 'px)';
    lastEl.style.transform = 'translateY(' + scrollHeight * -0.08 + 'px)';
    moonEl.style.transform = 'translateX(' + scrollHeight * -0.1 + 'px)';

};

window.addEventListener('scroll', parallaxSvg);