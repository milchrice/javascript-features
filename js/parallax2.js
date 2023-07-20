let title = document.querySelector('.titleParallax');
let delayElementsValue2 = 17;
let scrollDelay2 = 0.3;

function scrollTitle() {
  let scrollTop = document.documentElement.scrollTop * scrollDelay2;
  let delay = delayElementsValue2;
  title.style.top = scrollTop * 4 + 'px';
    
}
    // element.style.transform = currentTransform + 'rotateY(' + scrollTop * 0.0004 + 'deg)';

window.addEventListener('scroll', scrollTitle);

