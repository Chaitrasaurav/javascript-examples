function populate(){
	if(quiz.isEnded()){
		showScores();
	}else{
		var element = document.getElementById('question');
		element.innerHTML = quiz.getQuestionIndex().text;

		var choices = quiz.getQuestionIndex().choices;
		for (var i=0; i<choices.length; i++) {
			var element = document.getElementById('choice' + i);
			element.innerHTML = choices[i];

			guess("btn" + i, choices[i]);
		}

		showProgress();
	}
};

function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}
};

function showScores(){
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'> Your score" + quiz.score +"</h2>";
	document.getElementById('quiz').innerHTML = gameOverHtml;
};

function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById('progress');
	element.innerHTML = "Question" + currentQuestionNumber + " of" + quiz.questions.length;
};

var questions = [
	new Question("Which one is not an object oriented programming language?", ["Java", "c#", "c++", "c"], "c"),
	new Question("What is sum of 2 plus 2?", ["eight", "six", "four", "two"], "four"),
	new Question("Which one is not an object oriented programming language?", ["Java", "c#", "c++", "c"], "c"),
	new Question("Which one is not an object oriented programming language?", ["Java", "c#", "c++", "c"], "c"),
	new Question("Which one is not an object oriented programming language?", ["Java", "c#", "c++", "c"], "c")
];

var quiz = new Quiz(questions);

populate();