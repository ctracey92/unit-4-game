//Sets up the players current number variable
var currentNumber = 0;

//Function to get random tagrte number between 19-120
function target(){
    var randomNumber = Math.floor(Math.random() * (102 - 19) + 19)
    return randomNumber;
};

//Sets up the Target Number varaible
var targetNumber = target();

//Function to get random number for each gem
function gems(){
    Math.floor(Math.random()*12);
}

//Sets up the variables for the gems
var redGem = gems();
var blueGem = gems();
var greenGem = gems();
var yellowGem = gems();

//Sets up the wins/losses variables
var wins = 0;
var losses = 0;


$(document).ready(
    $("#wins").text("Wins: " + wins),
    $("#losses").text("Losses: " + losses),
    $("#targetNumber").text("Target Number: " + targetNumber),
    $("#currentNumber").text("Current Number: " + currentNumber),
)