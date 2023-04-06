"use strict";

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Lightbox from "../../node_modules/lightbox2";

import { uncheckToggleMenu, hideNavbar } from "./common";

const slides = document.querySelectorAll(".slide");
const heroPointer = document.querySelector(".hero-pointer");
const contactCard = document.querySelector("[data-contactCard]");
const contactNavItem = document.querySelector(".contact-item");
const contactBtn = document.querySelector(".hero-btn");
const navigation = document.querySelector(".navigation");
const offerSection = document.querySelector(".offer-section");
const offerSectionInner = document.querySelector(".offer-inner");
const aboutCellText = document.querySelectorAll(".cell-text");
const gallerySection = document.querySelector(".gallery-section");
const gallerySectionInner = document.querySelector(".gallery-inner");
const footer = document.querySelector("footer");

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

heroPointer.addEventListener("click", () => {
  offerSection.scrollIntoView({ behavior: "smooth" });
  hideNavbar();
  uncheckToggleMenu();
});

[contactCard, contactBtn, contactNavItem].forEach((el) => {
  el.addEventListener("click", () => {
    footer.scrollIntoView({ behavior: "smooth" });
    hideNavbar();
    uncheckToggleMenu();
  });
});

navigation.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-scroll")) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    hideNavbar();
    uncheckToggleMenu();
  }
});

const showOffer = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) offerSectionInner.classList.add("section-in-view");
};

const offerSectionObs = new IntersectionObserver(showOffer, {
  root: null,
  threshold: 0.15,
});

offerSectionObs.observe(offerSectionInner);

const aboutSectionFirst = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    aboutCellText[0].children.forEach((el) =>
      el.classList.add("section-in-view")
    );
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
    aboutCellText[1].children.forEach((el) =>
      el.classList.add("section-in-view")
    );
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
    gallerySectionInner.classList.add("section-in-view");
  }
};

const galleryObs = new IntersectionObserver(showGallery, {
  root: null,
  threshold: 0.2,
});

galleryObs.observe(gallerySection);
