console.log("testing testing testing")

let humanScore = 0;
let computerScore = 0;
let rounds = 1;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
    let number = getRandomInt(3);
    switch (number) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function getHumanChoice() {
    let choice = prompt("Choose Rock Paper or Scissors");
    choice = choice.toLowerCase();
    switch (choice) {
        case "scissors":
            return choice;
            break
        case "rock":
            return choice;
            break;
        case "paper":
            return choice;
            break;
        default:
            return "not a valid input"
    }
}


function playRound(getHumanChoice, getComputerChoice) {
    let humanChoice = getHumanChoice;
    let computerChoice = getComputerChoice;

    if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Human chose : " + humanChoice + "| Computer chose: " + computerChoice);
        console.log("Human wins!");
        return "Human wins!";
        
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("Human chose : " + humanChoice + "| Computer chose: " + computerChoice);

        console.log("Human wins!");
        return "Human wins!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Human chose : " + humanChoice + "| Computer chose: " + computerChoice);

        console.log("Human wins!");
        return "Human wins!";
    } else if (humanChoice === computerChoice) {
        console.log("Human chose : " + humanChoice + "| Computer chose: " + computerChoice);

        console.log("It's a tie!");
        return "it's a tie!";
    } else {
        console.log("Computer wins!");
        return "Computer wins!";
    }


}


function playGame(){
   let victor = playRound(getHumanChoice(), getComputerChoice());
    if (victor === "Human wins!") {
        humanScore += 1;
        rounds += 1;
    } else if (victor === "it's a tie!") {
        console.log("score unchanged.")
        rounds += 1;
    } else {
        computerScore += 1;
        rounds += 1;
    }

}


while (rounds <= 5) {
    playGame();
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    console.log("Round: " + rounds);
}

if (humanScore > computerScore) {
    console.log("Human wins!");
} else if ( humanScore === computerScore) {
    console.log("its a tie!");
} else {
    console.log("The computer has beaten you!");
}