$(function(){
  $('.builderTab').click(function(){
    if ($('.builderTab').siblings('a').hasClass("active")) {
      $(".builderTab").siblings('a').removeClass("active");
    }
    $('.navbar-collapse').removeClass('show');
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

  $('[data-toggle="tooltip"]').tooltip()


});

updateList = function() {
  var input = document.getElementById('builderFiles');
  var output = document.getElementById('fileList');
  var children = "";
  for (var i = 0; i < input.files.length; ++i) {
      children += '<li>' + input.files.item(i).name + '</li>';
  }
  output.innerHTML = '<ul>'+children+'</ul>';
}