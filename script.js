let computerScore = 0;
let humanScore = 0;



let computerRock = document.querySelector(".computerRock");
let computerPaper = document.querySelector(".computerPaper");
let computerScissors = document.querySelector(".computerScissors");

function getComputerChoice(){
    computerRock.classList.remove("selected");
    computerScissors.classList.remove("selected");
    computerPaper.classList.remove("selected");
    num = Math.floor(Math.random() * 3);
    switch (num){
        case 0:
            computerRock.classList.toggle("selected");
            return "rock";
        case 1:
            computerScissors.classList.toggle("selected");
            return "scissors";
        case 2:
            computerPaper.classList.toggle("selected");
            return "paper";
    }
}

function getHumanChoice(){
    choice = prompt("Choose rock, paper, or scissors: ");
    return choice.toLowerCase();
}


function playRound(humanChoice, computerChoice){
    
    if(humanChoice == computerChoice){
        
    }

    else if(humanChoice == "rock"){
        if(computerChoice == "scissors"){
            printWin(humanChoice, computerChoice);
        }
        else if(computerChoice == "paper"){
            printLoss(humanChoice, computerChoice);
        }
    }

    else if(humanChoice == "paper"){
        if(computerChoice == "scissors"){
            printLoss(humanChoice, computerChoice);
        }
        else if(computerChoice == "rock"){
            printWin(humanChoice, computerChoice);
        }
    }

    else if(humanChoice == "scissors"){
        if(computerChoice == "rock"){
            printLoss(humanChoice, computerChoice);
        }
        else if(computerChoice == "paper"){
            printWin(humanChoice, computerChoice);
        }
    }
    humanScoreDisaplay.innerHTML = humanScore;
    computerScoreDisaplay.innerHTML = computerScore;
    checkWin();
}

let result = document.querySelector(".result");
let score = document.querySelector(".score");
let winner = document.querySelector(".winner");

let humanScoreDisaplay = document.querySelector(".human");
let computerScoreDisaplay = document.querySelector(".computer");


function checkWin(){
    if (humanScore >= 5){
        humanScoreDisaplay.classList.toggle("winner");
        computerScoreDisaplay.classList.toggle("loser");
        console.log("Human")
        buttonContainer.removeEventListener('click', handleButtonClick);
    }
    else if (computerScore >= 5){
        computerScoreDisaplay.classList.toggle("winner");
        humanScoreDisaplay.classList.toggle("loser");
        console.log("Computer")
        buttonContainer.removeEventListener('click', handleButtonClick);
    }
}



function printWin(humanChoice, computerChoice){
    humanScore ++;
    return ("You win! " + humanChoice + " beats " + computerChoice + "!");
}

function printLoss(humanChoice, computerChoice){
    computerScore ++;
    return ("You lose! " + computerChoice + " beats " + humanChoice + "!");
}

function printScore(){
    return ("The score is:  ") + '<br>'
     + ("Human: " + humanScore) + '<br>'
     + ("Computer: " + computerScore);
}


let buttonContainer = document.querySelector(".button-container");
let humanRock = document.querySelector(".rock");
let humanPaper = document.querySelector(".paper");
let humanScissors = document.querySelector(".scissors");



function handleButtonClick(event){

    humanRock.classList.remove("selected");
    humanScissors.classList.remove("selected");
    humanPaper.classList.remove("selected");

    let target = event.target;
    switch(target.className){
        case 'rock':
            humanRock.classList.toggle("selected");
            humanChoice = "rock";
            break;
        case 'paper':
            humanPaper.classList.toggle("selected");
            humanChoice = "paper";
            break;
        case 'scissors':
            humanScissors.classList.toggle("selected");
            humanChoice = "scissors";
            break;
    }
    playRound(humanChoice, getComputerChoice());
}

buttonContainer.addEventListener('click', handleButtonClick);



//function playGame(rounds){
//    computerScore = 0;
//    humanScore = 0;
//    for(let i = 0; i < rounds; i++){
//        playRound(getHumanChoice(), getComputerChoice());
//    }
//}

//playGame(5);
