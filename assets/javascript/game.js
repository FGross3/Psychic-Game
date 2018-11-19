var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var remainGuess = 10;
var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
var usedLetters = [];
console.log("Right Answer:  " + computerGuess);


document.onkeyup = function(event){
    var userGuess = event.key;
    usedLetters.push(userGuess);
        if (event.key === computerGuess){
            wins++;
            remainGuess = 10;
            usedLetters = [];
            document.getElementById("game").innerHTML = "Correct! Zoltar was thinking of  " + "'" + computerGuess + "'.";
            computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
        }

        else {
            remainGuess--;
            document.getElementById("game").innerHTML = "Nope! Guess Again!";
            document.getElementById("guesses-remain").innerHTML = "Guesses Left:  " + remainGuess;
            document.getElementById("used-letters").innerHTML = "Letters already guessed:  " + usedLetters.join(",");
        }

        if (remainGuess === 0){
            losses++;
            remainGuess = 0;
            document.getElementById("game").innerHTML = "Muahahaha! You did not defeat Zoltar.  He was thinking of  " + "'" + computerGuess + "'" + ".  Try again... if you dare.";
            document.getElementById("guesses-remain").innerHTML = "Guesses Left:  " + remainGuess;
            document.getElementById("used-letters").innerHTML = "Letters already guessed:  " + usedLetters.join(",");
            remainGuess = 10;
            usedLetters = [];
            computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];                    
        }
    
    
    document.getElementById("wins-text").innerHTML = "Wins:  " + wins;
    document.getElementById("losses-text").innerHTML = "Losses:  " + losses;
    
};

