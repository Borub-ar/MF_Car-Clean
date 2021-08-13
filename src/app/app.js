'use strict';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import LocomotiveScroll from 'locomotive-scroll';
// import PhotoSwipe from 'photoswipe';

import './IntersectionObservers';

const slides = document.querySelectorAll('.slide');
const contactCard = document.querySelector('.card-contact');
const contactTopbar = document.querySelector('.contact-item');
const contactBtn = document.querySelector('.hero-btn');
const offerTopbar = document.querySelector('.offer-item');
const offerSection = document.querySelector('.offer-section');
const whyUsTopbar = document.querySelector('.why-us-item');
const aboutSection = document.querySelector('.about-section');
const galleryTopbar = document.querySelector('.gallery-item');
const gallerySection = document.querySelector('.gallery-section');
const footer = document.querySelector('footer');

const global = {
  slideIndex: 0,
};

const locoScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

window.addEventListener('load', () => {
  locoScroll.update();
});

// const init = function() {

// }

setInterval(() => {
  slides.forEach((e) => (e.style.opacity = 0));
  slides[global.slideIndex].style.opacity = 1;

  global.slideIndex++;

  if (global.slideIndex === 3) global.slideIndex = 0;
}, 4000);

[contactTopbar, contactBtn, contactCard].forEach((el) => {
  el.addEventListener('click', () => {
    locoScroll.scrollTo(footer, {
      offset: -50,
    });
  });
});

offerTopbar.addEventListener('click', () =>
  locoScroll.scrollTo(offerSection, {
    offset: -50,
  })
);

whyUsTopbar.addEventListener('click', () =>
  locoScroll.scrollTo(aboutSection, {
    offset: -50,
  })
);

galleryTopbar.addEventListener('click', () =>
  locoScroll.scrollTo(gallerySection, {
    offset: -50,
  })
);
