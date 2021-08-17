const navbarLogo = document.querySelector('.navbar-logo');
const hero = document.querySelector('.hero');
const navigation = document.querySelector('.navbar');
// const navToggleBtnWrap = document.querySelector('.toggle-btn-wrap');
const navToggleBtn = document.querySelector('.nav-toggle-btn');

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

const toggleNav = function () {
  navigation.classList.toggle('show-navbar');
};

navToggleBtn.addEventListener('click', toggleNav);
