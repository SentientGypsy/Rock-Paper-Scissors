const rock_button = document.querySelector(".rock-button");
const paper_button = document.querySelector(".paper-button");
const scissor_button = document.querySelector(".scissor-button");
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

function getHumanChoice(choice) {
    //let choice = prompt("Choose Rock Paper or Scissors");
    choice = choice.toLowerCase();
    switch (choice) {
        case "scissors":
            console.log(choice);
            return choice;
            break
        case "rock":
            console.log(choice);
            return choice;
            break;
        case "paper":
            console.log(choice);
            return choice;
            break;
        default:
            return "not a valid input"
    }
    
}


function playRound(getHumanChoice, getComputerChoice) {
    let humanChoice = getHumanChoice;
    let computerChoice = getComputerChoice;
    const playerScore = document.querySelector(".player-score");
    const robotScore = document.querySelector(".computer-score");

    if (humanChoice === "scissors" && computerChoice === "paper") {
        
        humanScore += 1;
        playerScore.textContent = humanScore;
        return "Human wins!";
        
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore += 1;
        playerScore.textContent = humanScore;
        return "Human wins!";

    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
        playerScore.textContent = humanScore;
        return "Human wins!";

    } else if (humanChoice === computerChoice) {
        humanScore += 0;
        playerScore.textContent = humanScore;
        return "it's a tie!";

    } else {
        console.log("Computer wins!");
        computerScore += 1;
        robotScore.textContent = computerScore;
        return "Computer wins!";
    }


}

function checkScore() {
    if (humanScore === 5) {
        window.location.pathname = "./pages/playerwins.html";
    } else if (computerScore === 5) {
        window.location.pathname = "./pages/computerwins.html";
    }
    
}

rock_button.addEventListener("click", () => {
    let humanChoice = getHumanChoice("rock");
    let robotChoice = getComputerChoice();
    let round_winner = playRound(humanChoice, robotChoice);
    const resultsDiv = document.querySelector(".round-winner");
    const playerChoiceText = document.querySelector(".player-choice");
    const computerChoiceText = document.querySelector(".computer-choice");

    playerChoiceText.textContent = humanChoice;
    computerChoiceText.textContent = robotChoice;
    resultsDiv.textContent = round_winner;
    checkScore();


});

paper_button.addEventListener("click", () => {
    let humanChoice = getHumanChoice("paper");
    let robotChoice = getComputerChoice();
    let round_winner = playRound(humanChoice, robotChoice);
    const resultsDiv = document.querySelector(".round-winner");
    const playerChoiceText = document.querySelector(".player-choice");
    const computerChoiceText = document.querySelector(".computer-choice");

    playerChoiceText.textContent = humanChoice;
    computerChoiceText.textContent = robotChoice;
    resultsDiv.textContent = round_winner;
    checkScore();


    
});

scissor_button.addEventListener("click", () => {
    let humanChoice = getHumanChoice("scissors");
    let robotChoice = getComputerChoice();
    let round_winner = playRound(humanChoice, robotChoice);
    const resultsDiv = document.querySelector(".round-winner");
    const playerChoiceText = document.querySelector(".player-choice");
    const computerChoiceText = document.querySelector(".computer-choice");

    playerChoiceText.textContent = humanChoice;
    computerChoiceText.textContent = robotChoice;
    resultsDiv.textContent = round_winner;
    checkScore();

});









//old game logic here
/*
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
    */

