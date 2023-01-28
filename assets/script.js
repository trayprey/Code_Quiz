var startBtn = document.querySelector("#start");
var question = document.querySelector("#questions");
var finalScore = document.querySelector(".final-score");

function startQuiz() {
    question.style.display = "block";
    
}



var question1 = [
    {
        title: "Commonly used data types DO NOT include.",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "booleans",
    }
];

var question2 = [
    {
        title: "The condition in an if/else statement is enclosed with ________.",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis",
    }
];

var question3 = [
    {
        title: "Arrays in Javascript can be used to store",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above."],
        answer: "all of the above",
    }
];

var question4 = [
    {
        title: "String values must be enclosed within ________ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes",
    }
];

var question5 = [
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "CORRECT ANSWER HERE",
    }
];


startBtn.addEventListener("click", startQuiz);