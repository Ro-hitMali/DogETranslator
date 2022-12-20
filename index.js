var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Rohit",
    score: 3,
  },
  {
    name: "Rohan",
    score: 2,
  },
]

/*
function add (numberOne, numberTwo){
  console.log("NumberOne: ", numberOne, "NumberTwo:", numberTwo);
  var sum = numberOne + numberTwo;
  return sum;
}
//use the function 
var result = add (5,7);
console.log("The sum of two numbers is: " + result);
console.log(add(4,6));
*/

// array of objects
var questions = [{
  question: "Where do I live? (Delhi, Maharashtra, Banglore) ",
  answer: "Banglore"
}, {
  question: "My favorite superhero is? (Ironman, superMan, batMan) ",
  answer: "IronMan"
},
{
  question: "Where do I work? (Accenture, SLK, TCS) ",
  answer: "SLK Software"
}, {
  question: "What is my favourite game? (Cricket, Chess, Badminton) ",
  answer: "Chess"
}, {
  question: "What is my hobby? (ReadingBooks, Travelling, bikeRiding) ",
  answer: "Travelling"
}, {
  question: "What is my age? (23,24,25) ",
  answer: "25"
}];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " to DO YOU KNOW Rohit? ");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("Yup! you are right");
    score = score + 1;

  } else {
    console.log("Sry! you are wrong");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores mentioned below, if you want to be there ping me and I'll update it");
  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();