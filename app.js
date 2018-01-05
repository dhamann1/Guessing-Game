$(document).ready(function() {

	let numGuesses = 0;

	let init = () => {
		numGuesses = 0;
		randomNum();
	}

	let randomNum = () => {
		console.log('Does this work')
		return Math.round(Math.random() * 100);
	}

	let winnerNum = randomNum();

	let checkGuess = (guess) => {
		numGuesses++;
		console.log(numGuesses);
		if (guess === winnerNum) {
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
	});

	init();
});

