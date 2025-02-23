let humanScore = 0;
let computerScore = 0;

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

// TODO Step 6 & fix case
console.log(playRound(getHumanChoice(), getComputerChoice()));