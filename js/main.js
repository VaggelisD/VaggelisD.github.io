$(document).ready(function(){
   
//    $(".burger-nav").on("click", function(){
//        $("nav ul").toggleClass("open");
//    });
    $('.mobile-nav').on('click', function(){
       $('.header ul').slideToggle(500, 'easeInOutCubic');
    });
});