const navbarLogo = document.querySelector('.navbar-logo');
const hero = document.querySelector('.hero');
const navigation = document.querySelector('.navbar');
const navToggleBtn = document.querySelector('.nav-toggle-btn');
const toggleMenuCheckbox = document.getElementById('menu-checkbox');
const footer = document.querySelector('footer');

export const uncheckToggleMenu = function () {
  toggleMenuCheckbox.checked = false;
};

export const hideNavbar = function () {
  navigation.classList.remove('show-navbar');
};

const toggleNav = function () {
  navigation.classList.toggle('show-navbar');
};

const showFooter = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    footer.children.forEach(el => el.classList.add('section-in-view'));
  }
};

const footerObs = new IntersectionObserver(showFooter, {
  root: null,
  threshold: 0.2,
});

footerObs.observe(footer);

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

navToggleBtn.addEventListener('click', toggleNav);

navigation.addEventListener('click', () => {
  hideNavbar();
  uncheckToggleMenu();
});
