$(document).ready( function() {
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

//generate random number:
newGame();

//Generate Random Number

	function genNumber () {
		randomNumber = Math.floor((Math.random() * 100) + 1);
		return randomNumber;
 		}

//Create new Game, Reset all settings

	function newGame () {
		guessCount = 0;
		genNumber();
		$('#guessList li').remove();
		$('#count').text(guessCount);
		$('#userGuess').val("");
		$('#feedback').text('Make your Guess!');
	}

//Provide response to user's guess
	function guessResponse(userGuess) {
			var distance = Math.abs(randomNumber - userGuess);
			console.log(randomNumber, userGuess, distance);
			if( userGuess === randomNumber) {
				$('#feedback').text('You guessed it!');
			}
//Insert appropriate hot/cold hint, determined by userGuess proximity to random number.

			if( distance >= 50) {
				$('#feedback').text('Ice Cold');
				} else if( distance >= 50) {
 						$('#feedback').text('Ice Cold');
 					} else if (distance < 50 && distance > 30 ) {
 						$('#feedback').text('Cold');
 					} else if(distance < 30 && distance > 20) {
 						$('#feedback').text('Warm');
 					} else if (distance > 10 && distance < 20) {
 						$('#feedback').text('Hot');
 					} else if (distance > 5 && distance < 9) {
 						$('#feedback').text('BURNIN\'');
 					} else if (distance > 1 && distance < 5) {
 						$('#feedback').text('FIRE!!');
 					} else if (userGuess === randomNumber) {
 						$('#feedback').text('You guessed it!');
 					}
 						}
	
	// Get guess from user on button click.
	$('#guessButton').click('input', function () {
	  		event.preventDefault();
	  	if(('input' !== null) || ( isNan('input')) || (1 < 'input' < 101)) {
	  		var userGuess = parseInt($( 'input' ).val());
	  		$('#count').text(++guessCount);
	  		$('#guessList').append("<li>" + userGuess + "</li>");
	  		guessResponse(userGuess);

	  	
	
	//event handler to listen for click on reset button.
	$('.new').on('click', function () {
		newGame();
	 	});
}	
});
	});

		 
	 
		 
	 
	


