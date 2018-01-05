$(document).ready(function() {

	let numGuesses = 0;

	let init = () => {
		numGuesses = 0;
	}

	let randomNum = () => {
		console.log('randomNum is working');
		return Math.round(Math.random() * 100);
	}

	let winnerNum = randomNum();
	console.log(winnerNum);

	let checkGuess = (guess) => {
		numGuesses++;
		console.log(numGuesses);
		if (guess == winnerNum) {
			console.log(`You've Won!`);
		} else {
			console.log(`You've Lost!`);
		}
	}

	$('.guessingForm').submit(function(event) {
		event.preventDefault();
		var guess = $('#js-user-guess').val();
		$('#js-user-guess').val('');
		checkGuess(guess);
		$('.guessCount').text(numGuesses);
	});


	init();
});

