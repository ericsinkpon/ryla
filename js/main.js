(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    window.addEventListener("scroll", function () {
        var navbar = document.querySelector(".main-navbar");
        if (window.scrollY > 150) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      });



      function startCountdown() {
  const countdown = document.querySelector('.countdown');
  if (!countdown) return;

  const targetDateStr = countdown.getAttribute('data-date');
  if (!targetDateStr) return;

  const targetDate = new Date(targetDateStr).getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      // Temps écoulé, afficher 0 partout
      countdown.querySelector('.days').textContent = '00';
      countdown.querySelector('.hours').textContent = '00';
      countdown.querySelector('.minutes').textContent = '00';
      countdown.querySelector('.seconds').textContent = '00';
      clearInterval(intervalId);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.querySelector('.days').textContent = days.toString().padStart(2, '0');
    countdown.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
    countdown.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
    countdown.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
  }

  update();
  const intervalId = setInterval(update, 1000);
}

// Lancer le compteur quand la page est prête
document.addEventListener('DOMContentLoaded', startCountdown);

      
    // Initiate the wowjs
    new WOW().init();


    // Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // Features Section
    $(".feature-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    // Blogs Section
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    // Features Section
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            }
        }
    });



   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

