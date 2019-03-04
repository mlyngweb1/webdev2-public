$(document).ready(function(){

  $('#newItemButton').show();
  $('#newItemForm').hide();

  $('#showForm').on('click', function(){
    $('#newItemButton').hide();
    $('#newItemForm').show();
  });

  $('#newItemForm').on('submit', function(e){
    e.preventDefault();
    var newText = $('input:text').val();
    $('ul').after('<li>' + newText + '</li>');
    $('#newItemButton').show();
    $('#newItemForm').hide();
    $('input:text').val('');
  });

});