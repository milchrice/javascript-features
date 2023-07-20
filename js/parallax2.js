let title = document.querySelector('.title');
let delayElementsValue2 = 17;
let scrollDelay2 = 0.1;

function scrollTitle() {
  let scrollTop = document.documentElement.scrollTop;
  let currentTransform = getComputedStyle(title).top;
  let delay = delayElementsValue2;
  title.style.top = scrollTop * 2 + 'px';
    
}
    // element.style.transform = currentTransform + 'rotateY(' + scrollTop * 0.0004 + 'deg)';

window.addEventListener('scroll', scrollTitle);

