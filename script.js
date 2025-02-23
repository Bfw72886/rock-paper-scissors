function getHumanChoice() {
    let isChoiceCorrect = false;
    while(!isChoiceCorrect) {
        let humanChoice = prompt("Choose rock, paper or scissors!").toLowerCase();
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            return humanChoice;
        } else {
            alert("Please enter a valid choice.");
        }
    }
}

function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum <= 0.33) {
        return "rock";
    } else if (randomNum <= 0.66) {
        return "paper";
    } else {
        return "scissors"
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let capitalizedHumanChoice = String(humanChoice).charAt(0).toUpperCase() + String(humanChoice).slice(1);
        let capitalizedComputerChoice = String(computerChoice).charAt(0).toUpperCase() + String(computerChoice).slice(1);
        let humanWon = humanChoice === "rock" && computerChoice === "scissors" || 
                        humanChoice === "paper" && computerChoice === "rock" ||
                        humanChoice === "scissors" && computerChoice === "paper";
        let computerWon = humanChoice === "scissors" && computerChoice === "rock" ||
                        humanChoice === "rock" && computerChoice === "paper" ||
                        humanChoice === "paper" && computerChoice === "scissors";
        if (humanWon) {
            humanScore++;
            return "You won! " + capitalizedHumanChoice + " beats " + capitalizedComputerChoice;
        } else if (computerWon) {
            computerScore++;
            return "You lost! " + capitalizedComputerChoice + " beats " + capitalizedHumanChoice;
        } else {
            return "It's a Draw. You both chose " + capitalizedHumanChoice;
        }
    }

    function currentScore() {
        return "You: " + humanScore + " Computer: " + computerScore;
    }

    for (i = 0; i < 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log(currentScore());
    }

    if (humanScore != computerScore) {
        let finalWinner = (humanScore > computerScore) ? "You" : "Computer";
        console.log("The final winner is: " + finalWinner);    
    } else {
        console.log("The final score is a Draw!")
    }
    console.log(currentScore());
}

playGame();