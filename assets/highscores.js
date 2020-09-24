
//variables
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clearButton");
var goBack = document.querySelector("#goBackButton");

// Event listener to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Retreives local stroage 
var lsitedScores = localStorage.getItem("lsitedScores");
lsitedScores = JSON.parse(lsitedScores);

if (lsitedScores !== null) {

    }


// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("index.html");
}); 