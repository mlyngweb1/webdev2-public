$(document).ready(function(){


  $('li').hide().each(function(index) {
    $(this).delay(450 * index).fadeIn(1600);
  });


  function updateCount() {
    var items = $('li').length;
    $('#counter').text(items);
  }
  updateCount();


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
      $('#newItemButton').show();
      $('#newItemForm').hide();
      $('input:text').val('');
    updateCount();
  });

   $('ul').on('click', 'li', function() {
      $(this).animate({
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', function() {
        $(this).remove();
        updateCount();
      });
  });

});