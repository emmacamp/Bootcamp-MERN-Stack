"use strict";

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    520: {
      slidesPerView: 2
    },
    950: {
      slidesPerView: 3
    }
  }
}); // TYPED JS 

var typed = new Typed('.typed', {
  strings: ['<span class="text-animation">development and sofware ingenier</span>'],
  typeSpeed: 75,
  startDelay: 300,
  backSpeed: 75,
  smartBackspace: true,
  shuffle: false,
  backDelay: 1500,
  loop: true,
  loopCount: 1,
  shouwCursor: true,
  cursorChar: '|',
  contentType: 'html'
}); // UNLOAD EFECTS 
// Funcion unload 

function unload() {
  var unload = document.getElementById("unload");
  unload.classList.add("unload");
} //CARRUCEL


var carrusel = document.querySelector(".carrusel-items");
var maxScrollLeft = carrusel.scrollWidth - carrusel.offsetWidth;
var intervalo = null;
var step = 200;

var start = function start() {
  intervalo = setInterval(function () {
    carrusel.scrollLeft += step;

    if (carrusel.scrollLeft === maxScrollLeft) {
      step = -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * 1;
    }
  }, 40);
};

start(); //Get the button:

var mybutton = document.getElementById("myBtn"); // When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
} // When the user clicks on the button, scroll to the top of the document


function topFunction() {
  document.body.scrollTop = 0; // For Safari

  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}