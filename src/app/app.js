'use strict';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Lightbox from 'lightbox2';

import { uncheckToggleMenu, hideNavbar } from './common';

const slides = document.querySelectorAll('.slide');
const contactCard = document.querySelector('[data-contactCard]');
const contactNavItem = document.querySelector('.contact-item');
const contactBtn = document.querySelector('.hero-btn');
const offerNavItem = document.querySelector('.offer-item');
const offerSection = document.querySelector('.offer-section');
const offerSectionInner = document.querySelector('.offer-inner');
const aboutNavItem = document.querySelector('.about-item');
const aboutSection = document.querySelector('.about-section');
const aboutCellText = document.querySelectorAll('.cell-text');
const galleryNavItem = document.querySelector('.gallery-item');
const gallerySection = document.getElementById('gallery');
const gallerySectionInner = document.querySelector('.gallery-inner');
const footer = document.querySelector('footer');

const global = {
  slideIndex: 0,
};

Lightbox.option({
  resizeDuration: 200,
  disableScrolling: true,
  wrapAround: true,
  positionFromTop: 100,
  alwaysShowNavOnTouchDevices: true,
});

setInterval(() => {
  slides.forEach((e) => (e.style.opacity = 0));
  slides[global.slideIndex].style.opacity = 1;

  global.slideIndex++;

  if (global.slideIndex === 3) global.slideIndex = 0;
}, 7000);

[contactCard, contactBtn, contactNavItem].forEach((el) => {
  el.addEventListener('click', () => {
    footer.scrollIntoView({ behavior: 'smooth' });
    hideNavbar();
    uncheckToggleMenu();
  });
});

offerNavItem.addEventListener('click', () => {
  offerSection.scrollIntoView({ behavior: 'smooth' });
  hideNavbar();
  uncheckToggleMenu();
});

aboutNavItem.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
  hideNavbar();
  uncheckToggleMenu();
});

galleryNavItem.addEventListener('click', () => {
  gallerySection.scrollIntoView({ behavior: 'smooth' });
  hideNavbar();
  uncheckToggleMenu();
});

const pswpElement = document.querySelectorAll('.pswp')[0];

const showOffer = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) offerSectionInner.classList.add('section-in-view');
};

const offerSectionObs = new IntersectionObserver(showOffer, {
  root: null,
  threshold: 0.15,
});

offerSectionObs.observe(offerSectionInner);

const aboutSectionFirst = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    aboutCellText[0].children.forEach((el) => el.classList.add('section-in-view'));
  }
};

const aboutFirstHalfObs = new IntersectionObserver(aboutSectionFirst, {
  root: null,
  threshold: 0.15,
});

aboutFirstHalfObs.observe(aboutCellText[0]);

const aboutSectionSecond = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    aboutCellText[1].children.forEach((el) => el.classList.add('section-in-view'));
  }
};

const aboutSecondHalfObs = new IntersectionObserver(aboutSectionSecond, {
  root: null,
  threshold: 0.2,
});

aboutSecondHalfObs.observe(aboutCellText[1]);

const showGallery = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    gallerySectionInner.classList.add('section-in-view');
  }
};

const galleryObs = new IntersectionObserver(showGallery, {
  root: null,
  threshold: 0.2,
});

galleryObs.observe(gallerySection);
