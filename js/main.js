$(document).ready(function(){
    
    // The website loads fast enough, so the animation
    // doesnt have time to play.
    // Thats what the set timeout does
    
   setTimeout(function(){
       // After the 2secs, fadeOut the loading animation
        $(".loader").fadeOut("slow");
       
       // On click of the burger nav, expand it
        $('.mobile-nav').on('click', function(){
           $('.header ul').slideToggle(500, 'easeInOutCubic');
        });
    
   }, 2000);    // parametre is ms of loading time 
});

