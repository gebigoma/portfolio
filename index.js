document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

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
  }

});

window.sr = ScrollReveal({ reset: false });
sr.reveal(
    '.reveal', {
       duration: 1000, 
       delay: 100,
       rotate: { x: 10, y: 0, z: 0 },
       distance: '20px', 
       easing: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
       mobile: true,
       viewFactor: 0.4
      });
sr.reveal('.bar');

