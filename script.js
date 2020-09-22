// Select all elements
const startButton =  document.getElementById("start-button");
const questionContainerElement = document.getElementById('question-card');
const scoreContainerElement = document.getElementById("score-card");
const instructionsContainerElement = document.getElementById('instructions-card');
//const question = document.getElementById("question");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const choice4 = document.getElementById("choice-4");

// Hide questions on instuction page
document.getElementById("question-card").style.display = "none";

// Hide score section on insturction page
document.getElementById("score-card").style.display = "none";

// Click start quiz button
startButton.addEventListener('click', startGame)

function startGame() {
    console.log("started")
    
    
    // Hide instructions and button 
    document.getElementById("instructions-card").style.display = "none";

    // Questions will appear
    document.getElementById("question-card").style.display = "block";

   

    
    
    
    
}
    // Timer begins when button is clicked
    var timeEl = document.querySelector(".count");
    var mainEl = document.getElementById("timer");

    document.getElementById("start-button").addEventListener("click", function(){

        //set time to 75 seconds
        var secondsLeft = 75;
        timeEl.textContent = "Timer: " + secondsLeft;


        var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;

        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
        }

        }, 1000);
    });









function answerChoice() {

}


const myQuestions = [
    {
    question: "How can you add a comment in a JavaScript?",
    answerChoices: ["\"This is a comment", "//This is a comment", "\\This is a comment", "<!--This is a comment>"],
    correctAnswer: 1
    },

    {
    question: "Where is the correct place to insert a JavaScript?",
    answerChoices: ["<body>", "<head> and <body>", "<head>", "<footer>"],
    correctAnswer: 1
    },

    {
    question: "How does a while loop start?",
    answerChoices: ["while( i<=10; i++", "while i = 1 to 10", "while(i == 5)", "while(i <=10)"],
    correctAnswer: 3
    },

    
    {
    question: "How do you round the number 7.25, to the nearest integer?",
    answerChoices: ["Math.round(7.25)", "rnd(7.25)", "Math.rnd(7.25)", "round(7.25)"],
    correctAnswer: 0
    },
    

    {
    question: "How to write an if statement?",
    answerChoices: ["if i == 5 then", "IF i = 5 then", "if (i = 5)", "if(i == 5)"],
    correctAnswer: 3
    },

    {
    question: "How to write an if statement for executing code that's NOT equal to 5?",
    answerChoices: ["if(! = 5)", "if i = !", "if i <! 5", "if( i <> 5)"],
    correctAnswer: 0
    },

    {
    question: "How does a for loop start?",
    answerChoices: ["for(i = 0; i <= 5)", "for i = 1 to 5", "for(i=0; i <=5; i++)", "while (i <= 5; i++)"],
    correctAnswer: 2
    },

    {
    question: "How do you create a function in JavaScript?",
    answerChoices: ["function = myFunction()", "function()", "function my function", "function myFunction(a,b)",],
    correctAnswer: 3
    },

    {
    question: "Inside which HTML element do we put the JavaScript?",
    answerChoices: ["<script>", "<javascript>", "<scripting>", "<js>"],
    correctAnswer: 0
    },

    {
    question: "How do you write \"Hello World\" in an alert box??",
    answerChoices: [ "(\"Hello World\")", "alertBox(\"Hello World\")", "alert(\"Hello World\")", "console.log(\"Hello World\")"],
    correctAnswer: 2
    }
   ];