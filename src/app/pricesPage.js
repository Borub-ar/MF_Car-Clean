import './common';

const contactNavItem = document.querySelector('.contact-item');
const footer = document.querySelector('footer');

contactNavItem.addEventListener('click', () => {
  footer.scrollIntoView({ behavior: 'smooth' });
});
