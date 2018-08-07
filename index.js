$(".fade").hide(0).fadeIn(800)

// BURGER MENU
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

// DOM LOAD ANIMATE ARROW
$(document).ready(function() {
  $("#element-to-animate").addClass("animation"); 
  });

  // SCROLL REVEAL
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

// SMOOTH SCROLL TO SECTION
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){ 
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});