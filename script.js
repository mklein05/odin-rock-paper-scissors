let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    num = Math.floor(Math.random() * 3);
    switch (num){
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    }
}

function getHumanChoice(){
    choice = prompt("Choose rock, paper, or scissors: ");
    return choice.toLowerCase();
}


function playRound(humanChoice, computerChoice){

    if(humanChoice == computerChoice){
        result.textContent = ("Draw! You both picked " + humanChoice); 
    }

    else if(humanChoice == "rock"){
        if(computerChoice == "scissors"){
            result.textContent = printWin(humanChoice, computerChoice);
        }
        else if(computerChoice == "paper"){
            result.textContent = printLoss(humanChoice, computerChoice);
        }
    }

    else if(humanChoice == "paper"){
        if(computerChoice == "scissors"){
            result.textContent = printLoss(humanChoice, computerChoice);
        }
        else if(computerChoice == "rock"){
            result.textContent = printWin(humanChoice, computerChoice);
        }
    }

    else if(humanChoice == "scissors"){
        if(computerChoice == "rock"){
            result.textContent = printLoss(humanChoice, computerChoice);
        }
        else if(computerChoice == "paper"){
            result.textContent = printWin(humanChoice, computerChoice);
        }
    }
    score.innerHTML = printScore();
    checkWin();
}

let result = document.querySelector(".result");
let score = document.querySelector(".score");
let winner = document.querySelector(".winner");

function checkWin(){
    if (humanScore >= 5){
        winner.innerHTML = "Human Wins!";
        console.log("Human")
        buttonContainer.removeEventListener('click', handleButtonClick);
    }
    else if (computerScore >= 5){
        winner.innerHTML = "Computer Wins!";
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

function handleButtonClick(event){
    let target = event.target;

    switch(target.className){
        case 'rock':
            humanChoice = "rock";
            break;
        case 'paper':
            humanChoice = "paper";
            break;
        case 'scissors':
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
