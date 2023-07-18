let parallax = document.querySelector('.parallax');
let parallax2 = document.querySelector('.parallax2');
let title = document.querySelector('.title');
let title2 = document.querySelector('.title2');
let java = document.querySelector('.java');
let script = document.querySelector('.script');
let c = document.querySelector('.c');
let s1 = document.querySelector('.s1');
let s2 = document.querySelector('.s2');

function scrollParallax() {
  let scrollTop = document.documentElement.scrollTop;
  parallax.style.transform = 'translateY(' + scrollTop * -0.3 + 'px)';
  parallax2.style.transform = 'translateY(' + scrollTop * -0.1 + 'px)';
  title.style.transform = 'translateY(' + scrollTop * 0.8 + 'px)';
  title2.style.transform = 'translateY(' + scrollTop * 0.2 + 'px)';
  java.style.transform = 'translateX(' + scrollTop * -.3 + 'px)';
  script.style.transform = 'translateX(' + scrollTop * .3 + 'px)';
  c.style.transform = 'translateX(' + scrollTop * .5 + 'px)';
  s1.style.transform = 'translateX(' + scrollTop * .7 + 'px)';
  s2.style.transform = 'translateX(' + scrollTop * .9 + 'px)';
}

window.addEventListener('scroll', scrollParallax);
