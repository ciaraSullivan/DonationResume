$(function(){
  $('.builderTab').click(function(){
    if ($('.builderTab').siblings('a').hasClass("active")) {
      $(".builderTab").siblings('a').removeClass("active");
    }
  })

});