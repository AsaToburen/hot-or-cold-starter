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

	function genNumber () {
		randomNumber = Math.floor((Math.random() * 100) + 1);
		return randomNumber;
 		}

	function newGame () {
		guessCount = 0;
		genNumber();
		$('#guessList li').remove();
		$('#count').text(guessCount);
		$('#userGuess').val("");
	}
	
	// Get guess from user
	$('#guessButton').click('input', function () {
	  		event.preventDefault();
	  	if(('input' !== null) || ('input' !== NaN) || (1 < 'input' < 101)) {
	  		var userGuess = parseInt($( 'input' ).val());
	  		$('#count').text(++guessCount);
	  		$('#guessList').append("<li>" + userGuess + "</li>");

	  	function guessResponse(userGuess) {
			var distance = Math.abs(randomNumber - userGuess);
			console.log(randomNumber, userGuess, distance);
			if( userGuess == randomNumber) {
				$('#feedback').text('You guessed it!');
			};
			if( distance >= 50) {
				$('#feedback').text('Ice Cold');
				} else if (30 <= distance < 50 ) {
					$('#feedback').text('Cold');
				  }	else if (20 <= distance < 30) {
						$('#feedback').text('Warm');
					}  else if (10 <= distance < 20) {
							$('#feedback').text('Hot');
					};
				};
			};
	
	  	guessResponse(userGuess);
	//new game on click	
	$('.new').on('click', function () {
		newGame();
	 	});
	
	});
});
		 
	 
	


