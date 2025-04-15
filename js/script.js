const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('nav');

hamburgerMenu.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamburgerMenu.classList.toggle('open'); // Optional: for the 'X' animation
});