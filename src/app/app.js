import 'core-js/stable';
import 'regenerator-runtime/runtime';
import LocomotiveScroll from 'locomotive-scroll';

// const navbarLogo = document.querySelector('.navbar-logo');
// const hero = document.querySelector('.hero');
const slides = document.querySelectorAll('.slide');
const offerSecInner = document.querySelector('.offer-inner');

const global = {
    slideIndex: 0
}

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

setInterval(() => {
    slides.forEach(e => e.style.opacity = 0)
    slides[global.slideIndex].style.opacity = 1;

    global.slideIndex++;

    if (global.slideIndex === 3) global.slideIndex = 0;
}, 7000)


// const shrinkNav = function(entries) {
//     const [entry] = entries;

//     if (entry.isIntersecting) navbarLogo.style.maxHeight = '4.4rem';
//     else navbarLogo.style.maxHeight = '3rem';
// }

// const navObserver = new IntersectionObserver(shrinkNav, {
//     root: null,
//     threshold: 0.95
// })

// navObserver.observe(hero)

const showSection = function(entries) {
    const [entry] = entries;

    if (entry.isIntersecting) offerSecInner.classList.add('offer-inner-show');
};

const sectionObserver = new IntersectionObserver(showSection, {
    root: null,
    threshold: 0.1
})

sectionObserver.observe(offerSecInner)