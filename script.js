'use strict'

$(document).ready(function(){
var counter = 0;
var questionCounter = 1;
var score = 0;
$('.response').hide();



/*-----------------------------Intro------------------------------*/
$('.introButton').click(function() {
	$('.intro').fadeOut('slow');
	$('.question').append('<div>' + questions[0].question + '</div>');
	var choicesTotal = questions[counter].choices.length;
    for (var i = 0; i < choicesTotal; i++) {
    	$('ul').append('<li>' + questions[counter].choices[i] + '</li>');
    }
});


/*-----------------------------Answers and Questions------------------------------*/
var questions = [
	{
		question: "Undoubtedly one of the most influential film personalities in the history of film. This director is perhaps Hollywood\'s best known director and one of the wealthiest filmmakers in the world. This director has countless big-grossing, critically acclaimed credits to his name, such as: Jaws, Indiana Jones, and Jurassic Park.",
		choices: ["Steven Spielberg", "Tim Burton", "Akira Kurosawa", "Jim Henson"]
	},
	{
		question: "A whiz-kid with special effects, this director is from the Spielberg camp of film-making. His earlier films tended to be zany comedies that contained special effect vehicles such as Who Framed Roger Rabbit and Back to the Future. His later movies have become more serious like the hugely successful film Forrest Gump.",
		choices: ["Tom Hanks", "George Lucas", "Robert Zemeckis", "Oliver Stone"]
	},
	{
		question: "This director started out working for Disney. After being allowed to director some of their short animations he was contacted by Pee-Wee Herman to shoot Pee-Wee's Big Adventure. Later this director would go on to film dark, twisted comedies like Beetlejuice, Edward Scissorhands, and The Nightmare Before Christmas.",
		choices: ["Wes Anderson", "Tim Burton", "Donald Duck", "Stanley Kubrick"]
	},
	{
		question: "This director never thought he would make a name of himself in puppetry. After years of working on various projects he finally got his break on a show called Sesame Street. Later, he directed The Muppet Movie and The Dark Crystal.",
		choices: ["Orson Welles", "George Lucas", "Charles Chaplin", "Jim Henson"]
	},
	{
		question: "This director is still considered one of the masters of cinema. He has directed unforgetable movies like: Dr. Strangelove, 2001: A Space Odyssey, A Clockwork Orange, and The Shining.",
		choices: ["Roman Polanski", "Stanley Kubrick", "Martin Scorsese", "Peter Jackson"]
	}

];

var answers = ["Steven Spielberg", "Robert Zemeckis", "Tim Burton", "Jim Henson", "Stanley Kubrick"];

var images = ["Images/jaws.jpg", "Images/BacktotheFuture.jpg","Images/The-nightmare-before-Christmas.jpg", "Images/darkcrystal.jpg", "Images/2001.jpg", "Images/hitchcock.jpg"];
				



/*---------------------------- Click On Answer -------------------------*/  
$('body').on('click', 'ul li', function(){
	var text = $(this).text();
	//Prevents other responses from showing when choices are clicked
	if ( $('.response').css('display') !== 'none' ){
    	return;
	}
	$('.response').show();
	//appends response and adds score
	if (text === answers[counter]) {
		score++;
		counter++;
		$('.answer-number-count').html(score);
		
		$('.response').append('<h2>Very good!</h2>');
	}else{
		$('.response').append('<h2>Oh noooooo the correct answer is ' + answers[counter] + '</h2>');
		counter++;	
	} 

});

	/*---------------------------- Click Next Button -------------------------*/
$('.next').on('click', function() { 
	$('.response').hide();
	$('.response h2').hide();
	$('li').hide();
	$('.question div').hide();
	$('body').css('background-image', "url(" + images[counter] + ')');


	/*---------------------------- Final Score Window -------------------------*/
	
	if (!questions[counter]) {
		$('.answers').hide();
		$('.next').hide();
		$('.question').hide();
		$('.response').show();
		$('.response').append('<h2> You got ' + score +' answers right!</h2>');
		$('body').css('background-image', "url(Images/hitchcock.jpg)");
		$('.response').css('left', '0');
		$('.response').css('top', '204px');
		$('.response h2').css('bottom', '-7px')
		return;
	}

	/*---------------------------- Adds New Choices -------------------------*/
	var choicesTotal = questions[counter].choices.length;
        for (var i = 0; i < choicesTotal; i++) {
        	$('ul').append('<li>' + questions[counter].choices[i] + '</li>');
        }
    /*---------------------------- Adds New Questions -------------------------*/
    $('.question').append('<div>' + questions[counter].question) + '<div>';   	
	/*---------------------------- Question Counter-------------------------*/
	$('.question-number-count').html(counter + 1);
});


/*--------------End Document.ready---------------*/
});




