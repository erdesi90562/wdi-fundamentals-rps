////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if(move === ("rock" || "paper" || "scissors")){
        return move;
    } else {
        //console.log("error: getting Player Move");
        return getInput();
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if(move === ("rock" || "paper" || "scissors")){
        return move;
    } else {
        //console.log('error: getting Computer Move');
        return randomPlay();
    } 
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
        winner = "tie";
    }else if ((playerMove === "rock") && (computerMove === "scissors")) {
        winner = "player";
    } else if ((playerMove === "scissors") && (computerMove === "paper")) {
        winner = "player";
    } else if ((playerMove === "paper") && (computerMove === "rock")) {
        winner = "player";
    } else {
        winner = "computer";
    };
    return winner;
}

function playToFive() {
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var rounds = 5;
    var winner = null;
    while ((playerWins < rounds) && (computerWins < rounds)) {
        winner = getWinner(getPlayerMove(getInput()), getComputerMove(randomPlay()));

        if(winner === 'computer') {
            computerWins++;
        } else if (winner === 'player'){
            playerWins++;
        } else if (winner === 'tie'){
            console.log('TIE!');
        } else {
            //console.log('Error: Get winner has dirty responce. (playToFive)');
            return;
        }
    }
    return [playerWins, computerWins];
}
playToFive();