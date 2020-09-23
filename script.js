// Select all elements
const startButton =  document.getElementById("start-button");
const questionContainerElement = document.getElementById('question-card');
const scoreContainerElement = document.getElementById("score-card");
const instructionsContainerElement = document.getElementById('instructions-card');
const playAgainBtn =  document.getElementById("playagain-button");
const clearBtn =  document.getElementById("clear-button");
var timeEl = document.querySelector(".count");
var mainEl = document.getElementById("timer");

//const question = document.getElementById("question");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const choice4 = document.getElementById("choice-4");

// Hide questions on instuction page
questionContainerElement.style.display = "none";

// Hide score section on instruction page
scoreContainerElement.style.display = "none";

// Hide play again button on instuction page
playAgainBtn.style.display = "none";

// Hide clear highscores button on instruction page
clearBtn.style.display = "none";

// Click start quiz button
startButton.addEventListener('click', startGame)

function startGame() {
    

    // Hide instructions and button 
    instructionsContainerElement.style.display = "none";

    // Show questions section
    questionContainerElement.style.display = "block";
    
}

    // Timer begins when button is clicked
    

    startButton.addEventListener("click", function(){

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

// Quiz questions are an array of objects with keys
const quizQuestions = [
    {
    question: "How can you add a comment in a JavaScript?",
    choice1: "\"This is a comment",
    choice2: "//This is a comment", 
    choice3: "\\This is a comment",
    choice4: "<!--This is a comment>",
    correctAnswer: "2"
    },

    {
    question: "Where is the correct place to insert a JavaScript?",
    choice1: "<body>", 
    choice2: "<head> and <body>", 
    choice3: "<head>", 
    choice4: "<footer>",
    correctAnswer: "2"
    },

    {
    question: "How does a while loop start?",
    choice1: "while( i<=10; i++", 
    choice2: "while i = 1 to 10", 
    choice3: "while(i == 5)", 
    choice4: "while(i <=10)",
    correctAnswer: "4"
    },

    {
    question: "Inside which HTML element do we put the JavaScript?",
    choice1: "<script>", 
    choice2: "<javascript>", 
    choice3: "<scripting>", 
    choice4: "<js>",
    correctAnswer: "1"
    },
    
    {
    question: "How do you round the number 7.25, to the nearest integer?",
    choice1: "Math.round(7.25)", 
    choice2: "rnd(7.25)", 
    choice3: "Math.rnd(7.25)", 
    choice4: "round(7.25)",
    correctAnswer: "1"
    },
    

    {
    question: "How to write an if statement?",
    choice1: "if i == 5 then", 
    choice2: "IF i = 5 then", 
    choice3: "if (i = 5)", 
    choice4: "if(i == 5)",
    correctAnswer: "4",
    },

    {
    question: "How to write an if statement for executing code that's NOT equal to 5?",
    choice1: "if(! = 5)", 
    choice2: "if i = !", 
    choice3: "if i <! 5", 
    choice4: "if( i <> 5)",
    correctAnswer: "1",
    },

    {
    question: "How does a for loop start?",
    choice1: "for(i = 0; i <= 5)", 
    choice2: "for i = 1 to 5", 
    choice3: "for(i=0; i <=5; i++)", 
    choice4: "while (i <= 5; i++)",
    correctAnswer: "3",
    },

    {
    question: "How do you create a function in JavaScript?",
    choice1: "function = myFunction()", 
    choice2: "function()", 
    choice3: "function my function", 
    choice4: "function myFunction(a,b)",
    correctAnswer: "4",
    },

    {
    question: "How do you write \"Hello World\" in an alert box??",
    choice1: "(\"Hello World\")", 
    choice2: "alertBox(\"Hello World\")", 
    choice3: "alert(\"Hello World\")", 
    choice4: "console.log(\"Hello World\")",
    correctAnswer: "3",
    }
   ];

   // Not sure what to dooo
   const QuestionIndex = quizQuestions.length;

   

// Function to make a question and answer

    function startQuestions() {

        // Hide instructions and button 
        instructionsContainerElement.style.display = "none";

        // Show questions section
        questionContainerElement.style.display = "block";

        // Hide score section on instruction page
        scoreContainerElement.style.display = "none";

        // Hide play again button on instuction page
        playAgainBtn.style.display = "none";

        // Hide clear highscores button on instruction page
        clearBtn.style.display = "none";


        


}

// Create a 





function answerChoice() {

}

