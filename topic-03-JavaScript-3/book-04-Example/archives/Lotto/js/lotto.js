var myNumbers = [];

function checkNums(Lotto, num) {
   x=Lotto.indexOf(num);
   if (x==-1) {;
       return true;
   } else return false;
}

function validNum() {
    document.getElementById('error').textContent="";
    var thevalue=this.value;
    if (thevalue=="" || isNaN(thevalue) || thevalue<1 ||thevalue>47)   {
		msg="Invalid number entry.. Please enter a valid number between 1 and 47";
	    document.getElementById('error').textContent=msg;
	    this.value="";
		this.focus();

    }
    else if  (!checkNums(myNumbers,parseInt(thevalue))) {
	    msg="Number already chosen .. Please enter a valid number between 1 and 47";
	    document.getElementById('error').textContent=msg;
	    this.value="";
		this.focus();
    }
	    else {myNumbers.push(parseInt(thevalue));
	    this.disabled=true;
	    }
}

function formatCurrency(num) {
   /*Unicode Character 'EURO SIGN' \u20ac*/
    num = num.toString().replace(/\u20ac|\,/g,'');
    if(isNaN(num))
    {num = "0";}
    sign = (num == (num = Math.abs(num)));
    num = num.toFixed(2);
    elements= num.split(".");
    num = elements[0];
    cents = elements[1];
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
     {num = num.substring(0,num.length-(4*i+3))+','+
      num.substring(num.length-(4*0+3));
     }
    return (((sign)?'':'-') + '\u20ac' + num + '.' + cents)
 }

function compareNumbers() {
    match=0;
	for (i in lottoNumbers) {
		x=myNumbers.indexOf(lottoNumbers[i]);
		if (x>=0) {
			  match++;
		}
	}
    string="You have matched "+ match + " number(s)."
	switch (match) {
		  case 6:
		   win=1000000;
		   break;
		  case 5:
		   win=100000;
		   break;
		  case 4:
		   win=10000;
		   break;
		  case 3:
		   win=1000;
		   break;
		  case 2:
		   win=100;
		   break;
		  case 1:
		   win=10;
		   break;
		  default:
		   win=0;
    }
	string+="\nYou have won " + formatCurrency(win);
	document.getElementById('results').value=string;
}

function clearNumbers() {
	mylottonumbers=document.getElementById('numbers').getElementsByTagName('input');


	for (i=0; i < mylottonumbers.length; i++) {
		mylottonumbers[i].disabled=false;
		mylottonumbers[i].value="";
}

	thelottonumbers=document.getElementById('lotto').querySelectorAll("input[type=text]");
	for (i=0; i < thelottonumbers.length; i++) {
		thelottonumbers[i].value="";
    }
	document.getElementById('results').value="";

	myNumbers = [];
}

function newNumbers() {
	if (myNumbers.length!=6)  {
	    document.getElementById('p1').innerHTML="<b>You must enter 6 valid numbers first</b>";
	}
	else {
     lottoNumbers = [];
     var i=1;
     while ( i<7) {
         newnum=Math.floor(Math.random()*47+1);
         if (checkNums(lottoNumbers, newnum)) {
	        i++;
	        lottoNumbers.push(newnum);
         }
     }
	    document.getElementById('lnumbers').value=lottoNumbers.sort(function(a,b){return a - b});
	    document.getElementById('mynumbers').value=myNumbers.sort(function(a,b){return a - b});
     compareNumbers();
   }
}

function eraseMsg()
{
	document.getElementById('p1').textContent ="";
}

//Select the input text boxes inside the numbers form.
mylottonumbers=document.getElementById('numbers').getElementsByTagName('input');

//Add a 'blur' and 'focus' event handler for each input text boxes inside the numbers form.
for (i=0; i < mylottonumbers.length; i++) {
  mylottonumbers[i].addEventListener('blur',validNum,false);
  mylottonumbers[i].addEventListener('focus', eraseMsg, false);
}

playgame=document.getElementById('play');

playgame.addEventListener('click',newNumbers,false);


cleargame=document.getElementById('clear');

cleargame.addEventListener('click',clearNumbers,false);



