// script.js
const navbar = document.querySelector('.navbar');
const navbarIcon = document.querySelector('.navbar-icon');

navbarIcon.addEventListener('click', () => {
    navbar.classList.toggle('expanded');
});

navbar.addEventListener('mouseleave', () => {
    navbar.classList.remove('expanded');
});

