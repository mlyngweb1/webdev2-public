$(document).ready(function() {
var dept = {
	title: "Sales",
	employee :[
        {
            'id':1,
		    'firstname': "Fred",
	        'lastname': "Bloggs",
	        'county':'Kilkenny',
	        'email':'fbloggs@gmail.com'
        },
        {
            'id':2,
			'firstname': "Katy",
		    'lastname': "Malone",
		    'county':'Waterford',
		    'email':'kmalone@gmail.com'
	    },
        {
            'id':3,
			'firstname': "Sam",
		    'lastname': "Dunne",
		    'county':'Waterford',
		    'email':'samdunne@gmail.com'
	    }
  ]
  };

var source   = $("#some-template").html();
var template = Handlebars.compile(source);
var theCompiledHtml = template(dept);
$("#content-placeholder").html(theCompiledHtml);

$('#emplist').submit(function(evt) {
	evt.preventDefault();

  newemp= {
	 id:$('#id').val(),
	 firstname:$('#firstname').val(),
	 lastname:$('#lastname').val(),
	 county:$('#county').val(),
	 email:$('#email').val()
  }
  dept.employee.push(newemp);
  var theCompiledHtml = template(dept);
  $("#content-placeholder").html(theCompiledHtml);
  $('#modalForm').modal('hide');
  $('input[type="text"]').each(function() {
		$(this).val("");
  });
  $('input[type="email"]').val("");
  return false;
});
});












