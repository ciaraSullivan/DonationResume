$(function(){

  $('.builderTab').click(function(){
    if ($('.builderTab').siblings('a').hasClass("active")) {
      $('.builderTab').siblings('a').removeClass("active");
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

  $('[data-toggle="tooltip"]').tooltip();

  $('sup a').click(function() {
    $(this).toggleClass('fa-plus fa-minus');
  });

});

let name8 = document.getElementById("builderName").value;
let value = name8.value;

updateList = function() {
  var input = document.getElementById('builderFiles');
  var output = document.getElementById('fileList');
  var children = "";
  for (var i = 0; i < input.files.length; ++i) {
      children += '<li>' + input.files.item(i).name + '</li>';
  }
  output.innerHTML = '<ul>'+children+'</ul>';
}

var docDefinition = {
	content: [
		'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
    name8
	]
	//pdfmake
}