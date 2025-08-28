document.addEventListener('DOMContentLoaded', () => {

    // --- Typed.js Animation for Hero Text ---
    new Typed('#typed-text', {
        strings: ["Web Developer.", "Programmer.", "Learner."],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
        smartBackspace: true,
    });


    // --- Responsive Navigation (Hamburger Menu) ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle');
    });

    // Close nav when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                // Reset animation for next time
                navLinks.forEach(item => {
                    item.style.animation = '';
                });
            }
        });
    });


    // --- Intersection Observer for Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.15 // Animate when 15% of the element is visible
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

});