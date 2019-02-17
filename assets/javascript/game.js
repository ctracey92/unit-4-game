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

//Function to reset
function reset (){
    targetNumber = target();
    currentNumber = 0;
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#targetNumber").text("Target Number: " + targetNumber);
    $("#currentNumber").text("Current Number: " + currentNumber);
    redGem = gems();
        console.log(redGem);
    blueGem = gems();
        console.log(blueGem);
    greenGem = gems();
        console.log(greenGem);
    yellowGem = gems();
        console.log(yellowGem);
    gameRunning = true;
    console.log("reset complete")
}

//Sets variable for game running
var gameRunning = true;

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
    gameRunning = true,
)


//Function to check for wins
function checkForWin () {
    if (currentNumber < targetNumber){
        gameRunning = true;
    }

    else if (currentNumber == targetNumber){
        alert("You Win");
        wins++ ;
        $("#wins").text("Wins: " + wins);
        gameRunning = false;
        reset();
    }

    else {
        alert("You lose");
        losses++ ;
        $("#losses").text("Losses: " + losses);
        gameRunning = false;
        reset();
    }
}

if (gameRunning == true){
    checkForWin();

    $("#gem-red").click(function(){
        checkForWin();
        currentNumber = currentNumber + redGem;
        $("#currentNumber").text("Current Number: " + currentNumber);
    });

    $("#gem-blue").click(function(){
        checkForWin();
        currentNumber = currentNumber + blueGem;
        $("#currentNumber").text("Current Number: " + currentNumber);
    });

    $("#gem-green").click(function(){
        checkForWin();
        currentNumber = currentNumber + greenGem;
        $("#currentNumber").text("Current Number: " + currentNumber);
    });

    $("#gem-yellow").click(function(){
        checkForWin();
        currentNumber = currentNumber + yellowGem;
        $("#currentNumber").text("Current Number: " + currentNumber);
    });
}





