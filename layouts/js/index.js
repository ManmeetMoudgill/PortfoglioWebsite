$(document).ready(function(){
    $("#toggle_menu").click(function(){
       $(this).fadeOut("fast",()=>{
          
           $("#close_menu").removeClass("hidden");
           $("#close_menu").addClass("flex","transition-all");
           $("#open_menu").addClass('translate-x-0','transition-all','transform');
           $("#open_menu").removeClass('translate-x-full');
       });
      });


      /* CLOSE THE MENU */
      $("#close_menu").click(()=>{
         
          $("#close_menu").addClass("hidden");
          $("#close_menu").removeClass("flex");
          $("#toggle_menu").fadeIn("fast");
          $("#open_menu").removeClass('translate-x-0');
          $("#open_menu").addClass('translate-x-full');
         
      })
})