function feedback()
{
var travel = 0;
var room = 0;
var meal= 0;
var rental = 0;
var total = 0;

results=window.open("","thewindow","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, width=300, height=400");
results.document.write('<html><head><title>Results</title></head><body>');

results.document.write("<p>Your name is "+document.getElementById("contactname").value+"</p>");
results.document.write("<p>Your email address is "+document.getElementById("email").value+"</p>");
string = "";
yourroom=document.getElementsByName("room");
if (yourroom[0].checked)
   {
     string="You require a Single room - &euro;80";
     room = parseInt(yourroom[0].value);
   }
else if(yourroom[1].checked)
   {
          string="You require a Double room - &euro;70";
          room = parseInt(yourroom[1].value);
   }
  results.document.write("<p>"+string+"</p>");

string="";
if(document.getElementById("dinner").checked)
{
  meal=parseInt(document.getElementById("dinner").value);
  string ="You require dinner each night"
}
  results.document.write("<p>"+string+"</p>");


string="";
    if(document.getElementById("days").value >0)
    {
		days=parseInt(document.getElementById("days").value);
        string="You are staying for " + document.getElementById("days").value + " days";
    }
  results.document.write("<p>"+string+"</p>");

  rentals=document.getElementById("rentalPackage");

  if(rentals.selectedIndex===0)
   {
    string="You require no Rental Package";
   }
  else if(rentals.selectedIndex===1)
   {
    string="You require a Ski Package - &euro;25";
    rental = parseInt(rentals.value);

   }
  else if(rentals.selectedIndex===2)
   {
    string="You require a Snowboard Package - &euro;30";
     rental = parseInt(rentals.value);
   }

  results.document.write("<p>"+string+"</p>");

  total=(rental+meal+room)*days;
  formattedtotal = '&euro;'+ total.toFixed(2);
  results.document.write("<p><b>The total cost is "+formattedtotal+"</b></p>");
  results.document.write('<p><a href="javascript:self.close()">Close</a></p>');
  results.document.write('</body></html>');
  results.document.close();
}

function checkValue() {
  var elMsg = document.getElementById('feedback');
  if (this.value < 1) {
    elMsg.textContent ='Number of Days must be a positive value (>0)';
    this.value="";
    this.focus();
  }
 else {
    elMsg.textContent = '';
  }

}

document.addEventListener("submit", feedback, false);

var nodays = document.getElementById('days');
nodays.addEventListener('blur', checkValue, false);