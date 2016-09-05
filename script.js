'use strict'

$(document).ready(function(){
console.log('ready');


var questionNumber = 0;
var guess = $('.guess').val(); 
var finalAnswer = $('answers[questionNumber]').val();


/*---------------- Intro ---------------*/
$('.introButton').click(function(){
$('.intro').fadeOut('slow');
$('.question').append('<div>' + questions[0].question + '</div>');
var questionNumber = 0;
var choicesTotal = questions[questionNumber].choices.length;
        for (var i = 0; i < choicesTotal; i++) {
        	$('ul').append('<li><input type="radio" class="guess">' + questions[questionNumber].choices[i] + '</li>');
        };
});

console.log(guess);



/*-----------------------------Answers and Questions------------------------------*/
var questions = [
	{
		question: "Undoubtedly one of the most influential film personalities in the history of film, This director is perhaps Hollywood\'s best known director and one of the wealthiest filmmakers in the world. This director has countless big-grossing, critically acclaimed credits to his name, such as: Jaws, Indiana Jones, and Jurassic Park.",
		choices: ["Steven Spielberg", "Tim Burton", "Akira Kurosawa", "Jim Henson"]
	},
	{
		question: "A whiz-kid with special effects, this directors from the Spielberg camp of film-making His earlier films tended to be zany comedy that contained special effect vehicles such as Who Framed Roger Rabbit and Back to the Future. His later films have become more serious, with the hugely successful film Forrest Gump.",
		choices: ["Tom Hanks", "George Lucas", "Robert Zemeckis", "Oliver Stone"]
	},
	{
		question: "This director started out working for Disney. After being allowed to director some of their short animations he was contacted by Pee-Wee Herman to shot Pee-Wee's Big Adventure. Later this director would go on to shot dark, twisted comedies like Beetlejuice, Edward Scissorhands, and The Nightmare Before Christmas.",
		choices: ["Wes Anderson", "Tim Burton", "Donald Duck", "Stanley Kubrick"]
	},
	{
		question: "This director never thought he would make a name of himself in puppetry. After years of working on various projects he finally got his break on a show called Sesame Street. Later, her directed The Muppet Movie and The Dark Crystal.",
		choices: ["Orson Welles", "George Lucas", "Charles Chaplin", "Jim Henson"]
	},
	{
		question: "This director is still considered one of the masters of cinema. He has directed unforgetable movies like: Dr. Strangelove, 2001 Space Odyssey, A Clockwork Orange, and The Shining.",
		choices: ["Roman Polanski", "Stanley Kubrick", "Martin Scorsese", "Peter Jackson"]
	}

];

var answers = ["Steven Spielberg", "Robert Zemeckis", "Tim Burton", "Jim Henson", "Stanley Kubrick"];


//Tell user if he/she got it right or wrong
	// If wrong tell user the correct answer.

//submit starts new question and answers

$('.submit').on('click', function() {
	event.preventDefault();
	$('li').hide();
	$('.question div').hide();
	questionNumber++
	/*---------------------------- Adds Answers -------------------------*/
	var choicesTotal = questions[questionNumber].choices.length;
	
        for (var i = 0; i < choicesTotal; i++) {
        	$('ul').append('<li><input type="radio" class="guess">' + questions[questionNumber].choices[i] + '</li>');
        };
        /*---------------------------- Adds Questions -------------------------*/
        	$('.question').append('<div>' + questions[questionNumber].question) + '<div>';

        /*---------------------------- Adds Counter -------------------------*/	
        console.log(finalAnswer);
        console.log(guess);
     guess === finalAnswer ? alert('yes') : alert('no');

	// function update(j) {
	// 	var n = parseInt(j.text(),10);
	// 	j.text(n + 1);
	// };

// update($('.question-number-count')) update($('.answer-number-count')) : update($('.question-number-count')); 
});




/*------------------ logs answers -----------------*/








/*--------------End Document.ready---------------*/
});




