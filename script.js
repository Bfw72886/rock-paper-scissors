const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const results = document.querySelector("#results");

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

function playRound(humanChoice, computerChoice = getComputerChoice()) {
    clearResults();

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
        const p = document.createElement("p");
        p.textContent = "You won! " + capitalizedHumanChoice + " beats " + capitalizedComputerChoice;
        results.appendChild(p);
    } else if (computerWon) {
        computerScore++;
        const p = document.createElement("p");
        p.textContent = "You lost! " + capitalizedComputerChoice + " beats " + capitalizedHumanChoice;
        results.appendChild(p);
    } else {
        const p = document.createElement("p");
        p.textContent = "It's a Draw. You both chose " + capitalizedHumanChoice;
        results.appendChild(p);
    } 

    showCurrentScore();
}

function showCurrentScore() {
    const p = document.createElement("p");
    p.textContent = "You: " + humanScore + " Computer: " + computerScore;
    results.appendChild(p);
}

function clearResults() {
    while (results.firstChild) {
        results.removeChild(results.firstChild);
    }
}

/*
function playGame() {
    
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
*/

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));