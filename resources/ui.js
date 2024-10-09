document.addEventListener('DOMContentLoaded', () => {
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

        });
    });

    // Change opacity of navbar on scroll
    const navbar = document.getElementById('navbar');

    document.getElementById('main').addEventListener('scroll', (event) => {
        const alpha = Math.min(event.target.scrollTop, 200) / 200.0;
        navbar.style.backgroundColor = 'rgba(0,0,0,' + alpha + ')';
    });
});
