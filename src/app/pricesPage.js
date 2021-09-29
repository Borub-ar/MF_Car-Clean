'use strict';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { uncheckToggleMenu, hideNavbar } from './common';

const contactNavItem = document.querySelector('.contact-item');
const footer = document.querySelector('footer');
const pricesSection = document.querySelector('.prices-section');

contactNavItem.addEventListener('click', () => {
  footer.scrollIntoView({ behavior: 'smooth' });
  hideNavbar();
  uncheckToggleMenu();
});

const showPrices = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    pricesSection.children.forEach(el => el.classList.add('section-in-view'));
  }
};

const pricesObs = new IntersectionObserver(showPrices, {
  root: null,
  threshold: 0.2,
});

pricesObs.observe(pricesSection);
