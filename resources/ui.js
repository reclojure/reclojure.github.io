document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

            navbar.classList.toggle('is-burgered');
        });
    });

    // Change opacity of navbar on scroll
    let ticking = false;

    document.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const alpha = Math.min(window.scrollY, 70) / 70.0;
                navbar.style.setProperty('--reclojure-navbar-alpha', alpha);
                ticking = false;
            });
            ticking = true;
        }
    });
});
