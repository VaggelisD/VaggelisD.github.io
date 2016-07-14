$(document).ready(function () {
    setTimeout(function () {
        // After the 2secs, fadeOut the loading animation
        $(".loader").fadeOut("slow");


        // On click of the burger nav, expand it

        $('.mobile-nav').on('click', function () {
            $('.header ul').slideToggle(500, 'easeInOutCubic');
        });
    });
}, 2000); // parametre is ms of loading time 


// Smoth scrolling on anchor elements.
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