function checkUsername(field) { // Declare function

  var elMsg = document.getElementById('feedback');     // Get feedback element
  if (field.value.length < 5) {                         // If username too short
    elMsg.textContent = 'Username must be 5 characters or more'; // Set msg
    field.value="";
    field.focus();
  } else {                                             // Otherwise
    elMsg.textContent = '';                            // Clear msg
  }
}


function checkPassword() {                            // Declare function
  var elFeedMsg = document.getElementById('feedbackmsg');     // Get feedback element
  re = /[0-9]/;
  re1 = /[a-z]/;
  re2 = /[A-Z]/;
  if ((this.value.length < 6) || (!re.test(this.value)) || (!re1.test(this.value)) || (!re2.test(this.value))) {      // If username too short
    elFeedMsg.textContent = 'Password must be 6 characters or more and contain at least one letter and one number'; // Set msg
  } else {                                             // Otherwise
    elFeedMsg.textContent = '';                            // Clear msg
  }
}



var elUsername = document.getElementById('username');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', function() {checkUsername(this);}, false);

var elPass = document.getElementById('password');  // Get password input
// When it loses focus call checkPassword()
elPass.addEventListener('blur', checkPassword, false);
