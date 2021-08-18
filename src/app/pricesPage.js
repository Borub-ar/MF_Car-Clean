'use strict';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { uncheckToggleMenu, hideNavbar } from './common';

const contactNavItem = document.querySelector('.contact-item');
const footer = document.querySelector('footer');

contactNavItem.addEventListener('click', () => {
  footer.scrollIntoView({ behavior: 'smooth' });
  hideNavbar();
  uncheckToggleMenu();
});
