const mainRef = document.querySelector('.about');
const innerRef = document.querySelector('.about__inner');
const btnRef = document.querySelector('.about__more');
const innerBtnRef = document.querySelector('.inner__close-btn');

btnRef.addEventListener('click', () => {
    mainRef.classList.add('hide');
    innerRef.classList.remove('hide');
})

innerBtnRef.addEventListener('click', () => {
    mainRef.classList.remove('hide');
    innerRef.classList.add('hide');
})