// let title = document.querySelector('.title');
let rightElements = document.querySelectorAll('.right');
let leftElements = document.querySelectorAll('.left');
let allElements = document.querySelectorAll('.layer');
let containerParallax = document.querySelector('.parallax2');
let delayElementsValue = 17;
let scrollDelay = 0.2;

function scrollParallax() {
  let scrollTop = document.documentElement.scrollTop * scrollDelay;
  containerParallax.style.height = 100 - (scrollTop * 0.05) + 'vh';


  rightElements.forEach((element, index) => {
    let delay = delayElementsValue * (index);
    element.style.top = scrollTop * -0.09 + '%';
    
    setTimeout(() => {
      element.style.left = scrollTop * 3 + 'px';
    }, delay); 
    // element.style.transform = currentTransform + 'rotateY(' + scrollTop * 0.0004 + 'deg)';
  });
  
  leftElements.forEach((element, index) => {
    let currentTransform = getComputedStyle(element).transform;
    let delay = delayElementsValue * (index);
    element.style.top = scrollTop * -0.09 + '%';
    
    setTimeout(() => {
      element.style.left = scrollTop * -3 + 'px';
    }, delay)
    // element.style.transform = currentTransform + 'rotateY(' + scrollTop * 0.0004 + 'deg)';
  });
  
  allElements.forEach((element, index) => {
    let delay = delayElementsValue * (index);
    element.style.top = scrollTop * -0.09 + '%';
    
    // element.style.transform = currentTransform + 'rotateY(' + scrollTop * 0.0004 + 'deg)';
  });

}

window.addEventListener('scroll', scrollParallax);

// document.addEventListener('mousemove', mouseTrack);

// function mouseTrack(e) {
//   this.querySelectorAll('.layer').forEach(layer => {
//     let speed = layer.getAttribute('data-speed');

//     const x = (window.innerWidth - e.pageX*speed)/1000;
//     const y = (window.innerHeight - e.pageY*speed)/1000;
    
//     const computedStyles = getComputedStyle(layer);
//     const currentTransform = computedStyles.transform;


//     layer.style.transform = `${currentTransform} translateX(${x}px) translateY(${y}px)`;
//   })
// }

