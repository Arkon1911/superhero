// En tu archivo .js
const enlaces = document.querySelectorAll('nav a');

enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        enlaces.forEach(e => e.classList.remove('active'));
        enlace.classList.add('active');
    });
});