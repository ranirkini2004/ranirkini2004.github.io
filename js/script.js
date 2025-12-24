document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize Particles.js
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#6366f1" }, // Changed to Indigo for theme consistency
            "shape": { "type": "circle" },
            "opacity": { "value": 0.3, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#6366f1", // Connecting lines are now Indigo
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "bubble" }, // Changed to bubble for fun effect
                "onclick": { "enable": true, "mode": "push" },
                "resize": true
            },
            "modes": {
                "bubble": { "distance": 200, "size": 6, "duration": 2, "opacity": 0.8 }
            }
        },
        "retina_detect": true
    });

    // 2. Typed.js Animation
    new Typed('#typed-text', {
        strings: ["Intelligent Apps.", "Secure Systems.", "Future Tech."],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        smartBackspace: true
    });

    // 3. Scroll Reveal Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // 4. Mobile Menu
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('toggle');
        });
    });
});