// Select all elements
const currentQuestion = 0; // Contain index of current question
const score = 0; // Score starts off at 0
const totalQuestions = quizQuestions.length;

const questionEl = document.getElementById("question");
const choiceOne = document.getElementById("choice1");
const choiceTwo = document.getElementById("choice2");
const choiceThree = document.getElementById("choice3");
const choiceFour = document.getElementById("choice4");
const rightWrongMsg = document.getElementById("answer-msg");
const startButton =  document.getElementById("start-button");
const choiceButtons =  document.getElementById("choice-buttons");
const okButton = document.getElementById("ok-button");
const questionContainerElement = document.getElementById('questionCard');
const scoreContainerElement = document.getElementById("scoreCard");
const instructionsContainerElement = document.getElementById('instructionsCard');
const endContainerElement = document.getElementById("endCard")
const playAgainBtn =  document.getElementById("playAgainButton");
const clearBtn =  document.getElementById("clearButton");
const mainEl = document.getElementById("timer");



// querySelector
const timeEl = document.querySelector(".count");


// Hide questions on instuction page 
questionContainerElement.style.display = "none";

// Hide score section on instruction page
scoreContainerElement.style.display = "none";

// Hide play again button on instuction page
playAgainBtn.style.display = "none";

// Hide clear highscores button on instruction page
clearBtn.style.display = "none";

// Hide end section on instructions page
endContainerElement.style.display = "none";

// Click start quiz button
startButton.addEventListener('click', startGame)

// Click any of the answer buttons to move to next question ??
choiceButton.addEventListener('click', getQuestion)



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

        getQuestion(currentQuestion)

        setTimeout  
    });



// Quiz questions are an array of objects with keys
const quizQuestions = [
    { // If questionIndex is 0, this object will be displayed
    question: "How can you add a comment in a JavaScript?",
    choice1: "\"This is a comment",
    choice2: "//This is a comment", 
    choice3: "\\This is a comment",
    choice4: "<!--This is a comment>",
    correctAnswer: "2"
    },

    { // If questionIndex is 1, this object will be displayed
    question: "Where is the correct place to insert a JavaScript?",
    choice1: "<body>", 
    choice2: "<head> and <body>", 
    choice3: "<head>", 
    choice4: "<footer>",
    correctAnswer: "2"
    },

    { // If questionIndex is 2, this object will be displayed
    question: "How does a while loop start?",
    choice1: "while( i<=10; i++", 
    choice2: "while i = 1 to 10", 
    choice3: "while(i == 5)", 
    choice4: "while(i <=10)",
    correctAnswer: "4"
    },

    { // If questionIndex is 3, this object will be displayed
    question: "Inside which HTML element do we put the JavaScript?",
    choice1: "<script>", 
    choice2: "<javascript>", 
    choice3: "<scripting>", 
    choice4: "<js>",
    correctAnswer: "1"
    },
    
    { // If questionIndex is 4, this object will be displayed
    question: "How do you round the number 7.25, to the nearest integer?",
    choice1: "Math.round(7.25)", 
    choice2: "rnd(7.25)", 
    choice3: "Math.rnd(7.25)", 
    choice4: "round(7.25)",
    correctAnswer: "1"
    },
    

    { // If questionIndex is 5, this object will be displayed
    question: "How to write an if statement?",
    choice1: "if i == 5 then", 
    choice2: "IF i = 5 then", 
    choice3: "if (i = 5)", 
    choice4: "if(i == 5)",
    correctAnswer: "4",
    },

    { // If questionIndex is 6, this object will be displayed
    question: "How to write an if statement for executing code that's NOT equal to 5?",
    choice1: "if(! = 5)", 
    choice2: "if i = !", 
    choice3: "if i <! 5", 
    choice4: "if( i <> 5)",
    correctAnswer: "1",
    },

    { // If questionIndex is 7, this object will be displayed
    question: "How does a for loop start?",
    choice1: "for(i = 0; i <= 5)", 
    choice2: "for i = 1 to 5", 
    choice3: "for(i=0; i <=5; i++)", 
    choice4: "while (i <= 5; i++)",
    correctAnswer: "3",
    },

    { // If questionIndex is 8, this object will be displayed
    question: "How do you create a function in JavaScript?",
    choice1: "function = myFunction()", 
    choice2: "function()", 
    choice3: "function my function", 
    choice4: "function myFunction(a,b)",
    correctAnswer: "4",
    },

    { // If questionIndex is 9, this object will be displayed
    question: "How do you write \"Hello World\" in an alert box??",
    choice1: "(\"Hello World\")", 
    choice2: "alertBox(\"Hello World\")", 
    choice3: "alert(\"Hello World\")", 
    choice4: "console.log(\"Hello World\")",
    correctAnswer: "3",
    }
   ];

   

// Load question
function getQuestion (questionIndex) {
    const q = quizQuestions[questionIndex]; // Give a question from one of the question index
    questionEl.textContent =(questionIndex + 1) +'. ' + q.question // Assign question element text content, questionIndex + 1 will give the question number
    choiceOne.textContent = q.choice1;
    choiceTwo.textContent = q.choice2;
    choiceThree.textContent = q.choice3;
    choiceFour.textContent = q.choice4;

    // Show questions 
    questionContainerElement.style.display = "block";

};

//
function showNextQuestion () {



    var selectedChoice = document.getElementById("choice-buttons".clicked == true);
    console.log("clicked")

    const answer = selectedChoice.value; // If choice is selected take value and compare with quizQuestions array

    if(questions[currentQuestions].answer == answer) { // If values are same, question is correct
    addScore += 10; // Increase score by 10 if correct
    console.log("correct")
    }
    selectedChoice.clicked = false;
    currentQuestion++; // Incrementing current position number
    if(currentQuestion == totalQuestions -1) {}
}



// const totalQuestionsIndex = quizQuestions.length; // Should give a total questions count
// const currentQuestions = 0;

function checkAnswer () {
 
    


    

    
}
// When press correct button, next question pops up


// If wrong answer, display "wrong!" for 1 second
setTimeout(function(){ 
    document.getElementById("answer-msg").innerHTML = 'Wrong!';
    }, 1000);
    console.log(setTimeout)
    
        // clear the last question
        // update the question
        // update the answers

function scorePage () {

    // Hide clear highscores button 
    clearBtn.style.display = "none";

    // Hide end section on instructions page
    endContainerElement.style.display = "none";
}

