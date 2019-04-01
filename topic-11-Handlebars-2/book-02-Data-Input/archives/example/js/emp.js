$(document).ready(function() {

const dept = {
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

let template   = Handlebars.compile($("#emp-template").html());
let theCompiledHtml = template(dept);
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

  let theCompiledHtml = template(dept);
  $("#content-placeholder").html(theCompiledHtml);

  $('.empform').modal('hide');
  $('input[type="text"]').each(function() {
		$(this).val("");
  });
  $('input[type="email"]').val("");
  return false;
});

$("#btncall").on('click', function(){
		$(".empform").modal('show');
});

});












