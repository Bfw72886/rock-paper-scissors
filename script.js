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
        let humanChoice = prompt("Choose rock, paper or scissors!")
        if (humanChoice === "rock" | humanChoice === "paper" | humanChoice === "scissors") {
            return humanChoice;
        } else {
            console.log("Please enter a valid choice. The choice is case-sensitive.");
        }
    }
}

console.log(getHumanChoice());