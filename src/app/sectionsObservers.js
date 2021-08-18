const offerSectionInner = document.querySelector('.offer-inner');
const aboutSection = document.querySelector('.about-section');
const aboutCellText = document.querySelectorAll('.cell-text');

const showFirstSection = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) offerSectionInner.classList.add('offer-inner-show');
};

const firstSectionObserver = new IntersectionObserver(showFirstSection, {
  root: null,
  threshold: 0.15,
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
  threshold: 0.15,
});

secondSectionObserver.observe(aboutSection);
