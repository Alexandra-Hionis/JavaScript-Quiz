

 var timeEl = document.querySelector(".count");
 var mainEl = document.getElementById("timer");
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');

  function makeQuiz(){

    document.getElementById("start-button").click(); 
      const myQuestions = [
          {
            question: "Inside which HTML element do we put the JavaScript?",
            answers: ["<script>", "<javascript>", "<scripting>", "<js>"],
            correctAnswer: 0
          },
          {
            question: "Where is the correct place to insert a JavaScript?",
            answers: ["<body>", "<head> and <body>", "<head>", "<footer>"],
            correctAnswer: 1
          },
          {
            question: "How do you write \"Hello World\" in an alert box??",
            answers: [ "(\"Hello World\")", "alertBox(\"Hello World\")", "alert(\"Hello World\")", "console.log(\"Hello World\")"],
            correctAnswer: 2
          }
          {
              question: "How does a FOR loop start?",
              answers: ["for(i = 0; i <= 5)", "for i = 1 to 5", "for(i=0; i <=5; i++)", "while (i <= 5; i++)"],
              correctAnswer: 2
            },
            {
              question: "How do you create a function in JavaScript?",
              answers: ["function = myFunction()", "function()", "function my function", "function myFunction(a,b)",],
              correctAnswer: 3
            },
        ];
  }
//WHEN START BUTTON IS PRESSED, FIRST QUESTION APPEARS AND TIMER STARTS

// var secondsLeft = 75; 

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = 'Timer: ' + secondsLeft;

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }

//   }, 1000);
// }

// function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// setTime();