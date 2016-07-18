// When the document is ready, set a timeout for 2 seconds
// and play the animation.
$(document).ready(function () {
    setTimeout(function () {
        // After the 2secs, fadeOut the loading animation
        $(".loader").fadeOut("slow");


        // On click of the burger nav, expand it
        $('.mobile-nav').on('click', function () {
            $('.header ul').slideToggle(500, 'easeInOutCubic');
        });
    }, 2000); // parametre is ms of loading time 
}); 


// Smooth scrolling on anchor elements.
// Copied code from SO FeelsGoodMan
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// After the window is on the second section,
// trigger the class 'full-navbar' to create the
// full-fledged fixed navbar
$(window).scroll(function() {
    var height = $(window).scrollTop(); // Get height of window
    
//var position = 600;  <-- Ideal position
    if(height > 600) {
        $(".navbar").addClass("full-navbar");
    }
    else{
        $(".navbar").removeClass("full-navbar");
    }
});