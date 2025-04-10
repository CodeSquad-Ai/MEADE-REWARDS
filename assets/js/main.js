$(function () {
    "use strict";
    
    // Preloader Fade Out
    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });

    // Navbar Sticky on Scroll
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
        } else {
            $(".navbar-area").addClass("sticky");
        }
    });

    // Venobox Initialization
    $(document).ready(function () {
        $('.venobox').venobox();
    });

    // WOW.js Initialization
    new WOW().init();

    // Tiny Slider Initialization for Testimonials
    var slider = tns({
        container: '.testimonial-active',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        mouseDrag: true,
        nav: false,
        controlsText: ['<i class="fas fa-angle-left prev"></i>', '<i class="fas fa-angle-right next"></i>'],
    });

    // Smooth Scrolling for Internal Links (without skipping sections)
    $('a[data-scroll-nav]').on('click', function (e) {
        e.preventDefault(); // Prevent the default action of the anchor tag
        var target = $(this).attr('href'); // Get the href value of the clicked link
        var targetOffset = $(target).offset().top; // Get the offset position of the target section

        // Scroll the page to the target section with a smooth animation
        $('html, body').animate({
            scrollTop: targetOffset - 60 // Adjust this value for any fixed navbar if needed
        }, 1000); // 1000 ms duration for the smooth scroll
    });

    // Enable ScrollIt.js for automatic scrolling functionality
    $.scrollIt();

    // Prevent unintended scrolling in testimonial section and ensure it doesn't navigate to "Meet Our Founder" section
    $(".single-testimonial").on('click', function(e) {
        e.stopPropagation();  // Prevent click event from propagating and triggering navigation
    });

    // Prevent accidental section jump (scroll event) triggered by clicking on testimonials
    $(".testimonial-section").on("click", ".single-testimonial", function(e) {
        e.stopImmediatePropagation(); // Prevent any immediate event bubbling
    });
});
