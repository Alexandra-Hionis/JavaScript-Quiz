
//variables
var highScore = document.querySelector("#hsList");
var clear = document.querySelector("#clearButton");
var goBack = document.querySelector("#goBackButton");

// Retreives local stroage 
// var highScores = localStorage.getItem(`${initialsText}: ${score}`);
// highScores = JSON.parse(highScores);

// array.push to add to array??


for (var i = 0; i < localStorage.length; i++){
    let initialsText = localStorage.key(i);
    let score = localStorage.getItem(initialsText);
    let li = document.createElement("li");
    li.innerHTML = `${initialsText}: ${score}`;
    let initials = document.querySelector("#highScoresList");
    initials.appendChild(li);
    }



// Event listener to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});




   

   
// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("index.html");
}); 
 



//For highscores
    // Clear todoList element and update todoCountSpan
    // Render a new li for each todo
    // When form is submitted...
    // Return from function early if submitted todoText is blank
    // Add new todoText to todos array, clear the input
    // Re-render the list