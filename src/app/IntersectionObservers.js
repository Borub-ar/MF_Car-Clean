const navbarLogo = document.querySelector('.navbar-logo');
const hero = document.querySelector('.hero');
const offerSectionInner = document.querySelector('.offer-inner');
const aboutSection = document.querySelector('.about-section');
const aboutCellText = document.querySelectorAll('.cell-text');

const shrinkNav = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) navbarLogo.style.maxHeight = '4.4rem';
  else navbarLogo.style.maxHeight = '3rem';
};

const navObserver = new IntersectionObserver(shrinkNav, {
  root: null,
  threshold: 0.95,
});

navObserver.observe(hero);

const showFirstSection = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) offerSectionInner.classList.add('offer-inner-show');
};

const firstSectionObserver = new IntersectionObserver(showFirstSection, {
  root: null,
  threshold: 0.2,
});

firstSectionObserver.observe(offerSectionInner);

const showSecondSection = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    aboutCellText.forEach((cell) => cell.children.forEach((child) => child.classList.add('cell-text-animation')));
  }
};

const secondSectionObserver = new IntersectionObserver(showSecondSection, {
  root: null,
  threshold: 0.2,
});

secondSectionObserver.observe(aboutSection);
