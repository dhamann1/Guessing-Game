$(document).ready(function() {

	let numGuesses = 0;

	let init = () => {
		numGuesses = 0;
		$('.guessCount').empty().text(0)
	}

	let randomNum = () => {
		return Math.round(Math.random() * 5);
	}

	let winnerNum = randomNum();
	console.log(winnerNum);

	let checkGuess = (guess) => {
		numGuesses++;
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

	$('.resetGame').on('click', function () {
		init()
	});
	init();
});

