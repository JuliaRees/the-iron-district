$(document).ready(function() {
    
    $('.hamburger-button').click(function(){
        $('.mobile-menu').slideToggle(250);
        $(this).toggleClass('active');
    });

    // Close mobile menu when the close button is clicked
    $('.mobile-menu .close-button').click(function() {
        $('.mobile-menu').slideUp(250);
        $('.hamburger-button').removeClass('active');
    });

    // Close mobile menu when a link is clicked
    $('.mobile-menu a').click(function() {
        $('.mobile-menu').slideUp(250);
        $('.hamburger-button').removeClass('active');
    });

});

// Animate on scroll
AOS.init();