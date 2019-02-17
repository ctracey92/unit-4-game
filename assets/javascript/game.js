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
   var randomGem =  Math.floor(Math.random()*(12-2)+ 2);
   return randomGem;
}

//Sets up the variables for the gems
var redGem = 0;
var blueGem = 0;
var greenGem = 0;
var yellowGem = 0;

//Sets up the wins/losses variables
var wins = 0;
var losses = 0;

//Sets up the Page
$(document).ready(
    $("#wins").text("Wins: " + wins),
    $("#losses").text("Losses: " + losses),
    $("#targetNumber").text("Target Number: " + targetNumber),
    $("#currentNumber").text("Current Number: " + currentNumber),
    redGem = gems(),
        console.log(redGem),
    blueGem = gems(),
        console.log(blueGem),
    greenGem = gems(),
        console.log(greenGem),
    yellowGem = gems(),
        console.log(yellowGem),
)

if (currentNumber < targetNumber){

    $("#gem-red").click(function(){
        currentNumber = currentNumber + redGem
        $("#currentNumber").text("Current Number: " + currentNumber)
    });

    $("#gem-blue").click(function(){
        currentNumber = currentNumber + blueGem
        $("#currentNumber").text("Current Number: " + currentNumber)
    });

    $("#gem-green").click(function(){
        currentNumber = currentNumber + greenGem
        $("#currentNumber").text("Current Number: " + currentNumber)
    });

    $("#gem-yellow").click(function(){
        currentNumber = currentNumber + yellowGem
        $("#currentNumber").text("Current Number: " + currentNumber)
    });
}

else if (currentNumber = targetNumber){
    alert("You Win");
    wins++ ;
    $("#wins").text("Wins: " + wins);
}

else {
    alert("You lose");
    losses++ ;
    $("#losses").text("Losses: " + losses);
}

