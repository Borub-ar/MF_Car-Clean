const slides = document.querySelectorAll('.slide');

const global = {
    slideIndex: 0
}

setInterval(() => {
    slides.forEach(e => e.style.opacity = 0)
    slides[global.slideIndex].style.opacity = 1;

    global.slideIndex++;

    if (global.slideIndex === 3) global.slideIndex = 0;
}, 7000)