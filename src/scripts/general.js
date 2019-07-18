               
$(".nav .nav-link").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).addClass("active");
   console.log('toggling active class');
});
