const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');
const sliderLine = document.querySelector('.slider-line');
let position = 0;

next.addEventListener('click', () => {
    position += 256;
    prev.classList.remove('none')
    if (position > 756) {
        next.classList.add('none')
    }
    sliderLine.style.left = -position + 'px';
})

prev.addEventListener('click', () => {
    position -= 256;
    next.classList.remove('none')
    if (position < 256) {
        prev.classList.add('none')
    }
    sliderLine.style.left = -position + 'px';
})