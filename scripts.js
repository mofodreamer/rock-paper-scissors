const tools = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
let userChoice = ''; 
let computerChoice = '';

function getComputerChoice() {
    return tools[Math.floor(Math.random() * tools.length)];
}

function game(buttonID) {
    userChoice = buttonID;  
    computerChoice = getComputerChoice();  
    let result = playRound(computerChoice, userChoice);
    updateResult(result);
}

function playRound(computerChoice, userChoice) {
    let result = '';
    if (!(userChoice == 'rock' || userChoice == 'paper' || userChoice == 'scissors')) {
        result = "Your tool doesn't exist.";
    } else if (computerChoice == userChoice) {
        result = "Draw!";
    } else if (
        (computerChoice == 'scissors' && userChoice == 'paper') ||
        (computerChoice == 'paper' && userChoice == 'rock') ||
        (computerChoice == 'rock' && userChoice == 'scissors')
    ) {
        computerScore += 1;
        result = "Computer wins!";
    } else {
        userScore += 1;
        result = "You win!";
    }
    return result;
}

function updateResult(result) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Your choice: ${userChoice}, the computer's: ${computerChoice}. ${result} <br>
    Your score is ${userScore}, computer's score is ${computerScore}.`;
}

// Event listeners for each button
document.getElementById("rock").addEventListener("click", () => game("rock"));
document.getElementById("paper").addEventListener("click", () => game("paper"));
document.getElementById("scissors").addEventListener("click", () => game("scissors"));

resultDiv.style.fontFamily = "Changa, sans-serif";
resultDiv.style.fontSize="1.5em";