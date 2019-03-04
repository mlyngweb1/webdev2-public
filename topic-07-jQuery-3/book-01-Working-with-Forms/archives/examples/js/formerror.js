$(document).ready(function(){


  $('li').hide().each(function(index) {
    $(this).delay(450 * index).fadeIn(1600);
  });


  $('#newItemButton').show();
  $('#newItemForm').hide();
  $('#showForm').on('click', function() {
    $('#newItemButton').hide();
    $('#newItemForm').show();
  });


  $('#newItemForm').on('submit', function(e) {
    e.preventDefault();
    var text = $('input:text').val();
    $('ul').append('<li>' + text + '</li>');
    $('input:text').val('');
  });

   $('li').on('click',  function() {
      $(this).animate({
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', function() {
        $(this).remove();
      });
  });

});
