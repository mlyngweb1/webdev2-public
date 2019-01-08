function checkUsername() { // Declare function

  var elMsg = document.getElementById('feedback');     // Get feedback element
  if (this.value.length < 5) {                         // If username too short
    elMsg.textContent = 'Username must be 5 characters or more'; // Set msg
    this.value="";                                     // Clear the text box
    this.focus();                                      // Return focus to the text box
  } else {                                             // Otherwise
    elMsg.textContent = '';                            // Clear msg
  }
}

function checkPassword() {                            // Declare function
  var elFeedMsg = document.getElementById('feedbackmsg');     // Get feedback element
  re = /[0-9]/;                                       // Set up a regular expression (all numbers)
  re1 = /[a-z]/;                                      // Set up a regular expression (all lowercase letters)
  re2 = /[A-Z]/;                                      // Set up a regular expression (all uppercase letters)
  if ((this.value.length < 6) || (!re.test(this.value)) || (!re1.test(this.value)) || (!re2.test(this.value))) {
	  // If password is too short or includes no number or no lowercase or uppercase letter
    elFeedMsg.textContent = 'Password must be 6 characters or more and contain at least one letter (upper and lower case) and one number'; // Set msg
    this.value="";                                     // Clear the text box
    this.focus();                                      // Return focus to the text box
  } else {                                             // Otherwise
    elFeedMsg.textContent = '';                        // Clear msg
  }
}

function feedback() {
	alert("Thank you "+document.getElementById("username").value+" for your submission");
}

var elUsername = document.getElementById('username');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);

var elPass = document.getElementById('password');  // Get password input
// When it loses focus call checkPassword()
elPass.addEventListener('blur', checkPassword, false);

// When the form is submitted call feedback()
document.addEventListener("submit", feedback, false);