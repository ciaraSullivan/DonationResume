$(function(){
  $('.builderTab').click(function(){
    if ($('.builderTab').siblings('a').hasClass("active")) {
      $(".builderTab").siblings('a').removeClass("active");
    }
  })

  $('#clearButton').click(function() {
    $('#clearModal').modal('show');
  })

  $('#downloadButton').click(function() {
    $('#downloadModal').modal('show');
  })

  $('#previewButton').click(function() {
    $('#previewModal').modal('show');
  })


});