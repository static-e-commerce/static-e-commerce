"use strict";
document.addEventListener('DOMContentLoaded', function () {
    const menuHamburger = document.getElementById('menu-hamburger');
    menuHamburger.addEventListener('click', toggleAside);
});
function toggleAside() {
    const aside = document.getElementById('menu-aside');
    const button = document.querySelector('.toggle-aside');
    const buttonIcon = button.querySelector('i');
    aside.classList.toggle('open');
    button.classList.toggle('open');
    if (buttonIcon.classList.contains('fa-bars')) {
        buttonIcon.classList.remove('fa-bars');
        buttonIcon.classList.add('fa-times');
        buttonIcon.setAttribute('aria-label', 'Close menu');
        aside.setAttribute('aria-hidden', 'false');
        aside.setAttribute('aria-expanded', 'true');
        aside.style.setProperty("visibility", "visible");
    }
    else {
        buttonIcon.classList.remove('fa-times');
        buttonIcon.classList.add('fa-bars');
        buttonIcon.setAttribute('aria-label', 'Open menu');
        aside.setAttribute('aria-hidden', 'true');
        aside.setAttribute('aria-expanded', 'false');
        aside.style.setProperty("visibility", "hidden");
    }
}
