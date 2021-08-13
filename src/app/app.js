'use strict';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import LocomotiveScroll from 'locomotive-scroll';
// import PhotoSwipe from 'photoswipe';

import './IntersectionObservers';

const slides = document.querySelectorAll('.slide');
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

setInterval(() => {
  slides.forEach((e) => (e.style.opacity = 0));
  slides[global.slideIndex].style.opacity = 1;

  global.slideIndex++;

  if (global.slideIndex === 3) global.slideIndex = 0;
}, 4000);
