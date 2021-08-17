'use strict';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import './sectionObservers';
import './common'

const slides = document.querySelectorAll('.slide');

const contactCard = document.querySelector('.card-contact');
const contactNavItem = document.querySelector('.contact-item');
const contactBtn = document.querySelector('.hero-btn');
const footer = document.querySelector('footer');

const offerNavItem = document.querySelector('.offer-item');
const offerSection = document.querySelector('.offer-section');

const aboutNavItem = document.querySelector('.about-item');
const aboutSection = document.querySelector('.about-section');

const galleryNavItem = document.querySelector('.gallery-item');
const gallerySection = document.querySelector('.gallery-section');


const global = {
  slideIndex: 0,
};

[contactCard, contactBtn, contactNavItem].forEach(el => {
  el.addEventListener('click', () => {
    footer.scrollIntoView({ behavior: 'smooth' });
  })
})

offerNavItem.addEventListener('click', () => {
  offerSection.scrollIntoView({ behavior: 'smooth' });
})

aboutNavItem.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
})

galleryNavItem.addEventListener('click', () => {
  gallerySection.scrollIntoView({ behavior: 'smooth' });
})



const pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
const items = [
    {
        src: 'https://api.time.com/wp-content/uploads/2015/02/cats.jpg?quality=85&w=1024&h=512&crop=1',
        w: 600,
        h: 400
    },
    {
        src: 'https://placekitten.com/1200/900',
        w: 1200,
        h: 900
    }
];

// define options (if needed)
const options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
const gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
// gallery.init();






















setInterval(() => {
  slides.forEach((e) => (e.style.opacity = 0));
  slides[global.slideIndex].style.opacity = 1;

  global.slideIndex++;

  if (global.slideIndex === 3) global.slideIndex = 0;
}, 7000);




