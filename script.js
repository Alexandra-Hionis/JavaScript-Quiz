const startButton =  document.getElementById("start-button")
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log("stared")
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')

    

    function setTime() {
        var timeEl = document.querySelector(".count");
        var mainEl = document.getElementById("timer");

        var secondsLeft = 75; 
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = 'Timer: ' + secondsLeft;

            if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
            }

        }, 1000);

        setTime();
    }

}


function nextQuestion() {

}


function answerChoice() {

}


const myQuestions = [
    {
    question: "How can you add a comment in a JavaScript?",
    answerChoices: ["\"This is a comment", "//This is a comment", "\\This is a comment", "<!--This is a coment>"],
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
   





































//   const quizContainer = document.getElementById('quiz');
//   const resultsContainer = document.getElementById('results');

//   function makeQuiz(){
       
//     document.getElementById("start-button").click(); 
//       
//WHEN START BUTTON IS PRESSED, FIRST QUESTION APPEARS AND TIMER STARTS

// 

// function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// setTime();