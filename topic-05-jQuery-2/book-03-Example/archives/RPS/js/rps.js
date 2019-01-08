function ProcessMove(playerMove) {
   randomNo = Math.floor(Math.random() * 3 + 1);//Generate a random number between 1 and 3
   switch (randomNo) {
      case 1:
         computerMove = "Rock";
         break;
      case 2:
         computerMove = "Paper";
         break;
      case 3:
         computerMove = "Scissors";
         break;
   }

   compare(playerMove, computerMove); // Call the compare function and pass the computer and player moves

   $('#CMove').html(computerMove); // Write Computer Move to the screen
   $('#PMove').html(playerMove); // Write Player Move to the screen
   $('#Msg').html(result); // Write the result (who won) to the screen

}

function compare(playerMove, computerMove) {
   result="";
   if (playerMove === computerMove) {
      result="You tie!";
   }

   switch (computerMove) {
      case "Rock":
         if (playerMove == "Paper") {
            result="You win!";
         }
         if (playerMove == "Scissors") {
            result="You lose!";
         }
         break;
       case "Paper":
         if (playerMove == "Rock") {
            result="You lose!";
         }
         if (playerMove == "Scissors") {
            result="You win!";
         }
         break;
      case "Scissors":
         if (playerMove == "Rock") {
            result="You win!";
         }
         if (playerMove == "Paper") {
            result="You lose!";
         }
         break;
      }
}

$('img').on('click',function() {
   $('img').css('border-color','#F8F8F8');//Each image gets a default border colour
   $(this).css('border-color','#FF4500'); //The image that is selected (clicked) gets a different border colour
   ProcessMove($(this).attr('id')); // Call the function (ProcessMove) and pass the id of the image selected (Rock or Paper or Scissors)
});
